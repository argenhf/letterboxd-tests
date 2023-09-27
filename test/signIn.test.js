import { remote, wdOpts, expect, TestData } from "../config/testConfig.js";
import { skipTourHelper } from "../helpers/SkipTourAndAuth.js";
import AuthScreen from "../screens/auth.screen.js";

describe("sign in test suite", () => {
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

    it("should skip sign in", async () => {
        await authScreen.clickSkipBtn();
        await authScreen.skipBtn.waitForExist({ reverse: true });
        await expect(authScreen.skipBtn).not.toBeDisplayed();
    });

    it("should sign in", async () => {
        await authScreen.clickSignInBtn();
        await authScreen.username.waitForExist();
        await authScreen.fillUsername(TestData.testUsername);
        await authScreen.fillPassword(TestData.testPassword);
        await expect(authScreen.goBtn).toBeEnabled();
        await authScreen.clickGoBtn();
        await authScreen.goBtn.waitForExist({ reverse: true });
        await expect(authScreen.goBtn).not.toExist();
    });

    it("should display wrong credentials error", async () => {
        await authScreen.clickSignInBtn();
        await authScreen.username.waitForExist();
        await authScreen.fillUsername(TestData.invalidData);
        await authScreen.fillPassword(TestData.invalidData);
        await expect(authScreen.goBtn).toBeEnabled();
        await authScreen.clickGoBtn();
        await authScreen.snackBarText.waitForExist({ timeout: 30000 });
        await expect(authScreen.snackBarText).toHaveText(
            "Your credentials don’t match. It’s probably attributable to human error."
        );
    });
});
