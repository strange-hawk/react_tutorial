import * as actionType from './actionType'

export const save_result = (res) => {
    return {
        type: actionType.STORE_RESULT,
        result:res
    }
}

export const store_result = (res) => {
    return dispatch => {
        setTimeout(()=> dispatch(save_result(res)), 2000 )
    }
}



export const delete_result = (ind) => {
    return {
        type: actionType.DELETE_RESULT,
        index:ind
    }
}