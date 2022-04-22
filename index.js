// code your solution here


function superbowlWin(a) {
    const result = a.find((y) => y.result === "W");
    if (result) {
        return result.year;
        
    } else {
        return undefined;

    }
}