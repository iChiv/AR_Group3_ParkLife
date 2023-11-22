// StopTweenScript.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Calls tweenManager.stopTween()


// @input SceneObject tweenObject
// @input string tweenName

if (!global.tweenManager) {
    print("Tween Manager not initialized. Try moving the TweenManager script to the top of the Objects Panel or triggering this node in \"TurnOnEvent\".");
    return;
}

global.tweenManager.stopTween(script.tweenObject, script.tweenName);