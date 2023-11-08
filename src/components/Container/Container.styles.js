import styled from 'styled-components';
import constants from '../../utilities/Constants';

export const StyledContainer = styled.div`
    max-width: 95%;
    width: 400px;
    border-radius: 4px;
    border: 1px solid ${constants.colors.grey};
    margin: 10px auto;
`;  

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 2px 0;
    border-top: 1px solid ${constants.colors.grey};
`;

export const StyledLink = styled.a`
    text-decoration: none;
    font-size: 12px;
    color: ${constants.colors.blue};
`;