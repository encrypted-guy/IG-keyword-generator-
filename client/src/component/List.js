import React, {useContext} from 'react'
import Single from './Single'
import Spinner from './Spinner'
import Context from '../context/Context'
import uuid from 'uuid/dist/v1'
import Blank from './Blank'
const List = () => {
    const {hashtags, loading} = useContext(Context)
    if (loading) return <Spinner />



    return (
        <div className="list">
            {
                hashtags ? hashtags.map(each => {
                    return (
                        <Single  key={uuid()} element={each}/>   
                    )
                }) : <Blank />
            }
        </div> 
    )
}

export default List
