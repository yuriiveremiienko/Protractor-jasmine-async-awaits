import pages from '../page-objects'

export class Search {

	/**
	* @param {Object}
	* @param {string} destination
	* @param {string} checkInDate Date in format 'DD/MM/YYYY'.
	* @param {string} checkOutDate Date in format 'DD/MM/YYYY'.
	*/
	async mainPageSearch({ destination, checkInDate, checkOutDate }) {
		await pages.MainPage.navigate();
		await pages.MainPage.setDestination(destination);
		await pages.MainPage.setCheckInDate(checkInDate);
		await pages.MainPage.setCheckOutDate(checkOutDate);
		await pages.MainPage.submitSearch();
	}
}