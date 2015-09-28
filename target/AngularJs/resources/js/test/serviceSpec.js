describe('ItemCtrl with inline block', function() {
    var ctrl, mockService, scope;
    beforeEach(module('myApp'));
    beforeEach(module('myAppMock'));
    /*
     * beforeEach(module(function($provide) { mockService = { list : function() {
     * return [ { id : 1, label : 'Mock' } ]; } }; $provide.value('ItemService',
     * mockService); }));
     */
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('ItemController', {
            $scope : scope
        });
    }));

    it('should load mock up items', function() {
        expect(scope.items).toEqual([ {
            id : 1,
            label : 'Mock'
        } ]);
    });
});