// Q. You are creating a website for your college. Create a class user with two properties name & email. It also have method called viewData() That allows you to view website DataTransfer.

let DATA = "Secret Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        console.log("Name: "+this.name);
        console.log("Email: "+this.email);
        console.log("Data:",DATA);
    }
}

let ans = new user("Ganesh","ganesh@gamil.com");
ans.viewData();

// Q . Create a new class called Admin which inherites from user.Add a new method called editData to Admin that allows it to edit website data 


class Admin extends user
{
    constructor(name,email){
        super(name.email);
    }
    editData(){
        DATA = "Secret Information removed";
    }
}

let admin = new Admin("admin" , "admin@college.com");
admin.editData();
console.log(DATA);