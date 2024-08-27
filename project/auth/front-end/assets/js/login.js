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

async function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${domain}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization":
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Login successfully");
      localStorage.setItem("token", data);
      window.location.href = "index.html";
    } else {
      toastr.error(data.message);
      console.log("Failed to login");
    }
  } catch (e) {
    console.log(`Error at login: ${e}`);
  }
}

document.getElementById("signin").addEventListener("click", login);
