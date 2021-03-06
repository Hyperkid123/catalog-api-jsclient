/**
 * Catalog API
 * This is a API to fetch and order catalog items from different cloud sources
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CatalogApi);
  }
}(this, function(expect, CatalogApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CatalogApi.ProgressMessage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProgressMessage', function() {
    it('should create an instance of ProgressMessage', function() {
      // uncomment below and update the code to test ProgressMessage
      //var instane = new CatalogApi.ProgressMessage();
      //expect(instance).to.be.a(CatalogApi.ProgressMessage);
    });

    it('should have the property receivedAt (base name: "received_at")', function() {
      // uncomment below and update the code to test the property receivedAt
      //var instane = new CatalogApi.ProgressMessage();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new CatalogApi.ProgressMessage();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new CatalogApi.ProgressMessage();
      //expect(instance).to.be();
    });

    it('should have the property orderItemId (base name: "order_item_id")', function() {
      // uncomment below and update the code to test the property orderItemId
      //var instane = new CatalogApi.ProgressMessage();
      //expect(instance).to.be();
    });

  });

}));
