describe('DemoQA Form', () => {
    it('should fill in the text box and submit', async () => {
      await browser.url('https://demoqa.com/text-box');
  
      const fullNameInput = await $('#userName');
      const emailInput = await $('#userEmail');
      const currentAddressInput = await $('#currentAddress');
      const permanentAddressInput = await $('#permanentAddress');
      const submitButton = await $('#submit');
  
      await fullNameInput.setValue('Jane Doe');
      await emailInput.setValue('jane.doe@example.com');
      await currentAddressInput.setValue('123 Main St');
      await permanentAddressInput.setValue('456 Another St');
      await submitButton.scrollIntoView();
      await submitButton.click();
  
      const output = await $('#output');
      await expect(output).toBeDisplayed();
    });
  });