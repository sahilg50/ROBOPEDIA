import { CHANGE_SEARCH_FIELD } from './actions.js';

export const setSearchField = (text) => ({
	type: 'CHANGE_SEARCH_FIELD',
	payload: text,
});
