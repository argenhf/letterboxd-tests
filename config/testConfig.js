import { remote } from "webdriverio";
import { wdOpts } from "../config/appiumConfig.js";
import { expect } from "expect-webdriverio";
import { TestData } from "../helpers/TestData.js";

export { remote, wdOpts, expect, TestData };
