const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
});

const text = document.querySelector('#name');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});

// const date = document.querySelector('#date');
//     date.addEventListener('input',function(){
//         const startDate = new Date(Date.parse(getInputValueById('#day')+" "+
//                                             getInputValueById('#month')+" "+
//                                             getInputValueById('#year')));
//         try{
//             (new EmployeePayrollData()).startDate = startDate;
//             setTextValue('.date-error',"");
//         }catch(e){
//             setTextValue('.date-error',e);
//         }
//     });

function save(){
    try{
        let employeePayrollData = createEmployeePayrollData();
        console.log(employeePayrollData);
        createAndUpdateStorage(employeePayrollData);
    }
    catch(e){
        console.log(e);
        return;
        
    }
}

const createEmployeePayrollData = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.startDate = new Date( Date.parse(date));
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertValue) => {
    let allItems = document.querySelectorAll(propertValue);
    let selItems = [];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) =>{
    let value = document.getElementById(id).value;
    return value;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const resetForm= () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year',2020);
}

const unsetSelectedValues = (propertValue) => {
    let allItems = document.querySelectorAll(propertValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

