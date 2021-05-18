const ordinalSuffix = ordinal => {
    const j = ordinal % 10,
        k = ordinal % 100;
    if (j === 1 && k !== 11) {
        return ordinal + "st";
    }
    if (j === 2 && k !== 12) {
        return ordinal + "nd";
    }
    if (j === 3 && k !== 13) {
        return ordinal + "rd";
    }
    return ordinal + "th";
}

export default ordinalSuffix