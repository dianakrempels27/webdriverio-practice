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

    public get result(): ChainablePromiseElement {
        return $('div.rt-td*=Anna');
    }

    async open() {
        await browser.url('https://demoqa.com/webtables');
    }

    async addNewForm() {
    await this.addButton.click();
    await this.firstName.setValue('Anna');
    await this.lastName.setValue('Smith');
    await this.email.setValue('anna.smith@example.com');
    await this.age.setValue('28');
    await this.salary.setValue('50000');
    await this.department.setValue('QA');
    await this.submitButton.click();
    }
}

export default new WebFormPage();