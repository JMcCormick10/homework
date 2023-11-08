import styled from 'styled-components';
import constants from '../../utilities/Constants';

export const Container = styled.figure`
    position: relative;
`;

export const Text = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: ${({win}) => win ? constants.colors.green : constants.colors.darkestGrey };
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
`;

export const StyledCircleSvg = styled.svg``;  

export const BackgroundCircle = styled.circle`
    fill:transparent;
    stroke: ${constants.colors.lightGrey};
`;

export const ForeGroundCircle = styled(BackgroundCircle)`
    z-index: 2;
    stroke: ${({win}) => win ? constants.colors.green : constants.colors.darkestGrey };
`