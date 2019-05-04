//##RESOURCES##//
var Resources = []

var Resource_Scrap ={
	Res_Name: 'Scrap Metal',
	Res_Amount : 0,
	Res_BaseCap : 1000,
	Res_Storage_Name : 'Scrap Pile',
	Res_Storage_Cost : 100,
	Res_Storage_Count : 0,
	Res_Discovered : true,
	Res_Discovery_Text : 'this should never be displayed'
}
Resources.push(Resource_Scrap)

var Resource_Water = {
	Res_Name : 'Purified Water',
	Res_Amount : 0,
	Res_BaseCap : 1000,
	Res_Storage_Name : 'Water Tank',
	Res_Storage_Cost : 100,
	Res_Storage_Count : 0,
	Res_Discovered : false,
	Res_Discovery_Text : "You've discovered some nonradioactive water! Aside from its industrial uses, it also tastes better!"
}
Resources.push(Resource_Water)

var Resource_Fuel ={
	Res_Name : 'Hydrofuel',
	Res_Amount : 0,
	Res_BaseCap : 1000,
	Res_Storage_Name : 'Fuel Tank',
	Res_Storage_Cost : 100,
	Res_Storage_Count : 0,
	Res_Discovered : false,
	Res_Discovery_Text : "You've discovered some standard hydrofuel gel! Now if only you had a bike..."
}
Resources.push(Resource_Fuel);

var Resource_Ingots ={
	Res_Name : 'Metal Ingots',
	Res_Amount : 0,
	Res_BaseCap : 1000,
	Res_Storage_Name : 'Ingot Shelf',
	Res_Storage_Cost : 100,
	Res_Storage_Count : 0,
	Res_Discovered : false,
	Res_Discovery_Text : "You've discovered some refined metal ingots! Way better than scrap!"
}
Resources.push(Resource_Ingots);

var Resource_Components ={
	Res_Name : 'Mechnical Components',
	Res_Amount : 0,
	Res_BaseCap : 1000,
	Res_Storage_Name : 'Parts Pile',
	Res_Storage_Cost : 100,
	Res_Storage_Count : 0,
	Res_Discovered : false,
	Res_Discovery_Text : "You've recovered some usable mechnical components! Time for your own industrial revolution!"
}
Resources.push(Resource_Components);

var Resource_Nuclear ={
	Res_Name : 'Tritium',
	Res_Amount : 0,
	Res_BaseCap : 0,
	Res_Storage_Name : 'Canister',
	Res_Storage_Cost : 100,
	Res_Storage_Count : 0,
	Res_Discovered : false,
	Res_Discovery_Text : "You've recovered some usable Tritium! The power of yesterdays future!"
}
Resources.push(Resource_Nuclear);

//##TASKS##//
var Tasks = [];

var Task_Scrap = {
	Tas_Name : 'Salvage scrap', 
	Tas_Cost_Resource : '', 
	Tas_Cost_Amount : 0,
	Tas_Modi : 0
}
Tasks.push(Task_Scrap);

var Task_Water ={
	Tas_Name : 'Boil water', 
	Tas_Cost_Resource : '', 
	Tas_Cost_Amount : 0,
	Tas_Modi : 0
}
Tasks.push(Task_Water);

var Task_Fuel={
	Tas_Name : 'Refine Fuel', 
	Tas_Cost_Resource : '', 
	Tas_Cost_Amount : 0,
	Tas_Modi : 0
}
Tasks.push(Task_Fuel);

var Task_Ingots={
	Tas_Name : 'Smelt Ingots', 
	Tas_Cost_Resource : '', 
	Tas_Cost_Amount : 0,
	Tas_Modi : 0
}
Tasks.push(Task_Ingots);

var Task_Components={
	Tas_Name : 'Salvage Components', 
	Tas_Cost_Resource : '', 
	Tas_Cost_Amount : 0,
	Tas_Modi : 0
}
Tasks.push(Task_Components);

var Task_Nuclear={
	Tas_Name : 'Process Tritium', 
	Tas_Cost_Resource : '', 
	Tas_Cost_Amount : 0,
	Tas_Modi : 0
}
Tasks.push(Task_Nuclear);


//##AUTOMATIONS##//
var Autos=[]

var Auto_Scrap ={
	Auto_Name: "AutoGrinder",
	Auto_BaseEff: 0.5,
	Auto_Count: 0,
	Auto_ResearchReq: "",
	Auto_Modifiers : ["Research_Grinder_1", "Research_Grinder_2", "Research_Grinder_3"],
	Auto_BaseCost: 100
	
}
Autos.push(Auto_Scrap)
	
var Auto_Water ={
	Auto_Name : "Purifier",
	Auto_BaseEff : 0.5,
	Auto_Count: 0,
	Auto_ResearchReq : "Research_Water",
	Auto_Modifiers: ["Research_Water_1", "Research_Water_2","Research_Water_3"],
	Auto_BaseCost : 100
}
Autos.push(Auto_Water)
	
var Auto_Fuel={
	Auto_Name : "Hydrogel Refinery",
	Auto_BaseEff : 0.5,
	Auto_Count: 0,
	Auto_ResearchReq : "Research_FuelRefinery",
	Auto_Modifiers : ["Research_Fuel_1", "Research_Fuel_2", "Research_Fuel_3"],
	Auto_BaseCost : 100,
}
Autos.push(Auto_Fuel)
	
