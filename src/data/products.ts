export type Tier = "low" | "mid" | "high";

export interface Product {
  model: string;
  tier: Tier;
  release: string;
  targetAudience: string;
  usage: string;
  specs: string;
  nerdSpecs: {
    [key: string]: string;
  };
}

export interface Category {
  name: string;
  slug: string;
  products: Product[];
}

export interface Brand {
  name: string;
  slug: string;
  icon: string;
  categories: Category[];
}

export const brands: Brand[] = [
  {
    name: "Apple",
    slug: "apple",
    icon: "🍎",
    categories: [
      {
        name: "iPhone",
        slug: "iphone",
        products: [
          {
            model: "iPhone 7",
            tier: "low",
            release: "2016",
            targetAudience: "Basisgebruik",
            usage: "Bellen, apps, lichte apps",
            specs: "A10, 4.7\" LCD, 2GB RAM",
            nerdSpecs: {
              Processor: "Apple A10 Fusion",
              Display: "4.7\" IPS LCD, 750x1334, 60Hz",
              RAM: "2GB LPDDR4",
              Opslag: "32GB / 128GB / 256GB",
              Camera: "12MP f/1.8 (achter), 7MP (voor)",
              Batterij: "1960 mAh, geen draadloos laden",
              Connectiviteit: "4G LTE, Wi-Fi 5, Bluetooth 4.2, NFC",
              Besturingssysteem: "iOS 10 (max iOS 15)",
              Waterbestendigheid: "IP67",
            },
          },
          {
            model: "iPhone 12",
            tier: "mid",
            release: "2020",
            targetAudience: "All-round",
            usage: "Social, foto's, video, 5G",
            specs: "A14, 6.1\" OLED, 4GB RAM",
            nerdSpecs: {
              Processor: "Apple A14 Bionic (5nm)",
              Display: "6.1\" Super Retina XDR OLED, 2532x1170, 60Hz, 800 nits",
              RAM: "4GB LPDDR4X",
              Opslag: "64GB / 128GB / 256GB",
              Camera: "12MP f/1.6 wide + 12MP ultrawide, Dolby Vision HDR video",
              Batterij: "2815 mAh, MagSafe 15W",
              Connectiviteit: "5G (sub-6GHz + mmWave), Wi-Fi 6, Bluetooth 5.0, UWB",
              Besturingssysteem: "iOS 14+",
              Waterbestendigheid: "IP68 (6m, 30min)",
            },
          },
          {
            model: "iPhone 17 / 18 Pro",
            tier: "high",
            release: "2025–2026",
            targetAudience: "Power users",
            usage: "AI, gaming, Pro camera",
            specs: "A19/A20, 120Hz OLED, WiFi 7",
            nerdSpecs: {
              Processor: "Apple A19/A20 Pro (3nm/2nm)",
              Display: "6.3\" ProMotion LTPO OLED, 120Hz, 2000+ nits HDR",
              RAM: "8GB+ LPDDR5X",
              Opslag: "256GB / 512GB / 1TB",
              Camera: "48MP main + 48MP ultrawide + 12MP telephoto (5x zoom), ProRes, spatial video",
              Batterij: "4500+ mAh, USB-C 35W, MagSafe 25W",
              Connectiviteit: "5G Advanced, Wi-Fi 7, Bluetooth 5.3, UWB, Satellite SOS",
              Besturingssysteem: "iOS 19/20 met Apple Intelligence",
              Waterbestendigheid: "IP68+",
            },
          },
        ],
      },
      {
        name: "MacBook",
        slug: "macbook",
        products: [
          {
            model: "MacBook Air (Intel/M1)",
            tier: "low",
            release: "2020",
            targetAudience: "Studenten basis",
            usage: "School, browsen",
            specs: "i5/M1, 8GB RAM",
            nerdSpecs: {
              Processor: "Apple M1 (8-core CPU, 7/8-core GPU) of Intel i5",
              Display: "13.3\" Retina IPS, 2560x1600, 400 nits, P3 wide color",
              RAM: "8GB unified memory (LPDDR4X)",
              Opslag: "256GB SSD",
              Batterij: "Tot 18 uur (M1), 49.9 Wh",
              Connectiviteit: "Wi-Fi 6, Bluetooth 5.0, 2x Thunderbolt/USB 4",
              Gewicht: "1.29 kg",
              Besturingssysteem: "macOS",
            },
          },
          {
            model: "MacBook Air (M2/M3/M5)",
            tier: "mid",
            release: "2022–2026",
            targetAudience: "Studie/werk",
            usage: "Multitasken, licht creatief werk",
            specs: "M-chip, 16GB RAM",
            nerdSpecs: {
              Processor: "Apple M2/M3/M5 (8-core CPU, 10-core GPU)",
              Display: '13.6" / 15.3" Liquid Retina, 2560x1664, 500 nits, P3',
              RAM: "16GB unified memory (LPDDR5)",
              Opslag: "256GB / 512GB / 1TB SSD",
              Batterij: "Tot 18 uur, 52.6 Wh, MagSafe",
              Connectiviteit: "Wi-Fi 6E, Bluetooth 5.3, 2x Thunderbolt/USB 4",
              Gewicht: "1.24 kg (13\")",
              Besturingssysteem: "macOS met Apple Intelligence",
            },
          },
          {
            model: "MacBook Pro 14/16 M-Pro/Max",
            tier: "high",
            release: "2023–2026",
            targetAudience: "Professionals",
            usage: "Video-edit, 3D, zware software",
            specs: "Pro/Max CPU+GPU, ProMotion",
            nerdSpecs: {
              Processor: "Apple M3/M4 Pro (12-core CPU, 18-core GPU) of Max (16-core CPU, 40-core GPU)",
              Display: '14.2" / 16.2" Liquid Retina XDR, 3024x1964, 120Hz ProMotion, 1600 nits HDR',
              RAM: "18GB / 36GB / 64GB / 128GB unified memory",
              Opslag: "512GB / 1TB / 2TB / 4TB / 8TB SSD",
              Batterij: "Tot 22 uur, 100 Wh, MagSafe 140W",
              Connectiviteit: "Wi-Fi 6E/7, Bluetooth 5.3, 3x Thunderbolt 4/5, HDMI 2.1, SDXC",
              Gewicht: '1.55 kg (14") / 2.14 kg (16")',
              Besturingssysteem: "macOS met Apple Intelligence",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    icon: "📱",
    categories: [
      {
        name: "Telefoons",
        slug: "telefoons",
        products: [
          {
            model: "Galaxy A14",
            tier: "low",
            release: "2023",
            targetAudience: "Budget",
            usage: "Basisapps",
            specs: "LCD, 4–6GB RAM",
            nerdSpecs: {
              Processor: "MediaTek Helio G80 / Exynos 850",
              Display: '6.6" PLS LCD, 1080x2408, 90Hz',
              RAM: "4GB / 6GB",
              Opslag: "64GB / 128GB + microSD",
              Camera: "50MP main + 2MP macro + 2MP depth",
              Batterij: "5000 mAh, 15W laden",
              Connectiviteit: "4G LTE, Wi-Fi 5, Bluetooth 5.0",
              Besturingssysteem: "Android 13 (One UI 5)",
              Waterbestendigheid: "Geen",
            },
          },
          {
            model: "Galaxy A55",
            tier: "mid",
            release: "2024",
            targetAudience: "All-round",
            usage: "Goede foto's + social",
            specs: "AMOLED, 8GB RAM",
            nerdSpecs: {
              Processor: "Samsung Exynos 1480 (4nm)",
              Display: '6.6" Super AMOLED, 1080x2340, 120Hz, 1000 nits',
              RAM: "8GB",
              Opslag: "128GB / 256GB + microSD",
              Camera: "50MP OIS + 12MP ultrawide + 5MP macro",
              Batterij: "5000 mAh, 25W snelladen",
              Connectiviteit: "5G, Wi-Fi 6, Bluetooth 5.3, NFC",
              Besturingssysteem: "Android 14 (One UI 6), 4 jaar updates",
              Waterbestendigheid: "IP67",
            },
          },
          {
            model: "Galaxy S26 Ultra",
            tier: "high",
            release: "2026",
            targetAudience: "Power users",
            usage: "Topcamera, AI, gaming",
            specs: "Snapdragon/Exynos, LTPO OLED",
            nerdSpecs: {
              Processor: "Snapdragon 8 Elite Gen 2 / Exynos (3nm)",
              Display: '6.9" Dynamic LTPO AMOLED 2X, 3120x1440, 1-120Hz, 3000 nits',
              RAM: "12GB / 16GB LPDDR5X",
              Opslag: "256GB / 512GB / 1TB",
              Camera: "200MP main OIS + 50MP ultrawide + 50MP 5x tele + 10MP 3x tele",
              Batterij: "5500 mAh, 65W snel, 15W draadloos",
              Connectiviteit: "5G, Wi-Fi 7, Bluetooth 5.4, UWB, S Pen",
              Besturingssysteem: "Android 16 (One UI 8) + Galaxy AI",
              Waterbestendigheid: "IP68",
            },
          },
        ],
      },
      {
        name: "Tablets",
        slug: "tablets",
        products: [
          {
            model: "Galaxy Tab A-serie",
            tier: "low",
            release: "Divers",
            targetAudience: "Basis",
            usage: "Netflix, school",
            specs: "LCD, 4GB RAM",
            nerdSpecs: {
              Processor: "MediaTek / Exynos (budget)",
              Display: '10.4" - 10.9" TFT LCD, 1200x2000',
              RAM: "3GB / 4GB",
              Opslag: "32GB / 64GB + microSD",
              Batterij: "7040 mAh",
              Connectiviteit: "Wi-Fi 5, Bluetooth 5.0, optioneel 4G",
              Besturingssysteem: "Android (One UI)",
            },
          },
          {
            model: "Galaxy Tab S7 FE / S11",
            tier: "mid",
            release: "2021–2025",
            targetAudience: "School/creatie",
            usage: "Multitasken + stylus",
            specs: '12.4", 6–8GB RAM',
            nerdSpecs: {
              Processor: "Snapdragon 778G / 8 Gen 1",
              Display: '12.4" TFT / LTPS LCD, 2560x1600, 60-120Hz',
              RAM: "6GB / 8GB",
              Opslag: "64GB / 128GB / 256GB + microSD",
              Camera: "8MP achter, 5MP voor",
              Batterij: "10090 mAh, 45W laden",
              Connectiviteit: "Wi-Fi 6, Bluetooth 5.0, S Pen inbegrepen",
              Besturingssysteem: "Android (One UI, Samsung DeX)",
            },
          },
          {
            model: "Galaxy Tab S12 Ultra",
            tier: "high",
            release: "2026",
            targetAudience: "Creators",
            usage: "Tekenen, HDR media",
            specs: "AMOLED 120Hz, 12GB+",
            nerdSpecs: {
              Processor: "Snapdragon 8 Elite (4nm)",
              Display: '14.6" Dynamic AMOLED 2X, 2960x1848, 120Hz, HDR10+, 930 nits',
              RAM: "12GB / 16GB LPDDR5X",
              Opslag: "256GB / 512GB / 1TB",
              Camera: "13MP + 8MP ultrawide (achter), dual 12MP (voor)",
              Batterij: "11200 mAh, 45W snelladen",
              Connectiviteit: "Wi-Fi 6E/7, Bluetooth 5.3, 5G optioneel, S Pen inbegrepen",
              Besturingssysteem: "Android 16 (One UI 8), Samsung DeX",
            },
          },
        ],
      },
    ],
  },
  {
    name: "HP",
    slug: "hp",
    icon: "💻",
    categories: [
      {
        name: "Laptops",
        slug: "laptops",
        products: [
          {
            model: "HP Pavilion",
            tier: "low",
            release: "Doorlopend",
            targetAudience: "Basisgebruik",
            usage: "Office, Netflix",
            specs: "i3/R3, 8GB RAM",
            nerdSpecs: {
              Processor: "Intel Core i3-1315U / AMD Ryzen 3 7320U",
              Display: '15.6" IPS FHD 1920x1080, 60Hz, 250 nits',
              RAM: "8GB DDR4 3200MHz",
              Opslag: "256GB / 512GB PCIe NVMe SSD",
              GPU: "Intel UHD / AMD Radeon integrated",
              Batterij: "41 Wh, tot 8 uur",
              Connectiviteit: "Wi-Fi 6, Bluetooth 5.2, USB-C, HDMI 1.4",
              Gewicht: "1.75 kg",
              Besturingssysteem: "Windows 11 Home",
            },
          },
          {
            model: "HP Envy",
            tier: "mid",
            release: "Doorlopend",
            targetAudience: "Studenten",
            usage: "Foto's, multitasken",
            specs: "i5/R5, 16GB RAM",
            nerdSpecs: {
              Processor: "Intel Core i5-1340P / AMD Ryzen 5 7530U",
              Display: '14" / 16" IPS FHD/2.8K OLED, 60-90Hz, 400 nits',
              RAM: "16GB DDR5 4800MHz",
              Opslag: "512GB / 1TB PCIe Gen4 SSD",
              GPU: "Intel Iris Xe / AMD Radeon 660M",
              Batterij: "51 Wh, tot 11 uur",
              Connectiviteit: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI 2.0",
              Gewicht: "1.41 kg (14\")",
              Besturingssysteem: "Windows 11 Home/Pro",
            },
          },
          {
            model: "HP Omen / ZBook",
            tier: "high",
            release: "Doorlopend",
            targetAudience: "Gamers & pro's",
            usage: "AAA games, 3D, CAD",
            specs: "i7/i9/R7/R9, RTX GPU",
            nerdSpecs: {
              Processor: "Intel Core i7-14700HX / i9-14900HX / AMD Ryzen 9 7945HX",
              Display: '16.1" QHD IPS 240Hz / 4K OLED 120Hz, 500+ nits, 100% DCI-P3',
              RAM: "16GB / 32GB / 64GB DDR5 5600MHz",
              Opslag: "1TB / 2TB PCIe Gen4 SSD (dual slot)",
              GPU: "NVIDIA RTX 4070 / 4080 / 4090 (tot 175W)",
              Batterij: "83 Wh, 230W adapter",
              Connectiviteit: "Wi-Fi 6E/7, Bluetooth 5.3, Thunderbolt 4, HDMI 2.1, RJ45",
              Gewicht: "2.37 kg",
              Besturingssysteem: "Windows 11 Pro",
            },
          },
        ],
      },
    ],
  },
  {
    name: "ASUS",
    slug: "asus",
    icon: "🖥️",
    categories: [
      {
        name: "Laptops",
        slug: "laptops",
        products: [
          {
            model: "ASUS VivoBook",
            tier: "low",
            release: "Doorlopend",
            targetAudience: "Basis",
            usage: "Office, YouTube",
            specs: "i3/R3, 8GB RAM",
            nerdSpecs: {
              Processor: "Intel Core i3-1215U / AMD Ryzen 3 7320U",
              Display: '15.6" IPS FHD, 60Hz, 250 nits',
              RAM: "8GB DDR4",
              Opslag: "256GB / 512GB SSD",
              GPU: "Integrated graphics",
              Batterij: "42 Wh, tot 7 uur",
              Connectiviteit: "Wi-Fi 6, Bluetooth 5.0, USB-C, HDMI",
              Gewicht: "1.7 kg",
              Besturingssysteem: "Windows 11",
            },
          },
          {
            model: "ASUS ZenBook",
            tier: "mid",
            release: "Doorlopend",
            targetAudience: "All-round",
            usage: "OLED, prestatie",
            specs: "i5/R5, 16GB RAM",
            nerdSpecs: {
              Processor: "Intel Core Ultra 5 125H / AMD Ryzen 5 8640HS",
              Display: '14" / 16" OLED 2.8K, 120Hz, 550 nits, 100% DCI-P3',
              RAM: "16GB LPDDR5X",
              Opslag: "512GB / 1TB PCIe Gen4 SSD",
              GPU: "Intel Arc / AMD Radeon 760M",
              Batterij: "75 Wh, tot 14 uur",
              Connectiviteit: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI 2.1",
              Gewicht: "1.28 kg (14\")",
              Besturingssysteem: "Windows 11 Pro",
            },
          },
          {
            model: "ASUS ROG (gaming)",
            tier: "high",
            release: "Doorlopend",
            targetAudience: "Gamers",
            usage: "Hoge FPS, zwaar werk",
            specs: "i7/i9/R9, RTX, 240Hz",
            nerdSpecs: {
              Processor: "Intel Core i9-14900HX / AMD Ryzen 9 7945HX3D",
              Display: '16" QHD+ 240Hz IPS / Mini LED, 500 nits, 100% DCI-P3, MUX Switch',
              RAM: "16GB / 32GB / 64GB DDR5 5600MHz",
              Opslag: "1TB / 2TB PCIe Gen4 SSD (RAID support)",
              GPU: "NVIDIA RTX 4070 / 4080 / 4090 (tot 175W TGP)",
              Koeling: "Liquid Metal, vapor chamber, 3x fan",
              Batterij: "90 Wh, 330W adapter",
              Connectiviteit: "Wi-Fi 7, Bluetooth 5.3, Thunderbolt 5, HDMI 2.1, RJ45 2.5G",
              Gewicht: "2.5 kg",
              Besturingssysteem: "Windows 11 Pro",
            },
          },
        ],
      },
    ],
  },
];
