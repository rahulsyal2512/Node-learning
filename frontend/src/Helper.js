import 'whatwg-fetch';

const BaseUrl = "http://localhost:3000/v1";

const Helper = (url, method, body) => {
  return(
    fetch(BaseUrl + url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      })
    );
};

export default Helper;