var Auto_Ingots={
	Auto_Name : "AutoSmelter",
	Auto_BaseEff : 0.5,
	Auto_Count: 0,
	Auto_ResearchReq : "Research_Smelter",
	Auto_Modifiers:["Research_Ingot_1", "Research_Ingot_2", "Research_Ingot_3"],
	Auto_BaseCost : 100
}
Autos.push(Auto_Ingots)
	
var Auto_Components={
	Auto_Name : "Industrial Disassembler",
	Auto_BaseEff : 0.5,
	Auto_Count: 0,
	Auto_ResearchReq : "Research_Disassembler",
	Auto_Modifiers:["Research_Components_1", "Research_Components_2", "Research_Components_3"],
	Auto_BaseCost : 100
}
Autos.push(Auto_Components)
	
var Auto_Nuclear={
	Auto_Name : "Tritium Centrifuge",
	Auto_BaseEff : 0.5,
	Auto_Count: 0,
	Auto_ResearchReq : "Research_IndustrialNuclear",
	Auto_Modifiers:["Research_Nuclear_1", "Research_Nuclear_2", "Research_Nuclear_3"],
	Auto_BaseCost : 100
}
Autos.push(Auto_Nuclear)

//##RESEARCH##// [[TODO]]
/*
var Research_Grinder_1 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You improve your grinders efficency with some sharp scrap metal teeth", 
	Research_Cost[0,0] : 'Resource_Scrap',
	Research_Cost[0,1] : 25,
	Research_Modifer : 0, //OPTIONAL
	Research_Status : 1
}
Research.push(Research_Grinder_1)

var Research_Grinder_2 = {
	Research_Name:"Industrial grinder teeth",
	Research_Discovery: "You further improve your grinders efficency with industrial-grade diamond teeth",
	Research_Cost[0,0] : 'Resource_Components',
	Research_Cost[0,1] : 50,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Grinder_2)

var Research_Grinder_3 = {
	Research_Name:"Nuclear Motor",
	Research_Discovery: "You improve your grinders efficency with a nuclear powered motor",
	Research_Cost[0,0] : 'Resource_Nuclear',
	Research_Cost[0,1] : 100,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0,
}
Research.push(Research_Grinder_3)

var Research_Water = {
	Research_Name:"Automated Water Purifer",
	Research_Discovery: "You can now build water purifiers!",
	Research_Cost[0,0] : 'Resource_Scrap',
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Water_1',//OPTIONAL
	Research_Status : 0,
}
Research.push(Research_Water)

var Research_Water_1 = {
	Research_Name:"Purifier Raincatchers",
	Research_Discovery: "You improve your Water purifiers efficency with Rain Catchers",
	Research_Cost[0,0] : 'Resource_Scrap',
	Research_Cost[0,1] : 25,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Water_1)

var Research_Water_2 = {
	Research_Name:"Improvised Purifier Filters",
	Research_Discovery: "You further improve your Water purifiers efficency with salvaged gasmask filters",
	Research_Cost[0,0] : 'Resource_Components', 
	Research_Cost[0,1] : 500,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Water_2)

var Research_Water_3 = {
	Research_Name:"Purifier Fuelwaste liquification",
	Research_Discovery: "You find a way to improve your Water purifiers efficency with waste byproducts from the Hydrogel refinery",
	Research_Cost[0,0] : 'Resource_Fuel', 
	Research_Cost[0,1] : 500,
	Research_Modifer : 25,//OPTIONAL
	Research_Unlocks_Research : 'Research_Fuel_3',//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Water_3)

var Research_FuelRefinery = {
	Research_Name:"Hydrogel fuel refineries",
	Research_Discovery: "You can now build fuel refineries",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Status : 0
}
Research.push(Research_FuelRefinery)

var Research__Fuel_1 = {
	Research_Name:"Refinery High-Pressure valves",
	Research_Discovery: "You've improved your refineries with computer controls",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Fuel_1)

var Research_Fuel_2 = {
	Research_Name:"High pressure piping",
	Research_Discovery: "You have found a way to improve your refineries efficency with some better piping",
	Research_Cost[0,0] : 'Resource_scrap', 
	Research_Cost[0,1] : 25,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Fuel_2 )

var Research_Fuel_3 = {
	Research_Name:"Refinery/Distillery symbosis",
	Research_Discovery: "You perfect your refineries by distilling most of the byproducts into usable fuel",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Modifer : 25,//OPTIONAL
	Research_Status : 0
}
Research.push(Research_Fuel_3)

var Research_Smelter = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Modifer : 25,//OPTIONAL
	Research_Unlocks_Research = 'Research_Grinder_2',//OPTIONAL
	Research_Status = 0
}
Research.push(Research_Smelter)

var Research_Ingot_1 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Ingot_1)

var Research_Ingot_2 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Ingot_2)

var Research_Ingot_3 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Ingot_3)

var Research_Disassembler = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Disassembler)

var Research_Components_1 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Components_1)

var Research_Components_2 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Components_2)

var Research_Components_3 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Components_3)

var Research_IndustrialNuclear = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_IndustrialNuclear)

var Research_Nuclear_1 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Nuclear_1)

var Research_Nuclear_2 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
}
Research.push(Research_Nuclear_2)

var Research_Nuclear_3 = {
	Research_Name:"Improvised grinder teeth",
	Research_Discovery: "You have found a way to improve your grinders efficency with some better teeth",
	Research_Cost[0,0] : 'Resource_Scrap', 
	Research_Cost[0,1] : 25,
	Research_Unlocks_Research : 'Research_Grinder_2',
	Research_Status : 0
} 
Research.push(Research_Nuclear_3)

*/