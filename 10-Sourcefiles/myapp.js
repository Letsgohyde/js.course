/*console.log( "hellow world" );

console.log( "200" );

console.log( true );

console.log( null );

var num = 10;
console.log( num );

console.log( "string", 10.11, true, false, null, num);

console.log("this is a string");
*/

/*function makeCoffee( sugar, milk )
{
    
    var instructions = " Boil water ";
    
    instructions += " pour into cup,";
    
    instructions += "add coffee granules,";
    
    instructions += " add " + sugar + " spoons of sugar,";
    
    instructions += " add " + milk + "% milk.";
    
    return instructions;
}

console.log ( makeCoffee( 2, 20 ) );
*/

/* var car = {
    color : "red",
    speed : 200,
    drive : function(){ return "drive"; }
};

var shoppinglist = [
    "Apple",
    "Orange",
    "Pear"
];
*/

var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "petrol",
        pistons: [ {maker: "BMW" }, { maker:"BMW" } ]
    },
    drive: function(){return "drive"; }
};

var array = [
    "string", 
    100, 
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }
];



