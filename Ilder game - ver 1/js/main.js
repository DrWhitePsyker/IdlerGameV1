var canvas = document.getElementById('stage');
var context = canvas.getContext('2d');
context.font = "15px Arial";
context.textBaseline = "top"; 
ResShift = 0;
Mode = 0
document.addEventListener("mouseup", SelectCheck);
var income = []

var config = {
	type: Phaser.AUTO,
	width: 720,
	height: 1280,
	backgroundColor: '#000000',
	parent: 'stage',
	scene: {
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function create(){
}

function update(time, delta) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	ResShift = 0;
	
	if(Mode == 0){
	ResourceManager();
	}
	if(Mode == 1){
	ResearchManger();
	}
}

function ResourceManager(){ //oversees the resources scene, as well as tracking the game clock for income calculations.  
	//DRAWING RESOURCES
	IncomeCalc();
	ResourceDrawer();
}

function IncomeCalc(){
	for(var i = 0; i < Resources.length; i++){
		if(Resources[i].Res_Discovered == true){
		TrueEff = 
		income[i] = Autos[i].Auto_Count * Tasks[i].Tas_Modi * Autos[i].Auto_BaseEff
		}
		}
}

function ResourceDrawer(){
context.strokeRect(0,0,720,1280);
for(var i = 0; i < Resources.length; i++){
		if(Resources[i].Res_Discovered == true){
			
			Xx = 20;
			Yy = 20+ResShift;
			context.fillStyle="#D3D3D3";
			context.fillRect(Xx-5,Yy,685,80);
			context.fillStyle="#808080";
			context.strokeRect(Xx-5,Yy,685,80);
			Draw_TextWithShadow(Xx,Yy,Resources[i].Res_Name,"#000000","#FFFFFF",1)
			Draw_TextWithShadow(Xx,Yy+20,String(Resources[i].Res_Amount),"#000000","#FFFFFF",1)
			Draw_TextWithShadow(Xx+100,Yy+20,"/","#000000","#FFFFFF",1)
			Draw_TextWithShadow(Xx+200,Yy+20,String(Resources[i].Res_BaseCap*Resources[i].Res_Storage_Count),"#000000","#FFFFFF",1)
			Draw_TextWithShadow(Xx,Yy+40,"Income:" + String(income[i]),"#000000","#FFFFFF",1)
			
			//DRAWING AND HANDLING BUTTON
			context.fillStyle="#800000";
			context.fillRect(Xx+600,Yy,80,80);
			context.fillStyle="#808080";
			context.strokeRect(Xx+600,Yy,80,80);
			context.save();
			context.textAlign = "center";
			context.font = "10px Arial";
			Draw_TextWithShadow(Xx+640,Yy+10,"Build "+String(Resources[i].Res_Storage_Name),"#000000","#FFFFFF",1);
			Draw_TextWithShadow(Xx+640,Yy+30,"Cost: " + String(Resources[i].Res_Storage_Cost+(Resources[i].Res_Storage_Cost*Resources[i].Res_Storage_Count)) + " Scrap","#000000","#FFFFFF",1);
			Draw_TextWithShadow(Xx+640,Yy+50,"Produces: " + String((1 + (1 * Tasks[i].Tas_Modi))*Autos[i].Auto_BaseEff) ,"#000000","#FFFFFF",1);
			context.restore();
			
			//RES SHIFT
			ResShift+=100;
		}
	}
}

function Draw_TextWithShadow(tX, tY, text,shadowcolour,colour,shadowsize){
		context.fillStyle = shadowcolour;
		context.fillText(text, tX-shadowsize, tY-shadowsize);
		context.fillText(text, tX+shadowsize, tY-shadowsize);
		context.fillText(text, tX-shadowsize, tY);
		context.fillText(text, tX+shadowsize, tY);
		context.fillText(text, tX-shadowsize, tY+shadowsize);
		context.fillText(text, tX+shadowsize, tY+shadowsize);
		context.fillStyle = colour;
		context.fillText(text, tX, tY);
}

function SelectCheck(event){ //Primary logic center
console.log("Select check firing!")
var rect = canvas.getBoundingClientRect();
var cX = event.clientX - rect.left;
var cY = event.clientY - rect.top;
console.log("X: " + cX + ", Y: " + cY);
}


/*
TaskButton(){ //calls the button factory to make the manual task buttons as well as the various costs (if any). Checks the CanAfford value, greys out the button if required resources are missing and draws missing resource cost as red. Otherwise, performs the task when pressed.	
}

BuyAutomationButton(); //Draws the button for purchasing and selling automation structures if the research required is met. Greys out the button if required resources are missing and draws missing resource cost as red. Performs the task when pressed. 	
SellAutomationButton(); //Draws the button selling automation structures if the research required is met.  Greys out the button if there are no purchased automations. Subtracts 1 from the automation class when clicked.  	
checkCanAfford(); //Checks to see if all the prerequisite resources are available for this task. Prevents task from being performed if the required resources are missing. Returns true if affordable.
PullOutcome(); //pulls resources from the player resource bank when the task is run. Naturally used alongside checkCanAfford to avoid paying out when they can’t afford it.  
PostModCalc(); //calculate how much of a product this task produces after taking researched modifiers into consideration. Stores this value as ‘output’. 
PushIncome(output); //output income into the player resource bank if task is run. Adds the output variable to the resource pool, then resets the output variable to 0.  


checkCanAfford(); inherited from the Tasks class, performs the same. 
PullOutcome(); inherited from the Tasks class, performs the same.  
calcPerTick(); calculate how many products this automation will produce per-tick, after taking the base task production, automation efficiency and any modifier factors into consideration. It does this by looping the checkCanAfford and PullOutcome variables until either the loop reaches the number of automations or the checkCanAfford returns false. Each loop adds the calculated value to the output variable.     
PushIncome(output); inherited from the Tasks class, performs the same.  


RewardHandler(); handles the final reward of the expedition success - First calls the expedition resource reward array and puts the rewards into the players resource pool.
The arrays first value in the resource type, while the second one is the amount of push.
[0,0] ‘Scrap’
[0,1] 500
[1,0] ‘Water’
[1,1] ‘700’
The function scans the resource object array for a resource object with a matching Resource name, then pushes the following number to its pool.  It also passes the resource to the NewResource check.
Then it calls the Research reward array, which scans through the research object array for the relating research. 
	[0]’Improved Hydroponics’
	[1]’Improvised Solarpannels’
It then pushes these objects into the NewResearch check. 

NewResource(resource object); if the resource awarded has its discovered bool set to 0, if so set it to 1 and push its discovery text to the diary controller. 
NewResearch(Research object); if the research awarded has its discovered status set to 0, if so set it to 1 and push its discovery text to the diary controller.
DrawExpedEvent(); draws the location to the expedition page if its required research has been met. 


DrawResearch(); Draws the research icon on the research screen If the status is 1. If mouse over, gently expand the icon slightly and its draw description tooltip.
DrawPrice(); Draws the cost of the research under It’s icon. 
PurchaseCheck(); If the status is 1 and the player clicks on the research. 
UnlockTech(); Any tech to unlock upon completion of this research. Tech is used to unlock new automations or expeditions and act as limiters on the player’s progression rate. 
UnlockModifiers(); A sibling to tech, modifiers alter existing items instead of unlocking new ones. 
UnlockResearch(); If this research is part of a chain, this will unlock the next segment ready for purchase.
*/
