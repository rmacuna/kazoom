import React, { useEffect, useState, useRef } from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { client, createLocalStream } from "../../services/agora";

/**
 *
 * @param {Object} props
 */
const Room = ({ uid }) => {
  const gridRef = useRef();
  const [remoteStreams, setRemoteStreams] = useState([]);

  useEffect(() => {
    let localStream = createLocalStream(uid);

    localStream.init(
      () => {
        localStream.play("local-video", { fit: "cover" });

        client.publish(localStream, function (err) {
          console.error("publish failed", err);
        });
      },
      (err) => {
        console.error(err);
      }
    );

    client.on("stream-added", function (evt) {
      const remoteStream = evt.stream;
      const id = remoteStream.getId();

      if (id !== uid) {
        client.subscribe(remoteStream, function (err) {
          console.log("stream subscribe failed", err);
        });
      }

      console.log("stream-added remote-uid: ", id);
    });

    client.on("stream-subscribed", function (evt) {
      const remoteStream = evt.stream;
      const id = remoteStream.getId();

      const v = document.createElement("div");
      v.id = "remote_video_" + id;
      v.style = "height: 300px; width: 300px";

      document.querySelector("#video-grid").appendChild(v);
      remoteStream.play("remote_video_" + id);

      setRemoteStreams([...remoteStreams, remoteStream]);
    });

    client.on("stream-removed", function (evt) {
      const remoteStream = evt.stream;
      const id = remoteStream.getId();

      remoteStream.stop("remote_video_" + id);
      document
        .querySelector("#video-grid")
        .removeChild(document.querySelector("#remote_video_" + id));

      console.log("CLOSING REMOTE STREAM");
      console.log("stream-removed remote-uid: ", id);

      setRemoteStreams(remoteStreams.filter((stream) => stream.getId() !== id));
    });

    return () => {
      client.leave(
        function () {
          localStream.stop();
          localStream.close();

          // Stop playing the remote streams and remove the views
          while (remoteStreams.length > 0) {
            const stream = remoteStreams.shift();
            const id = stream.getId();

            stream.stop();

            document
              .querySelector("#video-grid")
              .removeChild(document.querySelector("#remote_video_" + id));
          }
          console.log("client leaves channel success");
        },
        function (err) {
          console.log("channel leave failed");
          console.error(err);
        }
      );
    };
  }, []);

  return (
    <SimpleGrid id="video-grid" columns={0} spacing={2} ref={gridRef}>
      <div
        id="local-video"
        style={{
          height: "300px",
          width: "300px",
        }}
      ></div>
    </SimpleGrid>
  );
};

export default Room;
