## Bölüm 01: Programlama Temelleri ve JavaScript'e Giriş

Bu bölüm, yazılım geliştirmenin mantıksal altyapısını ve JavaScript ekosisteminin temel bileşenlerini akademik bir yaklaşımla ele alır.

---

## 01.1 – Programlama Nedir?
Programlama, belirli bir problemi çözmek veya bir görevi yerine getirmek için bilgisayar donanımına iletilen mantıksal komutlar dizisidir. 

* **Algoritma:** Bir hedefe ulaşmak için tasarlanan, sonlu ve net adımlardan oluşan çözüm yoludur.
* **Sözdizimi (Syntax):** Bir programlama dilinin kabul ettiği yazım kuralları kümesidir.
* **Derleme/Yorumlama:** İnsan tarafından yazılan kodun (Source Code), işlemci tarafından yürütülebilecek makine diline dönüştürülme sürecidir.

---

## 01.2 – JavaScript Nedir?
JavaScript (JS); hafif, yorumlanan ve nesne yönelimli özelliklere sahip yüksek seviyeli bir programlama dilidir. Modern web tarayıcılarının tamamında yerleşik olarak bulunan motorlar (V8, SpiderMonkey vb.) aracılığıyla çalışır.

* **Ekosistem:** HTML (Yapı) ve CSS (Sunum) ile birlikte webin üç temel teknolojisinden biridir.
* **Kritik Ayrım:** Java ve JavaScript farklı dillerdir. Java derlenen ve statik tipli bir dilken, JavaScript dinamik tipli bir betik (scripting) dilidir.

---

## 01.3 – Kod ve Syntax Ciddiyeti
Kod, hata toleransı düşük olan bir metin yapısıdır. JavaScript, **case-sensitive** (büyük/küçük harf duyarlı) bir yapıya sahiptir.
* `console.log` geçerli bir komutken, `Console.Log` çalışma zamanı hatasına (Runtime Error) yol açar.
* Yazım kurallarına uyulmaması, programın yorumlanma aşamasında durmasına neden olur.

---

## 01.4 – Temel Semboller (JavaScript Alfabesi)
* **`{ }` (Curly Brackets):** Kod bloklarını ve kapsamları tanımlar.
* **`( )` (Parentheses):** Fonksiyon parametrelerini ve işlem önceliklerini belirler.
* **`;` (Semicolon):** İfade (statement) sonlarını işaretler.
* **`=` (Assignment):** Sağdaki değeri bellekteki sol değişkene atar.
* **`//` (Comment):** Derleyici tarafından göz ardı edilen, geliştirici notlarıdır.

---

## 01.5 – Geliştirme Ortamı ve Dosya Yapısı
JavaScript kodları düz metin dosyalarıdır ve `.js` uzantısıyla saklanır. 
* **IDE/Editor:** Kodun yazımı için özelleşmiş araçlardır (Örn: VS Code).
* **Console:** Kodun çıktılarının ve hatalarının izlendiği arayüzdür.

---

## 01.6 – İlk Komut: console.log()
Sistem çıktılarını izlemek için kullanılan standart fonksiyondur.
```javascript
console.log("Sistem aktif.");