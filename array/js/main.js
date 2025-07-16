const students = [
  { id: 1, name: "An", age: 16, gender: "Nam", scores: [7, 8, 9] },
  { id: 2, name: "Bình", age: 17, gender: "Nam", scores: [6, 6, 5] },
  { id: 3, name: "Cúc", age: 16, gender: "Nữ", scores: [9, 9, 10] },
  { id: 4, name: "Dương", age: 18, gender: "Nữ", scores: [4, 5, 6] },
  { id: 5, name: "E", age: 15, gender: "Nam", scores: [10, 10, 10] },
];

console.log(" Tên và tuổi học sinh:");

for (let i = 0; i < students.length; i++) {
  let hs = students[i];
  console.log(hs.name + " - " + hs.age + " tuổi");
}

let danhSachTrungBinh = [];

for (let i = 0; i < students.length; i++) {
  let hs = students[i];
  let tong = 0;

  for (let j = 0; j < hs.scores.length; j++) {
    tong += hs.scores[j];
  }

  let diemTrungBinh = tong / hs.scores.length;

  danhSachTrungBinh.push({
    ten: hs.name,
    diemTB: diemTrungBinh,
  });
}

console.log("Tên và điểm trung bình:");
console.log(danhSachTrungBinh);
let gioi = [];

for (let i = 0; i < danhSachTrungBinh.length; i++) {
  let hs = danhSachTrungBinh[i];
  if (hs.diemTB >= 8) {
    gioi.push(hs);
  }
}

console.log("Học sinh giỏi (điểm TB ≥ 8):");
console.log(gioi);
let hsLonTuoi = null;

for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 17) {
    hsLonTuoi = students[i];
    break;
  }
}

console.log(" Học sinh đầu tiên có tuổi ≥ 17:");
console.log(hsLonTuoi);
let coHocSinhYeu = false;

for (let i = 0; i < danhSachTrungBinh.length; i++) {
  if (danhSachTrungBinh[i].diemTB < 5) {
    coHocSinhYeu = true;
    break;
  }
}

console.log(" Có học sinh yếu (điểm TB < 5)?");
console.log(coHocSinhYeu);
let tatCaLonHon15 = true;

for (let i = 0; i < students.length; i++) {
  if (students[i].age < 15) {
    tatCaLonHon15 = false;
    break;
  }
}

console.log(" Tất cả học sinh ≥ 15 tuổi?");
console.log(tatCaLonHon15);
let tongTrungBinh = 0;

for (let i = 0; i < danhSachTrungBinh.length; i++) {
  tongTrungBinh += danhSachTrungBinh[i].diemTB;
}

let diemTBToanLop = tongTrungBinh / danhSachTrungBinh.length;

console.log(" Điểm trung bình của cả lớp:");
console.log(diemTBToanLop);
