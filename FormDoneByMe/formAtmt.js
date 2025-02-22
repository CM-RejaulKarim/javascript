function formSubmit() {

    let tName = document.getElementById('name').value;
    let tContact = document.getElementById('contact').value;
    let tRemark = document.getElementById('remark').value;
    let tGender = document.querySelector('input[name="gender"]:checked');
    let tCourse = document.querySelectorAll('input[name="course"]:checked');
    let tLocation = document.getElementById('location').value;

    let courseValue = [];
    for (let input = 0; input < tCourse.length; input++) {
        courseValue.push(tCourse[input].value);
    }

    let output = "Name: " + tName + "\n" +
        "Contact: " + tContact + "\n" +
        "Remarks: " + tRemark + "\n" +
        "Gender: " + tGender.value + "\n" +
        "Course: " + courseValue + "\n" +
        "Location: " + tLocation;


    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");


}