import projectPath from "path";
const androidAppPath = projectPath.join(
    process.cwd(),
    "app\\Letterboxd_2.16.0.apk"
);

const capabilities = {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Pixel_3a",
    "appium:platformVersion": "14",
    "appium:app": androidAppPath,
    "appium:appWaitActivity": "*",
    "appium:waitforTimeout": 30 * 60000,
    "appium:commandTimeout": 30 * 60000,
    "appium:newCommandTimeout": 30 * 60000,
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || "127.0.0.1",
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: "debug",
    capabilities,
};

export { wdOpts };
