import { StyledCircleSvg, BackgroundCircle, ForeGroundCircle, Container, Text } from "./ExpertConensusCircle.styles";
import formatWinningValues from "../../utilities/formatStrokeDash";
import constants from "../../utilities/Constants";

const ExpertConsensusCircle = ({percent, win}) => {
    const { expectedWin, strokeDash } = formatWinningValues(percent);
    const circleData = constants.circleData;
    
    return (
        <Container>
            <Text win={win}>{expectedWin}{constants.copy.percent}</Text>
            <StyledCircleSvg viewBox={circleData.viewBox}>
                <BackgroundCircle
                    strokeWidth={3}
                    cx={circleData.x}
                    cy={circleData.y}
                    r={circleData.radio}
                />
                <ForeGroundCircle
                    strokeWidth={3}
                    win={win}
                    strokeDasharray={strokeDash}
                    strokeDashoffset="25"
                    cx={circleData.x}
                    cy={circleData.y}
                    r={circleData.radio}
                />
            </StyledCircleSvg>
        </Container>
    )
};

export default ExpertConsensusCircle;