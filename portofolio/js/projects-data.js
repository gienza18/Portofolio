function svgToBase64(svgString) {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
}

/* ====================================================================
   SVG 1: SUPERVISOR DASHBOARD
   - Dashboard Pemantauan (Supervisor)
   - 3 Metric Cards + Bar Chart Statistik Aktivitas Gudang
   ==================================================================== */
const supervisorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#f2f7ff"/>
  
  <!-- Sidebar -->
  <rect width="210" height="450" fill="#ffffff"/>
  <line x1="210" y1="0" x2="210" y2="450" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Sidebar Logo -->
  <path d="M 25 25 L 35 15 L 45 45 Z" fill="#2563eb"/>
  <path d="M 35 25 L 45 15 L 55 45 Z" fill="#3b82f6"/>
  <path d="M 45 25 L 55 15 L 65 45 Z" fill="#60a5fa"/>
  <text x="75" y="28" font-family="sans-serif" font-weight="900" font-size="10" fill="#1e3a8a">METINCA</text>
  <text x="75" y="38" font-family="sans-serif" font-weight="bold" font-size="9" fill="#2563eb">PRIMA</text>
  <text x="75" y="47" font-family="sans-serif" font-size="7" fill="#64748b">INDUSTRIAL WORKS</text>
  
  <!-- Sidebar Menu -->
  <text x="25" y="75" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Menu Utama</text>
  <rect x="20" y="85" width="170" height="34" rx="8" fill="#4361ee"/>
  <rect x="32" y="96" width="5" height="5" fill="#ffffff"/>
  <rect x="39" y="96" width="5" height="5" fill="#ffffff"/>
  <rect x="32" y="103" width="5" height="5" fill="#ffffff"/>
  <rect x="39" y="103" width="5" height="5" fill="#ffffff"/>
  <text x="52" y="106" font-family="sans-serif" font-weight="bold" font-size="11" fill="#ffffff">Dashboard</text>
  
  <text x="25" y="145" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Menu Halaman</text>
  <text x="48" y="166" font-family="sans-serif" font-size="10" fill="#475569">Jadwal Operasional</text>
  <text x="175" y="166" font-family="sans-serif" font-size="9" fill="#94a3b8">v</text>
  <text x="48" y="196" font-family="sans-serif" font-size="10" fill="#475569">Verifikasi Dokumen</text>
  <text x="175" y="196" font-family="sans-serif" font-size="9" fill="#94a3b8">v</text>
  <text x="48" y="226" font-family="sans-serif" font-size="10" fill="#475569">Data Master</text>
  <text x="48" y="256" font-family="sans-serif" font-size="10" fill="#475569">Riwayat Return</text>
  
  <text x="25" y="295" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Monitoring dan Laporan</text>
  <text x="48" y="316" font-family="sans-serif" font-size="10" fill="#475569">Monitoring Real-Time</text>
  <text x="175" y="316" font-family="sans-serif" font-size="9" fill="#94a3b8">v</text>
  <text x="48" y="346" font-family="sans-serif" font-size="10" fill="#475569">Laporan Operasional</text>
  
  <!-- Top Header -->
  <text x="235" y="35" font-family="sans-serif" font-size="16" fill="#3b82f6">&#9776;</text>
  <text x="735" y="31" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b" text-anchor="end">Supervisor Gudang</text>
  <text x="735" y="41" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="end">Administrator</text>
  <circle cx="755" cy="33" r="13" fill="#6366f1"/>

  <!-- Page Heading -->
  <text x="235" y="78" font-family="sans-serif" font-weight="bold" font-size="16" fill="#1e293b">Dashboard Pemantauan (Supervisor)</text>
  <text x="235" y="94" font-family="sans-serif" font-size="10" fill="#64748b">Ringkasan performa operasional PT. Metinca Prima Industrial Works.</text>
  <rect x="690" y="68" width="90" height="22" rx="5" fill="#edf5ff" stroke="#dbeafe"/>
  <text x="735" y="83" font-family="sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">29 July 2026</text>

  <!-- 3 Metric Cards -->
  <rect x="235" y="112" width="170" height="72" rx="10" fill="#ffffff"/>
  <rect x="247" y="124" width="32" height="32" rx="8" fill="#6366f1"/>
  <text x="263" y="145" font-family="sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">&#128722;</text>
  <text x="290" y="133" font-family="sans-serif" font-size="8" fill="#64748b">Total Permintaan Barang</text>
  <text x="290" y="156" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">2</text>

  <rect x="420" y="112" width="170" height="72" rx="10" fill="#ffffff"/>
  <rect x="432" y="124" width="32" height="32" rx="8" fill="#10b981"/>
  <text x="448" y="145" font-family="sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">&#128722;</text>
  <text x="475" y="133" font-family="sans-serif" font-size="8" fill="#64748b">Total Pesanan Masuk</text>
  <text x="475" y="156" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">2</text>

  <rect x="605" y="112" width="175" height="72" rx="10" fill="#ffffff"/>
  <rect x="617" y="124" width="32" height="32" rx="8" fill="#f87171"/>
  <text x="633" y="145" font-family="sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">&#8617;</text>
  <text x="660" y="133" font-family="sans-serif" font-size="8" fill="#64748b">Total Barang Return</text>
  <text x="660" y="156" font-family="sans-serif" font-weight="bold" font-size="18" fill="#ef4444">0</text>

  <!-- Chart Card -->
  <rect x="235" y="200" width="545" height="235" rx="10" fill="#ffffff"/>
  <text x="250" y="222" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">Statistik Aktivitas Gudang (Selesai)</text>
  
  <rect x="655" y="210" width="42" height="18" fill="#3b82f6" rx="3"/>
  <text x="676" y="222" font-family="sans-serif" font-size="8" fill="#ffffff" text-anchor="middle">Mingguan</text>
  <rect x="698" y="210" width="38" height="18" fill="#ffffff" stroke="#cbd5e1" rx="3"/>
  <text x="717" y="222" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Bulanan</text>
  <rect x="737" y="210" width="38" height="18" fill="#ffffff" stroke="#cbd5e1" rx="3"/>
  <text x="756" y="222" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Tahunan</text>

  <rect x="440" y="232" width="8" height="8" fill="#4361ee" rx="2"/>
  <text x="452" y="239" font-family="sans-serif" font-size="8" fill="#64748b">Aktivitas Bahan Baku</text>
  <rect x="535" y="232" width="8" height="8" fill="#34d399" rx="2"/>
  <text x="547" y="239" font-family="sans-serif" font-size="8" fill="#64748b">Aktivitas Barang Casting</text>

  <text x="246" y="320" font-family="sans-serif" font-size="7" fill="#64748b" transform="rotate(-90 246 320)">Jumlah Tugas Selesai</text>
  <text x="260" y="260" font-family="sans-serif" font-size="8" fill="#94a3b8">2</text>
  <line x1="270" y1="257" x2="760" y2="257" stroke="#f1f5f9" stroke-width="1"/>
  <text x="260" y="340" font-family="sans-serif" font-size="8" fill="#94a3b8">1</text>
  <line x1="270" y1="337" x2="760" y2="337" stroke="#f1f5f9" stroke-width="1"/>

  <rect x="310" y="260" width="18" height="77" fill="#5c7cf8" rx="2"/>
  <rect x="330" y="260" width="18" height="77" fill="#34d399" rx="2"/>
  <rect x="390" y="260" width="18" height="77" fill="#5c7cf8" rx="2"/>
  <rect x="410" y="260" width="18" height="77" fill="#34d399" rx="2"/>
