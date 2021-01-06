
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ('STORE_RESULT'):
            // console.log(state)
            return {
                ...state,
                results: [...state.results].concat([action.result])
            }
        case ('DELETE'):
            const updatedArr = state.results.filter((res,ind) => ind!==action.index)
            return {
                ...state,
                results: updatedArr
            }
            break

        default:
            return state
    }

}

export default reducer

