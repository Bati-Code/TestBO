import { combineReducers } from 'redux';
import financeList from '../action/finance_list_action';
import pageStore from '../action/page_action';
import token_Store from '../action/token_action';


export default combineReducers({
    pageStore, token_Store, financeList
});