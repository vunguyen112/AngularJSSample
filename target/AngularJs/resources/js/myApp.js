var app = angular.module("myApp", []);
angular.module('myAppMock', []).factory('ItemService', function() {
    return {
        list : function() {
            return [ {
                id : 1,
                label : 'Mock'
            } ];
        }
    };
});