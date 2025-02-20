


function formdatasend(event) {
    event.preventdefault()



    let uName = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remarks = document.getElementById('remarks').value;

    let sex = document.querySelector('input[name="sex"]:checked');
    let course = document.querySelectorAll('input[name="course"]:checked');
    let location = document.getElementById('location').value;

    let courseValue = [];

    for (let i = 0; i < course.length; i++) {
        courseValue.push[i].value;
    }

    let output = "Name: " + uName + "\n"
        + "Contact: " + contact + "\n"
        + "Remarks: " + remarks + "\n"
        + "Sex: " + sex + "\n"
        + "Course: " + course + "\n"
        + "Location: " + location;

    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");


}
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', formdatasend)