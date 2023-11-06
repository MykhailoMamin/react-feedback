import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <FeedbackOptions options={['good', 'neutral', 'bad']} />
      </>
    );
  }
}

export default App;
