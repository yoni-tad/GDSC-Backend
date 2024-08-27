document.addEventListener("DOMContentLoaded", async () => {
  const domain = "http://localhost:8000";
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "signin.html?status=authorization required";
    return;
  }

  try {
    const response = await fetch(`${domain}/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.message);

      document.getElementById('username').innerHTML = data.username
    } else {
      console.log("Failed to fetch data");
      window.location.href = "signin.html?status=failed to fetch data";
    }
  } catch (e) {
    console.log(`Check User Status Error ${e}`);
    window.location.href = "signin.html?status=error";
  }
});

function logout(){
    localStorage.clear();
    window.location.href = "signin.html?status=logout";
}

document.getElementById('logout').addEventListener('click', logout)