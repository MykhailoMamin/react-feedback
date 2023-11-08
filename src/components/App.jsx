import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    return this.setState(prevState => ({
      [e.target.id]: prevState[e.target.id] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const counterPercentage = Math.round(
      (100 * this.state.good) / this.countTotalFeedback()
    );
    if (isNaN(counterPercentage)) {
      return 0;
    }
    return counterPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <section>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />

          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </section>
      </>
    );
  }
}

export default App;
