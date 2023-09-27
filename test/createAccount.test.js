import { remote, wdOpts, expect, TestData } from "../config/testConfig.js";
import { skipTourHelper } from "../helpers/SkipTourAndAuth.js";
import AuthScreen from "../screens/auth.screen.js";

describe("create account", function () {
    let driver;
    let authScreen;

    beforeEach(async () => {
        driver = await remote(wdOpts);
        authScreen = new AuthScreen(driver);
        await skipTourHelper(driver);
    });

    afterEach(async () => {
        await driver.deleteSession();
    });

    it("should fill correct details and get recaptcha", async () => {
        await authScreen.clickCreateAccountBtn();
        await authScreen.emailAddress.waitForExist();
        await authScreen.fillEmailAddress(TestData.validEmail);
        await authScreen.fillUsername(TestData.validUsername);
        await authScreen.fillPassword(TestData.validPassword);
        await authScreen.clickTermsSwitch();
        await authScreen.clickPrivacySwitch();
        await expect(authScreen.goBtn).toBeEnabled();

        await authScreen.clickGoBtn();
        await authScreen.recaptchaBtn.waitForExist({ timeout: 30000 });
        await expect(authScreen.recaptchaBtn).toBeDisplayed();
    });

    it("should show validation errors", async () => {
        await authScreen.clickCreateAccountBtn();
        await authScreen.emailAddress.waitForExist();
        await authScreen.fillEmailAddress(TestData.invalidData);
        await authScreen.emailInputError.waitForExist();
        await expect(authScreen.emailInputError).toHaveText(
            "Invalid email address"
        );

        await authScreen.fillUsername(TestData.invalidData);
        await authScreen.usernameInputError.waitForExist();
        await expect(authScreen.usernameInputError).toHaveText(
            "Invalid username"
        );

        await authScreen.fillPassword(TestData.shortPassword);
        await authScreen.passwordInputError.waitForExist();
        await expect(authScreen.passwordInputError).toHaveText(
            "Password is too short"
        );
        await expect(authScreen.goBtn).toBeDisabled();
    });
});
