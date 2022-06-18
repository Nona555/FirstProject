export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const isLoged = () => {
    return {
        type: 'LOGED_IN'
    }
}

export const changeColor = (color) => {
    return {
        type: 'COLOR',
        payload: color
    }
}