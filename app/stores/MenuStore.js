import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  MENU_UPDATED
} from '../constants/AppConstants';

class MenuStore extends BaseStore {

  emitChange() {
    this.emit(MENU_UPDATED);
  }

  addChangeListener(callback) {
    this.on(MENU_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(MENU_UPDATED, callback);
  }
}

let store = new MenuStore();

export default store;
