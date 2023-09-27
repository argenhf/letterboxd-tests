import { remote, wdOpts, expect } from "../config/testConfig.js";
import { skipTourHelper } from "../helpers/SkipTourAndAuth.js";
import signInHelper from "../helpers/SignIn.js";
import FilmScreen from "../screens/film.screen.js";
import SearchScreen from "../screens/search.screen.js";

describe("film actions", async () => {
    let driver;
    let filmScreen;
    let searchScreen;

    beforeEach(async () => {
        driver = await remote(wdOpts);
        filmScreen = new FilmScreen(driver);
        searchScreen = new SearchScreen(driver);
        await skipTourHelper(driver);
        await signInHelper(driver);
        await searchScreen.performSearchAndClickSearchResult("drive");
    });

    afterEach(async () => {
        await driver.deleteSession();
    });

    it("should mark as watched", async () => {
        await filmScreen.clickFab();
        await filmScreen.markWatchedBtn.waitForExist();
        await filmScreen.clickMarkWatchedBtn();
        await expect(filmScreen.unmarkWatchedBtn).toExist();
    });

    it("should like", async () => {
        await filmScreen.clickFab();
        await filmScreen.likeBtn.waitForExist();
        await filmScreen.clickLikeBtn();
        await expect(filmScreen.unlikeBtn).toExist();
    });

    it("should add to watchlist", async () => {
        await filmScreen.clickFab();
        await filmScreen.watchlistAddBtn.waitForExist();
        await filmScreen.clickWatchlistAddBtn();
        await expect(filmScreen.watchlistRemoveBtn).toExist();
    });

    it("should rate", async () => {
        await filmScreen.clickFab();
        await filmScreen.rateBtn.waitForExist();
        await filmScreen.rateFilm();
        await expect(filmScreen.rateState).toHaveText("Rated");
    });
});

describe("undo film actions", async () => {
    let driver;
    let filmScreen;
    let searchScreen;

    beforeEach(async () => {
        driver = await remote(wdOpts);
        filmScreen = new FilmScreen(driver);
        searchScreen = new SearchScreen(driver);
        await skipTourHelper(driver);
        await signInHelper(driver);
        await searchScreen.performSearchAndClickSearchResult("drive");
    });

    afterEach(async () => {
        await driver.deleteSession();
    });

    it("should not unmark as watched if rated", async () => {
        await filmScreen.clickFab();
        await filmScreen.unmarkWatchedBtn.waitForExist();
        await filmScreen.clickUnmarkWatchedBtn();
        await expect(filmScreen.snackBarText).toHaveTextContaining(
            "can’t be removed from your films, because there is activity on it."
        );
        await expect(filmScreen.unmarkWatchedBtn).toExist();
    });

    it("should unrate", async () => {
        await filmScreen.clickFab();
        await filmScreen.rateBtn.waitForExist();
        await filmScreen.unrateFilm();
        await expect(filmScreen.rateState).toHaveText("Rate");
    });

    it("should unmark as watched", async () => {
        await filmScreen.clickFab();
        await filmScreen.unmarkWatchedBtn.waitForExist();
        await filmScreen.clickUnmarkWatchedBtn();
        await expect(filmScreen.markWatchedBtn).toExist();
    });

    it("should unlike", async () => {
        await filmScreen.clickFab();
        await filmScreen.unlikeBtn.waitForExist();
        await filmScreen.clickUnlikeBtn();
        await expect(filmScreen.likeBtn).toExist();
    });

    it("should remove from watchlist", async () => {
        await filmScreen.clickFab();
        await filmScreen.watchlistRemoveBtn.waitForExist();
        await filmScreen.clickWatchlistRemoveBtn();
        await expect(filmScreen.watchlistAddBtn).toExist();
    });
});
