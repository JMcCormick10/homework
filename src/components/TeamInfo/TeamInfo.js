import { Team, TeamName, TeamRecord } from "./TeamInfo.styles";
import formatRecord from "../../utilities/formatRecord";
const TeamInfo = ({team}) => (
    <Team >
        <TeamName>{team.abbrev}</TeamName>
        <TeamRecord>{formatRecord(team.wins, team.losses, team.ties)}</TeamRecord>
    </Team>
);

export default TeamInfo;
