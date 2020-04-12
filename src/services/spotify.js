import {firebase} from "./firebase";
import querystring from 'querystring';  
import {apiRequest} from '../helpers/apiRequest';

var scope = 'streaming';
var state = firebase.auth().currentUser ? firebase.auth().currentUser.uid : "";

const client_id = 'a72de9cdda314bc58b043dac09a81c3c';
const redirect_uri= 'http://localhost:3000/app';

export const authHandler = async (values) => {
    try {
      //setLoading(true);
      const userData = await apiRequest(
        'https://accounts.spotify.com/authorize?'+ querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }),
        'get',
      );
      return userData;
    } catch (err) {
      //setLoading(false);
      return err;
    }
  };


  