</svg>`;


/* ====================================================================
   SVG 2: FOREMAN GUDANG DASHBOARD
   - Operasional Gudang: Penjadwalan, Delivery Order, Data Master
   - Monitoring Real-Time table + Laporan
   ==================================================================== */
const foremanSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#f2f7ff"/>
  
  <!-- Sidebar -->
  <rect width="210" height="450" fill="#ffffff"/>
  <line x1="210" y1="0" x2="210" y2="450" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Sidebar Logo -->
  <path d="M 25 25 L 35 15 L 45 45 Z" fill="#2563eb"/>
  <path d="M 35 25 L 45 15 L 55 45 Z" fill="#3b82f6"/>
  <path d="M 45 25 L 55 15 L 65 45 Z" fill="#60a5fa"/>
  <text x="75" y="28" font-family="sans-serif" font-weight="900" font-size="10" fill="#1e3a8a">METINCA</text>
  <text x="75" y="38" font-family="sans-serif" font-weight="bold" font-size="9" fill="#2563eb">PRIMA</text>
  <text x="75" y="47" font-family="sans-serif" font-size="7" fill="#64748b">INDUSTRIAL WORKS</text>
  
  <!-- Sidebar Menu -->
  <text x="25" y="75" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Menu Utama</text>
  <rect x="20" y="85" width="170" height="30" rx="8" fill="#e8ecf7"/>
  <text x="52" y="104" font-family="sans-serif" font-size="10" fill="#4361ee">Dashboard</text>

  <text x="25" y="135" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Operasional Gudang</text>
  <rect x="20" y="145" width="170" height="30" rx="8" fill="#4361ee"/>
  <text x="52" y="164" font-family="sans-serif" font-weight="bold" font-size="10" fill="#ffffff">Penjadwalan Barang</text>
  <text x="48" y="194" font-family="sans-serif" font-size="10" fill="#475569">Delivery Order</text>
  <text x="48" y="218" font-family="sans-serif" font-size="10" fill="#475569">Data Master</text>
  <text x="48" y="242" font-family="sans-serif" font-size="10" fill="#475569">Dokumen Masuk</text>
  <text x="175" y="242" font-family="sans-serif" font-size="9" fill="#94a3b8">v</text>

  <text x="25" y="275" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Laporan &amp; Pengawasan</text>
  <text x="48" y="296" font-family="sans-serif" font-size="10" fill="#475569">Penyusunan Laporan</text>
  <text x="48" y="320" font-family="sans-serif" font-size="10" fill="#475569">Monitoring Real-Time</text>
  <text x="175" y="320" font-family="sans-serif" font-size="9" fill="#94a3b8">v</text>

  <!-- Top Header -->
  <text x="235" y="35" font-family="sans-serif" font-size="16" fill="#3b82f6">&#9776;</text>
  <text x="735" y="31" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b" text-anchor="end">Foreman Gudang</text>
  <text x="735" y="41" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="end">Admin Gudang</text>
  <circle cx="755" cy="33" r="13" fill="#0ea5e9"/>

  <!-- Page Heading -->
  <text x="235" y="78" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">Monitoring Aktivitas Bahan Baku</text>
  <text x="235" y="94" font-family="sans-serif" font-size="10" fill="#64748b">Pemantauan waktu nyata untuk proses Loading dan Unloading bahan baku.</text>

  <!-- Table 1: Monitoring Unloading -->
  <rect x="235" y="110" width="545" height="30" rx="8" fill="#dbeafe"/>
  <text x="250" y="130" font-family="sans-serif" font-weight="bold" font-size="11" fill="#1e3a8a">Monitoring Unloading (Masuk)</text>

  <!-- Table Header -->
  <rect x="235" y="142" width="545" height="24" fill="#f8fafc"/>
  <line x1="235" y1="166" x2="780" y2="166" stroke="#e2e8f0" stroke-width="1"/>
  <text x="250" y="158" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Bahan Baku</text>
  <text x="370" y="158" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Supplier</text>
  <text x="480" y="158" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Operator</text>
  <text x="580" y="158" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Status</text>
  <text x="680" y="158" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Waktu Mulai</text>

  <!-- Row 1 -->
  <rect x="235" y="168" width="545" height="28" fill="#ffffff"/>
  <line x1="235" y1="196" x2="780" y2="196" stroke="#f1f5f9" stroke-width="1"/>
  <text x="250" y="186" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b">Besi Cor FC-250</text>
  <text x="370" y="186" font-family="sans-serif" font-size="9" fill="#475569">PT. Baja Utama</text>
  <rect x="480" y="175" width="70" height="16" rx="4" fill="#f1f5f9"/>
  <text x="515" y="187" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Pak Ahmad</text>
  <circle cx="590" cy="182" r="4" fill="#f59e0b"/>
  <text x="600" y="186" font-family="sans-serif" font-weight="bold" font-size="8" fill="#f59e0b">Berjalan</text>
  <text x="680" y="186" font-family="sans-serif" font-size="9" fill="#475569">09:15 WIB</text>

  <!-- Row 2 -->
  <rect x="235" y="198" width="545" height="28" fill="#ffffff"/>
  <line x1="235" y1="226" x2="780" y2="226" stroke="#f1f5f9" stroke-width="1"/>
  <text x="250" y="216" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b">Aluminium A356</text>
  <text x="370" y="216" font-family="sans-serif" font-size="9" fill="#475569">CV. Metal Indo</text>
  <rect x="480" y="205" width="70" height="16" rx="4" fill="#f1f5f9"/>
  <text x="515" y="217" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Pak Budi</text>
  <rect x="580" y="207" width="55" height="14" rx="4" fill="#dcfce7"/>
  <text x="607" y="217" font-family="sans-serif" font-weight="bold" font-size="8" fill="#16a34a" text-anchor="middle">Selesai</text>
  <text x="680" y="216" font-family="sans-serif" font-size="9" fill="#475569">07:30 WIB</text>

  <!-- Table 2: Monitoring Casting -->
  <rect x="235" y="245" width="545" height="30" rx="8" fill="#dcfce7"/>
  <text x="250" y="265" font-family="sans-serif" font-weight="bold" font-size="11" fill="#166534">Monitoring Barang Casting (Keluar)</text>

  <!-- Table Header 2 -->
  <rect x="235" y="277" width="545" height="24" fill="#f8fafc"/>
  <line x1="235" y1="301" x2="780" y2="301" stroke="#e2e8f0" stroke-width="1"/>
  <text x="250" y="293" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Barang Casting</text>
  <text x="370" y="293" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Tujuan</text>
  <text x="480" y="293" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Operator</text>
  <text x="580" y="293" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Status</text>
  <text x="680" y="293" font-family="sans-serif" font-weight="600" font-size="9" fill="#475569">Durasi</text>

  <!-- Row 1 -->
  <rect x="235" y="303" width="545" height="28" fill="#ffffff"/>
  <line x1="235" y1="331" x2="780" y2="331" stroke="#f1f5f9" stroke-width="1"/>
  <text x="250" y="321" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b">Casting Block Mesin</text>
  <text x="370" y="321" font-family="sans-serif" font-size="9" fill="#475569">PT. Auto Parts</text>
  <rect x="480" y="310" width="70" height="16" rx="4" fill="#f1f5f9"/>
  <text x="515" y="322" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Pak Deni</text>
  <circle cx="590" cy="317" r="4" fill="#f59e0b"/>
  <text x="600" y="321" font-family="sans-serif" font-weight="bold" font-size="8" fill="#f59e0b">Berjalan</text>
  <text x="680" y="321" font-family="sans-serif" font-weight="bold" font-size="9" fill="#2563eb">1 Jam 23 Mnt</text>

  <!-- Row 2 -->
  <rect x="235" y="333" width="545" height="28" fill="#ffffff"/>
  <text x="250" y="351" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b">Valve Body Casting</text>
  <text x="370" y="351" font-family="sans-serif" font-size="9" fill="#475569">PT. Valve Indo</text>
  <rect x="480" y="340" width="70" height="16" rx="4" fill="#f1f5f9"/>
  <text x="515" y="352" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Pak Eko</text>
  <rect x="580" y="342" width="55" height="14" rx="4" fill="#dcfce7"/>
  <text x="607" y="352" font-family="sans-serif" font-weight="bold" font-size="8" fill="#16a34a" text-anchor="middle">Selesai</text>
  <text x="680" y="351" font-family="sans-serif" font-weight="bold" font-size="9" fill="#16a34a">45 Menit</text>

  <!-- Subtle Branding -->
  <text x="500" y="440" font-family="sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle">Metinca Prima Industrial Works - Sistem Loading &amp; Unloading (Foreman View)</text>
</svg>`;


