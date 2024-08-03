// s n c o repl .exit

function target(data) {
  data.name = "ted";
  console.log("data was used");
}

function main() {
  console.log("we start the project");
  let data = { name: "Yoni", pet: "dog" };
  target(data);
  console.log("end of project");
}

main();
