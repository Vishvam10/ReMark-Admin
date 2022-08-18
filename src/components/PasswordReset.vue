<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Password Reset</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="resetPasswordForm">
            <div class="row mb-5">
                <label for="current_password" class="mb-3" style="transform: translateX(-8px)">Enter Current Password</label>
                <input type="password" name="current_password" class="form-control form-control-lg" id="current_password">
            </div>
            <div class="row mb-5">
                <label for="new_password" class="mb-3" style="transform: translateX(-8px)">Enter New Password</label>
                <input type="password" name="new_password" class="form-control form-control-lg" id="new_password">
            </div>
            <div class="row mb-5">
                <label for="new_password_confirmation" class="mb-3" style="transform: translateX(-8px)">Confirm Password</label>
                <input type="password" name="new_password_confirmation" class="form-control form-control-lg" id="new_password_confirmation">
                <div class="row mb-5 mt-5">
                    <button class="form-control form-control-lg btn btn-primary" style="height: 4rem; width: 16rem;" @click="resetPassword">Change Password</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
label {
    font-weight: 400;
    font-size: 1.2rem;
}
button {
    font-weight: bold;
    font-size: 1.2rem;
}
</style>

<script>
export default {
    name: "PasswordReset",
    methods : {
        validatePassword(password) {
            if(password.length > 20) {
                return;
            }
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
            return passwordRegex.test(password);
        },
        resetPassword(e) {
            e.preventDefault();
            e.stopPropagation();
            let form = new FormData(document.getElementById("resetPasswordForm"));
            let d = {}
            for(var pair of form.entries()){
                d[pair[0]] = pair[1].trim();
            }
            if(d["new_password"] != d["new_password_confirmation"]) {
                const error_message = "The password confirmation does not match !"
                const markup = ` 
                    <div id="error_message" style="margin: -4rem 0rem 0rem -1rem;">
                        <h3 class="error_message_text">${error_message}</h3>
                    </div>   
                `;
                document.getElementById("showMenu").insertAdjacentHTML("beforeend", markup);
                setTimeout(() => {
                    document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                }, 20000000)
                return;
            }
            if(!this.validatePassword(d["current_password"]) || !this.validatePassword(d["new_password"])) {
                const error_message = "Please enter a password containing atleast 8 characters containing : lowercase and upper letters, alphanumeric and symbols. No spaces are allowed !"
                const markup = `
                    <div id="error_message" style="margin: -4rem 0rem 0rem -1rem;">
                        <h3 class="error_message_text">${error_message}</h3>
                    </div>   
                `;
                document.getElementById("showMenu").insertAdjacentHTML("beforeend", markup);
                setTimeout(() => {
                    document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                }, 20000000)
                return;
            }
          
            let data = {
                "current_password" : d["current_password"],
                "new_password" : d["new_password"]
            }
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const api_key = localStorage.getItem("admin_api_key");
            const url = `${BASE_API_URL}/api/password_reset/${user_id}`;
            fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    'API_KEY' : `${api_key}`,
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Content-Type' : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let error_message_text = ""
                let markup = ""
                if(data["error_message"]) {
                    error_message_text = data["error_message"];
                    markup = `
                        <div id="error_message" style="margin: -4rem 0rem 0rem -1rem;">
                            <h3 class="error_message_text">${error_message_text}</h3>
                        </div>   
                    `;
                }
                if(data["message"]) {
                    error_message_text = data["message"];
                    markup = `
                        <div id="error_message" style="margin: -4rem 0rem 0rem -1rem; background: #399e66 !important;>
                            <h3 class="error_message_text">${error_message_text}</h3>
                        </div>   
                    `;
                    error_message_text = data["message"];
                }
                document.getElementById("showMenu").insertAdjacentHTML("beforeend", markup);
                setTimeout(() => {
                    document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                }, 20000000)
                return;
            })               
            .catch(err => {
                const markup = `
                    <div id="error_message" style="margin: -4rem 0rem 0rem -1rem;">
                        <h3 class="error_message_text">${err}</h3>
                    </div>   
                `;
                document.getElementById("showMenu").insertAdjacentHTML("beforeend", markup);
                setTimeout(() => {
                    document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                }, 20000000)
                console.log(err)
            })
        }
    }
}
</script>