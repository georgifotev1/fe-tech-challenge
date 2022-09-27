import axios from "axios";

export function getData(path, responseHandler) {
  axios
    .get("http://localhost:3030" + path)
    .then((response) => {
      responseHandler(response.data);
    })
    .catch((error) => alert(error.message));
}

export function postData(path, data) {
  axios
    .post("http://localhost:3030" + path, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => alert(error.message));
}
