import checkboxPage from '../pageobjects/checkbox.page';
import { expect } from '@wdio/globals';

describe('Checkbox page using POM', () => {
  it('should select the Documents checkbox', async () => {
    await checkboxPage.open();
    await checkboxPage.selectDocumentsCheckbox();

    await expect(checkboxPage.result).toHaveText('documents');
  });
});