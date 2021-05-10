import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrowIcon = () => {
    return (
        <>
            <FontAwesomeIcon style={{transform: "rotate(270deg)"}} icon={faAngleDoubleLeft} />
        </>
    )
}

export default LeftArrowIcon;
