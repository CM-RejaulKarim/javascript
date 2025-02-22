function formSub() {

    let tName = document.getElementById('name').value;
    let tContact = document.getElementById('contact').value;
    let tRemark = document.getElementById('remark').value;
    let tGender = document.querySelector('input[name="gender"]:checked');
    let tCourse = document.querySelectorAll('input[name="course"]:checked');
    let tLocation = document.getElementById('location').value;

    let courseValue = [];
    for (let inp = 0; inp < tCourse.length; inp++) {
        courseValue.push(tCourse[inp].value);
    }

    let output = "Name: " + tName + "\n"
        +"Contact: "+tContact+"\n"
        +"Remarks: "+tRemark+"\n"
        +"Sex: "+tGender.value+"\n"
        +"Courses: "+courseValue+ "\n"
        +"Location: "+tLocation;

        let newWindow = window.open('','_blank');
        newWindow.document.write("<pre>"+output+"</pre>");






}