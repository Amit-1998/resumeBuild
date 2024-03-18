import cross from '../../assets/cross.svg';
import './TagFilled.scss';

const TagFilled = ({ displayText }) => {
    return (
        <span className="tagContainer">
            <span>{displayText}</span>
            <img src={cross} />
        </span>
    );
}

export default TagFilled;