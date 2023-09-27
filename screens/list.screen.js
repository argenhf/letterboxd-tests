import Screen from "./screen.js";

class ListScreen extends Screen {
    // locators

    get listTitle() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/titleView"]'
        );
    }
}

export default ListScreen;
