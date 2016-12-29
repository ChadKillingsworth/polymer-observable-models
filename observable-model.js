class ObservableModel {
  constructor() {
    this._observables = new Set();
  }

  /** @return {!Observable} */
  observable() {
    return new Observable(observer => {
      this._observables.add(observer);
      return () => {
        this._observables.delete(observer);
      }
    });
  }

  /**
   * @param {{
   *     path: string,
   *     value: *
   *   }} data
   */
  emit(data) {
    this._observables.forEach(value => {
      value.next(data);
    });
  }
}
