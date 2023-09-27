import Screen from "./screen.js";

class FilmScreen extends Screen {
    // locators

    get filmTitle() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/titleViewMain"]'
        );
    }

    get fab() {
        return this.driver.$('[id="com.letterboxd.letterboxd:id/fab"]');
    }

    get markWatchedBtn() {
        return this.driver.$(
            '//android.widget.Button[@content-desc="Mark this film as watched"]'
        );
    }

    get unmarkWatchedBtn() {
        return this.driver.$(
            '//android.widget.Button[@content-desc="Mark this film as not watched"]'
        );
    }

    get likeBtn() {
        return this.driver.$(
            '//android.widget.Button[@content-desc="Like this film"]'
        );
    }

    get unlikeBtn() {
        return this.driver.$(
            '//android.widget.Button[@content-desc="Unlike this film"]'
        );
    }

    get watchlistAddBtn() {
        return this.driver.$(
            '//android.widget.Button[@content-desc="Add this film to your watchlist"]'
        );
    }

    get watchlistRemoveBtn() {
        return this.driver.$(
            '//android.widget.Button[@content-desc="Remove this film from your watchlist"]'
        );
    }

    get rateBtn() {
        return this.driver.$('[id="com.letterboxd.letterboxd:id/rateStar1"]');
    }

    get rateState() {
        return this.driver.$('[id="com.letterboxd.letterboxd:id/rateView"]');
    }

    get snackBarText() {
        return this.driver.$(
            '[id="com.letterboxd.letterboxd:id/snackbar_text"]'
        );
    }

    // actions

    async clickFab() {
        await this.fab.click();
    }

    async clickMarkWatchedBtn() {
        await this.markWatchedBtn.click();
    }

    async clickUnmarkWatchedBtn() {
        await this.unmarkWatchedBtn.click();
    }

    async clickLikeBtn() {
        await this.likeBtn.click();
    }

    async clickUnlikeBtn() {
        await this.unlikeBtn.click();
    }

    async clickWatchlistAddBtn() {
        await this.watchlistAddBtn.click();
    }

    async clickWatchlistRemoveBtn() {
        await this.watchlistRemoveBtn.click();
    }

    async rateFilm() {
        await this.rateBtn.click();
    }

    async unrateFilm() {
        for (let rateBtnClicks = 0; rateBtnClicks < 3; rateBtnClicks++) {
            await this.rateBtn.click();
        }
    }
}

export default FilmScreen;
