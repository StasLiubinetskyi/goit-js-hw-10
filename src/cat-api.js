const YOUR_API_KEY =
  'live_StFJuQrjrLxUbZHjXuy4xvVkX5F8Glrm5OK6AwPQEf5ETNQZiWPko1KC4BSHcjub';
const url = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': YOUR_API_KEY,
    },
  };

  return fetch(`${url}breeds`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`Error: ${error.message}`);
    });
}

function fetchCatByBreed(breedId) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': YOUR_API_KEY,
    },
  };

  return fetch(`${url}images/${breedId}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`Error: ${error.message}`);
    });
}

export { fetchBreeds, fetchCatByBreed };
