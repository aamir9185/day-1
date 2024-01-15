const axios = require("axios");
const url_path = "http://www.boredapi.com/api/activity/";

function readAPI(url) {
  let response = axios.get(url);

  response.then(function (data_object) {
    console.log(data_object);
  });
}

readAPI(url_path);
