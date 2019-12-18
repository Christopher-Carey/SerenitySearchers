const puppeteer = require('puppeteer-core');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Serenity', { useNewUrlParser: true, useUnifiedTopology: true });

const QuoteSchema = new mongoose.Schema({
    date: String,
    content: Array
})
Quote = mongoose.model('Quote', QuoteSchema);

(async () => {
    const browser = await puppeteer.launch({ executablePath: "./node_modules/puppeteer/.local-chromium/win64-706915/chrome-win/chrome.exe" });
    const page = await browser.newPage();
    await page.goto('https://www.hazeldenbettyford.org/thought-for-the-day/twenty-four-hours-a-day');
    var dayValue;
    var contentText;
    var newArr = []
    var text;
    var text2;
    for (var i = 0; i < 5; i++) {
        console.log("+")
        newArr = [];
        day = await page.$('.article__date');
        dayValue = await page.evaluate(day => day.textContent, day);
        text = await page.evaluate(() => Array.from(document.querySelectorAll('.thoughtBoldBlue'), element => element.textContent));
        text2 = await page.evaluate(() => Array.from(document.querySelectorAll('.thoughtGray'), element => element.textContent));
        for (var x = 0; x < text.length; x++) {
            newArr.push(text[x])
            newArr.push(text2[x])
        }
        Quote.create({ "date": dayValue, "content": newArr })
        var tweetHandle2 = await page.$('.article__next-thought');
        await tweetHandle2.click()
        await page.waitFor(3000)
    }
    await browser.close();
})();

//==================================================================================
const puppeteer = require('puppeteer-core');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Serenity', { useNewUrlParser: true, useUnifiedTopology: true });
const LocationSchema = new mongoose.Schema({
    Time: String,
    Name: String,
    Location: String,
    Address: String,
    City: String
})
Location = mongoose.model('Location', LocationSchema);

(async () => {
    var newarr = [];
    const browser = await puppeteer.launch({ executablePath: "./node_modules/puppeteer/.local-chromium/win64-706915/chrome-win/chrome.exe" });
    const page = await browser.newPage();
    await page.goto('https://www.chicagoaa.org/meetings/?tsml-day=any');
    time = await page.evaluate(() => Array.from(document.querySelectorAll('.notes .time'), element => element.textContent));
    name = await page.evaluate(() => Array.from(document.querySelectorAll('.notes .name a'), element => element.textContent));
    location = await page.evaluate(() => Array.from(document.querySelectorAll('.notes .location'), element => element.textContent));
    address = await page.evaluate(() => Array.from(document.querySelectorAll('.notes .address'), element => element.textContent));
    city = await page.evaluate(() => Array.from(document.querySelectorAll('.notes .region'), element => element.textContent));
    console.log("done")

    for (var i = 0; i < time.length; i++) {
        Location.create({
            "Time": time[i],
            "Name": name[i],
            "Location": location[i].replace(/\s+/g, " "),
            "Address": address[i],
            "City": city[i]
        });
    }
    console.log("done")

    browser.close();
})();

//==================================================================================

const puppeteer = require('puppeteer-core');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Serenity', { useNewUrlParser: true, useUnifiedTopology: true });
const TreatmentSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    City: String
})
Treatment = mongoose.model('Treatment', TreatmentSchema);

(async () => {

    const browser = await puppeteer.launch({ executablePath: "./node_modules/puppeteer/.local-chromium/win64-706915/chrome-win/chrome.exe" });
    const page = await browser.newPage();
    await page.goto('https://www.drug-rehabs.org/Illinois-Chicago-drug-rehab-treatment.htm');
    for (var i = 0; i < 16; i++) {
        fullname = await page.evaluate(() => Array.from(document.querySelectorAll('.col-md-6 address strong'), element => element.textContent));
        fulladdress = await page.evaluate(() => Array.from(document.querySelectorAll('.col-md-6 address span'), element => element.textContent));
        var tweetHandle2 = await page.$(`.pagination li:nth-child(${i+2}) a`);
        var address = []
        var name = []
        for(var i=0;i<fulladdress.length;i+=4){
            address.push(fulladdress[i])
        }
        for (var i = 0; i < fullname.length; i++) {
            Treatment.create({
                "Name": fullname[i],
                "Address": address[i],
                "City": "Chicago"
            });
        }
        await tweetHandle2.click()
        await page.waitFor(3000)
    }
    console.log("done")
    browser.close();
})();


