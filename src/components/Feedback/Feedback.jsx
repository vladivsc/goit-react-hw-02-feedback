import { Component } from 'react';
import PropTypes from 'prop-types';

import Statistics from './Statistics/Statistics';
import styles from '../Feedback/feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote(name) {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positivePercent = ((this.state.good / total) * 100).toFixed(2);
    return Number(positivePercent);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.feedback_container}>
        <h3 className={styles.feedback_title}>Please leave feedback</h3>
        <div>
          <button onClick={() => this.leaveVote('good')} className={styles.btn}>
            Good
          </button>
          <button
            onClick={() => this.leaveVote('neutral')}
            className={styles.btn}
          >
            Neutral
          </button>
          <button onClick={() => this.leaveVote('bad')} className={styles.btn}>
            Bad
          </button>
        </div>
        <h3 className={styles.feedback_title}>Statistics</h3>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      </div>
    );
  }
}

export default Feedback;
