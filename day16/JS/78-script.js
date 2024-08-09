import { students } from "../data/students.js";

const fillTable = ()=>{

    let tbodyInside = "";

    for(let student of students){
        tbodyInside += `<tr>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.point}</td>
                            <td><button class="btn btn-danger btn-delete">Sil</button></td>
                        </tr>`;
    }

    document.querySelector("#tableStudents tbody").innerHTML = tbodyInside;

    // puanı 50'nin altında olanlara table-danger ekleme
    let pointElements = document.querySelectorAll("#tableStudents tbody tr td:last-child");

    pointElements.forEach((pointElement)=>{
        let point = pointElement.innerText;
        // console.log(point);
        if(point < 50){
            pointElement.parentElement.classList.add("table-danger");
        }
    });

}

fillTable();

const deleteButtons = ()=>{
    document.querySelectorAll(".btn-delete").forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
            let name = event.target.closest("tr").children[1].innerText;
            let result = confirm(`${name} adlı kişiyi silmek istediğinizden emin misiniz?`);
        });
    });
}

deleteButtons();

const toggleRows = ()=> {
    document.querySelectorAll("#tableStudents tbody tr").forEach((row)=>{
        row.onclick = (x)=> x.target.closest("tr").classList.toggle("table-success");
    });
}

toggleRows();