function logReducer(state = false, action) {
    switch(action.type) {
        case 'LOGED_IN': return state = !state;
        default: return state;
    }
}

export default logReducer;