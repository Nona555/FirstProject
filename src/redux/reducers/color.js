function colorReducer(state = 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))', action) {
    if(action.type === 'COLOR') {
        return state = action.payload
    } else {
        return state;
    }
} 

export default colorReducer;