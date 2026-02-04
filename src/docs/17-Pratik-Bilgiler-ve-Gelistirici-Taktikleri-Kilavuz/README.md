## Bölüm 17: Pratik Bilgiler ve Geliştirici Taktikleri (KILAVUZ)

Bu bölüm, "Kodum neden güncellenmiyor?" sorusundan, "Nasıl daha hızlı yazarım?" sorusuna kadar her türlü teknik darboğazı aşman için hazırlanmış profesyonel bir cephaneliktir.

---

## 17.1 – Tarayıcı Konsolu (Console) Ustalığı

Konsol sadece hata bakma yeri değildir, JavaScript için canlı bir **Sandbox** alanıdır.

* **$0 – $4:** Elements sekmesinde tıkladığın son 5 öğeye konsoldan erişmeni sağlar. `$0\` son tıkladığındır.
* **copy(data):** Konsoldaki devasa bir objeyi veya diziyi anında panoya kopyalar.
* **monitorEvents(element):** Bir elemente gelen tüm olayları (click, scroll, mouseover) canlı izler.
* **Live Expressions:** Göz simgesine tıklayarak bir değişkenin değerini sürekli tepede canlı takip edebilirsin.

---

## 17.2 – Vite & WSL (Hot Reload) İnce Ayarları

Windows Subsystem for Linux (WSL) üzerinde çalışırken dosya sistemi bazen "değişikliği" algılamaz. Bu da `Hot Module Replacement` (HMR) özelliğini bozar. `vite.config.js` içine şu altın dokunuşu yap:

```javascript
export default {
  server: {
    watch: {
      usePolling: true, // Dosyaları Linux çekirdeği üzerinden değil, zamanlı tarama ile izler
      interval: 100     // Her 100ms'de bir kontrol et
    },
    headers: {
      "Cache-Control": "no-store", // Tarayıcının 'eski' kodu hafızasında tutmasını %100 engeller
    },
    hmr: {
      overlay: true // Hata olduğunda tarayıcı ekranında kırmızı bir panel gösterir
    }
  }
}

```

---

## 17.3 – Tailwind CSS Pro Taktikleri

Tailwind'i sadece sınıf ismi yazmak sanma, şu özellikler hayat kurtarır:

* **Arbitrary Values:** Eğer standart `w-64` yetmiyorsa, köşeli parantez kullan: `w-[123px]`.
* **Group Hover:** Üst bileşene (Parent) `group` sınıfı verip, alt bileşene `group-hover:block` dersen; sadece üstteki kutuya dokunulduğunda alttaki yazı görünür.
* **Ring & Offset:** Butonlara focus verildiğinde güzel bir halka eklemek için: `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`.

---

## 17.4 – VS Code Verimlilik Sırları

* **Emmet Ustalığı:** Sadece `div.flex.items-center.p-4` yazıp TAB'a basarak tüm yapıyı oluştur.
* **Multiple Cursors:** `ALT + Click` ile 10 farklı satıra aynı anda yazı yaz.
* **Breadcrumbs:** Üstteki dosya yoluna tıklayarak (CTRL + SHIFT + .) proje içinde kaybolmadan gez.
* **Prettier & ESLint:** Kodunu her kaydettiğinde (`CTRL + S`) otomatik düzeltilmesi için `Format on Save` ayarını mutlaka aç.

---

## 17.5 – Hızlı Sorun Giderme (Troubleshooting)

1. **Hard Refresh:** Sadece F5 yetmez. `CTRL + SHIFT + R` ile tüm cache'i temizle.
2. **Node Modules Temizliği:** Eğer çok garip hatalar alıyorsan: `rm -rf node_modules package-lock.json && npm install`.
3. **Network Tab:** API'den veri gelmiyorsa, F12 > Network sekmesinden isteğin "Payload" ve "Preview" kısımlarına bak. Hata sunucuda mı yoksa sende mi?

---

Kesinlikle ekleyelim! **JSX**, JavaScript içinde HTML yazıyormuşuz gibi görünse de aslında kendine has kuralları olan bir "sentaktik şekerlemedir" (syntactic sugar). 17. bölümün sonuna bu altın değerindeki "Cheat Sheet"i eklemek, kod yazarken takıldığında bakabileceğin harika bir referans olur.

Bunu `17-Pratik-Bilgiler-ve-Gelistirici-Taktikleri-Kilavuz/README.md` dosyasının en sonuna yapıştırabilirsin:

---

## 17.6 – Hızlı JSX Cheat Sheet (Kopya Kağıdı)

JSX yazarken JavaScript ve HTML arasındaki farkları karıştırmamak için bu tabloyu kullan:

| Özellik | HTML Standartı | JSX Standartı | Not |
| --- | --- | --- | --- |
| **Sınıf Tanımı** | `class="box"` | `className="box"` | `class` JS'de ayrılmış bir kelimedir. |
| **Satır İçi Stil** | `style="color: red"` | `style={{ color: 'red' }}` | Çift süslü parantez ve obje yapısı. |
| **Etiket Kapatma** | `<img>` veya `<br>` | `<img />` veya `<br />` | Tüm etiketler mutlaka kapatılmalıdır. |
| **JS Değişkeni** | Kullanılmaz | `{degiskenAdi}` | Süslü parantez içine her türlü JS kodu yazılabilir. |
| **Olay Yönetimi** | `onclick="fn()"` | `onClick={fn}` | CamelCase yapısı ve fonksiyon referansı. |
| **Label Bağlantısı** | `for="inputID"` | `htmlFor="inputID"` | `for` döngüler için ayrılmıştır. |

### JSX İçinde "Olmazsa Olmazlar"

1. **Tek Bir Çatı (Fragment):** JSX her zaman tek bir ana eleman döndürmelidir. Eğer fazladan `div` eklemek istemiyorsan Boş Fragment `<> ... </>` kullan.
2. **Koşullu Render:** `&&` (ve) operatörü veya Ternary (`? :`) operatörü ile ekrana ne basılacağını kontrol et:
```jsx
{isLoggedIn && <button>Çıkış Yap</button>}

```

3. **Liste Dönme (Map):** Dizileri ekrana basarken her elemana mutlaka eşsiz bir `key` prop'u ver:
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}

```

## 🏆 Final Sözü

Bu 17 bölümlük rehber, seni sadece bir "kod yazan" değil, araçlarını (Tools) tanıyan ve onlara hükmeden bir "geliştirici" yapmak için tasarlandı.

---
