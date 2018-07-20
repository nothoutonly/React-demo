import {VisibilityFilters} from "../actions";

const visibilityFilters = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case 'VisibilityFilters':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilters