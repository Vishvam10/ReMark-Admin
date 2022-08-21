<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Developer Settings</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <div id="accountSettings">
            <div class="row mb-3">
                <h5 class="mb-2 mt-3">API KEY</h5>
                <span class="code_block api_key">
                    <p :class="{ blur: showAPIKey == false }" id="api_key_paragraph">{{ api_key }}</p>
                    <div class="d-flex justify-content-between align-items-center" style="width: 16%;">
                        <ion-icon v-if="showAPIKey == true" name="eye-outline" @click="toggleAPIKey" title="Show API Key"></ion-icon>
                        <ion-icon v-else name="eye-off-outline" @click="toggleAPIKey"></ion-icon>
                        <ion-icon name="clipboard-outline" @click="copyAPIKey" id="copy"></ion-icon>
                    </div>
                </span>
            </div>
            <div class="row mb-3">
                <h5 class="mb-2 mt-3">Registered Websites</h5>
                <span v-for="website in websites" :key="website" class="code_block" style="height: 7rem;">
                    <span style="color: grey; font-size: 1.2rem;"> Website URL : {{ website.website_url }}</span> 
                    <br>
                    Website ID : {{ website.website_id }}
                </span>
            </div>
            <div class="row mb-3">
                <h5 class="mb-2 mt-3">Downloadables</h5>
                <span class="code_block" style="height: 7rem;">
                    <span style="color: grey; font-size: 1.2rem;">Remark Script File : </span> 
                    <br>
                    <h5 id="downloadFile" class="downloadFile" @click="downloadScript">Click here to download</h5>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
p {
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
h5 {
    font-weight: bold;
}
.api_key {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
}
.code_block {
    height: 5rem;
    width: 80%;
    padding: 1.4rem;
    background: white;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    margin: 1rem 0rem 1rem 0rem;
    font-size: 1.4rem;
}

.registered_websites {
    color: black;
}

.blur {
    filter: blur(0.6rem);
}

.downloadFile {
    font-size: 1.4rem;
    font-weight: 500;
    color: #0d6efd;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.downloadFile:hover {
    color: #0c51b8;
}


</style>

<script>
export default {
    name: "DeveloperSettings",
    props: ["api_key", "websites"],
    data() {
        return {    
            showAPIKey : false,
        }
    },
    methods : {
        toggleAPIKey(e) {
            e.preventDefault();
            e.stopPropagation();
            if(this.showAPIKey == false) {
                this.showAPIKey = true
            } else {
                this.showAPIKey = false
            }
        },
        copyAPIKey(e) {
            e.preventDefault();
            e.stopPropagation();
            const APIKeyText = document.getElementById("api_key_paragraph").textContent;
            navigator.clipboard.writeText(APIKeyText);
            const markup = `
                <span style="position: absolute; right: 6rem; color: #0d6efd;" id="copyText">Copied !</span>
            `
            document.getElementById("copy").insertAdjacentHTML("beforebegin", markup);
            setTimeout(() => {
                document.getElementById("copyText").parentElement.removeChild(document.getElementById("copyText"));
            }, 500)

        },
        downloadScript(e) {
            e.preventDefault();
            e.stopPropagation();
             const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const api_key = localStorage.getItem("admin_api_key");
            const url = `${BASE_API_URL}/api/download/${user_id}`;
            fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'API_KEY' : `${api_key}`,
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Content-Type' : "application/json"
                },
            })
            .then(res => res.blob())
            .then((data) => {
                let url = window.URL.createObjectURL(data);
                let link = document.createElement('a');
                document.body.appendChild(link);
                link.style = "display: none";
                link.href = url;
                link.download = "remark.v.0.1.js";
                link.click();
            }) 
            .catch(error => console.log(error))
        }
    }
}
</script>