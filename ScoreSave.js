import System.IO;

var filename = "highscore.data";
var scoreValue : int;
var highScore : int;


function Start () {
	//highScore = 
	//scoreValue = 

//	if (scoreValue > highScore) {
	var newFile = File.CreateText(filename);
	newFile.WriteLine(scoreValue);
	newFile.Close();
	//}

}

