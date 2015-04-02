(function(_, angular){
    'use strict';

    angular.module('SearchApp.photosCtrl', ['SearchApp.photosService', 'mgcrea.ngStrap'])
    /**
     * Photo search controller
     */
        .controller('PhotoSearchCtrl', function($scope, photoSearchService, $modal){
            var self = this;

            /**
             * Get photos
             */
            function getPhotos(){
                photoSearchService.search({
                    text: self.searchText,
                    page: self.page
                }).then(function(res){
                    if (res.data.stat === 'ok'){
                        self.result = res.data.photos;
                    } else {
                        self.result = null;
                    }
                });
            }

            self.searchText = '';
            self.page = 1;

            /**
             * Start a new search;
             */
            self.search = function search(){
                self.page = 1;
                getPhotos();
            };


            /**
             * @returns {boolean}   Previous page is exists or not
             */
            self.hasPrevPage = function hasPrevPage(){
                return self.result && self.page > 1;
            };

            /**
             * Jump to the previous page
             */
            self.prevPage = function prevPage(){
                if (self.hasPrevPage()){
                    self.page -= 1;
                    getPhotos();
                }
            };

            /**
             * @returns {boolean}   Next page is exists or not
             */
            self.hasNextPage = function hasNextPage(){
                return self.result && self.page < self.result.pages;
            };

            /**
             * Jump to the next page
             */
            self.nextPage = function nextPage(){
                if (self.hasNextPage()){
                    self.page += 1;
                    getPhotos();
                }
            };

            /**
             * Open the photo details modal
             *
             * @param {{id:number}}photo     Flickr photo descriptor, that contains the photo id
             */
            self.showDetails = function(photo) {
                photoSearchService.getDetails(photo.id).then(function(res){
                    $modal({scope: _.extend($scope.$new(true), {
                        details: res.data,
                        model: { toggleDetails: false }
                    }), template: '/searchApp/photos/photos.details.tpl.html', show: true});
                });
            };
        });
})(_, angular);
