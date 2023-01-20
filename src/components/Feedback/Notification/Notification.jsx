import styles from '../Notification/notification.module.css';

const Notification = ({message})=> {
  return (
    <>
    <p className={styles.notification}>{message}</p>
    </>
  )
}

export default Notification;