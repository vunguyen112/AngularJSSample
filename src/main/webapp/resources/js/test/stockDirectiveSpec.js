describe(
        'Stock Directive Testing',
        function() {
            beforeEach(module('myApp'));
            var compile, rootScope, mockBackend;
            beforeEach(inject(function($compile, $rootScope, $httpBackend) {
                compile = $compile;
                rootScope = $rootScope;
                mockBackend = $httpBackend;
            }));
            it(
                    'Should render HTML based on scope correctly',
                    function() {
                        var scope = rootScope.$new();
                        scope.stock = {
                            name : 'First Stock',
                            price : 200,
                            previous : 100
                        };
                        var scopeClickCalled = '';
                        scope.userClick = function(stockName, stockPrice, stockPrevious) {
                            scopeClickCalled = stockName + "||" + stockPrice + "||" + stockPrevious;
                        };
                        mockBackend.expectGET('resources/views/stock.jsp').respond(
                                200,
                                '<div>' + 'Name: {{stockData.name}}' + 'Price: {{stockData.price | currency}}'
                                        + '</div>');
                        var element = compile(
                                '<div stock-widget stock-data="stock" when-select="userClick(stockName,stockPrice,stockPrevious)"></div>')
                                (scope);
                        scope.$digest();
                        mockBackend.flush();
                        console.log(element.html());
                        expect(element.html()).toEqual(
                                '<div class="ng-binding">' + 'Name: First Stock' + 'Price: $200.00' + '</div>');
                        var compiledElementScope = element.isolateScope();
                        expect(compiledElementScope.stockData).toEqual(scope.stock);
                        expect(compiledElementScope.getChange(compiledElementScope.stockData)).toEqual(100);
                        expect(scopeClickCalled).toEqual('');
                        compiledElementScope.onSelect();
                        expect(scopeClickCalled).toEqual('First Stock||200||100');
                    });
        });