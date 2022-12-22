// Function Constructor
function Employee(_id, _name, _salary, _deductions, _bouns, ){
    this.ID=_id;
    this .Name= _name;
    this.Salary=_salary;
    this.deductions=_deductions;
    this.Bouns=_bouns;

}
Employee.prototype.calSalary= function(){return this.Salary+ this.Bouns-this.deductions }

var emp1 = new Employee(10, "Afnan",1000,2000,3000);


console.log("calc Salary=" , emp1.calSalary());