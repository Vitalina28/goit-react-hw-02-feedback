import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        className="btn"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
