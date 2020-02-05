// Import correct component
let Card; // This creates a reference to the Card Class

function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    var newTask = new Card({content:"Sample value provided"});
    element.appendChild(newTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);