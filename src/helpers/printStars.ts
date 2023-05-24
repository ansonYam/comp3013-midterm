const printStars = (numStars: number) => {
    let starsString = "";
    for (let i = 0; i < numStars; i++) {
        starsString += '⭐️';
    } 
    return starsString;
}

export { printStars };