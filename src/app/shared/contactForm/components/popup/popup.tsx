import styles from './popup.module.css'
type TPopupProps = {
    isVisible: boolean;
    onCloseButtonClickHandler: (e: any) => void,
    state: 'success'| 'error'| null,
}
const Popup = ({isVisible, onCloseButtonClickHandler, state}:TPopupProps) => {
    return (
    <div className={`${styles.overlay} ${isVisible ?  styles['overlay--active'] : '' }`}>
      <div className={styles.inner}>
        {state ==='success' ? 
          <p className={styles.text}> 
            Ваша заявка успешно отправлена!
            Мы свяжемся с вами в течение 15 минут.
          </p> 
        : <p className={styles.text}>
            Произошла техническая ошибка!
            Пожалуйста, повторите попытку.
          </p>}
          <button 
            type='button'
            className={styles.close_button} 
            onClick={e => onCloseButtonClickHandler(e)}/>
      </div>
    </div>
    )
}

export default Popup;