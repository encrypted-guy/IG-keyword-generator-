import React, {useState, useContext} from 'react'
import TelegramIcon from '@material-ui/icons/Telegram';
import Context from '../context/Context'

const Search = () => {
    const {getHashTags} = useContext(Context)
    const [text, setText] = useState('')

    const HandleSubmit = e => {
        e.preventDefault()
        if(!text){
            setText('')
        }else if(/\s/.test(text)){
            alert("HashTags can't have spaces")
        }
        else {
            getHashTags(text)
        }
        // console.log(text)
    }

    return (
        <div className="search">
            <div className="value_input">
                <form onSubmit={HandleSubmit}>
                    <input onChange={e => setText(e.target.value)} value={text} className='messageSender__input' placeholder="keyword... Eg: developer" type="text"/>
                    <button  type='submit'>
                        <TelegramIcon />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search
