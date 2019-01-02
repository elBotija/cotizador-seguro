import React from 'react'

const Header = (props) => {
    return(
        <header className='header'>
            <h1 className='obj-title'>{props.title}</h1>
        </header>
    )
}

export default Header
