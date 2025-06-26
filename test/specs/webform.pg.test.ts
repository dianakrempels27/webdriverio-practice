import webformPage from '../pageobjects/webform.page';
import { expect } from '@wdio/globals';
import { faker } from '@faker-js/faker';

describe('Webform page using POM', () => {
    it('should add new from in the table', async () => {
        await webformPage.open();

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const userEmail = faker.internet.email({ firstName, lastName });
        const userAge = faker.number.int({ min: 18, max: 60 }).toString();
        const salary = faker.number.int({ min: 30000, max: 100000}).toString();
        const department = faker.commerce.department();

        await webformPage.addNewForm(firstName, lastName, userEmail, userAge, salary, department);
        
        const newRowEmailCell = await $(`.rt-td*=${userEmail}`);
        await newRowEmailCell.waitForDisplayed({ timeout: 5000 });

        const newRow = await newRowEmailCell.parentElement();
        const newRowText = await newRow.getText();

        expect(newRowText).toContain(firstName);
        expect(newRowText).toContain(lastName);
        expect(newRowText).toContain(userEmail);
        expect(newRowText).toContain(userAge);
        expect(newRowText).toContain(salary);
        expect(newRowText).toContain(department);
    });

    it('should check that every row contains a valid email', async () => {
        await webformPage.open();

        const emailCells = await webformPage.getEmailCells();

        const nonEmptyEmails = [];

        for (const cell of emailCells) {
            const text = (await cell.getText()).trim();

            if (text != '') {
                expect(text).toContain('@');
                nonEmptyEmails.push(text);
            }

            console.log(`✅ Found ${nonEmptyEmails.length} valid emails.`);
        }
    });
});