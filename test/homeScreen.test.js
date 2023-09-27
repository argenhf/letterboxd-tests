import { remote, wdOpts, expect } from "../config/testConfig.js";
import { skipTourAndAuthHelper } from "../helpers/SkipTourAndAuth.js";
import HomeScreen from "../screens/home.screen.js";
import FilmScreen from "../screens/film.screen.js";
import ReviewScreen from "../screens/review.screen.js";
import ListScreen from "../screens/list.screen.js";
import ArticleScreen from "../screens/article.screen.js";

describe("home screen actions", async () => {
    let driver;
    let homeScreen;

    beforeEach(async () => {
        driver = await remote(wdOpts);
        homeScreen = new HomeScreen(driver);
        await skipTourAndAuthHelper(driver);
    });

    afterEach(async () => {
        await driver.deleteSession();
    });

    it("should open films tab and navigate to film screen", async () => {
        const filmScreen = new FilmScreen(driver);
        await homeScreen.clickFilmsTabItem();
        await filmScreen.filmTitle.waitForExist();
        await expect(filmScreen.filmTitle).toExist();
    });

    it("should open reviews tab and navigate to review screen", async () => {
        const reviewScreen = new ReviewScreen(driver);
        await homeScreen.clickReviewsTab();
        await homeScreen.clickReviewsTabItem();
        await reviewScreen.reviewTitle.waitForExist();
        await expect(reviewScreen.reviewTitle).toHaveTextContaining("Review");
    });

    it("should open lists tab and navigate to list screen", async () => {
        const listScreen = new ListScreen(driver);
        await homeScreen.clickListsTab();
        await homeScreen.clickListsTabItem();
        await listScreen.listTitle.waitForExist();
        await expect(listScreen.listTitle).toExist();
    });

    it("should open journal tab and navigate to article screen", async () => {
        const articleScreen = new ArticleScreen(driver);
        await homeScreen.clickJournalTab();
        await homeScreen.clickJournalTabItem();
        await articleScreen.articleTitle.waitForExist();
        await expect(articleScreen.articleTitle).toExist();
    });
});
