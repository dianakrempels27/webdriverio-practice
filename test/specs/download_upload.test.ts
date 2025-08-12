import downloadUpload from '../pageobjects/download_upload.page';
import {expect} from '@wdio/globals';

describe('Test download and upload buttons', () => {
    it('should check the download button and the path', async () => {
        await downloadUpload.open();

        await downloadUpload.downloadButton.click();

        const href = await downloadUpload.downloadButton.getAttribute('href');
        expect(href).toBeDefined();
        expect(href.startsWith('data:')).toBe(true);
    })

    it('should check the upload button', async () => {
        await downloadUpload.open();

        const path = require('path');
        const filePath = path.join(process.cwd(), 'test/testData/myImage.jpeg');
        await downloadUpload.uploadButton.setValue(filePath);

        await expect(downloadUpload.uploadedFile).toBeDisplayed();
    })
})