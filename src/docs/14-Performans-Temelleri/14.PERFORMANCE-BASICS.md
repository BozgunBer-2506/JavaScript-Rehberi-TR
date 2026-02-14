## Bölüm 14: Performans Temelleri (Performance Basics)

Web geliştirmede performans sadece kodun hızlı çalışması değil, kullanıcının işlemcisini ve tarayıcısını gereksiz yere yormamaktır. Özellikle çok sık tetiklenen olayları (scroll, resize, input) kontrol altına almak için iki ana teknik kullanırız.

---

## 14.1 – Debounce (Yankılanma / Geciktirme)

**Debounce**, bir olay tetiklendikten sonra belirli bir süre "sessizlik" bekler. Eğer o süre dolmadan olay tekrar tetiklenirse, süre baştan başlar.

* **En İyi Örnek:** Arama kutusu (Search Input).
* **Mantık:** Kullanıcı her harfe bastığında API'ye istek atmak yerine, kullanıcı yazmayı bitirdikten (örneğin 500ms sonra) sadece bir kez istek atılır.

---

## 14.2 – Throttle (Sınırlama / Gaz Kesme)

**Throttle**, bir olay ne kadar sık tetiklenirse tetiklensin, fonksiyonun belirli zaman aralıklarında (örneğin her 200ms'de bir) en fazla bir kez çalışmasını sağlar.

* **En İyi Örnek:** Sayfayı aşağı kaydırma (Scroll) veya pencere boyutlandırma (Resize).
* **Mantık:** Kullanıcı sayfayı kaydırdığında saniyede 100 kez çalışan fonksiyonu sınırlayıp, sadece belirlenen aralıklarla çalıştırarak tarayıcının donmasını engeller.

---

## 14.3 – Bellek Sızıntıları (Memory Leaks)

Performansı etkileyen bir diğer konu da artık kullanılmayan verilerin hafızada yer kaplamaya devam etmesidir.

* **Temizlik:** `addEventListener` ile eklediğiniz olayları, işiniz bittiğinde `removeEventListener` ile kaldırmayı unutmayın.
* **Global Değişkenler:** Gereksiz yere global değişken tanımlamaktan kaçının, bunlar tarayıcı kapanana kadar hafızadan silinmez.

---

## Alıştırmalar

1. **Debounce Mantığı:** Bir arama kutusu hayal edin. Kullanıcı "React" yazarken 5 harfe basıyor. 300ms debounce süresi varsa, fonksiyon kaç kez çalışır?
2. **Kıyaslama:** Bir oyunda "ateş etme" butonuna throttle mı yoksa debounce mu uygulamak daha mantıklıdır? Neden?

---

## Çözümler

<details>
<summary><b>Alıştırma Çözümlerini Gör</b></summary>

**1. Cevap:** Sadece **1 kez** çalışır (Yazma işlemi bittikten 300ms sonra).
**2. Cevap:** **Throttle** daha mantıklıdır. Çünkü kullanıcının butona basılı tuttuğunda belirli aralıklarla (örneğin her 100ms'de bir) mermi atmasını istersiniz. Debounce kullanırsanız, kullanıcı tuşu bırakana kadar hiç ateş etmez!

</details>