console.log("merhaba js sonunda")


let x=5;
let y=15;
let m=3;
let hacer=35;
if (x<y) {
    console.log(Boolean(x<y));
}

// Boolean sonucu olctu. 
if (x==y) {
    console.log("x esittir y");
}else if (x>y) {
    console.log("x y den buyuktur.");
}else if (x<y) {
    console.log("x y den kucuktur.");
}else {
    console.log ("x ne cikarsa ciksin bizimdir");
} 

function bakkalDukkani(sebze, meyve, sarkuteri) {
    console.log("burasi bir bakkal"+sebze+"---"+meyve+"---"+sarkuteri)
}
let a="enginar";
let b="elma";
let c="bal";
bakkalDukkani (a,b,c)

// değşkenler bilgisayara yaptığın bildirimlerdir.
// var , let -> daha sonra tekrar atama yapabileceğin.

/// const özel birtür sadece 1 defa atama yapılabilir. 

//// değişken bildirimlerini bilgisaayra yapmak zorundasın çünkü bilgisayar bilmez 


let x ;

// const da birkere atama yapabildiğin için ilk değer vermeleisin yoksa missing initialize hatası alırsın 
const y ="Hacer referans bildirimleri yapiyor";
//// bilgisayara bildirmeden değişken vs kullanamazsın




// if  bir karar yapısı eşit olup olmadığına 
// büyük ,küçük ,büyük eişit ,küçük eşit, eşit değil
//olup olmadığına kararverebileceğin bir yapıdır.


/// if (   ) //  iften sonra yazılan parantez senin kararının ne oluduğu tanımlayacağın yer burasıdır
/// boolean sonuç dönecek bir eşitlik ifade olabilir.
let z =0; /// global değişkenlerdir.
let a =12;
let w=0;
let m=5;
Boolean(a<z);
console.log(Boolean(a>z));
//  if ten sonraki () 'e karar durumun yazılır karar durumu mutlaka boolean sonuç denmelidir !!!!!!!
// değişkenlerini burada tanımlayamazsın !!!!!!!
if (a>z){
console.log("EĞER ŞARTIM DOĞRUYSA BEN ÇALIŞIRIM");
}

//// if-else if -else koşulları
a=8;
z=18;
m=99;
if (a>z){
/// çalışacak kodlar 
}else if (z<m){
    //çalışacak kodlar

}else if (a>m){
// çalıştıracağın kodları

}else {
    /// hiçbir koşul sağlanamzsa buraya gelsin
}


/////////// EN TEMEL FONKSİYON 
// () parantzin içerisi bura  parametre adında değişkenler tanımlıyoruz
// ve bu değişken tanımlama özeldir.  let const vs koymazı hacer 

/// çalıştıracağın kodları iki bracket arasına yazıyorsun 
function buBirFonksiyondur (parametre,x,a){
let z; // lokal değişkendir
console.log("Bubir fonkisondur parametreleri"+parametre+" ---"+x+"---- "+a);
a=99;
console.log("a DEĞİKENİ GLOBALDEĞİŞKEN DEĞER DEĞİŞTİ :"+a);
}

buBirFonksiyondur("parametre" ,"x",123);


