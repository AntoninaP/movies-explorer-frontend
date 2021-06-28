import React from "react";
import close_ico from "../../images/close_ico.svg";


function PopupPreview(props) {

  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup-preview'>
        <img src={close_ico} alt="иконка закрытия попапа"
             className="popup-preview__close-button"
             onClick={props.onClose}/>
        <iframe className='popup-preview_iframe'
                src="https://www.youtube.com/embed/UXcqcdYABFw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
      </div>
    </section>
  );
}

export default PopupPreview;
