## Bölüm 05: Fonksiyonlar ve Kapsam (Scope)

Fonksiyonlar, belirli bir görevi yerine getirmek için yazılan ve ihtiyaç duyulduğunda tekrar tekrar çağrılabilen kod bloklarıdır. Kodun tekrarını önler ve projeyi modüler hale getirir.

---

## 05.1 – Fonksiyon Tanımlama ve Çağırma
Bir fonksiyon `function` anahtar kelimesi ile tanımlanır ve ismiyle çağrılır.

```javascript
// Tanımlama
function selamVer() {
    console.log("Sisteme hoş geldiniz!");
}

// Çağırma (Yürütme)
selamVer();

```

---

## 05.2 – Parametreler ve Geri Dönüş (Return)

Fonksiyonlar dışarıdan veri alabilir (parametre) ve işlem sonucunu dışarıya aktarabilir (`return`).

```javascript
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}

let sonuc = topla(10, 20); 
console.log("Toplam: " + sonuc); // Çıktı: 30

```

---

## 05.3 – Arrow Functions (Ok Fonksiyonları)

Modern JavaScript (ES6) ile gelen, daha kısa ve okunabilir yazım biçimidir.

```javascript
const karesiniAl = (x) => x * x;

console.log(karesiniAl(5)); // Çıktı: 25

```

---

## 05.4 – Kapsam (Scope)

Değişkenlerin nereden erişilebilir olduğunu belirler.

1. **Global Scope:** Fonksiyonların dışında tanımlanan değişkenlerdir. Her yerden erişilebilir.
2. **Local (Block) Scope:** Sadece bir fonksiyon veya `{ }` bloğu içinde tanımlanan değişkenlerdir. Dışarıdan erişilemez.

---

## Alıştırmalar

1. **Kullanıcı Karşılama:** İsim ve soyisim parametrelerini alan ve ekrana "Merhaba [İsim] [Soyisim], nasılsın?" yazdıran bir fonksiyon yazın.
2. **Alan Hesaplama:** Bir dikdörtgenin uzun ve kısa kenarını parametre olarak alan ve alanını `return` eden bir **arrow function** yazın.

---

## Çözümler

<details>
<summary><b>1. Kullanıcı Karşılama Çözümü</b> (Tıklayın)</summary>

```javascript
function karsila(isim, soyisim) {
    console.log("Merhaba " + isim + " " + soyisim + ", nasılsın?");
}

karsila("Ahmet", "Yılmaz");

```

</details>

<details>
<summary><b>2. Alan Hesaplama Çözümü</b> (Tıklayın)</summary>

```javascript
const alanHesapla = (kisa, uzun) => kisa * uzun;

let sonuc = alanHesapla(5, 10);
console.log("Dikdörtgenin Alanı: " + sonuc);

```

</details>