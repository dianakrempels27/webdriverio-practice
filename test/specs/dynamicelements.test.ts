import dynamicElements from '../pageobjects/dynamicelements.page';
import {expect} from '@wdio/globals';

describe('Test dynamic properties', () => {
    it('should check the button is enabled after 5 seconds', async () => {
        await dynamicElements.open();

        await dynamicElements.enableButton.waitForEnabled({ timeout: 5000 });

        await dynamicElements.visibleButton.waitForClickable({ timeout: 5000 });
        
        await expect(dynamicElements.colorButton).toHaveAttribute('class', 'mt-4 text-danger btn btn-primary');
    })
})