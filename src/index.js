import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const select = new SlimSelect({
  select: '#selectElement',
});

const refs = {
  selectEl: document.querySelector('#selectElement'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
  catInfoContainer: document.querySelector('.cat-info'),
};

function showLoader() {
  refs.loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loaderEl.classList.add('is-hidden');
}

function showContainer() {
  refs.catInfoContainer.classList.remove('is-hidden');
}



function showError() {
  refs.errorEl.classList.remove('is-hidden');
}

function hideError() {
  refs.errorEl.classList.add('is-hidden');
}

function handleFetchError(err) {
  hideLoader();
  hideContainer();
  showError();
  Notiflix.Notify.failure(`Error: ${err.message}`);
}

fetchBreeds()
  .then(res => {
    const options = res.map(({ reference_image_id, name }) => ({
      value: reference_image_id,
      text: name,
    }));
    options.unshift({ value: '', text: '' });
    select.setData(options);
    hideLoader();
    showContainer();
  })
  .catch(handleFetchError);

let isFirstLoad = true;
refs.selectEl.addEventListener('change', event => {
  const breedId = event.target.value;
  showLoader();
  hideError();
  fetchCatByBreed(breedId)
    .then(res => {
      if (isFirstLoad) {
        isFirstLoad = false;
        return;
      }
      console.log(res);
      const {
        url,
        breeds: [{ name, description, temperament }],
      } = res;
      const markup = `
        <img src="${url}" alt="${name}">
        <div class="title">
          <h3>${name}</h3>
          <p>${description}</p>
          <p><strong>Temperament:</strong> ${temperament}</p>
        </div>
      `;

      refs.catInfoContainer.innerHTML = markup;
      hideLoader();
      refs.selectEl.value = '';
    })
    .catch(handleFetchError)
    .finally(() => {
      hideLoader();
    });
});
