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

// Pop Quiz

function extracts(date) {
    day = date.substring(8, 710);
    month = date.substring(5, 7);
    year = date.substring(0, 4);

    console.log("Day: " + day + " Month: " + month + " Year: " + year);
}
// extracts("2023-11-22");

//  Reverse String

function reverse(value) {
    let reversed = "";
    let i = value.length - 1;
    while (i >= 0) {
        reversed += value.substring(i, i+1);
        i--;
    }
    console.log(reversed);
}
reverse('Hello, sir');


// do .. while loop
function do_loop(){
    let i = 0;

    do {
        console.log("Number: " + i);
        i++;
    } while (i < 5);
}
// do_loop()
