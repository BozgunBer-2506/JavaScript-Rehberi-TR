## Bölüm 06: Diziler (Arrays) ve Nesneler (Objects)

Bu bölüm, birden fazla veriyi tek bir çatı altında nasıl organize edeceğimizi ve karmaşık veri yapılarını nasıl yöneteceğimizi kapsar.

---

## 06.1 – Diziler (Arrays)
Diziler, liste halindeki verileri saklamak için kullanılır. Her bir elemanın **index** adı verilen bir numarası vardır ve sayım `0`'dan başlar.

```javascript
let meyveler = ["Elma", "Muz", "Çilek"];

console.log(meyveler[0]); // Elma
console.log(meyveler.length); // 3 (Dizinin uzunluğu)

// Yeni eleman ekleme
meyveler.push("Kivi"); 

```

---

## 06.2 – Nesneler (Objects)

Nesneler, verileri "Anahtar-Değer" (Key-Value) çiftleri olarak saklar. Gerçek dünyadaki bir varlığı (kişi, araba, ürün) tanımlamak için idealdir.

```javascript
const kullanici = {
    ad: "Yavuz",
    yas: 25,
    yazilimciMi: true
};

console.log(kullanici.ad); // Yavuz
console.log(kullanici["yas"]); // 25

```

---

## 06.3 – Dizi ve Nesne Kombinasyonu

Gerçek projelerde genellikle bir dizi içinde birden fazla nesne bulunur (Örn: Bir ürün listesi).

```javascript
const urunler = [
    { id: 1, ad: "Laptop", fiyat: 20000 },
    { id: 2, ad: "Telefon", fiyat: 10000 }
];

console.log(urunler[1].ad); // Telefon

```

---

## Alıştırmalar

1. **Dizi İşlemi:** Bir `renkler` dizisi oluşturun. İçine 3 renk ekleyin. Sonra bu dizinin sonuna bir renk daha ekleyip dizinin tamamını konsola yazdırın.
2. **Nesne Tanımlama:** Bir `kitap` nesnesi oluşturun. İçinde `isim`, `yazar` ve `sayfaSayisi` özellikleri olsun. Bu özellikleri konsola anlamlı bir cümleyle yazdırın.

---

## Çözümler

<details>
<summary><b>1. Dizi İşlemi Çözümü</b> (Tıklayın)</summary>

```javascript
let renkler = ["Kırmızı", "Mavi", "Yeşil"];
renkler.push("Sarı");
console.log(renkler);

```

</details>

<details>
<summary><b>2. Nesne Tanımlama Çözümü</b> (Tıklayın)</summary>

```javascript
const kitap = {
    isim: "Nutuk",
    yazar: "Mustafa Kemal Atatürk",
    sayfaSayisi: 600
};

console.log("Okuduğum kitap: " + kitap.isim + ", Yazarı: " + kitap.yazar);

```

</details>