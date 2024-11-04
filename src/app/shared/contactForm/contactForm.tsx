"use client";
import styles from "./contactForm.module.css";
import { TContactFormProps } from "./declarations";
import Button from "../button/button";
import { useMask } from '@react-input/mask';
import { useState, ChangeEvent} from "react";
import Popup from "./components/popup/popup";

export default function ContactForm({ variant = "dark" }: TContactFormProps) {
  const buttonTheme = variant === "dark" ? "light" : "dark";
  const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } })
  const [isSendButtonClickable, setIsSendButtonClickable] = useState(false);
  const [popupState, setPopupState] = useState<null|'success'|'error'>(null)

  const onInputChangeHandler = (e:ChangeEvent<HTMLInputElement>):void => {
    if (e.target.value.length === 5 && e.target.value!== '9') {
      e.target.value = e.target.value.slice(0,3) + '(9'
    }
    if (e.target.value.length < 18) {
      setIsSendButtonClickable(false)
    } 
    if (e.target.value.length === 18) {
      setIsSendButtonClickable(true)
    } 
  }

  return (
    <form 
      className={`${styles[`wrapper--${variant}`]} ${styles.wrapper}`} 
      id='contacts-form'
      onSubmit={
        async (e) => {
          const form = document.querySelector('#contacts-form') as HTMLFormElement;
          e.preventDefault();
            const response = await fetch("mail.php", {
              method: "POST",
              body: new FormData(form),
            });
            if (response.ok) {
              setPopupState('success')
              return 
            } else {
              setPopupState('error')
              return
            }
      }}>
      <div className={styles.inner}>
        <p className={`${styles[`cta--${variant}`]} ${styles.cta}`}>
          Оставьте номер телефона, мы ответим на все ваши вопросы и оформим
          заказ
        </p>
        <div className={styles.components} >
          <input
            ref={inputRef}
            type="phone"
            name='user_phone'
            id='phone'
            className={`${styles[`input--${variant}`]} ${styles.input}`}
            placeholder="Введите номер телефона"
            onChange={onInputChangeHandler}
          />
          <div className={styles.button}>
            <Button variant={buttonTheme} text="Оставить заявку" disabled={!isSendButtonClickable} role='button' type='submit' />
          </div>
        </div>
      </div>
      <Popup 
        isVisible={Boolean(popupState)} 
        onCloseButtonClickHandler={() => setPopupState(null)} 
        state={popupState}/>
    </form>
  );
}
