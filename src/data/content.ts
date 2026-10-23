export const profile = {
  name: "Sultan Nugroho",
  role: "Senior Full-Stack Developer",
  tagline:
    "Membangun produk web yang cepat, stabil, dan mudah dirawat, dari arsitektur backend sampai detail antarmuka.",
  location: "Jakarta, Indonesia",
  available: true,
  email: "sultan.nugroho@example.com",
  cvUrl: "/cv-sultan-nugroho.pdf",
  photo: "https://images.pexels.com/photos/7989025/pexels-photo-7989025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  about: [
    "Saya Senior Full-Stack Developer dengan 8+ tahun pengalaman membangun aplikasi web skala produksi di bidang e-commerce, fintech, dan SaaS.",
    "Fokus saya pada arsitektur yang bersih, performa, dan developer experience. Saya terbiasa memimpin tim kecil, melakukan code review, dan menjembatani kebutuhan bisnis dengan solusi teknis.",
    "Di luar pekerjaan, saya menulis catatan teknis dan berkontribusi pada proyek open source.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/sultannugroho" },
    { label: "LinkedIn", url: "https://linkedin.com/in/sultannugroho" },
    { label: "X", url: "https://x.com/sultannugroho" },
  ],
  stats: [
    { value: "8+", label: "Tahun pengalaman" },
    { value: "40+", label: "Proyek selesai" },
    { value: "12", label: "Engineer dibimbing" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Zustand"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "GraphQL", "REST API"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { group: "DevOps & Tools", items: ["Docker", "GitHub Actions", "AWS", "Nginx", "Linux"] },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
}[] = [
  {
    company: "Arunika Commerce",
    role: "Senior Full-Stack Developer & Tech Lead",
    period: "2022 — Sekarang",
    points: [
      "Memimpin tim 6 engineer dalam migrasi monolit ke arsitektur modular, memangkas waktu deploy dari 40 menit menjadi 8 menit.",
      "Mengoptimalkan query dan caching sehingga p95 response API turun 55%.",
      "Menetapkan standar code review dan CI sehingga bug produksi turun 35%.",
    ],
    stack: ["TypeScript", "NestJS", "React", "PostgreSQL", "AWS"],
  },
  {
    company: "Nusa Digital Teknologi",
    role: "Full-Stack Developer",
    period: "2019 — 2022",
    points: [
      "Membangun platform pembayaran internal yang memproses 50 ribu transaksi per hari.",
      "Merancang dashboard analitik real-time yang dipakai 300+ staf operasional.",
    ],
    stack: ["Node.js", "React", "Redis", "Docker"],
  },
  {
    company: "Kopi Kode Studio",
    role: "Junior Web Developer",
    period: "2017 — 2019",
    points: [
      "Mengerjakan 15+ website dan aplikasi web untuk klien UMKM dan startup.",
      "Mengotomatiskan proses deployment sehingga rilis lebih cepat dan minim kesalahan.",
    ],
    stack: ["JavaScript", "PHP", "MySQL"],
  },
];

export const projects: {
  index: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  demo: string;
  repo: string;
}[] = [
  {
    index: "01",
    title: "KasirKita",
    summary: "Platform point-of-sale multi-cabang untuk UMKM.",
    problem: "Pemilik usaha kesulitan memantau stok dan penjualan antar cabang secara real-time.",
    solution: "Arsitektur offline-first dengan sinkronisasi antrean, API NestJS, dan dashboard React.",
    result: "Dipakai 1.200+ toko; selisih stok turun 60%.",
    stack: ["React", "NestJS", "PostgreSQL", "Redis"],
    demo: "https://kasirkita.example.com",
    repo: "https://github.com/sultannugroho/kasirkita",
  },
  {
    index: "02",
    title: "Lacak.in",
    summary: "Dashboard pelacakan pengiriman dari banyak kurir dalam satu tampilan.",
    problem: "Tim operasional harus membuka banyak situs kurir untuk satu paket.",
    solution: "Agregator API dengan antrean job dan webhook, serta pembaruan status real-time via WebSocket.",
    result: "Waktu pelacakan per paket turun dari 3 menit menjadi 10 detik.",
    stack: ["Next.js", "Node.js", "MongoDB", "WebSocket"],
    demo: "https://lacak.example.com",
    repo: "https://github.com/sultannugroho/lacak-in",
  },
  {
    index: "03",
    title: "DevNotes CLI",
    summary: "Alat baris perintah untuk mencatat dan mencari catatan teknis dari terminal.",
    problem: "Catatan debugging tercecer di banyak aplikasi sehingga sulit ditemukan kembali.",
    solution: "CLI ringan berbasis Go dengan indeks pencarian lokal dan sinkronisasi ke Git.",
    result: "1.800+ bintang GitHub dan 40+ kontributor.",
    stack: ["Go", "SQLite", "GitHub Actions"],
    demo: "https://devnotes.example.com",
    repo: "https://github.com/sultannugroho/devnotes",
  },
  {
    index: "04",
    title: "Ruang Belajar",
    summary: "Platform kursus online dengan kuis interaktif dan pelacakan progres.",
    problem: "Pengajar membutuhkan cara sederhana mengelola materi dan memantau murid.",
    solution: "Monorepo React + GraphQL dengan editor materi dan sistem penilaian otomatis.",
    result: "15 ribu murid aktif dengan retensi kursus naik 28%.",
    stack: ["React", "GraphQL", "PostgreSQL", "Docker"],
    demo: "https://ruangbelajar.example.com",
    repo: "https://github.com/sultannugroho/ruang-belajar",
  },
];

export const education: {
  school: string;
  degree: string;
  period: string;
}[] = [
  {
    school: "Institut Teknologi Nusantara",
    degree: "S1 Teknik Informatika",
    period: "2013 — 2017",
  },
];

export const achievements: string[] = [
  "AWS Certified Solutions Architect – Associate (2023)",
  "Juara 2 Hackathon Fintech Indonesia (2021)",
  'Pembicara di Jakarta JS Meetup: "Merancang API yang Tahan Lama" (2024)',
  "Maintainer proyek open source DevNotes CLI",
];
