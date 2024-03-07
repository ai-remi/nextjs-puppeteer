import puppeteer from "puppeteer";

describe("Form Test", () => {
  test("should fill the form", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to your page
    await page.goto("http://google.com/");

    await browser.close();
  }, 16000); // Increase timeout as needed
});
