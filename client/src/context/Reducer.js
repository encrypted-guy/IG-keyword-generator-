
export default (state, action) => {
    switch(action.type){
        case 'GET_HASHTAGS':
            return {
                ...state,
                hashtags: action.payload,
                loading:false
            }
        case 'HASHTAG_ERROR': 
            return {
                ...state,
                hashtags: null,
                loading: true
            }    
        case 'SET_LOADING': 
            return {
                ...state,
                loading: true
            }    
        default:
            return state
    }
}