import Controls from "../Controls/Controls";
import Matchup from "../Matchup/Matchup";
import { StyledContainer, ContainerFooter, StyledLink } from "./Container.styles";
import constants from '../../utilities/Constants';
import useSelectMatchup from "../../hooks/useSelectMatchup";

const Container = () => {
    const {currentMatchup, homeWin, nextMatchup, previousMatchup} = useSelectMatchup();

    return (
        <StyledContainer>
            <Controls onNextClick={nextMatchup} onPreviousClick={previousMatchup}/>
            {currentMatchup && (
                <Matchup matchup={currentMatchup} homeWin={homeWin}/>
            )}
            <ContainerFooter>
                <StyledLink href="https://www.fantasypros.com" target="_blank">{constants.copy.externalLinkLabel}</StyledLink>
            </ContainerFooter>
        </StyledContainer>
    );
};

export default Container;