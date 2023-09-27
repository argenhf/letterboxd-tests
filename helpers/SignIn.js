import AuthScreen from "../screens/auth.screen.js";

async function signInHelper(driver) {
    const authScreen = new AuthScreen(driver);
    await authScreen.performSignIn();
}

export default signInHelper;
