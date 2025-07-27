import linksPage from '../pageobjects/links.page';
import {expect} from '@wdio/globals';

describe('Test links', () => {
    it('should open new page after clicking on Home link', async () => {
        await linksPage.open();

        await linksPage.clickHomeLink();

        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[1]);
        
        const homePage = await $('.home-banner');
        await expect(homePage).toBeDisplayed();

        await expect(browser).toHaveUrl('https://demoqa.com/');
    })

    it('should respond with staus 201 and text Created', async () => {
        await linksPage.open();

        await linksPage.clickCreatedLink();

        const resultStatus = await $('#linkResponse');
        await expect(resultStatus).toHaveText('Link has responded with staus 201 and status text Created');
    })
})