(function(_, angular){
    'use strict';

    angular.module('SearchApp.photosService', ['ngResource'])
        .constant('FLICKR_API_URL', 'https://api.flickr.com/services/rest/')
        .provider('photoSearchService', function(){
            this.APIKey = '';

            /**
             * Set API key
             *
             * @param APIKey    New Api key
             */
            this.setAPIKey = function(APIKey){
                this.APIKey = APIKey;
            };

            // provider getter
            this.$get = function($http, FLICKR_API_URL){
                var APIKey = this.APIKey;

                /**
                 * Basic GET
                 *
                 * @param {string}method        Flickr method (https://www.flickr.com/services/api/)
                 * @param {object}[params={}]   Extra parameters for request
                 */
                function get(method, params){
                    return $http({
                        method: 'GET',
                        url: FLICKR_API_URL,
                        params: _.extend({
                            'api_key': APIKey,
                            method: method,
                            format: 'json',
                            nojsoncallback: '1'
                        }, params || {})
                    });
                }

                // Service Interface
                return {
                    /**
                     * Get picture details
                     *
                     * @param {number}photoId   Picture ID
                     * @returns {promise}
                     */
                    getDetails: function(photoId){
                        return get('flickr.photos.getInfo', {'photo_id': photoId});
                    },
                    /**
                     * Get pictures from Flickr based on search params
                     * @param {string|object}searchParams  Search text OR parameter object
                     * @return {promise}
                     */
                    search: function(searchParams){
                        // Check the parameter type
                        searchParams = _.isString(searchParams) ? _.object([['text', searchParams]]) : searchParams;

                        // request data
                        return get('flickr.photos.search', _.extend({page: 1, 'per_page': 24}, searchParams));
                    }
                };
            };
        });

})(_, angular);
