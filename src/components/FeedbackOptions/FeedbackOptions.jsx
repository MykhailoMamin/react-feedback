import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonItem}>
      {options.map((option, index) => (
        <li key={index} className={css.buttonList}>
          <button
            type="button"
            className={css.button}
            id={option}
            onClick={e => onLeaveFeedback(e)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
