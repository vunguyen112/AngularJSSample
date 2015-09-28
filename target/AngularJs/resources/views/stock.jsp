<div>
    Name: {{stockData.name}}
    Price: {{stockData.price | currency}}
    Percentage Change: {{getChange(stockData) + '%'}}
    <button ng-click="whenSelect()">Change Stock</button>
</div>