import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css /loader.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ message: 'Enter search term', position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({ message: 'No images found', position: 'topRight' });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    iziToast.error({ message: 'Something went wrong', position: 'topRight' });
  } finally {
    hideLoader();
  }
});
