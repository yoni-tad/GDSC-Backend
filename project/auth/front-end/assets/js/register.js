const domain = "http://localhost:8000";

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "3000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

async function register(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (firstName == "" && lastName == "" && email == "" && password == "") {
    return;
  }

  try {
    const response = await fetch(`${domain}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Registration successfully");
      window.location.href = "signin.html?status=register";
    } else {
      toastr.error(data.message)
      console.log("Failed to register");
    }
  } catch (e) {
    console.log(`Error at registration: ${e}`);
  }
}

document.getElementById("signup").addEventListener("click", register);
