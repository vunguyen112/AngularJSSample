<input type="text" ng-model="criteria" ng-keyup="search()"
	placeholder="What are you looking for?" />
<table>
	<thead>
		<tr>
			<th><a href="" ng-click="field = 'plate'; order = !order">
					Plate </a></th>
			<th><a href="" ng-click="field = 'color'; order = !order">
					Color </a></th>
			<th><a href="" ng-click="field = 'entrance'; order = !order">
					Entrance </a></th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="car in cars | filter : criteria | orderBy : field:order">
			<td><a href="#/car/{{car.id}}">{{car.plate}}</a></td>
			<td>{{car.color}}</td>
			<td>{{car.entrance | date:'dd/MM/yyyy hh:mm:ss'}}</td>
		</tr>
	</tbody>
</table>
<form id="carForm" name="carForm">
	<input type="text" name="plateField" ng-model="car.plate"
		placeholder="What's the plate?" ng-required="true" ng-mixlength="6"
		ng-maxlength="10" /> <select ng-model="car.color"
		ng-options="color for color in colors">Pick color
	</select>
	<button ng-click="addCar(car)" ng-disabled="carForm.$invalid">Park</button>
	<alert
		ng-show="carForm.plateField.$dirty &&  carForm.plateField.$invalid"
		topic="Something went wrong!"> <span
		ng-show="carForm.plateField.$error.required"> You must inform
		the plate of the car! </span> <span
		ng-show="carForm.plateField.$error.minlength"> The plate must
		have at least 6 characters! </span>
		<span ng-show="carForm.plateField.$error.maxlength">
			The plate must have at most 10 characters!
		</span>
	</alert>
</form>
<div ng-show="resultSearch!==undefined && resultSearch.length > 0">
	<table>
		<thead>
			<tr>
				<th><a href="" ng-click="field = 'plate'; order = !order">
						Plate </a></th>
				<th><a href="" ng-click="field = 'color'; order = !order">
						Color </a></th>
				<th><a href="" ng-click="field = 'entrance'; order = !order">
						Entrance </a></th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="car in resultSearch | orderBy : field:order">
				<td><a href="#/car/{{car.id}}">{{car.plate}}</a></td>
				<td>{{car.color}}</td>
				<td>{{car.entrance | date:'dd/MM/yyyy hh:mm:ss'}}</td>
			</tr>
		</tbody>
	</table>
</div>
<div ng-show="message!==undefined">
{{message}}
</div>