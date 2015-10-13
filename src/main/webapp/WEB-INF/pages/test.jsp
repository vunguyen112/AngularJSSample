<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<style>
.done {
    background-color: green;
}

.pending {
    background-color: yellow;
}
</style>
</head>
<body ng-app="myApp" ng-controller="validateCtrl">
    <div ng-repeat="note in notes" ng-class="getNoteClass(note.done)">
        <span ng-bind="note.assignee"></span>
    </div>

    <script>
                    var app = angular.module('myApp', []);
                    app.controller('validateCtrl', function($scope) {
                        $scope.notes = [ {
                            label : 'first',
                            done : false,
                            assignee : 'Test'
                        }, {
                            label : 'second',
                            done : true
                        } ];
                        $scope.getNoteClass = function(status) {
                            return {
                                done : status,
                                pending : !status
                            };
                        };
                    });
                </script>

</body>
</html>
