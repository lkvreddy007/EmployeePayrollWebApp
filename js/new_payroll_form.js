function setSalary(){
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
    output.textContent = salary.value;
    });
}

function save(){
    var name = document.getElementById("name").value;
    
    const pics = document.getElementsByName("profile");
    let profilePic = pics[0];
    for(let i=0;i<pics.length;i++){
        if(pics[i].checked){
            profilePic = pics[i].value;
        }
    }

    let genders = document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if(genders[i].checked)
            gender=genders[i].value;
    }

    let departments = new Array();
    const departmentsForm = document.getElementsByClassName("checkbox");
    for(let i=0;i<departmentsForm.length;i++){
        if(departmentsForm[i].checked)
            departments.push(departmentsForm[i].value);
    }

    var salary = document.getElementById("salary").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    var note = document.getElementById("notes").value;

    const employeePayrollData = new EmployeePayrollData(name, profilePic, gender, departments, salary, startDate, note);
}

