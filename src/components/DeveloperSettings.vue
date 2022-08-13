<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Developer Settings</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="accountSettings">
            <div class="row mb-3">
                <h5 class="mb-2 mt-3">API KEY</h5>
                <span class="code_block api_key">
                    <p :class="{ blur: showAPIKey == false }">{{ api_key }}</p>
                    <div class="d-flex justify-content-between align-items-center" style="width: 16%;">
                        <ion-icon v-if="showAPIKey == true" name="eye-outline" @click="toggleAPIKey" title="Show API Key"></ion-icon>
                        <ion-icon v-else name="eye-off-outline" @click="toggleAPIKey"></ion-icon>
                        <ion-icon name="clipboard-outline"></ion-icon>
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
                <!-- <span class="code_block">{{ websites }}</span> -->
            </div>
        </form>
    </div>
</template>.website_url

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
    width: 100%;
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
    }
}
</script>