import React, {useReducer} from 'react'
import axios from 'axios'
import Context from './Context'
import Reducer from './Reducer'

const State = props => {
    const InitState = {
        hashtags: null,
        loading: false
    }
    const  [state, dispatch] = useReducer(Reducer, InitState)
    //-----------------------------------------------------

    const getHashTags = async (keyWord) => {
        try {
            setloading()
            const res = await axios(`/api/v1?keyWord=${keyWord}`)
            dispatch({
                type: 'GET_HASHTAGS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'HASHTAG_ERROR'
            })
        }
    }

    const setloading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }
    //-----------------------------------------------------
    return (
        <Context.Provider value={{
            hashtags: state.hashtags,
            loading: state.loading,
            setloading,
            getHashTags
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default State