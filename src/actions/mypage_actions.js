import { handleActions } from 'redux-actions';

export const MY_PAGE_REGISTER = 'MY_PAGE_REGISTER'

export const mypageRegister = (name) => {
	return{
		type : MY_PAGE_REGISTER,
		payload : name
	}
}


export const actions = {
	mypageRegister
}

export default handleActions({
  MY_PAGE_REGISTER: (state, action) => ({
    name: action.payload
  }),

}, { name: "takuya" });
