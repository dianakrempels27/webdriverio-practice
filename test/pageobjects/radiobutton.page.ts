/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class RadioButtonPage {
    public get answerYes(): ChainablePromiseElement {
        return $('label[for="yesRadio"]');
    }

    public get answerImpressive(): ChainablePromiseElement {
        return $('label[for="impressiveRadio"]');
    }

    public get result(): ChainablePromiseElement {
        return $('.mt-3')
    };

    async open() {
        await browser.url('https://demoqa.com/radio-button');
    }

    async chooseYesRadioButton() {
        await this.answerYes.click();
    }

    async chooseImpressiveRadioButton() {
        await this.answerImpressive.click();
    }
}

export default new RadioButtonPage();