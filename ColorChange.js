var thisCamera : Camera;
var particles : GameObject;
var particles2 : GameObject;
var particles3 : GameObject;
var particles4 : GameObject;
var particles5 : GameObject;
var particles6 : GameObject;

var colorCyan : Color = Color.cyan;
var colorGreen : Color = Color.green;
var color1 : Color = Vector4(.71,.42,.89,0);
var color3x : float = .001;
var color3y : float = .999;
var color3z : float = .999;
var color3 : Color = Vector4(color3x,color3y,color3z,0);

var color4x : float = .999;
var color4y : float = .8;
var color4z : float = .001;
var color4 : Color = Vector4(color4x,color4y,color4z,0);


var colorArray = [
	/*first 3 background, last 3 blocks*/
	[.23, .8, 1, .07, .33, .74],
	[.22, 1, .77, 0, .56, .46],
	[1, .33, .64, .6, 0, .35],
	[.67, .33, 1, .52, .1, .73],
	[1, .23, .3, .6, .01, 0],
	[.3, .27, .98, .18, .13, .72],
	[.99, .7, .28, .73, .4, .13],
	[.61, .98, .35, .24, .72, .176],
	[.23, .8, 1, .07, .33, .74]
];


/*
scheme 2 colorbg2 .22, 1, .77
		 colorbc2 0, .56, 46
scheme 3 colorbg3 1, .33, .64
		 colorbc3 .6, 0, .35
scheme 4 colorbg4 .67, .33, 1
		 colorbc4 .52, .1, .73
scheme 5 colorbg5 1, .23, .3
		 colorbc .6, .01, 0
scheme 6 colorbg .3, .27, .98
		 colorbc .18, .13, .72
scheme 7 colorbg .99, .7, .28
		 colorbc .73, .4, .13
scheme 8 colorbg .61, .98, .35
		 colorbc .24, .72, .176
*/
var colorToGenerate : int;


var i: float;

function Start () {
	colorToGenerate = Random.Range(1,9);
	thisCamera.backgroundColor = Vector4(
							colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],0);
	
	var myMat : Material = Resources.Load("blocksR", Material) as Material;
	//myMat.EnableKeyword("_EMISSION");
	//Color toSet = Vector4(
	//			colorArray[colorToGenerate-1][3],colorArray[colorToGenerate-1][4],colorArray[colorToGenerate-1][5],0
	//			);
	/**
	myMat.SetColor ("_EmissionColor", Vector4(
				colorArray[colorToGenerate][3],colorArray[colorToGenerate][4],colorArray[colorToGenerate][5],0
				) * Mathf.LinearToGammaSpace (2.0f));
	**/
	
	myMat.color = Vector4(
				colorArray[colorToGenerate-1][3],colorArray[colorToGenerate-1][4],colorArray[colorToGenerate-1][5],0
				);

	RenderSettings.fogColor = Vector4(
							colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],0);




}

function Update () {

	particles.GetComponent(ParticleSystem).main.startColor = new ParticleSystem.MinMaxGradient(Vector4(colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],0));
	/*
	particles2.GetComponent(ParticleSystem).main.startColor = new ParticleSystem.MinMaxGradient(Vector4(colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],1));
	particles3.GetComponent(ParticleSystem).main.startColor = new ParticleSystem.MinMaxGradient(Vector4(colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],1));
	particles4.GetComponent(ParticleSystem).main.startColor = new ParticleSystem.MinMaxGradient(Vector4(colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],1));
	particles5.GetComponent(ParticleSystem).main.startColor = new ParticleSystem.MinMaxGradient(Vector4(colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],1));
	particles6.GetComponent(ParticleSystem).main.startColor = new ParticleSystem.MinMaxGradient(Vector4(colorArray[colorToGenerate-1][0],colorArray[colorToGenerate-1][1],colorArray[colorToGenerate-1][2],1));
	*/

}


