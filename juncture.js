var elementId = '';
var elementClass = '';
var elements = [];
var trigger = [];

var offset = 0;

function Juncture(options, handler) {
    if (options["elementId"]) {
        elementId = options["elementId"];
    }
    if (options["elementClass"]) {
        elementClass = options["elementClass"];
    }
    if (options["offset"]) {
        offset = options["offset"]
    }

    window.addEventListener('load', function () {
        elements = [];
        trigger = [];
        if (elementId.length > 0) {
            const element = document.getElementById(elementId);
            elements.push(element);
            trigger.push(true);
        }
        if (elementClass.length > 0) {
            const ele = document.getElementsByClassName(elementClass);
            for (const e of ele) {
                elements.push(e);
                trigger.push(true)
            }
        }
        console.log(elements);
    });

    window.addEventListener('scroll', function () {
        for (var i = 0; i < elements.length; i++) {
            const item = elements[i];
            if ((item.offsetTop - offset) < (window.pageYOffset + window.innerHeight)) {
                if (trigger[i]) {
                    handler(item);
                    trigger[i] = false;
                }
            }
        }
    });
}