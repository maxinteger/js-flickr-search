(function(angular){
    'use strinct';

    angular.module('SearchApp.photoFilter', [])
        .filter('FlickrUrl', function(){
            return function(photo, size){
                size = /^[sqtmnzcbhko]$/.test(size) ? '_' + size : '';
                return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + size + '.jpg';
            };
        });
})(angular);
