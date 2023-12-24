// 1-Klavyeden girilecek X değerinden N değerine kadar tüm doğal sayıları listeleyen algoritmayı ve js kodunu yazınız.

// 1.// Kullanıcıdan X ve N değerlerini al
// var x = parseInt(prompt("Başlangıç değerini girin:"));
// var n = parseInt(prompt("Bitiş değerini girin:"));

// // X ve N değerlerini doğrulama koşulumuz
// if (isNaN(x) || isNaN(n)) {
//     console.log("Geçerli sayısal değerler girilmedi.");
// } else {
//     // Doğal sayıları listeleyen döngümüz
//     console.log("Doğal Sayılar:");
//     for (var i = x; i <= n; i++) {
//         console.log(i);
//     }
// }


// 2-Klavyeden girilecek bir N değerine kadar fibonecci dizisini bulan algoritmayı ve js kodunu yazını. Fibonecci dizisi 1 1 değerleri ile başlar ve yeni değer kendinden öndeki iki değerin toplamı olarak bulunur. (1 1 2 3 5 8 13

// var n = parseInt(prompt("Fibonacci dizisini bulmak için bir sayı girin:"));

// if (isNaN(n) || n < 0) {
//     console.log("Geçerli bir pozitif sayı girilmedi.");
// } else {
//     var a = 0, b = 1, temp;

//     console.log("Fibonacci Dizisi:");

//     for (var i = 0; i < n; i++) {
//         console.log(a);
//         temp = a;
//         a = b;
//         b = temp + b;
//     }
// }

// 3-Klavyeden girilen bir sayının tüm tam bölenlerini bulup listeleyen (Ekrana yazan) algoritmayı ve js kodlarını yazınız.

// var sayi = parseInt(prompt("Bir sayı girin:"));

// if (isNaN(sayi)) {
//     console.log("Geçerli bir sayı girilmedi.");
// } else {
//     console.log(sayi + " sayısının tam bölenleri:");

//     for (var i = 1; i <= sayi; i++) {
//         if (sayi % i === 0) {
//             console.log(i);
//         }
//     }
// }



//4-Klavyeden girilen üç sayıdan büyüklük sıralamasına göre ortadakini bulup ekrana yazan program için algoritmayı ve js kodunu yazınız
// Kullanıcıdan üç sayıyı al
// var sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
// var sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));
// var sayi3 = parseFloat(prompt("Üçüncü sayıyı girin:"));

// // NaN kontrolünü yapıyoruz
// if (isNaN(sayi1) || isNaN(sayi2) || isNaN(sayi3)) {
//     console.log("Geçerli sayılar girilmedi.");
// } else {
//     // Büyüklük sıralamasına göre ortadaki sayıyı buluyoruz
//     var ortancaSayi;

//     if ((sayi1 >= sayi2 && sayi1 <= sayi3) || (sayi1 <= sayi2 && sayi1 >= sayi3)) {
//         ortancaSayi = sayi1;
//     } else if ((sayi2 >= sayi1 && sayi2 <= sayi3) || (sayi2 <= sayi1 && sayi2 >= sayi3)) {
//         ortancaSayi = sayi2;
//     } else {
//         ortancaSayi = sayi3;
//     }

//     console.log("Büyüklük sıralamasına göre ortadaki sayı:", ortancaSayi);
// }



//5-Klavyeden girilen A ve B gibi iki sayının bölme işlemi kullanmadan sadece toplama ve çıkarma kullanarak kalanlı bölme yapan algoritmayı ve js kodunu yazınız.
// var A = parseInt(prompt("A sayısını girin:"));
// var B = parseInt(prompt("B sayısını girin:"));

// if (isNaN(A) || isNaN(B) || B === 0) {
//     console.log("Geçerli sayılar girilmedi veya B sıfır.");
// } else {
//     var kalan = 0;

//     // bölme işlemi yapıyoruz
//     while (A >= B) {
//         A -= B;
//         kalan = A;
//     }

//     console.log("Sonuç: " + kalan);
// }


//6-Klavyeden girilen A ve B gibi iki sayıyı, çarpma işlemi kullanmadan sadece toplama ve çıkarma kullanarak çarpıp sonucu ekrana yazan algoritmayı ve js kodunu yazınız.

// var A = parseInt(prompt("A sayısını girin:"));
// var B = parseInt(prompt("B sayısını girin:"));

