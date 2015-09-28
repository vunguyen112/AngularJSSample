<!DOCTYPE html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html>
<head>
<spring:url value="/resources/js/angular.js" var="angularJs"></spring:url>
<spring:url value="/resources/js/myController.js" var="myController"></spring:url>
<spring:url value="/resources/js/myApp.js" var="myApp"></spring:url>
</head>
<body ng-app="myApp">
    <div ng-controller="stockController as mainCtrl" style="background-color: gray; azimuth:">
        <h3>List Stocks</h3>
        <div ng-repeat="s in mainCtrl.stocks">
            <div stock-widget stock-data="s" when-select="mainCtrl.onStockSelect()"></div>
        </div>
    </div>
    <script src="${angularJs}"></script>
    <script src="${myApp}"></script>
    <script src="${myController}"></script>
</body>
</html>