/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class DynamicElements {
    async open() {
        await browser.url('https://demoqa.com/dynamic-properties');
    }

    public get enableButton(): ChainablePromiseElement {
        return $('#enableAfter');
    }

    public get colorButton(): ChainablePromiseElement {
        return $('#colorChange');
    }

    public get visibleButton(): ChainablePromiseElement {
        return $('#visibleAfter');
    }
}

export default new DynamicElements();