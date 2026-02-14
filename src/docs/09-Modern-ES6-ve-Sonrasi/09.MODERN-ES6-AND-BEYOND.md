## Bölüm 09: Modern ES6+ Özellikleri

2015 yılından (ES6) itibaren JavaScript'e eklenen modern özellikler, kodu daha kısa, okunabilir ve güçlü hale getirmiştir. React geliştirirken bu yapıları her gün kullanacaksınız.

---

## 09.1 – Şablon Dizileri (Template Literals)
Değişkenleri metinlerin içine yerleştirmek için tırnak işareti (`'`) yerine **backtick** (`` ` ``) kullanmamızı sağlar.

```javascript
const ad = "Yavuz";
const mesaj = `Merhaba ${ad}, sisteme hoş geldin!`; // ${} içine değişken yazılır
console.log(mesaj);

```

---

## 09.2 – Parçalama (Destructuring)

Dizi veya nesne içindeki verileri hızlıca ayrı değişkenlere atama yöntemidir.

```javascript
const kullanici = { isim: "Ali", yas: 30 };

// Eski yöntem: let isim = kullanici.isim;
// Modern yöntem (Destructuring):
const { isim, yas } = kullanici;

console.log(isim); // Ali

```

---

## 09.3 – Yayma Operatörü (Spread Operator: `...`)

Bir dizinin veya nesnenin tüm elemanlarını başka bir yere kopyalamak veya birleştirmek için kullanılır.

```javascript
const sayilar = [1, 2, 3];
const yeniSayilar = [...sayilar, 4, 5]; // [1, 2, 3, 4, 5] olur

const araba = { marka: "Tesla" };
const guncelAraba = { ...araba, model: "Model 3" };

```

---

## 09.4 – Ok Fonksiyonları (Arrow Functions)

Daha kısa fonksiyon yazım biçimidir.

```javascript
const topla = (a, b) => a + b;

```

---

## Alıştırmalar

1. **Template Literals:** Bir `urun` ve `fiyat` değişkeni tanımlayın. Backtick kullanarak "Seçtiğiniz [urun] fiyatı: [fiyat] TL'dir" yazdırın.
2. **Destructuring:** Bir `araba` nesnesi oluşturun (marka, model, yil). Bu özellikleri tek satırda değişkenlere ayırın ve modelini yazdırın.

---

## Çözümler

<details>
<summary><b>1. Template Literals Çözümü</b> (Tıklayın)</summary>

```javascript
const urun = "Klavye";
const fiyat = 750;
console.log(`Seçtiğiniz ${urun} fiyatı: ${fiyat} TL'dir`);

```

</details>

<details>
<summary><b>2. Destructuring Çözümü</b> (Tıklayın)</summary>

```javascript
const araba = { marka: "BMW", model: "i5", yil: 2024 };
const { marka, model, yil } = araba;
console.log("Arabanın modeli: " + model);

```

</details>