// if (isNaN(A) || isNaN(B)) {
//     console.log("Geçerli sayılar girilmedi.");
// } else {
//     var sonuc = 0;

//     // A'yı B kadar toplama işlemi yapılıyor
//     for (var i = 0; i < Math.abs(B); i++) {
//         if (B > 0) {
//             sonuc += A;
//         } else {
//             sonuc -= A;
//         }
//     }

//     console.log("Sonuç: " + sonuc);
// }


//7- Sıfır –0 girilinceye kadar klavyeden okutulan değerlerin ortalamasını hesaplayıp ekrana yazan algoritmayı ve js kodunu yazınız.
// var toplam = 0;
// var adet = 0;

// while (true) {
//     var deger = parseFloat(prompt("Bir sayı girin (sıfır veya -0 girince hesaplanacak):"));

//     if (isNaN(deger)) {
//         console.log("Geçerli bir sayı girilmedi.");
//         break;
//     }

//     toplam += deger;
//     adet++;
// }

// if (adet > 0) {
//     var ortalama = toplam / adet;
//     console.log("Girilen sayıların ortalaması:", ortalama);
// } else {
//     console.log("Hiç sayı girilmedi.");
// }



//8-Klavyeden girilecek 20 sayının tek olanlarını ayrı çift olanlarını ayrı toplayıp sonuçları ekrana yazan algoritmayı ve js kodunu yazınız.

// var toplamTek = 0;
// var toplamCift = 0;

// for (var i = 1; i <= 20; i++) {
//     var sayi = parseInt(prompt(i + ". sayıyı girin:"));

//     if (isNaN(sayi)) {
//         console.log("Geçerli bir sayı girilmedi. Hesaplama sona eriyor.");
//         break;
//     }

//     if (sayi % 2 === 0) {
//         toplamCift += sayi;
//     } else {
//         toplamTek += sayi;
//     }
// }

// console.log("Tek sayıların toplamı:", toplamTek);
// console.log("Çift sayıların toplamı:", toplamCift);


// 9-Klavyeden girilecek iki pozitif tam sayının OBEB (Ortak Bölenlerin En Büyüğü)’ini bulacak algoritmayı ve js kodunu yazınız. Örneğin elimizde 3654 ve 1365 değerleri olsun. Bu değerlerin OBEB’i şu şekilde bulunmaktadır.

// function obebBul(sayi1, sayi2) {
//     while (sayi2 !== 0) {
//         var gecici = sayi2;
//         sayi2 = sayi1 % sayi2;
//         sayi1 = gecici;
//     }
//     return sayi1;
// }

// // Kullanıcıdan iki pozitif tam sayı alıyoruz
// var sayi1 = parseInt(prompt("Birinci sayıyı girin:"));
// var sayi2 = parseInt(prompt("İkinci sayıyı girin:"));

// // Sayıların geçerliliği kontrolünü yapıyoruz
// if (isNaN(sayi1) || isNaN(sayi2) || sayi1 <= 0 || sayi2 <= 0) {
//     console.log("Geçerli iki pozitif tam sayı girilmedi.");
// } else {
//     // OBEB'ı hesaplıyor ve ekrana yazdırıyoruz
//     var obeb = obebBul(sayi1, sayi2);
//     console.log("OBEB(" + sayi1 + ", " + sayi2 + ") = " + obeb);
// }



//10-Klavyeden girilecek bir sayının tek mi çift mi olduğunu bulabilecek bir algoritmayı ve js kodunu yazınız. Bu algoritmayı geliştirirken başvurduğunuz varsayımları da yazınız.
// Kullanıcıdan bir sayı al
// var sayi = parseInt(prompt("Bir sayı girin:"));

// // Sayının geçerliliğinin kontrolünü yapıyoruz
// if (isNaN(sayi)) {
//     console.log("Geçerli bir sayı girilmedi.");
// } else {
//     //Kullanıcı geçerli bir sayı girecektir (isNaN kontrolü yapılmıştır).
//     //Negatif sayılar da ele alınacak.
//     //0, bir çift sayı olarak kabul edildi.

//     // Sayının tek mi çift mi olduğunu kontrol ediyoruz
//     if (sayi % 2 === 0) {
//         console.log(sayi + " bir çift sayıdır.");
//     } else {
//         console.log(sayi + " bir tek sayıdır.");
//     }
// }