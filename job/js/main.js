let ds = [];
function Save() {
  let job = document.getElementById("job").value;
  if (job == "") {
    alert("Vui lòng  nhập đầy đủ");
    return;
  }
  const obj = { job };
  ds.push(obj);

  printSave();
  clearSave();
}
function clearSave() {
  document.getElementById("job").value = "";
}
function printSave() {
  let kq = document.getElementById("result");
  kq.innerHTML = "";
  ds.forEach((items, index) => {
    const li = document.createElement("li");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("delete");
    btnDelete.onclick = () => {
      Delete(index);
    };
    li.textContent = `Công việc:${items.job}`;
    li.appendChild(btnDelete);
    kq.appendChild(li);
  });
}

function Delete(index) {
  if (window.confirm("Bạn có chắc chắn muốn xóa không ?")) {
    ds.splice(index, 1);
    printSave();
  }
}
