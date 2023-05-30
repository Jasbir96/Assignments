Que : create a polyfill of  Object.seal
Solution: 
if (!Object.prototype.seal) {
  Object.defineProperty(Object.prototype, 'seal', {
    value: function() {
      // Check if 'this' is an object
      if (typeof this !== 'object' || this === null) {
        throw new TypeError('Object.seal can only be called on an object.');
      }

      // Iterate over the object's properties
      for (var prop in this) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
          Object.defineProperty(this, prop, {
            configurable: false,
          });
        }
      }

      // Prevent new properties from being added to the object
      Object.preventExtensions(this);

      return this;
    },
    configurable: true,
    writable: true
  });
}
