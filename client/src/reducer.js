import * as CONSTANT from './constant';

const initialState = {
  [CONSTANT.TOKEN]: '',
  [CONSTANT.ERROR]: '',
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

    default:
      return state;
    }
}
