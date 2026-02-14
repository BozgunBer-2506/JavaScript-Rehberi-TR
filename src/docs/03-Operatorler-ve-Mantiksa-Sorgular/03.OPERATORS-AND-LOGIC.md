## Bölüm 03: Operatörler ve Mantıksal Sorgular

Programlama sadece veri saklamak değil, bu veriler üzerinde işlemler yapmak ve kararlar vermektir. JavaScript'te bu işlemler operatörler aracılığıyla gerçekleştirilir.

---

## 03.1 – Aritmetik Operatörler
Sayısal veriler üzerinde temel matematiksel işlemleri yapmamızı sağlar.

| Operatör | İşlem | Örnek |
| :--- | :--- | :--- |
| `+` | Toplama | `10 + 5 = 15` |
| `-` | Çıkarma | `10 - 5 = 5` |
| `*` | Çarpma | `10 * 5 = 50` |
| `/` | Bölme | `10 / 2 = 5` |
| `%` | Mod Alma (Kalan) | `10 % 3 = 1` |
| `**` | Üs Alma | `2 ** 3 = 8` |

---

## 03.2 – Karşılaştırma Operatörleri
İki değeri kıyaslayarak sonucu mantıksal bir değer (`true` veya `false`) olarak döndürür.

* **`==` (Eşit mi?):** Sadece değerleri kontrol eder. `"5" == 5` ifadesi `true` döner.
* **`===` (Sıkı Eşit mi?):** Hem değeri hem de veri tipini kontrol eder. `"5" === 5` ifadesi `false` döner. **(Güvenlik için bu tercih edilmelidir.)**
* **`!=` / `!==` :** Eşit değil mi?
* **`>` / `<` :** Büyük mü? / Küçük mü?

---

## 03.3 – Mantıksal Operatörler
Birden fazla koşulu birleştirerek daha karmaşık sorgular yapmamızı sağlar.

1.  **`&&` (VE - AND):** Tüm koşullar doğruysa sonuç `true` olur.
    * ` (5 > 3 && 10 < 20) ` -> `true`
2.  **`||` (VEYA - OR):** Koşullardan en az birinin doğru olması yeterlidir.
    * ` (5 > 10 || 10 < 20) ` -> `true`
3.  **`!` (DEĞİL - NOT):** Var olan sonucun tam tersini alır.
    * ` !(5 > 10) ` -> `true`

---

## 03.4 – Karar Yapıları (if - else)
Programın akışını belirli bir koşula göre ikiye ayırır.

```javascript
let puan = 75;

if (puan >= 50) {
    console.log("Dersi geçtiniz.");
} else {
    console.log("Dersten kaldınız.");
}

```

---

## Alıştırmalar

1. **Ehliyet Kontrolü:** Bir kişinin yaşı (`yas`) ve ehliyeti olup olmadığı (`ehliyetVarMi`) kontrol edilsin. Eğer yaşı 18'den büyükse VE ehliyeti varsa "Araç kullanabilir" yazdırın.
2. **Sayı Kontrolü:** Bir sayı (`sayi`) değişkeni tanımlayın. Bu sayı 0'dan büyükse "Pozitif", 0'dan küçükse "Negatif", 0'a eşitse "Sıfır" yazdıran bir yapı kurun.

---

## Çözümler

<details>
<summary><b>1. Ehliyet Kontrolü Çözümü</b> (Tıklayın)</summary>

```javascript
let yas = 20;
let ehliyetVarMi = true;

if (yas >= 18 && ehliyetVarMi === true) {
    console.log("Araç kullanabilir.");
} else {
    console.log("Araç kullanamaz.");
}

```

</details>

<details>
<summary><b>2. Sayı Kontrolü Çözümü</b> (Tıklayın)</summary>

```javascript
let sayi = -5;

if (sayi > 0) {
    console.log("Pozitif");
} else if (sayi < 0) {
    console.log("Negatif");
} else {
    console.log("Sıfır");
}

```

</details>