/* ====================================================================
   SVG 3: OPERATOR GUDANG DASHBOARD
   - Dashboard Statistik Operasional (Operator)
   - 3 Metric Cards: Tugas Bahan Baku, Tugas Casting, Total Tugas
   - Chart + Activity List
   ==================================================================== */
const operatorSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#f2f7ff"/>
  
  <!-- Sidebar -->
  <rect width="210" height="450" fill="#ffffff"/>
  <line x1="210" y1="0" x2="210" y2="450" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Sidebar Logo -->
  <path d="M 25 25 L 35 15 L 45 45 Z" fill="#2563eb"/>
  <path d="M 35 25 L 45 15 L 55 45 Z" fill="#3b82f6"/>
  <path d="M 45 25 L 55 15 L 65 45 Z" fill="#60a5fa"/>
  <text x="75" y="28" font-family="sans-serif" font-weight="900" font-size="10" fill="#1e3a8a">METINCA</text>
  <text x="75" y="38" font-family="sans-serif" font-weight="bold" font-size="9" fill="#2563eb">PRIMA</text>
  <text x="75" y="47" font-family="sans-serif" font-size="7" fill="#64748b">INDUSTRIAL WORKS</text>
  
  <!-- Sidebar Menu -->
  <text x="25" y="75" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Menu Utama</text>
  <rect x="20" y="85" width="170" height="30" rx="8" fill="#4361ee"/>
  <text x="52" y="104" font-family="sans-serif" font-weight="bold" font-size="10" fill="#ffffff">Dashboard</text>

  <text x="25" y="135" font-family="sans-serif" font-weight="600" font-size="9" fill="#94a3b8">Area Operasional</text>
  <text x="48" y="156" font-family="sans-serif" font-size="10" fill="#475569">Aktivitas Bahan Baku</text>
  <text x="48" y="180" font-family="sans-serif" font-size="10" fill="#475569">Aktivitas Barang Casting</text>
  <text x="48" y="204" font-family="sans-serif" font-size="10" fill="#475569">Tugas Aktif</text>
  <text x="48" y="228" font-family="sans-serif" font-size="10" fill="#475569">Antrean Pekerjaan</text>
  <text x="48" y="252" font-family="sans-serif" font-size="10" fill="#475569">Riwayat Tugas</text>

  <!-- Top Header -->
  <text x="235" y="35" font-family="sans-serif" font-size="16" fill="#3b82f6">&#9776;</text>
  <text x="735" y="31" font-family="sans-serif" font-weight="bold" font-size="9" fill="#1e293b" text-anchor="end">Operator Gudang</text>
  <text x="735" y="41" font-family="sans-serif" font-size="8" fill="#64748b" text-anchor="end">Dock 1</text>
  <circle cx="755" cy="33" r="13" fill="#f97316"/>

  <!-- Page Heading -->
  <text x="235" y="78" font-family="sans-serif" font-weight="bold" font-size="15" fill="#1e293b">Dashboard Statistik Operasional</text>
  <text x="235" y="94" font-family="sans-serif" font-size="10" fill="#64748b">Statistik tugas aktivitas: Aktivitas Bahan Baku vs Barang Casting.</text>
  <rect x="690" y="68" width="90" height="22" rx="5" fill="#edf5ff" stroke="#dbeafe"/>
  <text x="735" y="83" font-family="sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">29 July 2026</text>

  <!-- 3 Metric Cards -->
  <rect x="235" y="112" width="170" height="68" rx="10" fill="#ffffff"/>
  <rect x="247" y="124" width="32" height="32" rx="8" fill="#435ebe"/>
  <text x="263" y="144" font-family="sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">&#128230;</text>
  <text x="290" y="133" font-family="sans-serif" font-size="8" fill="#64748b">Tugas Bahan Baku</text>
  <text x="290" y="156" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">5</text>

  <rect x="420" y="112" width="170" height="68" rx="10" fill="#ffffff"/>
  <rect x="432" y="124" width="32" height="32" rx="8" fill="#5ddab4"/>
  <text x="448" y="144" font-family="sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">&#128230;</text>
  <text x="475" y="133" font-family="sans-serif" font-size="8" fill="#64748b">Tugas Barang Casting</text>
  <text x="475" y="156" font-family="sans-serif" font-weight="bold" font-size="18" fill="#1e293b">3</text>

  <rect x="605" y="112" width="175" height="68" rx="10" fill="#ffffff"/>
  <rect x="617" y="124" width="32" height="32" rx="8" fill="#ff7976"/>
  <text x="633" y="144" font-family="sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">&#10003;</text>
  <text x="660" y="133" font-family="sans-serif" font-size="8" fill="#64748b">Total Tugas Aktivitas</text>
  <text x="660" y="156" font-family="sans-serif" font-weight="bold" font-size="18" fill="#ef4444">8</text>

  <!-- Chart Card -->
  <rect x="235" y="196" width="545" height="240" rx="10" fill="#ffffff"/>
  <text x="250" y="218" font-family="sans-serif" font-weight="bold" font-size="12" fill="#1e293b">Statistik Tugas Aktivitas</text>
  
  <rect x="655" y="206" width="42" height="18" fill="#3b82f6" rx="3"/>
  <text x="676" y="218" font-family="sans-serif" font-size="8" fill="#ffffff" text-anchor="middle">Mingguan</text>
  <rect x="698" y="206" width="38" height="18" fill="#ffffff" stroke="#cbd5e1" rx="3"/>
  <text x="717" y="218" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Bulanan</text>
  <rect x="737" y="206" width="38" height="18" fill="#ffffff" stroke="#cbd5e1" rx="3"/>
  <text x="756" y="218" font-family="sans-serif" font-size="8" fill="#475569" text-anchor="middle">Tahunan</text>

  <!-- Legend -->
  <rect x="440" y="228" width="8" height="8" fill="#435ebe" rx="2"/>
  <text x="452" y="235" font-family="sans-serif" font-size="8" fill="#64748b">Aktivitas Bahan Baku</text>
  <rect x="545" y="228" width="8" height="8" fill="#5ddab4" rx="2"/>
  <text x="557" y="235" font-family="sans-serif" font-size="8" fill="#64748b">Aktivitas Barang Casting</text>

  <!-- Y-axis labels -->
  <text x="260" y="260" font-family="sans-serif" font-size="8" fill="#94a3b8">5</text>
  <line x1="270" y1="257" x2="760" y2="257" stroke="#f1f5f9" stroke-width="1"/>
  <text x="260" y="290" font-family="sans-serif" font-size="8" fill="#94a3b8">3</text>
  <line x1="270" y1="287" x2="760" y2="287" stroke="#f1f5f9" stroke-width="1"/>
  <text x="260" y="320" font-family="sans-serif" font-size="8" fill="#94a3b8">1</text>
  <line x1="270" y1="317" x2="760" y2="317" stroke="#f1f5f9" stroke-width="1"/>

  <!-- Chart Bars - 5 groups representing days -->
  <rect x="295" y="257" width="16" height="100" fill="#435ebe" rx="2"/>
  <rect x="313" y="287" width="16" height="70" fill="#5ddab4" rx="2"/>
  <text x="312" y="370" font-family="sans-serif" font-size="7" fill="#94a3b8" text-anchor="middle">Sen</text>

  <rect x="360" y="277" width="16" height="80" fill="#435ebe" rx="2"/>
  <rect x="378" y="297" width="16" height="60" fill="#5ddab4" rx="2"/>
  <text x="377" y="370" font-family="sans-serif" font-size="7" fill="#94a3b8" text-anchor="middle">Sel</text>

  <rect x="425" y="267" width="16" height="90" fill="#435ebe" rx="2"/>
  <rect x="443" y="287" width="16" height="70" fill="#5ddab4" rx="2"/>
  <text x="442" y="370" font-family="sans-serif" font-size="7" fill="#94a3b8" text-anchor="middle">Rab</text>

  <rect x="490" y="287" width="16" height="70" fill="#435ebe" rx="2"/>
  <rect x="508" y="307" width="16" height="50" fill="#5ddab4" rx="2"/>
  <text x="507" y="370" font-family="sans-serif" font-size="7" fill="#94a3b8" text-anchor="middle">Kam</text>

  <rect x="555" y="257" width="16" height="100" fill="#435ebe" rx="2"/>
  <rect x="573" y="267" width="16" height="90" fill="#5ddab4" rx="2"/>
  <text x="572" y="370" font-family="sans-serif" font-size="7" fill="#94a3b8" text-anchor="middle">Jum</text>

  <!-- Branding -->
  <text x="500" y="425" font-family="sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle">Metinca Prima Industrial Works - Sistem Loading &amp; Unloading (Operator View)</text>
