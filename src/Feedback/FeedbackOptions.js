import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css";


export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={s.optionsList}>
           {options.map(option => (
               <li key={option} className={s.optionItem}>
                    <button type='button' onClick={() => onLeaveFeedback(option)}>{option}</button>
                </li> 
            ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}