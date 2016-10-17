import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = new Set([]);
    this.props = new Set([]);
  }

  setAll(items) {
    this.data = new Set(items);
    this.emitChange();
  }

  getAll() {
    return Array.from(this.data);
  }

  set(item) {
    if (!this.data.has(item)) {
      this.data.add(item);
      this.emitChange();
    }
  }

  setProps(prop) {
    for(var i in prop){
      this.props[i] = prop[i];
      this.emitChange();
    }
  }

  getProp(prop) {
    return this.props[prop];
  }

  getProps(prop) {
    return this.props;
  }

  remove(item) {
    this.data.delete(item);
    this.emitChange();
  }
}
