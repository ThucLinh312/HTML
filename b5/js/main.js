function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`Số ${num} là số chẵn!`);
    } else {
      reject(`Lỗi: Số ${num} là số lẻ!`);
    }
  });
}

checkNumber(4)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Kiểm tra kết thúc");
  });
