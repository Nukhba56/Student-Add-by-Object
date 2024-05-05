//*********class of std
class Student{

    constructor(email,age,marks,sub){
       this.email= email;
       this.age = age;
       this.marks=marks;
       this.sub = sub;
       
    }
}

//**************UI class
class UI{

    static displayStd(){
        const stdArr = [
            {
                email : "Ali@gmail.com",
                age: 22,
                marks : 99,
                sub:"english"
            },
            {
                email : "Dawood@gmail.com",
                age: 20,
                marks : 94,
                sub:"urdu"
                
            }
        ];
        const stds = stdArr;
        stds.forEach((std)=>UI.addStdToList(std));

    }

    //add a list in the table
    static addStdToList(student){

        //create a variable of list
        const list = document.querySelector("#list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.email}</td>
                         <td>${student.age}</td>
                         <td>${student.marks}</td>
                         <td>${student.sub}</td>
                         <td><a href="#" class="delbtn">X</a><a href="#" class="editbtn">Edit</a></td>`

        list.appendChild(row);


    }
    static clearFields(){

        document.querySelector("#email").value = "";
        document.querySelector("#age").value = "";
        document.querySelector("#marks").value = "";
        document.querySelector("#sub").value = "";
    }
    //Actions(edit,delete)
    static actionsStd(el){
     var td;
    let btn = el;
    let anTd = btn.parentElement;
    const list = document.querySelector("#list");
    let btnadd = document.querySelector("#btn");
    
   
    //get values of input
    let email = document.querySelector("#email");
    let age = document.querySelector("#age");
    let marks = document.querySelector("#marks");
    let sub = document.querySelector("#sub");
    
        if(btn.classList.contains('delbtn')){

            btn.parentElement.parentElement.remove();
        }
        else if (btn.classList.contains("editbtn")){
             
             td =  btn.parentElement.parentElement.children;
       
       for(let i = 0 ; i<td.length-1 ; i++){
        console.log(td[i].innerText);
              email.value =   td[0].innerText;
              age.value =   td[1].innerText;
              marks.value =   td[2].innerText;
              sub.value =   td[3].innerText;
       }      
       let a = document.createElement("a");
       a.innerText = "Save";
       a.href = "#";
       a.classList.add("save");
       console.log(a);
          anTd.appendChild(a);  
          let edit = document.querySelector(".editbtn");
        
          edit.style.display = "none";
          btnadd.style.display = "none";
          
        }
        else if(btn.classList.contains("save")){
            td =  btn.parentElement.parentElement.children;
            for(let i = 0 ; i<td.length-1 ; i++){
                console.log(td[i].innerText);
                     td[0].innerText = email.value;
                     td[1].innerText = age.value ;
                     td[2].innerText = marks.value;
                     td[3].innerText = sub.value ; 
        }
        let save = document.querySelector(".save");
        let edit = document.querySelector(".editbtn");
        save.style.display = "none";
        edit.style.display = "inline";
          btnadd.style.display = "inline";
          UI.clearFields();
          



        
         
    }
  
  
}
}
//***********Event: Display stds */
document.addEventListener("DOMContentLoaded",UI.displayStd);

//*******Event: Add a Std  */
document.querySelector("#myForm").addEventListener("submit",(e)=>{

    //Prevent default
    e.preventDefault();
   
    //get values
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;
    const marks = document.querySelector("#marks").value;
    const sub = document.querySelector("#sub").value;
   

    //initiate the class of student
    const student = new Student(email,age,marks,sub);
    console.log(student);
    UI.addStdToList(student);
    UI.clearFields();
    
});

//******* Event: Actions on Std
document.querySelector("#list").addEventListener("click",(e)=>{

    e.preventDefault();
    UI.actionsStd(e.target);
    console.log(e.target);

});


//********filter */
let filter =  document.querySelector("#filter");
const filterStd = ()=>{

    let val = filter.value.toUpperCase();

    const list = document.querySelector("#list");
    let tr = list.querySelectorAll("tr");
    console.log(list,val);
    for(let i = 0 ; i< tr.length ; i++){

        let td = tr[i].querySelectorAll("td")[0];
        console.log(tr[i]);
        console.log(td);
       
        if(td){
            let tdVal = td.innerHTML || td.innerContent;
            if(tdVal.toUpperCase().indexOf(val) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
         

  



    }


}
filter.addEventListener("keyup",filterStd)
