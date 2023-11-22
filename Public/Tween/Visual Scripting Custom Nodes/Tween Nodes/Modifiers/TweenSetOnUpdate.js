// TweenSetOnUpdate.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Tween modifier

// @input tweenObj tweenIn

// @output tweenObj tweenOut
// @output execution void(float value) onUpdate

var onUpdate = script.onUpdate ? function(obj) {
    script.onUpdate(obj.t);
} : null;

script.tweenOut = script.tweenIn.onUpdate(onUpdate);