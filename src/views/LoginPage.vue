<template>
    <div class="bg">
        <span style="visibility: hidden; display: none" id="base_api_url">{{BASE_API_URL}}</span>
        <div class="login d-flex flex-column justify-content-center align-items-center" id="lm">
            <h1 class="fw-bold mb-5">Login Page</h1>
            <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
                <form id="loginForm">
                    <div class="row mb-3">
                        <label for="username" class="mb-3" style="transform: translateX(-8px)">Username</label>
                        <input type="text" name="username" class="form-control form-control-lg" id="username">
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="mb-3" style="transform: translateX(-8px)">Password</label>
                        <input type="password" name="password" class="form-control form-control-lg" id="password">
                    </div>
                    <div class="row mb-3">
                        <label for="authority" class="mb-3" style="transform: translateX(-8px)">Authority</label>
                        <input type="authority" name="authority" class="form-control form-control-lg" id="authority" value="admin" readonly>
                    </div>
                    <div class="row mb-3 mt-5">
                        <button name="submit" class="form-control form-control-lg btn btn-primary" style="height: 4rem" @click="loginUser">Login</button>
                    </div>
                </form>
                <div style="margin: 2rem 0rem -3rem -7.7rem; display: flex; flex-direction: row; justify-content: center; width: 100%;">
                    <p style="margin: 0rem 0rem 0rem 3rem; font-size: 1.2rem;">Don't have an account ?  </p>
                    <router-link to="/signup" style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;">Create one</router-link>
                </div>
                <router-link to="/" style="margin: 4rem 0rem -2rem -0.7rem; font-size: 1.2rem;">Go back to website </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "signup",
    methods: {
        validatePassword(password) {
            if(password.length > 20) {
                return;
            }
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
            return passwordRegex.test(password);
        },
        validateUsername(username) {
            if(username.length > 0) {
                const alphanumericWithUnderscoreRegex = /^[0-9a-zA-Z_]*$/
                return alphanumericWithUnderscoreRegex.test(username);
            }
            return false;
        },
        loginUser(e) {
            e.preventDefault();
            const formData = new FormData(document.getElementById('loginForm'))
            const data = {}
            for(var pair of formData.entries()){
                if(pair[0] == "username") {
                    if(!this.validateUsername(pair[1].trim())) {
                        const error_message = "Only comma separated alphanumeric values with no trailing or leading spaces are allowed !" 
                        const markup =
                            `
                            <div id="error_message">
                                <h3 class="error_message_text">${error_message}</h3>
                            </div>   
                        `;
                        document.getElementById("lm").insertAdjacentHTML("beforeend", markup);
                        setTimeout(() => {
                            document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                        }, 1000)
                    }
                }
                if(pair[0] == "password") {
                    if(!this.validatePassword(pair[1].trim())) {
                        const error_message = "Please enter a password with minimum 8 letter, with at least a symbol, upper and lower case letters and a number !" 
                        const markup =
                            `
                            <div id="error_message">
                                <h3 class="error_message_text">${error_message}</h3>
                            </div>   
                        `;
                        document.getElementById("lm").insertAdjacentHTML("beforeend", markup);
                        setTimeout(() => {
                            document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                        }, 1000)
                        return;
                    }
                }
                data[pair[0]] = pair[1].trim();
            }
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const url = `${BASE_API_URL}/api/login`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data["status"] == 200) {
                    localStorage.setItem("user_access_token", data["access_token"]);
                    localStorage.setItem("user_id", data["user_id"]);
                    localStorage.setItem("user_name", data["user_name"]);
                    this.$router.push({ name: 'adminDashboard' }) 
                } else {
                    const markup = `
                        <div id="error_message">
                            <h3 class="error_message_text">${data["error_message"]}</h3>
                        </div>   
                    `;
                    document.getElementById("lm").insertAdjacentHTML("beforeend", markup);
                    setTimeout(() => {
                        document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                    }, 1000)
                }
            })
            .catch(err => console.log(err))
        }
    }
}
</script>