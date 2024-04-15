const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(); // Launching a headless browser
  const page = await browser.newPage(); // Creating a new page

  await page.goto('https://www.youtube.com'); // Navigating to a website

  await page.waitForTimeout(500); // Waiting for 500 milliseconds

  const pageSourceHTML = await page.content(); // Getting the page source HTML

  await browser.close(); // Closing the browser

  console.log(pageSourceHTML); // Outputting the page source HTML
})();
