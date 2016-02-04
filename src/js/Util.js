var Util = {
  objectCreateWithAdder: function (valuePrefix = "") {
    const obj = {};

    // Make the properties of the object read-only, but the object extensible.
    Object.defineProperty(obj, "add", {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function (key) {
        Object.defineProperty(obj, key, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: valuePrefix + key
        });
      }
    });

    return obj;
  }
};

export default Util;
