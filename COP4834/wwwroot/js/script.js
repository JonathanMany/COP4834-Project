function addNewWeField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Text Here')

    let weAddButtonOb = document.getElementById('weAddButton');

    weAddButtonOb.before(newNode);
}

function addNewEqField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Text Here')

    let eqAddButtonOb = document.getElementById('eqAddButton');

    eqAddButtonOb.before(newNode);
}

function generateCV() {

    let nameField = document.getElementById("nameField").value
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;
    //contact
    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;
    document.getElementById('fbT').innerHTML = document.getElementById("facebookField").value;
    document.getElementById('instaT').innerHTML = document.getElementById("githubField").value;
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedinField").value;
    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;
    //work expereince 
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    let file = document.getElementById('imgField').files[0];
    console.log(file);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function () {
        document.getElementById('imgTemplate').src = reader.result;
    };

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

}

function printCV() {
    window.print();
}
