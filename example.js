// ---------------------- JS Basics 1 Examples ----------------------

function example() {
    if(true){
        var x = 9;
        let y = 1;
        const z = 3;
    }

    console.log(x);
    console.log(y);
    console.log(z);
}

// do .. while loop
function do_loop(){
    let i = 0;

    do {
        console.log("Number: " + i);
        i++;
    } while (i < 5);
}
// do_loop()
