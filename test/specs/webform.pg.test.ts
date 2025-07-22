import webformPage from '../pageobjects/webform.page';
import { expect } from '@wdio/globals';
import { faker } from '@faker-js/faker';

describe('Webform page using POM', () => {
    it('should add new form in the table', async () => {
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

    it('should check that all salaries are numbers', async () => {
        await webformPage.open();

        const salaryCells = await webformPage.getSalaryCells();

        const nonEmptySalaryCells = [];

        for (const salary of salaryCells) {
            const salaryText = (await salary.getText()).trim();

            if (salaryText != '') {
                const salaryNumber = Number(salaryText);
                expect(salaryNumber).toBeGreaterThanOrEqual(0);
                nonEmptySalaryCells.push(salaryNumber);
            }

            console.log(`✅ Found ${nonEmptySalaryCells.length} valid salaries.`)
        }
    })

    it('should successfully delete an user in the table', async () => {
        await webformPage.open();

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const age = faker.number.int({ min: 18, max: 60 }).toString();
        const salary = faker.number.int({ min: 3000, max: 10000 }).toString();
        const department = faker.commerce.department();

        await webformPage.addNewForm(firstName, lastName, email, age, salary, department);

        const newUser = await $(`.rt-td*=${email}`);
        await newUser.waitForDisplayed({ timeout: 5000 });

        const row = await newUser.parentElement();
        const deleteButton = await row.$('span[title="Delete"]');
        await deleteButton.click();

        await expect(newUser).not.toBeExisting();
    });

    it('should successfully edit the users data', async() => {
        await webformPage.open();

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const age = faker.number.int({ min: 18, max: 60 }).toString();
        const email = faker.internet.email();
        const salary = faker.number.int({ min: 3000, max: 10000 }).toString();
        const department = faker.commerce.department();

        await webformPage.addNewForm(firstName, lastName, email, age, salary, department);

        const newUser = await $(`.rt-td*=${email}`);
        await newUser.waitForDisplayed({ timeout: 5000 });
        
        const parentRow = await newUser.parentElement();
        const editButton = await parentRow.$('span[title=Edit]');
        await editButton.click();

        const updatedFirstName = faker.person.firstName();

        const firstNameInput = await $('#firstName');
        await firstNameInput.setValue(updatedFirstName);

        const submitButton = await $('#submit')
        await submitButton.click();

        const editedUserName = await $(`.rt-td*=${updatedFirstName}`);
        await editedUserName.waitForDisplayed({ timeout: 5000 });
    });
});