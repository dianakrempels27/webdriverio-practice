/// <reference types="@wdio/globals/types" />
import type { ChainablePromiseElement } from 'webdriverio';

export class CheckboxPage {
  public get expandButton(): ChainablePromiseElement {
    return $('button[title="Expand all"]');
  }

  public get documentsCheckbox(): ChainablePromiseElement {
    return $('label[for="tree-node-documents"] span.rct-checkbox');
  }

  public get result(): ChainablePromiseElement {
    return $('.text-success');
  }

  async open() {
    await browser.url('https://demoqa.com/checkbox');
  }

  async selectDocumentsCheckbox() {
    await this.expandButton.scrollIntoView();
    await this.expandButton.click();

    await this.documentsCheckbox.scrollIntoView();
    await this.documentsCheckbox.click();
  }
}

export default new CheckboxPage();