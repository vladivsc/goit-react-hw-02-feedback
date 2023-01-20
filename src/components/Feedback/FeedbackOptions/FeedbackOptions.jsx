import PropTypes from "prop-types";
import styles from '../feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div><button
        onClick={() => onLeaveFeedback('good')}
        type="button"
        className={styles.btn}
      >
        Good
      </button>
      <button
        onClick={() => onLeaveFeedback('neutral')}
        type="button"
        className={styles.btn}
      >
        Neutral
      </button>
      <button
        onClick={() => onLeaveFeedback('bad')}
        type="button"
        className={styles.btn}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
}