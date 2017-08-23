
export class MainPage {
	constructor() {
		this.destinationField = $('#ss');

		this.checkInField = $('.--checkin-field');
		this.checkInMonth = this.checkInField.$('[name="checkin_month"]');
		this.checkInDay = this.checkInField.$('[name="checkin_monthday"]');
		this.checkInYear = this.checkInField.$('[name="checkin_year"]');

		this.checkOutField = $('.--checkout-field');
		this.checkOutMonth = this.checkOutField.$('[name="checkout_month"]');
		this.checkOutDay = this.checkOutField.$('[name="checkout_monthday"]');
		this.checkOutYear = this.checkOutField.$('[name="checkout_year"]');

		this.searchButton = $('.sb-searchbox__button');
	}

	navigate() {
		return browser.get('/');
	}

	async setDestination(destination) {
		await this.destinationField.clear();
		await this.destinationField.sendKeys(destination, protractor.Key.TAB);
	}

	submitSearch() {
		return this.searchButton.click();
	}

	/**
	* @param {string} date Date in format 'DD/MM/YYYY'.
	*/
	async setCheckInDate(date) {
		const day = date.substring(0, 2),
			month = date.substring(3, 5),
			year = date.substring(6, 10);

		await this._setCheckInMonth(month);
		await this._setCheckInDay(day);
		await this._setCheckInYear(year);
	}

	/**
	* @param {string} date Date in format 'DD/MM/YYYY'.
	*/
	async setCheckOutDate(date) {
		const day = date.substring(0, 2),
			month = date.substring(3, 5),
			year = date.substring(6, 10);

		await this._setCheckOutMonth(month);
		await this._setCheckOutDay(day);
		await this._setCheckOutYear(year);
	}

	async _setCheckInMonth(month) {
		await this.checkInMonth.clear();
		await this.checkInMonth.sendKeys(month);
	}

	async _setCheckInDay(day) {
		await this.checkInDay.clear();
		await this.checkInDay.sendKeys(day);
	}

	async _setCheckInYear(year) {
		await this.checkInYear.clear();
		await this.checkInYear.sendKeys(year);
	}

	async _setCheckOutMonth(month) {
		await this.checkOutMonth.clear();
		await this.checkOutMonth.sendKeys(month);
	}

	async _setCheckOutDay(day) {
		await this.checkOutDay.clear();
		await this.checkOutDay.sendKeys(day);
	}

	async _setCheckOutYear(year) {
		await this.checkOutYear.clear();
		await this.checkOutYear.sendKeys(year);
	}

}