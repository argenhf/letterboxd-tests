import { TestData } from "../helpers/TestData.js";
import Screen from "./screen.js";

class AuthScreen extends Screen {
    // locators

    get tourScreensEndBtn() {
        return this.driver.$("//android.widget.LinearLayout[6]");
    }

    get skipBtn() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/tour_button_skip"]'
        );
    }

    get signInBtn() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/tour_button_sign_in"]'
        );
    }

    get createAccountBtn() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/tour_button_create_account"]'
        );
    }

    get emailAddress() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/emailAddress"]'
        );
    }

    get username() {
        return this.driver.$('[id="com.letterboxd.letterboxd:id/username"]');
    }

    get password() {
        return this.driver.$('[id="com.letterboxd.letterboxd:id/password"]');
    }

    get goBtn() {
        return this.driver.$('[id="com.letterboxd.letterboxd:id/go_button"]');
    }

    get termsSwitch() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/terms_of_use_switch"]'
        );
    }

    get privacySwitch() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/privacy_switch"]'
        );
    }

    get snackBarText() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/snackbar_text"]'
        );
    }

    get emailInputError() {
        return this.driver.$(
            "//android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView"
        );
    }

    get usernameInputError() {
        return this.driver.$(
            "//android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView"
        );
    }

    get passwordInputError() {
        return this.driver.$(
            "//android.widget.LinearLayout[3]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView"
        );
    }

    get recaptchaBtn() {
        return this.driver.$("//android.view.View[4]/android.widget.Button");
    }

    // actions

    async clickTourScreensEndBtn() {
        await this.tourScreensEndBtn.click();
    }

    async clickSkipBtn() {
        await this.skipBtn.click();
    }

    async clickSignInBtn() {
        await this.signInBtn.click();
    }

    async clickCreateAccountBtn() {
        await this.createAccountBtn.click();
    }

    async fillUsername(usernameValue) {
        await this.username.setValue(usernameValue);
    }

    async fillPassword(passwordValue) {
        await this.password.setValue(passwordValue);
    }

    async clickGoBtn() {
        await this.goBtn.click();
    }

    async fillEmailAddress(emailAddressValue) {
        await this.emailAddress.setValue(emailAddressValue);
    }

    async clickTermsSwitch() {
        await this.termsSwitch.click();
    }

    async clickPrivacySwitch() {
        await this.privacySwitch.click();
    }

    async performSignIn() {
        await this.clickSignInBtn();
        await this.username.waitForExist();
        await this.fillUsername(TestData.testUsername);
        await this.fillPassword(TestData.testPassword);
        await this.clickGoBtn();
    }
}

export default AuthScreen;
