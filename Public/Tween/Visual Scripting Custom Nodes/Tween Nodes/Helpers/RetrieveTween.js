// RetrieveTween.js
// Version: 1.0.0
// Use as a Visual Scripting node
// Description: Retrieves a tween stored in the script
//
// @input string key
// @output tweenObj tween

var key = "_tweenObj_"+script.key;
script.tween = script.api[key];