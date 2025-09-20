// ini komentar 1 baris heading
document.writeln("<h1>Aku lagi belajar javascript</h1>");

/**
 * ini komentar multi baris
 * inis asjasiajsijas
 */
document.writeln(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  
Nisi ut aliquip ex ea commodo consequat.  
Duis aute irure dolor in reprehenderit in voluptate velit esse.  
Cillum dolore eu fugiat nulla pariatur.  
Excepteur sint occaecat cupidatat non proident.  
Sunt in culpa qui officia deserunt mollit anim id est laborum.  
Curabitur pretium tincidunt lacus.  
Nulla gravida orci a odio.  
Nullam varius, turpis et commodo pharetra.  
Est eros bibendum elit, nec luctus magna felis sollicitudin mauris.  
Integer in mauris eu nibh euismod gravida.  
Duis ac tellus et risus vulputate vehicula.  
Donec lobortis risus a elit.  
</p>`);

// angka integer dan float
document.writeln(100);
document.writeln(100 * 2);
document.writeln(99.5);
document.writeln(89.5 / 2);
// end

// boolean (saklar on/off)
document.writeln(true);
document.writeln("<br>");
document.writeln(false);
document.writeln("<br><br>");
// end

// tipe data string
document.writeln("Aku lagi belajar javascript <br>");
document.writeln("Nama Saya : " + "Salahudin Kholik Prasetyono <br>");
document.writeln("Saya ingin jadi programmer professional di ln <br>");
// end

// variabel

// let
let namaLengkap = "Salahudin Kholik Prasetyono";
document.writeln(`<b>Nama Lengkap : </b> ${namaLengkap} <br>`);
// end

// const
const phi = 3.14;
// phi = 22 / 7;
document.writeln(`<b>Phi : </b> ${phi} <br>`);
// end

// end

// operator aritmatika
document.writeln(10 + 10);
document.writeln(10 - 10);
document.writeln(10 * 10);
document.writeln(10 ** 10);
document.writeln(10 / 10);
document.writeln(10 / 7);
document.writeln(10 % 7);

let a = 10;
document.writeln(a++);
document.writeln(a);
document.writeln(a--);
document.writeln(a);
document.writeln("<br><br>");
// end

// operator asignment
let b = 10;
b += 10;
document.writeln(b);
b -= 10;
document.writeln(b);
b /= 10;
document.writeln(b);
b *= 10;
document.writeln(b);
b %= 10;
document.writeln(b);
b **= 10;
document.writeln(b);
document.writeln("<br><br>");
// end

// unary operator
let c = "10";

document.writeln(typeof +c, +c);
document.writeln(typeof -c, -c);
document.writeln(++c);
document.writeln(--c);
document.writeln(!true);
document.writeln(!false);
document.writeln("<br><br>");
// end

// operator perbandingan
let operator1 = 10;
let operator2 = "10";
let operator3 = 20;

document.writeln(operator1 == operator2);
document.writeln(operator1 == operator3);

document.writeln(operator1 === operator2);
document.writeln(operator1 === operator3);

document.writeln(operator1 != operator2);
document.writeln(operator1 != operator3);

document.writeln(operator1 !== operator2);
document.writeln(operator1 !== operator3);

document.writeln(operator1 > operator2);
document.writeln(operator1 > operator3);

document.writeln(operator1 < operator2);
document.writeln(operator1 < operator3);

document.writeln(operator1 >= operator2);
document.writeln(operator1 >= operator3);

document.writeln(operator1 <= operator2);
document.writeln(operator1 <= operator3);
document.writeln("<br><br>");

document.writeln(operator1 && operator1 == operator2);
document.writeln(operator1 && operator1 == operator3);
document.writeln(operator1 == operator2 || operator1);
document.writeln(operator1 == operator3 || operator1);
document.writeln(!operator1);
document.writeln("<br><br>");

// end

// console
let bagi = 10 / 0;
console.log(bagi);
console.error("terjadi kesalahan sistem : bagi is infinity");
console.warn("javascript harus dijalankan di browser dan diaktifkan (enable)");
let data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(data);

console.time("proses");
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
console.timeEnd("proses");

console.debug("debugging");

// end

// string template
const nama = "Salahudin Kholik Prasetyono";
const umur = 24;
const kelas = "XII RPL 1";

document.writeln(`
    <table>
        <tr>
            <td><b>Nama</b></td>
            <td>${nama}</td>
        </tr>
        <tr>
            <td><b>Umur</b></td>
            <td>${umur}</td>
        </tr>
        <tr>
            <td><b>Kelas</b></td>
            <td>${kelas}</td>
        </tr>
    </table>
    `);
document.writeln("<br><br>");
// end

// konversi string ke angka
let string_angka1 = "10";
let string_angka2_campuran = "10a10";
let string_kata_saja = "abc";

// number
document.writeln(Number(string_angka1));
document.writeln(Number(string_angka2_campuran));
document.writeln(Number(string_kata_saja));
document.writeln("<br><br>");

// parseint
document.writeln(parseInt(string_angka1));
document.writeln(parseInt(string_angka2_campuran));
document.writeln(parseInt(string_kata_saja));
document.writeln("<br><br>");

// parseFloat
string_angka1 = "10.5";
string_angka2_campuran = "10.5a10";
string_kata_saja = "abc";

document.writeln(parseFloat(string_angka1));
document.writeln(parseFloat(string_angka2_campuran));
document.writeln(parseFloat(string_kata_saja));
document.writeln("<br><br>");

// math
string_angka1 = "10.7";
let string_middle_angka = "10.5";
let string_angka2 = "10.3";

document.writeln(Math.ceil(string_angka1));
document.writeln(Math.ceil(string_middle_angka));
document.writeln(Math.ceil(string_angka2));

document.writeln(Math.floor(string_angka1));
document.writeln(Math.floor(string_middle_angka));
document.writeln(Math.floor(string_angka2));

document.writeln(Math.round(string_angka1));
document.writeln(Math.round(string_middle_angka));
document.writeln(Math.round(string_angka2));
// end
