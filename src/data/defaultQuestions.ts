import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (10 SOAL)
  // =========================================================================

  // --- MATERI 1: MENGENAL PECAHAN ---
  {
    id: 1,
    type: 'pg',
    topic: 'Mengenal Pecahan',
    difficulty: 'Mudah',
    diagram: {
      type: 'circle_fraction',
      caption: 'Gambar 1: Bagian Kue Bolu Ibu yang Diarsir',
      totalParts: 8,
      shadedParts: 3,
    },
    text: 'Ibu memotong sebuah kue bolu menjadi 8 bagian sama besar. Siti memakan 3 potong kue tersebut seperti yang ditunjukkan oleh daerah arsiran biru pada gambar di atas.\n\nBagian kue bolu yang dimakan oleh Siti dapat dinyatakan dalam bentuk pecahan yaitu...',
    options: [
      { id: 'A', text: '3/8' },
      { id: 'B', text: '5/8' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '8/3' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kue bolu dibagi menjadi 8 bagian sama besar (sebagai penyebut = 8). Bagian kue yang dimakan Siti adalah 3 bagian yang diarsir (sebagai pembilang = 3). Maka pecahan yang menyatakan bagian kue Siti adalah 3/8.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Mengenal Pecahan',
    difficulty: 'Mudah',
    diagram: {
      type: 'bar_fraction',
      caption: 'Gambar 2: Pita Pecahan Berarsir',
      totalParts: 6,
      shadedParts: 4,
    },
    text: 'Perhatikan gambar pita pecahan di atas!\nPita tersebut dibagi menjadi 6 bagian sama besar dan 4 bagian di antaranya diarsir hijau (bernilai 4/6).\n\nPecahan di bawah ini yang senilai dengan 4/6 adalah...',
    options: [
      { id: 'A', text: '1/3' },
      { id: 'B', text: '2/3' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '5/6' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pecahan senilai diperoleh dengan menyederhanakan pecahan 4/6. Bagilah pembilang dan penyebut dengan FPB-nya yaitu 2: (4 ÷ 2) / (6 ÷ 2) = 2/3. Jadi pecahan yang senilai dengan 4/6 adalah 2/3.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Mengenal Pecahan',
    difficulty: 'Sedang',
    diagram: {
      type: 'mixed_fraction',
      caption: 'Gambar 3: Model Pecahan Campuran',
    },
    text: 'Perhatikan gambar arsiran bangun datar di atas!\nTerdapat 2 bangun lingkaran utuh yang diarsir penuh dan 1 lingkaran yang terbagi 4 bagian sama besar dengan 1 bagian terarsir.\n\nBentuk pecahan campuran yang tepat untuk menyatakan seluruh daerah arsiran tersebut adalah...',
    options: [
      { id: 'A', text: '1 1/4' },
      { id: 'B', text: '2 1/4' },
      { id: 'C', text: '2 3/4' },
      { id: 'D', text: '3 1/4' },
    ],
    correctAnswer: 'B',
    explanation:
      'Terdapat 2 lingkaran utuh penuh (bilangan bulat 2) dan 1 bagian dari 4 bagian lingkaran ketiga (pecahan 1/4). Jika digabungkan, bentuk pecahan campurannya adalah 2 1/4.',
  },

  // --- MATERI 2: MEMBANDINGKAN 2 PECAHAN ---
  {
    id: 4,
    type: 'pg',
    topic: 'Membandingkan 2 Pecahan',
    difficulty: 'Mudah',
    diagram: {
      type: 'compare_bars',
      caption: 'Gambar 4: Perbandingan Luas Arsiran Bangun I dan Bangun II',
      compareItems: [
        { label: 'Bangun I (3/5)', total: 5, shaded: 3, color: '#3b82f6' },
        { label: 'Bangun II (4/5)', total: 5, shaded: 4, color: '#10b981' },
      ],
    },
    text: 'Perhatikan perbandingan luas daerah arsiran pada Bangun I dan Bangun II di atas!\nTanda perbandingan yang tepat untuk mengisi titik-titik di antara 3/5 ... 4/5 adalah...',
    options: [
      { id: 'A', text: '>' },
      { id: 'B', text: '<' },
      { id: 'C', text: '=' },
      { id: 'D', text: '≥' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kedua pecahan memiliki penyebut yang sama yaitu 5. Kita cukup membandingkan pembilangnya: 3 lebih kecil daripada 4 (3 < 4). Pada gambar balok pecahan juga terlihat jelas daerah arsiran 3/5 lebih pendek daripada 4/5, sehingga 3/5 < 4/5.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Membandingkan 2 Pecahan',
    difficulty: 'Sedang',
    text: 'Edo memiliki seutas tali rafia sepanjang 2/3 meter, sedangkan Dayu memiliki tali rafia sepanjang 3/4 meter.\n\nPernyataan perbandingan panjang tali kedua anak tersebut yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Tali Edo lebih panjang daripada tali Dayu (2/3 > 3/4)' },
      { id: 'B', text: 'Tali Dayu lebih panjang daripada tali Edo (3/4 > 2/3)' },
      { id: 'C', text: 'Panjang tali Edo dan Dayu sama persis (2/3 = 3/4)' },
      { id: 'D', text: 'Tali Dayu dua kali lebih pendek daripada tali Edo' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk membandingkan 2/3 dan 3/4, kita samakan penyebutnya menggunakan KPK dari 3 dan 4 yaitu 12:\n• 2/3 = (2 × 4) / (3 × 4) = 8/12 meter (tali Edo)\n• 3/4 = (3 × 3) / (4 × 3) = 9/12 meter (tali Dayu)\nKarena 9/12 > 8/12, maka tali Dayu lebih panjang daripada tali Edo (3/4 > 2/3).',
  },

  // --- MATERI 3: PECAHAN DESIMAL DAN PERSEN ---
  {
    id: 6,
    type: 'pg',
    topic: 'Pecahan Desimal dan Persen',
    difficulty: 'Mudah',
    diagram: {
      type: 'grid_100',
      caption: 'Gambar 5: Petak Seratus (Persegi 10×10)',
      shadedParts: 35,
    },
    text: 'Perhatikan gambar petak seratus di atas!\nDari 100 petak kecil yang ada, terdapat 35 petak yang diarsir warna ungu.\n\nBentuk pecahan desimal dan persen dari daerah yang diarsir tersebut berturut-turut adalah...',
    options: [
      { id: 'A', text: '0,35 dan 35%' },
      { id: 'B', text: '3,5 dan 35%' },
      { id: 'C', text: '0,035 dan 3,5%' },
      { id: 'D', text: '0,35 dan 350%' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sebanyak 35 petak dari 100 petak dapat dinyatakan sebagai pecahan 35/100. Bentuk desimal dari 35/100 adalah 0,35 (dua angka di belakang koma). Bentuk persen (perseratus) adalah 35%.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Pecahan Desimal dan Persen',
    difficulty: 'Mudah',
    text: 'Pada bilangan desimal 5,82 angka 8 menempati nilai tempat...',
    options: [
      { id: 'A', text: 'Satuan' },
      { id: 'B', text: 'Persepuluhan' },
      { id: 'C', text: 'Perseratusan' },
      { id: 'D', text: 'Puluhan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada bilangan desimal 5,82:\n• Angka 5 menempati tempat satuan.\n• Angka 8 (satu angka di belakang koma) menempati nilai tempat persepuluhan (nilainya 8/10 atau 0,8).\n• Angka 2 (dua angka di belakang koma) menempati nilai tempat perseratusan (nilainya 2/100 atau 0,02).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pecahan Desimal dan Persen',
    difficulty: 'Sedang',
    text: 'Pak Wayan berhasil menjual 3/4 bagian dari seluruh buah semangka yang dipanen dari kebunnya.\n\nBila dinyatakan dalam bentuk persen, banyak semangka yang berhasil dijual Pak Wayan adalah...',
    options: [
      { id: 'A', text: '25%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '75%' },
      { id: 'D', text: '80%' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk mengubah pecahan biasa 3/4 menjadi persen:\nCara 1: Kalikan dengan 100% -> (3/4) × 100% = 300% ÷ 4 = 75%.\nCara 2: Jadikan penyebut 100 -> (3 × 25) / (4 × 25) = 75/100 = 75%.',
  },

  // --- MATERI 4: PENJUMLAHAN DAN PENGURANGAN PECAHAN ---
  {
    id: 9,
    type: 'pg',
    topic: 'Penjumlahan dan Pengurangan Pecahan',
    difficulty: 'Mudah',
    diagram: {
      type: 'addition_model',
      caption: 'Gambar 6: Model Penjumlahan Balok Pecahan',
    },
    text: 'Perhatikan model penjumlahan pecahan pada gambar di atas!\nModel tersebut memperlihatkan penggabungan balok pecahan 2/7 dan 3/7.\n\nHasil operasi penjumlahan 2/7 + 3/7 berdasarkan gambar tersebut adalah...',
    options: [
      { id: 'A', text: '5/14' },
      { id: 'B', text: '5/7' },
      { id: 'C', text: '6/7' },
      { id: 'D', text: '1/7' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada penjumlahan pecahan dengan penyebut yang sama, kita hanya menjumlahkan pembilangnya dan penyebutnya tetap sama:\n2/7 + 3/7 = (2 + 3) / 7 = 5/7.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Penjumlahan dan Pengurangan Pecahan',
    difficulty: 'Sedang',
    text: 'Ibu memiliki persediaan tepung terigu sebanyak 7/9 kg di dapur. Ibu menggunakan 4/9 kg tepung terigu tersebut untuk membuat pisang goreng.\n\nSisa tepung terigu yang masih dimiliki ibu sekarang adalah...',
    options: [
      { id: 'A', text: '3/9 kg (atau 1/3 kg)' },
      { id: 'B', text: '11/9 kg' },
      { id: 'C', text: '3/18 kg' },
      { id: 'D', text: '2/9 kg' },
    ],
    correctAnswer: 'A',
    explanation:
      'Operasi pengurangan pecahan dengan penyebut yang sama:\n7/9 - 4/9 = (7 - 4) / 9 = 3/9 kg.\nJika disederhanakan dengan membagi 3, nilainya senilai dengan 1/3 kg.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (>1 JAWABAN BENAR) (5 SOAL)
  // =========================================================================

  {
    id: 11,
    type: 'pgk',
    topic: 'Mengenal Pecahan',
    difficulty: 'Sedang',
    diagram: {
      type: 'bar_fraction',
      caption: 'Gambar 7: Balok Acuan Pecahan 1/2',
      totalParts: 2,
      shadedParts: 1,
    },
    text: 'Perhatikan gambar balok pecahan 1/2 di atas!\nManakah pecahan-pecahan di bawah ini yang senilai dengan 1/2?\n(Pilihlah semua jawaban yang benar, jawaban benar lebih dari satu!)',
    options: [
      { id: 'A', text: '2/4' },
      { id: 'B', text: '3/6' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '5/10' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Pecahan senilai dengan 1/2 memiliki ciri pembilangnya adalah tepat setengah dari penyebutnya:\n• 2/4 = (1 × 2)/(2 × 2) [BENAR]\n• 3/6 = (1 × 3)/(2 × 3) [BENAR]\n• 3/5 bukan setengah dari 5 (setengah dari 5 adalah 2,5) [SALAH]\n• 5/10 = (1 × 5)/(2 × 5) [BENAR]',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Membandingkan 2 Pecahan',
    difficulty: 'Sedang',
    text: 'Pilihlah semua pernyataan perbandingan pecahan di bawah ini yang bernilai BENAR!\n(Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: '3/8 < 7/8' },
      { id: 'B', text: '5/6 > 2/6' },
      { id: 'C', text: '4/10 > 7/10' },
      { id: 'D', text: '1/3 < 1/2' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Pemeriksaan setiap opsi:\n• Opsi A: 3/8 < 7/8 (Penyebut sama, 3 < 7) -> BENAR\n• Opsi B: 5/6 > 2/6 (Penyebut sama, 5 > 2) -> BENAR\n• Opsi C: 4/10 > 7/10 (Seharusnya 4/10 < 7/10) -> SALAH\n• Opsi D: 1/3 < 1/2 (1/3 = 2/6, 1/2 = 3/6, maka 2/6 < 3/6) -> BENAR',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Pecahan Desimal dan Persen',
    difficulty: 'Sedang',
    diagram: {
      type: 'grid_100',
      caption: 'Gambar 8: Petak Seratus Setengah Terarsir (50 Petak)',
      shadedParts: 50,
    },
    text: 'Perhatikan gambar petak seratus di atas! Sebanyak 50 petak dari total 100 petak terarsir warna ungu.\n\nManakah penulisan nilai yang tepat dan setara untuk menyatakan daerah arsiran tersebut?\n(Pilihlah semua jawaban yang benar, jawaban benar lebih dari satu!)',
    options: [
      { id: 'A', text: '0,5 (atau 0,50)' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '0,05' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Nilai arsiran adalah 50/100:\n• Desimal: 50/100 = 0,50 = 0,5 (Opsi A Benar)\n• Persen: 50% (Opsi B Benar)\n• Pecahan biasa sederhana: 50/100 = 1/2 (Opsi C Benar)\n• Opsi D salah karena 0,05 adalah 5/100 (5%).',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Penjumlahan dan Pengurangan Pecahan',
    difficulty: 'Sedang',
    text: 'Pilihlah seluruh operasi hitung pecahan berikut yang menghasilkan jawaban BENAR!\n(Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: '1/8 + 5/8 = 6/8' },
      { id: 'B', text: '9/10 - 4/10 = 5/10' },
      { id: 'C', text: '2/7 + 3/7 = 5/14' },
      { id: 'D', text: '6/11 - 2/11 = 4/11' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Mari periksa tiap operasi pecahan berpenyebut sama:\n• A: 1/8 + 5/8 = (1 + 5)/8 = 6/8 [BENAR]\n• B: 9/10 - 4/10 = (9 - 4)/10 = 5/10 [BENAR]\n• C: 2/7 + 3/7 = 5/7 (penyebut tetap 7, TIDAK dijumlahkan menjadi 14!) [SALAH]\n• D: 6/11 - 2/11 = (6 - 2)/11 = 4/11 [BENAR]',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Penjumlahan dan Pengurangan Pecahan',
    difficulty: 'Sukar',
    text: 'Ibu memotong sebuah melon menjadi 10 bagian sama besar untuk ketiga anaknya:\n• Wayan memakan 3/10 bagian melon.\n• Ketut memakan 4/10 bagian melon.\n• Made memakan 1/10 bagian melon.\n\nPilihlah semua pernyataan berikut yang BENAR berdasarkan cerita tersebut!\n(Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Ketut memakan bagian melon paling banyak di antara ketiga anak.' },
      { id: 'B', text: 'Jumlah melon yang dimakan Wayan dan Ketut adalah 7/10 bagian.' },
      { id: 'C', text: 'Sisa melon ibu yang belum dimakan adalah 2/10 bagian.' },
      { id: 'D', text: 'Made memakan melon lebih banyak daripada Wayan.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Analisis cerita melon:\n• Ketut makan 4/10, paling banyak di antara ketiga anak (Opsi A BENAR).\n• Wayan + Ketut = 3/10 + 4/10 = 7/10 bagian (Opsi B BENAR).\n• Total dimakan ketiga anak = 3/10 + 4/10 + 1/10 = 8/10 bagian. Sisa melon ibu = 10/10 - 8/10 = 2/10 bagian (Opsi C BENAR).\n• Made makan 1/10 sedangkan Wayan 3/10, jadi Made memakan lebih sedikit (Opsi D SALAH).',
  },

  // =========================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (BENAR / SALAH) (5 SOAL)
  // =========================================================================

  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Mengenal Pecahan',
    difficulty: 'Mudah',
    text: 'Perhatikan pernyataan tentang konsep dasar pecahan berikut ini!\nTentukan apakah masing-masing pernyataan bernilai Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Pada pecahan 4/9, angka 4 dinamakan pembilang dan angka 9 dinamakan penyebut.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pecahan 3/6 nilainya sama besar (senilai) dengan pecahan 1/2.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sebuah semangka yang dipotong menjadi 3 bagian yang tidak sama besar dapat langsung dinyatakan masing-masing bagiannya bernilai 1/3.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pemeriksaan pernyataan:\n1. Benar: Angka di atas tanda bagi disebut pembilang dan angka di bawah disebut penyebut.\n2. Benar: 3/6 disederhanakan dengan membagi 3 pada pembilang dan penyebut menghasilkan 1/2.\n3. Salah: Syarat pecahan adalah benda utuh harus dibagi menjadi bagian-bagian yang SAMA BESAR.',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Membandingkan 2 Pecahan',
    difficulty: 'Sedang',
    diagram: {
      type: 'number_line',
      caption: 'Gambar 9: Garis Bilangan Pecahan Perdelapanan',
    },
    text: 'Perhatikan letak pecahan-pecahan pada garis bilangan di atas!\nTentukan Benar atau Salah untuk setiap pernyataan perbandingan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Titik 3/8 terletak di sebelah kiri titik 5/8, sehingga 3/8 < 5/8.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Titik 6/8 senilai dengan 3/4 karena (6 ÷ 2)/(8 ÷ 2) = 3/4.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pecahan 7/8 memiliki nilai yang lebih kecil daripada pecahan 2/8.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pada garis bilangan horizontal:\n1. Titik di sebelah kiri selalu bernilai lebih kecil dari titik di sebelah kanannya: 3/8 < 5/8 (Benar).\n2. 6/8 senilai dengan 3/4 (Benar).\n3. 7/8 terletak di sebelah kanan 2/8, sehingga 7/8 > 2/8 (Salah).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Pecahan Desimal dan Persen',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan perubahan bentuk pecahan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Pecahan 2/5 jika diubah ke dalam bentuk pecahan desimal menghasilkan 0,4.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan 45% sama artinya dengan pecahan 45/100.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bilangan desimal 0,07 jika diubah ke dalam bentuk persen adalah 70%.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pemeriksaan konsep desimal & persen:\n1. 2/5 = (2 × 2)/(5 × 2) = 4/10 = 0,4 (Benar).\n2. Persen berarti per seratus, sehingga 45% = 45/100 (Benar).\n3. 0,07 = 7/100 = 7%, BUKAN 70%. Nilai 70% adalah 0,70 (Salah).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Penjumlahan dan Pengurangan Pecahan',
    difficulty: 'Mudah',
    text: 'Tentukan Benar atau Salah untuk aturan dan hasil perhitungan pecahan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Pada penjumlahan pecahan dengan penyebut yang sama, yang dijumlahkan hanyalah pembilangnya saja sedangkan penyebutnya tetap.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil perhitungan dari 3/10 + 4/10 adalah 7/20.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Hasil pengurangan pecahan dari 8/13 - 3/13 adalah 5/13.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Aturan operasi pecahan berpenyebut sama:\n1. Benar: Pembilang dijumlahkan, penyebut tetap.\n2. Salah: 3/10 + 4/10 = 7/10 (penyebut tidak dijumlahkan menjadi 20!).\n3. Benar: 8/13 - 3/13 = (8 - 3)/13 = 5/13.',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Penjumlahan dan Pengurangan Pecahan',
    difficulty: 'Sedang',
    diagram: {
      type: 'water_bottle',
      caption: 'Gambar 10: Botol Takaran Air Minum Kadek',
    },
    text: 'Perhatikan gambar botol takaran air minum Kadek di atas!\nKapasitas botol adalah 1 Liter (10/10 Liter). Awalnya botol terisi air 6/10 Liter. Setelah berolahraga sepeda, Kadek meminum air sebanyak 2/10 Liter.\n\nTentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Sisa air di dalam botol Kadek sekarang adalah 4/10 Liter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sisa air 4/10 Liter jika disederhanakan menjadi bentuk pecahan paling sederhana adalah 2/5 Liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak air yang diminum Kadek (2/10 Liter) setara dengan 50% dari kapasitas penuh botol.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Analisis botol takaran air:\n1. Sisa air = 6/10 - 2/10 = 4/10 Liter (Benar).\n2. Pecahan 4/10 disederhanakan dengan membagi 2: (4 ÷ 2) / (10 ÷ 2) = 2/5 Liter (Benar).\n3. 2/10 Liter = 20/100 = 20% dari kapasitas penuh botol, bukan 50% (50% dari 1 liter adalah 5/10 Liter atau 0,5 Liter) (Salah).',
  },
];
