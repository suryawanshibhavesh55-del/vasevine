// VASEVINE — Complete Product Catalog Data (All Client Products)

const CATEGORIES = [
  {
    "id": "all-collections",
    "name": "All Collections",
    "image": "",
    "description": "Explore the complete luxury couture collection from VASEVINE."
  }
];

const PRODUCTS = [
  {
    "originalPrice": 3124,
    "id": "v-cp-001",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2499,
    "fabric": "Metallic Foil Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_001.jpg"
    ],
    "name": "Sculpted Draped Saree Ensemble",
    "isNewArrival": false
  },
  {
    "originalPrice": 3499,
    "id": "v-cp-002",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2799,
    "fabric": "Mulmul Silk & Organza",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_002.jpg"
    ],
    "name": "Royal Kalidar Anarkali Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 3749,
    "id": "v-cp-003",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2999,
    "fabric": "Pleated Organza & Pearls",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_003.jpg"
    ],
    "name": "Elegance Organza Cocktail Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 4124,
    "id": "v-cp-004",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3299,
    "fabric": "Italian Velvet & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_004.jpg"
    ],
    "name": "Couture Velvet Corset Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 4374,
    "id": "v-cp-005",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3499,
    "fabric": "Dual-Tone Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_005.jpg"
    ],
    "name": "Midnight Resort Pleated Dress",
    "isNewArrival": true
  },
  {
    "originalPrice": 4624,
    "id": "v-cp-006",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3699,
    "fabric": "Chiffon Satin Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_006.jpg"
    ],
    "name": "Champagne Butterfly Sleeve Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 4874,
    "id": "v-cp-007",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3899,
    "fabric": "Poly-Silk Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_007.jpg"
    ],
    "name": "Crimson Tailored Power Suit",
    "isNewArrival": false
  },
  {
    "originalPrice": 4999,
    "id": "v-cp-008",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3999,
    "fabric": "Lurex Tissue & Crystals",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_008.jpg"
    ],
    "name": "Ivory Shimmer Evening Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 5249,
    "id": "v-cp-009",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4199,
    "fabric": "Raw Silk & Zari Thread",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_009.jpg"
    ],
    "name": "Blush Pink Peplum Lattice Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 5374,
    "id": "v-cp-010",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4299,
    "fabric": "Heavy Satin & Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_010.jpg"
    ],
    "name": "Emerald High-Low Satin Ballgown",
    "isNewArrival": true
  },
  {
    "originalPrice": 5624,
    "id": "v-cp-011",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4499,
    "fabric": "Liquid Satin & Embroidery",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_011.jpg"
    ],
    "name": "Sapphire Cord-Embroidered Draped Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 5999,
    "id": "v-cp-013",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4799,
    "fabric": "Silk Organza & Tulle",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_013.jpg"
    ],
    "name": "Noir Velvet Wave Drape Corset",
    "isNewArrival": false
  },
  {
    "originalPrice": 6124,
    "id": "v-cp-014",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4899,
    "fabric": "Satin & Micro-Pleated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_014.jpg"
    ],
    "name": "Coral Pleated Waterfall Trail Drape Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 3124,
    "id": "v-cp-015",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2499,
    "fabric": "Georgette & Net",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_015.jpg"
    ],
    "name": "Pastel Mint Embroidered Anarkali",
    "isNewArrival": true
  },
  {
    "originalPrice": 3499,
    "id": "v-cp-016",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2799,
    "fabric": "Gradated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_016.jpg"
    ],
    "name": "Fuchsia Micro-Pleated Drape Top",
    "isNewArrival": false
  },
  {
    "originalPrice": 3749,
    "id": "v-cp-017",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2999,
    "fabric": "Metallic Tissue Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_017.jpg"
    ],
    "name": "Rose Pink Criss-Cross Bodice Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 4124,
    "id": "v-cp-018",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3299,
    "fabric": "Organza Satin",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_018.jpg"
    ],
    "name": "Bronze Lurex 3D Floral Organza Mini",
    "isNewArrival": false
  },
  {
    "originalPrice": 4374,
    "id": "v-cp-019",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3499,
    "fabric": "Beaded Net & Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_019.jpg"
    ],
    "name": "Wine Red Hand-Beaded Fan Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 4624,
    "id": "v-cp-020",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3699,
    "fabric": "Metallic Lurex & Satin",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_020.jpg"
    ],
    "name": "Azure Ombre Mermaid Evening Gown",
    "isNewArrival": true
  },
  {
    "originalPrice": 4874,
    "id": "v-cp-021",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3899,
    "fabric": "Metallic Lurex Tissue",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_021.jpg"
    ],
    "name": "Charcoal Sculpted Chest Swirl Mini",
    "isNewArrival": false
  },
  {
    "originalPrice": 4999,
    "id": "v-cp-022",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3999,
    "fabric": "Metallic Foil Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_022.jpg"
    ],
    "name": "Gunmetal Sequin Lace Midi Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 5249,
    "id": "v-cp-023",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4199,
    "fabric": "Mulmul Silk & Organza",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_023.jpg"
    ],
    "name": "Botanical Silk Side Trail Column Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 5374,
    "id": "v-cp-024",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4299,
    "fabric": "Pleated Organza & Pearls",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_024.jpg"
    ],
    "name": "Opulent Gold Sculpted Wing Corset",
    "isNewArrival": false
  },
  {
    "originalPrice": 5624,
    "id": "v-cp-025",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4499,
    "fabric": "Italian Velvet & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_025.jpg"
    ],
    "name": "Sculpted Draped Saree Ensemble",
    "isNewArrival": true
  },
  {
    "originalPrice": 5749,
    "id": "v-cp-026",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4599,
    "fabric": "Dual-Tone Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_026.jpg"
    ],
    "name": "Royal Kalidar Anarkali Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 5999,
    "id": "v-cp-027",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4799,
    "fabric": "Chiffon Satin Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_027.jpg"
    ],
    "name": "Elegance Organza Cocktail Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 6124,
    "id": "v-cp-028",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4899,
    "fabric": "Poly-Silk Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_028.jpg"
    ],
    "name": "Couture Velvet Corset Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 3124,
    "id": "v-cp-029",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2499,
    "fabric": "Lurex Tissue & Crystals",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_029.jpg"
    ],
    "name": "Midnight Resort Pleated Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 3499,
    "id": "v-cp-030",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2799,
    "fabric": "Raw Silk & Zari Thread",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_030.jpg"
    ],
    "name": "Champagne Butterfly Sleeve Gown",
    "isNewArrival": true
  },
  {
    "originalPrice": 3749,
    "id": "v-cp-031",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2999,
    "fabric": "Heavy Satin & Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_031.jpg"
    ],
    "name": "Crimson Tailored Power Suit",
    "isNewArrival": false
  },
  {
    "originalPrice": 4124,
    "id": "v-cp-032",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3299,
    "fabric": "Liquid Satin & Embroidery",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_032.jpg"
    ],
    "name": "Ivory Shimmer Evening Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 4374,
    "id": "v-cp-033",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3499,
    "fabric": "Sequin Mesh & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_033.jpg"
    ],
    "name": "Noir & Gold Sculpted Peplum Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 4874,
    "id": "v-cp-035",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3899,
    "fabric": "Satin & Micro-Pleated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_035.jpg"
    ],
    "name": "Sapphire Cord-Embroidered Draped Saree",
    "isNewArrival": true
  },
  {
    "originalPrice": 4999,
    "id": "v-cp-036",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3999,
    "fabric": "Georgette & Net",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_036.jpg"
    ],
    "name": "Golden Foil Infinity Bustier Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 5249,
    "id": "v-cp-037",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4199,
    "fabric": "Gradated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_037.jpg"
    ],
    "name": "Crimson Sculpted Power Pantsuit",
    "isNewArrival": false
  },
  {
    "originalPrice": 5624,
    "id": "v-cp-039",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4499,
    "fabric": "Organza Satin",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_039.jpg"
    ],
    "name": "Pastel Mint Embroidered Anarkali",
    "isNewArrival": false
  },
  {
    "originalPrice": 5749,
    "id": "v-cp-040",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4599,
    "fabric": "Beaded Net & Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_040.jpg"
    ],
    "name": "Fuchsia Micro-Pleated Drape Top",
    "isNewArrival": true
  },
  {
    "originalPrice": 5999,
    "id": "v-cp-041",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4799,
    "fabric": "Metallic Lurex & Satin",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_041.jpg"
    ],
    "name": "Rose Pink Criss-Cross Bodice Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 6124,
    "id": "v-cp-042",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4899,
    "fabric": "Metallic Lurex Tissue",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_042.jpg"
    ],
    "name": "Bronze Lurex 3D Floral Organza Mini",
    "isNewArrival": false
  },
  {
    "originalPrice": 3124,
    "id": "v-cp-043",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2499,
    "fabric": "Metallic Foil Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_043.jpg"
    ],
    "name": "Wine Red Hand-Beaded Fan Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 3499,
    "id": "v-cp-044",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2799,
    "fabric": "Mulmul Silk & Organza",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_044.jpg"
    ],
    "name": "Azure Ombre Mermaid Evening Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 3749,
    "id": "v-cp-045",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2999,
    "fabric": "Pleated Organza & Pearls",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_045.jpg"
    ],
    "name": "Charcoal Sculpted Chest Swirl Mini",
    "isNewArrival": true
  },
  {
    "originalPrice": 4124,
    "id": "v-cp-046",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3299,
    "fabric": "Italian Velvet & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_046.jpg"
    ],
    "name": "Gunmetal Sequin Lace Midi Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 4374,
    "id": "v-cp-047",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3499,
    "fabric": "Dual-Tone Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_047.jpg"
    ],
    "name": "Botanical Silk Side Trail Column Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 4624,
    "id": "v-cp-048",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3699,
    "fabric": "Chiffon Satin Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_048.jpg"
    ],
    "name": "Opulent Gold Sculpted Wing Corset",
    "isNewArrival": false
  },
  {
    "originalPrice": 4874,
    "id": "v-cp-049",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3899,
    "fabric": "Poly-Silk Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_049.jpg"
    ],
    "name": "Sculpted Draped Saree Ensemble",
    "isNewArrival": false
  },
  {
    "originalPrice": 4999,
    "id": "v-cp-050",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3999,
    "fabric": "Lurex Tissue & Crystals",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_050.jpg"
    ],
    "name": "Royal Kalidar Anarkali Set",
    "isNewArrival": true
  },
  {
    "originalPrice": 5249,
    "id": "v-cp-051",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4199,
    "fabric": "Raw Silk & Zari Thread",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_051.jpg"
    ],
    "name": "Elegance Organza Cocktail Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 5374,
    "id": "v-cp-052",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4299,
    "fabric": "Heavy Satin & Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_052.jpg"
    ],
    "name": "Couture Velvet Corset Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 5624,
    "id": "v-cp-053",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4499,
    "fabric": "Liquid Satin & Embroidery",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_053.jpg"
    ],
    "name": "Midnight Resort Pleated Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 5749,
    "id": "v-cp-054",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4599,
    "fabric": "Sequin Mesh & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_054.jpg"
    ],
    "name": "Champagne Butterfly Sleeve Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 5999,
    "id": "v-cp-055",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4799,
    "fabric": "Silk Organza & Tulle",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_055.jpg"
    ],
    "name": "Crimson Tailored Power Suit",
    "isNewArrival": true
  },
  {
    "originalPrice": 6124,
    "id": "v-cp-056",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4899,
    "fabric": "Satin & Micro-Pleated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_056.jpg"
    ],
    "name": "Ivory Shimmer Evening Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 3124,
    "id": "v-cp-057",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2499,
    "fabric": "Georgette & Net",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_057.jpg"
    ],
    "name": "Blush Pink Peplum Lattice Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 3499,
    "id": "v-cp-058",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2799,
    "fabric": "Gradated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_058.jpg"
    ],
    "name": "Emerald High-Low Satin Ballgown",
    "isNewArrival": false
  },
  {
    "originalPrice": 3749,
    "id": "v-cp-059",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2999,
    "fabric": "Metallic Tissue Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_059.jpg"
    ],
    "name": "Sapphire Cord-Embroidered Draped Saree",
    "isNewArrival": false
  },
  {
    "originalPrice": 4124,
    "id": "v-cp-060",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3299,
    "fabric": "Organza Satin",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_060.jpg"
    ],
    "name": "Golden Foil Infinity Bustier Dress",
    "isNewArrival": true
  },
  {
    "originalPrice": 4374,
    "id": "v-cp-061",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3499,
    "fabric": "Beaded Net & Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_061.jpg"
    ],
    "name": "Noir Velvet Wave Drape Corset",
    "isNewArrival": false
  },
  {
    "originalPrice": 4624,
    "id": "v-cp-062",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3699,
    "fabric": "Metallic Lurex & Satin",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_062.jpg"
    ],
    "name": "Coral Pleated Waterfall Trail Drape Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 4874,
    "id": "v-cp-063",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3899,
    "fabric": "Metallic Lurex Tissue",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_063.jpg"
    ],
    "name": "Pastel Mint Embroidered Anarkali",
    "isNewArrival": false
  },
  {
    "originalPrice": 4999,
    "id": "v-cp-064",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3999,
    "fabric": "Metallic Foil Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_064.jpg"
    ],
    "name": "Fuchsia Micro-Pleated Drape Top",
    "isNewArrival": false
  },
  {
    "originalPrice": 5249,
    "id": "v-cp-065",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4199,
    "fabric": "Mulmul Silk & Organza",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_065.jpg"
    ],
    "name": "Rose Pink Criss-Cross Bodice Gown",
    "isNewArrival": true
  },
  {
    "originalPrice": 5374,
    "id": "v-cp-066",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4299,
    "fabric": "Pleated Organza & Pearls",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_066.jpg"
    ],
    "name": "Bronze Lurex 3D Floral Organza Mini",
    "isNewArrival": false
  },
  {
    "originalPrice": 5624,
    "id": "v-cp-067",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4499,
    "fabric": "Italian Velvet & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_067.jpg"
    ],
    "name": "Wine Red Hand-Beaded Fan Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 5999,
    "id": "v-cp-069",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4799,
    "fabric": "Chiffon Satin Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_069.jpg"
    ],
    "name": "Charcoal Sculpted Chest Swirl Mini",
    "isNewArrival": false
  },
  {
    "originalPrice": 6124,
    "id": "v-cp-070",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4899,
    "fabric": "Poly-Silk Blend",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_070.jpg"
    ],
    "name": "Gunmetal Sequin Lace Midi Dress",
    "isNewArrival": true
  },
  {
    "originalPrice": 3124,
    "id": "v-cp-071",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2499,
    "fabric": "Lurex Tissue & Crystals",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_071.jpg"
    ],
    "name": "Botanical Silk Side Trail Column Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 3499,
    "id": "v-cp-072",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2799,
    "fabric": "Raw Silk & Zari Thread",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_072.jpg"
    ],
    "name": "Opulent Gold Sculpted Wing Corset",
    "isNewArrival": false
  },
  {
    "originalPrice": 3749,
    "id": "v-cp-073",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 2999,
    "fabric": "Heavy Satin & Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_073.jpg"
    ],
    "name": "Sculpted Draped Saree Ensemble",
    "isNewArrival": false
  },
  {
    "originalPrice": 4124,
    "id": "v-cp-074",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3299,
    "fabric": "Liquid Satin & Embroidery",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_074.jpg"
    ],
    "name": "Royal Kalidar Anarkali Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 4374,
    "id": "v-cp-075",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3499,
    "fabric": "Sequin Mesh & Lurex",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_075.jpg"
    ],
    "name": "Elegance Organza Cocktail Dress",
    "isNewArrival": true
  },
  {
    "originalPrice": 4624,
    "id": "v-cp-076",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3699,
    "fabric": "Silk Organza & Tulle",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_076.jpg"
    ],
    "name": "Couture Velvet Corset Set",
    "isNewArrival": false
  },
  {
    "originalPrice": 4874,
    "id": "v-cp-077",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3899,
    "fabric": "Satin & Micro-Pleated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": true,
    "images": [
      "assets/products/client_prod_077.jpg"
    ],
    "name": "Midnight Resort Pleated Dress",
    "isNewArrival": false
  },
  {
    "originalPrice": 4999,
    "id": "v-cp-078",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 3999,
    "fabric": "Georgette & Net",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_078.jpg"
    ],
    "name": "Champagne Butterfly Sleeve Gown",
    "isNewArrival": false
  },
  {
    "originalPrice": 5249,
    "id": "v-cp-079",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4199,
    "fabric": "Gradated Chiffon",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_079.jpg"
    ],
    "name": "Crimson Tailored Power Suit",
    "isNewArrival": false
  },
  {
    "originalPrice": 5374,
    "id": "v-cp-080",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "price": 4299,
    "fabric": "Metallic Tissue Georgette",
    "category": "All Collections",
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "isBestseller": false,
    "images": [
      "assets/products/client_prod_080.jpg"
    ],
    "name": "Ivory Shimmer Evening Gown",
    "isNewArrival": true
  },
  {
    "id": "v-cp-081",
    "name": "Aura Champagne Pleated Ballgown",
    "price": 4499,
    "originalPrice": 5599,
    "category": "All Collections",
    "fabric": "Micro-Pleated Metallic Tissue & Silk",
    "description": "A radiant couture ballgown sculpted in shimmering micro-pleated metallic tissue with structured dimensional bodice draping.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_081.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  },
  {
    "id": "v-cp-082",
    "name": "Peacock Blue Sculpted Cascade Dress",
    "price": 3799,
    "originalPrice": 4699,
    "category": "All Collections",
    "fabric": "Lustrous Metallic Lurex & Micro-Pleats",
    "description": "A showstopping metallic cocktail dress featuring a fan-sculpted sweetheart neckline and a dramatic floor-sweeping side cascade.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_082.jpg"
    ],
    "isBestseller": false,
    "isNewArrival": true
  },
  {
    "id": "v-cp-083",
    "name": "Blush Rose Pleated Cascade Gown",
    "price": 4299,
    "originalPrice": 5299,
    "category": "All Collections",
    "fabric": "Pleated Georgette & Hand-Embroidered Sequin Ribbons",
    "description": "An ethereal blush pink evening gown featuring architectural pleating, hand-embroidered linear sequin detailing, and a sensual side slit.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_083.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  },
  {
    "id": "v-cp-084",
    "name": "Burgundy Sculptural Tulle Cutout Gown",
    "price": 4599,
    "originalPrice": 5799,
    "category": "All Collections",
    "fabric": "Sculpted Pleated Georgette & Illusion Tulle",
    "description": "A dramatic burgundy couture silhouette defined by continuous sculptural pleated swirls, one-shoulder drape, and subtle illusion tulle accents.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_084.jpg"
    ],
    "isBestseller": false,
    "isNewArrival": true
  },
  {
    "id": "v-cp-085",
    "name": "Midnight Navy Pleated Corset Ensemble",
    "price": 3999,
    "originalPrice": 4999,
    "category": "All Collections",
    "fabric": "Pleated Organza, Bugle Beads & Pure Satin",
    "description": "A sophisticated one-shoulder navy peplum corset with micro-crystal pinstripe fluting paired with a sweeping duchesse satin skirt.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_085.jpg"
    ],
    "isBestseller": false,
    "isNewArrival": true
  },
  {
    "id": "v-cp-086",
    "name": "Sunset Ombre Sculpted Corset Gown",
    "price": 4399,
    "originalPrice": 5499,
    "category": "All Collections",
    "fabric": "Ombre Fluted Pleated Silk & Crepe",
    "description": "A dynamic sunset gradient gown in vibrant fuchsia and flame orange, highlighted by a fluted sculptural corset bodice and high slit.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_086.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  },
  {
    "id": "v-cp-087",
    "name": "Slate Metallic Fan-Drape Cocktail Dress",
    "price": 3899,
    "originalPrice": 4899,
    "category": "All Collections",
    "fabric": "Pleated Metallic Shimmer Foil & Crepe",
    "description": "An avant-garde sculpted cocktail dress crafted in glistening charcoal foil with an architectural sunburst shoulder drape and cascade.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_087.jpg"
    ],
    "isBestseller": false,
    "isNewArrival": true
  },
  {
    "id": "v-cp-088",
    "name": "Rani Fuchsia Embroidered Cape Saree Set",
    "price": 4699,
    "originalPrice": 5899,
    "category": "All Collections",
    "fabric": "Zardozi Embroidered Silk & Flowing Georgette",
    "description": "A vibrant rani pink modern saree set featuring a crystal and pearl hand-embroidered bustier, sculpted waistband, and floor-length sheer capes.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_088.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  },
  {
    "id": "v-cp-089",
    "name": "Champagne Leaf Applique Saree Gown",
    "price": 4599,
    "originalPrice": 5699,
    "category": "All Collections",
    "fabric": "Handcrafted Zari Foliage Applique & Satin Crepe",
    "description": "A couture draped saree gown adorned with exquisite three-dimensional metallic leaf motifs across the shoulder and bodice.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_089.jpg"
    ],
    "isBestseller": false,
    "isNewArrival": true
  },
  {
    "id": "v-cp-090",
    "name": "Signature Burgundy Swirl Couture Gown",
    "price": 4799,
    "originalPrice": 5999,
    "category": "All Collections",
    "fabric": "Micro-Pleated Silk Georgette & Sculpted Bodice",
    "description": "Vasevine signature couture triumph showcasing fluid circular drape architecture, dramatic one-shoulder structure, and seamless contouring.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_090.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  },
  {
    "id": "v-cp-091",
    "name": "Molten Gold Sculpted Corset Ballgown",
    "price": 4899,
    "originalPrice": 6199,
    "category": "All Collections",
    "fabric": "Structured Metallic Cord Embroidery & Duchesse Satin",
    "description": "A regal black-tie statement pairing a sculpted molten-gold dimensional wave corset with an opulent midnight black gathered satin skirt.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_091.jpg"
    ],
    "isBestseller": false,
    "isNewArrival": true
  },
  {
    "id": "v-cp-092",
    "name": "Serene Ice Blue Pearl Corset Gown",
    "price": 4699,
    "originalPrice": 5899,
    "category": "All Collections",
    "fabric": "Fine Pleated Tulle, Hand-Sewn Pearls & Liquid Satin",
    "description": "A poetic masterpiece in serene ice blue featuring pleated wing shoulders, scattered luminous seed pearls, and a liquid satin draped skirt.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_092.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  },
  {
    "id": "v-cp-093",
    "name": "Scarlet Ruby Crystal Sculpted Gown",
    "price": 4999,
    "originalPrice": 6299,
    "category": "All Collections",
    "fabric": "Crystal-Embellished Pleated Organza & Royal Satin",
    "description": "An opulent scarlet red couture gown adorned with hand-placed ruby crystals, sculpted micro-pleated crossover bodice, and royal side train.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "assets/products/client_prod_093.jpg"
    ],
    "isBestseller": true,
    "isNewArrival": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, PRODUCTS };
}
