/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class TextformPage {
    public get fullNameInput(): ChainablePromiseElement {
        return $('#userName');
    }

    public get emailInput(): ChainablePromiseElement {
        return $('#userEmail');
    }

    public get currentAddressInput(): ChainablePromiseElement {
        return $('#currentAddress');
    }

    public get permanentAddressInput(): ChainablePromiseElement {
        return $('#permanentAddress');
    }

    public get submitButton(): ChainablePromiseElement {
        return $('#submit');
    }

    public get result(): ChainablePromiseElement {
        return $('#output');
    }

    async open() {
        await browser.url('https://demoqa.com/text-box');
    }

    async fillTextForm() {
        await this.fullNameInput.setValue('Jane Doe');
        await this.emailInput.setValue('jane.doe@example.com');
        await this.currentAddressInput.setValue('123 Main St');
        await this.permanentAddressInput.setValue('456 Another St');

        await this.submitButton.scrollIntoView();
        await this.submitButton.click();
    }
}

export default new TextformPage();