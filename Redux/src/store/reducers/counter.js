
const initialState = {
    counter: 0,
    // results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('INCREMENT'):
            return {
                ...state,
                counter: state.counter + 1
            }
            break

        case ('DECREMENT'):
            return {
                ...state,
                counter: state.counter - 1
            }

        case ('ADD'):
            return {
                ...state,
                counter: state.counter + action.value
            }

        case ('SUBTRACT'):
            return {
                ...state,
                counter: state.counter - action.value
            }

        default:
            return state
    }

}

export default reducer

