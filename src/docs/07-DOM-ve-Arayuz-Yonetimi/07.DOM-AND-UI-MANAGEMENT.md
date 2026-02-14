## Bölüm 07: DOM ve Arayüz Yönetimi

DOM (Document Object Model), tarayıcının HTML belgesini bir ağaç yapısı olarak görmesini sağlar. JavaScript kullanarak bu ağaçtaki elemanlara ulaşabilir, onları değiştirebilir veya silebiliriz.

---

## 07.1 – DOM Nedir?
Tarayıcı bir HTML sayfasını yüklediğinde, sayfadaki her etiketi (h1, div, p vb.) birer "nesne" (object) haline getirir. JavaScript ile bu nesnelere müdahale ederek sayfayı yenilemeden içeriği güncelleyebiliriz.



---

## 07.2 – Eleman Seçme Yöntemleri
Sayfadaki bir elemanı manipüle etmek için önce onu seçmemiz gerekir:

```javascript
// ID ile seçme (En hızlı yöntem)
const baslik = document.getElementById("ana-baslik");

// Class ile seçme (Birden fazla eleman döner)
const butonlar = document.getElementsByClassName("btn");

// Modern ve Esnek Seçici (CSS seçicileri gibi çalışır)
const kutu = document.querySelector(".konteynir"); // İlk bulduğunu seçer
const tumParagraflar = document.querySelectorAll("p"); // Hepsini liste olarak seçer

```

---

## 07.3 – İçerik ve Stil Değiştirme

Seçtiğimiz elemanın içeriğini veya görünümünü anlık olarak değiştirebiliriz.

```javascript
const mesaj = document.querySelector("#mesaj-kutusu");

// Metni değiştirme
mesaj.innerText = "İşlem Başarılı!";

// HTML içeriği ekleme
mesaj.innerHTML = "<strong>Dikkat!</strong> Bir hata oluştu.";

// Stil değiştirme (CSS müdahalesi)
mesaj.style.color = "red";
mesaj.style.backgroundColor = "yellow";

```

---

## 07.4 – Olay İzleyiciler (Event Listeners)

Kullanıcının yaptığı etkileşimleri (tıklama, klavye tuşuna basma vb.) yakalamamızı sağlar.

```javascript
const btn = document.querySelector("#gonder-btn");

btn.addEventListener("click", function() {
    alert("Butona tıklandı!");
});

```

---

## Alıştırmalar

1. **Renk Değiştirici:** Sayfada bir buton olsun. Bu butona tıklandığında sayfanın arka plan rengini (`document.body.style.backgroundColor`) "lightblue" yapan kodu yazın.
2. **Yazı Güncelleme:** Bir giriş alanı (input) ve bir paragraf olsun. Butona tıklandığında, input içindeki yazıyı alıp paragrafın içine yazdıran yapıyı kurun.

---

## Çözümler

<details>
<summary><b>1. Renk Değiştirici Çözümü</b> (Tıklayın)</summary>

```javascript
const button = document.querySelector("#renk-btn");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});

```

</details>

<details>
<summary><b>2. Yazı Güncelleme Çözümü</b> (Tıklayın)</summary>

```javascript
const input = document.querySelector("#kullanici-input");
const paragraph = document.querySelector("#sonuc-yazi");
const button = document.querySelector("#yazdir-btn");

button.addEventListener("click", () => {
    paragraph.innerText = input.value;
});

```

</details>