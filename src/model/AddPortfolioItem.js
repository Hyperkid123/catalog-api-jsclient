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

import ApiClient from '../ApiClient';

/**
 * The AddPortfolioItem model module.
 * @module model/AddPortfolioItem
 * @version 0.1.0
 */
class AddPortfolioItem {
    /**
     * Constructs a new <code>AddPortfolioItem</code>.
     * @alias module:model/AddPortfolioItem
     */
    constructor() { 
        
        AddPortfolioItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddPortfolioItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddPortfolioItem} obj Optional instance to populate.
     * @return {module:model/AddPortfolioItem} The populated <code>AddPortfolioItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddPortfolioItem();

            if (data.hasOwnProperty('portfolio_item_id')) {
                obj['portfolio_item_id'] = ApiClient.convertToType(data['portfolio_item_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * This is the id of the portfolio item object
 * @member {String} portfolio_item_id
 */
AddPortfolioItem.prototype['portfolio_item_id'] = undefined;






export default AddPortfolioItem;
