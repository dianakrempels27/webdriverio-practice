import brokenElements from '../pageobjects/brokenelements.page';
import {expect} from '@wdio/globals';

describe('Test Broken Elements', () => {
    it('should check if the image is broken', async () => {
        await brokenElements.open();

        const isValidImageBroken = await browser.execute((selector) => {
            const img = document.querySelector(selector) as HTMLImageElement;
            return img ? img.naturalWidth === 0 : true;
        }, 'img[src="/images/Toolsqa.jpg"]');

        const isBrokenImageBroken = await browser.execute((selector) => {
            const img = document.querySelector(selector) as HTMLImageElement;
            return img ? img.naturalWidth === 0 : true;
        }, 'img[src="/images/Toolsqa_1.jpg"]');

        expect(isValidImageBroken).toBe(false);
        expect(isBrokenImageBroken).toBe(true);
    })

    it('should checkif the link is broken', async () => {
        await brokenElements.open();

        await brokenElements.validLink.click();

        const demoQAlogo = await $('.home-banner');
        await expect(demoQAlogo).toBeDisplayed();

        await brokenElements.open();

        await brokenElements.brokenLink.click();

        const status500 = await $('#content');
        await expect(status500).toHaveText(/500 status code/);
    })
})