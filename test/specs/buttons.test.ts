import buttonsPage from '../pageobjects/buttons.page';
import {expect} from '@wdio/globals';

describe('Test different buttons', () => {
    it('should display messages after clicking on the different types of buttons', async () => {
        await buttonsPage.open();

        await buttonsPage.clickButtons();

        const doubleMessage = await buttonsPage.doubleClickMessage;
        await expect(doubleMessage).toBeDisplayed();

        const rightButtonMessage = await buttonsPage.rightClickMeMessage;
        await expect(rightButtonMessage).toBeDisplayed();

        const normalClickMessade = await buttonsPage.clickMeMessage;
        await expect(normalClickMessade).toBeDisplayed();
    })
})