<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Developer Settings</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="accountSettings">
            <div class="row mb-3">
                <h5 class="mb-2 mt-3">API KEY</h5>
                <span class="code_block api_key">
                    Aisjdf23#)@#23113921239057984*&$#@$(@*#&
                    <ion-icon name="clipboard-outline"></ion-icon>
                </span>
            </div>
            <div class="row mb-3">
                <h5 class="mb-2 mt-3">Registered Websites</h5>
                <span class="code_block">www.example.com</span>
                <span class="code_block">www.example.com</span>
                <span class="code_block">www.example.com</span>
            </div>
        </form>
    </div>
</template>

<style scoped>

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

</style>

<script>
export default {
    name: "DeveloperSettings",
    // props: ["username", "email", "phone"],
   
}
</script>