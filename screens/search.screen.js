import Screen from "./screen.js";
import swipeHelper from "../helpers/Swipe.js";

class SearchScreen extends Screen {
    // locators

    get searchIcon() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/action_search"]'
        );
    }

    get searchInput() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/search_src_text"]'
        );
    }

    get searchResultTitle() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/titleView"]'
        );
    }

    get searchResultReview() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/reviewTextView"]'
        );
    }

    get searchResultDisplayname() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/displayname"]'
        );
    }

    get searchResultUsername() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/username"]'
        );
    }

    get searchResultStoryTitle() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/story_title"]'
        );
    }

    get searchResultNewsTitle() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/news_title"]'
        );
    }

    get searchResultNewsBody() {
        return this.driver.$(
            '[resource-id="com.letterboxd.letterboxd:id/news_body"]'
        );
    }

    // actions

    async clickSearchIcon() {
        await this.searchIcon.click();
    }

    async fillSearchInput(searchValue) {
        await this.searchInput.setValue(searchValue);
    }

    async performSearch(searchValue) {
        await this.searchIcon.click();
        await this.searchInput.setValue(searchValue);
        await this.searchResultTitle.waitForExist();
    }

    async clickSearchResultTitle() {
        await this.searchResultTitle.click();
    }

    async performSearchAndClickSearchResult(searchValue) {
        await this.searchIcon.click();
        await this.searchInput.setValue(searchValue);
        await this.searchResultTitle.waitForExist();
        await this.searchResultTitle.click();
    }

    async clearSearchInput() {
        await this.searchInput.clearValue();
        await this.searchResultTitle.waitForExist({ reverse: true });
    }

    async swipeRight() {
        await swipeHelper(this.driver, 99, 50, 1, 50);
    }
}

export default SearchScreen;
