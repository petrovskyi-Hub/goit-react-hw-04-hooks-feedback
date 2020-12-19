import PropTypes from 'prop-types';
import s from "./Statistics.module.css";
import Notification from '../Notification/Notification'


export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className="Statistics">            
            <h2>Statistics</h2>
            
            {total > 0
                ? <ul className={s.list}>
                    <li><p className={s.listItem}>Good: {good}</p></li>
                    <li><p className={s.listItem}>Neutral: {neutral}</p></li>
                    <li><p className={s.listItem}>Bad: {bad}</p></li>
                    <li><p className={s.listItem}>Total: {total}</p></li>
                    <li><p className={s.listItem}>Positive feedback: {positivePercentage}%</p></li>
                </ul>
                : <Notification message="No feedback given"></Notification>
            }
        </div>
    )
            
}

Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}