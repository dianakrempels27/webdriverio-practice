describe('DemoQA Checkbox', () => {
    it('should select the Documents checkbox', async () => {
        await browser.url('https://demoqa.com/checkbox');

        const expandButton = await $('button[title="Expand all"]');
        await expandButton.scrollIntoView();
        await expandButton.click();

        const documentsCheckbox = await $('label[for="tree-node-documents"] span.rct-checkbox');
        await documentsCheckbox.scrollIntoView();
        await documentsCheckbox.click();

        const result = await $('.text-success');
        await expect(result).toHaveText('documents');
    });
});