import React from 'react'
import uuid from 'uuid/dist/v1'

const Single = ({element}) => {

    return (
        <div className="all_list">
            <div className="all_list_in">
                <p>
                    {
                        element.map(each => (
                            <span key={uuid()}> {each} </span>
                        ))
                    }
                </p>
            </div>
        </div>
    )
}

export default Single
