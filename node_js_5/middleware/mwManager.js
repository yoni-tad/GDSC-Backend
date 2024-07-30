const logger1 = require("./logger1");
const logger2 = require("./logger2");

function manager() {
    middles = [logger1, logger2];

    let index = 0;

    function next() {
        if (index <= middles.length) {
            let currentMW = middles[index];
            index++;
            currentMW();
        }
    }

    next();
}

module.exports = manager;