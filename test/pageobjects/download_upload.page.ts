/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class DowbloadUpload {
    async open() {
        await browser.url('https://demoqa.com/upload-download');
    }

    public get downloadButton(): ChainablePromiseElement {
        return $('#downloadButton');
    }

    public get uploadButton(): ChainablePromiseElement {
        return $('#uploadFile');
    }

    public get uploadedFile(): ChainablePromiseElement {
        return $('#uploadedFilePath');
    }
}

export default new DowbloadUpload();