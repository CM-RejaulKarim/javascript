function formSub() {

    let iName = document.getElementById('name').value;
    let iContact = document.getElementById('contact').value;
    let iRemark = document.getElementById('remark').value;
    let iGender = document.querySelector('input[name="gender"]:checked');
    let iCourse = document.querySelectorAll('input[name="course"]:checked');
    let iLocation = document.getElementById('location').value;

    let courseValue = [];
    for (i = 0; i < iCourse.length; i++) {
        courseValue.push(iCourse[i].value);
    }

    let output = 'Name: ' + iName + '\n' +
        'Contact: ' + iContact + '\n' +
        'Remarks: ' + iRemark + '\n' +
        'Sex: ' + iGender.value + '\n' +
        'Course: ' + courseValue + '\n' +
        'Location: ' + iLocation;

    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");



}