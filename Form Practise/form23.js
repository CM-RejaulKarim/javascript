function formSubm() {

    let rName = document.getElementById('name').value;
    let rContact = document.getElementById('contact').value;
    let rRemark = document.getElementById('remark').value;
    let tGender = document.querySelector('input[name="gender"]:checked');
    let tCourse = document.querySelectorAll('input[name="course"]:checked');
    let tLocation = document.getElementById('location').value;

    let courseValue = [];
    for (let input = 0; input < tCourse.length; input++) {
        courseValue.push(tCourse[input].value);
    }

    let output = 'Name: ' + rName + '\n'
        + 'Contact: ' + rContact + '\n'
        +'Remarks: '+rRemark+'\n'
        +'Sex: '+tGender.value+'\n'
        +'Courses: '+courseValue+'\n'
        +'Location: '+tLocation;

        let newWindow = window.open('','_blank');
        newWindow.document.write("<pre>"+output+"</pre>");







}