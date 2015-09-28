app.factory("CarService", function($http) {
    var _getCars = function() {
        return $http.get("cars");
    };
    var _getCar = function(id) {
        return $http.get("car/" + id);
    };

    return {
        getCars : _getCars,
        getCar : _getCar
    };
});
