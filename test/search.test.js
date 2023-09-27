import { remote, wdOpts, expect } from "../config/testConfig.js";
import { skipTourAndAuthHelper } from "../helpers/SkipTourAndAuth.js";
import FilmScreen from "../screens/film.screen.js";
import SearchScreen from "../screens/search.screen.js";

describe("search test suite", function () {
    let driver;
    let searchScreen;
    let searchValue;

    beforeEach(async () => {
        driver = await remote(wdOpts);
        searchScreen = new SearchScreen(driver);
        await skipTourAndAuthHelper(driver);
    });

    afterEach(async () => {
        await driver.deleteSession();
    });

    it("should search and verify values", async () => {
        searchValue = "ryan gosling";
        await searchScreen.clickSearchIcon();
        await searchScreen.searchInput.waitForExist();
        await searchScreen.fillSearchInput(searchValue);
        await searchScreen.searchResultTitle.waitForExist();
        await expect(searchScreen.searchResultTitle).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
    });

    it("swipe and verify values", async () => {
        searchValue = "star wars";
        await searchScreen.performSearch(searchValue);
        // reviews
        await searchScreen.swipeRight();
        await searchScreen.searchResultReview.waitForExist({ timeout: 30000 });
        await expect(searchScreen.searchResultReview).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
        // lists
        await searchScreen.swipeRight();
        await searchScreen.searchResultTitle.waitForExist({ timeout: 10000 });
        await expect(searchScreen.searchResultTitle).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
        // cast
        await searchScreen.swipeRight();
        await searchScreen.searchResultTitle.waitForExist({ timeout: 10000 });
        await expect(searchScreen.searchResultTitle).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
        // members
        await searchScreen.swipeRight();
        await searchScreen.searchResultDisplayname.waitForExist({
            timeout: 10000,
        });
        const displaynameText =
            await searchScreen.searchResultDisplayname.getText();
        const usernameText = await searchScreen.searchResultUsername.getText();
        const containsText =
            displaynameText.toLowerCase().includes(searchValue) ||
            usernameText.toLowerCase().includes(searchValue);
        await expect(containsText).toBe(
            true,
            "no such value in displayname or username"
        );
        //  stories
        await searchScreen.swipeRight();
        await searchScreen.searchResultStoryTitle.waitForExist({
            timeout: 10000,
        });
        await expect(searchScreen.searchResultStoryTitle).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
        // articles
        await searchScreen.swipeRight();
        await searchScreen.searchResultNewsTitle.waitForExist({
            timeout: 10000,
        });
        await expect(searchScreen.searchResultNewsTitle).toExist();
        // podcasts
        await searchScreen.swipeRight();
        await searchScreen.searchResultNewsTitle.waitForExist({
            timeout: 10000,
        });
        await expect(searchScreen.searchResultNewsTitle).toExist();
        // all
        await searchScreen.swipeRight();
        await searchScreen.searchResultTitle.waitForExist({ timeout: 10000 });
        await expect(searchScreen.searchResultTitle).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
    });

    it("should clear search", async () => {
        searchValue = "avengers";
        await searchScreen.performSearch(searchValue);
        await searchScreen.clearSearchInput();
        await expect(searchScreen.searchInput).toHaveText("Search…");
        await expect(searchScreen.searchResultTitle).not.toExist();
    });

    it("should navigate to film screen", async () => {
        searchValue = "one flew over";
        const filmScreen = new FilmScreen(driver);
        await searchScreen.performSearch(searchValue);
        await searchScreen.clickSearchResultTitle();
        await filmScreen.filmTitle.waitForExist();
        await expect(filmScreen.filmTitle).toHaveTextContaining(
            new RegExp(searchValue, "i")
        );
    });
});
