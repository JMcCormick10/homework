import { useState, useEffect } from 'react';
import matchupData from '../mockData.json';
function useSelectMatchup(){
    const matchups = matchupData.matchups;
    const numberMatchups = matchups.length;
    const [currentMatchupIndex, setCurrentMatchupIndex] = useState(0);
    const [currentMatchup, setCurrentMatchup] = useState(currentMatchupIndex);
    const [homeWin, setHomeWin] = useState(false);
    const getNextMatchup = () => {
        setCurrentMatchupIndex((currentMatchupIndex) + 1 === numberMatchups ? 0 : currentMatchupIndex + 1);
    };

    const getPreviousMatchup = () => {
        setCurrentMatchupIndex((currentMatchupIndex) - 1 === -1 ? numberMatchups - 1 : currentMatchupIndex - 1);
    };

    useEffect(() => {
        setCurrentMatchup(matchups[currentMatchupIndex]);
        setHomeWin(matchups[currentMatchupIndex].analysis.homePct > matchups[currentMatchupIndex].analysis.awayPct);
    }, [currentMatchupIndex])

    return {
        currentMatchup: currentMatchup,
        homeWin: homeWin,
        nextMatchup: getNextMatchup,
        previousMatchup: getPreviousMatchup
    };

};

export default useSelectMatchup;