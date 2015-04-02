(function(){
    'use strict';

    angular.module('SearchApp', [
        'ngSanitize',
        'SearchApp.photos',
        'SearchApp.components.scrollUp'
    ])
        .config(function(photoSearchServiceProvider){
            photoSearchServiceProvider.setAPIKey('4ee950c89e491cdd600611e2399a8ba6');
        });

})(angular);
