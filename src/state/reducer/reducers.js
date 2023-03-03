const changetheme = (state = 'white', action) => {   //It take two argument state and action (state should be initialized ,recommended by redux documentation)
    switch (action.type) {
        case 'red':
             return  'red'
        case 'yellow':
             return  'yellow'
        case 'green':
             return  'green'
        case 'grey':
             return  'grey'
        case 'blue':
             return 'white'     
        default:
            return state

    }
}

export default changetheme