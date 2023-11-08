
import { StyledControls, Heading, Header, StyledImage, Buttons, StyledIcon, Button } from "./Controls.styles";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import constants from '../../utilities/Constants';

const Controls = ({onPreviousClick, onNextClick}) => (
    <StyledControls>
        <Heading>
            <StyledImage alt="fire icon" src="http://cdn.fantasypros.com/images/test/hot-icon@3x.png"/>
            <Header>{constants.copy.heading}</Header>
        </Heading>
        <Buttons>
            <Button onClick={onPreviousClick}>
                <StyledIcon icon={faAngleLeft} onClick={onPreviousClick}/>
            </Button>
            <Button onClick={onNextClick}>
                <StyledIcon icon={faAngleRight} />
            </Button>
        </Buttons>
    </StyledControls>
);

export default Controls;