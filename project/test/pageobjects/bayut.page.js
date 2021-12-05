
/**
 * sub page containing specific selectors and methods for a specific page
 */
//selectors


class BayutPage {
    get getInputLocation() {
        return $('input[class="a41c4dcc _6a3a3de9"]')
    }

    get getSelectFromLocationList() {
        return $("ul[class='_3eb9be10 _9a03d150'] li[data-selected='true']")
    }

    get getInputPurpose() {
        return $("div[class='ad62c515 _325092f0 _4a6228f4'] div[class='_9dc6d35d'")
    }

    get getSearchBtn() {
        return $("a[class='c3901770 f6d94e28']")
    }
    get getListsOfCities() {
        return $('ul[class="_3eb9be10 _9a03d150"] li button span')
    }

    get getUlCitiesList() {
        return $("ul[class='_357a9937']")
    }

    get getCheckListOfCities() {
        return this.ulCitiesList.$$("li")

    }

    get getTextForLi() {
        return this.checkListOfCities.map(element => element.getText())
    }

    get getListOfDubaiApartments(){
        return $("div[class='fc910dcd'] ul:nth-child(2)")
    }

    get getToRentPopularSearches(){
        return $("div[class='d8530318 _5e65009f']")
    }
    /**
     * define selectors using getter methods
    //  */

    open() {
        return browser.url(`http://bayut.com`)
    }

    async selectPropertiesForSale(name) {
        await this.getListsOfCities.selectByVisibleText(name)
    }

    async selectCityLocation(name) {
        await this.getInputLocation.setValue(name)
        await browser.pause(2000)
        await this.getSelectFromLocationList.click()
    }

    async selectPurposeInput(name) {
        await this.getInputPurpose.click()
        await browser.pause(2000)
        var selectFromList =  $(`button[aria-label=${name}]`)
        await selectFromList.click()
    }

    async selectSearchBtn() {
        await this.getSearchBtn.click()
    }

    async checkTextInTheList(name) {
        await this.getTextForLi.toHaveValueContaining(name)
    }

    async selectToRentInTheUAE(){
        const scrollDown = await $("div[class='d8530318 _5e65009f']")
        const selectToRent = await $("div[class='_8211eb25'] div div:nth-child(2)")
        await scrollDown.scrollIntoView()
        await browser.pause(3000)
        await selectToRent.click()
    }
}

module.exports = new BayutPage();