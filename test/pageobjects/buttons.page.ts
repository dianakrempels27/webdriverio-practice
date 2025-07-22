/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class ButtonsPage {
    public get doubleClickButton(): ChainablePromiseElement {
        return $('#doubleClickBtn');
    }

    public get rightClickMeButton(): ChainablePromiseElement {
        return $('#rightClickBtn');
    }

    public get clickMeButton(): ChainablePromiseElement {
        return $('//button[text()="Click Me"]');
    }

    public get doubleClickMessage(): ChainablePromiseElement {
        return $('#doubleClickMessage');
    }

    public get rightClickMeMessage(): ChainablePromiseElement {
        return $('#rightClickMessage');
    }

    public get clickMeMessage(): ChainablePromiseElement {
        return $('#dynamicClickMessage');
    }

    async open() {
        await browser.url('https://demoqa.com/buttons');
    }

    async clickButtons() {
        await this.doubleClickButton.doubleClick();
        await this.rightClickMeButton.click({ button: 'right' });
        await this.clickMeButton.click();
    }
}

export default new ButtonsPage();