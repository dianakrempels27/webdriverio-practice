/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class LinksPage {
    async open() {
        await browser.url('https://demoqa.com/links');
    }

    public get homeLink(): ChainablePromiseElement {
        return $('#simpleLink');
    }

    async clickHomeLink() {
        await this.homeLink.click();
    }
}

export default new LinksPage();