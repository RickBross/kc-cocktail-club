import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  APP_UPDATED
} from '../constants/AppConstants';

class AppStore extends BaseStore {

  emitChange() {
    this.emit(APP_UPDATED);
  }

  addChangeListener(callback) {
    this.on(APP_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(APP_UPDATED, callback);
  }
}

let store = new AppStore();

export default store;
