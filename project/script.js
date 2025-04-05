function formc() {

    let rname = document.getElementById('name').value;
    let rcontact = document.getElementById('contact').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let Course = document.querySelectorAll('input[name="Course"]:checked');
    let location = document.getElementById('location').value;
    let date = document.getElementById('date').value;

    let courseVal= [];
    for (let index = 0; index < Course.length; index++) {
        courseVal.push(Course[index].value);
        
    }

    let output = 'Name:'+ rname + '\n'+
            'Contact:'+rcontact+ '\n'+
            'Gender:'+ gender.value+ '\n'+
            'Course;'+ courseVal+'\n'+
            'Location:'+ location+ '\n'+
            'Application Date'+ date.value;

    let newWindow = window.open('','_blank')
    newWindow.document.write("<pre>"+output+"</pre>");  

}