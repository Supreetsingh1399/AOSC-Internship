var my_obj = {
    first_name: "John",
    last_name: "smith",
    designation: "clerk",
    salary: 3000,
    experience: 4,
    method1: function promote(){
        if(this.designation=="clerk" && this.experience>3){
            this.designation="Senior Clerk"
            this.salary=10*(this.salary)
            console.log(`Congratulations u have been promoted \n Salary updated to:${this.salary}`)
        }
        
    },
    method2: function fullname(){
        console.log(`Full Name: ${this.first_name} ${this.last_name} $(this.salary)`)
    }
};
console.log(my_obj.method1())
// console.log(my_obj.method2())


