// StoreTween.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Stores a tween in the script
//
// @input tweenObj tween
// @input string key

var key = "_tweenObj_"+script.key;
script.api[key] = script.tween;