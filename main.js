let list, combosText;
let edit = false;
function init() {
    list = document.getElementById("list");
    list.innerHTML = "";
    combosText = document.getElementById("combosJSON");
    updateTextArea();
}

function updateTextArea() {
    combosText.value = "let combos = " + JSON.stringify(combos);
}

function populate() {
    list.innerHTML = "";
    combos.forEach((c, i) => {
        let res = "<li>";
        res += "<a href='" + c.url + "'>" + c.description + " (" + c.damage + ")" +"</a>";
        res += edit ? "<input type='text' id='" + "combo" + i + "' value='" + c.inputs + "'>" : "<p>" + c.inputs +"</p>"
        res += "</li>";
        list.innerHTML += res;
    })
}

function save() {
    combos.forEach((c,i) => {
        c.inputs = document.getElementById("combo" + i).value;
    })
    updateTextArea();
    copyToClipboard();
    toggleEdit();
}

function copyToClipboard() {
    navigator.clipboard.writeText(combosText.value).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        console.log("Copied combos to clipboard @ " + new Date(Date.now()).toLocaleString("pt-PT"));
    });
}

function toggleEdit() {
    edit = !edit;
    if (edit) {
        document.getElementById("savebtn").className = "";
        document.getElementById("editbtn").className = "hide";
    } else {
        document.getElementById("savebtn").className = "hide";
        document.getElementById("editbtn").className = "";

    }
    populate();
}

init();
populate();
