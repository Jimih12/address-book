let data = [
    {
        id: 1,
        name: "Jimih Setiawan",
        email: "jimih@gmail.com",
        phone: "+6282269805244"
        
    },
    {
        id: 2,
        name: "Luqman",
        email: "luqman@gmail.com",
        phone: "+628123456789"
    },
];

function readAll(){
    localStorage.setItem("object", JSON.stringify (data));
    let tabledata = document.querySelector(".data_table");

    let object = localStorage.getItem('object');
    let objectdata = JSON.parse(object);
    let elements ="";

    objectdata.map(record =>(
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>${record.phone}</td>
        <td>
            <button class="edit" onclick={edit(${record.id})}>Edit</button>
            <button class="delete" onclick={delet(${record.id})}>Delete</button>
        </td>
        </tr>`
    ))
    
    tabledata.innerHTML = elements;
}

function delet(id) {
    data = data.filter(rec => rec.id !== id);
    readAll();

}

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}
 
function add(){
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    
    let newObj = {id: 3, name: name, email: email, phone: phone}
    data.push(newObj);
    
    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}

function edit (id) {
    document.querySelector('.update_form').style.display ="block";
    let obj = data.find(rec => rec.id === id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.uphone').value = obj.email;
    document.querySelector('.id').value = obj.id;
}

function update(){
    let id =  parseInt(document.querySelector('.id').value);
    let name =  document.querySelector('.uname').value;
    let email =  document.querySelector('.uemail').value;
    let phone =  document.querySelector('.uphone').value;

    let index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name, email, phone};
    document.querySelector('.update_form').style.display ="none";

    readAll();
}