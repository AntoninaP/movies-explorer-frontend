import React from 'react'

function Preloader(props) {
    return (
        <div className={`preloader ${props.isOn ? 'preloader' : 'preloader_off'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
}

export default Preloader
