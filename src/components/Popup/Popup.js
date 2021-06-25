import React from "react";
import ok from '../../images/ok.svg';
import err from '../../images/error.svg';
import close_ico from "../../images/close_ico.svg";

function Popup(props) {

  const texts = {
    titleOne: 'Вы успешно изменили профиль!',
    titleTwo: 'Что-то пошло не так!\n' +
      'Попробуйте ещё раз.'
  }

  return(
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>

      <div className="popup__container">
        <img src={close_ico} alt="иконка закрытия попапа"
             className="popup__close-button"
             onClick={props.onPopupClose}/>
          <img src={props.isEditProfileSuccessful ? ok : err}
               alt="значок статуса регистрации" className="popup__reg-ico"/>
          <h3 className="popup__title">
            {props.isEditProfileSuccessful ? texts.titleOne : texts.titleTwo}</h3>
        </div>
      </div>
  )
}

export default Popup

