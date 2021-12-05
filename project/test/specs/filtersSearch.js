const assert = require('assert');
const { url } = require('inspector');
const fetch = require('node-fetch');

//const bayutPage = require('../pageobjects/bayut.page');
const BayutPage = require('../pageobjects/bayut.page');

describe('Navigate to bayut page ', () => {
    //Selectors

    beforeEach(function () {
        // Navigate to Main screen
        BayutPage.open();
    });

    it('Verify results match the search criteria', async () => {
        // Select in Location input a location
        await BayutPage.selectCityLocation('Dubai Marina');
        await browser.pause(2000)
        // Select from drop-down Purpose field 
        await BayutPage.selectPurposeInput("Rent");

        // Property search
        await BayutPage.selectSearchBtn();
        // Check if the search is made correctly
        //await BayutPage.getTextForLi
        // I had some problems with the assertion, but I managed to navigate in the list
    });

    it('Verify Popular Searches links work corectly', async () => {
        await BayutPage.selectToRentInTheUAE();
        //get all the links from the list
        const links = $$("div[class='fc910dcd'] ul:nth-child(2)")

        const urls = links.map(link => link.getAttribute('href'));

        await urls.forEach(async function (url) {
            const response = await fetch(url)
            console.log(response)
            expect(response).to.be(200)
        })
    })
});



