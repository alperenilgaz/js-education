// ***** Array map Kullanımı ******

// basit map kullanımı
let user = ["Alperen","Ahmet","Murat"]

user.map(item => {
    console.log(item);
    
})
// dizi içerisindeki isimleri kücük yazma
let newUser = user.map(item => {
    return item.toLowerCase()
})

console.log(newUser);




// userName = icindeki normal isim kalsın
// shortName = icindeki ilk harf buyuk olsun A.
//newName = icindeki ilk harf buyuk olsun gerisi kucuk



// 1. yöntem -> return ile



//  2. yöntem 



// return ifadesi kullanılmıyor çünkü kısa parantez objenin otomatik olarak döndürülmesini sağlıyor.