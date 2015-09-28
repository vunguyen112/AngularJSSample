app.controller("ListCtrl", function($scope) {
    $scope.items = [ {
        id : 1,
        label : "First",
        done : true
    }, {
        id : 2,
        label : "Second",
        done : false
    } ];
    $scope.getDoneClass = function(item) {
        return {
            finished : item.done,
            unfinished : !item.done
        };
    };
});
app.factory("ItemService", function($log) {
    var items = [ {
        id : 1,
        label : 'Item 1'
    }, {
        id : 2,
        label : 'Item 2'
    } ];
    return {
        list : function() {
            $log.info("Get List");
            return items;
        },
        add : function(item) {
            items.push(item);
        }
    };
});
app.controller("ItemController", function($scope, ItemService) {
    $scope.items = ItemService.list();
});