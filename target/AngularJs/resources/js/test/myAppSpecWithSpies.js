describe('ItemCtrl with spies', function() {
    var ctrl, scope, itemService;
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, ItemService, $rootScope) {
        spyOn(ItemService, 'list').and.callThrough();
        spyOn(ItemService, 'add').and.callThrough();
        itemService = ItemService;
        scope = $rootScope.$new();
        ctrl = $controller('ItemController', {
            $scope : scope
        });
        itemService.add({
            id : 3,
            label : 'Test'
        });
    }));

    it('Tracks that list was call', function() {
        expect(itemService.list).toHaveBeenCalled();
    });
    it('Tracks that add was call with', function() {
        expect(itemService.add).toHaveBeenCalledWith({
            id : 3,
            label : 'Test'
        });
    });
    it("Tracks the number of times function list was called", function() {
        expect(itemService.list.calls.count()).toEqual(1);
    });
    it("Tracks the number of times function add was called", function() {
        expect(itemService.add.calls.count()).toEqual(1);
    });
    it("Tracks the data of service", function() {
        expect(scope.items).toEqual([ {
            id : 1,
            label : 'Item 1'
        }, {
            id : 2,
            label : 'Item 2'
        }, {
            id : 3,
            label : 'Test'
        } ]);
    });
});