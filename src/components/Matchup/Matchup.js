import { Container, MatchupContainer, TeamMatchup, SeperatorText, TimeText } from "./Matchup.styles";
import constants from "../../utilities/Constants";
import TeamInfo from "../TeamInfo/TeamInfo";
import ExpertConsensusCircle from "../ExpertConsensusCircle/ExpertConsensusCircle";
import formatGameTime from "../../utilities/formatGameTime";

const Matchup = ({matchup, homeWin}) => {
    const homeTeam = matchup.teams.find((team) => team.home);
    const awayTeam = matchup.teams.find((team) => !team.home);
    const gameTime = formatGameTime(matchup.schedule);
    
    return (
        <Container>
            <MatchupContainer withBorder>
                <TeamMatchup>
                    <TeamInfo team={awayTeam}/>
                    <SeperatorText>{constants.copy.location}</SeperatorText>
                    <TeamInfo team={homeTeam}/>
                </TeamMatchup>
                <TimeText>{gameTime}</TimeText>
            </MatchupContainer>
            <MatchupContainer>
                <TeamMatchup>
                    <ExpertConsensusCircle percent={matchup.analysis.awayPct} win={!homeWin}/>
                    <SeperatorText>{constants.copy.expertLabel}</SeperatorText>
                    <ExpertConsensusCircle percent={matchup.analysis.homePct} win={homeWin}/>
                </TeamMatchup>
            </MatchupContainer>
        </Container>
    )
};

export default Matchup