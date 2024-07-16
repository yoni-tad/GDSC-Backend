// ---------------------- JS Basics 1 Exercise ----------------------

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
    reversed += value.substring(i, i + 1);
    i--;
  }
  console.log(reversed);
}
// reverse('Hello, sir');

// Generate stars loop
function star() {
  let stars = "";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
      stars += " * ";
    }
    stars += "\n";
  }
  console.log(stars);
}
// star();

// GCF
function gcf(a, b) {
  let c;
  if (a > b) {
    c = a;
  } else {
    c = b;
  }

  let val;
  for (i = 0; i < c; i++) {
    if ((a % i == 0) & (b % i == 0)) {
      val = i;
    }
  }
  console.log(val);
}

// gcf(20, 24);
