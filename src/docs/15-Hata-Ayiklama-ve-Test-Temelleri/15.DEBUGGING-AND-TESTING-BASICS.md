## Bölüm 15: Hata Ayıklama (Debugging) ve Test Temelleri

Kod yazmak kadar, o kodun neden çalışmadığını anlamak da bir sanattır. Profesyonel bir geliştirici `console.log` kullanımından öteye geçip tarayıcının sunduğu güçlü araçları kullanır.

---

## 15.1 – İleri Seviye Hata Ayıklama (Debugging)

Sadece `console.log` kullanarak karmaşık hataları çözmek zordur. Bunun yerine Chrome DevTools (F12) üzerindeki **Sources** sekmesini kullanmalıyız:

* **Kesme Noktaları (Breakpoints):** Kodun belirli bir satırda durmasını sağlar. Böylece o an değişkenlerin hangi değerde olduğunu "canlı" görebilirsiniz.
* **Adım Adım İzleme (Step Over/Into):** Kodu satır satır veya fonksiyonun içine girerek yavaş çekimde çalıştırabilirsiniz.
* **İzleme İfadeleri (Watch Expressions):** Belirli bir değişkenin değer değişimini tüm süreç boyunca bir kenarda takip edebilirsiniz.

---

## 15.2 – Hata Türlerini Tanımak

Hataları hızlı çözmek için dilini anlamak gerekir:

* **ReferenceError:** Tanımlanmamış bir değişkene erişmeye çalışıyorsunuzdur.
* **TypeError:** Bir veri tipine, sahip olmadığı bir metotla müdahale ediyorsunuzdur (Örn: Bir sayıya `.toUpperCase()` uygulamak).
* **SyntaxError:** Yazım hatası yapmışsınızdır (Örn: Parantez unutmak).

---

## 15.3 – Test Temelleri (Testing Basics)

Neden test yazarız? Kodun bir yerini değiştirdiğimizde, farkında olmadan başka bir yeri bozup bozmadığımızı anlamak için.

* **Birim Testi (Unit Test):** En küçük kod parçasının (genelde bir fonksiyonun) tek başına test edilmesidir. (Örn: `topla(2, 2)` gerçekten `4` dönüyor mu?)
* **Entegrasyon Testi (Integration Test):** Birkaç parçanın (Örn: Form ve Veritabanı kaydı) birlikte doğru çalışıp çalışmadığını test eder.
* **TDD (Test Driven Development):** Önce testi yazıp, sonra o testi geçecek kodu yazma felsefesidir.

---

## Alıştırmalar

1. **Hata Avı:** Tarayıcıda bir hata aldığınızda (F12) konsolundaki dosya ismine ve satır numarasına tıklayın. Sizi nereye yönlendiriyor?
2. **Mantık Testi:** Bir "Kullanıcı Kayıt" fonksiyonu yazarken, test etmeniz gereken en az 3 farklı senaryo nedir? (Örn: Boş bırakılan alanlar).

---

## Çözümler

<details>
<summary><b>Alıştırma Çözümlerini Gör</b></summary>

**1. Soru Cevabı (Hata Avı):**

Sizi **Sources (Kaynaklar)** sekmesine yönlendirir. Burada hata yapan kod satırı kırmızı ile işaretlenir. Bu sayede sadece hatayı değil, hatanın tam olarak hangi kod bloğunda (scope) oluştuğunu görebilirsiniz.

**2. Soru Cevabı (Senaryolar):**

1. Tüm bilgiler doğru girildiğinde kayıt başarılı mı?
2. E-posta formatı yanlışsa sistem hata veriyor mu?
3. Şifre çok kısaysa kullanıcı uyarılıyor mu?

</details>