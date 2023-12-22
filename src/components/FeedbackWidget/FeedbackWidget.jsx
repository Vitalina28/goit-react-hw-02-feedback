import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification';
import '../FeedbackWidget/FeedbackWidget.css';

class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = data => {
    this.setState(prevState => ({ [data]: prevState[data] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <div className="Container">
        <div className="Title">
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </div>
        <div className="Title">
          <h2>Statistics</h2>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
