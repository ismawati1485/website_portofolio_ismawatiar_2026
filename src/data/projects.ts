export interface ProjectScreenshot {
  number: string;
  title: string;
  description: string;
  src: string;
}

export interface Project {
  number: string;
  title: string;
  type: string;
  stack: string[];
  theme: "ship" | "erp" | "meeting" | "research" | string;
  overview: string;
  role: string;
  features: string[];
  screenshots: ProjectScreenshot[];
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Ship Maintenance\nManagement System",
    type: "Full Stack Web Application",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    theme: "ship",
    overview:
      "A full-stack system for organizing vessel maintenance and keeping work activity in view.",
    role: "Full-stack web development",
    features: [
      "Vessel maintenance schedules",
      "Work-order tracking",
      "Maintenance status overview",
    ],
    screenshots: [
      {
        number: "01",
        title: "Halaman Login Sistem",
        description: "Halaman awal untuk mengakses sistem maintenance.",
        src: "/projects/pelni/1.png",
      },
      {
        number: "02",
        title: "Dashboard Rekap Maintenance Tahunan",
        description:
          "Menampilkan ringkasan data maintenance kapal secara tahunan untuk membantu pemantauan pekerjaan.",
        src: "/projects/pelni/2.png",
      },
      {
        number: "03",
        title: "Dashboard RKAP",
        description: "Menampilkan perbandingan target dan realisasi pekerjaan dalam RKAP.",
        src: "/projects/pelni/3.png",
      },
      {
        number: "04",
        title: "Peringkat Kapal & Proyek Docking",
        description: "Menampilkan peringkat kapal dan daftar proyek docking.",
        src: "/projects/pelni/4.png",
      },
      {
        number: "05",
        title: "Perusahaan Mitra",
        description: "Menampilkan data perusahaan mitra yang terlibat dalam pekerjaan.",
        src: "/projects/pelni/5.png",
      },
      {
        number: "06",
        title: "Armada Kapal",
        description: "Menampilkan data armada kapal yang dikelola dalam sistem.",
        src: "/projects/pelni/6.png",
      },
      {
        number: "07",
        title: "Service Projects",
        description: "Mengelola dan memantau proyek pekerjaan atau service kapal.",
        src: "/projects/pelni/7.png",
      },
      {
        number: "08",
        title: "General Arrangement & Hotspot",
        description: "Menampilkan layout kapal dan lokasi pekerjaan melalui fitur hotspot.",
        src: "/projects/pelni/8.png",
      },
      {
        number: "09",
        title: "Penagihan & Pembayaran",
        description: "Menampilkan informasi penagihan dan pembayaran proyek.",
        src: "/projects/pelni/9.png",
      },
      {
        number: "10",
        title: "Potensi Docking",
        description: "Membantu memantau dan mengelola potensi docking kapal.",
        src: "/projects/pelni/10.png",
      },
    ],
  },
  {
    number: "02",
    title: "ERP Reporting\nDashboard",
    type: "Business Intelligence Dashboard",
    stack: ["React", "TypeScript", "Node.js", "Microsoft SQL Server"],
    theme: "erp",
    overview:
      "A reporting dashboard that makes business performance and ERP data easier to review.",
    role: "Full-stack web development",
    features: [
      "Business summary metrics",
      "Reporting dashboard",
      "Performance trend visualization",
    ],
    screenshots: [
      {
        number: "01",
        title: "Dashboard Sales",
        description: "Menampilkan ringkasan performa penjualan.",
        src: "/projects/ibi/1.png",
      },
      {
        number: "02",
        title: "Top Category Sales & Top Salesman",
        description: "Menampilkan kategori penjualan dan salesman dengan performa tertinggi.",
        src: "/projects/ibi/2.png",
      },
      {
        number: "03",
        title: "Upload Top Loss Sales",
        description: "Menyediakan fitur untuk mengunggah data top loss sales.",
        src: "/projects/ibi/3.png",
      },
      {
        number: "04",
        title: "Dashboard Top Customer",
        description: "Menampilkan customer dengan kontribusi penjualan tertinggi.",
        src: "/projects/ibi/4.png",
      },
      {
        number: "05",
        title: "Customer Segment",
        description: "Menampilkan segmentasi customer berdasarkan data penjualan.",
        src: "/projects/ibi/5.png",
      },
      {
        number: "06",
        title: "Dashboard Inventory",
        description: "Menampilkan ringkasan status stok dan status berdasarkan kategori.",
        src: "/projects/ibi/6.png",
      },
      {
        number: "07",
        title: "PO Pending vs PO Receiving",
        description:
          "Menampilkan perbandingan purchase order yang masih pending dan yang sudah diterima.",
        src: "/projects/ibi/7.png",
      },
      {
        number: "08",
        title: "Sales Order vs Sales Invoice",
        description: "Menampilkan perbandingan sales order dan sales invoice.",
        src: "/projects/ibi/8.png",
      },
      {
        number: "09",
        title: "Stock List",
        description: "Menampilkan daftar dan informasi stok barang.",
        src: "/projects/ibi/9.png",
      },
      {
        number: "10",
        title: "Proyeksi BEP & Biaya",
        description: "Menampilkan proyeksi break-even point dan biaya.",
        src: "/projects/ibi/10.png",
      },
      {
        number: "11",
        title: "Laporan AR",
        description: "Menampilkan laporan piutang usaha.",
        src: "/projects/ibi/11.png",
      },
      {
        number: "12",
        title: "Laporan AP",
        description: "Menampilkan laporan hutang usaha.",
        src: "/projects/ibi/12.png",
      },
      {
        number: "13",
        title: "Laporan Pajak",
        description: "Menampilkan laporan PPN masukan dan PPN keluaran.",
        src: "/projects/ibi/13.png",
      },
      {
        number: "14",
        title: "Tren PPN & PPh Terutang",
        description: "Menampilkan tren PPN dan PPh terutang.",
        src: "/projects/ibi/14.png",
      },
      {
        number: "15",
        title: "Perhitungan PPN & PPh",
        description: "Menampilkan perhitungan PPN dan PPh berdasarkan data yang tersedia.",
        src: "/projects/ibi/15.png",
      },
    ],
  },
  {
    number: "03",
    title: "Meeting Attendance\nSystem",
    type: "Web Application",
    stack: [],
    theme: "meeting",
    overview: "A web application for organizing meeting participation and recording attendance.",
    role: "Web application development",
    features: ["Meeting details", "Attendee lists", "Attendance recording"],
    screenshots: [
      {
        number: "01",
        title: "Halaman Awal Sistem Presensi & Pengelolaan Rapat",
        description:
          "Halaman awal yang memperkenalkan sistem informasi presensi dan pengelolaan rapat.",
        src: "/projects/bdk/1.png",
      },
      {
        number: "02",
        title: "Pemilihan Role & Akses Peserta",
        description: "Menyediakan pilihan role sebelum pengguna masuk ke sistem.",
        src: "/projects/bdk/2.png",
      },
      {
        number: "03",
        title: "Fitur & Keunggulan Sistem",
        description: "Menampilkan fitur utama dan keunggulan sistem.",
        src: "/projects/bdk/3.png",
      },
      {
        number: "04",
        title: "Login Admin",
        description: "Menyediakan akses autentikasi untuk pengguna dengan role admin.",
        src: "/projects/bdk/4.png",
      },
      {
        number: "05",
        title: "Dashboard Admin",
        description: "Menampilkan ringkasan informasi dan aktivitas rapat untuk admin.",
        src: "/projects/bdk/5.png",
      },
      {
        number: "06",
        title: "Buat Rapat Baru",
        description: "Menyediakan form untuk membuat agenda rapat baru.",
        src: "/projects/bdk/6.png",
      },
      {
        number: "07",
        title: "Detail Rapat",
        description: "Menampilkan informasi lengkap mengenai suatu rapat.",
        src: "/projects/bdk/7.png",
      },
      {
        number: "08",
        title: "Detail Presensi",
        description: "Menampilkan data kehadiran peserta dalam suatu rapat.",
        src: "/projects/bdk/8.png",
      },
      {
        number: "09",
        title: "Export PDF",
        description: "Menyediakan fitur untuk mengekspor data rapat atau presensi ke format PDF.",
        src: "/projects/bdk/9.png",
      },
      {
        number: "10",
        title: "Daftar Agenda Rapat Peserta",
        description: "Menampilkan daftar agenda rapat dari sisi peserta.",
        src: "/projects/bdk/10.png",
      },
      {
        number: "11",
        title: "Form Kehadiran & Identitas Peserta",
        description:
          "Menyediakan pengisian data diri, foto, tanda tangan, dan pelacakan lokasi saat melakukan presensi.",
        src: "/projects/bdk/11.png",
      },
    ],
  },
  {
    number: "04",
    title: "CVRP Optimization\nusing Genetic Algorithm",
    type: "Research / Optimization Project",
    stack: [],
    theme: "research",
    overview:
      "A research project applying a genetic algorithm to the capacitated vehicle routing problem.",
    role: "Research and algorithm implementation",
    features: [
      "Vehicle route optimization",
      "Route distance evaluation",
      "Genetic algorithm approach",
    ],
    screenshots: [
      {
        number: "01",
        title: "Import Data Pengiriman",
        description: "Menyediakan fitur untuk memasukkan data pengiriman ke dalam sistem.",
        src: "/projects/cvrp/1.png",
      },
      {
        number: "02",
        title: "Perbandingan Hasil Optimasi",
        description: "Menampilkan perbandingan kondisi rute sebelum dan sesudah proses optimasi.",
        src: "/projects/cvrp/2.png",
      },
      {
        number: "03",
        title: "Peta Rute Kurir",
        description: "Memvisualisasikan rute distribusi yang digunakan oleh setiap kurir.",
        src: "/projects/cvrp/3.png",
      },
      {
        number: "04",
        title: "Detail Kunjungan Kurir",
        description: "Menampilkan daftar detail kunjungan untuk setiap kurir.",
        src: "/projects/cvrp/4.png",
      },
    ],
  },
];
