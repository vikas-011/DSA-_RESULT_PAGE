
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
  let  picture = document.querySelector("#image").value;

  let  name = document.querySelector("#name").value;

  let  batch = document.querySelector("#batch").value;

  let  dsa = document.querySelector("#dsa").value;

  let skillathon = document.querySelector("#cs").value;

  let coding = document.querySelector("#coding").value;

  console.log(picture, name, batch, dsa, skillathon, coding);

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let student_picture = document.createElement("img");
  student_picture.setAttribute("src", picture);
  td1.append(student_picture);

  let td2 = document.createElement("td");
  td2.innerText = name;

  let td3 = document.createElement("td");
  td3.innerText = batch;

  let td4 = document.createElement("td");
  td4.innerText = dsa;

  let td5 = document.createElement("td");
  td5.innerText = skillathon;

  let td6 = document.createElement("td");
  td6.innerText = coding;

  let obtainedMarks = Number(dsa) + Number(skillathon) + Number(coding);
  let percent = (obtainedMarks / 30) * 100;
  console.log(percent);

  let td7 = document.createElement("td");
  td7.innerText = percent.toFixed(2)

  let td8 = document.createElement("td");
  if (percent < 50) {
    td8.innerText = "Async";
    td8.style.backgroundColor = "red";
  } else {
    td8.innerText = "Regular";
    td8.style.backgroundColor = "green";
  }

  let td9 = document.createElement("td");
  td9.innerText = "Delete";
  td9.style.backgroundColor = "red";
  td9.style.cursor = "pointer";
  td9.addEventListener("click", deleteRow);

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

  document.querySelector("tbody").append(tr);
}

function deleteRow() {
  event.target.parentNode.remove();

  event.target.parentNode.innerHTML = "";
}
