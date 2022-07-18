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
                    <div style="margin: 2rem 0rem -3rem -7.7rem; display: flex; flex-direction: row; justify-content: center; width: 100%;">
                        <p style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;">Have an account already ?  </p>
                        <router-link to="/login" style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;">Login</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "signup",
    methods: {
        validateEmail(e) {
            var re = /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/;
            return String(e).search(re) != -1;
        },
        validatePassword(password){
            var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(password);
        },
        validateForm(data){
            if(data["username"] != "") {
                var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                if(re.test(data["password"])) {
                    return "OK";
                }
                return "Invalid Password Format";
            }
            return "Empty Field Present"
        },
        createAccount(e) {
            e.preventDefault();
            const formData = new FormData(document.getElementById('signupForm'))
            const data = {}
            for(var pair of formData.entries()){
                data[pair[0]] = pair[1];
            }
            console.log(data);
            const res = this.validateForm(data);
            if(res == "OK") {
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
}
</script>