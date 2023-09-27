async function swipeHelper(
    driver,
    startXPercent,
    startYPercent,
    endXPercent,
    endYPercent
) {
    const screenSize = await driver.getWindowRect();
    const startX = Math.round(screenSize.width * (startXPercent / 100));
    const startY = Math.round(screenSize.height * (startYPercent / 100));
    const endX = Math.round(screenSize.width * (endXPercent / 100));
    const endY = Math.round(screenSize.height * (endYPercent / 100));

    await driver.performActions([
        {
            // create the event
            type: "pointer",
            id: "finger1",
            parameters: { pointerType: "touch" },
            actions: [
                // move finger into start position
                { type: "pointerMove", duration: 0, x: startX, y: startY },
                // finger comes down into contact with screen
                { type: "pointerDown", button: 0 },
                // pause for a little bit
                { type: "pause", duration: 300 },
                // finger moves to end position
                { type: "pointerMove", duration: 300, x: endX, y: endY },
                // finger gets up, off the screen
                { type: "pointerUp", button: 0 },
            ],
        },
    ]);
}

export default swipeHelper;
