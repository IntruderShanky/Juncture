var elementId = '';
var elementClass = '';
var elements = [];

var offset = 0;

function Juncture(options, handler) {
    if (options["elementId"]) {
        elementId = options["elementId"];
    }
    if (options["elementClass"]) {
        elementClass = options["elementClass"];
    }
    if(options["offset"]){
        offset = options["offset"]
    }

    window.addEventListener('load', function () {
        if (elementId.length > 0) {
            const element = document.getElementById(elementId);
            elements.push(element);
        }
        if (elementClass.length > 0) {
            const ele = document.getElementsByClassName(elementClass);
            for(const e of ele) {
                elements.push(e);
            }
        }
        console.log(elements);
    });

    window.addEventListener('scroll', function () {
        for (const item of elements) {
            if ((item.offsetTop - offset) < (window.pageYOffset + window.innerHeight)) {
                handler(item);
            }
        }
    });
}