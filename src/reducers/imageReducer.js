import {
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from '../actions/imageActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_BEGIN:
      // Set loading to true so we can show a spinner
      // Reset any errors when we start fetching
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_IMAGES_SUCCESS:
      // Set loading to false when fetch is successfull
      // Replace the items with the ones that are fetched
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case FETCH_IMAGES_FAILURE:
      // Set loading to false if fetch is failed
      // Save the error to display

      return {
        ...state,
        loading: false,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
}
