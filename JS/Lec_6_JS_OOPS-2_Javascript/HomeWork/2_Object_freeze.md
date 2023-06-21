Que : create a polyfill of  Object.freeze


if (!Object.prototype.freeze) {
  Object.defineProperty(Object.prototype, 'freeze', {
    value: function() {
      // Check if 'this' is an object
      if (typeof this !== 'object' || this === null) {
        throw new TypeError('Object.freeze can only be called on an object.');
      }

      // Iterate over the object's properties
      for (var prop in this) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
          var value = this[prop];

          // Recursively freeze nested objects
          if (typeof value === 'object' && value !== null) {
            value.freeze();
          }
        }
      }

      // Prevent new properties from being added to the object
      Object.preventExtensions(this);

      // Prevent modifications to existing properties
      Object.seal(this);

      return this;
    },
    configurable: true,
    writable: true
  });
}
