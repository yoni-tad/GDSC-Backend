const domain = "http://localhost:8000";

async function login(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    try {
        const response = await fetch(`${domain}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": 
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        if (response.ok) {
            console.log("Login successfully")
            const token = await response.json()
            localStorage.setItem('token', token);
            window.location.href = 'index.html'
        } else {
            console.log("Failed to register")
        }
    } catch(e) {
        console.log(`Error at registration: ${e}`)
    }
}

document.getElementById("signin").addEventListener('click', login)