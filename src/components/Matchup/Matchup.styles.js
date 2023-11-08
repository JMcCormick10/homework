import styled from 'styled-components';
import constants from '../../utilities/Constants';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MatchupContainer = styled.div`
    margin: 0 auto;
    padding: 25px 0;
    max-width: 250px;
    width: 100%;
    ${({withBorder}) => withBorder && `border-bottom: 1px solid ${constants.colors.grey}`};
`;  

export const TeamMatchup = styled.div`
    display: grid;
    column-gap: 20px;
    grid-template-columns: 2fr 1fr 2fr;
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
`;

export const SeperatorText = styled.p`
    font-size: 12px;
    text-align: center;
`;

export const TimeText = styled.p`
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
`;