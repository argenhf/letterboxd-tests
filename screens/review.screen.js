import Screen from "./screen.js";

class ReviewScreen extends Screen {
    // locators

    get reviewTitle() {
        return this.driver.$(
            "//android.view.ViewGroup/android.widget.TextView"
        );
    }
}

export default ReviewScreen;
