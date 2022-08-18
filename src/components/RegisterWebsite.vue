<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Register Website</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="registerWebsiteForm">
            <div class="row mb-5" style="width: 80%;">
                <label for="website_url" class="mb-3" style="transform: translateX(-8px)">Enter Website URL</label>
                <input type="website_url" name="website_url" class="form-control form-control-lg" id="website_url">
            </div>
            <div class="row mb-5 mt-5" style="width: 80%;">
                <button class="form-control form-control-lg btn btn-primary" style="height: 4rem; width: 16rem;" @click="registerWebsite">Register Website</button>
            </div>
        </form>
    </div>
    <h5><b>NOTE : </b>The URL should of the form "https://somewebsite.com/" including the trailing slash. The protocol can be http or https. Do not include any resource path in the URL, even if you do, they will be filtered out</h5>
    <br>
</template>

<style scoped>
h5 {
    color: grey;
}
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
        validateURL(website_url) {
            try {
                const url = new URL(`${website_url}`);
                const modified_url = `${url.protocol}//${url.hostname}/`
                return modified_url
              
            } catch (error) {
                return -1;
            }
        },
        registerWebsite(e) {
            e.preventDefault();
            const formData = new FormData(document.getElementById('registerWebsiteForm'))
            const data = {}
            for(var pair of formData.entries()){
                data[pair[0]] = pair[1];
            }
            const res = this.validateURL(data.website_url);
            if(res != -1) {
                const user_id = localStorage.getItem("user_id");
                const auth_token = localStorage.getItem("user_access_token");
                const api_key = localStorage.getItem("admin_api_key");
                const BASE_API_URL = document.getElementById("base_api_url").textContent;
                data["admin_id"] = user_id 
                data["admin_type"] = "BASIC"
                const url = `${BASE_API_URL}/api/website`;
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'API_KEY' : `${api_key}`,
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${auth_token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("RESULT : ", data);
                })
                .catch(err => console.log(err))
            } else {
                const error_message = "Please enter a valid website URL !" 
                const markup =
                    `
                    <div id="error_message">
                        <h3 class="error_message_text">${error_message}</h3>
                    </div>   
                `;
                document.getElementById("registerWebsiteForm").insertAdjacentHTML("beforeend", markup);
                setTimeout(() => {
                    document.getElementById("error_message").parentNode.removeChild(document.getElementById("error_message"));
                }, 1000)
                return;
            }
        }
    }
}
</script>