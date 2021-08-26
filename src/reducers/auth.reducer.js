import { authConstants } from "../actions/constants";
const initialState = {
    token:null,
    user:{
        firstName:"",
        lastName:"",
        email:"",
        profile:"",
    },
    authenticate:false,
    authenticating:false,
    loading:false,
    error:null,
    message:"",
};

export default (state=initialState,action)=>{
    console.log(action);
    switch(action.type) {
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true,
            }
            break;
            case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                authenticate:true,
                authenticating:false,
                user:action.payload.user,
                token:action.payload.token,
            }
            break;
            case authConstants.LOGIN_FAILURE:
                state={
                    ...state,
                    loading:true,
                    authenticate:false,
                    error:action.payload.error,
                }
                break;
                case authConstants.LOGOUT_REQUEST:
                    state={
                        ...state,
                        loading:true
                    }
                    break;
                    case authConstants.LOGOUT_SUCCESS:
                        state = {
                            ...initialState,
                            authenticate:false
                        }
                        break;
                        case authConstants.LOGOUT_FAILURE:
                            state = {
                                ...state,
                                error:action.payload.error,
                                loading:false,
                            }
                            break;
    }
    return state;
}