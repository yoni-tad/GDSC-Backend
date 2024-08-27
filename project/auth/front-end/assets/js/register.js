const domain = "http://localhost:8000";

async function register(event) {
    event.preventDefault()

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username == "" && email == "" && password == "") {
        return;
    }

    try {
        const response = await fetch(`${domain}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        if(response.ok){
            console.log("Registration successfully");
            window.location.href = "signin.html?status=register"
        } else {
            console.log("Failed to register")
        }
    } catch(e) {
        console.log(`Error at registration: ${e}`)
    }
}

document.getElementById('signup').addEventListener('click', register)