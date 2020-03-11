const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json'
});

const get = url => {
  return fetch(url, {
    method: 'GET',
    headers
  })
    .then(response => handleResponse(url, response))
    .catch(error => {
      console.error(`Request failed. Url = ${url}. Message = ${error}`);
      return Promise.reject({
        error: { message: 'Request failed' }
      });
    });
};

const post = (url, data) => {
  return fetch(url, {
    method: 'GET',
    headers,
    body: data
  })
    .then(response => handleResponse(url, response))
    .catch(error => {
      console.error(`Request failed. Url = ${url}. Message = ${error}`);
      return Promise.reject({
        error: { message: 'Request failed' }
      });
    });
};

const handleResponse = (url, response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    console.error(`Request failed. Url = ${url}`);
    return Promise.reject({
      error: { message: 'Request failed due to server error' }
    });
  }
};

export { get, post };
