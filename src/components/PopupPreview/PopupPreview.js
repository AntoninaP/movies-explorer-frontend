import React from "react";
import close_ico from "../../images/close_ico.svg";


function PopupPreview(props) {

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup-preview'>
        <img src={close_ico} alt="иконка закрытия попапа"
             className="popup-preview__close-button"
             onClick={props.onClose}/>
        <video className='popup-preview_video'
                src={props.movie.trailerLink} crossOrigin>
        </video>
      </div>
    </section>
  );
}

export default PopupPreview;

// src={props.movie.trailerLink.replace(/watch\?v=/, "embed/")}
