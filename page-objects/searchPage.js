
export class SearchPage {
	constructor() {
		this.searchItemAddressLinks = $$('.district_link');
		this.searchResultBlocks = $$('.sr_item');
	}

	/**
	* @return {Array.<string>} Search results Addresses.
	*/
	async getSearchItemsAddresses() {
		const addresses = [];

		for (let i = 0; i < await this.searchItemAddressLinks.count(); i++) {
			addresses.push(await this.searchItemAddressLinks.get(i).getText());
		}

		return addresses;
	}

	getSearchResultBlockCount() {
		return this.searchResultBlocks.count()
	}
}