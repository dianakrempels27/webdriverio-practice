/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class WebFormPage {
    public get addButton(): ChainablePromiseElement {
        return $('#addNewRecordButton');
    }

    public get firstName(): ChainablePromiseElement {
        return $('#firstName');
    }

    public get lastName(): ChainablePromiseElement {
        return $('#lastName');
    }

    public get email(): ChainablePromiseElement {
        return $('#userEmail');
    }

    public get age(): ChainablePromiseElement {
        return $('#age');
    }

    public get salary(): ChainablePromiseElement {
        return $('#salary');
    }

    public get department(): ChainablePromiseElement {
        return $('#department');
    }

    public get submitButton(): ChainablePromiseElement {
        return $('#submit');
    }

    public async getAllTableRows(): Promise<ChainablePromiseArray> {
        return $$('.rt-tbody .rt-tr-group');
    }

    public async getEmailCells(): Promise<ChainablePromiseArray> {
        return await $$('.rt-tr-group .rt-td:nth-child(4)');
    }

    public async getSalaryCells(): Promise<ChainablePromiseArray> {
        return await $$('.rt-tr-group .rt-td:nth-child(5)');
    }

    async open() {
        await browser.url('https://demoqa.com/webtables');
    }

    async addNewForm(
        firstName: string,
        lastName: string,
        userEmail: string,
        userAge: string,
        salary: string,
        department: string
    ) {
    await this.addButton.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.email.setValue(userEmail);
    await this.age.setValue(userAge);
    await this.salary.setValue(salary);
    await this.department.setValue(department);

    await this.submitButton.scrollIntoView();
    await this.submitButton.waitForClickable({ timeout: 10000 });
    await this.submitButton.click();
    }
}

export default new WebFormPage();