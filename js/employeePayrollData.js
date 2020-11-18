class EmployeePayrollData{

    constructor(...params){
        this.name = params[0];
        this.profilePic = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get profilePic(){
        return this._profilePic;
    }
    set profilePic(){
        this._profilePic = this.profilePic;
    }

    get gender(){
        return this._gender;
    }
    set gender(){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }
    set department(){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }
    set salary(){
        this._salary = salary;
    }

    get startDate(){
        return this._startDate;
    }
    set startDate(){
        this._startDate = startDate;
    }

    get notes(){
        return this._notes;
    }
    set notes(){
        this._notes = notes;
    }

    toString(){
        const options = {year:'numeric', month: 'long', day:'numeric'};
        const empDate = this.startDate === undefined ? "undefined":this.startDate.toLocaleDateString("en-US", options);
        return "Name: "+this.name+" ,Profile Pic Loc: "+this.profilePic+", Gender: "+this.gender+", Department: "+this.department+", Salary: "+this.salary+", StartDate: "+this.startDate+", Notes: "+this.notes;
    }

}

