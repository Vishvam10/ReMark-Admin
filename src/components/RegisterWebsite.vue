<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Register Website</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="resetPassword">
            <div class="row mb-5">
                <label for="current_password" class="mb-3" style="transform: translateX(-8px)">Enter Website URL</label>
                <input type="current_password" name="current_password" class="form-control form-control-lg" id="current_password">
            </div>
        </form>
    </div>
    <h5><b>NOTE : </b>The URL should of the form "https://somewebsite.com/" including the trailing slash. The protocol can be http or https. Do not include any resource path in the URL, even if you do, they will be filtered out</h5>
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
        validatePassword(password){
            var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(password);
        },
    }
}
</script>