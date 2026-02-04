## Bölüm 16: Modern Uygulama Mimarisi (Props, State & Context)

Bu bölüm, basit bir kod parçasını gerçek bir "web uygulamasına" dönüştüren mimari yapıları kapsar. Verinin nasıl saklanacağı, nasıl taşınacağı ve uygulamanın karmaşıklıkla nasıl başa çıkacağı burada belirlenir.

---

## 16.1 – Bileşenler Arası Veri Akışı (Props)

React'te her şey bir bileşendir (Component). Bileşenler arası iletişim, **Props** (Properties) üzerinden gerçekleşir.

* **Tek Yönlü Akış:** Veri her zaman yukarıdan (Parent) aşağıya (Child) doğru akar. Bu, hata ayıklamayı (debugging) kolaylaştırır çünkü verinin nereden geldiği her zaman bellidir.
* **Salt Okunur (Read-Only):** Alt bileşen, kendisine gelen prop'u değiştiremez. Değiştirmek istiyorsa, üst bileşenden bir "fonksiyon" almalı ve o fonksiyonu tetiklemelidir.

---

## 16.2 – Durum Yönetimi (State Management)

State, bir bileşenin "hafızasıdır". Kullanıcının tıkladığı buton, yazdığı yazı veya API'den gelen veri state'te tutulur.

* **Lifting State Up (State'i Yukarı Taşıma):** İki kardeş bileşen aynı veriyi kullanıyorsa, o veriyi ortak bir üst bileşene (Parent) taşımalıyız.
* **Local vs Global State:** Sadece bir input'u ilgilendiren veri "Local"dir. Kullanıcının giriş yapıp yapmadığı bilgisi ise "Global" bir state'tir.

---

## 16.3 – Props Drilling: Mimari Bir Sorun

Uygulama büyüdükçe, veriyi 5-6 katman aşağıya göndermek zorunda kalırsınız.

* **Sorun:** Ortadaki 4 bileşen o veriyi hiç kullanmasa bile, sadece alt katmana iletmek için o prop'u almak zorundadır. Bu, kodu "kirletir" ve taşımayı zorlaştırır.

---

## 16.4 – Context API: Merkezi Dağıtım Sistemi

Context API, veriyi katmanlar üzerinden değil, doğrudan ihtiyaç duyulan bileşene ulaştırmayı sağlar.

* **Provider (Sağlayıcı):** Veriyi havuzun içine bırakan bileşendir (Genellikle en üstte olur).
* **Consumer / useContext (Tüketici):** Havuzdan veriyi çekip kullanan bileşendir.
* **Kullanım Alanları:** Tema (Dark/Light mode), Dil seçenekleri (TR/EN), Kullanıcı oturum bilgileri (Auth).

---

## 16.5 – Modern Mimari Prensipleri (Best Practices)

1. **Atomik Tasarım (Atomic Design):** Bileşenleri en küçük parçalarına kadar ayırın (Atom -> Molekül -> Organizma).
2. **Container & Presentational Pattern:** Mantığı yöneten bileşen (Container) ile sadece görüntüyü yöneten bileşeni (Presentational) birbirinden ayırın.
3. **Hata Sınırları (Error Boundaries):** Bir bileşen patladığında tüm uygulamanın çökmesini engelleyen özel yapılar kurun.

---

## Alıştırmalar

1. **Hiyerarşi Çizimi:** Bir E-ticaret sitesi hayal edin. Sepet bilgisini (Cart) hangi bileşende tutmalı ve nerelere dağıtmalısınız?
2. **Context Deneyimi:** Bir "Tema Değiştirici" butonu yapın. Buton en alt bileşende olsun ama tıkladığında tüm uygulamanın arka plan rengini değiştirsin.

---

## Çözümler

<details>
<summary><b>Alıştırma Çözümlerini Gör</b></summary>

**1. Sepet Analizi:**
Sepet bilgisi `App` veya `ShopContext` içinde tutulmalıdır. `Navbar`'daki sepet ikonu ve `ProductDetail`'deki "Ekle" butonu bu veriye erişmelidir.

**2. Tema Değişimi:**
`const ThemeContext = createContext();` ile havuz oluşturulur. `Provider` ile `value` olarak renk gönderilir. En alttaki buton `useContext(ThemeContext)` ile bu rengi değiştirir.

</details>