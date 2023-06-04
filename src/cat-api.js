const API_KEY =
  'live_StFJuQrjrLxUbZHjXuy4xvVkX5F8Glrm5OK6AwPQEf5ETNQZiWPko1KC4BSHcjub';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': API_KEY,
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      const cat = data[0];
      return {
        url: cat.url,
        description: cat.breeds[0].description,
      };
    })
    .catch(error => {
      throw error;
    });
}
