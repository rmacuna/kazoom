import { firebase } from "./firebase";
import querystring from "querystring";
import { apiRequest } from "../helpers/apiRequest";

const client_id = "a72de9cdda314bc58b043dac09a81c3c";
const redirect_uri = "http://localhost:3000/app";

export const authHandler = async (token, track) => {
    const response = await fetch("https://api.spotify.com/v1/search?" +
    querystring.stringify({
        q: track,
        type: "track",
        limit: 10,
    }), {
    get,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Barer "+token
        ...headers
    },
    });

    const urlPreview

    console.log(response)
    return urlPreview;
    );
};
