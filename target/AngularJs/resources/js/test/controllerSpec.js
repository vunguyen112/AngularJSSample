describe("ListCtrl", function() {
    var ctrl, scope;
    beforeEach(module("myApp"));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller("ListCtrl", {
            $scope : scope
        });
    }));
    it("Should have items available on load", function() {
        expect(scope.items).toEqual([ {
            id : 1,
            label : "First",
            done : true
        }, {
            id : 2,
            label : "Second",
            done : false
        } ]);
    });

    it("Should have highlight items based on state", function() {
        var item = {
            id : 1,
            label : "First",
            done : true
        };
        var actualClass = scope.getDoneClass(item);
        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeFalsy();

        item.done = false;
        var actualClass = scope.getDoneClass(item);
        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeTruthy();
    });
});