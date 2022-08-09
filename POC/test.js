String.format = function (...args) {
    if (!args || args.length <= 1) return args;

    var formatString = args[0];
    var entries = args[1] instanceof Map ? args[1].entries() : new Map(Object.entries(args.slice(1)));

    for (const entry of entries) {
        var key = entry[0], value = entry[1];
        var regEx = new RegExp("\\{" + key + "\\}", "gm");
        formatString = formatString.replace(regEx, value);
    }
    return formatString;
}

function setOutput(value) {
    document.getElementById("output").innerText = value;
}

window.onload = function () {
    var attributeMap = new Map();;
    attributeMap.set("name", "sean");
    attributeMap.set("age", 22);

    var templateNums = "hello there {0}, you are {1} years old";
    var templateStrs = "hello there {name}, you are {age} years old";
    var result = String.format(templateNums, "sean", 23);
    var result = String.format(templateStrs, attributeMap);
    setOutput(result);
};

