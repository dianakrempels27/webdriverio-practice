import textformPage from '../pageobjects/textform.page';
import { expect } from '@wdio/globals';

describe('Textform page using POM', () => {
    it('should fill in the text box and submit', async () => {
        await textformPage.open();

        const fullName = 'Anna Smith';
        const email = 'anna@example.com';
        const currentAddress = '123 Main Street';
        const permanentAddress = '456 Side Street';

        await textformPage.fillTextForm(fullName, email, currentAddress, permanentAddress);

        const outputText = await textformPage.result.getText();

        expect(outputText).toContain(fullName);
        expect(outputText).toContain(email);
        expect(outputText).toContain(currentAddress);
        expect(outputText).toContain(permanentAddress);
    });
});