const orderByEpoch = ( epochArray, epochField) => {
    return epochArray.sort((a, b) => (a[epochField] > b[epochField]) ? -1 : 1)
}
export default orderByEpoch