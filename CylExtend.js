import UnityEngine.SceneManagement;

var objectToModify : GameObject;
var duplicateTrigger : GameObject;
var sectionA : GameObject;
var sectionB : GameObject;
var sectionC : GameObject;
var sectionD : GameObject;
var sectionE : GameObject;
var sectionF : GameObject;
var sectionG : GameObject;
var testOutput : GameObject;
var reloadButton : GameObject;
var justCreated : GameObject;
var newCoin : GameObject;



var i : int;
i = 1;
var j : int;
j = 2;
var size = 50;
var genSec : int;
static var extendLevel : boolean;
var count : int;
private var sectionList = new GameObject[size];




function OnStart () {
	extendLevel = false;
	count = 0;

}

function OnTriggerEnter (col : Collider) {

	
	if (col.name == "Coin") {
		ScoringSystem.incScore();
		col.GetComponent(MeshRenderer).enabled = false;

	}
	//testOutput.GetComponent(UI.Text).text = col.name;

	else if (col.name == "BigSphere" || col.name == "BigSphere(Clone)") {

		
		objectToModify.transform.localScale += new Vector3(0, 80F, 0);
		//Debug.Log( "Cylinder extended to ");
		//Debug.Log(objectToModify.transform.localScale);

		var newPos = duplicateTrigger.transform.position + Vector3.forward*40*i;
		Instantiate(duplicateTrigger, newPos, Quaternion.identity);
		//Debug.Log( "New Trigger at ");
		//Debug.Log(newPos);

		var range = Random.Range(0,50);
		var newPos3 = newCoin.transform.position + Vector3.forward*40*i+ Vector3.forward*range;
		Instantiate(newCoin, newPos3, Quaternion.identity, objectToModify.transform.parent);

		var range2 = Random.Range(0,60);
		var newPos4 = newCoin.transform.position + Vector3.forward*40*i+ Vector3.forward*range;
		Instantiate(newCoin, newPos4, Quaternion.identity, objectToModify.transform.parent);


		var newPos2 = Vector3(-8.2,-.6,17.08) + Vector3.forward*40*i;
		genSec = Random.Range(1,8);


		Debug.Log(genSec);


		if (genSec == 1) {
		sectionList[j] = Instantiate(sectionA, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		} else if (genSec == 2) {
		sectionList[j] = Instantiate(sectionB, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		} else if (genSec == 3) {
		sectionList[j] = Instantiate(sectionC, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		} else if (genSec == 4) {
		sectionList[j] = Instantiate(sectionD, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		} else if (genSec == 5) {
		sectionList[j] = Instantiate(sectionE, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		} else if (genSec == 6) {
		sectionList[j] = Instantiate(sectionF, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		} else {
		sectionList[j] = Instantiate(sectionG, newPos2, Quaternion.identity, objectToModify.transform.parent);
		Destroy(sectionList[j-2]);
		}  
		//Instantiate(section, newPos3, Quaternion.identity, objectToModify.transform.parent);

		i++;
		j++;
		extendLevel = false;

	} else {

		GetComponent(Rigidbody).constraints = RigidbodyConstraints.FreezeAll;
		GetComponent(ConstantForce).enabled = false;
		CylinderRotate.gameEnd = true; 
		ScoringSystem.stopAndSave();
		SceneManager.LoadScene("SPIN", LoadSceneMode.Single);


	}


	

}
