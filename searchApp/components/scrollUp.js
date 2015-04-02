(function($, angular){
    'use strict';
    angular.module('SearchApp.components.scrollUp', [])
    /**
     * Scroll up directive
     */
        .directive('scrollUp', function(){
            return {
                restrict: 'A',
                link: function(scope, elm, attrs){
                    /**
                     * Scroll up to the page top, with animation
                     *
                     * @param {event}event
                     */
                    function scrollUp(event){
                        event.preventDefault();
                        $('html,body').animate({ scrollTop: 0 }, parseInt(attrs.scrollUpSpeed, 10) || 200 );
                    }

                    elm.on('click', scrollUp);

                    // clean event handler
                    scope.$on('$destroy', function(){
                        if (elm && elm.off){
                            elm.off(scrollUp);
                        }
                    });
                }
            };
        });
})(jQuery, angular);
