import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function populateBreeds() {
  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
    });
}

function displayCatInfo(breedId) {
  fetchCatByBreed(breedId)
    .then(cat => {
      const img = document.createElement('img');
      img.src = cat.url;

      const name = document.createElement('h3');
      name.textContent = `Breed: ${
        breedSelect.options[breedSelect.selectedIndex].text
      }`;

      const description = document.createElement('p');
      description.textContent = `Description: ${cat.description}`;

      catInfo.innerHTML = '';
      catInfo.appendChild(img);
      catInfo.appendChild(name);
      catInfo.appendChild(description);
    })
    .catch(error => {
      console.error('Error fetching cat info:', error);
    });
}

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  if (selectedBreedId) {
    loader.style.display = 'block';
    catInfo.innerHTML = '';

    displayCatInfo(selectedBreedId).finally(() => {
      loader.style.display = 'none';
    });
  }
});

populateBreeds();
