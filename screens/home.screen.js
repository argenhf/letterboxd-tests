import Screen from "./screen.js";

class HomeScreen extends Screen {
    // locators

    get navDrawer() {
        return this.driver.$(
            '//android.widget.ImageButton[@content-desc="Open navigation drawer"]'
        );
    }

    get navView() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/design_navigation_view"]'
        );
    }

    get signOutMenu() {
        return this.driver.$(
            '//android.widget.CheckedTextView[@text="Sign out"]'
        );
    }

    get signOutConfirmBtn() {
        return this.driver.$('//android.widget.Button[@text="SIGN OUT"]');
    }

    get filmsTabItem() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/treasure_hunt_container"]'
        );
    }

    get reviewsTab() {
        return this.driver.$(
            '//android.widget.LinearLayout[@content-desc="Reviews"]'
        );
    }

    get reviewsTabItem() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/reviewTextView"]'
        );
    }

    get listsTab() {
        return this.driver.$(
            '//android.widget.LinearLayout[@content-desc="Lists"]'
        );
    }

    get listsTabItem() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/list_description_text_view"]'
        );
    }

    get journalTab() {
        return this.driver.$(
            '//android.widget.LinearLayout[@content-desc="Journal"]'
        );
    }

    get journalTabItem() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/news_image_view"]'
        );
    }

    // actions

    async openNavDrawer() {
        await this.navDrawer.click();
        await this.navView.waitForExist();
    }

    async signOut() {
        await this.signOutMenu.click();
        await this.signOutConfirmBtn.waitForExist();
        await this.signOutConfirmBtn.click();
    }

    async clickFilmsTabItem() {
        await this.filmsTabItem.click();
    }

    async clickReviewsTab() {
        await this.reviewsTab.click();
    }

    async clickReviewsTabItem() {
        await this.reviewsTabItem.click();
    }

    async clickListsTab() {
        await this.listsTab.click();
    }

    async clickListsTabItem() {
        await this.listsTabItem.click();
    }

    async clickJournalTab() {
        await this.journalTab.click();
    }

    async clickJournalTabItem() {
        await this.journalTabItem.click();
    }
}

export default HomeScreen;
