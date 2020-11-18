class EmployeePayrollData{

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)){
            this._name=name;
        }
        else{
            throw 'Name is Incorrect!';
        }
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
        this._gender=gender;
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
        if(startDate>new Date()){
            throw 'Invalid Date';
        }
        else{
        this._startDate=startDate;
        }
    }

    get notes(){
        return this._notes;
    }
    set notes(){
        this._notes = notes;
    }

    toString(){
        const options = {year:'numeric', month: 'long', day:'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Name: "+this.name+" ,Profile Pic Loc: "+this.profilePic+", Gender: "+this.gender+", Department: "+this.department+", Salary: "+this.salary+", StartDate: "+this.startDate+", Notes: "+this.notes;
    }

}

