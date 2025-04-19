


function submitform(event) {
    event.preventDefault()


    let stName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let DOB = document.getElementById('dob').value;

    let Gender = document.querySelector('input[name="gender"]:checked');
    let Hobby = document.querySelectorAll('input[name="hobby"]:checked');

    let Round = document.getElementById('Round').value;
    let Address = document.getElementById('address').value;

    let hobbyValue = [];

    for (let i = 0; i < Hobby.length; i++) {
        hobbyValue.push(Hobby[i].value);
    }

    let output = 'Name: ' + stName + "\n"
        + "Email: " + email + "\n"
        + "DOB: " + DOB + "\n"
        + "Gender: " + Gender.value + "\n"
        + "Course: " + Round + "\n"
        + "Hobby: " + hobbyValue + "\n"
        + "Address: " + Address;

    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");

    console.log(stName + ' ' + email + ' ' + DOB + ' ' + Gender + ' ' + Round + ' ' + hobbyValue + ' ' + Address);
}
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitform);