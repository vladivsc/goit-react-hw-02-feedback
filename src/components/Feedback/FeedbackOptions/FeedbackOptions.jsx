import PropTypes from "prop-types";
import Button from "../Button/Button";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map((name) => { <div> <Button onClick={() => onLeaveFeedback(name)} type="button">good</Button></div>
  })
  return (
    <>
    {elements}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}