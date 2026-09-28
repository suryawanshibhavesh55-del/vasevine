// VASEVINE â€” Product Catalog Data (100% Client Products)

const CATEGORIES = [
  {
    id: 'all-collections',
    name: 'All Collections',
    image: '',
    description: 'Explore the complete luxury couture collection from VASEVINE.'
  }
];

const PRODUCTS = [
    {
        "originalPrice":  4269,
        "id":  "v-cp-01",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3499,
        "fabric":  "Structured Wool Crepe",
        "category":  "All Collections",
        "description":  "A dramatic statement crimson ensemble featuring a sculpted cape draped bodice paired with sleek tailored trousers.",
        "isBestseller":  true,
        "images":  [
                       "assets/products/client_prod_01_1.jpg"
                   ],
        "name":  "Crimson Sculpted Draped Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5489,
        "id":  "v-cp-02",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4499,
        "fabric":  "Metallic Foil Georgette",
        "category":  "All Collections",
        "description":  "Sculpted champagne gold metallic drape featuring micro-pleated bodice folds and a flowing pallu.",
        "isBestseller":  true,
        "images":  [
                       "assets/products/client_prod_02_1.jpg",
                       "assets/products/client_prod_02_2.jpg",
                       "assets/products/client_prod_02_3.jpg"
                   ],
        "name":  "Champagne Gold Draped Saree Ensemble",
        "isNewArrival":  true
    },
    {
        "originalPrice":  4879,
        "id":  "v-cp-03",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3999,
        "fabric":  "Mulmul Silk \u0026 Organza",
        "category":  "All Collections",
        "description":  "Handcrafted blush pink kalidar set with micro-pleated wing shoulder detailing and a sheer organza dupatta.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_03_1.jpg",
                       "assets/products/client_prod_03_2.jpg",
                       "assets/products/client_prod_03_3.jpg",
                       "assets/products/client_prod_03_4.jpg"
                   ],
        "name":  "Blush Pink Sculpted Anarkali",
        "isNewArrival":  true
    },
    {
        "originalPrice":  3537,
        "id":  "v-cp-04",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2899,
        "fabric":  "Pleated Organza \u0026 Pearls",
        "category":  "All Collections",
        "description":  "Sculpted ivory organza mini dress adorned with delicate pearl accents and architectural body drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_04_1.jpg",
                       "assets/products/client_prod_04_2.jpg",
                       "assets/products/client_prod_04_3.jpg",
                       "assets/products/client_prod_04_4.jpg"
                   ],
        "name":  "Ivory Pearl Organza Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3293,
        "id":  "v-cp-05",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2699,
        "fabric":  "Micro-Pleated Organza",
        "category":  "All Collections",
        "description":  "Vibrant coral pink cocktail dress crafted with pleated fan drapes and an asymmetric hemline.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_05_1.jpg",
                       "assets/products/client_prod_05_2.jpg"
                   ],
        "name":  "Coral Micro-Pleated Cocktail Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4635,
        "id":  "v-cp-06",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3799,
        "fabric":  "Italian Velvet \u0026 Lurex",
        "category":  "All Collections",
        "description":  "High-contrast evening ensemble with a metallic silver sculpted top and flared noir velvet trousers.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_06_1.jpg",
                       "assets/products/client_prod_06_2.jpg"
                   ],
        "name":  "Noir Silver Velvet Corset Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3415,
        "id":  "v-cp-07",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2799,
        "fabric":  "Dual-Tone Georgette",
        "category":  "All Collections",
        "description":  "Sun-drenched dual-tone resort dress featuring pleated seafoam green and soft yellow drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_07_1.jpg",
                       "assets/products/client_prod_07_2.jpg"
                   ],
        "name":  "Pastel Mint \u0026 Yellow Resort Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3659,
        "id":  "v-cp-08",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2999,
        "fabric":  "Chiffon Satin Blend",
        "category":  "All Collections",
        "description":  "Bold magenta dress featuring off-shoulder sculpted butterfly sleeves and structured waist drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_08_1.jpg"
                   ],
        "name":  "Fuchsia Butterfly Sculpted Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4879,
        "id":  "v-cp-09",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3999,
        "fabric":  "Poly-Silk Blend",
        "category":  "All Collections",
        "description":  "Cobalt blue tailored jacket set with structured micro-pleated shoulders and flare pants.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_09_1.jpg",
                       "assets/products/client_prod_09_2.jpg",
                       "assets/products/client_prod_09_3.jpg"
                   ],
        "name":  "Royal Blue Power Suit Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3171,
        "id":  "v-cp-10",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2599,
        "fabric":  "Pleated Chiffon",
        "category":  "All Collections",
        "description":  "Rose-pink micro-pleated mini dress with fluid shoulder loops and body-contouring drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_10_1.jpg",
                       "assets/products/client_prod_10_2.jpg"
                   ],
        "name":  "Sculpted Rose Pink Mini Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5977,
        "id":  "v-cp-11",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4899,
        "fabric":  "Lurex Tissue \u0026 Crystals",
        "category":  "All Collections",
        "description":  "Dual-tone gold shimmer evening gown with crystal-embellished portrait neckline.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_11_1.jpg",
                       "assets/products/client_prod_11_2.jpg"
                   ],
        "name":  "Gold \u0026 Bronze Shimmer Evening Gown",
        "isNewArrival":  true
    },
    {
        "originalPrice":  5611,
        "id":  "v-cp-13",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4599,
        "fabric":  "Heavy Satin \u0026 Chiffon",
        "category":  "All Collections",
        "description":  "Vibrant red satin high-low gown featuring a trailing hemline and sculpted pleated bodice.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_13_1.jpg",
                       "assets/products/client_prod_13_2.jpg",
                       "assets/products/client_prod_13_3.jpg"
                   ],
        "name":  "Scarlet High-Low Satin Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4513,
        "id":  "v-cp-14",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3699,
        "fabric":  "Liquid Satin \u0026 Embroidery",
        "category":  "All Collections",
        "description":  "Pre-stitched liquid satin draped saree in deep wine red paired with a cord-embroidered crop top.",
        "isBestseller":  true,
        "images":  [
                       "assets/products/client_prod_14_1.jpg",
                       "assets/products/client_prod_14_2.jpg",
                       "assets/products/client_prod_14_3.jpg"
                   ],
        "name":  "Wine Red Cord-Embroidered Draped Saree",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5245,
        "id":  "v-cp-15",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4299,
        "fabric":  "Metallic Foil Georgette",
        "category":  "All Collections",
        "description":  "High-fashion metallic golden drape with micro-pleated wrap overlay and dramatic side tail.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_15_1.jpg"
                   ],
        "name":  "Golden Foil Sculpted Draped Outfit",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4025,
        "id":  "v-cp-16",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3299,
        "fabric":  "Sequin Mesh \u0026 Lurex",
        "category":  "All Collections",
        "description":  "Shimmering gold sequin mini dress featuring a pleated infinity loop drape across the bustier.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_16_1.jpg",
                       "assets/products/client_prod_16_2.jpg"
                   ],
        "name":  "Gold Sequin Sculpted Infinity Bustier",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3659,
        "id":  "v-cp-17",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2999,
        "fabric":  "Silk Organza \u0026 Tulle",
        "category":  "All Collections",
        "description":  "Contemporary cream corset dress crafted with cascading wave drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_17_1.jpg"
                   ],
        "name":  "Cream Corset Wave Drape Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5367,
        "id":  "v-cp-18",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4399,
        "fabric":  "Satin \u0026 Pleated Chiffon",
        "category":  "All Collections",
        "description":  "Rich red sculpted drape gown featuring a dramatic floor-length waterfall trail.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_18_1.jpg",
                       "assets/products/client_prod_18_2.jpg"
                   ],
        "name":  "Crimson Waterfall Trail Drape Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4269,
        "id":  "v-cp-19",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3499,
        "fabric":  "Georgette \u0026 Organza",
        "category":  "All Collections",
        "description":  "Flared ivory kalidar Anarkali embellished with gold badla embroidery and organza dupatta.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_19_1.jpg"
                   ],
        "name":  "Ivory Embroidered Kalidar Anarkali",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3537,
        "id":  "v-cp-20",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2899,
        "fabric":  "Gradated Chiffon",
        "category":  "All Collections",
        "description":  "Azure blue and ivory gradated micro-pleated drape top for statement styling.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_20_1.jpg",
                       "assets/products/client_prod_20_2.jpg"
                   ],
        "name":  "Ombre Azure Pleated Drape Top",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4635,
        "id":  "v-cp-21",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3799,
        "fabric":  "Metallic Tissue Georgette",
        "category":  "All Collections",
        "description":  "Charcoal grey metallic gown with criss-cross pleated bodice drapes and column skirt.",
        "isBestseller":  true,
        "images":  [
                       "assets/products/client_prod_21_1.jpg"
                   ],
        "name":  "Charcoal Metallic Evening Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3903,
        "id":  "v-cp-22",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3199,
        "fabric":  "Organza Satin",
        "category":  "All Collections",
        "description":  "3D hand-sculpted floral organza cocktail dress in warm pastel tones.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_22_1.jpg",
                       "assets/products/client_prod_22_2.jpg"
                   ],
        "name":  "Sculpted Floral Organza Cocktail Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4025,
        "id":  "v-cp-23",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3299,
        "fabric":  "Beaded Net \u0026 Georgette",
        "category":  "All Collections",
        "description":  "Intricately hand-beaded royal blue dress with a fan-draped bodice.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_23_1.jpg"
                   ],
        "name":  "Royal Blue Beaded Sculpted Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5123,
        "id":  "v-cp-24",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4199,
        "fabric":  "Metallic Lurex \u0026 Satin",
        "category":  "All Collections",
        "description":  "Bronze lurex sculpted drape bodice paired with a black satin mermaid skirt.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_24_1.jpg"
                   ],
        "name":  "Metallic Bronze Couture Drape Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4147,
        "id":  "v-cp-25",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3399,
        "fabric":  "Metallic Lurex Tissue",
        "category":  "All Collections",
        "description":  "Gunmetal metallic mini dress featuring a dramatic sculpted chest swirl.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_25_1.jpg"
                   ],
        "name":  "Gunmetal Metallic Sculpted Mini",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4147,
        "id":  "v-cp-26",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3399,
        "fabric":  "Sequined Lace",
        "category":  "All Collections",
        "description":  "Sapphire blue sequin lace midi dress with an off-shoulder sculpted bodice drape.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_26_1.jpg",
                       "assets/products/client_prod_26_2.jpg"
                   ],
        "name":  "Sapphire Beaded Evening Midi",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4757,
        "id":  "v-cp-27",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3899,
        "fabric":  "Sequin \u0026 Satin",
        "category":  "All Collections",
        "description":  "Olive green sequin bustier draped with a sweeping satin trail over a noir column skirt.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_27_1.jpg",
                       "assets/products/client_prod_27_2.jpg"
                   ],
        "name":  "Olive \u0026 Black Sequin Draped Couture",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3659,
        "id":  "v-cp-28",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2999,
        "fabric":  "Micro-Pleated Chiffon",
        "category":  "All Collections",
        "description":  "Black micro-pleated mini dress featuring wave sculpted drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_28_1.jpg",
                       "assets/products/client_prod_28_2.jpg"
                   ],
        "name":  "Noir Sculpted Wave Mini Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4269,
        "id":  "v-cp-29",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3499,
        "fabric":  "Pleated Georgette",
        "category":  "All Collections",
        "description":  "Emerald green micro-pleated corset top with wing drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_29_1.jpg",
                       "assets/products/client_prod_29_2.jpg"
                   ],
        "name":  "Emerald Pleated Sculpted Corset",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5611,
        "id":  "v-cp-30",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4599,
        "fabric":  "Satin \u0026 Organza",
        "category":  "All Collections",
        "description":  "Scarlet satin ballgown featuring a high-low hem and pleated fan drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_30_1.jpg",
                       "assets/products/client_prod_30_2.jpg"
                   ],
        "name":  "Sculpted Red Satin High-Low Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4513,
        "id":  "v-cp-31",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3699,
        "fabric":  "Lurex \u0026 Velvet",
        "category":  "All Collections",
        "description":  "Silver lurex sculpted corset paired with noir bell-bottom trousers.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_31_1.jpg"
                   ],
        "name":  "Metallic Silver Corset Flare Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3903,
        "id":  "v-cp-32",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3199,
        "fabric":  "Sequin Mesh",
        "category":  "All Collections",
        "description":  "Gilded sequin mini dress with champagne infinity pleat drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_32_1.jpg"
                   ],
        "name":  "Champagne Gold Pleated Infinity Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  5855,
        "id":  "v-cp-33",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4799,
        "fabric":  "Lurex Tissue",
        "category":  "All Collections",
        "description":  "Full portrait gold shimmering gown with hand-beaded borders and flared train.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_33_1.jpg",
                       "assets/products/client_prod_33_2.jpg"
                   ],
        "name":  "Gold \u0026 Bronze Shimmer Trail Gown",
        "isNewArrival":  true
    },
    {
        "originalPrice":  5123,
        "id":  "v-cp-34",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  4199,
        "fabric":  "Pleated Satin",
        "category":  "All Collections",
        "description":  "Creamy ivory satin gown with asymmetric slit skirt and waist drape knot.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_34_1.jpg",
                       "assets/products/client_prod_34_2.jpg"
                   ],
        "name":  "Pure Ivory Sculpted Asymmetric Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4513,
        "id":  "v-cp-35",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3699,
        "fabric":  "Liquid Satin",
        "category":  "All Collections",
        "description":  "Pre-stitched liquid satin draped saree with embroidered crop top.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_35_1.jpg",
                       "assets/products/client_prod_35_2.jpg"
                   ],
        "name":  "Deep Wine Cord Draped Saree Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  2927,
        "id":  "v-cp-36",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  2399,
        "fabric":  "Modal Satin",
        "category":  "All Collections",
        "description":  "Botanical floral printed satin co-ord set with relaxed pants.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_36_1.jpg",
                       "assets/products/client_prod_36_2.jpg"
                   ],
        "name":  "Floral Printed Silk Co-ord Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4757,
        "id":  "v-cp-37",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3899,
        "fabric":  "Georgette \u0026 Net",
        "category":  "All Collections",
        "description":  "Flared emerald floral pleated Anarkali with sheer dupattas.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_37_1.jpg",
                       "assets/products/client_prod_37_2.jpg",
                       "assets/products/client_prod_37_3.jpg"
                   ],
        "name":  "Emerald Floral Pleated Anarkali Set",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4879,
        "id":  "v-cp-38",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3999,
        "fabric":  "Metallic Lurex",
        "category":  "All Collections",
        "description":  "Bronze sculpted lurex bodice with noir mermaid skirt.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_38_1.jpg",
                       "assets/products/client_prod_38_2.jpg"
                   ],
        "name":  "Bronze Metallic Evening Draped Gown",
        "isNewArrival":  false
    },
    {
        "originalPrice":  3781,
        "id":  "v-cp-39",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3099,
        "fabric":  "Beaded Georgette",
        "category":  "All Collections",
        "description":  "Royal blue cocktail dress with hand-beaded fan bodice drapes.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_39_1.jpg",
                       "assets/products/client_prod_39_2.jpg"
                   ],
        "name":  "Royal Blue Sculpted Fan Dress",
        "isNewArrival":  false
    },
    {
        "originalPrice":  4147,
        "id":  "v-cp-40",
        "sizes":  [
                      "XS",
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL"
                  ],
        "price":  3399,
        "fabric":  "Metallic Tissue",
        "category":  "All Collections",
        "description":  "Gunmetal metallic micro-pleated cocktail dress.",
        "isBestseller":  false,
        "images":  [
                       "assets/products/client_prod_40_1.jpg",
                       "assets/products/client_prod_40_2.jpg",
                       "assets/products/client_prod_40_3.jpg",
                       "assets/products/client_prod_40_4.jpg"
                   ],
        "name":  "Sculpted Gunmetal Cocktail Dress",
        "isNewArrival":  false
    }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, PRODUCTS };
}
