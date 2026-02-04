const markdownDosyalari = import.meta.glob('./docs/**/*.md', { query: '?raw', eager: true });
const dosyaYollari = Object.keys(markdownDosyalari);

export const tumBolumler = dosyaYollari.map((yol) => {
  const icerik = markdownDosyalari[yol].default;
  
  const parcalar = yol.split('/');
  const klasorAdi = parcalar[parcalar.length - 2]; 
  const idMatch = klasorAdi.match(/^\d+/);
  const id = idMatch ? parseInt(idMatch[0]) : 999;

  const satirlar = icerik.split('\n');
  const ilkSatir = satirlar.find(s => s.trim().startsWith('#'));
  const temizBaslik = ilkSatir 
    ? ilkSatir.replace(/^#+\s*/, '').trim() 
    : klasorAdi.replace(/^\d+-/, '').replace(/-/g, ' ');

  return {
    id: id,
    title: temizBaslik,
    content: icerik
  };
})
.sort((a, b) => a.id - b.id);