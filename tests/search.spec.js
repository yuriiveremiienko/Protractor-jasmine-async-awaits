'use strict';
import pages from '../page-objects';
import actions from '../actions';
import testData from './search.testData';

describe('Search on main page', () => {

	beforeAll(async () => {
		await browser.waitForAngularEnabled(false);
	});

	beforeEach(() => {
		allure.feature('Main Page');
		allure.story('Search');
		allure.addEnvironment('Test Server', browser.baseUrl)
	});

	testData.searchParams.forEach(param => {
		it(`should only show results for ${param.destination}`, async () => {
			allure.description(`Search on main page should show correct results for 
				"${param.destination}" for dates ${param.checkInDate} - ${param.checkOutDate}`);
			await actions.Search.mainPageSearch(param);
			await actions.SearchAssertions.checkSearchResultsDisplayed();
			await actions.SearchAssertions.checkSearchResultsContainsAddress(param.destination);
		});
	});

});