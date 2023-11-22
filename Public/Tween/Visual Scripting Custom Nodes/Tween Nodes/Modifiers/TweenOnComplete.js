// TweenOnComplete.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Tween modifier
//
// @input tweenObj tweenIn
// @output tweenObj tweenOut
// @output execution onComplete


script.tweenOut = script.tweenIn;
if (script.onComplete) {
    script.tweenIn.onComplete(script.onComplete);
}