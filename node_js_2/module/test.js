const math = require('./math');

// console.log(math.add(10, 15));

function force(m, a) {
    let force = math.multiply(m, a);
    console.log(force);
}

force(10, 2);