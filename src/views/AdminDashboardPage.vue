<template>
    <div class="bg">
        <span style="visibility: hidden; display: none" id="base_api_url">{{BASE_API_URL}}</span>
        <div class="settings_container" id="settings_container">
            <span class="settings_header_container">
                <h2 class="settings_header">Admin Dashboard</h2>
                <button type="button" class="form-control form-control-lg btn btn-outline-primary" id="logoutBtn" @click="handleLogout">Logout</button>
            </span>
            <div class="menu_options">
                <h5 :class="{ selectedLink: active == 1 }" @click="showPage" data-tabno=1 style="margin: 0rem 1rem 0rem 0rem;">Edit<br>Profile</h5>
                <h5 :class="{ selectedLink: active == 2}" @click="showPage" data-tabno=2>Password<br>Reset</h5>
                <h5 :class="{ selectedLink: active == 3}" @click="showPage" data-tabno=3 style="margin: 0rem -1rem 0rem 0rem;">User<br>Preferences</h5>
                <h5 :class="{ selectedLink: active == 4}" @click="showPage" data-tabno=4 style="margin: 0rem 1rem 0rem 0rem;">Usage<br>Statistics</h5>
                <h5 :class="{ selectedLink: active == 5}" @click="showPage" data-tabno=5 style="margin: 0rem 1rem 0rem 0rem;">Register<br>Website</h5>
                <h5 :class="{ selectedLink: active == 6}" @click="showPage" data-tabno=6>Developer<br>Settings</h5>
            </div>
            <div id="showMenu">
                <template v-if="active == 1">
                    <AccountSettings :username="user_data.username" :email="user_data.email_id" :bio="user_data.bio" />
                </template>
                <template v-else-if="active == 2">
                    <PasswordReset />
                </template>
                <template v-else-if="active == 3">
                    <UserPreferences /> 
                </template>
                <template v-else-if="active == 4">
                    <UsageStatistics /> 
                </template>
                <template v-else-if="active == 5">
                    <RegisterWebsite /> 
                </template>
                <template v-else>
                    <DeveloperSettings :api_key="api_key" :websites="website_data"/> 
                </template>
            </div>
            <span v-if="active <= 5" style="position: relative; bottom: 0rem; left: 0rem; font-size: 1rem;">* If a field does not change, please reload the page</span>
        </div>
    </div>
</template>

<style scoped>
h5 {
    cursor: pointer;
    background: none;
    border: none;
    transition: all 0.05s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: grey;
}

h5:hover {
  transform: scale(1.05);
}

h5:active {
  transform: scale(1.0);
}

.settings_header {
    font-weight: bold;
    font-size: 2.4rem;
    margin: 1rem 1rem 1rem 1rem;
    width: 80%;
}

.settings_container {
    width: 70%;
    height: 66rem;
    padding: 4rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.settings_header_container {
    display: flex;
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1.3rem 0rem 0rem 28rem;
}
#logoutBtn {
    width: 20%;
    height: 4rem;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 0.4rem;
}
.menu_options {
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0rem 0rem 1rem;
    position: fixed;
    top: 8%;
    height: 57rem;
    border-radius: 1rem;
    box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
    background: #111111;
    left: 19%;
    word-wrap: break-word;
    z-index: 10;
}

#showMenu {
    margin: 1rem 0rem 0rem 24rem;
    width: 70%;
    height: 100%;
}

.selectedLink {
    color: white;
    font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import AccountSettings from "../components/AccountSettings.vue"
import DeveloperSettings from "../components/DeveloperSettings.vue"
import PasswordReset from "../components/PasswordReset.vue"
import UserPreferences from "../components/Preferences.vue"
import UsageStatistics from "../components/UsageStatistics.vue"
import RegisterWebsite from "../components/RegisterWebsite.vue"

export default {
    name: "Settings",
    components : {
        AccountSettings,
        DeveloperSettings,
        PasswordReset,
        UserPreferences,
        UsageStatistics,
        RegisterWebsite
    },
    emits: ["switchTheme"],
    data() {
        return {
            active : 1,
            user_data : {},
            api_key : "",
            website_data : -1
        }
    },
    methods : {
        getUserData() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const user_url = `${BASE_API_URL}/api/user/${user_id}`;
            fetch(user_url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Accept' : "application/json"
                }  
            })
            .then(res => res.json())
            .then(data => {
                this.user_data = data
                localStorage.setItem("user_id", data.user_id)
            })
            .catch(err => console.log(err))
            
            const token_url = `${BASE_API_URL}/api/token/${user_id}`;
            fetch(token_url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Accept' : "application/json"
                }  
            })
            .then(res => res.json())
            .then(data => {
                this.api_key = data.data.api_key;
                localStorage.setItem("admin_api_key", this.api_key)
            })
            .catch(err => console.log(err))

            this.getWebsiteData()
        },
        getWebsiteData() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const api_key = localStorage.getItem("admin_api_key");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/website/all/${user_id}`;
            fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'API_KEY' : `${api_key}`,
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Accept' : "application/json"
                }  
            })
            .then(res => res.json())
            .then(data => {
                this.website_data = data
            })
            .catch(err => console.log(err))
        },
        showPage(e) {
            e.preventDefault();
            e.stopPropagation();
            const v = e.target.dataset.tabno;
            this.active = v;
        },
        switchTheme(data) {
            this.$emit("switchTheme", data);
        },
        updateUser(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // {
            //     "theme" : "dark",
            //     "color_palette" : "blue",
            //     "report_format" : "pdf",
            //     "export_format" : "csv",
            //     "reminders" : "on",
            //     "reminder_frequency" : "2d"
            // }
        },
        handleLogout(e) {
            e.preventDefault();
            e.stopPropagation();
            localStorage.clear();
            this.$router.push({ name: 'login' }) 
        }
    },
    created() {
        setTimeout(() => {
            this.getUserData();
        }, 200)
    }
}
</script>