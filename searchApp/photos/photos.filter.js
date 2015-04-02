(function(angular){
    'use strict';

    angular.module('SearchApp.photoFilter', [])
    /**
     * Flickr URL filter
     */
        .filter('flickrUrl', function(){
            /**
             * Generate a valid Flickr photo URL from parameters
             *
             * @param{{farm:number, server:string, id:string, secret:string}}photo  Flickr photo description
             * @param{string}[size]     Optional size parameter, valid chars: [sqtmnzcbhko]
             * @return {string}         Valid Flickr photo url
             * @link https://www.flickr.com/services/api/misc.urls.html
             *
             * @example
             *  <img ng-src="{{ data.photo|flickrUrl }}">
             *  <img ng-src="{{ data.photo|flickrUrl:'q' }}">
             */
            return function(photo, size){
                // create size part
                size = /^[sqtmnzcbhko]$/.test(size) ? '_' + size : '';

                // create URL
                return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + size + '.jpg';
            };
        });
})(angular);
