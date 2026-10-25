// VASEVINE — Complete Product Catalog Data (All Client Products)

const CATEGORIES = [
  {
    "id": "draped-saree",
    "slug": "draped-saree",
    "name": "DRAPED SAREE",
    "displayName": "Draped Saree"
  },
  {
    "id": "gown",
    "slug": "gown",
    "name": "GOWN",
    "displayName": "Gown"
  },
  {
    "id": "lehenga",
    "slug": "lehenga",
    "name": "LEHENGA",
    "displayName": "Lehenga"
  },
  {
    "id": "dress",
    "slug": "dress",
    "name": "DRESS",
    "displayName": "Dress"
  },
  {
    "id": "cordset",
    "slug": "cordset",
    "name": "CORDSET",
    "displayName": "Cordset"
  }
];

const PRODUCTS = [
  {
    "id": "v-cp-094",
    "name": "Sculpted Emerald Couture Silhouette",
    "price": 21000,
    "originalPrice": 26250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Micro-Pleated Metallic Tissue & Silk",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_094.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:11.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-095",
    "name": "Royal Ivory Cascade Ensemble",
    "price": 18000,
    "originalPrice": 22500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pure Duchesse Satin & Hand Embroidery",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_095.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:10.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-096",
    "name": "Noir Pleated Statement Gown",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Sculpted Pleated Georgette & Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_096.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:09.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-097",
    "name": "Champagne Shimmer Couture Gown",
    "price": 24000,
    "originalPrice": 30000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Lustrous Metallic Lurex & Micro-Pleats",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_097.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:08.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-098",
    "name": "Crimson Wave Sculpted Ensemble",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Structured Metallic Cord Embroidery & Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_098.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:07.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-099",
    "name": "Midnight Blue Peplum Couture",
    "price": 19000,
    "originalPrice": 23750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pleated Organza, Bugle Beads & Pure Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_099.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:06.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-100",
    "name": "Rose Gold Structured Corset Gown",
    "price": 26000,
    "originalPrice": 32500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Liquid Satin & Precision Zari Detailing",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_100.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:05.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-101",
    "name": "Bronze Metallic Fluted Ensemble",
    "price": 20000,
    "originalPrice": 25000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Metallic Tissue Georgette & Crystals",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_101.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:04.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-102",
    "name": "Azure Drape Sculpted Silhouette",
    "price": 23000,
    "originalPrice": 28750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pleated Georgette & Hand-Embroidered Ribbons",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_102.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:03.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-103",
    "name": "Opulent Gold Wing Couture",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Structured Dimensional Corset & Duchesse Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_103.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:02.936Z",
    "updatedAt": "2026-10-25T09:11:31.937Z"
  },
  {
    "id": "v-cp-104",
    "name": "Wine Criss-Cross Pleated Gown",
    "price": 17000,
    "originalPrice": 21250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Fine Pleated Tulle & Liquid Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_104.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:01.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-105",
    "name": "Sapphire Sculptural Trail Gown",
    "price": 24000,
    "originalPrice": 30000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Micro-Pleated Silk Georgette & Sculpted Bodice",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_105.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:13:00.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-106",
    "name": "Pastel Mint Organza Silhouette",
    "price": 18000,
    "originalPrice": 22500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Handcrafted Foliage Applique & Satin Crepe",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_106.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:59.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-107",
    "name": "Charcoal Metallic Swirl Gown",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Metallic Foil Georgette & Lurex",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_107.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:58.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-108",
    "name": "Blush Pink Waterfall Gown",
    "price": 20000,
    "originalPrice": 25000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Ombre Fluted Pleated Silk & Crepe",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_108.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:57.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-109",
    "name": "Fuchsia Micro-Pleated Drape Ensemble",
    "price": 19000,
    "originalPrice": 23750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Zardozi Embroidered Silk & Flowing Georgette",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_109.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:56.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-110",
    "name": "Gunmetal Dimensional Bodice Gown",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pleated Metallic Shimmer Foil & Crepe",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_110.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:55.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-111",
    "name": "Coral Wave Draped Silhouette",
    "price": 21000,
    "originalPrice": 26250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Gradated Chiffon & Sculpted Bodice",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_111.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:54.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-112",
    "name": "Liquid Silver Goddess Gown",
    "price": 26000,
    "originalPrice": 32500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Liquid Satin & Sequin Mesh Lurex",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_112.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:53.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-113",
    "name": "Elysian Velvet Contour Ensemble",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Italian Velvet & Lurex Tissue",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_113.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:52.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-114",
    "name": "Amber Shimmer Sculpted Gown",
    "price": 23000,
    "originalPrice": 28750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Lurex Tissue & Hand-Set Crystals",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_114.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:51.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-115",
    "name": "Cobalt Radiance Couture Silhouette",
    "price": 20000,
    "originalPrice": 25000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Raw Silk & Zari Thread Embroidery",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_115.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:50.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-116",
    "name": "Peacock Metallic Fan Gown",
    "price": 24000,
    "originalPrice": 30000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Heavy Satin & Chiffon Blend",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_116.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:49.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-117",
    "name": "Scarlet Regal Drape Silhouette",
    "price": 27000,
    "originalPrice": 33750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Silk Organza & Tulle with Crystal Accents",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_117.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:48.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-118",
    "name": "Orchid Pleated Cascade Ensemble",
    "price": 18000,
    "originalPrice": 22500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Satin & Micro-Pleated Chiffon",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_118.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:47.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-119",
    "name": "Molten Bronze Sculpted Corset",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Sculpted Wave Corset & Pure Silk Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_119.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:46.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-120",
    "name": "Lilac Ethereal Fluted Gown",
    "price": 21000,
    "originalPrice": 26250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Organza Satin & Hand-Sewn Seed Pearls",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_120.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:45.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-121",
    "name": "Midnight Noir Crystal Silhouette",
    "price": 28000,
    "originalPrice": 35000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Fine Pleated Tulle, Seed Pearls & Liquid Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_121.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:44.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-122",
    "name": "Champagne Leaf Applique Ensemble",
    "price": 23000,
    "originalPrice": 28750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Handcrafted Foliage Applique & Satin Crepe",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_122.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:43.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-123",
    "name": "Seraphina Structured Wave Gown",
    "price": 16000,
    "originalPrice": 20000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Micro-Pleated Silk Georgette",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_123.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:42.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-124",
    "name": "Aura Sunset Pleated Silhouette",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Ombre Fluted Pleated Silk & Crepe",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_124.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:41.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-125",
    "name": "Plum Sculptural Bodice Gown",
    "price": 19000,
    "originalPrice": 23750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Structured Metallic Cord Embroidery & Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_125.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:40.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-126",
    "name": "Golden Goddess Trail Ensemble",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Lustrous Metallic Lurex & Micro-Pleats",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_126.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:39.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-127",
    "name": "Celeste Pearl Embellished Silhouette",
    "price": 20000,
    "originalPrice": 25000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pleated Organza, Bugle Beads & Pure Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_127.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:38.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-128",
    "name": "Burgundy Infinity Corset Gown",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Sculpted Pleated Georgette & Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_128.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:37.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-129",
    "name": "Verdant Sculpted Drape Ensemble",
    "price": 26000,
    "originalPrice": 32500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Liquid Satin & Micro-Pleated Drape",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_129.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:36.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-130",
    "name": "Tuscan Sun Shimmer Silhouette",
    "price": 19000,
    "originalPrice": 23750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Metallic Tissue Georgette & Crystals",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_130.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:35.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-131",
    "name": "Onyx Structured One-Shoulder Gown",
    "price": 24000,
    "originalPrice": 30000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pleated Georgette & Hand-Embroidered Sequin Ribbons",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_131.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:34.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-132",
    "name": "Sienna Pleated Couture Silhouette",
    "price": 27000,
    "originalPrice": 33750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Crystal-Embellished Pleated Organza & Royal Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_132.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:33.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-133",
    "name": "Gilded Orchid Sculpted Ensemble",
    "price": 21000,
    "originalPrice": 26250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Structured Dimensional Bodice & Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_133.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:32.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-134",
    "name": "Magenta Radiance Draped Silhouette",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Micro-Pleated Silk Georgette & Sculpted Bodice",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_134.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:31.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-135",
    "name": "Dusk Silver Mirage Ensemble",
    "price": 28000,
    "originalPrice": 35000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Metallic Foil Georgette & Heavy Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_135.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:30.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-136",
    "name": "Imperial Rose Contour Gown",
    "price": 20000,
    "originalPrice": 25000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Zardozi Embroidered Silk & Flowing Georgette",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_136.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:29.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-137",
    "name": "Lavender Sculptural Fan Ensemble",
    "price": 19000,
    "originalPrice": 23750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Sculpted Fan Bodice & Silk Crepe Trousers",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_137.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:28.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-138",
    "name": "Blush Blossom Embroidered Silhouette",
    "price": 23000,
    "originalPrice": 28750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Soft Georgette with Linear Embroidery",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_138.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:27.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-139",
    "name": "Saffron Pleated Waterfall Gown",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Gradated Chiffon & Sculpted Bodice",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_139.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:26.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-140",
    "name": "Starlight Metallic Drape Ensemble",
    "price": 24000,
    "originalPrice": 30000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Liquid Satin & Sequin Mesh Lurex",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_140.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:25.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-141",
    "name": "Obsidian Wave Sculpted Gown",
    "price": 26000,
    "originalPrice": 32500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Italian Velvet & Lurex Tissue",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_141.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:24.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-142",
    "name": "Velvet Rose Draped Silhouette",
    "price": 25000,
    "originalPrice": 31250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Pleated Organza, Bugle Beads & Pure Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_142.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:23.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-143",
    "name": "Solstice Gold Pleated Gown",
    "price": 24000,
    "originalPrice": 30000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Metallic Tissue Georgette & Crystals",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_143.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:22.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-144",
    "name": "Mariposa Sculptured Couture Ensemble",
    "price": 21000,
    "originalPrice": 26250,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Micro-Pleated Silk Georgette & Sculpted Bodice",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_144.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:21.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-145",
    "name": "Celestial Blue Contour Gown",
    "price": 22000,
    "originalPrice": 27500,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Fine Pleated Tulle, Seed Pearls & Liquid Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_145.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:20.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-146",
    "name": "Ruby Empress Structured Silhouette",
    "price": 27000,
    "originalPrice": 33750,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Crystal-Embellished Pleated Organza & Royal Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_146.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:19.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
  {
    "id": "v-cp-147",
    "name": "Periwinkle Sculptural Draped Ensemble",
    "price": 20000,
    "originalPrice": 25000,
    "description": "A refined VASEVINE statement silhouette crafted with structured detailing, luxury drapery, and a graceful contemporary finish.",
    "fabric": "Sculpted Wave Corset & Pure Silk Satin",
    "category": null,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 20,
    "images": [
      "assets/products/client_prod_147.jpg"
    ],
    "status": "active",
    "isBestseller": false,
    "isNewArrival": true,
    "createdAt": "2026-10-25T09:12:18.936Z",
    "updatedAt": "2026-10-25T09:11:31.938Z"
  },
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
    "category": null,
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
