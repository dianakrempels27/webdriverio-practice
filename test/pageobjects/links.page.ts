/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class LinksPage {
    async open() {
        await browser.url('https://demoqa.com/links');
    }

    public get homeLink(): ChainablePromiseElement {
        return $('#simpleLink');
    }

    public get createdLink(): ChainablePromiseElement {
        return $('#created');
    }

    async clickCreatedLink() {
        await this.createdLink.click();
    }

    async clickHomeLink() {
        await this.homeLink.click();
    }
}

export default new LinksPage();