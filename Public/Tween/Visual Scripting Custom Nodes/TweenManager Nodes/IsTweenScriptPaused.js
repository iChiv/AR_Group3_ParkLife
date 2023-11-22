// IsTweenScriptPaused.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Returns tweenManager.isPaused()


// @input SceneObject tweenObject
// @input string tweenName
// @output bool isPaused

if (!global.tweenManager) {
    print("Tween Manager not initialized. Try moving the TweenManager script to the top of the Objects Panel or triggering this node in \"TurnOnEvent\".");
    return;
}

script.isPaused = global.tweenManager.isPaused(script.tweenObject, script.tweenName);