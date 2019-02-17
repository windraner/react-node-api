import * as CONSTANT from './constant';

const initialState = {
  [CONSTANT.TOKEN]: '',
  [CONSTANT.ERROR]: '',
  [CONSTANT.OPENED_MODAL]: null,
  [CONSTANT.WORKERS_LIST]: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
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
      };
    }

    case CONSTANT.WORKERS_LIST: {
      return {
        ...state,
        [CONSTANT.WORKERS_LIST]: action.payload,
      };
    }

    default:
      return state;
    }
}
