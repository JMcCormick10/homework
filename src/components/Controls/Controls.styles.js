import styled from 'styled-components';
import constants from '../../utilities/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledControls = styled.div`
    padding: 10px;
    border-bottom: 1px solid ${constants.colors.grey};
    display: flex;
    justify-content: space-between;
    column-gap: 5px;
    align-items: center;
`;

export const Heading = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
`;

export const Header = styled.h2`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const StyledImage = styled.img`
    height: 20px;
    width: auto;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    height: 17px;
    width: auto;
`;
export const Button = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    &:hover{
        cursor: pointer;
    }
`;