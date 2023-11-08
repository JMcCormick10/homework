const formatWinningValues = (value) => {
    const expectedWin = value * 100;
    const leftOver = 100 - (value * 100);
    const strokeDash = `${expectedWin} ${leftOver - 0.01}`; 
    return {
        expectedWin: expectedWin,
        strokeDash: strokeDash
    }
};

export default formatWinningValues;