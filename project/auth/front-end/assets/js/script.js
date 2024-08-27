document.addEventListener("DOMContentLoaded", async () => {
  const domain = "http://localhost:8000";
  const token = localStorage.getItem("token");

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

  try {
    const response = await fetch(`${domain}/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
      toastr.success(data.message)
      document.getElementById("fullName").innerHTML = data.firstName;
    } else {
      console.log("Failed to fetch data");
      window.location.href = `signin.html?status=error&message=${data.message}`;
    }
  } catch (e) {
    console.log(`Check User Status Error ${e}`);
    window.location.href = "signin.html";
  }
});

function logout() {
  localStorage.clear();
  window.location.href = "signin.html?status=logout";
}

document.getElementById("logout").addEventListener("click", logout);
