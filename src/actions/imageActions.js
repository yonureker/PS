export const FETCH_IMAGES_BEGIN = 'FETCH_IMAGES_BEGIN';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export const fetchImagesBegin = () => ({
  type: FETCH_IMAGES_BEGIN,
});

export const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});

export function fetchImages() {
  return async dispatch => {
    dispatch(fetchImagesBegin());
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      const res = await handleErrors(response);
      const data = await res.json();
      dispatch(fetchImagesSuccess(data));
    } catch (error) {
      return dispatch(fetchImagesFailure(error));
    }
  };
}

// Handle HTTP errors with fetch.
// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
