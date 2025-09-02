import buttonsPage from '../pageobjects/buttons.page';

describe('Test different buttons', () => {
    it('should display messages after clicking on the different types of buttons', async () => {
        await buttonsPage.open();

        await buttonsPage.clickButtons();

        const doubleMessage = await buttonsPage.doubleClickMessage;
        await doubleMessage.waitForDisplayed({ timeout: 10000 });

        const rightButtonMessage = await buttonsPage.rightClickMeMessage;
        await rightButtonMessage.waitForDisplayed({ timeout: 10000 });

        const normalClickMessade = await buttonsPage.clickMeMessage;
        await normalClickMessade.waitForDisplayed({ timeout: 10000 });
    })
})