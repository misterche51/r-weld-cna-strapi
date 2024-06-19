import styles from './popup.module.css'
type TPopupProps = {
    isVisible: boolean;
    onCloseButtonClickHandler: VoidFunction
}
const Popup = ({isVisible, onCloseButtonClickHandler}:TPopupProps) => {
    console.log(isVisible)
    return (
    <div className={`${styles.overlay} ${isVisible ?  styles['overlay--active'] : '' }`}>
            <div className={styles.inner}>
                <p className={styles.text}>
                Ваша заявка успешно отправлена!
                Мы свяжемся с вами в течение 15 минут.
                </p>
            <button className={styles.close_button} onClick={() => {
                console.log('rarar');
                onCloseButtonClickHandler();
            }}></button>
        </div>
      </div>
    )
}

export default Popup;