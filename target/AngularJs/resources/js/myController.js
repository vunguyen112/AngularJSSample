app.controller('parkingController', function($scope, $http, CarService) {
    $scope.colors = [ 'White', 'Black', 'Blue', 'Red', 'Silver' ];
    $scope.cars = [];
    $scope.car = {};
    $scope.errorMessage = '';
    $scope.load = function() {
        CarService.getCars().success(function(response, status, headers, config) {
            $scope.cars = response;
        }).error(function(response, status, headers, config) {
            $scope.errorMessage = response.data.msg;
        });
    };
    $scope.test = function() {
        CarService.getCar(1).success(function(response, status, headers, config) {
            $scope.car = response;
        }).error(function(response, status, headers, config) {
            $scope.errorMessage = response.msg;
        });
    };
});
app.filter('timeAgo', function() {

});
app.controller('stockController', function() {
    var self = this;
    self.stocks = [ {
        name : 'First Stock',
        price : 100,
        previous : 220
    }, {
        name : 'Second Stock',
        price : 140,
        previous : 120
    }, {
        name : 'Third Stock',
        price : 120,
        previous : 240
    }, {
        name : 'Fourth Stock',
        price : 140,
        previous : 250
    } ];
    self.onStockSelect = function(name, price) {
        alert("Test");
        console.log("Name: " + name + "|| Price: " + price);
    };
});
app.directive('stockWidget', function() {
    return {
        templateUrl : 'resources/views/stock.jsp',
        restrict : 'AE',
        scope : {
            stockData : '=',
            whenSelect : '&'
        },
        link : function($scope, $elements, $attrs) {
            $scope.getChange = function(stock) {
                return Math.ceil((stock.price - stock.previous) / stock.previous * 100);
            };
            $scope.onSelect = function() {
                $scope.whenSelect({
                    stockName : $scope.stockData.name,
                    stockPrice : $scope.stockData.price,
                    stockPrevious : $scope.stockData.previous
                });
            };
        }
    };
});