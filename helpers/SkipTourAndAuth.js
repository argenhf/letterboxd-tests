import AuthScreen from "../screens/auth.screen.js";

// skips tour sceeens
async function skipTourHelper(driver) {
    const authScreen = new AuthScreen(driver);
    await authScreen.clickTourScreensEndBtn();
}

// skips tour screens and auth screen
async function skipTourAndAuthHelper(driver) {
    const authScreen = new AuthScreen(driver);
    await authScreen.clickTourScreensEndBtn();
    await authScreen.clickSkipBtn();
}

export { skipTourHelper, skipTourAndAuthHelper };
