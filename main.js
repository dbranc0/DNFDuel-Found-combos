let list;
let edit = false;
function init() {
    list = document.getElementById("list");
    list.innerHTML = "";
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
    console.log("SAVED",JSON.stringify(combos));
    toggleEdit();
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
