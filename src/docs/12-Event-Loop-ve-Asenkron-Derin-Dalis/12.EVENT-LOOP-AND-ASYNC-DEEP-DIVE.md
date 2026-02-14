## Bölüm 12: Olay Döngüsü (Event Loop) ve Asenkron Derin Dalış

JavaScript "tek iş parçacıklı" (**Single-Threaded**) bir dildir. Yani aynı anda sadece bir iş yapabilir. Peki, aynı anda hem veri çekip hem de ekrana nasıl animasyon basabiliyor? İşte bu sırrın adı: **Olay Döngüsü (Event Loop)**.

---

## 12.1 – Çalışma Motorunun Parçaları

JavaScript'in çalışma ortamı (Runtime) dört ana parçadan oluşur:

1. **Çağrı Yığını (Call Stack):** Kodun satır satır işlendiği yer. Bir fonksiyon çağrıldığında buraya girer, bitince çıkar.
2. **Web API'leri:** Tarayıcının bize sunduğu "arka plan" işçileridir. `setTimeout`, `fetch` (API istekleri) ve `DOM` olayları burada bekler.
3. **Görev Kuyruğu (Task Queue):** Süresi dolan veya biten işlerin (callback fonksiyonlarının) sıraya girdiği bekleme salonu.
4. **Olay Döngüsü (Event Loop):** Sürekli Call Stack'i kontrol eder. Stack boşaldığı an, kuyruktaki işleri içeri alır.

---

## 12.2 – Mikro-görevler vs Makro-görevler

Kuyrukta bekleyen her işin önceliği aynı değildir.

* **Mikro-görevler (Microtasks):** `Promise` ve `Async/Await` dönüşleri buraya düşer. **Önceliklidir.**
* **Makro-görevler (Macrotasks):** `setTimeout` ve `setInterval` gibi işler buraya düşer. Mikro-görevler bitmeden bunlar çalışmaz.

---

## 12.3 – Asenkron (Async) Derin Dalış

Asenkron kod yazarken JavaScript ana hattı (main thread) bloke etmez.

* **Async/Await:** Kodu daha okunabilir kılar ancak arka planda hala `Promise` yapısını kullanır.
* **Bloke Edici Kod (Blocking Code):** Eğer Call Stack'te çok ağır bir döngü çalıştırırsanız, Event Loop diğer işleri (tıklamalar, animasyonlar) içeri alamaz ve sayfa "donar".

---

## Alıştırmalar

1. **Çıktı Tahmini:** Aşağıdaki kodun konsol çıktısı hangi sırayla olur?
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

```


2. **Gecikme Testi:** Bir `setTimeout` içine 0 milisaniye versek bile neden hemen çalışmaz?

---

## Çözümler

<details>
<summary><b>Alıştırma Çözümlerini Gör</b></summary>

**1. Soru Cevabı:** Sıralama `1 - 4 - 3 - 2` şeklindedir.

* `1` ve `4` senkron olduğu için hemen çalışır.
* `3` mikro-görev (Promise) olduğu için `2`'den (Makro-görev) önce çalışır.

**2. Soru Cevabı:** Çünkü Call Stack'in tamamen boşalması gerekir. Event Loop, stack boşalmadan kuyruktan hiçbir şeyi içeri almaz.

</details>