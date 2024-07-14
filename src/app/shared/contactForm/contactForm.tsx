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
  const [isOverlayActive, setIsOverlayActive] = useState(false)

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
    <form className={`${styles[`wrapper--${variant}`]} ${styles.wrapper}`} id='contact-form' onSubmit={(e) => {
        e.preventDefault();
        setIsOverlayActive(true)
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
            className={`${styles[`input--${variant}`]} ${styles.input}`}
            placeholder="Введите номер телефона"
            onChange={onInputChangeHandler}
          />
          <div className={styles.button}>
            <Button variant={buttonTheme} text="Оставить заявку" disabled={!isSendButtonClickable} role='button' type='submit' />
          </div>
        </div>
      </div>
      <Popup isVisible={isOverlayActive} onCloseButtonClickHandler={() => setIsOverlayActive(false)} />
    </form>
  );
}
