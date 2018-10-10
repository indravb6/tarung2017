const kelompok = [
  'Microsoft',
  'Android',
  'NVIDIA',
  'AMD',
  'Apple',
  'Windows',
  'Adobe',
  'Linux',
  'Intel'
];


const data = {
  '101': {
    cerita: [
      'Kenalin nama gue Adam, gua masuk sistem informasi fasilkom karena gua diterima di sistem informasi fasilkom. Cita cita gua jadi iron man.  Keseharian gua itu ya mencoba lebih baik dari hari sebelumnya, walau kadang ga lebih baik, seringnya lebih ga baik, karena kebaikan datangnya dari Allah.'
    ],
    email: 'adam.maulana2603@gmail.com',
    motto: 'motto',
    nama: 'Adam Maulana',
    nick: 'Adam ',
    phone: '089633954630',
    sma: 'SMAN 13 Jakarta',
    ttl: 'Jakarta, 26 Maret 1999'
  },
  '102': {
    cerita: [
      'mungkin sering melihat gua dengan style berbeda kadang rambut di biarin,kadang di bando,kadang di iket.tergantung mood'
    ],
    email: 'adityanandaaa@gmail.com',
    motto: 'do or do not there is no try',
    nama: 'Aditya Nanda Tri Prakoso',
    nick: 'Tepe',
    phone: '087777346846',
    sma: 'SMAN 2 BEKASI',
    ttl: 'Bekasi,2 Desember 1999'
  },
  '103': {
    cerita: [
      "Hallo, wie geht's? Nama gue Greta, satu-satunya nama yang ada di fasilkom (sepertinya). Fyi, gue itu teknik gagal yang gak tau apa pun tentang fasilkom (bahkan keberadaannya di UI) dan yang akhirnya terdampar di SI. Gue punya hobi di bidang seni musik terutama nyanyi dan olahraga renang. Banyak orang yang bilang kalau gue itu pendiam. Tapi kalau udah kenal, gue banyak omong kok:). Satu lagi, gue itu susah menghafal muka orang tapi gampang menghafal nama. Danke"
    ],
    email: 'agretaelena@gmail.com',
    motto: 'Belajar dari Kesalahan',
    nama: 'Anastasia Greta Elena',
    nick: 'Greta',
    phone: '08118308240',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 8 Oktober 1999'
  },
  '104': {
    cerita: [
      'Namaku nida, tapi juga bisa dipanggil siannida tapi beberapa orang manggil aku nidambis:(. Aku orangnya gak ambis sih sebenernya tapi orang bilang aku ambis? Oiya aku orangnya mageran, terus kalau tidur kayak orang mati:( semoga pada sabar menghadapi aku ya hehe'
    ],
    email: 'annidasa@gmail.com',
    motto: "Don't let words destroy you",
    nama: 'Annida Safira Arief',
    nick: 'Nida',
    phone: '081219450909',
    sma: 'SMANU MH Thamrin',
    ttl: 'Brisbane, 22 Januari 2000'
  },
  '105': {
    cerita: [
      '\ufeffNamaku Anthony Dewa Priyasembada, biasa dipanggi Ant(h)on. Aku punya nama baptis Vincentius, jadi aslinya namaku lebih panjang. Aku suka main piano dan voli, walaupun mainnya nggak jago. Aku juga suka nonton film,  anime, dsb. Walaupun saya suka nonton anime, saya bukan wibu. Calon termaba Fasilkom UI 2017'
    ],
    email: 'anthonydewa67@gmail.com',
    motto: 'Do what you love',
    nama: 'Anthony Dewa Priyasembada',
    nick: 'Anton',
    phone: '085647421360',
    sma: 'SMAN 1 Boyolali',
    ttl: 'Boyolali, 22 Februari 2001'
  },
  '106': {
    cerita: [
      'most times i am a reserved, average girl with little quirks like tapping my fingers to the rhythm of the song that stuck in my head on the day. i like astronomical things. i love tea more than life. i like my egg scrambled with a little salt. i like to reevaluate my life at night and regretting my decision right after i made it. but choosing to be a part of FasilkomUI is not one of those:) Semangat, Tarung!'
    ],
    email: 'arditasophi15@gmail.com',
    motto: 'Take it or leave it',
    nama: 'Ardita Sophi Ayustine',
    nick: 'Dita',
    phone: '081399257029',
    sma: 'SMAN 89 Jakarta',
    ttl: 'Sidoarjo, 15 Agustus 1999'
  },
  '107': {
    cerita: [
      'Gua bayu, dari lampung. Gua masuk fasilkom gara2 pengen bisa ngehack ig, 3 bulan disini dan tidak ada tanda2 tujuan gua terpenuhi. Kerjaan gua disini cuma tidur, bangun, kelas, buka laptop, download, mayan wifi ui kebut. Setelah gua pindah ke depok gua baru tau kalu ternyata jadi anak kos itu sulit.'
    ],
    email: 'bayukanta25@gmail.com',
    motto: 'Hidup gausah dibuat susah',
    nama: 'Bayukanta Iqbal Gunawan',
    nick: 'Ganteng',
    phone: '081274703681',
    sma: 'Sman 9 bandarlampung',
    ttl: 'Kotabumi, 11 September 2000'
  },
  '108': {
    cerita: [
      'gua suka gaming dari dulu tk sampe sekarang. Game yang pertama gua maenin dulu itu Pokemon di GBA yang dikasih ama mak gua, dan itu titik dimana gua mulai suka main game. Genre apa aja gua jabanin, kalo sekarang - sekarang gua lagi sering main DoTA 2 sama Dark Souls series. Gaming juga sebenernya salah satu alasan gua masuk fasilkom. Gara - gara gua pengen mencoba menjadi produsen, gak jadi konsumen terus. Nah demi meraih mimpi gua jadi gamedev, di Fasilkom ini gua bakal coba serius menekuni bidang yang gua pengen. '
    ],
    email: 'darrand37@gmail.com',
    motto: 'Consider all the possibilities in life',
    nama: 'Dafa Ramadansyah',
    nick: 'Dafa',
    phone: '089643866602',
    sma: 'SMAN 1 Tangerang',
    ttl: 'Tangerang, 8 Januari 1999'
  },
  '109': {
    cerita: [
      'Gua orangnya asik seru humble supel bgt deh pokoknya. Terus gua juga suka olahraga. Tapi gua juga suka main komputer, main game dan sejenisnya.'
    ],
    email: 'daffarayhan95@gmail.com',
    motto: 'Do your best at any moment',
    nama: 'Daffa Muhammad Rayhan',
    nick: 'Rayhan',
    phone: '087781656902',
    sma: 'SMAN 8 Jakarta',
    ttl: 'Jakarta, 28 Agustus 1999'
  },
  '110': {
    cerita: [
      'Saya masuk SI bukan karena saya terdampar dari Ilkom, tapi banyak yang mengira begitu. Kalo lagi gabut seringnya nongkrong di Perpus Atas.'
    ],
    email: 'douglas.raevan@gmail.com',
    motto: 'Usaha bisa mengalahkan bakat',
    nama: 'Douglas Raevan Faisal',
    nick: 'Douglas',
    phone: '08111777437',
    sma: 'SMAN 1 Bogor',
    ttl: 'Bogor, 22 November 1999'
  },
  '111': {
    cerita: [
      'Nama saya Dzaky Abdi Al Jabbar. Saya berasal dari cirebon. Hobi saya adalah olahraga. Olahraga yang saya tekuni adalah pencak silat, saya menjadi anggota perguruan pencak silat merpati putih sejak kelas 10 sma. Dan sekarang, saya masih aktif mengikuti latihan di ukm merpati putih kelompok latihan universitas indonesia.'
    ],
    email: 'dzakyabdi17@gmail.com',
    motto: 'Man Jadda Wa Jadda',
    nama: 'Dzaky Abdi Al Jabbar',
    nick: 'Dzaky',
    phone: '082321925129',
    sma: 'SMAN 2 Cirebon',
    ttl: 'Cirebon, 17 September 1999'
  },
  '112': {
    cerita:['Loves science. Avid gamer. World builder. Dreams to be a Martian.'],
    email: 'siputgila@gmail.com',
    motto: 'Relativity',
    nama: 'Faishal Ridwan',
    nick: 'Faishal',
    phone: '087875307584',
    sma: 'MAN Insan Cendekia Serpong',
    ttl: 'Indramayu, 8 September 1999'
  },
  '113': {
    cerita: [
      'Kalian boleh panggil gue Dewi, Dew, atau Fandew. Muka gue sering dibilang mirip sama orang2. Banyak yg bilang gue mirip sama salah satu anak tarung yang inisialnya itu bahasa inggrisnya usia. Ada juga yg bilang gue mirip anak tarung lainnya, mirip temennya jaman kapan, mirip temennya temen, dan mirip2 lainnya. Oiya, gue punya banyak hobi, salah satunya baca. Gue suka baca apa aja yang menurut gue menarik. Mulai dari baca novel, baca komik, baca label kemasan, baca artikel2 di l*ne t*day, dan terutama baca.. hati lu he.he.'
    ],
    email: 'fanisyadewi@gmail.com',
    motto: 'Tidak ada pencapaian tanpa pengorbanan',
    nama: 'Fanisya Dewi Nusabakti',
    nick: 'Dewi',
    phone: '085714823509',
    sma: 'SMAN 28 Jakarta',
    ttl: 'Jakarta, 27 Juni 1999'
  },
  '114': {
    cerita: [
      'Hai, nama gua ferro, pake f bukan v, r nya ada dua bukan cuman satu. Hobi gua gak banyak, yaaa berhubung gua anak fasilkom bisa ditebak lah ya, salah satunya main game dan yang lain baca novel. Dari kecil gua suka banget sama yang namanya cerita, jadi kebayanglah kenapa gua kuat baca novel yang isinya teks semua. Bahkan alasan gua suka main game itu demi ceritanya. Pokoknya asal ceritanya seru gua suka deh. Tapi, gua gak terlalu suka film karena ceritanya biasanya pendek.',
      'Gua gak suka makan sayur atau makanan berkuah. Gua suka catur tapi entah kenapa kalah mulu. Kenapa gua masuk fasilkom? Karena gua gak kebayang jurusan lain kayak gimana. Kenapa UI? Karena deket dari rumah gua, sekali-kali gua mau ngerasain pp karena selama 6 tahun gua di asrama. Oiya, banyak orang yang bilang aura gua itu serem/unapproachable waktu belum kenal. Tapi kalo kenal sebenernya gua gak kayak gitu kok mungkin.'
    ],
    email: 'ferrohardian@gmail.com',
    motto: 'Semua butuh proses',
    nama: 'Ferro Geraldi Hardian',
    nick: 'Ferro',
    phone: ' 085717411999',
    sma: 'SMA Pribadi Depok',
    ttl: 'Cilegon, 9 Mei 1999'
  },
  '116': {
    cerita: [
      'Halo gue Datul, gue suka telat dan gak gak bisa jadi teratur. Gue suka airsoft tapi udah lama gak main sejak awal PMB, gue suka gambar dan suka nulis. Ohya belakangan gue suka belajar tentang AI'
    ],
    email: 'hidatulfikri@yahoo.com',
    motto: 'Sebenarnya saya tidak punya moto tapi yasudahlah',
    nama: 'Hidayatul Fikri',
    nick: 'Datul',
    phone: '081584130473',
    sma: 'SMAN 8 Jakarta',
    ttl: 'Tangerang, 21 Juni 1999'
  },
  '117': {
    cerita: [
      'Nama gue Jihan Maulana Octa, banyak yang manggil gue jahin,jian,octa. gue dr sma99 jakarta, selalu deh kalo ada org yg ketemu gue pasti nanya "gimana sargib disekolah?". gue orgnya cukup friendly dan dont care sama pandangan orang terhadap gue. Gue belum lama ini ikut main di video fatih jd pemeran utama. semenjak itu, setiap anak tarung yg ketemu gue pasti langsung bilang wah kirana cie artis tarung jih akting lo natural banget etc. Gue pengen masuk fasilkom karena didoktrin sama kating gue anak capung dulu. Alhamdulillah gue gak friendless disini hee'
    ],
    email: 'jihanocta363@yahoo.com',
    motto: 'Usaha gapernah mengkhianati hasil',
    nama: 'Jihan Maulana Octa',
    nick: 'Jihan',
    phone: '085921437199',
    sma: 'SMAN 99 JAKARTA',
    ttl: 'Jakarta, 28 Oktober 1999'
  },
  '118': {
    cerita: [
      'Haii ini Jojo',
      'Aku orang yang sederhana dan menganggap bahagia itu pun tak kalah sederhana : Bahagiaku adalah saat orang lain bahagia. Aku sampai di fasilkom UI karena niat dan passion dalam ilmu komputer. Aku percaya di Fasilkom inilah aku bisa berkembang. Dan saat sukses nanti, aku bisa sekali lagi bahagiain orang tua dan keluarga.'
    ],
    email: 'jonathanchristopher1199@gmail.com',
    motto: 'Pantang Pulang Sebelum Tumbang',
    nama: ' Jonathan Christoper Jakub',
    nick: 'Jojo',
    phone: '082176854180',
    sma: 'SMA Xaverius 1 Jambi',
    ttl: 'Tangerang 1 Januari 1999'
  },
  '119': {
    cerita: [
      'Assalamualaikum. Nama gua Mohammad Adli, biasa dipanggil adli. Milih fasilkom ui karena prospek pekerjaannya pas lulus nanti lumayan bagus, padahal sebelumnya pengen di fmipa ui. Gua suka misteri atau teka-teki, pas masuk fasilkom tersalurkan lah kesukaan gua. Banyak misteri di fasilkom termasuk juga banyak teka teki di mata kuliah yang ada di dalamnya. Gua harap gua bisa lulus dan dapat bekerja di perusahaan it yang sesuai dengan bakat gua yang insyaAllah didapatkan di fasilkom.'
    ],
    email: 'adli.daffa5@gmail.com',
    motto: 'Sukses dengan D.U.I.T.S',
    nama: 'Mohammad Adli Daffa Wirapanatayudha',
    nick: 'Adli',
    phone: '083151087802',
    sma: 'SMAN 67 JAKARTA',
    ttl: 'Jakarta, 2 Mei 1999'
  },
  '120': {
    cerita: [
      '"FUN FACT#1"Gue itu orangnya pelupa sama nama orang, jadi maafin kalau gue lupa nama lu pada ya hehe. "FUN FACT#2" Gue itu anak pp tapi gue nyewa kos di kutek dan gue baru qtempatin kos gue itu 4 kali dalam satu bulan. "FUN FACT#3"Gue juga masih ada satu masalah di FASILKOM!!! makanannya semuanya kalau malem kebanyakan ayam :( dan gue bosen sama ayam :(((',
      'HEHEHE'
    ],
    email: 'mohammadwildanyanuar.work@gmail.com',
    motto: 'Wong pinter kalah karo wong bejo',
    nama: 'Mohammad Wildan Yanuar',
    nick: 'Wildan',
    phone: '081286227658',
    sma: 'SMAN 61 Jakarta',
    ttl: 'Tulungagung, 27 Januari 1999'
  },
  '121': {
    cerita: [
      'Tampan, mapan, dan berani. Agamais dan nasionalis. Merupakan anak sulung dan didikan terbaik dikeluarganya. Masuk fasilkom karena ditolak ITB. Dan sekarang masih berharap sama ITB. Selalu berdoa kalo gamasuk ITB setidaknya jodohnya dari ITB. Berpikiran terbuka. Suka ngomongin dari politik, film, novel, meme, game, hingga wibu. Suka bawa novel dan kamera kemana-mana. Suka berbicara dengan nada sarkasme, Mudah memaafkan orang. Memiliki kemampuan koding setinggi toki.'
    ],
    email: 'mirfanamrullah@gmail.com',
    motto: 'Jangan menyerah pada takdir',
    nama: 'Muhammad Irfan Amrullah',
    nick: 'Irfan',
    phone: '085772847609',
    sma: 'SMAN 8 Jakarta',
    ttl: 'Jakarta, 10 Juni 1999'
  },
  '122': {
    cerita: [
      'Dari smp emang agak pendiem, ketambah gua kki jadi makin introvert di pacil. Tapi semua anak tarung, dan elemen fasilkom lain erat banget kok. Deket ngga deket, maupun angkatan sendiri atau angkatan atas tetep saling nyapa. Semoga selesai pmb ini ngga renggang kekeluargaan kita.'
    ],
    email: 'nau930@gmail.com',
    motto: 'Kenapa nanti kalau bisa sekarang',
    nama: 'Muhammad Naufal',
    nick: 'Naufal',
    phone: '085890007909',
    sma: 'SMA Islam Al-Azhar 1',
    ttl: 'Jakarta, 10 Desember 1998'
  },
  '124': {
    cerita: [
      'Halo, perkenalkan nama saia Muhammad Sendi Siradj, biasa dipanggil Siradj. Dalam satu paragraph essay ini saia akan menceritakan sedikit tentang diri saia. Saia lahir di Bekasi tetapi sejak umur 5 tahun, saia dibawa orangtua saia ke Medan, disanalah saia tumbuh dan berkembang. Saia sangat suka melihat hal-hal yang indah, oleh karena itu juga saia hobi dalam dunia desain. Selain itu, saia juga hobi bermain permainan olahraga. Sesuai hasil tes MBTI, saya berada didalam kategori INTJ, oleh karena itu saia rasa saia akan cocok berada didalam lingkungan dunia saintis. Karena saia sudah terbiasa dengan cara berfikir diskrit dan sistematis, saia rasa ilmu computer adalah ilmu yang tepat untuk saia dalami, hanya saja saia tidak berencana menjadi ilmuwan computer secara penuh. Saia juga merasa ilmu manajemen dan bisnis juga memunyai prospek yang besar jika kita mengerti. Karena itulah, saia memilih program studi Sistem Informasi di Fasilkom UI. Berikut essay singkat tentang saia. Terima kasih.'
    ],
    email: 'sendisiradj@gmail.com',
    motto: 'Once the game is over, the king and the pawn go into the same box',
    nama: 'Muhammad Sendi Siradj',
    nick: 'Siradj',
    phone: '081973159890',
    sma: 'SMA Unggulan CT Foundation',
    ttl: 'Bekasi, 14 Agustus 1998'
  },
  '125': {
    cerita: [
      'biasa dipanggil dhira, tapi kalo dirumah manggil diri sendiri tata, hobi nya nonton sama jalan jalan. Suka dengerin lagu, suka jazz juga.'
    ],
    email: 'nadhirashf@gmail.com',
    motto: 'fall down six times, get up seven',
    nama: '\u00a0Nadhira Shafa Thalia',
    nick: 'dhira',
    phone: '08161900107',
    sma: 'SMA Labschool Cibubur',
    ttl: 'jakarta,12 november 1999'
  },
  '126': {
    cerita: [
      'nama gue caca,alasan gue masuk fasilkom tu karena tertarik aja gtuuu liat kakak gue kerjaannya di bidang it jugaaa,trus hobi gue banyak sih ada renang baca novel denger lagu,doainn gueee yaaaa bisa ngerjain ddp gue masih kurang dan belom gtuuu tapi gue tetep harus semangat!yeyy'
    ],
    email: 'natasyaakhda@gmail.com',
    motto: 'Dream big and work for it',
    nama: 'Natasya Meidiana Akhda',
    nick: 'tasya / caca',
    phone: '085384255740',
    sma: 'SMAN 1 Kota Jambi',
    ttl: 'Jambi, 09 mei 1999'
  },
  '127': {
    cerita: [
      'Saya tertarik dengan dunia teknologi sejak kecil , dari acara-acara tv seputar IT, games komputer sampai programming. Di waktu luang, saya suka mencari tau atau menonton hal-hal random di internet, bermain game dan membaca buku.'
    ],
    email: 'nicolauscg@gmail.com',
    motto: 'Never stop learning',
    nama: 'Nicolaus Christian Gozali',
    nick: 'Nico',
    phone: '087880072000',
    sma: 'SMAS Jubilee',
    ttl: 'Jakarta, 11 Mei 2000'
  },
  '128': {
    cerita: [
      'sejujurnya gua mau massuk ilkom tapi masuknya SI, gapapa lah ya yang penting fasilkom. kenapa fasilkom? ya utamanya gara-gara deket rumah sih. Gadeng, karena emang cita-cita gua masuk sini dari dulu. hobi dan prioritas utama gua tidur, lainnya main dan dengerin musik. kali-kali coba dengerin playlist gue, pasti jatuh cinta '
    ],
    email: 'prissy.azzahra@gmail.com',
    motto: 'Kesuksesan berasal dari diri kita sendiri',
    nama: 'Prissy Azzahra Ratnadwita',
    nick: 'Prissy',
    phone: '081381222118',
    sma: 'SMAN 47 Jakarta',
    ttl: 'Jakarta, 22 April 1999'
  },
  '129': {
    cerita: [
      'Gue puspacinantya, biasa dipanggil puspa, puscin, dan pucin sama tarung karena di angkatan ada 2 puspa. Alasan gue masuk fasilkom ui karena kepo aja sama koding. Gue suka minuman sari lidah buaya, tapi di depok jarang.'
    ],
    email: 'puspacinantya@gmail.com',
    motto: 'You will only get what you work for',
    nama: 'Puspacinantya',
    nick: 'Puspa',
    phone: '0818852207',
    sma: ' SMAN 78 Jakarta',
    ttl: 'Jakarta, 8 April 1998'
  },
  '130': {
    cerita: [
      'Gua fadhil. Hobby gua nyanyi, sama makan. Alasan gua masuk fasilkom, gara2 ada senior gua yang bilang kalau tugas di fasilkom itu dikit. Dan alhamdulillah, gua masuk, dan kejebak, di fakultas yg bakalan nuntut gua tidur larut malam buat ngerjain tugas. Terutama matdis dengan keabstrakan tugasnya yang... wah. Apalagi TP nya yang... wah. Sama tugas mpktb yang... wah. Jalani aja dah'
    ],
    email: 'dolifadillah@gmail.com',
    motto: "Finish what you've started",
    nama: 'Rahmat Fadhilah',
    nick: 'Fadhil',
    phone: '082297937993',
    sma: 'SMAN 1 Sumatera Barat',
    ttl: 'Muara Bungo, 10 Agustus 1998'
  },
  '131': {
    cerita: [
      'Nama saya Randy, saya orangnya suka ngegame, hiking, olahraga, dan "ngoding". Saya masuk fasilkom karena ya stereotype gamer pengen bikin game sendiri. Kalo naik gunung biasanya bareng keluarga (semuanya sih). Olahraganya itu suka lari dari kenyataan, tenis meja di ruang rindu, sama bulu tangkis semua masalah. Suka ngoding kalo berhasil programnya, kalo ga berhasil ya coba lagi, masih banyak ikan di laut.'
    ],
    email: 'randydesnantara@gmail.com',
    motto: 'Mistakes will make you stronger',
    nama: 'Randy Hidayah Putra Desnantara',
    nick: 'Randy / Rendy',
    phone: '08577976591',
    sma: 'SMAN 71 Jakarta',
    ttl: 'Jakarta, 31 Agustus 1999'
  },
  '132': {
    cerita: [
      'Hai, kenalin gue Rania! Gue Alhamdulillah keterima di Fasilkom UI jurusan Ilmu Komputer KI 2017 yeay! Nah, gue mau share dikit tentang diri gue. Hobby gue nih ya, gonta ganti. Tapi yang pasti kayaknya gabakal ilang tuh, gue suka dengerin musik. Like gue kalo gabut tuh pasti dengerin musik. Buat genre, bisa ganti-ganti. Kalo galau ya dengerin lagu galau, kalo lagi hepi ya dengerin lagu asik. Udah itu aja deh. Semoga Tarung 2017 makin solid dehh amin. Sukses yaa kita semua!'
    ],
    email: 'raniatsany.zhr@gmail.com',
    motto: "Don't cry over mistakes, learn from them",
    nama: 'Rania Tsany Az-Zahra',
    nick: 'Rania / Tsany',
    phone: '08119447682',
    sma: 'SMAS Jakarta Islamic School',
    ttl: 'Cirebon, 24 April 2000'
  },
  '133': {
    cerita: [
      'gua masuk fasilkom karena dari sd kerjaannya di depan pc main game dan gatau lagi mau jurusan apaan ehehehh. kemaren ditolak sama itb tapi sekarang udh move on, ternyata ui itu ga kalah keren dari itb dan banyak juga alumni yg menginspirasi. terakhir, gua kira yg masuk fasilkom itu cuma orang yang geek-geek gitu ternyata SALAH BESAR, karena banyak juga yg ga ngerti ngoding kaya gua wkwkwkw'
    ],
    email: 'rayazrin19@gmail.com',
    motto: 'Jatuh tujuh kali, bangkit delapan kali',
    nama: 'Ray Azrin Karim',
    nick: 'Ray',
    phone: '087883177019',
    sma: 'SMAN 1 Bekasi',
    ttl: 'Medan. 19 April 2000'
  },
  '134': {
    cerita: [
      'Nama gw Rizkhi Pramudya Hastiputra, gw orangnya selalu random. Kadang gw suka main game, browsing meme, bengong,dll. Alasan gw masuk Fasilkom simple, karena di Fasilkom ini mempelajari hal2 yang bakal kepake buat mengikuti perkembangan teknologi zaman ini.'
    ],
    email: 'rizkhiphastiputra@gmail.com',
    motto:
      'Kekalahan sementara tidak berarti apa-apa jika mengarah kemenangan tertinggi',
    nama: 'Rizkhi Pramudya Hastiputra',
    nick: 'PH',
    phone: '081290474744',
    sma: 'SMAN 3 Depok',
    ttl: 'Jakarta, 19 Oktober 1999'
  },
  '135': {
    cerita: [
      'Nama saya Saffanah Fausta Lamis biasanya dipanggil Saffa. Jadi Saffa di tarung ada dua orang dan salah satunya aku. Aku asalnya dari Bandung, tapi gabisa bahasa sunda hehe. Dulu gapernah kepikiran buat bisa masuk fasilkom, tapi emang dari dulu nyari jurusan yang gaada kimia biologinya. Kata orang aku pendiem, tapi sebenernya kalo udah kenal, aku sama sekali ga pendiem hehe'
    ],
    email: 'saffanahfaustalamis@yahoo.com',
    motto: 'Bermanfaat bagi banyak orang',
    nama: 'Saffanah Fausta Lamis',
    nick: 'Saffa',
    phone: '081214499600',
    sma: 'SMAN 5 Bandung',
    ttl: 'Cilegon, 27 Juni 1999'
  },
  '136': {
    cerita: [
      'Nama gua sandi , gua sangat suka dengan kopi makannya gua dipanggil warsan sama tepe , warsan itu warkop sandi sekian.'
    ],
    email: 'sbhirama@gmail.com',
    motto: 'Jika kesempatan tidak pernah datang, Buatlah!',
    nama: 'Sandi Bhirama',
    nick: 'Sandi',
    phone: '085718371675',
    sma: 'SMAI AL-Azhar 4 ',
    ttl: 'Purwokerto, 1 Oktober 1999'
  },
  '137': {
    cerita: [
      'Nama gue Shafira Dyah Pradita; lupa gimana asal-usulnya gue dipanggil Shady, pokoknya sekarang hampir semua orang manggil gue Shady aja haduh. Gue hobi gambar tapi gasempet gambar tiap sampe rumah :( jadi hobi gue ganti aja deh jadi tidur sama makan, yeay.'
    ],
    email: 'shafiradyhp@gmail.com',
    motto: 'kalo gampang diraih mah semua orang bisa.',
    nama: 'Shafira Dyah Pradita',
    nick: 'Shafira / Shady',
    phone: '08170989880',
    sma: 'SMAN 38 Jakarta',
    ttl: 'Jakarta, 25 September 1999'
  },
  '138': {
    cerita: [
      'Aku biasa dipanggil hany dengan prinsip selalu tersenyum. Hobinya nonton film, foto-foto, design graphic, dan explore something new. Aku tinggalin scholarship di malaysia buat masuk UI. Aku pilih jurusan sistem informasi karena ingin memperdalam coding dan bisnis, sedangkan design diperdalam autodidact saja'
    ],
    email: 'stevanysupardi@gmail.com',
    motto: 'Start each day with a grateful heart and smile a little more!',
    nama: 'Stevany',
    nick: 'Hany',
    phone: '087889070770',
    sma: 'SMAK 6 Penabur',
    ttl: 'Jakarta, 29 Juli 1999'
  },
  '201': {
    cerita: [
      'Alasan masuk fasilkon itu pertama gue ingin tau apasih itu IT dan kenapa banyak banget minat  orang2 ingin masuk IT nah mulai dr situ gue mulai ingin tau dan memilih jurusan fasilkom , yang kedua gue ingin belajar manajemen sekaligus bersangkut paut ingin ada pelajaran ipanya juga thats why gue memilih jurusan sistem informasi. Hobi gue sebernya yang paling sering gue lakuin itu dengerin musik dan nonton'
    ],
    email: 'adeliaislamiyanti31@gmail.com ',
    motto: 'Munculkan ide wujudkan kreativitas',
    nama: 'Adelia Islami Yanti',
    nick: 'adel',
    phone: '081296860003',
    sma: 'SMAN 2 Bekasi',
    ttl: 'Bekasi, 31 Agustus 1999'
  },
  '202': {
    cerita: [
      'Pertama kali itu pengennya masuk SI karna gw tau gabakal bisa masuk ilkom. Eh saat detik-detik pengumuman simak, taunya yg keluar malah dapet ilkom. Untung gw sabar.'
    ],
    email:
      'ahmadsupri1999@gmail.com                                                                                                                                              ',
    motto: 'well played well planned',
    nama: 'Ahmad Supriyanto',
    nick: 'Supri',
    phone: '08119997076',
    sma: 'SMAN 4 Depok',
    ttl: 'Jakarta, 20 Maret 1999'
  },
  '204': {
    cerita: [
      'Nama gua Arditio Triadi Riski, biasanya dipanggil Tio (1) karena di Tarung yang panggilan Tio ada 3 orang. Gua suka maen game, ngumpul-ngumpul, tidur, dan liat meme. Alasan gua masuk Fasilkom supaya gua ga jadi dokter karena dulu orang tua gua nyuruh gua masuk FK ahahaha..'
    ],
    email: 'arditioriski@gmail.com',
    motto: 'Forgive not forget',
    nama: 'Arditio Triadi Riski',
    nick: 'Tio',
    phone: '082122919189',
    sma: 'SMAN 1 Depok',
    ttl: 'Jakarta, 29 November 1998'
  },
  '205': {
    cerita: [
      'Saya orangnya cukup tidak peduli pemalas, hobi saya bermain game dan menonton. Walai saya tidak peduli saya oragnnya tetap menjalankan kewejiban yg menurt saya penting.alasan saya masuk fasilkom ui adalah karena fasilkom ui merupakan salah satu fakultas ilmu komputer terbaik di indonesia'
    ],
    email: 'arifteguhwangi@gmail.com',
    motto: 'Berani berbuat berani bertanggungjawab',
    nama: 'Arif Teguh Wangi',
    nick: 'arif',
    phone: '081269674499',
    sma: 'SMA Tri Ratna Sibolga',
    ttl: 'Sibolga, 14 Oktober 1999'
  },
  '206': {
    cerita: [
      'Halo guys!',
      'Kenalin gua Aryo, alhamdulillah berhasil lahir dengan selamat pas tanggal 6 Mei 1999. Asal gua dari suatu daerah yang bernama Bekasi. Hobi gua ngisengin orang secukupnya. Gua adalah tipikal orang yang seneng organisasi atau kepanitaan, karna gua bisa bertemu dengan berbagai macam orang. Jadi, kalo lu suka organisasi atau kepanitiaan juga, see you soon!'
    ],
    email: 'ardh.yodh@gmail.com',
    motto: 'Now or Never!',
    nama: 'Aryo Tinulardhi',
    nick: 'aryo',
    phone: '081322517737',
    sma: 'SMAN 1 Bekasi',
    ttl: 'Bekasi, 06 Mei 1999'
  },
  '207': {
    cerita: [
      'Nama gua Aurellia Dhya Andini, biasa dipanggil Aurel. Menurut gua, gua itu belum terlalu kenal sama diri gua sendiri, belum tau potensi maksimal gua dimana, intinya masih nyari jati diri sampai sekarang. Terus, salah satu alasan kenapa gua masuk fasilkom yaitu pas kelas 11 gua dikasih tau sama temen gua kalau ada jurusan namanya sistem informasi yang ada ngoding-ngodingnya dan manajemennya juga ada, dan dari situ gua mulai tertarik sama jurusan ini, terus mulai nyari tau tentang SI. Semoga gua bisa survive dan lulus 4 tahun dari fasilkom ya:)'
    ],
    email: 'aurel.da99@gmail.com',
    motto: 'Nothing worth having comes easy',
    nama: 'Aurellia Dhya Andini',
    nick: 'Aurel',
    phone: '081806993019',
    sma: 'SMAN 1 Depok',
    ttl: 'Jakarta, 20 Juli 1999'
  },
  '208': {
    cerita: [
      'Diriku hanyalah seorang insan yang terlahir di dunia yang penuh emosi dan ekspresi yang sehari-harinya mencoba diisi dengan aktivitas penuh esensi sebagai bukti eksistensi diri ini kepada yang maha kuasa. Nama saya Bram, mahasiswa ilmu komputer yang suatu saat ingin menjadi akademisi yang memberi manfaat bagi sesama.'
    ],
    email: 'bramanta.n@gmail.com ',
    motto: 'Sebaik baik manusia adalah yang berguna bagi yang lainnya',
    nama: 'Bramanta Nararya Nurul Haq',
    nick: 'Bram',
    phone: '08561842828',
    sma: 'SMA PU Al Bayan',
    ttl: 'Surabaya, 20 Juni 1999'
  },
  '209': {
    cerita: [
      'Nama saya Clarisa Mirah Sekarsari. Saya orangnya biasa-biasa aja. Gak ada yang spesial samsek. Saya suka kesel kalo jam tidur saya ga sampe 8 jam.'
    ],
    email: 'clarisamirah1402@gmail.com',
    motto: 'Make better mistakes.',
    nama: 'Clarisa Mirah Sekarsari',
    nick: 'Clarisa',
    phone: '081289598096',
    sma: 'SMAN 82 Jakarta',
    ttl: 'Jakarta, 14 Februari 2000'
  },
  '210': {
    cerita: [
      'nama sama Dimas Krissanto Rahmadi',
      'bukan Kristianto',
      'bukan Kristanto',
      'yagitudeh, pokoknya fasilkom itu seru lho. paling satu doank yang nggak seru, yaitu namanya terdiri dari tiga huruf, dan ada di semester pertama. ',
      'ya benar, itu namanya MPK ',
      'he he he'
    ],
    email: 'dimaskr2000@gmail.com',
    motto: 'No regrets, just lesson learned',
    nama: 'Dimas Krissanto Rahmadi',
    nick: 'Dimas',
    phone: '081392773398',
    sma: 'SMAN 3 Depok',
    ttl: 'Jakarta, 10 Januari 2000'
  },
  '211': {
    cerita: [
      "Oke, halo... Saya Dzaky Noor Hasyim. Yaaa biasa dipanggil Dzaky atau Noor. Suka bahan-bahan shitpost. Hobi ada banyak, tapi yang difokusin yaitu sepedaan, main game, sama ngedit video (udah lama gak ngedit tapi). Pengen main di track enduro tapi sepeda nggak memadai :'(. Ngegame, ya biasa sih mungkin gamenya gak biasa, Arma3 sama R6S, contact me on steam (Noorea) for further info ;)",
      'Secara singkat saya masuk Pacil iyalah, naik kereta dari St Bojong Gede ke St Pondok Cina, abis itu jalan. Untuk seriusnya, yaa saya keterima melalui jalur PPKB, dan bersamaan hoki kesedot abis (hanya 1 dari 8 pendaftar yang diterima)',
      'Yak itu aja, buat selebihnya silahkan kontak saya~ '
    ],
    email: 'dzaky.noor.hasyim@gmail.com',
    motto: 'Mulai dari diri sendiri',
    nama: 'Dzaky Noor Hasyim',
    nick: 'Dzaky/Noor',
    phone: '081212990503',
    sma: 'SMAN 1 Bogor',
    ttl: 'Yogyakarta, 7 Januari 1999'
  },
  '212': {
    cerita: [
      'Orangnya pendiam, easy going, agak ignoran, biasanya deadliner, demen dengerin lagu korea.'
    ],
    email: 'edricklainardi@gmail.com',
    motto: 'Live Your Life With No Regrets',
    nama: 'Edrick Lainardi',
    nick: 'Edrick',
    phone: '08997441848',
    sma: 'SMA Darma Yudha Pekanbaru',
    ttl: 'Medan, 22 Januari 2000'
  },
  '213': {
    cerita: [
      'Kenalin, nama gw Ervan Adiwijaya Haryadi. Biasa dipanggil Ervan. Gw dulu sempet kuliah di ITB, cuman karena gak dapet Informatika di sana dan berbagai hal, gw jadinya pindah ke sini :). Harapan gw di Fasilkom ini adalah semoga gw bisa menjadi seorang Game Developer terbaik bangsa dan menghasilkan berbagai game yang go internasional..'
    ],
    email: 'erhar23@gmail.com',
    motto: 'Live Like It Will End Tomorrow',
    nama: 'Ervan Adiwijaya Haryadi',
    nick: 'Ervan',
    phone: '081316204070',
    sma: 'SMA Kolese Kanisius',
    ttl: 'Jakarta, 9 Oktober 1995'
  },
  '214': {
    cerita: [
      'Guatuuh orangnya gak ambis, dan gak perfeksionis juga. Jadi kalau misalkan gua udah gakbisa sama suatu hal yaudah weh gua gabisa aja soalnya gua punya limit tersendiri hehe'
    ],
    email: 'fazasabira@gmail.com',
    motto: 'The best way to start is quit talking and begin doing',
    nama: 'Faza Siti Sabira Prakoso',
    nick: 'Faza',
    phone: '08131961989',
    sma: 'SMAN 3 Bogor',
    ttl: 'Bogor, 10 Juni 1999'
  },
  '215': {
    cerita: [
      'Saya masuk ke Fasilkom karena ingin mempelajari kegunaan dari Iptek. Saya masuk melalui jalur SBMPTN, dimana saya tak percaya bisa masuk karena saat ngerjain memang setengah hati. Hobi saya adalah bermain Dota dan mewibu.'
    ],
    email: 'satya1chiko@gmail.com',
    motto: 'Have Fun and Keep Trying',
    nama: 'I Gusti Ngurah Agung Satya Dharma',
    nick: 'Satya',
    phone: '081281055602',
    sma: 'SMAS Kolese Gonzaga',
    ttl: 'Denpasar, 4 Juni 1999'
  },
  '216': {
    cerita: ['Hai yang lagi baca, gue orangnya introvert jadi gue lebih milih solitude dibanding keramaian, kecuali bareng temen. Perpaduan warna merah dan hitam itu favorit gue, jadi kalau lu liat gue pasti ada di salah satu aspek gue. Gue gak jago olahraga, tapi gue bisa dan hobi. Gue juga bisa dan hobi dance, tapi stylenya bukan modern maupun tradisional.',
'',
'Gue bersyukur bisa masuk UI pilihan pertama, ketemu kalian semua, temen-temen baru di Fasilkom. Gue bangga bisa bersama Tarung dan ketemu teman-teman baru di angkatan atas yang hebat-hebat. Sekian dari gue, kalo ada penasaran tanya-tanya aja coba.',
'',
'Ora et labora.'],
    email: 'ignatius.mbs@gmail.com',
    motto: 'ora et labora',
    nama: 'Ignatius Bagussuputra',
    nick: 'Ignatius',
    phone: '085921414000',
    sma: 'SMA Dian Harapan',
    ttl: 'Jakarta, 24 Oktober 1999'
  },
  '217': {
    cerita: [
      'PemburuSurga-BuronanNeraka yang nyasar ke Fasilkom UI, bercita cita menjadi tukang kode yang sholih-bermanfaat-baikhati-rajinmenabung'
    ],
    email: 'ikhsanulakbar55@gmail.com',
    motto: 'Nikmati Hidup, Persiapkan Mati',
    nama: 'Ikhsanul Akbar Rasyid',
    nick: 'Ikhsan',
    phone: '082230196296',
    sma: 'MAN 3 Malang',
    ttl: 'Medan, 5 Mei 1999'
  },
  '218': {
    cerita: [
      'Halo we, namaku insanul fahmi. Biasanya di panggil insan, kalau di medan di panggil paman ucok. Aku suka segala sesuatu yang berhubungan dengan kamera. Selain itu aku juga suka yang berhubungan sama teknologi, itu dia alasannya kenapa aku milih masuk fasilkom. Semoga tarung bisa sama sama sukses ya kedepannya! Aamiin.'
    ],
    email: 'Insanf10@gmail.com',
    motto: 'Be Humble.',
    nama: 'Insanul Fahmi',
    nick: 'Insan',
    phone: '082166001776',
    sma: 'SMAN 3 Medan',
    ttl: 'Palembang , 24 Maret 1999'
  },
  '219': {
    cerita: [
      'Hai haii semua!! Kalian bole manggil gue irene/rene/airin bebas deh terserah km km semua biar gak bingung!! Jadi gue tuh dari sd smp sma selalu dpt angket terbawel HEHE jadi kalo kita kenalan trus gue langsung bacot bgt itu karena bawaan lahiriah gue (apologize in advance). TRUUS pokoknya gue tuh selalu disuruh jadi tumbal kalo ada hal2 memalukan yang mungkin terjadi!! Misalnya disuruh ngetok ruang kepsek, nanya2 ke kating, pokoknya yang bisa berpotensi merusak reputasi deh!! GUE GAK JUTEK!! Banyak yg bilang muka gue itu resting btch face:( padahal gue gak jutek gengs memang begitu muka w!! Tapi sebenernya walaupun gue bawel gue tuh susah buat bener2 dekeeeet kaya gini || (gapake spasi) sama orang lain karena gue rada introvert lho aslinya, pasti pada gapercaya!! Gue jg suka bergaul sama siapa aja jadi jgn takut2 ya sama gue!! Sukses buat Tarung!! Semoga taun depan kalo ada maba 18 mau wawancara kita jawaban kita membanggakan!! (Iya gue dulu magang di google, DDP mah gampang dek, matdas apalagi favorite gue bgt)'
    ],
    email: 'irenepixelyne@gmail.com',
    motto: 'Apa Yang Ditabur, Itu Yang Dituai',
    nama: 'Irene Pixelyne Romauli',
    nick: 'Irene',
    phone: '082125949998',
    sma: 'SMAN 81 Jakarta',
    ttl: 'Jakarta, 15 Juni 1999'
  },
  '220': {
    cerita: [
      'Nama gue Kenia, sayangnya ga bisa disingkat lagi. Ya, gue tau nama gue kayak nama cowo. Orang bilang gue rakus tapi kurus. Gue suka banyak hal dan gue gagal menjadi penyelundup di kelas MPKT. ',
      'Alesan gue masuk Fasilkom karena Fasilkom adalah penyambung semua hal yg gue suka. ',
      'Semoga gue bisa sukses bersama Tarung!!'
    ],
    email: 'zerlinda1122@gmail.com',
    motto:
      "Everything is going to be okay in the end if it's not Okay, it's not the end",
    nama: 'Kenia Visakha Zerlinda',
    nick: 'Kenia',
    phone: '081283411745',
    sma: 'SMA Labschool Cibubur',
    ttl: 'Jakarta, 30 Mei 1999'
  },
  '221': {
    cerita: [
      'Halo nama saya Muhamad Nicky Salim. Biasa di panggil Nicky. Tinggal di kota Tangerang. Dulu pas SD SMP hobi bgt main catur trus pas SMA beralih ke dunia ilmu komputer. Sekarang kuliah di Fasilkom UI via SBMPTN pertama kali pilihan kedua. Sekarang ngekos di pondok lambang biru belakang St UI sama Aloysius Kurnia Mahendra yang sama sama satu lesan, satu sekolah, satu tim olimpiade, dan sekarang sama sama anak tarung yang jurusannya sama sama ilkom dan tinggal sekamar sama Aloysius Kurnia Mahendra. Semoga Tarung tetap maju jaya. Sukses selalu Tarung!'
    ],
    email: 'muhammadnickysalim@gmail.com',
    motto:
      'Jika mimpumu tak sanggup untuk menggetarkan hatimu, maka mimpimu tak pantas untuk di perjuangkan.',
    nama: 'Muhamad Nicky Salim',
    nick: 'Nicky',
    phone: '083813357165',
    sma: 'SMAN 2 Tangerang',
    ttl: 'Jakarta, 27 Januari 1999'
  },
  '222': {
    cerita: [
      '"Gua dipanggil rian karena kalo audrian, gua sering dikira cewek sama driver grab. Menurut gua, Indomie adalah keajaiban dunia ke-8, dan kalo seseorang nggak mau makan indomie, dia kehilangan salah satu kenikmatan dunia."'
    ],
    email: 'rianfiftyseven@gmail.com',
    motto: 'Expect the best, prepare for the worst',
    nama: 'Muhammad Audrian Ananda Priambodo',
    nick: 'Rian',
    phone: '085781808650',
    sma: 'SMA Dwiwarna Parung',
    ttl: 'Jakarta, 9 April 1999'
  },
  '223': {
    cerita: [
      ' Alasan gw masuk fasilkom, gw pengen punya bisnis sendiri dibidang konveksi dan digital printing. Karena, di pikiran gw, kalo hanya sekedar memulai usaha semua orang bisa, sehingga gw perlu skill lain yang buat gw beda'
    ],
    email: 'm.faishal.ammar@gmail.com',
    motto: 'bahkan manusia tak tau apa yang terbaik baginya',
    nama: 'Muhammad Faishal Ammar Wibowo',
    nick: 'Faishal',
    phone: '087865791217',
    sma: 'sman 61 jakarta',
    ttl: 'Jayapura,18 april 1999'
  },
  '224': {
    cerita: [
      'gue baru kepikiran masuk ilmu komputer itu kelas 12. gue milih ilmu komputer karena prospek kerjanya luas banget. gue gak masalah kalo gue diterima dimana aja soalnya gue lebih mentingin cara gue belajar daripada universitasnya.'
    ],
    email: 'nadhirsyah@gmail.com',
    motto: 'Kegagalan adalah kemenangan yang tertunda',
    nama: 'Muhammad Nadhirsyah Indra',
    nick: 'Nadhir',
    phone: '085939746873',
    sma: 'SMA Islam Al-Azhar 1',
    ttl: 'Jakarta, 18 Juli 1999'
  },
  '225': {
    cerita: [
      'Namaku Nardi\u00e9na dari Ilkom 2017. Hobiku adalah bermain piano dan lagu-lagu kesukaanku adalah yang dari era klasik. Saat ini, aku ikut Orkes UI Mahawaditra dan juga sedang mempelajari alat musik cello. Rencanaku setelah lulus kuliah adalah melanjutkan studi magister dan doktor. Aku ingin mempelajari ilkom dengan lebih mendalam atau mungkin geofisika karena aku juga berminat di bidang itu. Salah satu cita-citaku adalah untuk keliling dunia. Aku ingin menjelajahi alam yang ada di Amerika Utara dan juga tepui-tepui yang ada di Amerika Selatan dengan sahabat-sahabatku ketika sekolah di Inggris.'
    ],
    email: 'nardienapratama@yahoo.com',
    motto: 'Always hope for the best, but be prepared for the worst',
    nama: 'Nardi\u00e9na Althafia Pratama',
    nick: 'Nardi\u00e9na',
    phone: '081286786926',
    sma: 'Gandhi Memorial Intercontinental School Jakarta',
    ttl: 'Brussel, 21 Februari 2000'
  },
  '226': {
    cerita: [
      'Gue anak daerah yang merantau ke Jakarta untuk mencarin banyak teman dan pengalaman, dan saya mempunyai hobi bermaen voli.'
    ],
    email: 'nurrifandy70@gmail.com ',
    motto: 'be yourself',
    nama: 'Nur Rifandy',
    nick: 'Fandy',
    phone: '085730699903',
    sma: 'SMAN 1 SITUBONDO',
    ttl: 'Situbondo, 18 Maret 1999'
  },
  '227': {
    cerita: [
      'Perkenalkan, nama saya Patricia Anugrah Setiani. Biasa dipanggil Pat, Tris, Patrice, Pas, Cia, lah kok jadi banyak banget?? wkwkwk... Hobi saya adalah melamun, berimajinasi, dan mencari inspirasi, yah pokoknya yang cuma gunain otak gitu wkwk... Terus kenapa masuk Fasilkom UI?? Fasilkom itu seru, menantang, dan memberi banyak inspirasi he he...'
    ],
    email: 'patricia.anugrah@gmail.com',
    motto: 'Do not fear, do not regret, and just do it',
    nama: 'Patricia Anugrah Setiani',
    nick: 'Patricia',
    phone: '081288412099',
    sma: 'SMA Pelangi',
    ttl: 'Jakarta, 15 Desember 1999'
  },
  '228': {
    cerita: [
      'gue rasika, tarung 2017:) awal belajar di fasilkom gue pikir gue salah jurusan dan pengen pindah teknik tahun depan tapi seiring berjalannya waktu dan udah mulai punya temen, lama lama malah kerasa nyaman banget di fasilkom. gue bener bener bangga bisa jadi bagian dari fasilkom. awalnya gue orangnya tuh introvert, tapi kalo udah nyaman banget di lingkungan gue, gue bisa super rame dan jayus dan receh hehe. hal yang gue minatin itu banyak banget, gue selalu pengen ikut semua ukf karena seru aja melakukan hal hal itu buat refreshing dan nambah temen juga:) makanan favorit gue di pacil adalah sate + nasinya dikasih kuah.'
    ],
    email: 'rasikahayu16@gmail.com',
    motto: 'Hal besar diawali dengan hal-hal kecil',
    nama: 'Rasika Ayuningtyas',
    nick: 'Rasika',
    phone: '087880532379',
    sma: 'SMAN 1 Depok',
    ttl: 'Surabaya, 16 November 1999'
  },
  '229': {
    cerita: [
      'Ada beberapa hal yang dapat mendeskripsikan gua. Gua adalah orang yang percaya diri, yang membuat gua sangat mudah untuk berbicara di depan umum. Dalam melakukan segala sesuatu, gua lebih memntingkan rasio dibandingkan perasaan gua, karena gua lebih bisa menerima dan memberikan sesuatu berdasarkan apa yang bisa gua lihat, bukan dari sekadar hal yang abstrak. Gua gak suka dengan orang yang tidak bisa mengkondisikan dirinya sesuai waktu dan tempat. Gua adalah orang yang sangat selektif dalam bergaul, dengan artian lingkungan tersebut memiliki interest yang sama dengan gua. Gua adalah orang yang dalam mempelajari sesuatu harus dimengerti secara perlahan. Gua seneng dengan hal-hal yang berhubungan dengan musik, seperti menyanyi dan memainkan alat musik piano dan gitar. Gua juga suka dengan berbagai macam genre musik, secara khusus genre klasik. Gua juga suka bermain video game, seperti CSGO, Dota 2, Mobile Legends, PES, tetapi tidak sampai ke tingkat kecanduan bermain. Dalam berolahraga, gua sangat suka berenang, dan sedang mendalami dan menekuni cabang olahraga tenis lapangan.'
    ],
    email: 'samuel.dimas@rocketmail.com',
    motto: 'Bawa pengaruh baik untuk lingkungan',
    nama: 'Samuel Dimas Partogi',
    nick: 'Samuel',
    phone: '081519297792',
    sma: 'SMAN 3 Bekasi',
    ttl: 'Jakarta, 17 April 1999'
  },
  '230': {
    cerita: [
      'Nama gw satrio. Kerjaan sehari-hari ngampus, balik, makan, mandi, belajar, tidur, bangun, dan main diselipin dimana aja sebisanya rinse and repeat. Garam gacha adalah setengah hidup gue karena belum ada pasangan. Harapan lulus sini 3,5 th ty'
    ],
    email: 'satriosya@gmail.com',
    motto: 'Doing what you want when you want it',
    nama: 'Satrio Raffani Raharjo',
    nick: 'Satrio',
    phone: '081382515679',
    sma: 'SMANU MHT',
    ttl: 'Jakarta, 15 April 1999'
  },
  '231': {
    cerita: [
      'Nama gw Sayid Abyan. Sebelum masuk fasilkom gw biasa dipanggil Abyan dan merupakan orang yang cukup introvert, bayangin aja waktu kelas 12 gw ga ngomong sama siapa-siapa di kelas karena ga begitu kenal sama temen kelas gw selama sebulan. Maka dari itu gw ingin berubah saat masuk fasilkom ini, gw ingin lebih aktif bersosialisasi, ga malu-malu lagi untuk nyapa orang, dan gw juga ingin aktif di bidang akademis maupun non-akademis selama di fasilkom karena gw tau kuliah kaya begini itu cuma sekali dan ga lama. Sekarang gw dipanggil Sayid sebagai tanda kalau gw sudah berubah.'
    ],
    email: 'sayidabyan@gmail.com',
    motto: 'Be as happy as you can be',
    nama: 'Sayid Abyan Rizal Shiddiq',
    nick: 'Sayid',
    phone: '0816800900',
    sma: 'SMAN 81 Jakarta',
    ttl: 'Jakarta, 21 Juli 1999'
  },
  '232': {
    cerita: [
      'Lahir akhir tahun di Jakarta. Orang-orang biasa manggil abang. Jangan tanya kenapa. Gua juga bingung jelasinnya. Hobi jalan-jalan. Suka moto tapi gasuka difoto'
    ],
    email: 'sarsyifa@gmail.com',
    motto: 'Kerja keras untuk masa depan yang lebih baik',
    nama: 'Siti Aulia Rahmatussyifa',
    nick: 'Syifa',
    phone: '08111899969',
    sma: 'SMAN 1 Depok',
    ttl: 'Jakarta, 31 Desember 1998'
  },
  '233': {
    cerita: [
      'Sebenernya masuk fasilkom itu pengen tau lebih mengenai teknologi khususnya komputer. Saat SMA dulu, masih labil mau kedokteran atau masuk IT. Trus, nyari2 universitas apa yang bagus di bidang IT nya. Akhirnya ketemu lah antara ITB, ITS, UI, Binus. Setelah baca-baca banyak soal pengalaman orang2 yang berkaitan dengan hal tersebut, akhirnya memutuskan untuk masuk di UI. Dulu gua SMA di jogja dan nge kos, kerasa banget jauhnya dan kangen pulang ke Tangerang. Satu-satunya univ yang bagus dan ga terlalu jauh ya UI dan Binus. Tapi, dibandingkan Binus, UI lebih unggul kalau gua baca2 dari internet. Akhirnya belajar giat buat keterima di UI.',
      'Hobi gua sebenernya itu main musik dan denger lagu, juga olahraga kayak bola, futsal, basket, renang. Gua juga suka main game dari gua kecil.',
      'Gua pikir kalau bisa dapet sarjana IT, gua pengen bisa kerja dari rumah ataupun kerja ga terpatok banget harus ke kantor kecuali memang ada hal yang diharuskan ke kantor. Makanya gua milih untuk masuk fasilkom ini, apalagi peluang untuk diterima kerja lebih besar, katanya....'
    ],
    email: 'stefanuskhrisna06@gmail.com',
    motto: 'Jangan Menyerah',
    nama: 'Stefanus Khrisna Aji Hardiyanto',
    nick: 'Khrisna',
    phone: '081911161711',
    sma: 'SMA Kolese De Britto Yogyakarta',
    ttl: 'Metro, 6 Maret 1999'
  },
  '234': {
    cerita: [
      'Sampai sekarang masih gak ngerti kenapa selalu disangka jutek dan diberi julukan "kakak komdis" padahal perasaan gue pasang muka yang biasa aja. Aslinya gue sering ketawa dan memiliki selera humor yang tinggi (baca : receh) kok, percayalah. Pemain biola dari kecil yang sampai sekarang entah kenapa masih aja demam panggung.'
    ],
    email: 'steffialexandraa@gmail.com',
    motto: 'Good things take time.',
    nama: 'Steffi Alexandra',
    nick: 'Steffi',
    phone: '081297945205',
    sma: 'SMAK 5 Penabur',
    ttl: 'Jakarta, 2 Juli 1999'
  },
  '235': {
    cerita: [
      'Gue orgnya receh gampang ketawa dan senyum sangking seringnya orang suka aneh ngeliatinnya, termasuk ke dalam salah satu dsri sekian orang yang terdampar ke SI bahkan ke Fasilkom. Nggak ada basic-basic fasilkomnya sama sekali. Claustrophobia (nggak suka keramaian dan tempat yg sempit). Suka tidur. Tidur for lyfe!! Satu lagi...deadliner parahh. Hobi tidur dan baca fanfic. Udah itu aja udah banyak kayanya ;)'
    ],
    email: 'tifanidm11@gmail.com',
    motto: 'Think big thoughts but relish small pleasures',
    nama: 'Tifani Dianisya Manalu',
    nick: 'Tifani',
    phone: '082398344505',
    sma: 'SMAN 1 Sidikalang',
    ttl: 'Sidikalang, 1 November 1998'
  },
  '236': {
    cerita: [
      'Haii nama gw Vadimos Christo Bhirawa, biasa dipanggil Vadim. Gw Ilkom \'17, dulunya di SMA Pangudi Luhur yang homogen. Hobi gw sih beragam, tapi saat ini gw lebih suka nonton film, baca novel, sama dengerin lagu dibanding main game sama gambar". Harapan gw buat Tarung sih biar solid aja, jangan sampe gara" tugas juga kita jadi pecah sama selek"an, soalnya gw ada pengalaman gitu. Oiya, gw ada fun fact : gw gak suka pergelangan tangan gw sepi, selalu jam sama gelang, ini gara" jam gw rusak, akhirnya gw pake pita uiaw biar gak sepi banget wkwkwkk'
    ],
    email: 'vadim.hantono@yahoo.co.id',
    motto: "Jangan menyiakan kesempatan. (Don't waste any chances)",
    nama: 'Vadimos Christo Bhirawa',
    nick: 'Vadim',
    phone: '',
    sma: 'SMA Pangudi Luhur',
    ttl: 'Jakarta, 5 Desember 1999'
  },
  '301': {
    cerita: [
      'Arti nama Afrah adalah bahagia jadi "most of the time" lagi seneng. Aku suka banyak hal diantara lain: nonton TV, mendengerkan musik, bangun siang, mandi air panas, bau makanan yang baru diamasak. Tapi hal yang paling aku suka adalah membaca buku. Buku fantasy dan sci-fi adalah genre favorite aku. Cita-cita aku adalah berkerja di NASA dan juga mempunyai perpustakaan pribadi yang sangat besar.'
    ],
    email: 'afrah@hardian.org',
    motto: 'I try not to think. It interferes with being nuts',
    nama: 'Adzkia Aisyah Afrah Hardian',
    nick: 'Afrah',
    phone: '08119695636',
    sma: 'SMAS Pilar Indonesia',
    ttl: 'Jakarta, 24 Mei 1999'
  },
  '302': {
    cerita: [
      'Nama saya Ahmad Fauzan Amirul Isnain, biasa dipanggil Fauzan. Kalau kebanyakan yang panggilannya Fauzan, panggilan saya berubah jadi Amir. Hobi saya sejalan dengan program pemerintah untuk meningkatkan minat baca, padahal cuma baca novel fantasi atau komik. Saya masuk Fasilkom karena Fasilkom ada pintunya, kalau tidak ada, saya tidak bisa masuk.'
    ],
    email: 'ahmad.fauzan4580@gmail.com',
    motto: 'Hidup Bermanfaat',
    nama: 'Ahmad Fauzan Amirul Isnain',
    nick: 'Fauzan',
    phone: '088211897708',
    sma: 'SMAN 2 Bogor',
    ttl: 'Tasikmalaya, 27 Februari 2000'
  },
  '303': {
    cerita: [
      'Halo, nama gua Alya. kadang dipanggil Alis kalo alya nya banyak. gua sering ketawa gabisa berhenti, ntah kenapa. gua gembul tapi seneng olahraga, terutama bultang sm renang. gua jg seneng maen piano, lebih ke klasik drpd pop. gua seneng nulis cerita, dalam bentuk novel, komik, scriptwriting juga. currently gua termasuk golongan org termager dan terlemot satu pacil wkakakaka. semoga gua bisa bertahan di fasilkom sampe lulus yaa aamiin.'
    ],
    email: 'safiraalya@gmail.com',
    motto: 'Do the best, let Allah do the rest.',
    nama: 'Alya Isti Safira',
    nick: 'Alis',
    phone: '08161801992',
    sma: 'SMAN 78 Jakarta',
    ttl: 'Jakarta, 23 Juni 2000'
  },
  '304': {
    cerita: [
      'Namaku Alya Zahra, biasa dipanggil Alza karena ada dua Alya di Tarung. Alasan masuk Fasilkom adalah karena mau mencoba belajar programming di kuliah. Aku ini orangnya gak bisa diem kalo berada di sekitar kucing, pasti mau ngelus-ngelus. Aku juga suka banget beli waffle choco-cheese di kantin. Semangat Tarung untuk ke depannya! (^v^)'
    ],
    email: 'alyazahra99@yahoo.co.id',
    motto: "I've come this far. I need to keep going.",
    nama: 'Alya Zahra',
    nick: 'Alza',
    phone: '87863224506',
    sma: 'SMAN 5 Bekasi',
    ttl: 'Pekanbaru, 22 Juli 1999'
  },
  '305': {
    cerita: [
      'Cerita tentang perjuangan ddp by Andre Satria NV05',
      'Dari sejak masuk FASILKOM, saya mulai kesulitan di  mata pelajaran DDP.  Mendengar cerita perjuangan dan mendapatkan motivasi dari teman teman dan para kating, saya pun akhirnya mulai belajar  DDP dengan giat.  Untunglah sampai saat ini  saya sudah mengerti bagaimana cara untuk print ("Hello World").',
      'Terima kasih ya Teman teman.'
    ],
    email: 'andresatria215@gmail.com',
    motto: 'Karena cobaan itu sudah biasa',
    nama: 'Andre Satria',
    nick: 'Andre',
    phone: '087877829210',
    sma: 'SMA Global Mandiri Cibubur',
    ttl: 'Jakarta, 21 Mei 1999'
  },
  '306': {
    cerita: [
      'Nama saya Athallah Annafis, biasa dipanggil Nafis. Alasan untuk masuk fasilkom karena ingin bisa membuat program dan game. Hobi banget main game terutama devil may cry, selain itu saya juga menyukai olahraga bela diri dan renang. Saya orangnya agak introvert, namun tidak sukar untuk berkenalan dengan orang baru. Kalo ada kucing pengennya ngelus elus terus, pengen bawa pulang terutama yang di fasilkom. Semangat tarung !'
    ],
    email: 'athallahannafis@gmail.com',
    motto: "difficult doesn't mean impossible",
    nama: 'Athallah Annafis',
    nick: 'Nafis',
    phone: '081340324415',
    sma: 'SMA Kharisma Bangsa',
    ttl: 'Jakarta, 18 Oktober 1999'
  },
  '307': {
    cerita: [
      "Gue anak daerah. Jadi... Aku sebenernya susah ngomong lu-gue waktu awal-awal. Mimpi awal di fasilkom bisa dibilang sangatlah mainstream. 'ingin bisa bekerja di google'. Tapi semakin kesininya mencoba semakin spesifik. Ingin menjadi seorang konsultan business IT yang sukses. (Amin)",
      'Hobi aku adalah membaca novel terutama novel fantasi. Selain itu juga suka nonton film.'
    ],
    email: 'clauddian9@gmail.com',
    motto: 'I never dreamed about success, I worked for it',
    nama: 'Clouddian Fazalmuttaqin',
    nick: 'Cloud',
    phone: '087711776565',
    sma: 'SMAN 1 Pekalongan',
    ttl: 'Pekalongan, 10 Juni 1999'
  },
  '308': {
    cerita: [
      'Hai semua panggil gue Darin yaa! Gue orangnya suka bercandain apapun dan suka asal ngomong yg lucu2an bercanda gt tapi sumpah itu bercanda guys jadi kalo sama gue jangan ada yg bawa perasaan ya HAHA (yg sekelas mpkt b sm gue contohnya kayak gue ke bricen HAHA), terus gue orgnya emg suka mikir jangka panjang yg suka bikin gue panikkan kadang2 jd kalo gue tbtb panik di deket kalian maafkan ya!! Gue juga orgnya kagetan jadi kalian jangan suka ngagetin gue ya nnt gue teriak heheheh udah sih itu aja. Buat temen-temen semua semoga kita selalu dipermudah yaa kedepannya, kalau ada masalah apapun selalu mikir positif aja OK!! yakin itu semua emg dikasih Tuhan krn ada pelajaran yg bisa diambil, semangat guys kuliahnya bismillah kita bisa lulus bareng2 <3 kalau ada yg danus-an piscok atau risol apalah yg isinya pedes bisa bgt tawarin ke gue HEHEHEHEH'
    ],
    email: 'darinamandaz@gmail.com',
    motto: "You'll never know until you try",
    nama: 'Darin Amanda Zakiya',
    nick: 'Darin',
    phone: '087781958525',
    sma: 'SMAN 47 Jakarta',
    ttl: 'Ponorogo, 2 Juli 1999'
  },
  '309': {
    cerita: [
      "Halo, gua Fadhlan, and I'm just a sheep in wolf's clothing, so dont be afraid"
    ],
    email: 'fadhlan.permana@gmail.com',
    motto: 'You Only Live Once',
    nama: 'Fadhlan Hafizh Permana',
    nick: 'Fadhlan',
    phone: '085692115078',
    sma: 'SMAN 5 Bekasi',
    ttl: 'Jakarta, 11 Agustus 1997'
  },
  '310': {
    cerita: [
      'Nama gue falya, kadang dipanggil falay. Gue gak terima tapi gue tetep nengok but its okey. Gue kelahiran tahun 2000 jadi masih muda yey. Gue bersyukur banget bisa masuk fasilkom soalnya emang ini pilihan pertama dan terakhir gue. Gak ada niatan untuk pindah sama sekali:) Gue gak jago ngoding tapi berusaha untuk bisa yey'
    ],
    email: 'falyasekardina@gmail.com',
    motto: 'Semua akan indah pada waktunya',
    nama: 'Falya Aqiela Sekardina',
    nick: 'Falya',
    phone: '081218693526',
    sma: 'SMAN 70 Jakarta',
    ttl: 'Makassar, 26 Maret 2000'
  },
  '311': {
    cerita: [
      'Nama Firriyal tapi dipanggil Feriyal. Kelihatan pendiem pas pertama kali temenan, tapi kalo udah kenal banget bakal cerewet. Hobinya main HP, baca novel, sama nonton film. Alasan masuk Fasilkom karena suka main game.'
    ],
    email: 'feriyalbinyahya@gmail.com',
    motto: 'Hasil tidak akan mengkhianati usaha',
    nama: 'Firriyal Bin Yahya',
    nick: 'Feriyal',
    phone: '089661156025',
    sma: 'SMAN 14 Jakarta',
    ttl: 'Surabaya, 17 Juli 2000'
  },
  '312': {
    cerita: [
      '  Nama gw Gusti Ngurah Yama Adi Putra. Anak Pacil pada manggil Uci. Kenapa gw masuk fasilkom? Berawal dari pecinta game, ya biasa lah anak SD SMP. Selanjutnya pas SMA karena suka game tersebut, gw masuk ke eskuk IT. Nah lama kelamaan di IT ujung ujungnya ngebuat kodingan buat robot. Mulai dari situ kah gw kenal koding koding. Yah singkat cerita, gw mau memperdalam ilmu perkodingan gw. Jadilah gw masuk fasilkom UI dan ketemu kalian semua....'
    ],
    email: 'sef.gustingurah.yama@gmail.com',
    motto: '1000 teman akan terasa kurang, tapi 1 musuh terasa amat banyak',
    nama: 'Gusti Ngurah Yama Adi Putra',
    nick: 'Gusti',
    phone: '083838718942',
    sma: 'SMAN 63 Jakarta',
    ttl: 'Jakarta, 23 Oktober 1999'
  },
  '313': {
    cerita: [
      'Halo semua nama gue adi. Orang-orang sering ngira dari bali padahal dari lahir di Depok. Suka banget main musik tapi galolos kontingen:(. Pengen masuk fasilkom karena suka mtk dan mau belajar bisnis. Sempet disebelin banyak orang gara2 milih prodi mepet pas pendaftaran snm. Harapannya semoga bisa lulus cumlaude dan bikin bangga ortu. Doain ya temen2 :)'
    ],
    email: 'imadeadisuryanugraha@gmail.com',
    motto: 'Hasil tidak akan mengkhianati usaha',
    nama: 'I Made Adisurya Nugraha',
    nick: 'Adi',
    phone: '085782004546',
    sma: 'SMAN 3 Depok',
    ttl: 'Depok, 10 Maret 1999'
  },
  '314': {
    cerita: [
      'Jadi, gue udah ngincer masuk fasilkom dari kelas 11. Long story short, gue nekat daftar prodinya ilmu komputer di jalur undangan sama ppkb walaupun ada temen yang milih itu dengan nilai lebih tinggi. Pikirnya bakal dapet ppkb kan kalau undangan gaketerima karena setau gua di ppkb gaada saingan. di hari pengumuman snm jelas gadapet, gamasalah, lanjut ppkb, lah gadapet. taunya ada temen yg ngga bilang kalau dia milihnya sama kayak gua dan nilainya lebih tinggi jadinya dia dapet. gua kaga. terus taunya dia udah dapet undangan pula, dan pada akhirnya undangan sama ppkb pun ditolak sama dia. kampret. yaudah akhirnya gua masuk sbm dah, tamat.'
    ],
    email: 'ihsanauliaa@gmail.com',
    motto: 'Be grateful',
    nama: 'Ihsan Muhammad Aulia',
    nick: 'Ihsan',
    phone: '08977073540',
    sma: 'SMAN 48 Jakarta',
    ttl: 'Bandung, 27 November 1999'
  },
  '315': {
    cerita: [
      'Orang biasa aja, sering baca novel kalo lagi gabut, biasanya suka ngereceh sih, perjuangan buat dapet fasilkom? Dulu tuh lewat paralel, jadi yang kuat doa sama ama solehanya aja wkwkwk. "gue punya temen namanya falya, gue kira falya setia sama gue, ternyata semenjak mengenal cowo bernama naufaldi athalla, semuanya berubah, dia lebih milih bucin daripada gue, tapi ya... gue terima deh.'
    ],
    email: 'jasminens3105@gmail.com',
    motto: 'dont lose your fire',
    nama: 'Jasmine Nur Safiera',
    nick: 'Jasmine / Mine',
    phone: '081318405772',
    sma: 'sman 68 jakarta',
    ttl: 'Jakarta, 31 Mei 1999'
  },
  '316': {
    cerita: [
      'Nama gw Julia. Banyak yg manggil gw Juli. Iya, gw lahir di bulan Juli kok. Alasan gw masuk pacil adalah ...  rahasia :p. Banyak yang bilang gw orangnya jutek, padahal aslinya enggak loh (?). Semoga Tarung makin akrab satu sama lain ya !! (???)'
    ],
    email: 'jscarlet2707@gmail.com',
    motto: 'If you work for it, you can do it',
    nama: 'Julia Ningrum',
    nick: 'Juli',
    phone: '087885926091',
    sma: 'SMAN 54 Jakarta',
    ttl: 'Jakarta, 27 Juli 2000'
  },
  '317': {
    cerita: [
      'Gue Khameela Rahmah. Orang yang emang keliatannya pendiam dan jutek tapi aslinya kebalikannya HEHE. Suka kucing. Suka dengerin musik. Suka film. Suka desain dan pengen memperdalami.'
    ],
    email: 'rkhameela@gmail.com',
    motto: 'Di mana ada kemauan, di situ ada jalan',
    nama: 'Khameela Rahmah',
    nick: 'Mela',
    phone: '08154638049',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 26 Oktober 1999'
  },
  '318': {
    cerita: [
      'Suatu saat ada orang idealistis yang suka dengan arkeologi. Ia suka nonton film Indiana Jones dan membayangkan tentang petualanganya ke tempat tempat eksotis dan misterius. Akan tetapi, sebelah ia masuk ke jurusan arkeologi, yang ia temukan adalah pekerjaan yang lebih sering adalah menggali kuburan orang yang mati ratusan tahun yang lalu dan membaca inskripsi di atas nisanya. Akhirnya ia memilih untuk ngoding saja. '
    ],
    email: 'leonardo1098@gmail.com',
    motto: "You miss 100% of the chances you didn't take",
    nama: 'Leonardo Julius',
    nick: 'Leon',
    phone: '081585500915',
    sma: 'SMA Mahatma',
    ttl: 'Jakarta, 10 July 1998'
  },
  '319': {
    cerita: [
      'Nama gw michael. Gw masuk fasilkom karena itu adalah salah satu fakultas dengan prospek kerja yang bagus belakangan ini. Hobi gw baca dan tidur. Gw saat ini mengalami kesulitan di pelajaran mpktb. Semoga gw bisa lulus dengan nilai yang baik nanti.'
    ],
    email: 'manullang.c@gmail.com',
    motto: 'Jangan menjadi orang yang biasa saja',
    nama: 'Michael Christopher Manullang',
    nick: 'Michael',
    phone: '082216243339',
    sma: 'SMAS Kanisius Jakarta',
    ttl: 'Bogor, 2 January 1999'
  },
  '320': {
    cerita: [
      'Halo nama gua farihin, jurusan ilkom. gua masuk fasilkom karena beberapa alasan, salah satunya yaitu karena gua suka dengan mtk dan persoalan-persoalan yang memutar logika (walau ternyata sekarang belum bisa apa-apa). Hobi gua yaitu berghibah lalu beristighfar. Gua juga suka adzan di discort  saat bermain csgo. Gua bangga banget menjadi bagian dari tarung. Harapan gua buat tarung, semoga tarung bisa menjadi lebih dari sekadar teman seperjuangan buat gua. Menjadi angkatan yang jauh lebih gokil, kompak dan solid dari angkatan-angkatan sebelumnya. Dan pastinya, semoga ga ada lagi sekat-sekat antar anggota, saling mendukung, bertarung bersama :)'
    ],
    email: 'farihmuhdiar@gmail.com',
    motto: 'Menjadi magnet bukan besi',
    nama: 'Muhammad Anwar Farihin',
    nick: 'farihin',
    phone: '087881809071',
    sma: 'MA Husnul Khotimah',
    ttl: 'Jakarta,10 Februari 2000'
  },
  '321': {
    cerita: [
      'Halo, namaku Fairuzi karena Faiz sudah terlalu mainstream. Aku masuk Fasilkom karena dekat rumah sehingga bisa PP. Aku berangkat menggunakan kereta disambung dengan angkot atau gojek jika tidak rush hour.'
    ],
    email: 'mfairuzit@gmail.com',
    motto: 'Jadilah lebih baik dari kemarin',
    nama: 'Muhammad Fairuzi Teguh',
    nick: 'Fairuzi',
    phone: '085772184822',
    sma: 'SMAN 14 Jakarta',
    ttl: 'Jakarta, 10 Agustus 1999'
  },
  '322': {
    cerita: [
      'Nama saya Muhammad Haikal Baihaqi, biasanya dipanggil Haikal. Saya berasal dari BSD. Hobi saya membaca, bermain game, mencoba hal baru, dan belajar. Saya masuk Fasilkom karena tidak ada fakultas lagi yang menarik menurut saya. Awalnya pengen masuk Ilmu Komputer, tapi jadi Sistem Informasi karena suatu alasan.'
    ],
    email: 'hazama254@gmail.com',
    motto: 'Melakukan yang terbaik sesuai kemampuan',
    nama: 'Muhammad Haikal Baihaqi',
    nick: 'Haikal',
    phone: '088808768618',
    sma: 'SMA Islam Al-Azhar BSD',
    ttl: 'Jakarta, 3 April 1999'
  },
  '323': {
    cerita: [
      'Halo gua Muhammad Khatami biasa di panggil ami. Hobi gua renang tpi ga jago hehehe. Gua masuk fasilkom pure nyasar cuy, awalny pengen ftmd eeh dapetnya disini. Moga-moga gua bisa betah yaa disini.'
    ],
    email: 'khatami2121@gmail.com',
    motto: "Don't crack under pressure",
    nama: 'Muhammad Khatami',
    nick: 'Amik',
    phone: '08117102501',
    sma: 'SMAN 17 PALEMBANG',
    ttl: 'Palembang, 25 Januari 2000'
  },
  '325': {
    cerita: [
      'Halo! Aku Naufal Pratama Tanansyah, bisa dipanggil Naufal atau Tan. Dulu aku mau masuk Fasilkom karena aku ingin mengembangkan sesuatu di bidang ini. Sekarang, setelah aku masuk Fasilkom, aku malah jadi receh. Yang aku lakukan kalo aku lagi bosen biasanya menggambar, nonton YouTube, atau main game payah yang referensinya aku dapet dari iklan aplikasi HP. Salam kenal kawan-kawan!!!'
    ],
    email: 'pratama.naufal@gmail.com',
    motto: 'Sebaik-baiknya manusia, ialah mereka yang berguna ',
    nama: 'Naufal Pratama Tanansyah',
    nick: 'Tan',
    phone: '081287176206',
    sma: 'SMAN 8 Jakarta',
    ttl: 'Jakarta, 21 Oktober 1999'
  },
  '326': {
    cerita: [
      'nama gua naufal tapi orang orang manggil gua jin. kadang gua lebih merasa terpanggil kalo dipanggil jin daripada naufal. hobi gua olahraga. gua gak ngekos, tapi suka ngiri sama yg ngekos kayaknya enak aja gitu bebas. gua milih fasilkom karena emang gua suka sama gini ginian.'
    ],
    email: 'naufalrifqi1602@gmail.com',
    motto: 'Hadapi masalah, jangan menghindar',
    nama: 'Naufaldi Athallah Rifqi',
    nick: 'Naufal',
    phone: '087887662027',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 16 Februari 1999'
  },
  '327': {
    cerita: [
      'Haloo nama gua Nindy. Jadi ada cerita tentang perjuangan ikut sbm simak dan tes tes lainnya. Sehari hari kerjaannya belajar makan tidur sholat meratapi nasib doang dann alhamdulillah akhirnya worth it bgt beruntung bgt bisa dpt 2 ptn dann satu ptk. Gak mau sombong cuma pamer perjuangan aja hehe. Jujur aja agak nyesel kenapa ga milih ptk HAHAHA tapi ya tetep jalanin aja deh semoga langgeng di fasilkom doain ya teman-teman'
    ],
    email: 'nindyasavr@gmail.com',
    motto: 'work hard, pray hard and let god do the rest',
    nama: 'Nindya Savirahandayani',
    nick: 'Nindya',
    phone: '082113181004',
    sma: 'SMAN 2 Depok',
    ttl: 'Surabaya, 22 Mei 1999'
  },
  '328': {
    cerita: ['Nama gua Raendy, gua punya hobby olahraga sama nonton film. Pecinta DC comic juga, khususnya Batman. Kalo ditanya kenapa gua milih SI, karena waktu daftar SBMPTN gua gak milih Ilkom._. ','Punya cita cita ngebuat website dengan konten terkait pendidikan, cita-cita ini muncul ketika gua pake zeni*us buat persiapan SBMPTN','Seneng dan juga bangga rasanya bisa jadi bagian dari Fasilkom UI, semoga disini gua bisa dapat banyak ilmu yang bisa bermanfaat untuk orang-orang di sekitar gua.'],
    email: 'raendy.elvicar@gmail.com',
    motto: 'Kesuksesan adalh milik orang yang bekerja keras',
    nama: 'Raendy Andhika El-Vicar',
    nick: 'Raendy',
    phone: '083147699870',
    sma: 'SMAN 2 Depok',
    ttl: 'Depok, 24 Juni 1998'
  },
  '329': {
    cerita: [
      'Bagi yang baca ini gua cuma mau kasih tau aja ya kalo ngomong sama gua harus sabar banget karena gua rada lemot dan terlalu receh. Terkadang, orang ngelawak gua gak ketawa tapi giliran ada hal2 kecil gua malah ngakak kenceng. Gua juga suka main game terutama game online tapi gua selalu main sendiri (ya allah menyedihkan banget ya gua wkwk). Jadi kalo lu pada main overwatch (PS) atau vainglory temenin gua main dong hehehe.'
    ],
    email: 'rafiftaris1@gmail.com',
    motto: 'Jalani hidup seperti air yang mengalir',
    nama: 'Rafif Taris',
    nick: 'Rafif',
    phone: '08121950671',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 2 Juni 1999'
  },
  '330': {
    cerita: [
      'Gua ingin mengklarifikasikan ajaa bahwa gua gak tau SBM tertinggi itu siapa. Itu orang cuman nuduh2 ajaa. Terus gua gamer berat terutama untuk game console (RPG). Dimohon dengan sangat BAYAR KAS ANGKATAN!!!! (Kalo kepo kenapa dipanggil Dean, jangan kepo'
    ],
    email: 'raihansyah.dean@gmail.com',
    motto: 'Expect Nothing Apreciate Everything',
    nama: 'Raihansyah Attallah Andrian',
    nick: 'Dean',
    phone: '08170020090',
    sma: 'SMA Labschool Kebayoran',
    ttl: 'Jakarta, 9 April 2000'
  },
  '331': {
    cerita: [
      'Nama gue Razaqa Dhafin Haffiyan, biasa dipanggil Dhafin, npm: 1706039484. Di Fasilkom, gue adalah orang yang Super Duper biasa. Gue adalah tipe orang yang kalo belajar/kegiatan di rumah sangat mager tapi kalo belajar di kampus/sekolah sih....ya mager juga (walau gak separah pas di rumah). Gue tipe org yang sangat kerja keras di menit2 terakhir, tapi pas jauh hari sblm&pasca (entah uts,uas,tugas) gue tipe yg bodoamat. Gue suka melakukan & mencoba banyak hal, entah itu ngoding, motoran, gambar, cycling, main gitar, nyanyi, futsal, politik, fotografi, belajar astronomi, pokoknya hampir semua aktivitas gue tekunin (kecuali dua hal yang paling gue gak minat, drama dan nari). Hasilnya ya karena harus bagi waktu, skill gue dalam hobi2 itu jadi gak advance, tapi gue seneng sih, setidaknya hidup gua gak pernah bosen karena gue punya banyak aktivitas yang bisa dilakuin.'
    ],
    email: 'dhafins99@hotmail.com',
    motto: 'Work hard, play hard',
    nama: 'Razaqa Dhafin Haffiyan',
    nick: 'Dhafin',
    phone: '087782224850',
    sma: 'SMAN 28 Jakarta',
    ttl: 'Jakarta, 5 April 1999'
  },
  '332': {
    cerita: [
      "hai gue Rhendy, jadi nih ya gue masuk fasilkom gatau karena alasan apa, gue cuma nyarinyari di internet dan waktu gue liat jurusan Ilmu Komputer tuh gue langsung berpikir 'wah'. kenapa wah karena gue demen ngegame, demen komputer dan gue liat prospek kerjanya mantap. Yaudah akhirnya gue pun masuk fasilkom dan bisa dibilang gue cukup kesulitan ngikutin matkulnya. tapi gue yakin kedepannya gue bakal bisa ngikutin sih hahah"
    ],
    email: 'rhendyrvld@gmail.com',
    motto: 'Hasil tidak pernah mengkhianati usaha',
    nama: 'Rhendy Rivaldo',
    nick: 'Rhendy',
    phone: '087877494260',
    sma: 'SMAN 3 Jakarta',
    ttl: 'Temanggung, 30 Maret 1999'
  },
  '333': {
    cerita: [
      'Gue adalah seorang mantan pemain game yang kecanduan parah sama Dota. Dulu SMA gue hancur karena ngeDota terus dan pada suatu titik gue completely berhenti main Dota buat fokus SBMPTN. Akhirnya gue keterima di UI. Guess what? Godaan buat ngeDota disini ternyata lebih ganas daripada pas SMA...'
    ],
    email: 'sandika.prangga@gmail.com',
    motto: 'Ada pelajaran di setiap kegagalan dan keberhasilan',
    nama: 'Sandika Prangga Putra',
    nick: 'Sand',
    phone: '087798877770',
    sma: 'SMAN 1 Selong',
    ttl: 'Masbagik, 16 April 1999'
  },
  '334': {
    cerita: [
      '"Orangnya sans banget, suka banget bola terutama Real Madrid, suka main futsal, gampang banget bosen, sering banget begadang gak jelas"'
    ],
    email: 'sendhynugroho@gmail.com',
    motto: 'Let it Flow',
    nama: 'Sendhy Nugroho',
    nick: 'Sendhy',
    phone: '082261567446',
    sma: 'SMAN 31 Jakarta',
    ttl: 'Jakarta,  29 Januari 1999'
  },
  '335': {
    cerita: [
      'halo nama gua thalia talula kesuma putri biasanya dipanggil lula. bebas sih mau panggil apa aja asal jangan talvia ya:( jujur aja nih gua orangnya pemalu kalo sm orang baru hehe. tapi kalo udah kenal bakal bawel banget. sebenernya gatau kenapa mau masuk fasilkom ya tapi bismillah aja lah ya hehe.'
    ],
    email: 'thaliatalulakp@yahoo.com',
    motto: 'Jadilah perubahan yang diinginkan',
    nama: 'Thalia Talula Kesuma Putri',
    nick: 'Lula',
    phone: '085717764359',
    sma: 'SMAN 2 Depok',
    ttl: 'Jakarta, 11 April 1999'
  },
  '336': {
    cerita: [
      'Nama gw Vincentius Adi Kurnianto. Dulu dipanggilnya Adi, tapi karena cukup pasaran jd sekarang dipanggilnya Vincent. Masuk Fasilkom karena (katanya) gampang dapet kerja plus makanannya murah dan wifi kencang ( 2 alasan terakhir baru dirasakan pas masuk sini :) ). Dulu punya cita2 jadi pilot, tapi gatau kenapa jd ganti. Commuter Line is life. Salah satu fans MU di fasilkom. Harapan gw semoga gw survive di fasilkom tanpa DO.'
    ],
    email: 'adi.vanbasten99@gmail.com',
    motto: "Don't Give Up",
    nama: 'Vincentius Adi Kurnianto',
    nick: 'Vincent',
    phone: '087870260206',
    sma: 'SMAN 1 Bogor',
    ttl: 'Yogyakarta, 31 Januari 1999'
  },
  '337': {
    cerita: [
      'Halo jadi gua biasa dipanggil ardho. Gua orangnya biasa aja. Semenjak masuk fasilkom banyak banget hal - hal baru yang gua dapet. Terus kantin fasilkom juga enak - enak, harganya gak mahal - mahal.'
    ],
    email: 'Rdo-@email.com',
    motto: 'Berguna bagi orang lain',
    nama: 'Yusuf Tri Ardho Mulyawan',
    nick: 'Ardho',
    phone: '081272977770',
    sma: 'SMAN 61 Jakarta',
    ttl: 'Jakarta, 7 Juni 1998'
  },
  '401': {
    cerita: [
      'Halo! Gue Adhiba Mastura, panggilannya Dhiba, jadi jangan panggil Adhiba ya hehe :( sebenernya fasilkom bukan pilihan pertama guesih tapi gue ganyesel masuk sini karena bisa kenal kalian semua hehehe unyu kan'
    ],
    email: 'adhibamastura@gmail.com',
    motto: "Don't count the days, make the days count",
    nama: 'Adhiba Mastura',
    nick: 'Dhiba',
    phone: '08179188244',
    sma: 'Madania Bogor',
    ttl: 'Jakarta, 09 Desember 1998'
  },
  '402': {
    cerita: ['Saya adalah tipe orang happy-go-lucky, tidak memedulikan pendapat dan perasaan orang lain. Di sisi yang lain saya adalah seorang idealis, tidak membiarkan apapun menghalangi saya ketika saya telah menetapkan tujuan. Saya memilih fasilkom karena menurut saya fasilkom akan memberikan manfaat yang signifikan untuk tujuan saya di masa depan.'],
    email: 'aditya.pratama2899@gmail.com',
    motto: 'Pikiran adalah pelopor',
    nama: 'Aditya Pratama',
    nick: 'Adit',
    phone: '082299111480',
    sma: 'SMAN 1 Tangerang',
    ttl: 'Jakarta, 28 April 1999'
  },
  '403': {
    cerita: [
      'Nama Mustofa. Biasanya sih dipanggil Mus. Salah satu anak Fasilkom yang dari daerah. Hobi gue koding sama baca artikel tentang teknologi. Gue tertarik sama AI dan Fisika kuantum. Banyak magernya. Suka begadang. Candu kopi. Bukan wibu. A moslem panentheist. A good listener. Thanks.'
    ],
    email: 'mustosoftware@gmail.com',
    motto: 'Just live, we are living in a simulation',
    nama: 'Ahmad Mustofa Halim',
    nick: 'Mus',
    phone: '082242045483',
    sma: 'SMA N 1 Kebumen',
    ttl: 'Kebumen, 21 Juni 1998'
  },
  '404': {
    cerita: [
      'Gue ailsa. Gue pake kacamata. Gasuka musik rock sama metal. Suka penyanyi yang kalo nyanyi sambil main gitar. Suka banget sama suara cello. Gue susah marah. Gue pelupa dan susah ngapalin jalan. Masih terus berusaha buat gajadi procrastinator lagi'
    ],
    email: 'ailsazayyan7@gmail.com',
    motto: 'be good, be grateful',
    nama: 'Ailsa Zayyan Salsabila D.P.',
    nick: 'Ica',
    phone: '085771348179',
    sma: 'SMAN 1 Bekasi',
    ttl: 'Semarang, 7 Agustus 1999'
  },
  '406': {
    cerita: [
      'Aloysius Kurnia Mahendra; pemalas tingkat akut. Tries to master art and science; ends up mastering none. Masuk pacil cuma pingin jadi indie game developer. Not really into writing this so there you go.'
    ],
    email: 'aloysius1234@yahoo.co.id',
    motto: 'create and improve',
    nama: 'Aloysius Kurnia Mahendra',
    nick: 'Aloy',
    phone: '085212512200',
    sma: 'SMAN2 Kota Tangerang',
    ttl: 'Blitar, 21 Februari 1999'
  },
  '407': {
    cerita: [
      'Nama gua Ardian Ghifari biasanya dipanggil Ardian. Gua biasanya kemana2 bareng Azhar karena kita sekosan, kadang juga bareng Aryo. Gua orangnya kangen rumah dan setiap minggu pulang ke Bekasi.'
    ],
    email: 'ardianghi@gmail.com',
    motto: 'Jadikan sabar dan shalat sebagai pelindung',
    nama: 'Ardian Ghifari',
    nick: 'Ardian',
    phone: '085811916028',
    sma: 'SMAN 5 Bekasi',
    ttl: 'Jakarta, 19 September 1999'
  },
  '408': {
    cerita: [
      'Hai, siapapun yang membaca. Orang yang ada di sebelah kiri ini biasa dipanggil Ama. Jangan tanya kenapa gak dipanggil Bunga. Suka masak, nyanyi, nge-desain dan nge-game. Berhubung dengan fasilitas yang belum memadahi, akhirnya kadang cuma bisa nontonin Cryaotic atau CinnamonToastKen main. Belum ketemu temen buat sharing tentang Rune Factory. Team PP Commuter Line + Gojek/Grab, walau jaraknya cuma 2 stasiun.',
      "Mungkin aneh kenapa di foto itu keliatannya kelewat bahagia mukanya. Iya, bisa dibilang berada di web ini adalah salah satu kebahagiaan yang nyata. Masuk Fasilkom udah jadi target semenjak SMP, alhamdulillah dengan izin dan petunjuk-Nya bisa berada disini bersama Tarung :')",
      'Peringatan, mohon jangan berekspektasi terlalu tinggi sebelum kenal lebih jauh. Karena mungkin realitanya belum se-ambis, belum se-rajin, belum se-pintar dan gak se-wibu yang dibayangkan.'
    ],
    email: 'bungasokia@gmail.com',
    motto: 'Bisa apa kita tanpa doa?',
    nama: 'Bunga Amalia Kurniawati',
    nick: 'Ama',
    phone: '081513729326',
    sma: 'SMA Negeri 1 Depok',
    ttl: 'Depok, 18 Oktober 1999'
  },
  '409': {
    cerita: [
      'Orang yang straight to the point dan detailed. Sangat mengerti prioritas dan bisa serius pada waktu yang tepat. Tetapi juga asik buat diajak ngobrol dan sense of humornya gak kurang. Selalu siap membantu cari solusi yang terpraktis dan terbaik kalo dibutuhkan. Tapi kasar beud anyinq kosa kata isinya utan amazon bukan ragunan lagi'
    ],
    email: 'Chossyhadiw@gmail.com',
    motto: 'selalu berusaha untuk menjadi yang terbaik',
    nama: 'Cahya Hadi Wicaksana',
    nick: 'Chossy',
    phone: '81280976585',
    sma: 'SMA Al Azhar 2 Pejaten',
    ttl: 'Jakarta, 4 Juni 1999'
  },
  '410': {
    cerita: [
      'Hai nama saya darell, saya masuk fasilkom karena saat pemilihan jurusan ptn cukup sulit, dengan mempertimbangkan materi yang saya sukai, saya kuasai, dan berguna untuk kedepannya. Untuk itu sebelum memilih SI yang dipikiran saya hanya teknik. Tetapi berjalannya waktu saya dapat informasi tentang jurusan SI. sebenarnya sebelum saya mengganti jurusan SI saya ingin masuk stan. ngga ada hobi.'
    ],
    email: '1darellhendry@gmail.com',
    motto: 'No Proses, No Hasil',
    nama: 'Darell Hendry',
    nick: 'Darell',
    phone: '85773100876',
    sma: 'SMAN 34 Jakarta',
    ttl: 'Jakarta, 2 September 1999'
  },
  '411': {
    cerita: [
      'Haloo temaann2 perkenalkan nama gue putri, sistem informasi 2017. Awalnya agak takut di fasilkom bisa ngikutin pelajarannya gakya, tapi ternyata fasilkom kekeluargaan nya gede banget. Banyak yang bantu gue kalau lagi kesusahan. Seneng banget bisa jadi bagian dari tarung, karna orang2 hebat ada di tarung, sekian cerita gue terimakasih'
    ],
    email: 'dindaputri99@gmail.com',
    motto: 'Selalu ikhtiar, berdoa, dan tawakkal',
    nama: "Dinda Mutiara Qur'ani Putri",
    nick: 'Putri',
    phone: '082299482339',
    sma: 'SMAN 54 Jakarta',
    ttl: 'Yogyakarta, 15 Desember 1999'
  },
  '412': {
    cerita: [
      'Nama gua Drasseta, biasanya dipanggil Drass. Gua tinggal di Depok jadi pulang pergi. Biasanya keliatan di kantin makan sate atau nongkrong di sekre square. Gua seorang deadliner.'
    ],
    email: 'drassetad@gmail.com',
    motto: 'Hidup seperti sepeda, harus bergerak untuk tetap seimbang',
    nama: 'Drasseta Aliyyu Darmansyah',
    nick: 'Drass',
    phone: '081291565799',
    sma: 'SMAN 3 Depok',
    ttl: 'Jakarta, 1 Juni 1999'
  },
  '413': {
    cerita: [
      'Nama gue Chika, satu-satunya yg berasal dari NTT di angkatan Tarung. ',
      'Gue terkenal karena suara gue yg kek TOA dan cerewet banget.',
      'Mungkin bisa dibilang hyper.',
      'Gue susah untuk diajak diam walaupun hanya 5 menit, kecuali pas berdoa.',
      'Gue benar-benar merasa bodoh masuk ILKOM, benar-benar buta. Tapi gue suka banget sama matematika.',
      'Gue lebih senang mengembangkan hobby seni gue dibanding belajar.',
      'Gue sanggup makan berkali-kali sehari, dengan porsi kuli. ',
      'Gue bego banget bahasa Inggris.'
    ],
    email: 'chikaputri06227@gmail.com',
    motto: 'Semua yang dapat kau bayangkan adalah nyata',
    nama: 'Graciela Chika Putri',
    nick: 'Chika',
    phone: '085298163517',
    sma: 'SMAK Syuradikara Ende',
    ttl: 'Bekasi, 22 Juli 1999'
  },
  '414': {
    cerita: [
      'Gue Hana yang satunya lagi. Gue nggak pake kerudung sama kacamata, jadi jangan salah yak, plis :( Tas gue sama kayak Okta, jangan iseng tuker tas kita ya :( Banyak yang ngira gua kalem, tapi aslinya rusuh wkwkwk. Gue suka banget nonton film. Cita-cita gue bisa produksi ulang Meteor Garden bareng Quentin Tarantino wihi'
    ],
    email: 'hanaadiornovelyne@gmail.com',
    motto: 'Kebahagiaan itu dibentuk, bukan dikejar',
    nama: 'Hana Dior Novelyne Tobing',
    nick: 'Hana',
    phone: '081213111704',
    sma: 'SMAN 1 Bogor',
    ttl: 'Bogor, 29 November 1999'
  },
  '415': {
    cerita: [
      'Haloo..jadi nama gue hana. Karna ada 2 hana di Tarung, cara ngebedainnya, gue make kacamata sama kerudungan. Sejauh ini, fi kebanyakan org ke gue, muka gue muka "template". Terus gue suka make barang bewarna biru.'
    ],
    email: 'hana.raissya@yahoo.com',
    motto: 'keep on track',
    nama: 'Hana Raissya',
    nick: 'Hana',
    phone: '087895808083',
    sma: 'SMAN 10 Padang',
    ttl: 'Padang, 27 Mei 1999'
  },
  '416': {
    cerita: [
      'Gua Ihwan, Akhwatnya belom ada, dari Ilkom 17. Alasan gua masuk sini karena gua mau lanjutin pendidikan ke salah satu Univ terbaik Indonesia yang ga jauh-jauh amat dari rumah, soalnya dulu SMA gua jauh dari rumah. Alasan gua masuk Fasilkom karena hobi gua cuma nikmatin hasil kerja para programmer doang, bukan jadi programmer, karenanya gua mau belajar. Tapi gua cukup terkejut dengan susahnya gua memahami materi Ilkom wkwkwk. Gua cenderung Introvert, demam panggung, agak canggung kalo mulai percakapan terutama ke orang yang belom akrab, maapkeun yak hahaha'
    ],
    email: 'ihwan1999@gmail.com',
    motto: 'Your words, your sword',
    nama: 'Ihwan Edi Saputro',
    nick: 'Ihwan',
    phone: '081230201516',
    sma: 'SMA A. Wahid Hasyim Tebuireng Jombang',
    ttl: 'Bandung, 18 Juli 1999'
  },
  '417': {
    cerita: [
      'Nama gua Irwanto. Gua bisa dipanggil Ir, Wan atau To. Gua pernah dibilang berasal dari Medan tapi bernama Jawa. Alasan gua masuk fasilkom adalah karena gua udah pernah belajar progamming dan pengen ngelanjutin di kuliah. Gua punya hobi membaca dan nonton film. :D'
    ],
    email: 'irwanto_kong@yahoo.co.id',
    motto: 'Semua akan berlalu',
    nama: 'Irwanto',
    nick: 'Irwanto',
    phone: '081263147200',
    sma: 'SMA Sutomo 1 Medan',
    ttl: 'Medan, 19 Februari 1999'
  },
  '418': {
    cerita: [
      'Halo, gw kevin luvian. Hobi gw main game, terutama genre strategy dan adventure. Gw suka makan sate padang dan rendang, untuk setiap minggu gw pasti makan indomie minimal sekali. Gw agak introvert, jadi gk terlalu suka keadaan ramai, tapi gk suka kalau terlalu sepi juga. Alasan masuk fasilkom karna gw suka teknologi, tapi yg utama karena prospek untuk tenaga kerja IT besar.',
      'Sekian, terimakasih.'
    ],
    email: 'kevinlh90@gmail.com',
    motto: 'Selama ada keyakinan, semua akan menjadi mungkin',
    nama: 'Kevin Luvian Herdianto',
    nick: 'Kevin',
    phone: '081219052255',
    sma: 'SMAN 90 Jakarta',
    ttl: 'Jakarta, 11 April 1999'
  },
  '419': {
    cerita: [
      'A randomly unpredictable and unstable girl. Berorientasi pada mood. Suka main gem, cocacola, kucing, dan kebab. Tidak suka dengan ketidakjelasan, tapi dirinya sendiri tidak jelas. '
    ],
    email: 'lulu.ilmaknun.q@gmail.com',
    motto: 'Be free, Be new, Be different',
    nama: 'Lulu Ilmaknun Qurotaini',
    nick: 'Lulu',
    phone: '085882005826',
    sma: 'SMAN 5 Bogor',
    ttl: 'Jambi, 26 Agustus 1999'
  },
  '420': {
    cerita: [
      'M Fijar Lazuardy Ramadlan El Farabi, aslinya dipanggil fijar, dipanggil wibu padahal bukan gara gara lolos IK lewat jalur tulis. Suka dota walo gk jago jago amat, suka futsal. Pengen masuk fasilkom dari SMP',
    ],
    email: 'fijarlaz@gmail.com',
    motto: 'Ketidakteraturan adalah keteraturan yang tidak teratur',
    nama: 'M. Fijar Lazuardy R. El Farabi',
    nick: 'Fijar',
    phone: '085692076873',
    sma: 'SMA Pesantren Al Bayan',
    ttl: 'Jakarta, 21 September 1999'
  },
  '421': {
    cerita: [
      "Namaku Meiska Kurniawati biasa di panggil 'M E M E S' ",
      "Tapi kebanyakan orang yang petama ketemu itu, ngabaca namaku 'mims'. Kan agak kesel ya, udah kayak shitpostingan aja. Kalo pertama kenal sama orang itu, memang pemalu dan gak banyak omong, tapi kalo udah kenal dekat jadinya malu maluin. Semoga bisa lebih open ke temen2 baru. Banyak yang bilang aku mirip chika. Padahal aku lebih cantik wkwkwkw(becanda chik). Semoga aku bisa survive di fasilkom. Semoga banyak temen di fasilkom. Semoga bisa lebih aktiv dan berkontribusi banyak buat fasilkom."
    ],
    email: 'meiskakurniawati99@gmail.com',
    motto: 'Do your best,  Results Will Not Betray efforts',
    nama: 'Meiska Kurniawati',
    nick: 'Memes',
    phone: '085805478066',
    sma: 'SMAN 3 Bukittinggi',
    ttl: 'Bukittinggi, 05 Mei 1999'
  },
  '422': {
    cerita: [
      'Halooo... ',
      'Gue Faisal yg kesekian di Fasilkom, ',
      'Gue masuk Fasilkom karena gue ga suka biologi dan punya cita-cita jadi seorang software engineer.  ',
      "I'm a newbie coder and soon to be the next software engineer.  ",
      "Silicon Valley... I'm coming... ",
      "I'll be there soon.. ",
      '(Kelarin TP dulu woyy...)'
    ],
    email: 'mohfaisal7@gmail.com',
    motto: "Don't ever give up",
    nama: 'Mohammad Faisal',
    nick: 'Faisal',
    phone: '08989920566',
    sma: 'SMAN 1 Arjawinangun',
    ttl: 'Cirebon, 25 Mei 1997'
  },
  '423': {
    cerita: [
      'Saya Ardan. Kuliah di jurusan Ilmu Komputer UI 2017. Hobi tiduran sambil main HP. Kalau lagi malas ya malas, kalau lagi rajin ya rajin. Suka dengar lagu. Kalau ketemu wi-fi suka streaming Youtube. Ini sudah satu paragraf kan?'
    ],
    email: 'ardanmmt@gmail.com',
    motto: 'Jangan lupa untuk menikmati hari ini.',
    nama: 'Muhamad Achir Suci Ramadhan',
    nick: 'Ardan',
    phone: '081342903630',
    sma: 'SMAN 4 Kendari',
    ttl: 'Kendari, 31 Desember 1999'
  },
  '424': {
    cerita: [
      'Halo nama gua Muhammad Afiful Amin. Gua nggak tau mau nulis apaan. Hobi nonton film, khususnya series. Karena movie durasinya sangat sebentar, dan saya tidak suka itu. Oke sekian, wasalam.'
    ],
    email: 'mafifulamin@gmail.com',
    motto: 'Valar Morghulis',
    nama: 'Muhammad Afiful Amin',
    nick: 'Afif',
    phone: '082284557455',
    sma: 'SMAN 1 Padang Panjang',
    ttl: 'Padang, 29 Desember 1998'
  },
  '425': {
    cerita: [
      'Nama gua Muhammad Ardivan S.N, panggilannya Nuga. Orang pertama kali pada kaget sama suara gua karena bass banget dan ada yang nyangka jakun gua ada 2. Pengalaman gua sebagai garis depan dalam tawuran antar SD sisanya (SMP-SMA) dalam keadaan baik-baik. Mulai SMP gua bertemu temen gua namanya Vale dia yg menginspirasi gua menyukai dunia komputer dan saat SMA gua berusaha untuk InshaAllah bisa masuk Fasilkom UI. Dan alhamdulillah akhirnya gua bisa masuk Fasilkom dan bertemu para orang-orang hebatt didalammnya.'
    ],
    email: 'nugamuhammad@gmail.com',
    motto: 'Muka boleh biasa, hati dan sikap harus luar biasa',
    nama: 'Muhammad Ardivan Satrio Nugroho',
    nick: 'Nuga',
    phone: '081290536351',
    sma: 'SMAN 28 Jakarta',
    ttl: 'Jakarta, 14 Agustus 1999'
  },
  '426': {
    cerita: [
      'Nama gua Ulhaq. Gua SMA di SMAN 5 Depok. Alasan gua milih Fasilkom awalnya karena gua menghindari sama yang namanya biologi dan kimia, trus setelah nanya-nanya ke berbagai sumber akhirnya beneran tertarik buat milih Fasilkom karena berbagai alasan. Walaupun gua ga pernah nyentuh yang namanya coding, tapi gua tetep nekat buat milih Fasilkom. Trus dari dulu gua ingin melanjutkan S2 dan S3 di universitas favorit di luar negeri, dan tentunya dengan beasiswa full. Kalau hobi gua saat ini main badminton. '
    ],
    email: 'dhiyaulhaqnugraha@gmail.com',
    motto: 'Luruskan niat dalam segala aktivitas',
    nama: 'Muhammad Dhiyaulhaq Nugraha',
    nick: 'Ulhaq',
    phone: '082112741481',
    sma: 'SMAN 5 Depok',
    ttl: 'Depok, 4 November 1999'
  },
  '427': {
    cerita: [
      'Gua Feril Bagus kelompok 427. Gua suka main gama For Honor, Hero favorit Peacekeeper type Assasin fast counter. Gua anti musik EDM karena itu bukan musik. Gua suka musik Metal Simponik karena bagus.'
    ],
    email: 'feril.bagus@gmail.com',
    motto: 'Break the limit',
    nama: 'Muhammad Feril Bagus Perkasa',
    nick: 'Feril',
    phone: '082213137164',
    sma: 'SMAN 2 Cibinong',
    ttl: 'Bogor, 8 Juli 1999'
  },
  '428': {
    cerita: [
      'Nama gua muhammad naufal irbahhana. Hobi gua olahraga yaitu basket. Gua gasuka tempat yang terlalu ramai. Gua sangat senang bisa diterima di fasilkom.'
    ],
    email: 'irbahananaufal@gmail.com',
    motto: "Shoot for the moon, even if you miss you'll land among the stars",
    nama: 'Muhammad Naufal Irbahhana',
    nick: 'Nopal',
    phone: '087871786040',
    sma: 'Global Islamic School 2',
    ttl: 'Jakarta, 17/ Agustus 1999'
  },
  '429': {
    cerita: [
      'Nama gw Muhammad Naufal Raihansyah, biasa dipanggil Rae. Karena nama gw pasaran jadi agak susah buat manggil gw selain dari nama itu, rae juga ada 2 di Tarung. Asal gw dari bogor & satu-satunya cowo yg masuk UI dari sekolah gw, kemungkinan gara-gara hoki semata.'
    ],
    email: 'muhammadnaufal5598@gmail.com',
    motto: 'Silent is gold, but speak is Diamond',
    nama: 'Muhammad Naufal Raihansyah',
    nick: 'Rae',
    phone: '08111114574',
    sma: 'SMAIT Ummul Quro Bogor',
    ttl: 'Bogor, 9 November 1999'
  },
  '430': {
    cerita:['Halo nama gue Muhammad Rizal Alfaridzi biasa dipanggil Rizal. Gua senang ngoding karna ngoding adalah kewajiban di Fasilkom. Lalu, saya gemar membaca buku jika saya memiliki niat untuk membaca. Saya lahir melalui oprasi caesar. Tapi, saya masuk Fasilkom melalui Talentscouting. Saya tingginya bisa dibilang lumayan tapi ga tinggi tinggi banget. Cita cita saya awalnya menjadi orang yang bermanfaat bagi nusa dan bangsa. Namun, sejak saya di Fasilkom cita cita saya adalah lulus kuliah karna saya tidak pernah menyangka bahwa Fasilkom “semenyenangkan” ini. Saya rada bolot tapi kalo dipanggil Alhamdulillah masih nengok. Sebenernya, saya nulis ini kepepet karna udah dipalakin deskripsi diri sama indra dan kawan kawan yang lain. Jadi, saya harap saya bisa lulus dari Fasilkom kurun waktu tidak lebih dan kurang dari 4  tahun. Terima kasih.'],
    email: 'rizal.alfaridzi@gmail.com',
    motto: 'Bismillah, Jalani dulu, nanti bisa',
    nama: 'Muhammad Rizal Alfaridzi',
    nick: 'Rizal',
    phone: '082210512781',
    sma: 'SMA IT Nurul Fikri Depok',
    ttl: 'Jakarta, 4 Juli 1999'
  },
  '431': {
    cerita: [
      'Nama gue Rizal biasa dipanggil sama teman-teman Ical. Gue biasanya suka keliatan ada di kantin dan sekre square. Untuk sementara waktu, gue adalah seorang deadliner.'
    ],
    email: 'muhammadrizalid@gmail.com',
    motto: 'Tetap berjuang meski disuasana sulit',
    nama: 'Muhammad Rizal Siddiq Al Tahiri',
    nick: 'Ical',
    phone: '081313137148',
    sma: 'SMAN 8 Bandung',
    ttl: 'Tasikmalaya, 29 Mei 1998'
  },
  '432': {
    cerita: [
      'halo nama gue thia. lengkapnya nabila fathia zahra, tp di tarung nabila ada 4 jd ganti panggilan deh ehe. kyknya seangkatan mengenal gue sbg orang yg cukup receh. gue masuk fasilkom krn pas kls 11 gue mulai nonton mr.robot trs gue pgn kyk elliot (minus overdosis morfinnya wkwk). gue suka star wars, doctor who, supernatural, dan acara2 tv lainnya. gue minum kopi 3-4 gelas sehari gaboong. '
    ],
    email: 'nabilafathiaz@gmail.com',
    motto: 'Live and let live',
    nama: 'Nabila Fathia Zahra',
    nick: 'Thia',
    phone: '081219497041',
    sma: 'SMA 8 Jakarta',
    ttl: 'Jakarta, 22 Desember 1999'
  },
  '433': {
    cerita: [
      "Aku 'L' , Aku seseorang yang biasa saja, suka K-pop dan Anime . Aku selalu santai dan easy going. Aku masuk Fasilkom, agar bisa turut serta dalam projek pengembangan teknologi masa depan, seperti VRMMORPG dan AI ."
    ],
    email: 'evo220999@gmail.com',
    motto: 'Knowlegde is Power',
    nama: 'Nathanael',
    nick: 'Nathan',
    phone: '081289655671',
    sma: 'SMA Don Bosco Manado',
    ttl: 'Jakarta, 22 September 1999'
  },
  '435': {
    cerita: ['Reyhan Alhafizal H Saya punya passion besar di bidang IT. Selalu ingin belajar hal baru dan menciptakan inovasi baru (dan ingin jadi gemuk juga sebenernya). Namun sayang saya cukup sulit untuk tidak canggung dengan teman baru. Saya sering berteman dengan wibu, tapi saya bukan wibu. Karena hobi saya itu membaca komik DC dan menonton film/series nya. Saya juga suka franchise Avatar (Nickelodeon) dan Pixar.'
    ],
    email: 'reyhanhamidi@gmail.com',
    motto: "Behind everything, there's always God's will",
    nama: 'Reyhan Alhafizal Hamidi',
    nick: 'Reyhan',
    phone: '083804120919',
    sma: 'SMAN 1 Tangerang',
    ttl: 'Tangerang, 18 Mei 1999'
  },
  '436': {
    cerita: [
      'Gue itu bisa dibilang orangnya bawel. Maafkan kalo gue suka ngomul ya teman-teman dan kalo suka nagihin uang kas :( hehe. Gue juga kurang suka sama orang yang sider di grup. Harus bisa survive di fasilkom sampe lulus!!! Aminn'
    ],
    email: 'Fitrishb@gmail.com',
    motto: 'Open your mind before your mouth',
    nama: 'Siti Nurfitriyah',
    nick: 'Fitri',
    phone: '087887678120',
    sma: 'SMAN 98 Jakarta',
    ttl: 'Jakarta, 12 November 1998'
  },
  '437': {
    cerita: [
      'haloo gue Yafon yang namanya rada panjang banget itu hehe.  maafin ortu dan opung gue ya (sebagai pihak yg bertanggung jawab dalam pembuatan nama) membuat kalian capek menulis nama gue di binder. ',
      'By the way, seneng banget bisa bergabung sama Tarung! semoga kita tetep solid sampe 4 tahun ke depan!'
    ],
    email: 'yafonia.h@gmail.com',
    motto: "Live like there's no tomorrow",
    nama: 'Yafonia Kristiani Martina Napadot Hutabarat',
    nick: 'Yafon',
    phone: '087711056434',
    sma: 'SMAN 61 Jakarta',
    ttl: 'Jakarta, 21 Maret 1999'
  },
  '501': {
    cerita: [
      'Haloo, Nama gua Abraham Williams, biasa dipanggil bram. Gua memiliki hobi yang sangat banyak, tapi dikit yg ditekunin. Gua itu seorang pemimpi (asek), karena pertama, gua punya banyak mimpi yang masih berusaha diwujudkan, dan kedua, gua sering mimpi indah kalo di kelas. Gua orangnya sebenernya ga banyak ngomong, cuma kalo dibutuhkan aja. Cita-cita gua bisa buat sesuatu yang bisa punya dampak positif besar ke orang lain (ea).'
    ],
    email: 'abrahamwillcc@gmail.com',
    motto: 'Realisasikan Ucapan dengan Perbuatan',
    nama: 'Abraham Williams Lumbantobing',
    nick: 'Bram',
    phone: '087783004855',
    sma: 'SMA Kanisius Jakarta',
    ttl: 'Massachusetts, 24 Februari 1999'
  },
  '502': {
    cerita: [
      'Nama saya Hilmy, dan saya suka makan Nasi goreng. Sebenernya, gw suka Nasi goreng. Tapi kenapa di fasilkom pembeli Nasi gorengnya banyak banget ya? Kalo kalian ada yg buka jasa antri nasi goreng, kontak gw ya. #PenyukaNasiGoreng'
    ],
    email: 'hilmyahmadnaufal@gmail.com',
    motto: 'Semua kejadian pasti bermakna',
    nama: 'Ahmad Naufal Hilmy',
    nick: 'Hilmy',
    phone: '085695681597',
    sma: 'SMAN 1 Depok',
    ttl: 'Blitar, 24 September 1999'
  },
  '503': {
    cerita: [
      'Nama gua Akhmad Ramadhan Yamin, biasa dipanggil Jack. Ga nyambung kan? Jadi ceritanya itu di Line gua ganti nama, terus malah kebawa ke dunia nyata. Gua masuk Fasilkom biar bisa menguasai dunia melalui jalur teknologi, tapi kayanya malah bakal keasyikan wushu hehe.'
    ],
    email: 'akhmadr.yamin@gmail.com',
    motto: 'Bersenang-senang dahulu, bersenang-senang kemudian',
    nama: 'Akhmad Ramadhan Yamin',
    nick: 'Jack',
    phone: '083853258806',
    sma: 'SMAN 1 Pamekasan',
    ttl: 'Pamekasan, 5 Januari 1999'
  },
  '504': {
    cerita: [
      'gue adalah anak Jakarta yang merantau ke Depok. gue jago bgt parkir mobil. Btw special skill gue main trampolin dan gue kebal hukum.'
    ],
    email: 'andrirahmadhane9@gmail.com',
    motto: 'Keep moving forward',
    nama: 'Andri Rahmadhan Effendi',
    nick: 'Andri',
    phone: '081318803921',
    sma: 'SMAN 68 Jakarta',
    ttl: 'Padang, 5 Januari 2000'
  },
  '505': {
    cerita: [
      'Nama gua ardanto. Alasan gua masuk di fasilkom karena gua enjoy ngoding meski bikin pusing. Gua suka jalan2 gajelas dan main game yang gajelas juga. Gua berharap abis gua lulus dari sini gua bisa segera sukses membangun bisnis IT yang gua impikan, bisa segera menikah dengan istri gua kelak dan hidup bahagia dengan keluarga aamiin.'
    ],
    email: 'ardantofinsep14@gmail.com',
    motto: 'Kehidupan adalah kebebasan',
    nama: 'Ardanto Finkan Septa',
    nick: 'Danto',
    phone: '085717692548',
    sma: 'SMAN 2 Tangerang',
    ttl: 'Tangerang, 14 September 1999'
  },
  '506': {
    cerita: [
      'Awalnya gua pengennya masuk Ilmu Komputer tapi masuknya Sistem Informasi. Gua hobi main DotA 2 dan CS GO'
    ],
    email: 'AriqHaryo29@gmail.com',
    motto: 'Pengalaman adalah guru terbaik',
    nama: 'Ariq Haryo Setiaki',
    nick: 'Ariq',
    phone: '085810218236',
    sma: 'SMAN 28 Jakarta',
    ttl: 'Jakarta, 29 Juli 1999'
  },
  '507': {
    cerita: [
      'Halo nama gue Aufa. Gue suka nonton, dengerin musik, baca, dan main game. Sekarang gue mencoba untuk menjadi so-called Soundcloud producer. Go check out my beat at https://soundcloud.com/suh_dude/powerbank I know it can be better but its a learning process tho lol. Feel free to hate on the comment section. Bless your heart.'
    ],
    email: 'awiandra@rocketmail.com',
    motto: 'Ilmu adalah kekuatan',
    nama: 'Aufa Wiandra Moenzil',
    nick: 'Aufa',
    phone: '087888190319',
    sma: 'SMA Al-Izhar Pondok Labu',
    ttl: 'Jakarta, 18 Desember 1998'
  },
  '508': {
    cerita: [
      'Rosyi memiliki warna favorit biru langit, ia senang menggambar dan mencoba hal-hal baru. Makanan kesukaannya di kantin fasilkom adalah ayam kremes. Alasan saya masuk pacil adalah agar saya dapat menjadi salah satu orang yang dapat memajukan teknologi di indonesia'
    ],
    email: 'rosyidaaulia24@gmail.com',
    motto: 'Menjadi pribadi yang lebih baik setiap harinya',
    nama: 'Aulia Rosyida',
    nick: 'Rosyi',
    phone: '085884641728',
    sma: 'SMAN 28 Jakarta',
    ttl: 'depok, 24 nov 1999'
  },
  '509': {
    cerita: [
      'Nama saya Aziz, manusia langka yang ada di Fasilkom. Introvert tapi cerewet,  dan masih banyak yang belum Saia ketahui.'
    ],
    email: 'azizhudaya39@gmail.com',
    motto: 'Berusaha dengan diiringi iman',
    nama: 'Aziz Fikri Hudaya',
    nick: 'Aziz',
    phone: '085379245451',
    sma: 'SMAN 5 Kota Bengkulu',
    ttl: 'Bengkulu, 4 Juni 1999'
  },
  '510': {
    cerita: [
      "jeneg kulo bintang agung, saat kenalan sering ditanyain 'lu dari daerah mane?'. Gaya bicaraku biasa aja, cuma sedikit beda logatnya aja sama sebagian besak anak tarung. Aku angkatan 16 lhoo, tapi janagn dipanggil kak, masih muda kok. Tau nggak benda yang bersinar diatas langit namanya apa? Iya itu bintang. Semoga sukses bareng dan solid ya kawan."
    ],
    email: 'bintangagung1505@gmail.com',
    motto: 'Menikmati proses',
    nama: 'Bintang Agung Nusantara',
    nick: 'Bintang',
    phone: '085815855585',
    sma: 'SMAN 2 Kediri',
    ttl: 'Kediri, 15 Mei 1999'
  },
  '511': {
    cerita: [
      'Nama gua Cassie, gua orangnya sebenernya rada pemalu ke orang yg blom deket tp klo udh deket jadi malu"in ?? Alasan gua masuk ke Fasilkom sebenernya niatnya mau keren"an belajar coding dan pas masuk gua ttp gabisa coding karena otaknya rada ga nyampe kayaknya ?? Hobi gua diem di kamar kos karena gua orangnya mageran banget wkwkwk... Hmmm... Jujur gua enjoy banget di Fasilkom karena orangnya asik" dan keren abis deh!'
    ],
    email: 'michellecassie12@gmail.com',
    motto: 'Lakukan yang terbaik',
    nama: 'Cassie Michelle',
    nick: 'Cassie',
    phone: '08986085688',
    sma: 'SMA Santa Angela Bandung',
    ttl: 'Bandung,16 Agustus 1999'
  },
  '512': {
    cerita: [
      'Gua anak daerah yang merantau ke Jakarta buat kuliah.Hobi gua bermain basket dan rajin menabung.'
    ],
    email: 'febrianod@gmail.com',
    motto: 'Siapa yang bersabar,ia akan beruntung',
    nama: 'Dandy Febriano',
    nick: 'Dandy',
    phone: '082280173854',
    sma: 'SMAN 9 Bandar Lampung',
    ttl: 'Bandar Lampung,14 Februari 1999'
  },
  '513': {
    cerita: [
      'Saya, Davin, adalah mahasiwa Fasilkom yang suka berlagak gaje dan sering sendiri di tempat rame. Saya tuh suka menonton anime, dan mungkin bisa dibilang wibu, saya juga suka bermain game. Jika ingin berbicara dengan saya siap siap kesal karena saya suka becanda.'
    ],
    email: 'dadavinhunter@gmail.com',
    motto: 'Jika ingin bermimpi tidurlah dahulu',
    nama: 'Davin Iddo Irawan Alfian',
    nick: 'Davin',
    phone: '087780080987',
    sma: 'SMA Kharisma Bangsa',
    ttl: 'Surabaya, 26 Juni 1999'
  },
  '514': {
    cerita: [
      "Halo gua puspa. Sebelum lo nanya gua puspa yang mana, gua yg pakek krudung ya. Iya, gua emang suka bareng sm puspa yg satu lagi. Engga, kita gamau nentuin panggilan masing2. Sebenernya ada tp org2 masi manggil kita puspa. Katanya sih muka gua sinkron sm sikap gua. temen2 gua ngira gua diem awalnya. Taunya diem2 memalukan. Tp itu sbnrya semacam privilege bagi mereka yg udh gua anggap deket aja hehe. Ohya. Urusan baju gua paling tebir. Tp buat maslah lain gamau ribet2. Hehe. Masi mau 'jalanin aja' dulu."
    ],
    email: 'puspadwi21@gmail.com',
    motto: 'Always give your best to not regret anything',
    nama: 'Dwipuspa Ramadhanti Santoso',
    nick: 'Puspa',
    phone: '085895428606',
    sma: 'SMAN 44 Jakarta',
    ttl: 'Jakarta, 22 Desember 1999'
  },
  '515': {
    cerita: [
      'Awalnya mau banting setir ke soshum ambil hukum atau psikologi tapi nggak jadi karena ketikung PPKB keterima di Fasilkom, deh. Panikan. Sensitif sama cara orang nulis, suka gatel pengen nambahin tanda baca kalau lihat ada tulisan tanpa tanda baca.'
    ],
    email: 'altruistichistory@gmail.com',
    motto: "You don't get a win unless you play in the game.",
    nama: 'Farah Syavira',
    nick: 'Izu',
    phone: '089632550856',
    sma: 'SMAN 1 Depok',
    ttl: 'Jakarta, 14 Agustus 1999'
  },
  '516': {
    cerita: [
      'Halo, nama gua Farhan. Mungkin gua kadang terkesan ambis, tapi nyatanya gua cuma selalu berusaha mengurangi frekuensi "bekerja dalam tekanan deadline". Gua cukup maniak dalam gaming dan sering nonton tokusatu (weaboo or not, you decide :v). Gua masuk Fasilkom karena kepengen banget nantinya jadi seorang game developer. Ngomong-ngomong, kalo lagi ngobrol santai sama gua, jangan serius-serius amat yak, maklumin selera humor gua yang udah sampe level gorong-gorong.'
    ],
    email: 'sonofkyrat99@gmail.com',
    motto: 'Integrity above anything else',
    nama: 'Farhan Azyumardhi Azmi',
    nick: 'Farhan',
    phone: '087877989215',
    sma: 'SMAN 49 Jakarta',
    ttl: 'Jakarta, 21 Agustus 1999'
  },
  '517': {
    cerita: [
      'Gw suka main basket, anime&manga (dulu), maen game, nonton NBA. Main game sama basketnya b aja. Gw bisa baca tulis hiragana katakana sama sedikit kanji dasar. Makanan favorit: tahu, indomie. Gapernah ikut olimpiade apa-apa. Salah satu alasan masuk UI karena pengen banggain orangtua & saudara.'
    ],
    email: 'gemapratamaaditya@yahoo.com',
    motto: 'No pain, no gain',
    nama: 'Gema Pratama Aditya',
    nick: 'Gema',
    phone: '08561978788',
    sma: 'SMAK 1 PENABUR Jakarta',
    ttl: 'Jakarta, 8 Desember 1998'
  },
  '518': {
    cerita: [
      "DFLSXK FPX JRPQELCX, FIJR HLJMRQBO 2017. AFX YFXPX AFMXKDDFI DFL XQXR DFLSXK, QXMF YRHXK DFLSXKKF. HXIL KRIFP KXJXKVX GXKDXK ZRJX 'DFL', QXMF VXKD YBKBO 'DFLSXK'. HXIL IXDF YOLTPFKD AF FKQBOKBQ, AFX MRKVX RPBOKXJB VXKD ZXKZBO YXKDBQ. ZXOF XGX 'DFLSXKFPJ' XQXR HXIL KDDH AFQXJYXEFK PRCCFU 'FA'.",
      'Chiper: Caesar Chiper'
    ],
    email: 'giovanism@outlook.co.id',
    motto: 'Lihat sikon ae, Terus beradaptasi',
    nama: 'Giovan Isa Musthofa',
    nick: 'Giovan',
    phone: '081311134995',
    sma: 'SMAN 1 Rembang',
    ttl: 'Rembang, 17 September 1999'
  },
  '519': {
    cerita: [
      'Fahmi adalah manusia aneh yang menggeliat di rawa rawa seperti orocimaru alias Bintang. Dia menyukai Sasuke bukan Jasuke apalagi janitor yang senang salto. Setiap pagi dia bangun sambil memegang teguh keadilan dan kedamaian untuk konoha. Hobinya membuat orang lain merasa lembab selembab ketek yang basah seperti keteknya bantengnya Jasuke alias Bintang Septama. Cita-citanya menguasai Yoshinoya tetapi dia diselingkuhi oleh olehnya Jack yang basah tercelup ketek Igor Septama Sianipar. Dia jago balapan seperti Rosyi septama tapi tetap kalah dengan behelnya Navi Septama yang begitu Arief dan Darmawan septama.'
    ],
    email: 'gustifahmifadhila@gmail.com',
    motto: 'Kegagalan bukan akhir segalanya',
    nama: 'Gusti Fahmi Fadhila',
    nick: 'Fahmi',
    phone: '087878546322',
    sma: 'SMAN 68 Jakarta',
    ttl: 'Jakarta, 24 Juli 1998'
  },
  '520': {
    cerita: [
      'Halo semua, perkenalkan nama gw I Gusti Putu Agastya Indrayana, biasa di panggil Agas. rasanya masuk FASILKOM tuh seneng, bangga dan yakin bahwa gw bakal belajar banyak disini... sampe sekarang gw masih PP Bekasi-Depok, ya bisa di bilang gw pulang pergi naik roket... wkwkwk'
    ],
    email: 'agastya.indrayana@gmail.com',
    motto: "where there's a will, ther's a way",
    nama: 'I Gusti Putu Agastya Indrayana',
    nick: 'Agas',
    phone: '087878726602',
    sma: 'SMAN 4 Bekasi',
    ttl: 'Bekasi, 2 Juni 1999'
  },
  '521': {
    cerita: [
      'halo! gua biasa dipanggil suro. gua suka banget yang namanya sepak bola, ya walaupun gua ga jago jago banget main bola. tapi bukan itu intinya, gua suka bola karena tertarik liat oper operan pemainnya yang skillfull banget, tektik menghuni, jadi terlihat indah. walaupun gua suka sepakbola gua ga pernah sekalipun ke stadion apapun, termasuk stadion ui. ya semoga gua bisa ke stadion sepakbola sama anggota dewan yang lain ngebahas nasib sepakbola di negeri ini.'
    ],
    email: 'ilestin.il@gmail.com',
    motto: 'Motivasi yang benar',
    nama: 'Igor Lestin Sianipar',
    nick: 'Igor',
    phone: '081213245023',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Siantar, 12 Desember 1998'
  },
  '522': {
    cerita: [
      'Nama saya Jeffrey. Saya lahir di Medan, Sumatera Utara pada tanggal 8 Desember 1998. Sebelum masuk Fasilkom, saya bersekolah di SMA Bunda Mulia School yang terletak di Jalan Lodan Raya No. 1, Jakarta Utara. Alasan saya masuk Fasilkom itu gara-gara saya suka hal-hal yang berkaitan dengan IT dan saya melihat bahwa peluang kerja dalam bidang IT sangat besar, maka dari itu saya memilih Fasilkom UI. Saat saya masuk Fasilkom, saya merasa bahwa kehidupan kuliah dan sekolah sangat berbeda. Di UI, saya belajar untuk lebih bisa mandiri dan dapat mengatur waktu dengan baik. Terutama dalam hal akademik, pelajaran di kuliah sangat berbeda dengan SMA.'
    ],
    email: 'jeffreywong0812@gmail.com',
    motto: 'Kerja keras dan kesabaran tidak akan pernah membohongi hasil',
    nama: 'Jeffrey',
    nick: 'Jeff',
    phone: '08976507798',
    sma: 'SMA Bunda Mulia School',
    ttl: 'Medan, 8 Desember 1998'
  },
  '523': {
    cerita: [
      'gw masuk fasilkom karena ingin mempelajari lbh dalam ttg ilmu komputer. gw sebenarnya tidak bisa mat dan belum punya pengalaman coding. '
    ],
    email: 'halimmichael09@gmail.com',
    motto: "Don't Worry, Be Happy",
    nama: 'Michael Wiryadinata Halim',
    nick: 'Michael',
    phone: '087775543388',
    sma: 'SMAK 3 Penabur Jakarta',
    ttl: 'Jakarta, 9 Januari 1999'
  },
  '524': {
    cerita: [
      'Nama gw Mika, ig gw utsukira "kok bisa gitu?" karna gw mo pake username raisa6690 gabisa. Yauda. Gw yang pernah stand up, tapi klo ada kursi ya sit down juga sih. Gw juga yang bikin teori "intensitas suara komdis berbanding lurus dengan kecepatan mereka jalan". Gw juga bisa sulap, sulap gw paling keren adalah gw bisa ngilang. Apalagi pas ditagih uang kas. *poof* tiba2 gw di arab lagi makan onta naik korma. Alasan gw masuk Fasilkom mungkin karena gw sedang ingin berada di dalam. Pesan gw buat anak Tarung, tolong disampaikan. Terima kasih. ',
    ],
    email: 'mikadabelza@gmail.com',
    motto:
      'Kasihi Tuhan segenap hati, jiwa, akal dan kasihi sesama seperti diri sendiri',
    nama: 'Mika Dabelza Abi',
    nick: 'Mika',
    phone: '082211479232',
    sma: 'SMAN 99 Jakarta',
    ttl: 'Jakarta, 25 Agustus 1999'
  },
  '525': {
    cerita: [
      'Halo aku Mila. Saya berusia 17 tahun. Awal masuk fasilkom, karena disuruh orang tua. Mila sangat suka eskrim'
    ],
    email: 'shnmila@gmail.com',
    motto: 'Hiduplah tanpa penyesalan',
    nama: 'Mila Shania',
    nick: 'Mila',
    phone: '085819500605',
    sma: 'SMAN 14 Jakarta',
    ttl: 'Sidoarjo, 6 Mei 2000'
  },
  '526': {
    cerita: [
      "Nama gue Muhamad Lutfi Arif. Biasa di panggil Lutfi. Kalo di Fasilkom dipanggilnya Upi. Awalnya ayas manggil gue upi ayif jadi yang lain pada ikutan. Kalo gue terlihat pendiam, sebenernya enggak kalo udah kenal mah wkwk gue ini senang ngebantu orang, dan gue mengutamakan kenyamanan orang lain daripada gue sendiri karena motto hidup gue 'sebaik-baik manusia adalah mereka yang bermanfaat bagi orang lain'. Alasan gue masuk Fasilkom ialah ketertarikan gue sama dunia IT, tapi gue baru kenal coding pas masuk Fasilkom. Hobi gue nonton, jalan jalan, sama gaming. Ketertarikan gue sama hal-hal yang berbau islami. Hehe"
    ],
    email: 'larif216@gmail.com',
    motto: '"Sebaik-baik manusia ialah dia yang bermanfaat bagi orang lain"',
    nama: 'Muhamad Lutfi Arif',
    nick: 'Lutfi',
    phone: '085779834834',
    sma: 'SMAN 68 Jakarta',
    ttl: 'Bojonegoro, 23 Oktober 1999'
  },
  '527': {
    cerita: [
      'Nama gw Arief, hal yang biasa gw lakuin adalah aktivitas yg biasa gw lakuin. Fasilkom... Kyknya gw nyasar disini tp so far di sini lebih dari ekspetasi gw'
    ],
    email: 'darmawanarief71@gmail.com',
    motto: 'Hargai orang lain',
    nama: 'Muhammad Arief Darmawan',
    nick: 'Arif',
    phone: '082112959500',
    sma: 'SMAN 44 Jakarta',
    ttl: 'Jakarta, 28 Januari 1999'
  },
  '528': {
    cerita: [
      'Aku adalah ibarat singa yang gagah perkasa, penguasa hutan. aku berasal dari SMAN 68 Jakarta. aku juga senang menonton sepak bola, dan tim kesayanganku adalah Roma. Fyi, Roma Club yaa, bukan biskuit.'
    ],
    email: 'm.nurfaizh@gmail.com',
    motto: 'hidup yg sebenarnya adalah di akherat',
    nama: 'Muhammad Nur Faiz Habibullah',
    nick: 'Faiz',
    phone: ' 081210243341',
    sma: 'SMAN CMBBS',
    ttl: 'Banda Aceh, 7 Juli 1999'
  },
  '529': {
    cerita: [
      "Waktu sd gue nonton disney, smp nonton drakor, sma nonton 'riverdale'. Waktu kuliah? Nontonin kodingan :(("
    ],
    email: 'vermouthia@gmail.com',
    motto: 'Selalu ada jalan',
    nama: 'Muthia Iftinah Parahita',
    nick: 'Muthi',
    phone: '081382736667',
    sma: 'SMAN 67 Jakarta',
    ttl: 'Bandung, 3 Desember 1999'
  },
  '530': {
    cerita: [
      'Saya NAbila febri VIola. Seseorang yg sedang mencari partner main Portal 2 co-op. Selain itu, saya juga sedang mencari partner hidup.'
    ],
    email: 'nabilafebriviola@gmail.com',
    motto: 'Man Jadda Wajada',
    nama: 'Nabila Febri Viola',
    nick: 'Navi',
    phone: '081234534636',
    sma: 'SMAN 5 Surabaya',
    ttl: 'Jakarta, 3 Februari 1999'
  },
  '531': {
    cerita: [
      'Suka Korea (Kpopers) tapi malah dikira WIBU (Suka Jepang). Dikenal sebagai Mami Tarung. Awalnya memiliki panggilan "Ila" di FASILKOM saat jaman awal2 banget, tapi setelah mau PSAF berubah panggilan jadi "Nabh". Kalau lagi badmood atau down, bakal menjauh dari kerumunan atau banyak orang untuk memperbaiki mood dulu.'
    ],
    email: 'nabilahadanin@gmail.com',
    motto: 'Do the best!',
    nama: 'Nabilah Adani Nurulizzah',
    nick: 'Nabh',
    phone: '081317056031',
    sma: 'SMAN 3 Depok',
    ttl: 'Jakarta, 19 Februari 1999'
  },
  '532': {
    cerita: [
      'Hai semuaa...',
      'Perkenalkan saya Nabilla Yuli Shafira, biasa dipanggil maudy, sebenarnya karena masuk pertama kali gue masuk SMA potongan rambut kelihatan mirip  Maudy Ayunda dari depan tapi kalau dikebelakangin malah jadi aneh. Awalnya temen gue iseng manggil maudy karena ada 2 nabilla dikls, eh ternyata malah keterusan sampe sekarang. Hobi gue dengerin musik dan nonton. Gue orgnya agak pendiam kalau masih baru. Jujur saat mendekati pendaftaran snm gue baru kepikiran SI UI. Semoga kita bisa sukses bersama ya Tarungg! Semangatt!!',
    ],
    email: 'Nabillashafira99@gmail.com',
    motto: 'Work hard, have fun, success',
    nama: 'Nabilla Yuli Shafira',
    nick: 'Maudy',
    phone: '08119471099',
    sma: 'SMA N 1 Kota Jambi',
    ttl: 'Jambi, 10 Juli 1999'
  },
  '533': {
    cerita: [
      'Halo, gua Nadia Syafitri biasa dipanggil Nadia. Gua orangnya bawel banget sebenernya kalo udah kenal deket heheh. Gua suka puisi tapi gabisa bikinnya hehe. Gua pengen kerja yang ga di depan layar tapi gua masuk Fasilkom. Gua suka jalan-jalan, kemana aja walaupun gabut yg penting keluar.'
    ],
    email: 'nadiasyafitri17@gmail.com',
    motto: 'The best revenge is massive success',
    nama: 'Nadia Syafitri',
    nick: 'Nadia',
    phone: '08118080033',
    sma: 'SMAN 34 Jakarta',
    ttl: 'Jakarta, 17 Januari 2000'
  },
  '534': {
    cerita: [
      'Ini Nathasya yg panggilannya Cici. Jangan ketuker sm Natasya yg satu lagi, itu Caca. Iya, maaf emg nama panjang sm nama panggilannya ga nyambung.'
    ],
    email: 'elioranathasya@gmail.com',
    motto: 'See the good in everything',
    nama: 'Nathasya Eliora Kristianti',
    nick: 'Natha/Cici',
    phone: '081280135924',
    sma: 'SMAN 1 Depok',
    ttl: 'Depok, 11 November 1999'
  },
  '535': {
    cerita: [
      'Seorang anak yang ingin jago tapi lebih suka bermimpi di kasur. Anti sambal tapi fans berat merica. Anggota tim makan bubur diaduk.',
    ],
    email: 'cahyanugraha12@gmail.com',
    motto: 'Jalani dan nikmati',
    nama: 'Pande Ketut Cahya Nugraha',
    nick: 'Cahya',
    phone: '089677715760',
    sma: 'SMAN 3 Denpasar',
    ttl: 'Denpasar, 12 April 1999'
  },
  '536': {
    cerita: [
      'Aku Rahmadian Tio Pratama biasanya di panggil Tio, entah kenapa aku selalu dibilang imut padahal ada yang lebih imut dibanding aku'
    ],
    email: 't.rahmadian@gmail.com',
    motto: 'Dengan niat baik pasti akan terjadi hal yang baik',
    nama: 'Rahmadian Tio Pratama',
    nick: 'Tio',
    phone: '085711234626',
    sma: 'SMAN 2 Kota Cirebon',
    ttl: 'Jakarta, 3 Juni 1999'
  },
  '537': {
    cerita: [
      'Haiii nama gua wahyu, tinggi gua 190 berat gua sekuintal hehe, hobby gua makan, perut gua kaya karet karna ga pernahhh kenyangg. Gua masuk fasilkom karna gua suka main game. Rocket league yay.'
    ],
    email: 'wahyuadt9@gmail.com',
    motto: 'Undendlichkeit',
    nama: 'Wahyu Ananda Duli Tokan',
    nick: 'Wahyu',
    phone: '085710149731',
    sma: 'SMAN 81 Jakarta',
    ttl: 'Jakarta, 9 Agustus 1999'
  },
  '601': {
    cerita: [
      'saya dulu sangat terjebak diantara 2 pilihan yaitu keluar dari IPA pindah ke IPS atau tetep berada di IPA.. akhirnya saya tetap memilih IPA dan sekarang saya berada di Fasilkom UI. Semoga pilihan yang saya buat adalah pilihan tepat ;'
    ],
    email: 'AbiyouAkmal@gmail.com',
    motto: 'Man Jadda Wa Jadda',
    nama: 'Abiyu Muhammad Akmal',
    nick: 'Abiyu',
    phone: '08561944421',
    sma: 'SMAN 1 Bogor',
    ttl: 'Lubuk Linggau, 31 Juli 1999'
  },
  '603': {
    cerita:['"Cuber, Pumper, DDR freak, and whatever."',
'',
'Itu gue. Gue itu suka banget maen rubik sama beberapa rhythm game (misal: Pump It Up/PIU, DanceDanceRevolution/DDR, Sound Voltex, Maimai, dll.). Ada yang bilang kalo gue itu udah master, tapi sih sebenernya gak.',
'Gue juga Ariq paling kecil di antara ketiga Ariq yang ada di Fasilkom. Ciri khas gue sih gue itu sering pake hoodie putih polos. Ya, itu emang hoodie favorit gue.',
'Kalo lu mau nemuin gue ya sebenernya sih gampang. Spot favorit gue ada 3: Sekre, perpus atas di quiet room, sama Timezone Margo City.',
'',
'P.S.: Gue kepengen beli PS4 tapi sampe sekarang gak kesampean.',
'#sedihamat'],
    email: 'ariqmkusuma@gmail.com',
    motto: 'Responsible Freedom is Amazing',
    nama: 'Ariq Munif Kusuma',
    nick: 'Ariq',
    phone: '082117402997',
    sma: 'SMAN 2 Cirebon',
    ttl: 'Depok, 29 Oktober 1999'
  },
  '604': {
    cerita: [
      'Hai, nama gua bagus, gua orang asli bogor. Gua ga suka suka banget olahraga sejak libur sbm, tapi sebelumnya gua aktif di bidang boxing. Gua jadi ketuanya di sma gua malah. Awalnya sih ga punya minat yang gede banget di bidang komputer, tapi untungnya gua bisa fit in dengan baik ke jurusan gua sekarang, sistem informasi.'
    ],
    email: 'bpribadi99@yahoo.co.id',
    motto: 'The start of something good',
    nama: 'Bagus Pribadi',
    nick: 'Bagus',
    phone: '082111127687',
    sma: 'SMA Negeri 5 Bogor',
    ttl: 'Bogor, 19 Februari 1999'
  },
  '605': {
    cerita: [
      'Nama aku bricen sarido simamora, dari medan. Masuk fasilkom blom ada modal ngoding.. blajar dari awal. Orangnya ceriaa tapi kadang gampang depresi.bagi saya di fasilkom butuh perjuangan yg lebih untuk mengikuti perkuliahan dan kegiatan lainnya.'
    ],
    email: 'bricensimamora26@gmail.com',
    motto: 'semper fidelis',
    nama: 'Bricen S Simamora',
    nick: 'Bricen',
    phone: '085361988769',
    sma: 'SMAN 3 Tarutung',
    ttl: 'Sibuntuon, 26 Januari 1998'
  },
  '606': {
    cerita: [
      'Halo mentemen, kenalin gue Dave, hobi gue dengerin n main musik, pengen juga main&nyanyi2 bareng temen2 Tarung yg lain. Meskipun kelihatannya pendiem tapi gue ga diem2 amat kok :)'
    ],
    email: 'davenathanaeld@gmail.com',
    motto: 'Menjadi berguna untuk orang lain akan lebih membahagiakan',
    nama: 'Dave Nathanael',
    nick: 'Dave\\',
    phone: '087774489552',
    sma: 'SMAK PENABUR Gading Serpong',
    ttl: 'Tangerang, 8 Mei 1999'
  },
  '607': {
    cerita: [
      'ya halo gaes namaku dhita. gue gatau sebenernya gue itu orangnya kek gimana. kalian sendiri lah yang nilai. ehe. semoga kita, tarung, sukses bareng-bareng ya'
    ],
    email: 'dhitaputripratama10@gmail.com',
    motto: 'Work Harder, Be Luckier',
    nama: 'Dhita Putri Pratama',
    nick: 'Dhita',
    phone: '087887218121',
    sma: 'SMAN 38 Jakarta',
    ttl: 'Jakarta, 10 Agustus 2000'
  },
  '608': {
    cerita: [
      'Nama gue Farril Zavier Fernaldy. Biasa dipanggil Arril. Gue lahir di Jakarta pada tanggal 6 Februari 2000. Selama 7 tahun, gue tinggal di Amerika, khususnya di New York City. Sekarang gue sedang menjalani kehidupan di Indo, dan gue kangen parah sama teman-teman gue disitu. Bisa dibilang gue homesick. Walaupun hampir tiap weekend dan hari libur gue chatting sama mereka. Gue senang bisa masuk Fasilkom UI, karena gue memang paling menyukai hal-hal yang berbau IT. Gue berharap suatu saat nanti gue bisa bertemu lagi dengan teman-teman gue yang ada disana, di New York.'
    ],
    email: 'farrilf@gmail.com',
    motto: 'Without motivation, dreams are still just dreams.',
    nama: 'Farril Zavier Fernaldy',
    nick: 'Arril',
    phone: '087874149068',
    sma: 'SMAN 3 Bogor',
    ttl: 'Jakarta, 6 Februari 2000'
  },
  '609': {
    cerita: [
      'Nama :fatih almutawakkil',
      'Asal dari sman modal bangsa aceh. lahir 1 desember 1999',
      'Hobi gua adalah film making,editing ,acting dan yang lainnya yang berkaitan dengan industri perfilman.. alasan masuk fasilkom sebenarnya gaada .. jadi ceritanyaa waktu kelas 3 gua bingung mau masuk mana..gua pengen masuj IKJ jurusan tv dan perfilman.. tapi orang tua ngelarang.. jadi gua putusin masuk ptn karena gua gasuka fisika dan bio jadi teknik dan fk udah pasti skip.. gua cuma suka mtk sama kimia tapi gua gamau masuk tek kim karena byk fisika.. kalo kimia murni juga ga mau.. tp gua cari cari ada tu teknikvyg byk belajar kimia nyaa yaitu metal.. tp ttp gua gamau jadiin teknik prioritas.. terus gua beralih kepelajaran yg satu lg gua sukaa.. mtk ...mtk murni pasti gua gamau.. ternyata komputer ada bljt mtk.. gua liat komputer terbagi banyak ada ilkom ,si , TI,DLL.. setelah gua liat ilkom aama TI itu terlalu byk ngoding dan itungitung.. gua yakin sih kyknyaa gua ga bakal tahann.. terus gua liat SI .. balance gitu ada manajemen nyaa.. gua sih lumayan pengen brlajar manajemen karena ortu gua juga banker.. yaudah terakhir gua mutusin masuk SI.. segampang ituu... dan pas disini ekspektasi gua salah, ternyata ttp susah.. tapi alhamdulillah karena ada TARUNG yang selalu mau bantu guaa.. apaa pun yang susah jadi mudah karena selalu ada temen temen yang support gua.. ',
      'Makasih semua yang udah support guaa, mungkin semester depan kalian ga bisa support gua lagii karena gua udah pindah jurusan.. hehehehehe, ga deng bercanda..',
      'Ini ceritaku ,mana ceritamu ?'
    ],
    email: 'fatihalmu@gmail.com',
    motto: 'datang, kerjakan, lupakan',
    nama: 'Fatih Al-Mutawakkil',
    nick: 'Fatih',
    phone: '082316463078',
    sma: 'SMAN Modal Bangsa Aceh',
    ttl: 'Banda Aceh, 1 desember 1999'
  },
  '610': {
    cerita: [
      'Gua masuk fasilkom pilih2 berhadiah, tapi gapapa lah gua jalanin..toh seru juga d fasilkom..ini cerita ku!! Ceritamu mana ?!!'
    ],
    email: 'fikrinurulilmi@gmail.com',
    motto: 'quit once,it becomes a habbit.NEVER QUIT',
    nama: 'Fikri Nurul Ilmi',
    nick: 'fikri',
    phone: '085219790045',
    sma: 'MAN INSAN CENDEKIA GORONTALO',
    ttl: 'ciamis, 25 september 1998'
  },
  '611': {
    cerita: [
      'Gue ansos, dan susah banget buat mulai percakapan sama orang yg baru kenal. Tp gue bisa banyakkk omong sama org yg udh akrab. Sobat gue bilang gue dr luar keliatan "untouchable", tp ngga jg kok hihi. Katanya juga gue pecinta cogan hahahah, tp bener juga sih. Gue hobi nonton drama, tv series, film, apapun yg mengandung cogan di dalamnya. Satu lagi deh, gue ga suka minuman dingin :v .'
    ],
    email: 'fivimelinda@gmail.com',
    motto:
      "Don't let your small mind convince you that your dreams are too big",
    nama: 'Fivi Melinda',
    nick: 'Fivi',
    phone: '085229407890',
    sma: 'SMAN 1 Pati',
    ttl: 'Pati, 13 Juli 1999'
  },
  '612': {
    cerita: [
      '"Kata orang2 gue aneh. Kata andalannya "Iya jugaya". Kalo ngomongin orang pasti sebut nama panjang dan reflek suka nunjuk orangnya. Kalo ketawa ngakak bisa sampe nangis. Orang paling bimbang nentuin sesuatu, terutama makan apa di fasilkom."'
    ],
    email: 'janitra.a.s@gmail.com',
    motto: 'Jika ada kemauan, pasti ada kemampuan',
    nama: 'Janitra Ariena Sekarputri',
    nick: 'Janitra',
    phone: '087888905656',
    sma: 'SMA Labschool Jakarta',
    ttl: 'Jakarta, 16 Oktober 1999'
  },
  '613': {
    cerita: [
      'Nama aku jasmine nur ariij biasa dipanggil jasmine. Aku tinggal di kramat jati. Alasan masuk fasilkom karena pengen ngehindarin pelajaran kimia. Aku suka banget sama binatang kucing. Aku punya sifat jelek banget dari dulu yaitu sering lupa dan kalo udah mager, bisa mager semager magernya. Aku orangnya cukup sabar. ',
    ],
    email: 'jasmine030399@gmail.com',
    motto: 'kesabaran sangat dibutuhkan untuk mencapai sebuah kesuksesan',
    nama: 'Jasmine Nur Ariij',
    nick: 'jasmine',
    phone: '081213442032',
    sma: 'SMAN 39 Jakarta',
    ttl: 'jakarta, 3 maret 1999'
  },
  '614': {
    cerita: [
      'hi nama gw kevin raikhan zain , gw dari sd sampai sma gw suka banget pelajaran IT dimana gw suka pelajaran programing programing atau software . saat sd gw ngeliat om gw yang kerjanya jadi IT akhirnya gw kepo dan memutuskan untuk mempelajarinya dan gw sangat suka yang berbau komputer. saat SMA kelas 12 akhirnya gw memutuskan untuk memilih jurusan komputer entah itu teknik atau ilmu komputer. gw juga nyari2 univ yang bagus untuk program ITnya akhirnya gw baca2 di internet UI itu unggul banget soal IT akhirnya gw berusaha belajar sampai keterima ilmu komputer di UI ',
      'hobi gw itu main game dimana gw suka banget nge game dari siang sore malem . gw pikir kalau gw udah lulus menjadi sarjana ILMU komputer gw mau jadi programing dan membuat game'
    ],
    email: 'kevinraikhan@gmail.com',
    motto: 'Do what you love',
    nama: 'Kevin Raikhan Zain',
    nick: 'Kevin',
    phone: '085711157486',
    sma: 'SMAN 5 Depok',
    ttl: 'Jakarta, 11 juni 1999'
  },
  '615': {
    cerita: [
      'Gua hobinya main game tapi belakangan ini gua suka mengisi waktu gua dengan nonton dan juga browsing. Dulu gua pilih fasilkom bukan karena hobi ngecoding sih, tapi karena keliatan masa depan ilmu komputer keren aja. Setelah beberapa bulan di dalam kehidupan kampus ini, gua makin merasa betapa guna nya ilmu komputer pada nantinya.',
    ],
    email: 'michaelsudirman99@gmail.com',
    motto: 'Happiness depends upon ourselves',
    nama: 'Michael Sudirman',
    nick: 'Michael',
    phone: '087771975498',
    sma: 'SMA Stella Maris Gading Serpong',
    ttl: 'Tangerang, 11 Mei 1999'
  },
  '616': {
    cerita: [
      'Mikhael adalah pria kelahiran 2 Mei 1999 yang jomblo sejak lahir. Hobinya adalah dengerin musik, baca one piece, dan pantengin ui.cantik. Jones bukan, bucin bukan, wibu apalagi. Kalo tidur susah dibangunin.',
    ],
    email: 'mikhaelbuntaran@gmail.com',
    motto: 'Ora et labora (Berdoa dan Bekerja)',
    nama: 'Mikhael',
    nick: 'Mikhael',
    phone: '085286634487',
    sma: 'SMA Kristen Ketapang 1',
    ttl: 'Jakarta, 2 Mei 1999'
  },
  '617': {
    cerita: ['Aku orangnya gak suka banyak ngomong, tapi suka ketawaa.'],
    email: 'monalisavalenciamerauje@gmail.com',
    motto: 'put God first and always',
    nama: 'Monalisa Valencia Meraudje',
    nick: 'Mona',
    phone: '081248012937',
    sma: 'SMAN 5 Jayapura',
    ttl: 'Jayapura, 11 Desember 1999'
  },
  '618': {
    cerita: [
      'Nama gue Abdurrahman yang r-nya 2, panggilannya ABD. Tapi nama line gua Arya Hadi dan gua sering dipanggil panggilan laen. Kalo gua lagi asik sendiri mohon dimaklumi dan jangan dihiraukan.',
    ],
    email: 'Abdurrahmanhermanto18@gmail.com',
    motto: 'We are all connected',
    nama: 'Muhammad Abdurrahman',
    nick: 'ABD',
    phone: '081293738216',
    sma: 'SMANU MH Thamrin',
    ttl: 'Tangerang, 14 April 1999'
  },
  '619': {
    cerita: [
      'Nama gw Farras Hakim. Panggilannya Ayas gatau gw juga kenapa bisa gitu. Hobi gw ialah tidur :v Gw lahir di Serang pada hari Kamis tanggal 17 Rabiul Awwal. Gw masuk Fasilkom karena diantara jurusan jurusan lainnya, Ilmu komputer yang bikin gw paling tertarik.',
    ],
    email: 'farrashakim@gmail.com',
    motto: 'Allah Maha Menjaga. Jadi, tidak perlu khawatir.',
    nama: 'Muhammad Farras Hakim',
    nick: 'Ayas',
    phone: '082114056676',
    sma: 'SMAN 81 Jakarta.',
    ttl: 'Serang , 1 Juli 1999'
  },
  '620': {
    cerita: [
      'Biasa dipanggil Rizdar. Gw biasanya sendirian merenungi sesuatu yang tidak penting. Sedikit misterius, katanya. Seneng ngelihat orang beraktifitas di jalan. Gw juga terkadang punya keinginan bergantung seperti kungkang di pohon, jadi gw bisa tahu bagaimana dunia jika dilihat dari sisi kebalikannya'
    ],
    email: 'muhrizdar@gmail.com',
    motto: 'Apapun yang kau lakukan, kebahagiaanlah yang kau butuhkan.',
    nama: 'Muhammad Rizki Darmawan',
    nick: 'Rizdar',
    phone: '081314231234',
    sma: 'SMAN 1 Pontianak',
    ttl: 'Pontianak, 13 September 1999'
  },
  '621': {
    cerita: [
      'Halo kawan2 semua nama gua rofan. Gua sempet nyalonin koor angkatan tapi kalah sama fatih, tapi gapapa lah. Banyak orang ngira gua itu nakal tapi sebenernya ngga. Gua sering puasa senin kamis tapi ga sholat (astaghfirullah semoga rofan bisa tobat ya). Gua ngekost di green camp tapi gua tidurnya ga disana. Gua hidup nomaden alias gua tidurnya pindah2. Orang pertama yang gua kenal di tarung itu jin. Tapi sayang, setelah dia kenal cewe trus dia jadi bucin. Buat gantiin jin, gua punya temen deket namanya sandi tapi dia kerjanya marah2 mulu terus dia sexist, tolol, jelek dan dia hitam sama seperti saya (yang sexist, marah2 mulu sama tolol itu beneran ya). Kita itu meant to be together. Ya ga san? Orang2 ngira gua nakal padahal gua lembut hatinya. Gua baru belajar ngoding tapi gangerti-ngerti. Gara2 gua gabisa ngoding jadinya lab jumat itu menentukan mood weekend gua. Segitu aja kali ya, makasih yg udh baca sampe bawah hehe. Have a nice life semuanya.'
    ],
    email: 'rofan99@gmail.com',
    motto: 'Love others as love yourself',
    nama: 'Muhammad Romiz Rofan Hakim',
    nick: 'Rofan',
    phone: '081295969168',
    sma: 'SMAN 34 Jakarta',
    ttl: 'Jakarta, 21 Mei 1999'
  },
  '622': {
    cerita: [
      'Penyuka warna pink, dan kucing tapi gadibolehin miara kucing. Kebanyakan barangnya warna pink. Biasa terlihat dengan krudung parisnya dan biasanya suka ngasih saran gajelas. Suka bangun kesiangan. Suka bikin kerajinan tangan. Hobinya jalan-jalan sama dengerin musik.'
    ],
    email: 'nisrinous@gmail.com',
    motto: 'When no one believes in you, you know you can believe in yourself',
    nama: 'Nur Nisrina Ningrum',
    nick: 'Inos',
    phone: '089601438752',
    sma: 'SMAN 2 Depok',
    ttl: 'Jakarta, 26 November 1998'
  },
  '623': {
    cerita: [
      'Gue sebenernya lahir di Jakarta, tapi sejak 3 SD gue pindah ke Medan. Hobi gue adalah musik. Gue paling suka belajar alat musik baru. Gue dari mulai SMA memang udah suka bidang IT sih, kadang-kadang suka ngoding sendiri. Semua pilihan ptn gue berhubungan dengan IT. Gue dapet ilkom pilihan 2 sih, tapi gue sama sekali ga nyesel.'
    ],
    email: 'paliopanggabean@gmail.com',
    motto: 'Tak perlu bilang kita hebat, buktikan!',
    nama: 'Palito',
    nick: 'Palito',
    phone: '081375585984',
    sma: 'SMA St Thomas 1 Medan',
    ttl: 'Jakarta, 20 September 1999'
  },
  '624': {
    cerita: [
      'suka jalan-jalan tapi mager at the same time. playlist gue lagi dipenuhi sama lagu-lagu ed sheeran, the kooks, dan banda neira. tertarik di sinematografi dan suka bikin kue. suka banget sushi dan frozen yogurt'
    ],
    email: 'puribirowo@yahoo.com',
    motto: 'Turn your wounds into wisdom',
    nama: 'Putri Kinanti Ramadhani Birowo',
    nick: 'Puri',
    phone: '081230573208',
    sma: 'SMAN 8 Jakarta',
    ttl: 'Jakarta, 22 Desember 1998'
  },
  '625': {
    cerita: [
      'Halo kenalin gue Rachel. Gua masuk sistem informasi karna gatau lg mau masuk kemana wkwk, tp gua suka kok disini(terbullshit 2k17). btw banyak yg ngira rambut gua di catok pdhl sisiran aja gapernah:)) suka bgt coba hal baruu dan suka spam di snapgram so sorry lol'
    ],
    email: 'theresia.rachel99@gmail.com',
    motto: 'endless opportunity',
    nama: 'Rachel Larasati Krisdharmanto',
    nick: 'Rachel',
    phone: '085695471103',
    sma: 'SMAN 2 Cibinong',
    ttl: 'Bandung, 2 Agustus 1999'
  },
  '626': {
    cerita: [
      'SGFsbyBzZW11YSEgS2VuYWxpbiwgbmFtYSBndWUgRGlzdHJhIChidWthbiBEaWpza3RyYSkgOiguIEd1ZSBhZGFsYWggb3JhbmcgeWFuZyBzYW5nYXQgYW1hdCB0aWRhayBqZWxhcyBoZWhl',
      'QW55d2F5LCBndWUgc2FuZ2F0IGJhbmdnYSBtZW5qYWRpIGJhZ2lhbiBkYXJpIGtlbHVhcmdhIGZhc2lsa29tIHlhbmcgcGVudWggZGVuZ2FuIG9yYW5nLW9yYW5nIGx1YXIgYmlhc2EgZGFuIG1lbXB1bnlhaSByYXNhIGluZ2luIHRhdSBkYW4gZGVkaWthc2kgdGluZ2dpLiBTYWxhaCBzYXR1bnlhIGFkYWxhaCBrYW11IHlhbmcgbWF1IG5nZWRlY29kZSB0dWxpc2FuIGluaSA6Jyk='
    ],
    email: 'ramadistra@gmail.com',
    motto: 'Done is better than perfect',
    nama: 'Raihan Ramadistra Pratama',
    nick: 'Distra',
    phone: '0818992499',
    sma: 'SMAN 26 Jakarta',
    ttl: 'Jakarta, 31 Agustus 1999'
  },
  '627': {
    cerita: [
      'Haloo... kenalin nama gua Pradipta, biasa dipanggil dipta.',
      'Oh iya, gua orangnya santai, jadi nggak membawa ribet suatu hal, dibawa enjoy aja, dan gua juga suka banget sama makanan yang pedas',
      'Alasan gua masuk fasilkom ini, awalnya iseng aja, dan mau cari suasana baru, setelah bertahun tahun nggak pernah "keluar" Bogor',
      'dan gua berharap suatu hari nanti, impian yang telah gua miliki akan tercapai selama gua menjalani studi di sini'
    ],
    email: 'rd.pradipta@gmail.com',
    motto: ' ',
    nama: 'Rd Pradipta Gitaya Samiadji',
    nick: 'Dipta / Dipsi / Pradipta',
    phone: '081218466075',
    sma: 'SMAN 1 Cileungsi',
    ttl: 'Bogor, 24 Januari 1997'
  },
  '628': {
    cerita: [
      'Namaku reynaldo wijaya hendry,  biasa dipanggil ganteng.  Aku berasal dari Batam,  ya Batam, pasti satu kata terngiang di pikiran kalian,  yaitu black market,  itu 2 kata sih tapi ya sudahlah. Walau aku berasal dari batam,  aku ga menerima tawaran buat nitip beli barang BM ke kalian. Kalo hobiku sih,  sama dengan kebanyakan orang yaitu makan. Makan hati sih lebih tepatnya :(.'
    ],
    email: 'wijayareynaldo@gmail.com',
    motto: 'Naruto mengajarkan kita untuk tidak pernah menyerah',
    nama: 'Reynaldo Wijaya Hendry',
    nick: 'Rey/Reyn',
    phone: '082169759303',
    sma: 'SMAS Maitreyawira Batam',
    ttl: 'Batam,5 November 1999'
  },
  '629': {
    cerita: [
      'haloo nama gue salsabila maurizka biasa dipinggil chaca. Hobi gue gambar, gajago ya cuma hobi :( gue suka bgt desain, mulai dari desain baju sampe desain interior gitu, asal bukan desain web hehe. gue juga suka biologi dan benci bgt sama fisika eh malah masuknya fasilkom :(. sering dibilang beler sama temen-temen karena ngantukan dan matanya emg segaris :('
    ],
    email: 'salsabilamaurizka57@gmail.com',
    motto: 'Dia lebih pandai dari kamu, maka belajarlah lebih giat',
    nama: 'Salsabila Maurizka',
    nick: 'Chaca',
    phone: '087732605066',
    sma: 'SMA N 1 Purworejo',
    ttl: 'Karanganyar, 14 April 2000'
  },
  '630': {
    cerita: [
      "Haiii nama gua Shais, gua orangnya ga bisa diem, makan mlu tpi badan gua kurus, selalu rutin olahraga, laper mata kalo liat barang lucu, sometimes suka moodyan, awalnya gua takut masuk fasilkom karna 'katanya' susah tapi kekeluargaan di fasilkom bagus bgt, kalo gua ada kesulitan byk yg bantuin."
    ],
    email: 'shafiraishlah51@gmail.com',
    motto: 'Think as big as galaxy and act now',
    nama: 'Shafira Ishlah Nurulita',
    nick: 'Shais',
    phone: '081288555620',
    sma: 'SMAN 33 Jakarta',
    ttl: 'Jakarta, 5 Januari 2000*'
  },
  '631': {
    cerita: [
      'Hai gue shania. Emang dari dulu sebenernya panggilan gue shania. Tp sejak gue masuk pacil jadinya dipanggil moana gara2 rani. Padahal gak mirip. Gue gajelas jadinya gabisa ngedeskripsiin diri sendiri he'
    ],
    email: 'shanianabilah@gmail.com',
    motto: 'Keep moving forward',
    nama: 'Shania Nabilah',
    nick: 'Shania',
    phone: '087782389350',
    sma: 'SMA Islam Al Azhar 1',
    ttl: 'Jakarta, 9 Juli 1999'
  },
  '632': {
    cerita: [
      'Halo saya kusuman. Ilkom 2017. Masuk fasilkom karena saya yakin bisa membantu saya menggapai cita cita, saya juga bertemu beberapa teman baru disini yang tentunya menginspirasi saya untuk belajar lebih banyak.'
    ],
    email: 'steveneven.33@gmail.com',
    motto: 'Hard work and dedication',
    nama: 'Steven Kusuman',
    nick: 'Steven/Man/Kus',
    phone: '081239070316',
    sma: 'SMAN 4 Denpasar',
    ttl: 'Denpasar, 14 Februari 1999'
  },
  '633': {
    cerita: ['saya suka tidur, saya suka taichan, nio ngefans sama saya'],
    email: 'taliza_ayu@yahoo.com',
    motto: 'Be who i want to be, not what others want to see',
    nama: 'Taliza Ayu Dwiputritaufik',
    nick: 'Ayu',
    phone: '082179433818',
    sma: 'SMAN 68 Jakarta',
    ttl: 'Jakarta, 31 Januari 2000'
  },
  '634': {
    cerita: [
      'Halo, saya Sidiq. Terima kasih sudah membaca ^_^',
      'Saya berasal dari negeri antah berantah (Soppeng. Pernah dengar? Nggak? Cupuu). Saya orangnya biasa aja, biasa. Biasa.'
    ],
    email: 'sidiqusman13@gmail.com',
    motto: 'Tidak ada kata terlambat untuk meraih kesuksesan',
    nama: 'Usman Sidiq',
    nick: 'Sidiq',
    phone: '085299366478',
    sma: 'SMA Negeri 1 Liliriaja',
    ttl: 'Citta, 13 Februari 1997'
  },
  '635': {
    cerita: [
      'Dari dulu pengen banget masuk UI, tapi bingung fakultas apa. Akhirnya minat ke fasilkom, tapi bingung jurusan apa. Akhirnya nyoba ke SI, eh keterima. Ya semoga berkah deh.'
    ],
    email: 'windu.andira@gmail.com',
    motto: 'Siapa yang bersabar akan beruntung',
    nama: 'Windu Andira',
    nick: 'Windu',
    phone: '085217901544',
    sma: 'SMAN 2 Depok',
    ttl: 'Jakarta, 3 Februari 1999'
  },
  '636': {
    cerita: [
      'Nama gua Yaumi Alfadha, gua dari SMAN 38 Jakarta. Temen- temen gua sering manggil gua Yaumi atau Cumi. Hobby gua bermain, bermain semua permainan yang gua mainin.  Sejak gua lahir gua pingin banget masuk Fasilkom UI dan akhirnya sekarang gua bisa masuk jadi bagian keluarga Fasilkom UI angkatan Tarung. Awal masuk Fasilkom sebagai mahasiswa baru, kita melalui kegiatan yang menyenangkan yaitu PMB. Dengan PMB gua terwadahi untuk bisa mengenali Fasilkom dan semua elemen Fasilkom.'
    ],
    email: 'yaumialfadha28@gmail.com',
    motto: "Khoirunnasi anfa'uhum linnas",
    nama: 'Yaumi Alfadha',
    nick: 'Yaumi',
    phone: '087785425095',
    sma: 'SMAN 38 Jakarta',
    ttl: 'Jakarta, 28 maret 1999'
  },
  '637': {
    cerita: [
      'Nama gw Yosua. Gw suka membaca, menyanyi, main alat musik, main game, dll. Gw masuk Fasilkom karena gw suka dengan pemrograman. Gw beruntung masuk UI karena rahmat dari Tuhan serta dukungan dari Orang-orang yang benar-benar sayang padaku. ',
    ],
    email: 'yosua1010101@gmail.com',
    motto: 'Be Yourself and Happy',
    nama: 'Yosua Krisnando Bagaskara',
    nick: 'Yosua',
    phone: '081282313923',
    sma: 'SMA Tarsisius Vireta',
    ttl: 'Tangerang, 16 Desember 1998'
  },
  '701': {
    cerita: [
      'Nama gua rae gua tuh orangnya baik hobi gua tuh ngebucin 24/7 x 365 dan gua demen gak makan. Alasan gua masuk pacil Biar bisa makan sate pacil tiap hari'
    ],
    email: 'anugrah.raesa@gmail.com',
    motto: 'Evergrowing',
    nama: 'Aghni Anugrah Raesa',
    nick: 'Rae',
    phone: '08111000370',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 15 Juni 1999'
  },
  '702': {
    cerita: [
      'Halo semua! Kenalin nama gw Agnes. Pecicilan, ga jelas, dan selalu bahagia udah jadi panggilan gue sehari-hari. Gw sih sadar diri kalu pecicilan, tapi kalo sola ga jelas gw sih ga setuju, soalnya gw merasa deskripsi diri ini yang gw buat ga jelas sih. Babay guys, semoga kita bisa mengenal lebih deket selama 4 tahun kedepan.'
    ],
    email: 'theresiagneshandoko@gmail.com',
    motto: 'the perfect time to start never arrives',
    nama: 'Agnes Handoko',
    nick: 'Agnes',
    phone: '081286127245',
    sma: 'SMA Santa Ursula',
    ttl: 'Yogyakarta, 11 Agustus 1999'
  },
  '703': {
    cerita: [
      'Nama gw Alfian Fuadi Rafli. Gw biasa dipanggil Alfura. Gw dulu pinginnya masuk STEI ITB. Gara-gara gw dapet tawaran masuk Fasilkom UI lewat jalur samping, akirnya gw mulai bingung milih Fasilkom atau STEI. Karena ada kabar burung kalau SNMPTN nya daftar univ lain selain UI, jalur sampingnya dicabut gan. Akhirnya gw memutuskan masuk Fasilkom gan.'
    ],
    email: 'alfianfuadi17@gmail.com',
    motto: 'Bersama kesulitan ada kemudahan',
    nama: 'Alfian Fuadi Rafli',
    nick: 'Alfian',
    phone: '082323779646',
    sma: 'SMAN SBBS',
    ttl: 'Surabaya, 17 November 1999'
  },
  '704': {
    cerita: [
      'Nama saya Alif Mahardhika, biasa dipanggil Alif, Lif, Al, Lip dll gatau kenapa tapi yaudah. Saya bertempat tinggal disuatu lokasi yang kalau dilihat di Google Maps bernama DIBAWAH LIPATAN PERUT iya dicapslock semua. Hobi saya bermain dan belajar gadeng main doang tapi mesti belajar juga gimana dong. Saya suka bermain musik yay, suka juga olahraga tapi sering mager. Saya punya band akun instagramnya @amaderaofficial tolong difollow ok makasih ig saya juga ya @alifmahardhika. Motivasi saya masuk Fasilkom adalah karena alhamdulillah dapet lewat PPKB gatau kenapa kok bisa terus bayarnya lumayan mahal jadi saya harus terus termotivasi untuk belajar dengan baik dan benar. Harapan saya dalam menjadi mahasiswa Fasilkom adalah supaya dapat mengamnbil ilmu sebanyak-banyaknya supaya dapat memulai karir pekerjaan dalam bidang terkait dengan baik. Btw saya mahasiswa Sistem Informasi, beragama Islam, anak pertama dari dua lahir 15 September 1999 horoskopnya virgo. Keluarga saya sederhana namun inshaAllah bahagia amin yaAllah. Saya mau masuk surga dan gamau masuk neraka doain ya amin. Dahya cape men panjang gacapesih tapi ya gpp. Semooga tarung makin solid tidak sukdir terus lulus bareng tepat waktu atau lebih awal dengan IPK yang memuaskan lalu pas lulus udah pada dapet calon jodoh amin yaAllah.'
    ],
    email: 'alifmahar@gmail.com',
    motto: 'Work smart, play responsibly',
    nama: 'Alif Mahardhika',
    nick: 'Alif ',
    phone: '085719570100',
    sma: 'SMAN 1 Depok',
    ttl: 'Jakarta, 15 September 1999'
  },
  '705': {
    cerita: [
      'Halo nama gue Kayza. Alasan gue masuk fasilkom sebenernya gak sengaja, karena pas ppkb chance masuk SI tuh lumayan gede jadi gue milih SI, sebenernya pengen TI, tapi pas masuk SI ternyata.. okeoke aja. hobi gue nonton film dan nonton drama korea. makanan favorite gue di fasilkom adalah chicken katsu blackpeppernya mas jep, minumnya milkshake coffee itu terenak.'
    ],
    email: 'akayza16@gmail.com',
    motto: 'Usaha tidak akan mengkhianati hasil',
    nama: 'Annisa Kayza Adisti',
    nick: 'Kayza',
    phone: '087786661845',
    sma: 'SMAN 47 Jakarta',
    ttl: 'Jakarta, 16 November 1999'
  },
  '706': {
    cerita: [
      'Nama gue azhar..... gue anak bekasi anjay, Gue anak hits, gue anak nongki... biasa nongkrong kalo nggak di GI di PIM sori2 aja nggak level gue sama tongkrongan kutek..,  gue anaknya sans .., prinsip hidup gue kayak moto chitato : "LIVE IS NEVER FLAT" , fashion style gue hiphop, gue lexsugar,  alasan gue masuk fasilkom karena fasilkom anak2nya pintar2 tak seperti kids jaman now yang head-nya minta disleding.'
    ],
    email: 'aazhard8@gmail.com',
    motto: 'be good be confident',
    nama: 'Azhar Difa Arnanda',
    nick: 'azhar',
    phone: '081395320715',
    sma: 'SMAS PU Albayan Sukabumi',
    ttl: 'jakarta,22 september 1999'
  },
  '707': {
    cerita: [
      'dulu kls 11 gue pengen masuk fkg tapi gue nyadar kl gue ga tahan apalan banyak2 kyk biologi gitu. jd gue cari alternatif lain, dapet deh SI. awalnya milih fasilkom soalnya pengen punya startup wkwk doain aja kesampean. gue itu orgnya moody-an. kalo lg pengen bawel ya bawel, kalo pengen diem ya bener2 diem. hobi gue dengerin musik sama nonton. gue juga bisa main musik (piano) tapi udah lama gak main lagi wkwk. makanan kesukaan gue pizza sama nasi padang?? kalo udah lulus gue punya keinginan buat kerja dan tinggal di luar negeri, pengennya sih jepang hehe aminnn.'
    ],
    email: 'azzahraputri05@gmail.com',
    motto: "If it doesn't challenge you, it won't change you",
    nama: 'Azzahra Putri Ramadhanty',
    nick: 'Zahra',
    phone: '0811997442',
    sma: 'SMAN 3 Depok',
    ttl: 'Jakarta, 5 Januari 1999'
  },
  '708': {
    cerita: [
      'Waktu SMA dulu gue dipanggilnya chelsy. Entah kenapa di fasilkom gue dipanggil cici ! :) gue dikenal temen-temen gue cipe (cina pelit) padahal gue cuman koleksi kupon biar lebih "hemat" doang sebagai anak kos. Kalau belum kenal + baru pertama kali lihat gue, semua orang bilang muka gue jutek ngeselin tapi sebenernya enggak kok. Kalau gue uda ketawa, ketawanya kenceng bet! ',
    ],
    email: 'work.chelsylifardy@gmail.com',
    motto: 'Mazmur 121:2',
    nama: 'Chelsy Lifardy',
    nick: 'Chelsy',
    phone: '083896328505',
    sma: 'SMAK 6 PENABUR',
    ttl: 'Singkawang, 24 September 1998'
  },
  '709': {
    cerita: [
      'Jadii, yg identik dengan saya adalah telat. Telat tidur, telat bangun, telat ngerjain pmb, telat mengungkapkan rasa, telat peka, sampe telat now to say sorry(JB). Oke, sori, garing. Tapi gua gak akan menyerah hingga gua bisa telaten ngodingnya, telatih keorganisasiannya, dan telatul keuangannya. Moga tarung sukses semua Amin',
    ],
    email: 'edwsibr@gmail.com',
    motto: 'I set my own limit',
    nama: 'Edward Partogi Gembira Abyatar',
    nick: 'Edward',
    phone: '081586154075',
    sma: 'SMAN 81 Jakarta',
    ttl: 'Jakarta, 29 September 1999'
  },
  '710': {
    cerita: [
      'Part time mahasiswa dan full time tukang makan. suka edm tapi jarang dengerin lagu. gasuka ngoding tapi sering (terpaksa) ngoding.'
    ],
    email: 'fakhiradevina@yahoo.com',
    motto: 'Terus berbuat kebaikan untuk sesama',
    nama: 'Fakhira Devina',
    nick: 'Hira',
    phone: '087884483720',
    sma: 'SMAN 2 Depok',
    ttl: 'Jakarta, 12 April 1999'
  },
  '711': {
    cerita: [
      'Lahir di Jakarta pada tanggal 23 bulan 6 tahun 99. Hobi banget nonton drakor dan baca novel. Suka nasi goreng dan suka warna ungu. kadang berisik kadang pendiem. Sulit bercandain orang karena takut bikin tersinggung:(. Gampang bgt ngedown wkwkwk. ',
      'Semoga bisa bertahan sampe akhir bareng2 sama Tarung:)'
    ],
    email: 'feliarisky23@gmail.com',
    motto: 'Siapa yang bersungguh-sungguh pasti akan berhasil',
    nama: 'Felia Risky Faizal',
    nick: 'Felia',
    phone: '087738332888',
    sma: 'SMAN 1 Jakarta',
    ttl: 'Jakarta, 23 Juni 1999'
  },
  '712': {
    cerita: [
      'Nama saya Grahana Daffa Herlambang biasa dipanggi Daffa. Tapi karena daffa di tarung ada banyak, yaudh gapapa. Saya lahir di Yogyakarta, 11 Agustus 1999. Saya lahir dan dibesarkan di keluarga yang sederhana huhu tapi alhamdulillah berkecukupan yey.&nbsp; Saya berasal dari sman 2 tangerang selatan. Motivasi saya untuk masuk fasilkom bahwa saya melihat secercah peluang yang terang di masa depan terhadap perkembangan dunia digital. Asik. Saya percaya, dengan masuk fasilkom saya dapat berkembang menjadi orang yang lebih baik sehingga bermanfaat bagi nusa dan bangsa terutama di bidang sistem informasi. Asik. Semoga kita semua angkatan 2017 dapat menjadi angkatan yang kompak dan solid serta sukses bersama di masa depan. Asik. Makasih yang udah baca love u all :))',
    ],
    email: 'grahanadaffa1@gmail.com',
    motto: 'Berbuat baik, maka kebaikan akan menghampirimu',
    nama: 'Grahana Daffa Herlambang',
    nick: 'Daffa',
    phone: '085945406180',
    sma: 'SMAN 2 Tangerang Selatan',
    ttl: 'Yogyakarta, 11 Agustus 1999'
  },
  '714': {
    cerita: [
      'Gua Hermawan Wibisana Arifin, hobi gua main basket and main dota. Gua masuk fasilkom karena mental dari pilihan pertama??jujur aja gua gaada niatan masuk fasilkom samsek wkwk. Dulu gua pengen banget masuk teknik mesin ui. Udah ampe janjian ama temen. Tiap hari belajar sbm sama temen itu. Btw gua baru belajar buat sbm 2 minggu sebelum sbm wkwk. Mungkin karena kurang belajar jadi mental dari mesin:\') gua milih sistem informasi buat jadi pilihan kedua gua. Kenapa? Karena passing grade SI lebih rendah daripada mesin dan prospek kerjanya banyak. Pas kelar sbm udah seneng seneng kan tuh ama temen. Soalnya bisa ngerjain lumayan banyak. Udah ngomong "fix mesin sih" eh pas pengumuman Allah Swt. Berkehendak lain:\') jadilah gua masuk ke fasilkom. Yaudah lah ya gua berusaha mencintai fasilkom aja (love) kalo mau sbm lagi tahun depan udah males belajar lagi coy males mabim juga wkwk.',
    ],
    email: 'hermawanwibisanaarifin@yahoo.co.id',
    motto: 'No struggle no progress',
    nama: 'Hermawan Wibisana Arifin',
    nick: 'Hermawan',
    phone: '087786536913',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 26 Mei 1999'
  },
  '715': {
    cerita: ['Bangun,mandi,makan,belajar,ngumpul,olahraga,tidur'],
    email: 'idrisyoga23@gmail.com',
    motto: 'Jalanin aja dulu',
    nama: 'Idris Yoga Pratama',
    nick: 'Idris',
    phone: '081213535936',
    sma: 'SMAN 68 Jakarta',
    ttl: 'Jakarta, 23 September 1999'
  },
  '716': {
    cerita: [
      'jadi gua tuh dari dulu emang mau fasilkom dan alhamdulillah gua hoki masih bisa keterima lewat jalur PPKB. gua udah terfikir cita - cita gua bakal ngapain aja waktu udah kerja nanti. gua kira fasilkom tuh gampang, eh ternyata ga segampang itu. banyak tekanan yang ada di fasilkom tapi banyak juga yang tekanannya menuju kearah positif misalnya untuk belajar lebih baik lagi dll. teman - teman di fasilkom juga cukup asik dan gua pun udah suka di fasilkom hehe.',
    ],
    email: 'muhammadalbr@gmail.com',
    motto: 'awali dengan bismillah',
    nama: 'Mohammad Hasan Albar',
    nick: 'muhammad',
    phone: '085887557275',
    sma: 'SMAN 34 Jakarta',
    ttl: 'jakarta, 28 Juli 1999'
  },
  '717': {
    cerita: [
      'saya biasa dipanggil aab, terkadang aab_ccd. di fasilkom ada yang namanya mirip dengan saya, jangan tertukar. saya muhamad abdurahman dengan tanpa ada huruf dobel. hampir semua akun saya bernama aabccd021. saya lahir tanggal 21. kartu tarot no.21 adalah The World.',
    ],
    email: 'aabccd021@gmail.com',
    motto: 'Hidup flexibel tanpa motto',
    nama: 'Muhamad Abdurahman',
    nick: 'Aab',
    phone: '085221581840',
    sma: 'SMAN 2 Bandung',
    ttl: 'Malang, 21 Februari 1998'
  },
  '718': {
    cerita: [
      'nama gua muhamad istiady kartadibrata biasa dipanggil ady atau adykarta. gua anak tangsel yang tinggal di bintaro. hobi gua olahraga apapun atau jalan jalan sendirian kemana aja. gua suka banget sama warna hitam dan biru. minuman favorit gua adalah dancow oreo yang vanilla yang dijual di kansas harganya 7k. gua suka banget makan indomie karna indomie murah. alasan gua masuk fasilkom awalnya sih gua bingung mau masuk mana, tapi gua tau kalo it itu bakal terus berkembang dan gua ingin mahir dan ikut serta dalam mengembangkan itu.',
    ],
    email: 'ady.istiady@yahoo.com',
    motto: 'Simple Is Good',
    nama: 'Muhamad Istiady Kartadibrata',
    nick: 'Adykarta',
    phone: '081317250076',
    sma: 'SMA Labschool Kebayoran',
    ttl: 'Tangerang, 9 Oktober 1998'
  },
  '719': {
    cerita:['Muhammad Adipashya Yarzuq , alasan gue masuk Fasilkom itu krn udah cita2 gue dari dulu , gue suka banget sama netsos. Gue juga suka banget starwars , gue main dota , hearthstone , dan battlefront II. Suka banget juga sama hal hal yang keren terutama magic ! terakhir dari gue : dont blink if you dont want to miss a thing.'],
    email: 'Adipashya17@yahoo.com',
    motto: 'Winners find a way, Losers find an excuse',
    nama: 'Muhammad Adipashya Yarzuq',
    nick: 'Pashya',
    phone: '081213033630',
    sma: 'SMAN 71 Jakarta',
    ttl: 'Jakarta, 17 September 1999'
  },
  '720': {
    cerita: [
      'Nama gue alka, jadi gue tipe orang yang rada susah buat fokus ke satu hal. Gue juga kadang suka lama buat ambil keputusan. Gue suka belajar hal-hal baru. Gua suka olahraga dan alat musik walaupun ga terlalu jago.'
    ],
    email: 'alkautsarm@gmail.com',
    motto: 'Man Jadda Wa Jada, Man Shabara Zhafira, Man Sara ala Darbi Washala',
    nama: 'Muhammad Al-Kautsar Maktub',
    nick: 'Alka',
    phone: '082280562032',
    sma: 'SMAN 9 Bandar Lampung',
    ttl: 'Bandar Lampung, 18 Januari 1999'
  },
  '721': {
    cerita: [
      'Nama gua Muhammad Fachry Nataprawira, gua biasa di panggil Nata, gua lahir 15 September 1998. Hobby gua baca buku entah itu novel atau nonfiksi. Gua adalah coffee freak, hidup gua gabisa lepas dari yang namanya kopi. Gua bercita-cita menggeluti bidang Cyber Security kalo ga kesampean ya paling engga punya kedai kopi sendiri.'
    ],
    email: 'nataprawiraf@gmail.com',
    motto: 'Believe in limitless possibilities',
    nama: 'Muhammad Fachry Nataprawira',
    nick: 'Nata',
    phone: '08170291509',
    sma: 'SMAN 1 CIanjur',
    ttl: 'Cianjur, 15 September 1998'
  },
  '722': {
    cerita: [
      'nama gue Muhammad Fathriza Zakeeffa Kusuma biasa dipanggil riza. gue anak bontot alias anak terakhir, hobi gue adalah main ps dan futsal. Gue orangnya receh bgt, gampang ketawa. alesan masuk fasilkom karena fakultas paling keren di UI',
    ],
    email: 'rkusumaa@yahoo.com',
    motto: 'Pantang menyerah',
    nama: 'Muhammad Fathriza Zakeeffa Kusuma',
    nick: 'Riza',
    phone: '081296182013',
    sma: 'SMA Garuda Cendekia',
    ttl: 'Jakarta, 9 Oktober 2000'
  },
  '723': {
    cerita: [
      'Dulu hobi saya main games, sekarang hobi saya ngoding, terima kasih Fasilkom.'
    ],
    email: 'muhamadilmannafian@gmail.com',
    motto: 'Strive for perfection',
    nama: 'Muhamad Ilman Nafian',
    nick: 'Ilman',
    phone: '087887029025',
    sma: 'SMA Negeri 1 Depok',
    ttl: 'Jakarta, 16 April 1999'
  },
  '724': {
    cerita:["hello, perkenalkan nama aku Muhammad Rafii' Abiyyu, bisa dipanggil Rafi. Aku dari Riau ('woohoo beda surang'), aku dari SMA Cendana Mandau ('Bisa cari di Google'). hobi aku adalah Film making dan main basket, dah iru aja deskripsi diri"],
    email: 'rafii.abiyyu@gmail.com',
    motto: 'Live your life to the fullest',
    nama: "Muhammad Rafii' Abiyyu",
    nick: 'Rafi',
    phone: '082174128229',
    sma: 'SMAS Cendana Duri',
    ttl: 'Duri, 15 November 1999'
  },
  '725': {
    cerita:['Haloo, nama gua Anditama, biasa dipanggil Andi. Hobi gua main game, biasanya online. Paling demen main PUBG yg lagi hot bener. Kenapa gua milih Fasilkom karena gua suka hal hal yang berbau komputer. Terus kenapa gua milih SI karena gua sadar skill coding gua masih ketinggalan dari yang lain dan gua merasa perlu belajar manajemen dan sejenisnya.'],
    email: 'rizkind@gmail.com',
    motto: 'Lakukan apa yang menurutmu benar',
    nama: 'Muhammad Rizky Anditama',
    nick: 'Andi',
    phone: '08111981584',
    sma: 'SMAS Labschool Rawamangun',
    ttl: 'Bekasi, 17 Juli 1998'
  },
  '726': {
    cerita: [
      'Pendiam dan introvert. Cukup jayus. Dari sekeluarga, satu-satunya yang diterima di UI lewat jalur tulis. Suka banget desain grafis. Cukup sering bingung mau desain apa, sehingga pernah desain kartu ultah buat gua sendiri (Don\'t judge). Boleh kali follow ig @myusufharahap',
    ],
    email: 'yusuf_digital@yahoo.com',
    motto: 'Hope for the best, plan for the worst.',
    nama: 'Muhammad Yusuf Harahap',
    nick: 'Yusuf',
    phone: '081283498044',
    sma: 'SMAIT Nurul Fikri Depok',
    ttl: 'Jakarta, 20 Maret 1999'
  },
  '727': {
    cerita: [
      'Hai guys. Nama gue Mutia. Gue orangnya dulu pendiam. ????laugh??Sekarang masih mencari jati diri yg sebenarnya. Gue sebenarnya pengen masuk STEI, tapi gue seneng kenal kalian. Semoga kita bisa sukses bareng ya guys. Semangat Tarung!!'
    ],
    email: 'mutia.husnarahmatun@gmail.com',
    motto: 'Proses tidak pernah mengkhianati hasil',
    nama: 'Mutia Rahmatun Husna',
    nick: 'Mutia',
    phone: '082260916204',
    sma: 'SMA Unggulan CT Foundation',
    ttl: 'Paya Bengkuang, 19 Juli 2000'
  },
  '728': {
    cerita: [
      'nama gue rafika putri balqis dari kelompok 7 nih (AD 28). biasa dipanggil rafika or somehow ada jg yang manggil pebe karna ig gue rafikapebe HEHE. gue dari sman 39 jkt. hobby gue jalan2, travelling, eksplor hal2 baru gt deh pokoknya wkwk. oiya gue dari SI nihh. alesan masuk fasilkom sbnrnya awalnya gamau krn mau soshum:( tp keterima ppkb nya di sini jd yaudahdeh. doain aja semoga survive yaa! hehe thankyouuuu!'
    ],
    email: 'rafikabalqis@ymail.com',
    motto:
      'Berbuat baiklah kepada siapapun niscaya kebaikan akan kembali padamu',
    nama: 'Rafika Putri Balqis',
    nick: 'Rafika',
    phone: '081293673834',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 20 Januari 1999'
  },
  '729': {
    cerita: [
      'Gw berasal dari Jakarta yang merantau ke luar kota, kab. Bogor dan kab.Sukabumi lebih tepatnya, untuk menggali ilmu pada masa smp dan sma. Ga banyak omong orangnya dan kurang dapat mengekspresikan diri, agak sulit untuk berbaur. Hobi olahraga dan baca komik.'
    ],
    email: 'reinaldy_rabbany@yahoo.com',
    motto:
      'Istighfar untuk masa lalu, bersyukur untuk hari ini, berdoa untuk masa depan',
    nama: 'Reinaldy Rabbany',
    nick: 'Aldy',
    phone: '081219116563',
    sma: 'SMAS PU Albayan Sukabumi',
    ttl: 'Bekasi, 22 Agustus 2000'
  },
  '730': {
    cerita: [
      'Saya adalah orang yang humoris, mandiri, pengertian, serta berjiwa sosial yang tinggi. Saya menyukai hal-hal yang baru dan unik. Maka dari itu saya memiliki rasa penasaran yang   tinggi dan tidak mudah menyerah.',
    ],
    email: 'ringgicahyo@gmail.com',
    motto:
      'Whenever you think you want to give up, just remember why you started.',
    nama: 'Ringgi Cahyo Dwiputra',
    nick: 'Ringgi',
    phone: '082261154662',
    sma: 'SMAN 34 Jakarta',
    ttl: 'Jakarta, 25 Februari 1999'
  },
  '731': {
    cerita: [
      'Aku Sage Muhammad Abdullah. Iya, "Sage" nama asliku. Bukan, bukan Sage Mode. Salam kenal!'
    ],
    email: 'sagemabd@gmail.com',
    motto: 'Sentio ergo sum',
    nama: 'Sage Muhammad Abdullah',
    nick: 'Sage',
    phone: '085775545190',
    sma: 'SMAN 48 Jakarta',
    ttl: 'Bogor, 09 Juni 1999'
  },
  '732': {
    cerita: [
      'Halo, nama saya sherren natasha dari jurusan SI. Alasan saya masuk fasilkom karena sejak kecil suka bermain komputer, dan saya tertarik untuk mempelajari cara membuat suatu program. Saya sangat bersyukur bisa masuk fasilkom ui, banyak ilmu yang bisa saya dapat di sini. Hobi saya adalah menggambar, cosplay, menonton anime, dan bermain game.'
    ],
    email: 'nsherren.brighton@gmail.com',
    motto: 'Nothing is impossible.',
    nama: 'Sherren Natasha Satyakarsa',
    nick: 'Sherren',
    phone: '081908866887',
    sma: 'SMAN 2 Depok',
    ttl: 'Jakarta, 12 Mei 1999'
  },
  '734': {
    cerita: [
      'Satu dari sekian banyak anak Tarung yang lahir di bulan Desember. Bahagia kalau dateng ke music festival tapi ga bisa main alat musik. Penikmat setia Banda Neira karena kita sama-sama suka hujan walau ujungnya ditinggal bubar :( Senang kalau kenal banyak orang baru walau sering dibilang sksd wkwk '
    ],
    email: 'rahayuay14@gmail.com',
    motto: 'Berjuang dengan penuh komitmen',
    nama: 'Tri Rahayu',
    nick: 'Ayu',
    phone: '081293482188',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 18 Desember 1998'
  },
  '736': {
    cerita: [
      'Nama saya William Gates. Saya lahir di Rantauprapat pada tanggal 31 Juli 1999. Hobi saya adalah browsing dan bermain game. Sebelumnya, saya bersekolah di SMA Swasta Buddhis Jayanti. Selama sekolah, saya tergolong orang yang cukup pemalas namun bertanggung jawab. Salah satu alasan saya memilih jurusan Ilmu Komputer adalah karena saya tertarik dengan hal-hal yang berhubungan dengan teknologi. Selain itu, saya juga berharap agar saya bisa bekerja di perusahaan IT nantinya dan membangun startup sendiri. Bidang yang paling saya minati yang berkaitan dengan IT adalah Virtual Reality Development, Network Security, dan Embedded System.'
    ],
    email: 'cx0@programmer.net',
    motto: 'It may not be easy, but it will worth it. ~Bill Gates',
    nama: 'William Gates',
    nick: 'Gates',
    phone: '085358057770',
    sma: 'SMAS Buddis Jayanti',
    ttl: 'Rantauprapat, 31 Juli 1999'
  },
  '737': {
    cerita: [
      'Saya seorang yang pemalas. Saya hobi tidur. Sering panik dan depresi.'
    ],
    email: 'yosafattri@gmail.com',
    motto: 'Perspektif itu terbatas, namun berharga',
    nama: 'Yosafat Tri Putra Brata',
    nick: 'Yos',
    phone: '081278058796',
    sma: 'SMAS Xaverius 1 Jambi',
    ttl: 're'
  },
  '801': {
    cerita: [
      'Di Tarung ada dua Adel, gw Adel yg ke-2. Catetan sejarah keusilan gw udah terukir dari bangku PAUD. Kewarasan yang gw miliki mulai memudar semenjak SD. Gw orang (kabupaten) Bekasi dan gw bangga tinggal di luar planet.'
    ],
    email: 'adeliaut21@gmail.com',
    motto: 'Sesudah kesulitan ada kemudahan',
    nama: 'Adelia Utami',
    nick: 'Adel',
    phone: '081285722718',
    sma: 'SMAN 1 Tambun Selatan',
    ttl: 'Jakarta, 21 Januari 2000'
  },
  '802': {
    cerita: [
      'Gue Adinda Raisha Hanief Hawari. Bisa dipanggil Dinda, tapi biasanya pada manggil Hawari. Gue suka nyanyi. Gue emang cita cita nya jadi entertainer tapi gue butuh pendidikan formal, jadi gue kuliah dulu hehe. Hal lain yg menjadi ciri khas gue adalah warna merah. Emang gue suka bgt sama warna merah jadi banyak barang2 gue yang berwarna merah. Gue masuk fasilkom nih bukan cuma untuk dapet pendidikan formal aja nih. Gue juga suka teknologi jadi gue tertarik masuk fasilkom.'
    ],
    email: 'adinda.raisha@yahoo.com',
    motto: 'Hope for the best and prepare for the worst',
    nama: 'Adinda Raisha Hanief Hawari',
    nick: 'Dinda / Dinhaw',
    phone: '087781103367',
    sma: 'SMAN 26 Jakarta',
    ttl: 'Jakarta, 14 September 1999'
  },
  '803': {
    cerita: [
      'Salah seorang gemini tapi gamau dicap punya sifat-sifat gemini. Paling seneng baca novel dan nonton film. Senang bisa berada di lingkungan kampus yang supportif.'
    ],
    email: 'adivareyhanptr@gmail.com',
    motto: 'Sincere is an invaluable wealth',
    nama: 'Adiva Reyhan Puteri',
    nick: 'Adiva',
    phone: '087883000166',
    sma: 'SMA Labschool Jakarta',
    ttl: 'Jakarta, 27 Mei 1999'
  },
  '804': {
    cerita: [
      'Halo nama gw Amal, gw suka main game. Gw jadi orang emang pendiem. Gw juga gampang lupa nama, jadi maaf banget ya kalo ge tiba2 lupa nama lu haha.'
    ],
    email: 'adiguna.amal@yahoo.com8',
    motto: 'Bekerja yang Keras',
    nama: 'Amal Adiguna',
    nick: 'Amal',
    phone: '085591027245',
    sma: 'SMAN 82',
    ttl: 'Jakarta, 29 April 1999'
  },
  '805': {
    cerita: [
      'Nama saya Ananda Daffa, biasa dipanggil Daffa walaupun di fasilkom banyak Daffa juga karena kagak enak kalo manggil saya ananda, Sabila, ataupun isliyana kan? Saya memiliki hobi bermain permainan dengan sistem gacha karena bisa melatih kesabaran saat mengumpulkan barang buat nge gacha atau bisa melatih kesabaran saya dapat gacha gacha yang ampas.',
    ],
    email: 'dafpool4@gmail.com',
    motto: 'Terus melangkah ke depan',
    nama: 'Ananda Daffa Sabila Isliyana',
    nick: 'Daffa',
    phone: '089618059782',
    sma: 'SMAI Al Azhar 4',
    ttl: 'Cirebon, 9 Oktober 1998'
  },
  '806': {
    cerita: [
      'Hai! Nama gua Anggis. Sebenernya, awalnya pengen masuk statistika atau matematika, tapi takdirnya disinii nih. Suka nulis puisi gitu de pokoknyaa!'
    ],
    email: 'angginistantifh@gmail.com',
    motto: 'Siapa yang bersungguh sungguh akan berhasil',
    nama: 'Angginistanti Fairuz Hanun',
    nick: 'Anggis',
    phone: '089686662095',
    sma: 'SMAN 38 Jakarta',
    ttl: 'Tanjung Redeb, 25 September 1999'
  },
  '807': {
    cerita: [
      'Pantun dulu ya! Ke UI naik kereta. Ngeliat yg terbang namanya capung. Kenalin nama gue aulia. Senang bertemu kalian tarung. Gue suka banget nyoba-nyoba sesuatu yang baru dan juga gue sering mudah merasa bosen. Untuk hal-hal yang menurut gue penting gua akan melakukannya secara totalitas. Gue suka banget me time, kalo ada waktu kosong pasti gue ke perpus melakukan hal-hal random. Gue sangat berterimakasih pada deadline  karena dia adalah satu-satunya hal yang bisa buat gue termotivasi. Gue juga punya ingatan yang ga panjang, sering kali lupa nama orang tapi inget muka, maafkan. Sekian!'
    ],
    email: 'auliaramadhani34@gmail.com',
    motto: 'Utamakan prioritas di setiap langkah',
    nama: 'Aulia Ramadhani',
    nick: 'Aulia',
    phone: '081905296495',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 3 Januari 1999'
  },
  '808': {
    cerita: [
      'Nama gw Bimo. Suka make nama astray. Karena artinya nyasar. Nyasar berarti masih mencari jalan buat sampe tujuan. Begitulah gw. Disini. Di fasilkom ini. Merasa sedikit salah jurusan karena niatnya mau mainan hardware, malah masuk ke yg overload codingannya. Ditemani 2 sahabat. Sablengnya sama. Gilanya sama. Gw hobi baca komik. DC khususnya. Penggemar batman. Dari full n52 kebaca. Ditambah dikit2 dari pre new 52. Currently sedang bersama seseorang. Orangnya cukup sabar menerima gw. Baik, pinter, dan manis. Semoga sukses untuk gw, dia, dan kalian semua. "Time goes on with or without you"',
    ],
    email: 'bimo.iman.smartadi@gmail.com',
    motto: 'Pain, You break me down, you build me up',
    nama: 'Bimo Iman Smartadi',
    nick: 'Bimo',
    phone: '08989221855',
    sma: 'SMAN 1 Tangerang',
    ttl: 'Tangerang,14 Desember 1998'
  },
  '809': {
    cerita: [
      'Nama  gw Daniel Anderson Estefan. Gw punya hobi main game.Itu juga salah satu alasan kenapa gw mau masuk fasilkom. Waktu awal kuliah,semua orang yang kenalan dengan gw bilang  kalo gw mirip Michael Sudirman. Dan ada juga yang punya nama depan yang sama kayak gw,yaitu Daniel Alfred. Sampe sekarang masih banyak orang yang ketuker antara gw sama Daniel Alfred.',
    ],
    email: 'andersondaniel@live.com',
    motto: 'Talk less, do more',
    nama: 'Daniel Anderson Estefan',
    nick: 'Daniel',
    phone: '087888131185',
    sma: 'SMA Santo Yakobus Jakarta',
    ttl: 'Jakarta, 31 Juli 1999'
  },
  '810': {
    cerita: [
      'Kenalin, nama gue Faiz Fadhillah Soemawilaga. Biasa dipanggil Faiz. Hobi gue adalah menonton film dan mendengarkan musik. Gue lahir di Jakarta pada tanggal 21 Oktober. Umur gue 18 tahun, tebak aja gue lahir tahun berapa :). Gue masuk Fasilkom di jurusan Sistem Informasi karena gue memiliki cita2 yaitu untuk menjadi seorang Entrepreneur yang sukses. Semoga di kedepannya cita2 gue dapat tercapai. Amiin :)',
    ],
    email: 'faiz.fadhillah@gmail.com',
    motto: 'Pantang menyerah dalam menghadapi tantangan',
    nama: 'Faiz Fadhillah Soemawilaga',
    nick: 'Faiz',
    phone: '08111832870',
    sma: 'SMAS Al Izhar Pondok Labu',
    ttl: 'Jakarta, 21 Oktober 1999'
  },
  '811': {
    cerita: [
      'Nama saya Febriananda Wida Pramudita. Nama panggilan saya : FwP, Febri, Nanda. Saya adalah manusia biasa. Kehidupan yang saya jalani berjalan seperti biasa. Apa lagi ya? XD',
    ],
    email: 'p.phebri@yahoo.com',
    motto: 'Fokus',
    nama: 'Febriananda Wida Pramudita',
    nick: 'FwP',
    phone: '083867465257',
    sma: 'SMA Taruna Nusantara',
    ttl: 'Magelang, 16 Februari 1999'
  },
  '812': {
    cerita: [
      'Gua Firdhan absen 812. Gua suka nonton anime sejak sd. Gua suka genre anime dan games yang action dan fantasi. Gua dari sidoarjo dan selalu ditanyain mengenai kabar lumpur lapindo. Gua hampir selalu makan sate sebelum mpktb.'
    ],
    email: 'tkpatzachf4@gmail.com',
    motto: 'No matter what happen, just do your best!',
    nama: 'Firdhan Hilmy Purnomo',
    nick: 'Firdhan',
    phone: '085733920148',
    sma: 'SMAN 1 Sidoarjo',
    ttl: 'Bekasi, 8 Desember 1998'
  },
  '813': {
    cerita: [
      'Pas di kuliah gue biasa dipanggil GPR. Masuk Fasilkom mungkin udah niatan dari pas SMP. Di Fasilkom, gue bertemu banyak teman-teman yang hebat, terutama menemukan teman yang sama wibunya kayak gue. Udah itu aja kayaknya.'
    ],
    email: 'gagahpangeran@gmail.com',
    motto: 'Pekerjaan berat jika tidak dikerjakan akan terasa lebih ringan',
    nama: 'Gagah Pangeran Rosfatiputra',
    nick: 'Gagah/GPR',
    phone: '082110197506',
    sma: 'SMAN 2 Jakarta',
    ttl: 'Jakarta, 29 Juli 2000'
  },
  '814': {
    cerita: [
      'Nama gw gde indra raditya nugraha,sekarang udah tau alasan kenapa gde doang itu karena keturunan.Gw pemain basket,futsal,badminton',
      'Tapi UKF basket doang,kontingen basket csui.Punya sodara di fasilkom dan seangkatan.Awal-awal sebelum masuk sini lewat snmptn ditikung oleh orang saat pemilihan jurusan snmptn.Nama gw mengandung 2 master di tarung.1 indra, dan 2 radit.',
    ],
    email: 'gde1indra@yahoo.co.id',
    motto: 'Kesabaran & Ketenangan = Kunci Sukses',
    nama: 'Gde Indra Raditya Nugraha',
    nick: 'Gde',
    phone: '081289869351',
    sma: 'SMAN 3 Depok',
    ttl: 'Jakarta, 7 Februari 1999'
  },
  '815': {
    cerita: [
      'Kalo di chat biasa gw dipanggil jorj karena nama gw terlalu ribet katanya kalo ditulis di chat. Gw orangnya gampang ngantuk jadi hobinya tidur, tapi gak pernah tidur di kelas :) alesan gw masuk fasilkom karena dari kecil suka hal-hal yang berhubungan sama komputer, makanya pas smp akhir udah pasang cita-cita pengen jadi programmer. Awal masuk fasilkom agak bingung sama coding karena belum punya basic sama sekali, tapi karena bantuan dari teman-teman Tarung gw masih bisa survive disini.'
    ],
    email: 'matthew.limongan@gmail.com',
    motto: 'Ora et labor',
    nama: 'George Matthew Limongan',
    nick: 'George',
    phone: '085711688686',
    sma: 'SMAK 1 Penabur Jakarta',
    ttl: 'Makassar, 17 Juli 1999'
  },
  '816': {
    cerita: [
      'Nama saya Gregorius Aprisunnea, lahir di Surabaya 10 April 1999. Saya suka belajar hal-hal baru dan menarik. Hobi saya adalah bermain dan berolah raga.',
    ],
    email: 'aprisunea@gmail.com',
    motto: 'Be excellent in faith and knowledge',
    nama: 'Gregorius Aprisunnea',
    nick: 'Greg',
    phone: '087875218858',
    sma: 'SMA St. Louis 1 Surabaya',
    ttl: 'Surabaya, 10 April 1999'
  },
  '817': {
    cerita: [
      'Halo nama gue Irfan Aziz Al-Amin, biasa dipanggil Ipan. Orang yang mungkin keriting dan bangga atas itu. Gue berasal dari kota kecil namun indah yaitu Boyolali, kota itu bertempat di daerah Jawa Tengah. Gue masuk fasilkom mungkin cuma gara-gara kating dari sekolah gue yang masuk fasilkom dan itu ada setiap tahun, walaupun bagi sekolah-sekolah di Jabodetabek itu biasa, namun bagi sekolah gue itu merupakan hal yang lumayan bergengsi. Singkat cerita gue masuk sini lewat jalur SBM, awalnya gue udah sangat optimis masuk jalur SNM karena di sekolah gue biasanya setiap 2 tahun sekali ada yang keterima SNM di fasilkom, dan saat gue lulus itu bertepatan dengan tahun hoki tersebut. Namun saat mulai pendaftaran SNM ada adek kelas gue yang dia akselerasi yang juga daftar di fasilkom lewat jalur SNM, dan diapun yang lolos, akhirnya gue masuk lewat jalur SBM. Namun bukan berarti kita berdua saling bermusuhan, kita disini saling bantu-membantu demi mewujudkan kota kita bangga kepada kita.'
    ],
    email: 'irfanaziz2929@gmail.com',
    motto: 'Utamakan Akhirat, Dunia Didapat',
    nama: 'Irfan Aziz Al Amin',
    nick: 'Ipan',
    phone: '085702694127',
    sma: 'SMAN 1 Boyolali',
    ttl: 'Boyolali, 09 Juni 1999'
  },
  '818': {
    cerita: [
      'Haiii gua Karina, orang pada bilang muka gua judes tapi gw friendly kok. Gua suka dengerin lagu dan nonton youtube. Gua suka banget ngemil minuman apapun. Gua juga orangnya laper mata makanya boros. Gua alergi coklat,  jadi jangan suruh gua beli danus piscok ya :(  ',
    ],
    email: 'karinaivanaginting@gmail.com',
    motto: 'Jangan takut dan lakukan sebisa mungkin',
    nama: 'Karina Ivana',
    nick: 'Karina',
    phone: '08997444793',
    sma: 'SMAN 12 Jakarta',
    ttl: 'Jakarta, 22 Mei 1999'
  },
  '819': {
    cerita: [
      'Asli jogja cuma gabisa ngomong bahasa jawa sama sekali, saya lahir di kota pelajar cuma seringkali kehilangan motivasi belajar. Karena kalau udah capek, pelarian saya kalau enggak ke novel, pasti nonton film. Saya suka genre sci-fi, fantasy atau comedy. Saya orangnya legowo, go with the flow, tetapi cepat panik. Selain itu, saya juga orangnya cepat puas dengan keadaan, hasilnya agak malas. Saya punya harapan agar bisa meminimalisir sifat malas saya agar bisa survive di Fasilkom. Saya juga punya harapan agar dapat berkontribusi untuk fasilkom selama saya menjadi mahasiswa dan seterusnya.'
    ],
    email: 'laila.saffanah@gmail.com',
    motto: 'Find a way or make one',
    nama: 'Laila Saffanah',
    nick: 'Laila',
    phone: '081382191911',
    sma: 'SMAN 78 Jakarta',
    ttl: 'Yogyakarta, 2 November 1999'
  },
  '820': {
    cerita: [
      'Perkenalkan! nama gua Millenio Ramadizsa biasa dipanggil Nio. Gua masuk fasilkom karena gua dari dulu suka sama komputer. Gua juga suka banget sama teknologi. Hobi gua nonton film sama serial tv. Film favorit gua itu film yang mikir dan sutradara favorit gua itu Christopher Nolan. Gua juga suka banget nonton serial tv mulai dari Stranger things, The flash sampe drama kaya Riverdale dan 13 Reasons Why. Tapi serial tv favorit gua itu How I Met Your Mother. Cita-cita gua itu gua pengen jadi orang yang berguna bagi orang lain. Gua belajar ngoding baru pas masuk fasilkom jadi mohon bantuanya ya teman-teman!'
    ],
    email: 'mille.rama17@gmail.com',
    motto: 'Knowledge is power but character is more',
    nama: 'Millenio Ramadizsa',
    nick: 'Nio',
    phone: '08561856633',
    sma: 'SMA Labschool Kebayoran',
    ttl: 'Solo, 5 Januari 1999'
  },
  '821': {
    cerita: [
      'Nama: Mochamad Naufal Dzulfikar',
      'Ciri-ciri: Menyukai anime, doyan main game, suka makan chicken katsu di pacil',
      'Kesan: Bangga dengan angkatan Tarung yang baik dan solid'
    ],
    email: 'naufaldzulfikar@gmail.com',
    motto: 'Terkadang, diam itu adalah emas',
    nama: 'Mochamad Naufal Dzulfikar',
    nick: 'Dzul',
    phone: '085780689449',
    sma: 'SMAS Al Azhar 4 Kemang Pratama',
    ttl: 'Jakarta, 28 April 1999'
  },
  '822': {
    cerita: [
      'Nama gua Azhar absen 822. Gua suka main game dota. Gua suka nonton film semua genre. Gua sbm keterima di ugm tapi dipaksa bokap masuk di ui. Gua suka ikut ekskul sinematografi. Gua orangnya pemalas. Tapi gua seneng baca buku.'
    ],
    email: 'azhar.marz@gmail.com',
    motto: 'Kalau MAU, pasti BISA',
    nama: 'Muhammad Azhar Rais Zulkarnain',
    nick: 'Azhar',
    phone: '081315991469',
    sma: 'MAN Insan Cendekia Serpong',
    ttl: 'Jakarta, 25 September 1998'
  },
  '823': {
    cerita: [
      'Haloo, gue Indra, gue suka coding karna menurut gue coding itu objektif, disaat program ga jalan maka sudah pasti salah orang nya. ',
      'gue orang yang sans sih sebenernya, gapunya target tinggi mau kerja sana sini atau lulus cepat atau apapun, gue melakukan hal hal yang memang gue suka aja, gue berprinsip bahwa hidup ini tuh mudah, asal bisa makan maka bisa hidup, jadi gausah dipersulit :D ',
      'oya gue cukup introvert, biasanya jam 6 sore keatas adalah waktu gue untuk kabur dari keramaian, jadi kalian bakal sangat jarang melihat gue malam masih dipacil hehe, dan tolong pengertianya.'
    ],
    email: 'mindrar96@gmail.com',
    motto: 'Future is created by what you do today not tomorrow',
    nama: 'Muhammad Indra Ramadhan',
    nick: 'Indra',
    phone: '087774261350',
    sma: 'SMAN 34 Jakarta',
    ttl: 'Jakarta, 12 Januari 1999'
  },
  '825': {
    cerita: [
      'Halo, kenalin aku Muhammad Ridho Ananda, panggil aja Ridho. Bingung juga mau ngedeskripsiin diri, hehe. Gaada hobi spesifik. Tapi paling suka ngerjain hal2 yang berhubungan sama logika sama baca kadang2. Agak pendiem kalo belum kenal, tapi kalo udah kenal.. tetep pendiem. Tapi aku orangnya open minded dan sans sih hehe. Target di fasilkom bisa intern di SV sama lulus cum laude.',
    ],
    email: 'mridhoananda@yahoo.co.id',
    motto: 'Ikuti Kata Hati, Tapi Tetap Sertakan Akal',
    nama: 'Muhammad Ridho Ananda',
    nick: 'Ridho',
    phone: '081241217966',
    sma: 'SMA Pribadi Bandung',
    ttl: 'Soroako, 28 April 1999'
  },
  '827': {
    cerita: [
      'Gua itu orangnya cepet laper dan kalo laper berisik. Gua suka banget dunia luar angkasa. Terus gua juga suka banget nonton film superhero dan drama korea. Kalo gua udah nonton drama korea, gua bisa lupa sama apapun. Oiya, gua sangat fasih ngomong "duduk" :).'
    ],
    email: 'oktafia99@gmail.com',
    motto: "Don't let negative vibes control your mind",
    nama: 'Oktafia Sutanti',
    nick: 'Okta',
    phone: '081299165668',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Jakarta, 11 Oktober 1999'
  },
  '828': {
    cerita: [
      'Halo! Kenalin nama gw Ramawajdi Kanishka Anwar. Biasanya dipanggil kani / rama / nishka. Hobi gw main, nonton, baca, sama ngoceh-ngoceh didepan mic. Alesan masuk fasilkom gara-gara pengen masuk SI soalnya tertarik sama yang bakal dipelajarin disini dan orang tua merestui. Harapan buat kedepannya: semoga bisa betah sama improve bareng-bareng tarung, kating, dan elemen-elemen yang ada di fasilkom.',
    ],
    email: 'ramawajdi.anwar@gmail.com',
    motto: 'Go further beyond',
    nama: 'Ramawajdi Kanishka Anwar',
    nick: 'Kani',
    phone: 'Fakhran Hartmanda Fariz',
    sma: 'SMAN 8 Jakarta',
    ttl: 'Jakarta, 12 Januari 1999'
  },
  '829': {
    cerita: [
      'Nama gue Rangga dari prodi Sistem Informasi, Gue masuk fasilkom sebenernya karena rata-rata temen-temen gue pengen masuk fasilkom sama gue sering main game. Gw sih biasanya main game Nintendo gitu-gitu cuma paling sering main Dota. Cita cita gue sebenernya belom kepikiran jauh-jauh amat tapi kira-kira sih kerja di perusahaan orang aja juga udah nyenengin.'
    ],
    email: 'ranggaekaprana@gmail.com',
    motto: "It'll all work out somehow",
    nama: 'Rangga Ekaprana Yuwono',
    nick: 'Rangga',
    phone: '08111735454',
    sma: 'alpus',
    ttl: 'Jakarta, 16 Juni 2000'
  },
  '830': {
    cerita: [
      'Gua itu orang nya ambivert, perfeksionis, terorganisir, kadang produktif tapi mageran, kadang kreatif, dan suka sok ngide. Hobinya desain grafis, tapi gak jago banget. Tulisan gua kata banyak orang itu bagus dan rapih. Alasan masuk fasilkom, karena interest di bidang IT dan pengen menguasai IT lebih lanjut.'
    ],
    email: 'revan.ragha@gmail.com',
    motto: 'You only live once, do your best',
    nama: 'Revan Ragha Andhito',
    nick: 'Revan',
    phone: '085697759995',
    sma: 'SMAN 1 Bogor',
    ttl: 'Jakarta, 15 April 1999'
  },
  '831': {
    cerita: [
      'nama gue reyhan. hobi gua nyari cewe. gua suka cabut kelas bu bella. dulu gua gendut banget. i love you semua penghuni fasilkom'
    ],
    email: 'reyhan.3101@gmail.com',
    motto: 'Hidup cuma sekali, lakukan yang terbaik',
    nama: 'Reyhan Kailiffadril',
    nick: 'Reyhan',
    phone: '081320020962',
    sma: 'SMA Taruna Bakti Bandung',
    ttl: 'Bandung, 31 Januari 2000'
  },
  '832': {
    cerita: [
      'Halo semua nama gua romi hadiyan aji witjaksono. Gua adalah salah satu anggota tarung dari sistem informasi. gua itu orang nya sans ga gimana gimana. Gua juga suka banget sama musik karena musik ialah pelipur lara paling tepat. Gua juga suka banget sama semua makanan yang terbuat dari ayam, karena ayam sangat enak sekali. Doakan gua survive di fasilkom ya kita lulus bareng bareng'
    ],
    email: 'romihadianvevo@gmail.com',
    motto: 'Carpe diem',
    nama: 'Romi Hadiyan Aji Witjaksono',
    nick: 'Romi',
    phone: '089514750827',
    sma: 'SMAN 34 Jakarta',
    ttl: 'Jakarta, 28 Agustus 1999'
  },
  '833': {
    cerita: ['merana tapi tetep aesthetic'],
    email: 'asti.roshani@gmail.com',
    motto: "If you can't change your fate, you can change your attitude",
    nama: 'Roshani Ayu Pranasti',
    nick: 'Asti',
    phone: '085888870579',
    sma: 'SMA Labschool Kebayoran',
    ttl: 'Jakarta, 12 Juli 1999'
  },
  '834': {
    cerita: [
      'Halo semuanya! Kenalin nama gue Salsabila Hava Qabita, bisa dipanggil salsa, bisa dipanggil hava, kadang suka dipanggil ndut juga. Hobi gue fangirling, dengerin musik, baca, dan nyanyi. Personality type gue INFJ, jadinya pendiem gitu terus kadang suka awkward hehe. Things i enjoy: music, films, food, tv shows, cars, formula one, talking about social issues, and napping. Kenapa masuk fasilkom? Karena emang mau. Harapan gue sendiri semoga tarung bisa menjadi angkatan yang dimana anak-anaknya bisa merasa nyaman and feel like they belong there, bisa menjadi angkatan yang saling membantu dan lebih peduli dengan satu sama lain, dan pastinya jadi angkatan yang bisa sukses bareng! Semangat Tarung!!'
    ],
    email: '1shavaqabita@gmail.com',
    motto: 'Palma non sine pulvere',
    nama: 'Salsabila Hava Qabita',
    nick: 'Salsa',
    phone: '081219669299',
    sma: 'SMAN 99 Jakarta',
    ttl: 'Jakarta, 8 Januari 2000'
  },
  '835': {
    cerita: [
      '-Halo kang!-',
      'Gua saull, biasa dipanggil justin. Akang akang sekalian bisa banget ngebully gua, karna gua sangat bullyable yah. Gua sering dibilang ganteng(sama emak gua) dan mirip sama rae(gua sendiri yang bilang). Mudah mudahan gua taun depan bisa melihat tahun depannya lagi begitu seterusnya'
    ],
    email: 'saulandreee@gmail.com',
    motto: 'Loving with His compassionate heart',
    nama: 'Saul Andre Lumban Gaol',
    nick: 'Saul',
    phone: '081296711844',
    sma: 'SMAN 39 Jakarta',
    ttl: 'Bogor, 29 Juli 1998'
  },
  '836': {
    cerita: [
      'nama panggilannya Selvy bukan selfie. Suka pelajaran matematika dan itu salah satu alasan kenapa milih ilmu komputer :"). Hampir semua dp sosmed nya bunga karena dibalik bunga tersimpan banyak cerita :))'
    ],
    email: 'selvyfiriani@gmail.com',
    motto:
      'I have no special talent.  I am only passionately curious - Albert Einstein',
    nama: 'Selvy Fitriani',
    nick: 'Selvy',
    phone: '083163677007',
    sma: 'SMAN 1 Pagar Alam',
    ttl: 'Pagar Alam, 10 Juli 2000'
  },
  '837': {
    cerita: [
      'Nama gua Yudha Ananda Rahayu Putra. Gua sebenernya mager ngerjain tugas -tugas pmb. Tapi, gua akan lakukan segala hal demi nama baik angkatan. Gua jadi pj foto angkatan juga ditunjuk waktu itu gara-gara kandidat sebelumnya gaada yang mau. Walaupun demikian, gua tetap melaksanakan amanat tersebut dengan sepenuh hati :). Maka dari itu, gua butuh banget semangat dari kalian semua untuk menyelesaikan tugas ini. Gua tau mungkin butuh pengorbanan yang cukup besar untuk foto angkatan. Waktu dan fisik kita juga terkuras demi foto angkatan yang ngga kelar-kelar itu. Terima kasih untuk yang sudah meluangkan waktunya untuk foto angkatan. Semoga kita semua dapat melaksanakan tugas-tugas ataupun kegiatan berikutnya dengan lancar yaa dan satu hal yang paling penting, semoga kita bisa lulus dengan nilai yang terbaik ! Aamiin'
    ],
    email: 'yudhaananda.rp@gmail.com',
    motto: 'Your time is priceless',
    nama: 'Yudha Ananda Rahayu Putra',
    nick: 'Yudha',
    phone: '089617080298',
    sma: 'SMAN 99 Jakarta',
    ttl: 'Bandung, 2 Oktober 1999'
  },
  '901': {
    cerita: [
      "So, here's a little story about me in college. Once, I eat a rice with hot tea as a soup. A plain hot rice, in a bowl. Then i just poured a glass of hot tea, then I eat it. Just like that. Thanks."
    ],
    email: 'achmadrizkyale@gmail.com',
    motto: 'Be grateful, take it easy.',
    nama: 'Achmad Rizqi Ilham S',
    nick: 'Ale',
    phone: '082223817228',
    sma: 'SMAN 11 Yogyakarta',
    ttl: 'Sleman, 10 Juni 1998'
  },
  '902': {
    cerita: [
      'Hai semuanyaa gue alaya, terserah mau manggil gue al, ya, aya, alaya, tapi jangan alay yaaa hehe, alasan gue masuk fasilkom gatau sihh gue gamau masuk fasilkom sebenernyaa. Gue merasa gue difasilkom rada kesulitan nihh, jadi mohon bantuannya ya teman-teman ??'
    ],
    email: 'alayakhairunnisa@gmail.com',
    motto: 'stop underestimating yourself',
    nama: 'Alaya Khairunnisa',
    nick: 'Alaya',
    phone: '082136375663',
    sma: 'SMA Islam Al-Azhar 1',
    ttl: 'Jakarta, 19 Januari 2000'
  },
  '903': {
    cerita: [
      'Gua orangnya pengen rajin tapi ga kesampean. Badan gua gemuk, tapi lg dalam proses penyeimbangan berat badan dengan cara jalan kaki ke pocin-pacil. Dan juga muka gua sekarang dijadiin stiker line.'
    ],
    email: 'aliysfhdd@gmail.com',
    motto: 'Pilih tanpa disesali',
    nama: 'Ali Yusuf',
    nick: 'Ali',
    phone: '087882465679',
    sma: 'SMAN 61 Jakarta',
    ttl: 'Jakarta, 20 oktober 1999'
  },
  '904': {
    cerita: [
      'Nama gue Angelina Condro, biasanya dipanggil Angel. Asal gue dari Makassar. Pas pertama masuk UI tuh rasanya asing banget, bener-bener gatau apa-apa soal Depok, dan ada banyak istilah atau budaya disini yang baru gue dapetin, dan gue berusaha nyesuain diri. Dan ternyata orang-orang disini itu ramah banget. Alasan gue masuk Fasilkom UI itu karena gua suka komputer, dan mayan seneng sm ngoding, tapi ga jago xD. Selain itu gue juga seneng musik kayak nyanyi, piano, gitar. Di fasilkom gue seneng nyari kegiatan yang berhubungan dengan hobi gue biar gue ada kegiatan lain juga yg gue enjoy jalaninnyaa. Gue juga berusaha buat ikut-ikut kegiatan yang bermanfaat untuk ngembangin soft skill juga. Gue cuma berharapp bisa berkontribusi buat Fasilkom selama 4 tahun gue mnjalani masa kuliah disini. Gue juga selalu usahain biar gue ngga jadi beban bagi angkatan. Gue bakal selalu support Tarung dan berusaha untuk selalu menjaga nama Tarung <3'
    ],
    email: 'angelina.condro@ymail.com',
    motto: "Don't be the best but do your best",
    nama: 'Angelina Condro',
    nick: 'Angel',
    phone: '08991501117',
    sma: 'SMA Katolik Rajawali',
    ttl: 'Makassar, 28 Maret 2000'
  },
  '905': {
    cerita: [
      'Ariq, iya nama gue ariq. Tapi bukan yang ketang tarung. Gua merantau pake kereta commuter dari kota hujan Bogor berbekal sebuah laptop dan segumpal niatan untuk berbakti kepada bangsa. Memiliki mimpi utama yaitu untuk bisa bermanfaat kepada agama, bangsa dan keluarga. Mimpi tersebut tepat dibawah mimpi kedua gue yaitu membersihkan kamar kost yang lebih mirip deepweb.'
    ],
    email: 'Arnas.bgr@gmail.com',
    motto: 'Akademisi yang Berkontribusi',
    nama: 'Ariq Naufal Satria',
    nick: 'Ariq',
    phone: '081283337424',
    sma: 'SMAN 1 Bogor',
    ttl: 'Bogor, 28 September 1999'
  },
  '906': {
    cerita: [
      'Saya Bramantio Krisno Aji, lelaki kelahiran Jakarta 6 Agustus 1999. Keturunan Jawa tulen, dengan tinggi yang cukup tinggi dan berat yang sangat berat. Daya tarik saya terletak pada kumis saya yang membahana dan memikat hati wanita. Saya bangga dengan kulit saya yang berwarna sawo kematengan. Dimanapun ada ambulans di situ ada saya, panggil saya Jantung.',
    ],
    email: 'bramantioaji@gmail.com',
    motto: 'Kebahagiaan itu tergantung pada dririmu sendiri',
    nama: 'Bramantio Krisno Aji',
    nick: 'Aji',
    phone: '0818116158',
    sma: 'SMAN 81 Jakarta',
    ttl: 'Jakarta, 6 Agustus 1999'
  },
  '907': {
    cerita: [
      '-Hii people-',
      'Gue Celine, terserah mau manggil Cel atau Line. Sehari" gue demen bgt nonton drakor, mulai dari comedy sampe historical. Kalo lu butuh rekomendasi drakor atau k-film, gue punya list beserta ratingnya. Goals gue thn ini bisa kurusan. Doain yaaa'
    ],
    email: 'chrysantcc@gmail.com',
    motto: '4 years from now, you will thank yourself',
    nama: 'Chrysant Celine Setyawan',
    nick: 'Celine',
    phone: '081285456119',
    sma: 'SMAN 61 Jakarta',
    ttl: 'Jakarta, 3 Juli 1999'
  },
  '908': {
    cerita: [
      'nama gw daniel alfred widjaja biasa dipanggil DA ato daniel. gw sma di tangerang, tapi rmh di jakarta. hobi gua olahraga apapun atau ngeDota. Gw suka banget sama warna item. gw suka banget makan indomie karna indomie enak dan bikin pinter.'
    ],
    email: 'dalfred2000@gmail.com',
    motto: 'Terus berusaha',
    nama: 'Daniel Alfred',
    nick: 'Daniel',
    phone: '08111959115',
    sma: 'SMAK Penabur Gading Serpong',
    ttl: 'Jakarta, 11 Februari 2000'
  },
  '909': {
    cerita: [
      'Nama saya Danny August Ramaputra. Masuk ke Fasilkom UI merupakan impian saya sejak lama karena memang dari awalnya saya sudah berminat melanjutkan kuliah ke bidang ilmu komputer. Sudah lama saya mengikuti tim robotika nasional yang menguatkan minat saya terhadap komputer. Hobi di bidang komputer dan robotika ini sudah saya jalani sejak SD. Selain itu, saya juga memiliki hobi bermain berbagai macam alat musik, seperti gitar klasik, bass, drums dan saxophone. Saya harap, dengan masuknya saya ke dunia perkuliahan yang luas ini, hobi dan minat saya di bidang-bidang tersebut akan lebih diexplorasi, khususnya di bidang komputer. '
    ],
    email: 'august_danny@yahoo.co.id',
    motto: 'Banyak Jalan Menuju Roma',
    nama: 'Danny August Ramaputra',
    nick: 'Danny',
    phone: '082299798982',
    sma: 'SMA Highfield',
    ttl: 'Bekasi, 7 Agustus 1999'
  },
  '910': {
    cerita: [
      'Gw asalnya dari medan, lebih tepatnya dari SMA St.Thomas 1 Medan. Hobi gw olahraga, futsal, basket, dan olahraga lain, mungkin emg Tuhan nyiptain gw bukan untuk seni wkwk. Alasan gw masuk fasilkom karena, gw melihat kalau prospek dunia IT kedepannya sangat cerah, di masa depan IT akan dibutuhkan dimana mana.'
    ],
    email: 'devinwinardi1727@gmail.com',
    motto: 'Berjuang',
    nama: 'Devin Winardi',
    nick: 'Dev',
    phone: '081260036277',
    sma: 'SMA St. Thomas 1 Medan',
    ttl: 'Medan, 27 Juli 1999'
  },
  '911': {
    cerita: [
      'nama gw dhipta raditya yudhasmara, biasanya dipanggil dhipta/ radit. kata orang gw orangnya rada pekok, tapi bener sih. gw suka touring gitu gitu, lebih  tepatnya backpacking gitu. nah pas touring, gw biasanya kan meminimalisir barang bawaan, contohnya gw meng avoid membawa handuk, dan mengganti handuk dengan hal lain contohnya kanebo. oiya, background gw dari sekolah "turki" wkwkkw. yap, kesatuan bangsa bbs ( very very unknown place, almost not exist even on google maps). gw masuk fasilkom gara gara : 1. gw males daftar dan mengeluarkan duit buat daftar di univ univ tetangga. 2. gegara gw pengen belajar banyak dari orang orang yang lebih jago dari gw (or maybe belajar bareng dengan yang setara), soalnya denger2 anak2 fasilkom jago banget gitu, dengan output gw bisa jadi fullstack programmer yang terintegritas.'
    ],
    email: 'dhiptaraditya@gmail.com',
    motto:
      'Hidup itu simple. Apabila sanggup, jalani. Apabila tidak, yasudah, tinggal ngopi saja ;)',
    nama: 'Dhipta Raditya Yudhasmara',
    nick: 'Radit',
    phone: '085647379283',
    sma: 'SMA Kesatuan Bangsa Yogyakarta',
    ttl: 'Magelang, 8 Januari 1999'
  },
  '912': {
    cerita: [
      'salam, nama gua Dimas Aditya Faiz biasa dipanggil dimas. Saat ini gua adalah mahasiswa fasilkom jurusan ilmu komputer. selama kuliah gua ngekos di kutek, di kosan deket al-hikam. hobi gw kalo lagi senggang adalah baca komik, terutama yang berbentuk buku.'
    ],
    email: 'dfaizaditya@gmail.com',
    motto: 'If its impossible, try make it possible',
    nama: 'Dimas Aditya Faiz',
    nick: 'Dimas',
    phone: '085311557844',
    sma: 'SMAN 1 Tangerang',
    ttl: 'Tangerang 12 september 1999'
  },
  '913': {
    cerita: [
      'Haloo~~',
      'Gue Eldinta Yerusyah Taripar, biasa dipanggil Dinta atau Din aja. Kadang kalo dipanggil din suka ketuker sama falahdina hehe... Gue orangnya pendiem sama orang yang baru dikenal, kadang keliatan jutek(?), tapi nggak kok sebenernya. Gw milih SI pas udah deket pendaftaran SNM, ternyata keterima. Buat temen-temen Tarung, sukses ya PMB dan kuliahnya!!!',
    ],
    email: 'dintasimatupang@gmail.com',
    motto: 'Do the best, be good, then you will be the best',
    nama: 'Eldinta Yerusyah Taripar',
    nick: 'Dinta',
    phone: '081281201028',
    sma: 'SMAN 1 Bekasi',
    ttl: 'Jakarta, 10 April 2001'
  },
  '914': {
    cerita: [
      'Eran. Seorang perempuan yang lahir di Bukittinggi tahun 2000. Memiliki cara pikir yang aneh dan agak lambat, namun (tanpa disangka) cukup untuk membuatnya bertahan secara akademis. Ia pernah memiliki fobia terhadap kamera dan foto, dan hingga sekarang masih tidak menyukai dirinya dalam wujud foto. Suka deburan pantai dan novel, benci keramaian dan konfrontasi. Memiliki banyak ide, namun menghadapi kesulitan dalam menyampaikan isi pikirannya.'
    ],
    email: 'erania24@gmail.com',
    motto: 'Lari terus, dunia tidak menunggumu.',
    nama: 'Erania Siti Rajisa',
    nick: 'Eran',
    phone: '085778536565',
    sma: 'SMAN 28 Jakarta',
    ttl: 'Bukittinggi, 29 September 2000'
  },
  '915': {
    cerita: [
      'Halo gue faheed, biasa dipanggil mars, dan temen2 di padang banyak juga yg manggil juki. Alasan sejujurnya masuk fasilkom karna pengen belajar ngoding doang. Sering bolos kelas gara2 ketiduran, tapi di kelas ga pernah ketiduran. Suka makan, baca buku, dan mageran. Jarang keliatan di kampus.'
    ],
    email: 'faheedxalkh@gmail.com',
    motto: 'Kamu tidak akan tahu nasib kamu kalau tidak mencobanya',
    nama: 'Faheed Alkhawarizmi',
    nick: 'Mars',
    phone: '.08126817365',
    sma: 'SMAN 1 Padang',
    ttl: 'Padang, 23 Juli 1999'
  },
  '916': {
    cerita: [
      'Hi nama gua Fakhran. Pas SMA, masih labil mau kedokteran atau masuk IT. Trus, nyari2 universitas apa yang bagus di bidang IT nya. Akhirnya ketemu lah antara ITB, IPB, UNBRAW, UI, Binus. Setelah baca-baca banyak soal pengalaman orang2 yang berkaitan dengan hal tersebut, akhirnya memutuskan untuk masuk di UI. Satu-satunya univ yang bagus dan ga terlalu jauh ya UI dan Binus. Tapi, dibandingkan Binus, UI lebih unggul kalau gua baca2 dari internet. Akhirnya belajar giat buat keterima di UI.',
      'Hobi gua itu fotografi dan juga olahraga kaya basket dan tenis meja. Gua juga suka main game dari gua kecil.',
      'Gua pikir kalau bisa dapet sarjana IT, gua pengen bisa kerja dari rumah ataupun kerja ga terpatok banget harus ke kantor kecuali memang ada hal yang diharuskan ke kantor.'
    ],
    email: 'fh.fariz@gmail.com',
    motto: "you can't score without a goal",
    nama: 'Fakhran Hartmanda Fariz',
    nick: 'Fakhran',
    phone: '081288118721',
    sma: 'SMAN 70 Jakarta',
    ttl: 'Surabaya, 9 Februari 1999'
  },
  '917': {
    cerita: [
      'halo, namaku Dina. Aku sangat suka mengabadikan momen. mungkin kamera dan sullivan sudah tak asing lagi jika bersamaku. aku berharap semoga tarung punya banyak momen yang bisa ku abadikan! :)'
    ],
    email: 'falahprilia@gmail.com',
    motto: 'berani bermimpi dan berani mewujudkannya',
    nama: 'Falahdina Aprilia',
    nick: 'Dina',
    phone: '085668105447',
    sma: 'SMAN 10 Padang',
    ttl: 'Padang, 7 April 1999'
  },
  '918': {
    cerita: [
      'Om swastyastu... kenalin gue Hendrick, asal dari Bali. Sebenernya gue ga ada basic sama sekali di computer, gatau kenapa milih fakultas ilmu komputer, karena memang basic gue itu lebih ke social envornment. Tapi bersyukur bisa lolos disini, karena siapa sih yang gamau punya peran penting dengan teknologi masa depan ?',
      'Gue orangnya santai, lebih suka bersosialisasi and always welcome!'
    ],
    email: 'hendrickputra666@gmail.com',
    motto: 'Waktu adalah segalanya',
    nama: 'I Kade Hendrick Putra K.',
    nick: 'Hendrick',
    phone: '0895345703144',
    sma: 'SMAN 4 Denpasar',
    ttl: 'Rejasa, 11 Maret 1999'
  },
  '919': {
    cerita: [
      'Nama saya Jeremia Delviero Hutagalung. Teman-teman biasa memanggil saya Jerdel. Saya lahir di Bekasi, Jawa Barat, pada tanggal 7 Januari 2000. Saya anak kedua dari dua bersaudara dan sekarang kos di kutek. Saya kurang pandai mendeskripsikan diri. Terimakasih.'
    ],
    email: 'jeremiadelviero@gmail.com',
    motto: 'Datang, Kerjakan, Lupakan.',
    nama: 'Jeremia Delviero Hutagalung',
    nick: 'Jeremi',
    phone: '085880973975',
    sma: 'SMAN 1 Bekasi',
    ttl: 'Bekasi, 7 Januari 2000'
  },
  '920': {
    cerita: [
      'Nama saya jeremy.Saya masuk fasilkom karena melihat masa depan yang sangat cerah didepan dengan ilmu komputer di genggaman tangan saya.Nampaknya semua hal tersebut tidaklah mudah.Harus melewati beberapa rintangan.Seperti bertemu teman baru di lingkungan baru hingga pelajaran yang berlom pernah saya temui.',
      'Apalagi teman teman yang saya jumpai sangatlah unik.Saya suka menari dan bermain futsal'
    ],
    email: 'jeremylee_23@yahoo.com',
    motto: 'Nikmatin aja dulu.',
    nama: 'Jeremy',
    nick: 'Jeje',
    phone: '085945319721',
    sma: 'SMAK 3 Penabur Jakarta',
    ttl: 'Jakarta,23 July 1999'
  },
  '921': {
    cerita: [
      'Halo, saya gabisa difoto formal dan kudu senyum soalnya kalo difoto ga pernah senyum, soalnya senyum kalo dipaksa malah keliatannya aneh/awkward. Saya kalo di chat, ga pernah pake wkwk soalnya wkwk kalo dilafalkan malah ga kayak jadi ketawa. wekwekwekwek apa coba itu. Ohiya, kata orang ekspresi muka saya selalu flat. Tapi kata chitato, "life is never flat".'
    ],
    email: 'josedevian@outlook.com',
    motto: 'Expect nothing. Appreciate everything.',
    nama: 'Jose Devian Hibono',
    nick: 'Jose',
    phone: '087883887022',
    sma: 'SMAK 5 Penabur Jakarta',
    ttl: 'Jakarta, 2 Desember 1998'
  },
  '922': {
    cerita: [
      'nama gua josh. lahir di jakarta 26 juli 2017. gua keturunan batak, tapi kalo ngomong gua sunda karna gua lama tinggal dibogor. gua hobinya sih ga jelas, kalo disuruh milih gua suka main gitar. kenapa gua mau masuk fasilkom karena dulu satu"nya jurusan yang gua suka itu yang ada hubungannya sama komputer. untung ga milih teknik kom hoho.',
    ],
    email: 'josh.sudung07@gmail.com',
    motto: 'simpel aja jangan dibikin susah',
    nama: 'Josh Sudung Pangihutan',
    nick: 'Sudung',
    phone: '087783806948',
    sma: 'SMA Regina Pacis Bogor',
    ttl: 'Jakarta, 26 Juli 1999'
  },
  '923': {
    cerita: [
      'Gw hobi baca buku sains, menonton film, mendengarkan musik, dan main video game. Gw suka hal" menantang, terutama dalam hobi" gw, seperti buku yg butuh mikir ataupun game" yg muter otak. Gw memang suka sains. Itu salah satu alasan gw masuk Fasilkom juga. Gw pengen mengembangkan teknologi di bidang komputer dan emang suka ngoding. Gw emang kurang sosialnya, tapi gw usahakan untuk bisa peduli angkatan dan sekitar.',
    ],
    email: 'kevinc.27999@gmail.com',
    motto: 'Do your best in everything you do.',
    nama: 'Kevin Christian Chandra',
    nick: 'KC',
    phone: '081295239229',
    sma: 'SMA Kristen Ketapang 1',
    ttl: 'Jakarta, 27 September 1999'
  },
  '924': {
    cerita: [
      'I love cat. I love people who love cat. Believer but not belieber. Oh and if you want to know more about me, you can just ask me anytime or if you are introvert, i do write. Check it out at www.theuntoldporry.wordpress.com'
    ],
    email: 'khalismurfid@gmail.com',
    motto: 'All action is reaction',
    nama: 'Khalis Murfid',
    nick: 'Khalis',
    phone: '085792832484',
    sma: 'SMAN 4 Denpasar',
    ttl: 'Jakarta, 11 April 1999'
  },
  '925': {
    cerita: [
      'Menurut gua, gua itu dasarnya pendiem, ga terlalu jago bergaul, tapi karena ada PMB gua pun jadi memberanikan diri untuk lebih bergaul walaupun kadang masih suka canggung kalo banyak orang. Alasan gua masuk fasilkom karena emang pas SMA gua maunya kuliah yang berbau teknologi, gamau yang berbau kesehatan apalagi soshum. Gua tadinya mau jurusan teknik elektro UI tapi entah mengapa gua merasa SI UI itu kyknya keren juga, dan akhirnya gua memutuskan untuk memilih SI UI. Pernah juga punya cita2 pengen masuk STE* IT* (ngarep), tapi pas milih jurusan di SNMPTN gua memilih untuk lebih realistis, dan akhirnya gua pun milih SI UI di pilihan pertama, dan gua pun lolos di jurusan tersebut.',
      'Jujur gua sangat bersyukur bisa masuk SI UI, karena sejauh ini gua merasa pelajarannya cocok sama minat gua (sejauh ini ya.. wkwk). Gua berharap gua bisa lulus tepat waktu di fasilkom ini. Aamiin..'
    ],
    email: 'laxbramantio@gmail.com',
    motto: 'Kerja keras dan berdoa, pasti bisa!',
    nama: 'Laksono Bramantio',
    nick: 'Tio',
    phone: '089622445822',
    sma: 'SMAN 12 Jakarta',
    ttl: 'Jakarta, 7 Mei 1999'
  },
  '926': {
    cerita: [
      'Halloo temen-temen nama gue rani dipanggil rani. Gue disuruh bikin deskripsi diri. pas gue nulis ini lagi adzan isya loh hehehe iya gapenting biar panjang aja sih. gue orgnya random kata orang wkwkw b aja aslinya. suka suporteran gatau napa seru nontonin orang tp kalo maen cupaw abis. suka nyanyi tapi suara gue cempreng kata org paling ganteng se dunia. punya bestfriend di pacil since day one grgr okk sama2 cabut2an. temenan ama moana dr obm sampe kelas juga sama semua kecuali mpkt. gapenting sih wkwwkwkwk sekian makasi.'
    ],
    email: 'raniangelo.rp@gmail.com',
    motto: 'Balance',
    nama: 'Maharani Eka Pratiwi',
    nick: 'Rani',
    phone: '085219383841',
    sma: 'SMAN 12 Jakarta',
    ttl: 'makassar, 4 desember 1999'
  },
  '927': {
    cerita: [
      "My name is Ira, I like to play games, watch, and read a little. My Indonesian is a bit rough around the edges, but I have to make do. I was born on April 26, 2000 and is the youngest in my four person family, which consists of my mother, father, sister and I. I am considered an introvert and pretty quiet when I am surrounded by a lot or new people. Due to that, most people would consider me as a very shy person. My strengths are that I try my best, but my weakness is that sometimes I don't try at all. :)"
    ],
    email: 'maria.a.devira@gmail.com',
    motto: '',
    nama: 'Maria Aprillia Devira',
    nick: 'Ira',
    phone: '081288328975',
    sma: 'SMAS Springfield',
    ttl: 'Bandung, 26 April 2000'
  },
  '928': {
    cerita:['Nama gue Fariz biasa dipanggil Fariz. Dari kecil cita-cita gue pengen banget mengembangkan teknologi di indonesia. Alhamdulillah pas kuliah, jurusan gue mendukung cita-cita gue. Gue seorang yang kebo. Dalam sehari bisa tidur lebih dari 8 jam. Hobi gue baca buku. Gue suka makan-makanan pedes. Sedang belajar menyeimbangkan organisasi dan akademis. Karena ka Valdi Rachman pernah bilang ke gue, softskill dan hardskill merupakan dua hal yang gabisa di pisah. Mereka membalance satu sama lain dan usahakan jangan saling mengorbankan satu sama lain dan dua hal tersebut merupakan kunci pengalaman buat kesuksesan lu kedepannya.'],
    email: 'frz.farhan@gmail.com',
    motto: 'Kalo bisa nanti kenapa harus sekarang?',
    nama: 'Muhamad Fariz Farhan',
    nick: 'Fariz',
    phone: '087876379033',
    sma: 'SMAN 78 JAKARTA',
    ttl: 'Jakarta, 8 Desember 1998'
  },
  '929': {
    cerita: [
      'Saya Muhammad Andriansyah Putra, biasa dipanggil Andri. Berperawakan tinggi besar dan menjalani hidup secara optimistis dan realistis. Setiap hari melakukan perjalanan antar kota dari Bekasi-Depok tanpa lelah demi hari esok yang lebih baik. Addicted terhadap hal berbau sepakbola serta hobi bermain riddle. Masuk Fasilkom untuk menggapai cita-cita turut andil dalam perkembangan IT di dunia serta membahagiakan orang tua. ',
    ],
    email: 'andrinhoptr@gmail.com',
    motto: 'Knowing is owning.',
    nama: 'Muhammad Andriansyah Putra',
    nick: 'Andri',
    phone: '083872556480',
    sma: 'SMAN 67 Jakarta',
    ttl: 'Jakarta, 22 Agustus 1999'
  },
  '930': {
    cerita: [
      'Nama Muhammad Rizqi Agung Prabowo. Biasa dipanggil Agung. Asal Bandung. Mechanical keyboard enthusiast. Hobi futsal, dengerin musik , ngegame dll. Makanan favorit mie.'
    ],
    email: 'mrizki.agungp@outlook.com',
    motto: 'Be Sceptical',
    nama: 'Muhammad Rizqi Agung Prabowo',
    nick: 'Agung',
    phone: '08111005529',
    sma: 'SMAS Alfa Centauri Bandung',
    ttl: 'Cimahi, 27 November 1997'
  },
  '931': {
    cerita: [
      'Gua dipanggil Nan, tapi gak sedikit orang panggil gua "dik" dan gua masih 17 tahun. Gua lebih suka belajar dibandingkan yang lain, tapi gua tahu temen itu lebih penting, makanya gua suka ajak temen-temen gua buat belajar'
    ],
    email: 'nandhikals@gmail.com',
    motto: 'Nothing',
    nama: 'Nandhika Prayoga',
    nick: 'Nan',
    phone: '081802769310',
    sma: 'SMAN 2 Tangerang Selatan',
    ttl: 'Depok, 20 November 1999'
  },
  '932': {
    cerita: [
      'Nama gue Oristania Wahyu Nabasya. Panggilan gue Nasya. Plis jangan nanya Nasyanya darimana krn gue bosen bgt dengernya. Gue emg dr awal mau masuk si krn denger2 prospek IT tuh byk banget tapi gue gamau ngoding bgt juga jadi gue masuk si. Hobi gue nari,nyanyi,nonton.'
    ],
    email: 'nasyaoris@yahoo.com',
    motto: 'prinsip adalah kebutuhan hidup',
    nama: 'Oristania Wahyu Nabasya',
    nick: 'Nasya',
    phone: '081310724259',
    sma: 'sman 28 jakarta',
    ttl: 'Jakarta, 9 Maret 1999'
  },
  '933': {
    cerita: [
      'Waktu SMA sama sekali ga kepikiran buat kuliah di UI, bahkan setelah setahun kuliah masih ga kepikiran buat kuliah di UI. Aku itu orangnya pemalu dan pendiem, makanya berusaha sebisanya untuk ikut banyak organisasi biar bisa kenal sama orang lain. Aku juga punya spot favorit di kantin asrama, buat kamu yang anak asrama pasti pernah beberapa kali liat. Walaupun udah 18 tahun, aku masih suka nonton film semacam Power Rangers, karena menurutku sih ceritanya seru. Aku juga punya keterikatan dengan Negara Belanda, karena emang keluargaku dulu tinggal disana, jadi ga heran kalau salah satu targetku adalah melanjutkan kuliah disana.',
    ],
    email: 'qasimxq17@gmail.com',
    motto: 'Overflowing courage will turn into magic',
    nama: 'Qasim Qawwamuddin',
    nick: 'Qasim',
    phone: '085876366633',
    sma: 'SMAN 1 Surakarta',
    ttl: 'Sragen, 17 Desember 1999'
  },
  '934': {
    cerita: [
      'Hai teman-teman, gua rindu, ilkom 2017. Jujur gua seneng banget bisa jadi bagian dari Tarung bisa jadi keluarga baru buat gua dan kita selalu kompak. kalo butuh MC bisa call 087781133465 nego'
    ],
    email: 'rindusalsabilla74@yahoo.com',
    motto: 'do the best to get the best',
    nama: 'Rindu Salsabilla Chandra',
    nick: 'Rindu',
    phone: '087781133465',
    sma: 'SMAN 1 Bekasi',
    ttl: 'Jakarta, 19 Juli 1999'
  },
  '935': {
    cerita: [
      'Gue anaknya petakilan, gabisa diem, laper mulu, laper mata, makan mulu, bacot, aneh tapi asiq, sukanya menghadiahi diri sendiri dengan makanan titik.'
    ],
    email: 'mila.kamiliah@yahoo.com',
    motto: 'Dont be afraid to make mistakes, learn from it.',
    nama: 'Siti Kaamiliaa Hasnaa',
    nick: 'Mila',
    phone: '08568715471',
    sma: 'SMAN 31 Jakarta',
    ttl: 'Jakarta, 9 September 1999'
  },
  '936': {
    cerita: [
      'Halo!',
      'Gue Yasmin. Gue bingung sih harus deskripsiin diri gue gimana. Yang pasti gue itu mukanya terlihat jauh lebih muda dari umurnya, hehe. Seriusan sih. Orang kalo tau umur gue sering kali gabakal percaya gue umur segitu. Gue anaknya pemalu dan pendiam kalo ga kenal. Tapi sekalinya deket sama orang, gabisa diem dan malu-maluin, wkwk. Oh iya, Gue ga pernah sekalipun ngebayangin kuliah di Fasilkom. Baru milih Fasilkom pun pas sbmptn karena gue gatau harus milih apa. Bisa dibilang gue nyasar di pacil. Tapi gue ga pernah nyesel. Gue sangat bersyukur ada di sini dan ketemu sama banyak orang hebat bin ajaib. Yaudah segini aja, udah panjang kan ya. Salam kenal buat kalian semua!??'
    ],
    email: 'yasminamalia98@gmail.com ',
    motto: 'Time waits for no one',
    nama: 'Yasmin Amalia',
    nick: 'Yasmin',
    phone: '081235074930',
    sma: 'MAN 3 Malang',
    ttl: 'Pasuruan, 10 Maret 1998'
  },
  '937': {
    cerita: [
      'Gua yudha bukan yang fotoin buku angkatan. Gua orangnya baik hati dan tidak sombong, rajin menabung dan suka menolong teman.'
    ],
    email: 'yudha512000@gmail.com',
    motto: 'Nikmatin aja',
    nama: 'Yudha Pradipta Ramadan',
    nick: 'Yudha',
    phone: '081222392725',
    sma: 'SMAN 42 Jakarta',
    ttl: 'Jakarta, 5 Januari 2000'
  },
  Absen: {
    email: 'Email',
    motto: ' Motto',
    nama: 'Nama',
    nick: 'Nickname',
    phone: 'Phone',
    sma: 'School',
    ttl: 'Birthday'
  }
};
