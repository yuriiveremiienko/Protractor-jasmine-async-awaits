import pages from '../page-objects'

export class SearchAssertions {

	async checkSearchResultsDisplayed() {
		expect(await pages.SearchPage.getSearchResultBlockCount()).toBeGreaterThan(0,
			'Search results should be displayed on searchPage'
		);
	}
	/**
	* @param {string} address Address to check.
	*/
	async checkSearchResultsContainsAddress(address) {
		const addresses = await pages.SearchPage.getSearchItemsAddresses();

		addresses.forEach((item) => {
			expect(item).toContain(address,
				'Search results should contain destination city'
			);
		});
	}
}