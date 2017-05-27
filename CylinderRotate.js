#pragma strict
var isControlB : boolean;
static var gameEnd : boolean;



function useControlB () {
	isControlB = true;
}

function Start () {
	isControlB = false;
	gameEnd = false; 

}

function Update () {
	if (!gameEnd) {
		if (isControlB) {
			if (Input.touchCount > 0) {
				if (Input.GetTouch(Input.touchCount-1).position.x < (Screen.width/2)) {
					transform.RotateAround(Vector3.zero, Vector3.back, Time.deltaTime * 130);
				} else if (Input.GetTouch(Input.touchCount-1).position.x > (Screen.width/2)) {
					transform.RotateAround(Vector3.zero, Vector3.forward, Time.deltaTime * 130);
				}
			} else {
				if (Input.GetButton("Fire1")) {
					transform.RotateAround(Vector3.zero, Vector3.back, Time.deltaTime * 130);
				} else if (Input.GetButton("Fire2")) {
					transform.RotateAround(Vector3.zero, Vector3.forward, Time.deltaTime * 130);
				}
			}

		} else { 

			if (Input.anyKey || Input.touchCount > 0) {
				transform.RotateAround(Vector3.zero, Vector3.back, Time.deltaTime * 130);
			} else {
				transform.RotateAround(Vector3.zero, Vector3.forward, Time.deltaTime * 130);
			}
		}
	}

}
