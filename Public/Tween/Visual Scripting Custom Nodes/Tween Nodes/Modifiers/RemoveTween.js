// RemoveTween.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Easing function
//
// @input tweenObj tween

if (!global.tweenManager) {
    print("Tween Manager not initialized. Try moving the TweenManager script to the top of the Objects Panel or triggering this node in \"TurnOnEvent\".");
    return;
}

global.global.TWEEN.remove(script.tween);