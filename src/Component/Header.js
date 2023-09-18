import React from 'react';

function Header() {
    return (
        <div className='header'>
            <img src="/logo.jpg" />

            <div className='header_search'>
                <input type='text' />
            </div>
        </div>
    )
}

export default Header
