// kondisi suatu bilangan

let angka1 = 10;
let angka2 = 30;

if (angka1 !== 10 && angka2 === 30) {
  document.writeln("true");
  document.writeln(`<h1>
        ${angka1 + angka2}
        </h1>`);
} else if (angka1 === 10 && angka2 === 30) {
  document.writeln("true");
  document.writeln("<h1>ini benar karena angka1 == 10 dan angka2 == 30</h1>");
} else {
  document.writeln("false");
  document.writeln(`<p>
            ini bukan nilai yang diinginkan
        </p> `);
}

// perulangan
let awalan = 1;
let batas = 10;

for (awalan; awalan <= batas; awalan++) {
  document.writeln(`ini perulangan ke- 
    ${awalan}
    `);
}

document.writeln("<br><br>");
awalan = 1;

while (awalan <= batas) {
  document.writeln(`ini perulangan ke- 
    ${awalan}
    `);
  awalan++;
}
// end

document.writeln("<br><br>");

// array
const array = ["Python", "Javascript", "PHP"];

/**
 * 0: python
 * 1: javascript
 * 2: php
 */

// tambh data
array.push("Java");

// edit data
array[0] = "C++";

// hapus data berdarkan index
array.splice(1, 1);

// hapus akhir
array.pop();

array.forEach((element) => {
  document.writeln(element);
});

document.writeln("<br><br>");

// object
const biodataSaya = {
  name: "kholik",
  class: "12",
  work: "teacher",
};

console.log(biodataSaya);
document.writeln(biodataSaya["name"]);
document.writeln(biodataSaya.name, biodataSaya.work);

biodataSaya.work = "student";
document.writeln(biodataSaya.work);
// end

document.writeln("<br><br>");

// fungsi
const nilaiFungsi = function (angka1, angka2) {
  const nilai = angka1 + angka2;
  document.writeln(nilai, "ini didalam fungsi");
  return nilai;
};
let hasil = nilaiFungsi(10, 10);
document.writeln("ini diluar fungsi", hasil);
// end
document.writeln("<br><br>");

// arrow function
const nilaiArrow = (angka1, angka2) => {
  const nilai = angka1 * angka2;
  document.writeln(nilai, "ini didalam fungsi");
  return nilai;
};
hasil = nilaiArrow(30, 10);
document.writeln("ini diluar fungsi", hasil);
// end
