(function(angular){
    'use strict';

    angular.module('SearchApp.photos', [
        'SearchApp.photosService',
        'SearchApp.photosCtrl',
        'SearchApp.photoFilter'
    ]);
})(angular);
