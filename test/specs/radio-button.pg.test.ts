import radioButtonPage from '../pageobjects/radiobutton.page';
import { expect } from '@wdio/globals';

describe('Radio Button page using POM', () => {
    it('should choose yes radio button', async () => {
        await radioButtonPage.open();
        await radioButtonPage.chooseYesRadioButton();

        await expect(radioButtonPage.result).toHaveText('You have selected Yes');
    });

    it('should chosse Impressive radio button', async () => {
        await radioButtonPage.open();
        await radioButtonPage.chooseImpressiveRadioButton();

        await expect(radioButtonPage.result).toHaveText('You have selected Impressive');
    });
});