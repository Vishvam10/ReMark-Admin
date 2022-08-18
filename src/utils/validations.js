import { emailRegex, passwordRegex, alphanumericWithUnderscoreRegex } from "./regex";


export default {
    validateEmail(email) {
        return emailRegex.test(email);
    },
    validatePassword(password) {
        if(password.length > 20) {
            return false;
        }
        return passwordRegex.test(password);
    },
    validateUsername(username) {
        if(username.length > 0) {
            return alphanumericWithUnderscoreRegex.test(username);
        }
        return false;
    },
    validateBio(bio) {
        if(bio.length > 0 && bio.length <= 80) {
            return true;
        } 
        return false;
    }
    
}