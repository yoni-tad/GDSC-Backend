function add(...myNums) {
    return myNums.reduce((store, curr) => {
        return store + curr;
    }, 0);
}

module.exports = add;