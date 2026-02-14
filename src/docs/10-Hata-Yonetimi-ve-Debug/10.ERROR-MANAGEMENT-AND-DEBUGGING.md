## Bölüm 10: Hata Yönetimi ve Hata Ayıklama (Debugging)

Yazılım geliştirme sürecinde hata yapmak kaçınılmazdır. Önemli olan bu hataları yakalayabilmek (Handle) ve çözüm yollarını (Debugging) bilmektir.

---

## 10.1 – Hata Tipleri
JavaScript'te en sık karşılaşılan üç temel hata türü:
* **Syntax Error (Sözdizimi Hatası):** Kodun yazım kurallarına uymaması (Örn: Parantez unutmak).
* **Reference Error (Referans Hatası):** Tanımlanmamış bir değişkene ulaşmaya çalışmak.
* **Type Error (Tip Hatası):** Bir veri tipine uygun olmayan bir işlem yapmak (Örn: Bir sayıyı fonksiyon gibi çalıştırmaya çalışmak).

---

## 10.2 – Try...Catch Yapısı
Kodun hata vermesi muhtemel kısımlarını bir güvenlik çemberine almamızı sağlar. Hata oluşsa bile programın geri kalanı çalışmaya devam eder.

```javascript
try {
    // Çalıştırılacak kodlar
    const sonuc = 10 / x; // x tanımlı değilse hata verir
} catch (hata) {
    // Hata oluştuğunda yapılacak işlemler
    console.log("Bir hata yakalandı: " + hata.message);
} finally {
    // Hata olsa da olmasa da her zaman çalışacak kısım
    console.log("İşlem tamamlandı.");
}

```

---

## 10.3 – Hata Ayıklama (Debugging)

Kodun içindeki mantık hatalarını bulmak için kullanılan yöntemlerdir:

1. **console.log():** Değişkenlerin o anki değerini görmek için en yaygın yöntemdir.
2. **debugger:** Kodun arasına `debugger;` komutu yazılırsa, tarayıcı o satıra geldiğinde kodu durdurur ve size inceleme imkanı verir.

---

## Alıştırmalar

1. **Hata Yakalama:** Bir `try...catch` bloğu oluşturun. İçinde tanımlanmamış bir değişkene ulaşmaya çalışın ve hatayı konsola "Hata mesajı: ..." şeklinde yazdırın.
2. **Kritik Hata (throw):** Kullanıcının yaşı 18'den küçükse `throw new Error("Yaş yetersiz")` komutuyla manuel bir hata fırlatan yapı kurun.

---

## Çözümler

<details>
<summary><b>1. Hata Yakalama Çözümü</b> (Tıklayın)</summary>

```javascript
try {
    console.log(olmayanDegisken);
} catch (err) {
    console.log("Hata mesajı: " + err.message);
}

```

</details>

<details>
<summary><b>2. Kritik Hata Çözümü</b> (Tıklayın)</summary>

```javascript
let yas = 15;

try {
    if (yas < 18) {
        throw new Error("Yaş yetersiz, giriş yapılamaz!");
    }
} catch (error) {
    console.error(error.message);
}

```

</details>