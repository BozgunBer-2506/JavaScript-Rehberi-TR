## Bölüm 13: Modüller (Modules) ve Proje Yapısı

Büyük bir projede binlerce satır kodu tek bir dosyada tutmak imkansızdır. JavaScript **Modül** sistemi sayesinde kodumuzu mantıklı parçalara ayırır, ihtiyacımız olanı ihtiyacımız olan yerde kullanırız.

---

## 13.1 – İçeri Aktarma ve Dışarı Aktarma (Import / Export)

Kodlarımızı paylaşılabilir hale getirmek için iki temel yöntem vardır:

* **İsimlendirilmiş Dışa Aktarma (Named Export):** Bir dosyadan birden fazla fonksiyon veya değişken göndermek için kullanılır. İçe aktarırken aynı isimle ve `{}` içinde çağrılmalıdır.
* **Varsayılan Dışa Aktarma (Default Export):** Bir dosyanın "ana" işlevini göndermek içindir. Her dosyada sadece **bir tane** olabilir. İçe aktarırken istenilen isim verilebilir.

```javascript
// utils.js
export const topla = (a, b) => a + b; // Named
export default function selamla() { ... } // Default

// App.jsx
import Merhaba, { topla } from './utils.js';

```

---

## 13.2 – Modern Proje Klasör Yapısı

Profesyonel bir React/Vite projesinde dosya hiyerarşisi genellikle şu şekildedir:

* **`/src`**: Tüm kaynak kodlar burada yaşar.
* **`/assets`**: Resimler, fontlar ve global stil dosyaları (CSS/SCSS).
* **`/components`**: Tekrar kullanılabilir arayüz parçaları (Button, Navbar vb.).
* **`/hooks`**: Özel React kancaları (Custom Hooks).
* **`/services`**: API istekleri ve dış servis bağlantıları.
* **`/utils`**: Yardımcı fonksiyonlar (Tarih formatlama, hesaplamalar).



---

## 13.3 – Neden Modül Kullanmalıyız?

1. **Bakım Kolaylığı:** Bir hata olduğunda hangi dosyaya bakacağınızı bilirsiniz.
2. **İsim Çakışmalarını Önleme:** Farklı dosyalarda aynı isimli değişkenler birbirini bozmaz.
3. **Yeniden Kullanılabilirlik (Reusability):** Bir `Button` bileşenini yazıp tüm projede kullanabilirsiniz.

---

## Alıştırmalar

1. **Paylaşım Testi:** Bir `matematik.js` dosyası oluşturun. İçinden `carpma` fonksiyonunu **named**, `bolme` fonksiyonunu **default** olarak ihraç edin. Başka bir dosyada bunları karşılayın.
2. **Yapı Analizi:** Kendi projenizde `utils` adında bir klasör oluşturup, sık kullandığınız küçük fonksiyonları oraya taşımayı deneyin.

---

## Çözümler

<details>
<summary><b>Alıştırma Çözümlerini Gör</b></summary>

```javascript
// matematik.js
export const carpma = (a, b) => a * b;
export default function bolme(a, b) { return a / b; }

// App.js
import Bol, { carpma } from './matematik.js';

console.log(carpma(5, 2)); // 10
console.log(Bol(10, 2));   // 5

```

</details>