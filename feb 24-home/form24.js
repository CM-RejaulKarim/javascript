function subForm() {

    let tName = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remark = document.getElementById('remark').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.querySelectorAll('input[name="course"]:checked');
    let location = document.getElementById('location').value;

    let courseValue = [];
    for (let i = 0; i < course.length; i++) {
        courseValue.push(course[i].value);
    }

    let output = 'name: ' + tName + '\n'
        + 'contact: ' + contact + '\n'
        + 'remark: ' + remark + '\n'
        + 'gender: ' + gender.value + '\n'
        + 'course: ' + courseValue + '\n'
        + 'location: ' + location;

    let newWindow = window.open('', '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");
}