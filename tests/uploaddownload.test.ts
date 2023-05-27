import { test } from "@playwright/test";

test("Download files", async ({page})=>{


    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.type("#textbox","Hello this is file download")
    await page.click("#create")
    const [downloadFiles] = await Promise.all([

        page.waitForEvent("download"),
        page.click("#link-to-download")
        

    ])

    const filename = downloadFiles.suggestedFilename();
    await downloadFiles.saveAs(filename)

    await page.waitForTimeout(5000)

})

test("upload files", async ({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

    page.setInputFiles("input[type='file']", ["pineapple_PNG2756.png"])

    await page.waitForTimeout(5000)

})

test("upload files using fileChooser", async ({page}) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

    const [upladfiles] = await Promise.all([

        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    await upladfiles.setFiles("pineapple_PNG2756.png")
    await page.waitForTimeout(5000)

})