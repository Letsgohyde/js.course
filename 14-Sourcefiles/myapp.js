//var car = {
//    make: "volvo",
//    speed: 160,
//    engine: {
//        size: 2.0,
//        make: "bmw",
//        fuel: "petrol",
//        pistons:[
//            { maker: "BMW" },
//            { maker: "BMW2" }
//        ]
//    },
//    drive: function(){ return "dive"; }
//};
//
//var array = [ 
//    "string",
//    100,
//    [ "embed", 200 ],
//    { car: "ford" },
//    function(){ return "dive"; }
//];


var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "petro",
        pistons: [ { maker: "bmw" }, {maker: "bmw2"} ]
    },
    drive: function (){ return "dive"; }
};

var array = [
    "string", 
    100, 
    [ "embed", 200 ],
    {car: "ford" },
	function (){ return "dive"; }
];


var house = {
	address: "6707 Cleopatra PL NW",
	color: "white",
	style: "single family",
	construction: {
		floors: 1,
		beds: 2,
		bath: 1,
		utilities: [ {provider: "Seattle City Lights"}, {provider: "Puget Sound Energy"}]
	},
	tenants: "Bodey Baker and Raphael Hyde",
}