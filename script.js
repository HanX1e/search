const table = [
    {
        name:'Hans Anthony Apuya',
        age: '20',
        occupation:'Student',
        Address:'Ormoc City',
    }, 
    {
        name: "Joseph Olorbida",
        age: '43',
        occupation: "Student",
        Address: "Kanangga",
      },
      {
        name: "John Mark Cuyos",
        age: '20',
        occupation: "Student",
        Address: "Albuera Leyte",
      },
      {
        name: "Ayen Apuya",
        age: '53',
        occupation: "Office Worker",
        Address: "Ormoc City",
      },
      {
        name: "John Brint Aranez",
        age: '21',
        occupation: "Student",
        Address: "Villaba Leyte",
      },
      {
        name: "Joenel Apuya",
        age: '44',
        occupation: "Driver",
        Address: "Ormoc City",
      },
      {
        name: "Inday Pasilan",
        age: '55',
        occupation: "House Wife",
        Address: "Ormoc City",
      },
      {
        name: "Paolo Pepito",
        age: '22',
        occupation: "Unemployed",
        Address: "Ormoc City",
      },
      {
        name: "Jake Pepito",
        age: '25',
        occupation: "Businessman",
        Address: "Ormoc City",
      },
      {
        name: "Gingging Calda",
        age: '31',
        occupation: "Entrepreneur",
        Address: "Ormoc City",
      },
      {
        name: "Myron James Barabad",
        age: '20',
        occupation: "Student",
        Address: "Ormoc City",
      },
      {
        name: "Erwin Pequino",
        age: '21',
        occupation: "Student",
        Address: "Ormoc City",
      },
      {
        name: "Lloyd De Sape Forger",
        age: '20',
        occupation: "Spy",
        Address: "Ormoc City",
      },
      {
        name: "Gon Freecs",
        age: '16',
        occupation: "Hunter",
        Address: "York New City",
      },
      
]

const tableHeader = Object.keys(table[0]);
const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);


function loadTable(){
    let temp = `<table> <tr>`;
    tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
    temp+=`<tr>`
    table.forEach(row => {
        temp +=`
        <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.occupation}</td>
          <td>${row.Address}</td>
        </tr>
        `
    });

    temp+=`</table>`
    output.innerHTML = temp;
}


function filter(e){
let results;
let temp ="";

results = table.filter( item=> 
    item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.Address.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.occupation.toLowerCase().includes(e.target.value.toLowerCase()) ||
    item.age.toLowerCase().includes(e.target.value.toLowerCase())
    );
   console.log(results)
    if(results.length>0){
        temp = `<table> <tr>`;
        tableHeader.forEach( header=> temp+= `<th> ${header.toUpperCase()} </th>`);
        temp+=`<tr>`
        results.forEach(row => {
            temp +=`
            <tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.occupation}</td>
              <td>${row.Address}</td>
            </tr>
            `
        });
        temp+=`</table>`  
    }else{
        temp =`<div class="no-item">Item Not Found </div>`
    }

    output.innerHTML=temp;
}