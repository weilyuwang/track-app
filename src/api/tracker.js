import axios from "axios";

export default axios.create({
    // the baseURL below points to Ngrok url, which redirects to express server.
    // note that the ngrok will change every 8 hours (session expired), we need to restart ngrok
    // and update the baseURL value every 8 hours
    baseURL: "http://48713e59.ngrok.io",
});
