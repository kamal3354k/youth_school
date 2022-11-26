import axios from "axios";

export const getAllUser = () =>
  axios
    .get(
      "https://script.google.com/macros/s/AKfycbwQLjapS0mejKbwjL7PEPfY6rX5vH8FkcUTwtVDHmZQMM3wgSM3ytwbnbb0ByCjo4jd/exec"
    )
    .then((res) => res.data);
export const postUser = (user) =>
  axios
    .post(
      "https://script.google.com/macros/s/AKfycbwQLjapS0mejKbwjL7PEPfY6rX5vH8FkcUTwtVDHmZQMM3wgSM3ytwbnbb0ByCjo4jd/exec?action=addUser",JSON.stringify(user)
    )
    .then((res) => res);
