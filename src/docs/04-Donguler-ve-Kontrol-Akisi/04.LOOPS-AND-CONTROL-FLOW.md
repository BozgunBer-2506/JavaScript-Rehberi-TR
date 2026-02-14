## Bölüm 04: Döngüler ve Kontrol Akışı

Döngüler, belirli bir kod bloğunun belirli bir koşul sağlandığı sürece tekrar tekrar çalıştırılmasını sağlar.

## 04.1 – for Döngüsü
Tekrar sayısı önceden bilinen durumlar için idealdir.
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Tekrar sayısı: " + i);
}
```

## 04.2 – while Döngüsü
İşlemin kaç kez tekrarlanacağı net değilse, ancak bir koşula bağlıysa kullanılır. Koşul doğru (true) olduğu sürece döngü çalışır.

Önemli: Döngü içerisinde koşulu değiştirecek bir işlem yapılmazsa "Sonsuz Döngü" oluşur ve tarayıcı kilitlenir.
```
let stok = 3;

while (stok > 0) {
    console.log("Ürün satıldı. Kalan stok: " + stok);
    stok--; // Her adımda stoğu bir azaltıyoruz (Kritik adım!)
}

console.log("Stok tükendi, döngü bitti.");
```

## 04.3 – Döngü Kontrolü: break ve continue
Bazen döngünün doğal akışına müdahale etmemiz gerekir.

1. break (Döngüyü Kır)
Belirli bir şart gerçekleştiğinde döngüden tamamen çıkılmasını sağlar.

```
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log("4 numara bulundu, döngüden çıkılıyor.");
        break; // i 4 olduğunda döngü tamamen durur, 5'e geçmez.
    }
    console.log("İncelenen sayı: " + i);
}
```

2. continue (Adımı Atla)
Döngünün o anki turunu iptal eder ve bir sonraki turdan devam eder.

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("3 numara hatalı, bu adım atlanıyor...");
        continue; // 3 için aşağıdaki kod çalışmaz, döngü 4'ten devam eder.
    }
    console.log("Sıradaki: " + i);
}
```

## Alıştırmalar

Aşağıdaki senaryoları önce kendi başınıza kodlamaya çalışın, ardından çözümle karşılaştırın.

1. **Geriye Sayım:** 10'dan başlayarak geriye doğru 0'a kadar sayan bir `while` döngüsü yazın.
2. **Çift Sayılar:** 1'den 20'ye kadar olan sayıları bir `for` döngüsüyle dönün, ancak sadece çift sayıları konsola yazdırın. (İpucu: `i % 2 === 0` çift sayı demektir).

---

## Çözümler

<details>
<summary><b>1. Geriye Sayım Çözümü</b> (Tıklayın)</summary>

```javascript
let sayac = 10;

while (sayac >= 0) {
    console.log("Geri sayım: " + sayac);
    sayac--; 
}
```

</details>

<details><summary><b>2. Çift Sayılar Çözümü</b> (Tıklayın)</summary>

```JavaScript
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Çift sayı: " + i);
    }
}
```
</details>
