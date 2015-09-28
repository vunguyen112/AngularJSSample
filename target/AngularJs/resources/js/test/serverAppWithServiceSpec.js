describe("Server App Intergration", function() {
    beforeEach(module('myApp'));
    var ctrl, scope, mockBackend;
    beforeEach(inject(function($controller, $httpBackend, $rootScope) {
        mockBackend = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('parkingController', {
            $scope : scope
        });
    }));

    it('Check loading list car', function() {
        scope.load();
        mockBackend.expectGET('cars').respond(200, [ {
            id : 1,
            plate : 'Plate',
            color : 'green'
        } ]);
        expect(scope.cars).toEqual([]);
        mockBackend.flush();
        expect(scope.cars).toEqual([ {
            id : 1,
            plate : 'Plate',
            color : 'green'
        } ]);
    });

    it('Check loading car', function() {
        scope.test();
        mockBackend.expectGET('car/1').respond(400, {
            msg : 'Not Found'
        });
        expect(scope.car).toEqual({});
        mockBackend.flush();
        expect(scope.errorMessage).toEqual('Not Found');
    });

    afterEach(function() {
        mockBackend.verifyNoOutstandingExpectation();
        mockBackend.verifyNoOutstandingRequest();
    });
});