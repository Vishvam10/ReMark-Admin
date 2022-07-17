<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem;">Password Reset</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="resetPassword">
            <div class="row mb-3">
                <label for="current_password" class="mb-3" style="transform: translateX(-8px)">Enter Current Password</label>
                <input type="current_password" name="current_password" class="form-control form-control-lg" id="current_password">
            </div>
            <div class="row mb-3">
                <label for="reset_password" class="mb-3" style="transform: translateX(-8px)">Enter New Password</label>
                <input type="reset_password" name="reset_password" class="form-control form-control-lg" id="reset_password">
            </div>
            <div class="row mb-3">
                <label for="reset_password_confirmation" class="mb-3" style="transform: translateX(-8px)">Confirm Password</label>
                <input type="reset_password_confirmation" name="reset_password_confirmation" class="form-control form-control-lg" id="reset_password_confirmation">
                <div class="row mb-3 mt-5">
                    <button class="form-control form-control-lg btn btn-primary" style="height: 4rem; width: 16rem;" @click="resetPassword">Change Password</button>
                </div>
            </div>
        </form>
    </div>
</template>

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