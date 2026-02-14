## Bölüm 11: this, Kapanışlar (Closures) ve Fonksiyonel JS

Bu bölümde, JavaScript'in çalışma mantığının (Engine) en derinlerine iniyoruz. Kodun sadece ne yaptığını değil, **nasıl** yaptığını öğreneceğiz.

---

## 11.1 – `this` Anahtar Kelimesi ve Bağlam (Context)

JavaScript'te `this`, fonksiyonun **nerede tanımlandığına** değil, **nasıl çağrıldığına** bakar.

* **Global Bağlam:** Eğer bir fonksiyonun başında bir nesne yoksa, `this` tarayıcıda `window` objesini gösterir.
* **Nesne Metotları:** Bir nesne içindeki fonksiyonda `this`, o nesnenin kendisidir.
* **Arrow Functions (Ok Fonksiyonları):** Kendi `this` bağlamı yoktur. Bulunduğu yerdeki (üst kapsamdaki) `this` değerini miras alır.

---

## 11.2 – Kapanışlar (Closures)

Bir fonksiyonun, kendi kapsamı dışındaki bir değişkene, o kapsam kapansa bile erişebilme yeteneğidir. Hafıza yönetimi için çok kritiktir.

```javascript
function yaratıcı(isim) {
  return function() {
    console.log("Merhaba " + isim);
  };
}

const selamVer = yaratıcı("The_Bozgun");
selamVer(); // "Merhaba The_Bozgun" (isim değişkeni hala hafızada!)

```

---

## 11.3 – Fonksiyonel Programlama Temelleri

Modern JavaScript dünyası artık "Functional Programming" prensiplerine kayıyor.

* **Saf Fonksiyonlar (Pure Functions):** Aynı girdi için her zaman aynı çıktıyı veren ve dış dünyadaki hiçbir şeyi değiştirmeyen fonksiyonlardır.
* **Yüksek Mertebe Fonksiyonlar (Higher-Order Functions):** Başka bir fonksiyonu argüman olarak alan veya bir fonksiyon döndüren yapılardır (`map`, `filter`, `reduce`).
* **Değişmezlik (Immutability):** Veriyi doğrudan değiştirmek yerine, kopyasını oluşturup değişiklikleri onun üzerinde yapmak.

---

## Alıştırmalar

1. **this Deneyi:** Bir nesne oluşturun ve içine hem normal fonksiyon hem de arrow function koyun. `this` değerlerini konsola yazdırıp farkı görün.
2. **Closure Sayacı:** Bir fonksiyon yazın, her çağrıldığında içindeki sayıyı 1 artırıp dönsün. (Global değişken kullanmadan yapın).

---

## Çözümler

<details>
<summary><b>Alıştırma Çözümlerini Gör</b></summary>

```javascript
// 1. this farkı
const user = {
  name: "Bozgun",
  normal: function() { console.log(this.name) },
  arrow: () => { console.log(this.name) }
};
user.normal(); // "Bozgun"
user.arrow();  // undefined (Window'a bakar)

// 2. Closure Sayacı
function counter() {
  let count = 0;
  return () => ++count;
}
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

```

</details>