/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class BrokenElements {
    async open() {
        await browser.url('https://demoqa.com/broken');
    }

    public get validImage(): ChainablePromiseElement {
        return $('img[src="/images/Toolsqa.jpg"]');
    }

    public get brokenImage(): ChainablePromiseElement {
        return $('img[src="/images/Toolsqa_1.jpg"]');
    }

    public get validLink(): ChainablePromiseElement {
        return $('a[href="http://demoqa.com"]');
    }

    public get brokenLink(): ChainablePromiseElement {
        return $('a[href="http://the-internet.herokuapp.com/status_codes/500"]')
    }
}

export default new BrokenElements();