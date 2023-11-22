// IsTweenScriptPlaying.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Returns tweenManager.isTweenPlaying()


// @input SceneObject tweenObject
// @input string tweenName
// @output bool isPlaying

if (!global.tweenManager) {
    print("Tween Manager not initialized. Try moving the TweenManager script to the top of the Objects Panel or triggering this node in \"TurnOnEvent\".");
    return;
}

script.isPlaying = global.tweenManager.isPlaying(script.tweenObject, script.tweenName);