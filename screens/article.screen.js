import Screen from "./screen.js";

class ArticleScreen extends Screen {
    // locators

    get articleTitle() {
        return this.driver.$("//android.view.View[1]/android.widget.TextView");
    }
}

export default ArticleScreen;
