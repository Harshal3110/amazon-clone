import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-70dcc.cloudfunctions.net/api",
  // 'http://localhost:5001/challenge-70dcc/us-central1/api' //The API {cloud function} URL
});

export default instance;
