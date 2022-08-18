<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Edit Profile</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="accountSettings">
            <div class="row mb-5" style="width: 80%;">
                <label for="username" class="mb-3" style="transform: translateX(-8px)">Username</label>
                <input type="text" name="username" class="form-control form-control-lg" id="username" :value="username">
            </div>
            <div class="row mb-5" style="width: 80%;">
                <label for="email" class="mb-3" style="transform: translateX(-8px)">Email ID</label>
                <input type="email" name="email_id" class="form-control form-control-lg" id="email" :value="email">
            </div>
            <div class="row mb-5" style="width: 80%;">
                <label for="bio" class="mb-3" style="transform: translateX(-8px)">Bio</label>
                <input type="tel" name="bio" class="form-control form-control-lg" id="bio" :value="bio">
            </div>
            <div class="row mb-5 mt-5" style="width: 80%;">
                <button class="form-control form-control-lg btn btn-primary" style="height: 4rem; width: 16rem;" @click="updateUserDetails">Save Changes</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
label {
    font-weight: 300;
    font-size: 1.2rem;
}
button {
    font-weight: bold;
    font-size: 1.2rem;
}
</style>

<script>
export default {
    name: "AccountSettings",
    props: ["username", "email", "bio"],
    methods : {
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
        updateUserDetails(e) {
            e.preventDefault();
            e.stopPropagation();
            let form = new FormData(document.getElementById("accountSettings"));
            let data = {}
            for(var pair of form.entries()){
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
            const user_id = localStorage.getItem("user_id");
            const api_key = localStorage.getItem("admin_api_key");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/user/${user_id}`;
            fetch(url, {
                method: "PUT",
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
                if(data["error_message"]) {
                    const markup = `
                        <div id="error_message" style="margin: -4rem 0rem 0rem -1rem;">
                            <h3 class="error_message_text">${data}</h3>
                        </div>   
                    `;
                    document.getElementById("showMenu").insertAdjacentHTML("beforeend", markup);
                    setTimeout(() => {
                        document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                    }, 1000)
                    return;
                }
                const error_message_text = "Profile edited successfully !"
                const markup = `
                    <div id="error_message" style="margin: 2rem 0rem 0rem -1rem; background: #399e66;">
                        <h3 class="error_message_text">${error_message_text}</h3>
                    </div>   
                `;
                document.getElementById("showMenu").insertAdjacentHTML("beforeend", markup);
                setTimeout(() => {
                    document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                }, 1000)
                return;
            })
            .catch(err => console.log(err))
        },
        // deleteUser(e) {
        //     const user_name = localStorage.getItem("user_name")
        //     const res = prompt("Are you sure ? If yes, please enter your username to confirm");
        //     if(user_name == res) {
        //         const BASE_API_URL = document.getElementById("base_api_url").textContent;
        //         const user_id = localStorage.getItem("user_id")
        //         const url = `${BASE_API_URL}/api/user/${user_id}`;
        //         const auth_token = localStorage.getItem("user_access_token");
        //         fetch(url, {
        //             method: 'DELETE',
        //             headers: {
        //                 'Authorization': `Bearer ${auth_token}`,
        //                 'Access-Control-Allow-Origin': '*',
        //                 'Content-Type': 'application/json'
        //             },
        //         })
        //         .then(res => res.json())
        //         .then(data => {
        //             if(data["status"] == 200) {
        //                 console.log("DELETED SUCCESSFULLY");
        //                 this.$router.push({ name: 'login' }) 
        //             }
        //         })
        //         .catch(err => console.log(err))
        //     }
        // }
            
    }
}
</script>