import webformPage from '../pageobjects/webform.page';
import { expect } from '@wdio/globals';

describe('Webform page using POM', () => {
    it('should add new from in the table', async () => {
        await webformPage.open();
        await webformPage.addNewForm();

        await expect(webformPage.result).toBeDisplayed;
    });
});