// TweenSetRepeat.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Tween modifier
//
// @input tweenObj tweenIn
// @input int numTimes = -1
// @input bool infinite
// @output tweenObj tweenOut

script.tweenOut = script.tweenIn.repeat(script.infinite ? "Infinity" : script.numTimes);