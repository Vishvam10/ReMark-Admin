<template>
    <div class="bg">
        <span style="visibility: hidden; display: none" id="base_api_url">{{BASE_API_URL}}</span>
        <div class="login d-flex flex-column justify-content-center align-items-center" id="lm">
            <h1 class="fw-bold mb-5">Signup</h1>
            <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
                <form id="signupForm">
                    <div class="row mb-3">
                        <label for="username" class="mb-3" style="transform: translateX(-8px)">Username</label>
                        <input type="text" name="username" class="form-control form-control-lg" id="username">
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="mb-3" style="transform: translateX(-8px)">Password</label>
                        <input type="password" name="password" class="form-control form-control-lg" id="password">
                    </div>
                    <div class="row mb-3">
                        <label for="email_id" class="mb-3" style="transform: translateX(-8px)">Email ID</label>
                        <input type="email_id" name="email_id" class="form-control form-control-lg" id="email_id">
                    </div>
                    <div class="row mb-3">
                        <label for="bio" class="mb-3" style="transform: translateX(-8px)">Bio</label>
                        <input type="bio" name="bio" class="form-control form-control-lg" id="bio">
                    </div>
                    <div class="row mb-3">
                        <label for="authority" class="mb-3" style="transform: translateX(-8px)">Authority</label>
                        <input type="authority" name="authority" class="form-control form-control-lg" id="authority" value="admin" readonly>
                    </div>
                    <div class="row mb-3 mt-5">
                        <button type="submit" class="form-control form-control-lg btn btn-primary" style="height: 4rem" @click="createAccount">Create An Account</button>
                    </div>
                </form>
                <div style="margin: 2rem 0rem -3rem -7.7rem; display: flex; flex-direction: row; justify-content: center; width: 100%;">
                    <p style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;">Have an account already ?  </p>
                    <router-link to="/login" style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;" class="link">Login</router-link>
                </div>
                <router-link to="/" style="margin: 4rem 0rem -2rem -0.7rem; font-size: 1.2rem;">Go back to website </router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
.link {
    background: linear-gradient(to right, rgb(148, 0, 250), rgb(255, 2, 26));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.1s ease-in-out; 
}
.link:hover {
    transform: scale(1.15);
}
.link:active {
    transform: scale(1.0);
}
</style>

<script>
export default {
    name: "signup",
    methods: {
        validatePassword(password) {
            if(password.length > 20) {
                return false;
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
        validateEmail(email) {
            // NOTE : Underscore and dots are not allowed
            const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            return emailRegex.test(email);
        },
        validateBio(bio) {
            if(bio.length > 0 && bio.length <= 80) {
                return true;
            } 
            return false;
        },
        createAccount(e) {
            e.preventDefault();
            const formData = new FormData(document.getElementById('signupForm'))
            const data = {}
            for(var pair of formData.entries()){
                if(pair[0] == "username") {
                    if(!this.validateUsername(pair[1].trim())) {
                        const error_message = "Please enter a username with alphanumerics, underscores and no spaces !" 
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
                if(pair[0] == "email_id") {
                    if(!this.validateEmail(pair[1].trim())) {
                        const error_message = "Please enter an email ID without dots or underscores !" 
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
                if(pair[0] == "bio") {
                    if(!this.validateBio(pair[1].trim())) {
                        const error_message = "Please enter a valid bio with more than 0 and less than 80 characters !" 
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
            const url = `${BASE_API_URL}/api/user`;
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
                console.log("RESULT : ", data);
                localStorage.setItem("user_name", data["user_name"]);
                localStorage.setItem("user_id", data["user_id"]);
                this.$router.push({ name: 'login' })
            })
            .catch(err => console.log(err))
        }
     
    }
}
</script>