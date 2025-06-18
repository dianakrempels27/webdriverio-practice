import textformPage from '../pageobjects/textform.page';
import { expect } from '@wdio/globals';

describe('Textform page using POM', () => {
    it('should fill in the text box and submit', async () => {
        await textformPage.open();
        await textformPage.fillTextForm();

        await expect(textformPage.result).toBeDisplayed();
    });
});