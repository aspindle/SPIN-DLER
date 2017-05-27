import UnityEngine.UI;
import System.IO;

static var filenameIOS = "/Documents/highscore.data";
static var filenamereg = "highscore.data";
static var filename: String;
static var Score : int;
static var highScore : String;
var textToChange : GameObject;
var sphere : GameObject;
var newForce : Vector3;
static var i : int;
static var go : boolean;
static var newHighScore;
var line : String;


function Start () {
	
	Score = 0;
	i = 0;
	go = false;
	newHighScore = false;
	var x = textToChange.GetComponent(UI.Text);
	try {
		if (Application.platform == RuntimePlatform.IPhonePlayer) {
			filename = Application.persistentDataPath + "/" + filenamereg;
		} else {
			filename = filenamereg;
		}
		var sr : StreamReader = new StreamReader(filename);
		line = sr.ReadLine();
		while (line != null) {
			highScore = line;
			line = sr.ReadLine();
		}
		sr.Close();
	} catch (err) {
		highScore = "0";
	}

	newForce = Vector3(0,0,.05);


	x.text = "High Score: " + highScore;
}

function goAhead () {
	go = true;
}

static function stopAndSave() {
	go = false;
	if (Score > parseInt(highScore)) {
		var newFile = File.CreateText(filename);
		newFile.WriteLine(Score);
		newFile.Close();
		newHighScore = true;
	}
}

static function incScore() {
	i++;
}

function Update () {
	if (go) {
		var x = textToChange.GetComponent(UI.Text);
		x.text = Score.ToString();
		var y = Time.time + i;
		Score = y;
		if (Score > 19) { 
			sphere.GetComponent(ConstantForce).enabled = false;
		 	sphere.GetComponent(ConstantForce).force = newForce;
		 	sphere.GetComponent(ConstantForce).enabled = true;
		}
		if (Score > int.Parse(highScore)) {
			x.text = "New HighScore! " + Score.ToString();
		}

	}



}
