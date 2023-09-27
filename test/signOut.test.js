import { remote, wdOpts, expect } from "../config/testConfig.js";
import { skipTourHelper } from "../helpers/SkipTourAndAuth.js";
import signInHelper from "../helpers/SignIn.js";
import HomeScreen from "../screens/home.screen.js";

describe("sign out", function () {
    let driver;

    beforeEach(async () => {
        driver = await remote(wdOpts);
        await skipTourHelper(driver);
        await signInHelper(driver);
    });

    afterEach(async () => {
        await driver.deleteSession();
    });

    it("should sign out", async () => {
        const homeScreen = new HomeScreen(driver);
        await homeScreen.openNavDrawer();
        await homeScreen.signOut();
        await homeScreen.openNavDrawer();
        await expect(homeScreen.signOutMenu).not.toExist();
    });
});
