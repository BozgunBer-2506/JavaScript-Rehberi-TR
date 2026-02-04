## Bölüm 08: Asenkron (Asynchronous) JavaScript

JavaScript normalde **Senkron (Synchronous)** çalışır; yani bir satır bitmeden diğerine geçmez. Ancak sunucudan veri çekme gibi işlemler vakit aldığı için, programın donmasını engellemek adına **Asenkron (Asynchronous)** yapı kullanılır.

---

## 08.1 – Zamanlama Fonksiyonları: setTimeout
Belirli bir milisaniye (ms) kadar bekleyip bir işlemi çalıştırmak için kullanılır.

```javascript
console.log("Sistem kontrol ediliyor...");

setTimeout(() => {
    console.log("Gecikmeli mesaj: Sunucu yanıt verdi.");
}, 2000); // 2 saniye bekler

console.log("Sistem çalışmaya devam ediyor.");

```

---

## 08.2 – Promises (Sözler)

Bir asenkron işlemin gelecekteki sonucunu temsil eder. Bir Promise üç durumdan birinde olur:

1. **Pending (Beklemede):** İşlem henüz tamamlanmadı.
2. **Fulfilled (Başarılı):** İşlem başarıyla bitti.
3. **Rejected (Reddedildi):** İşlem hata ile sonuçlandı.

---

## 08.3 – Modern Yapı: Async ve Await

`Async` ve `Await`, Promise yapılarını daha kolay yazmamızı ve okumamızı sağlayan modern anahtar kelimelerdir.

* **Async:** Bir fonksiyonun asenkron olduğunu belirtir.
* **Await:** Asenkron bir işlemin (Promise) sonuçlanmasını bekler.

```javascript
async function veriCek() {
    console.log("Veri alınıyor...");
    
    // fetch ile dışarıdan veri çekme (bir asenkron işlemdir)
    let yanit = await fetch("[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)");
    let veri = await yanit.json();
    
    console.log("Gelen Veri:", veri.title);
}

veriCek();

```

---

## Alıştırmalar

1. **Async Yapısı:** Bir fonksiyonu `async` olarak tanımlayın ve içinde bir işlem yapıp sonucu yazdırın.
2. **Await Kullanımı:** Bir asenkron fonksiyonun içinde, bir işlemin bitmesini `await` kullanarak bekleyin (Simüle etmek için fetch örneğini kullanabilirsiniz).

---

## Çözümler

<details>
<summary><b>1. Async Fonksiyon Çözümü</b> (Tıklayın)</summary>

```javascript
async function selamla() {
    return "Asenkron selam!";
}

selamla().then(res => console.log(res));

```

</details>

<details>
<summary><b>2. Await Kullanımı Çözümü</b> (Tıklayın)</summary>

```javascript
async function bilgiGetir() {
    // Await kullanarak verinin gelmesini bekliyoruz
    let response = await fetch("[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)");
    let user = await response.json();
    console.log("Kullanıcı Adı: " + user.name);
}

bilgiGetir();

```

</details>