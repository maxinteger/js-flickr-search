(function(angular){
    'use strict';

    /**
     * Collect photos sub modules
     */
    angular.module('SearchApp.photos', [
        'SearchApp.photosService',
        'SearchApp.photosCtrl',
        'SearchApp.photoFilter'
    ]);
})(angular);
