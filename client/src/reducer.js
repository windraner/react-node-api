import * as CONSTANT from './constant';

const initialState = {
  [CONSTANT.TOKEN]: '',
  [CONSTANT.USER_ID]: '',
  [CONSTANT.EMAIL]: '',
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
    case CONSTANT.TOKEN: {
      return {
        ...state,
        [CONSTANT.TOKEN]: action.payload,
      };
    }

    case CONSTANT.SET_USER_DATA: {
      const { name, email, token } = action.payload;

      return {
        ...state,
        [CONSTANT.TOKEN]: token,
        [CONSTANT.USER_ID]: name,
        [CONSTANT.EMAIL]: email,
      };
    }

    default:
      return state;
    }
}
