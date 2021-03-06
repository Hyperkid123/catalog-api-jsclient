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


import ApiClient from "../ApiClient";
import PortfolioItem from '../model/PortfolioItem';

/**
* Default service.
* @module api/DefaultApi
* @version 0.1.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Edit an existing Portfolio Item
     * Returns the edited Portfolio Item Object
     * @param {String} id ID of the resource
     * @param {module:model/PortfolioItem} portfolioItem Parameters needed to update a Portfolio Item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PortfolioItem} and HTTP response
     */
    updatePortfolioItemWithHttpInfo(id, portfolioItem) {
      let postBody = portfolioItem;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePortfolioItem");
      }

      // verify the required parameter 'portfolioItem' is set
      if (portfolioItem === undefined || portfolioItem === null) {
        throw new Error("Missing the required parameter 'portfolioItem' when calling updatePortfolioItem");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyAuth', 'BasicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PortfolioItem;

      return this.apiClient.callApi(
        '/portfolio_items/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Edit an existing Portfolio Item
     * Returns the edited Portfolio Item Object
     * @param {String} id ID of the resource
     * @param {module:model/PortfolioItem} portfolioItem Parameters needed to update a Portfolio Item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioItem}
     */
    updatePortfolioItem(id, portfolioItem) {
      return this.updatePortfolioItemWithHttpInfo(id, portfolioItem)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