</svg>`;


/* ====================================================================
   PORTFOLIO DATA - Professional & Academic
   ==================================================================== */
const PortfolioData = {
  profile: {
    name: "Gienza Zidan Athalah",
    title: "Mahasiswa S1 Sistem Informasi & IT Specialist",
    tagline: "Pengembangan Sistem, Analisis Kebutuhan Bisnis, & Jaringan Komputer",
    bio: "Mahasiswa semester 7 Program Studi S1 Sistem Informasi di Universitas Darma Persada dengan latar belakang Teknik Komputer dan Jaringan. Memiliki ketertarikan kuat pada pengembangan sistem, analisis kebutuhan bisnis, basis data, serta pemanfaatan teknologi informasi untuk mendukung pengambilan keputusan.",
    location: "Cakung Barat, Jakarta Timur",
    phone: "+62 857-1870-4571",
    email: "gienzazdn@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    stats: [
      { label: "Semester S1", count: 7, suffix: "" },
      { label: "IPK Kumulatif", count: 3.79, suffix: "" },
      { label: "Sertifikasi Kompetensi", count: 3, suffix: "" },
      { label: "Pengalaman Kerja", count: 3, suffix: "" }
    ]
  },

  skills: [
    { name: "Web Developer", category: "backend", icon: "globe", level: 90 },
    { name: "Teknik Komputer & Jaringan", category: "tools", icon: "cpu", level: 92 },
    { name: "Analisis & Problem Solving", category: "frontend", icon: "lightbulb", level: 88 },
    { name: "Microsoft Office & Data Entry", category: "tools", icon: "spreadsheet", level: 95 },
    { name: "Staf Administrasi", category: "frontend", icon: "clipboard", level: 90 },
    { name: "AI Literacy", category: "backend", icon: "sparkles", level: 90 }
  ],

  projects: [
    {
      id: "metinca-supervisor",
      title: "Dashboard Pemantauan Supervisor",
      category: "fullstack",
      tags: ["Laravel 11", "MySQL", "ApexCharts", "Multi-Role", "Supervisor"],
      shortDesc: "Halaman dashboard khusus Supervisor Gudang untuk pemantauan ringkasan performa operasional, statistik aktivitas, dan grafik analisis.",
      fullDesc: "Dashboard web untuk role <strong>Supervisor Gudang</strong> pada Sistem Loading & Unloading PT. Metinca Prima Industrial Works.<br/><br/>" +
        "• <strong>Ringkasan Performa:</strong> 3 kartu metrik menampilkan Total Permintaan Barang, Total Pesanan Masuk, dan Total Barang Return secara real-time.<br/>" +
        "• <strong>Grafik Aktivitas Gudang:</strong> Chart bar interaktif (ApexCharts) dengan filter Mingguan, Bulanan, Tahunan untuk memantau perbandingan Aktivitas Bahan Baku vs Barang Casting.<br/>" +
        "• <strong>Sidebar Lengkap:</strong> Navigasi ke Jadwal Operasional, Verifikasi Dokumen (Pesanan & Permintaan Bahan Baku), Data Master, Riwayat Return, serta Monitoring & Laporan.<br/>" +
        "• <strong>Cetak Dokumen:</strong> Generator otomatis untuk Surat Jalan, Release Note, Surat Rencana Kirim, dan Laporan Rekapitulasi.",
      image: "images/projects/supervisor-dashboard.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "metinca-foreman",
      title: "Monitoring Real-Time Foreman Gudang",
      category: "fullstack",
      tags: ["Laravel 11", "MySQL", "Real-Time", "Monitoring", "Foreman"],
      shortDesc: "Halaman monitoring waktu nyata untuk Foreman Gudang: pemantauan proses unloading bahan baku dan loading barang casting.",
      fullDesc: "Halaman monitoring untuk role <strong>Foreman Gudang (Admin Gudang)</strong> pada Sistem Loading & Unloading PT. Metinca Prima Industrial Works.<br/><br/>" +
        "• <strong>Monitoring Unloading:</strong> Tabel pemantauan real-time proses barang masuk (bahan baku) dengan kolom Bahan Baku, Supplier, Operator, Status (Berjalan/Selesai), Waktu Mulai, dan Durasi Pengerjaan.<br/>" +
        "• <strong>Monitoring Barang Casting:</strong> Tabel pemantauan real-time proses barang keluar (casting) dengan kolom Barang, Tujuan, Operator, Status, dan penghitung Durasi otomatis.<br/>" +
        "• <strong>Operasional Gudang:</strong> Sidebar navigasi ke Penjadwalan Barang (Casting Masuk/Keluar), Delivery Order, Data Master Stok, dan Dokumen Masuk (Surat Rencana Kirim & Release Note).<br/>" +
        "• <strong>Laporan & Pengawasan:</strong> Akses ke penyusunan laporan operasional dan panel monitoring real-time dengan penghitung waktu berjalan secara presisi.",
      image: "images/projects/foreman-dashboard.png",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "metinca-operator",
      title: "Dashboard Statistik Operator Gudang",
      category: "fullstack",
      tags: ["Laravel 11", "MySQL", "ApexCharts", "Operator", "Dock"],
      shortDesc: "Halaman dashboard Operator Gudang untuk melihat statistik tugas harian, grafik aktivitas, serta antrean dan riwayat pekerjaan.",
      fullDesc: "Dashboard web untuk role <strong>Operator Gudang</strong> pada Sistem Loading & Unloading PT. Metinca Prima Industrial Works.<br/><br/>" +
        "• <strong>Kartu Ringkasan Tugas:</strong> 3 metrik utama menampilkan Tugas Bahan Baku, Tugas Barang Casting, dan Total Tugas Aktivitas yang telah selesai dikerjakan.<br/>" +
        "• <strong>Grafik Statistik Tugas:</strong> Chart bar harian (Senin–Jumat) dengan filter Mingguan/Bulanan/Tahunan membandingkan volume Aktivitas Bahan Baku vs Barang Casting.<br/>" +
        "• <strong>Area Operasional:</strong> Sidebar navigasi ke Aktivitas Bahan Baku, Aktivitas Barang Casting, Tugas Aktif (dengan tombol Mulai/Selesai), Antrean Pekerjaan, dan Riwayat Tugas.<br/>" +
        "• <strong>Eksekusi Tugas Lapangan:</strong> Operator dapat memulai dan menyelesaikan tugas langsung dari halaman, dengan pencatatan waktu mulai dan durasi otomatis.",
      image: "images/projects/operator-dashboard.png",
      liveUrl: "#",
      githubUrl: "#"
    }
  ],

  experiences: [
    {
      id: "exp-smk",
      period: "2020 - 2023",
      role: "Teknik Komputer Dan Jaringan (TKJ)",
      company: "SMK Dinamika Pembangunan 1 Jakarta",
      category: "pendidikan",
      type: "Pendidikan SMK",
      icon: "graduation-cap",
      description: "Mempelajari arsitektur jaringan komputer, perakitan PC, instalasi sistem operasi, dan administrasi infrastruktur IT."
    },
    {
      id: "exp-pkl",
      period: "2022",
      role: "Packer (Praktik Kerja Lapangan)",
      company: "Praktik Kerja Lapangan (PKL)",
      category: "kerja",
      type: "Pengalaman Kerja",
      icon: "briefcase",
      description: "Bertanggung jawab membantu melayani customer, pengemasan produk, dan membantu alur kerja transaksi operasional."
    },
    {
      id: "exp-p2kptk",
      period: "Januari 2023",
      role: "Pelatihan P2KPTK - Teknik Komputer Dan Jaringan",
      company: "P2KPTK Jakarta & SMK Dinamika Pembangunan 1",
      category: "sertifikasi",
      type: "Pelatihan Teknis",
      icon: "award",
      description: "Mengikuti pelatihan teknis lanjutan mengenai konfigurasi, pemeliharaan, dan pengelolaan Jaringan Komputer."
    },
    {
      id: "exp-bnsp",
      period: "14 April 2023",
      role: "Sertifikat Kompetensi BNSP - Teknik Komputer dan Jaringan",
      company: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP SMK Dinamika Pembangunan 1",
      category: "sertifikasi",
      type: "Sertifikasi BNSP",
      icon: "award",
      certImage: "images/certificates/cert-bnsp.png",
      description: "Terbukti kompeten pada kualifikasi KKNI Level II Kompetensi Teknik Komputer dan Jaringan (No. Reg: J 1209 00631 2023 | No. Sertifikat: 61100 2523 2 0000631 2023)."
    },
    {
      id: "exp-s1",
      period: "2023 - Sekarang",
      role: "Program Studi S1 Sistem Informasi (Semester 7)",
      company: "Universitas Darma Persada",
      category: "pendidikan",
      type: "Pendidikan Tinggi",
      icon: "graduation-cap",
      description: "Mempelajari konsep sistem informasi, basis data, analisis & perancangan sistem, dasar pemrograman, dan sistem pendukung keputusan."
    },
    {
      id: "exp-dicoding",
      period: "10 Juli 2024",
      role: "Sertifikat Kelulusan: Belajar Dasar AI",
      company: "Dicoding Indonesia",
      category: "sertifikasi",
      type: "Sertifikasi Dicoding",
      icon: "award",
      certImage: "images/certificates/cert-dicoding.png",
      description: "Memahami konsep dasar Kecerdasan Buatan (Artificial Intelligence), machine learning, dan implementasinya dalam teknologi (ID: NVP7Q330VZR0)."
    },
    {
      id: "exp-cs",
      period: "2025",
      role: "Customer Service (Freelance)",
      company: "Goto Series",
      category: "kerja",
      type: "Pengalaman Kerja",
      icon: "briefcase",
      description: "Melayani customer secara profesional dan komunikatif serta bertanggung jawab membantu kelancaran berjalannya event."
    },
    {
      id: "exp-cisco",
      period: "04 Maret 2025",
      role: "Cisco Networking Academy - Linux Unhatched",
      company: "Cisco Networking Academy",
      category: "sertifikasi",
      type: "Sertifikasi Cisco",
      icon: "award",
      certImage: "images/certificates/cert-cisco.png",
      description: "Menyelesaikan sertifikasi kelulusan pemahaman dasar sistem operasi Linux dan perintah terminal dasar Cisco Networking Academy."
    },
    {
      id: "exp-magang",
      period: "Maret 2026 - Juli 2026",
      role: "Magang (Internship) - Operasional Loading & Unloading",
      company: "PT. Metinca Prima Industrial Works",
      category: "kerja",
      type: "Pengalaman Magang",
      icon: "briefcase",
      description: "Bertanggung jawab memantau alur operasional loading barang casting dan unloading bahan baku di gudang, memverifikasi kesesuaian barang, serta membantu penyusunan laporan aktivitas harian."
    }
  ],

  certificates: [
    {
      id: "cert-bnsp",
      title: "Sertifikat Kompetensi BNSP - Teknik Komputer dan Jaringan",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP SMK Dinamika Pembangunan 1",
      date: "14 April 2023",
      badge: "BNSP / LSP",
      regNo: "No. Reg: J 1209 00631 2023 | No. Sertifikat: 61100 2523 2 0000631 2023",
      qualification: "KKNI Level II Kompetensi Teknik Komputer dan Jaringan",
      image: "images/certificates/cert-bnsp.png"
    },
    {
      id: "cert-dicoding",
      title: "Sertifikat Kelulusan: Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      date: "10 Juli 2024",
      badge: "Dicoding Academy",
      regNo: "ID Sertifikat: NVP7Q330VZR0 (Berlaku s.d. 10 Juli 2027)",
      qualification: "Dasar Kecerdasan Buatan (Artificial Intelligence)",
      image: "images/certificates/cert-dicoding.png"
    },
    {
      id: "cert-cisco",
      title: "Certificate of Completion: Linux Unhatched",
      issuer: "Cisco Networking Academy",
      date: "04 Maret 2025",
      badge: "Cisco Networking Academy",
      regNo: "Program Cisco Networking Academy",
      qualification: "Sistem Operasi Linux & Administrasi Terminal Dasar",
      image: "images/certificates/cert-cisco.png"
    }
  ]
};
