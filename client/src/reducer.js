import * as CONSTANT from './constant';

const initialState = {
  [CONSTANT.LOADING]: false,
  [CONSTANT.TOKEN]: '',
  [CONSTANT.ERROR]: '',
  [CONSTANT.OPENED_MODAL]: null,
  [CONSTANT.OPENED_MODAL_ITEM]: null,
  [CONSTANT.WORKERS_LIST]: [],
  [CONSTANT.PAGE]: 1,
  [CONSTANT.PAGE_COUNT]: 1,
  [CONSTANT.QUERY]: '',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
    case CONSTANT.LOADING: {
      return {
        ...state,
        [CONSTANT.LOADING]: action.payload,
      };
    }

    case CONSTANT.TOKEN: {
      return {
        ...state,
        [CONSTANT.TOKEN]: action.payload,
      };
    }

    case CONSTANT.ERROR: {
      return {
        ...state,
        [CONSTANT.ERROR]: action.payload,
      };
    }

    case CONSTANT.OPENED_MODAL: {
      return {
        ...state,
        [CONSTANT.OPENED_MODAL]: action.payload,
        [CONSTANT.OPENED_MODAL_ITEM]: action.item,
      };
    }

    case CONSTANT.WORKERS_LIST: {
      return {
        ...state,
        [CONSTANT.WORKERS_LIST]: action.payload,
      };
    }

    case CONSTANT.PAGE: {
      return {
        ...state,
        [CONSTANT.PAGE]: action.payload,
      };
    }

    case CONSTANT.PAGE_COUNT: {
      return {
        ...state,
        [CONSTANT.PAGE_COUNT]: action.payload,
      };
    }

    case CONSTANT.QUERY: {
      return {
        ...state,
        [CONSTANT.QUERY]: action.payload,
      };
    }

    default:
      return state;
    }
}
