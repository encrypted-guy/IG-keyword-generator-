import React from 'react'
import Search from './component/Search';
import List from './component/List';
import State from './context/State';
const App = () => {
    return (
        <State>
            <div className="container">
                <Search />
                <List />
            </div>
        </State>
    )
}

export default App
