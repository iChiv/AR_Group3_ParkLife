// Spawn Object at World Mesh On Tap.js
// Version: 0.0.1
// Event: On Awake
// Description: Tap to spawn prefab on the world mesh

// @input Component.DeviceTracking deviceTracking
// @input Asset.ObjectPrefab prefab
// @input SceneObject parent

//@input Component.ScriptComponent[] behaviorCallback

if (!script.deviceTracking) {
    print("ERROR: Please set the device tracking to the script.");
    return;
}

if (!script.prefab) {
    print("ERROR: Please assign a prefab to the object that you want to be spawned.");
    return;
}

function onTouch(eventData) {
    var touchPos = eventData.getTapPosition();
    spawnObjectOnWorldMeshAt(touchPos);
}

function spawnObjectOnWorldMeshAt(screenPos) {
    var results = script.deviceTracking.hitTestWorldMesh(screenPos);

    if (results.length > 0) {
        // Get World Mesh data at the tapped screen position
        var point = results[0].position;
        var normal = results[0].normal;

        // Instantiate the object we want to place
        var newObj = script.prefab.instantiate(null);
        newObj.setParent(script.parent);
        
        // Position the object based on the user taps
        newObj.getTransform().setWorldPosition(point);
        
        // Rotate the object based on World Mesh Surface
        var up = vec3.up();
        var forwardDir = up.projectOnPlane(normal);
        var rot = quat.lookAt(forwardDir, normal);
        newObj.getTransform().setWorldRotation(rot);
        
        // Call Callbacks
        triggerBehaviors(script.behaviorCallback);
    }
}

// Helpers
function triggerBehaviors(behaviors) {
    if (!behaviors) {
        return;
    }
    for (var i=0; i<behaviors.length; i++) {
        if (behaviors[i] && behaviors[i].api.trigger) {
            behaviors[i].api.trigger();    
        } else {
            print("WARNING: please assign the Behavior Script Component");
        }                                
    }
}

script.createEvent("TapEvent").bind(onTouch);