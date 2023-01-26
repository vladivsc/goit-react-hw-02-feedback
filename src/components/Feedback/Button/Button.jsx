import PropTypes from "prop-types";
import styles from '../feedback.module.css';

const Button = ({text, onClick, type}) => {
  return <button onClick={onClick} className={styles.btn} type={type}>{text}</button>
}

export default Button;

Button.defaultProps = {
  type: "submit",
}

Button.prototypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  children: PropTypes.element.isRequired
}