## Bölüm 02: Değişkenler ve Veri Tipleri

Bu bölüm, verilerin bilgisayar belleğinde nasıl saklandığını ve JavaScript'in bu verileri nasıl sınıflandırdığını kapsar.

---

## 02.1 – Değişken (Variable) Nedir?
Değişkenler, programın çalışması sırasında ihtiyaç duyulan verileri geçici olarak bellekte (RAM) saklamak için kullanılan isimlendirilmiş alanlardır. 

### Değişken Tanımlama Yöntemleri:
JavaScript'te modern standartlara (ES6+) göre üç farklı anahtar kelime kullanılır:

1. **`let`**: Değeri daha sonra değiştirilebilen değişkenler için kullanılır (Modern standart).
2. **`const`**: Değeri bir kez atandıktan sonra değiştirilemeyen (sabit) değişkenler içindir.
3. **`var`**: Eski tip tanımlama yöntemidir. Modern projelerde "scope" (kapsam) sorunları nedeniyle genellikle tercih edilmez.

---

## 02.2 – Veri Tipleri (Data Types)
JavaScript'te veriler iki ana gruba ayrılır: **İlkel (Primitive)** ve **Referans (Reference)** tipler.

### İlkel Tipler:
* **Number:** Tam sayılar ve ondalıklı sayılar (Örn: `25`, `3.14`).
* **String:** Metinsel ifadeler (Örn: `"Merhaba"`, `'Dünya'`).
* **Boolean:** Mantıksal değerler; sadece `true` (doğru) veya `false` (yanlış) olabilir.
* **Undefined:** Tanımlanmış ama değer atanmamış değişkenleri temsil eder.
* **Null:** Değişkenin bilerek "boş" bırakıldığını ifade eder.

### Referans Tipler:
* **Object (Nesne):** Karmaşık veri yapılarını ve fonksiyonları tutar.

---

## 02.3 – Atama ve Yazım Kuralları
* **Atama Operatörü (`=`):** Sağdaki veriyi soldaki isimlendirilmiş alana kaydeder.
* **CamelCase:** JavaScript'te değişken isimleri genellikle `kullaniciAdi` şeklinde yazılır.
* **Hata Yönetimi:** Bir `const` değişkenine tekrar değer atamaya çalışmak `TypeError` hatasına yol açar.

---

## Alıştırmalar
1. `let` kullanarak yaşınızı bir değişkene atayın ve sonra değerini değiştirin.
2. `const` kullanarak doğduğunuz yılı bir değişkene atayın.
3. Bir string ile bir sayıyı toplayıp (`"5" + 5`) konsolda sonucun ne çıktığını gözlemleyin.