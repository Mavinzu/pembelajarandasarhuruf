function cekJawaban(idInput, kunci) {
    const inputEl = document.getElementById(idInput);
    const feedback = document.getElementById(idInput + 'Feedback');
    if (!inputEl || !feedback) return;
    const jawaban = inputEl.value.trim().toLowerCase();
    if (jawaban === '') {
      feedback.textContent = '⚠️ Silakan isi atau pilih jawaban.';
      feedback.style.color = 'orange';
    } else if (jawaban === kunci.toLowerCase()) {
      feedback.textContent = '✅ Benar!';
      feedback.style.color = 'green';
    } else {
      feedback.textContent = `❌ Salah. Jawaban benar: ${kunci}`;
      feedback.style.color = 'red';
    }
  }
  function cekSemuaJawaban() {
    cekJawaban('soal1', 'a');
    cekJawaban('soal2', 'b');
    cekJawaban('soal3', 'c');
    cekJawaban('soal4', 'durian');
    cekJawaban('soal5', 'e');
    cekJawaban('soal6', 'f');
    cekJawaban('soal7', 'g');
    cekJawaban('soal8', 'h');
    cekJawaban('soal9', 'i');
    cekJawaban('soal10', 'mobil');
  }