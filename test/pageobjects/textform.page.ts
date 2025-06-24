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

    async fillTextForm(
        fullName: string,
        email: string,
        currentAddress: string,
        permanentAddress: string
    ) {
        await this.fullNameInput.setValue(fullName);
        await this.emailInput.setValue(email);
        await this.currentAddressInput.setValue(currentAddress);
        await this.permanentAddressInput.setValue(permanentAddress);

        await this.submitButton.scrollIntoView();
        await this.submitButton.click();
    }
}

export default new TextformPage();