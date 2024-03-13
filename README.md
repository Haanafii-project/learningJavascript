# learningJavascript
 untuk belajar javascript


## Apa Itu Javascript
Javascript adalah bahasa pemrograman yang High-level, Scripting, Untyped dan Interpreted. Javascript dikatakan bahasa pemrograman High-level dikarenakan memeiliki sintaks yang mudah dipahami oleh manusia. Ini berarti bahwa kode JavaScript ditulis dalam bentuk yang lebih dekat dengan bahasa manusia daripada bahasa mesin. Ada 3 cara untuk mendeklarasikan variabel yaitu `var`, `let`, dan `const`.`var` biasanya digunakan pada saat kita membutuhkan variabel yang dapat diakses di seluruh fungsi tempat itu dideklarasikan, `let` digunakan saat kita membutuhkan nilai yang dapat diubang, dan `const` digunakan saat kita membutuhkan nilai yang tidak bisa diubah setelah diberikan nilai awal.

## Destructuring
Destructuring adalah fitur dari Javascript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek, ke dalam variabel yang berbeda. Dengan menggunakan destructuring, kita dapat menulis kode yang lebih ringkas dan ekspresif saat mengakses nilai dari array atau objek.
`const colors = ['merah', 'hijau', 'biru'];`

`const [warna1, warna2, warna3] = colors;`

`console.log(warna1); // Output: 'merah'`

`console.log(warna2); // Output: 'hijau'`

`console.log(warna3); // Output: 'biru'`

Dalam contoh di atas, kita mendestruksi array `colors` ke dalam tiga variabel terpisah: `warna1`, `warna2`, dan `warna3`.

## Method
Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing. ada berbagai sintaks untuk menggunakan fitur methode, yaitu:
- `concat`. Menggabungkan dua atau lebih array dan mengembalikan salinan array yang digabungkan.
- `map`. Membuat array baru dengan hasil memanggil fungsi untuk setiap element array.
- `foreach`. Memanggil fungsi untuk setiap elemen array.
- `slice`. Memilih bagian dari array dan mengembalikan array baru.
- `filter`. Membuat array baru dengan setiap elemen dalam array yang lulus seleksi.
- `reduce`. Melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan).

## Control Flow
Control flow mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita. untuk melakukan control flow dibutuhkan Pengulangan (`for`,`while`, `do while`) dan Pengkondisian (`if...else`, `switch`, `block`, `try...catch`). 

## Function
Function di dalam javascript adalah sebuah Objek karena memiliki properti dan juga method. function digunakan untuk melakukan serangkain proses komputasi yang dapat digunakan berulang kali.