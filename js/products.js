// VASEVINE Product Catalog Data

const CATEGORIES = [
  {
    id: 'cord-sets',
    name: 'Cord Sets',
    image: 'assets/products/cord_set_crimson.jpeg',
    description: 'Sophisticated two-piece tailored sets blending modern silhouettes with luxurious detailing.'
  },
  {
    id: 'dresses',
    name: 'Dresses',
    image: 'assets/products/dress_coral_pleated.jpeg',
    description: 'Couture dresses featuring hand-sculpted pleats and contemporary editorial shapes.'
  },
  {
    id: 'drapes',
    name: 'Drapes',
    image: 'assets/products/drape_champagne_hero.jpeg',
    description: 'Avant-garde saree drapes and sculpted drapes reimagined for celebratory evenings.'
  },
  {
    id: 'gowns',
    name: 'Gowns',
    image: 'assets/products/gown_charcoal_grey.jpeg',
    description: 'Floor-sweeping evening gowns with regal embellishments and fluid metallic drapes.'
  },
  {
    id: 'anarkalis',
    name: 'Anarkalis',
    image: 'assets/products/anarkali_white_main.jpeg',
    description: 'Timeless flared silhouettes with intricate gold threadwork and delicate dupattas.'
  }
];

const PRODUCTS = [
  {
    id: 'v-cs-01',
    name: 'Crimson Sculpted Cord Set',
    category: 'Cord Sets',
    price: 3499,
    originalPrice: 4200,
    isBestseller: true,
    isNewArrival: false,
    images: [
      'assets/products/cord_set_crimson.jpeg'
    ],
    description: 'Crafted in structured rich crimson wool-crepe, featuring exaggerated sculpted shoulder drapes and flare trousers for an empowering power-dressing silhouette.',
    fabric: 'Wool Crepe & Structured Satin',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'v-cs-02',
    name: 'Royal Blue Power Cord Set',
    category: 'Cord Sets',
    price: 3999,
    originalPrice: 4800,
    isBestseller: false,
    isNewArrival: true,
    images: [
      'assets/products/cord_set_royal_blue.jpeg'
    ],
    description: 'An architectural cobalt blue jacket set with micro-pleated wing shoulders paired with tailored flared pants.',
    fabric: 'Poly-Silk Blend',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'v-cs-03',
    name: 'Noir Silver Sculpted Cord Set',
    category: 'Cord Sets',
    price: 3799,
    originalPrice: 4500,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/cord_set_noir_silver.jpeg'
    ],
    description: 'Dramatic black velvet flared trousers paired with a metallic silver sculpted corset top, designed for gala dinners.',
    fabric: 'Italian Velvet & Metallic Lurex',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'v-cs-04',
    name: 'Metallic Sculpted Velvet Set',
    category: 'Cord Sets',
    price: 3299,
    originalPrice: 3999,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/cord_set_metallic_velvet.jpeg'
    ],
    description: 'High-contrast metallic corsetry paired with fluid velvet trousers or mini skirts.',
    fabric: 'Pleated Lurex & Micro-velvet',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-cs-05',
    name: 'Floral Printed Cord Set',
    category: 'Cord Sets',
    price: 2299,
    originalPrice: 2899,
    isBestseller: true,
    isNewArrival: false,
    images: [
      'assets/products/cord_set_floral.jpeg'
    ],
    description: 'Lightweight printed co-ord set with effortless collar detailing and relaxed pants, perfect for day soirées.',
    fabric: 'Pure Modal Satin',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'v-dr-01',
    name: 'Ivory Pearl Drape Dress',
    category: 'Dresses',
    price: 2899,
    originalPrice: 3500,
    isBestseller: false,
    isNewArrival: true,
    images: [
      'assets/products/dress_white_pearl_main.jpeg',
      'assets/products/dress_white_pearl_1.jpeg',
      'assets/products/dress_white_pearl_2.jpeg'
    ],
    description: 'Fluid ivory organza mini dress adorned with delicate freshwater pearl droplets and 3D architectural body drapes.',
    fabric: 'Pleated Organza & Pearls',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-dr-02',
    name: 'Coral Pleated Sculpted Mini Dress',
    category: 'Dresses',
    price: 2499,
    originalPrice: 2999,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_coral_mini.jpeg',
      'assets/products/dress_coral_pleated.jpeg'
    ],
    description: 'Vibrant coral pink dress crafted in micro-pleated organza with asymmetric shoulder accents.',
    fabric: 'Micro-Pleated Organza',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'v-dr-03',
    name: 'Fuchsia Sculpted Cocktail Dress',
    category: 'Dresses',
    price: 2699,
    originalPrice: 3299,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_fuchsia_cocktail.jpeg'
    ],
    description: 'Electric pink sculpted cocktail dress with dramatic off-shoulder butterfly drapes.',
    fabric: 'Chiffon Satin Blend',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-dr-04',
    name: 'Pastel Sculpted Resort Dress',
    category: 'Dresses',
    price: 2799,
    originalPrice: 3400,
    isBestseller: false,
    isNewArrival: true,
    images: [
      'assets/products/dress_pastel_resort.jpeg'
    ],
    description: 'Sun-drenched mint blue and soft yellow pleated resort dress designed for tropical getaways.',
    fabric: 'Dual-Tone Georgette',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'v-dr-05',
    name: 'Ivory Sculpted Corset Dress',
    category: 'Dresses',
    price: 2999,
    originalPrice: 3600,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_ivory_corset.jpeg'
    ],
    description: 'Pure cream corset dress featuring swirling wave drapes and subtle sheer panels.',
    fabric: 'Silk Organza & Tulle',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'v-dr-06',
    name: 'Blush Pink Sculpted Mini Dress',
    category: 'Dresses',
    price: 2599,
    originalPrice: 3100,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_blush_sculpted.jpeg'
    ],
    description: 'Soft rose-pink sculpted dress with sweeping off-shoulder drape loops.',
    fabric: 'Pleated Chiffon',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-dr-07',
    name: 'Gold Sequin Sculpted Bustier Dress',
    category: 'Dresses',
    price: 3199,
    originalPrice: 3800,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_sequin_gold_1.jpeg',
      'assets/products/dress_sequin_gold_2.jpeg',
      'assets/products/dress_sequin_gold_3.jpeg'
    ],
    description: 'Gilded sequin mini dress with an oversized pleated infinity swirl overlay across the bust.',
    fabric: 'Sequin Mesh & Lurex',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'v-dr-08',
    name: 'Royal Blue Beaded Cocktail Dress',
    category: 'Dresses',
    price: 2999,
    originalPrice: 3600,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_royal_blue_beaded.jpeg'
    ],
    description: 'Intricately hand-beaded royal blue dress featuring a sculpted fan neckline.',
    fabric: 'Beaded Net & Georgette',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-dp-01',
    name: 'Champagne Metallic Draped Saree Gown',
    category: 'Drapes',
    price: 4499,
    originalPrice: 5500,
    isBestseller: true,
    isNewArrival: true,
    images: [
      'assets/products/drape_champagne_hero.jpeg',
      'assets/products/drape_gold_model_full.jpeg',
      'assets/products/drape_gold_model_detail.jpeg'
    ],
    description: 'Exquisite metallic champagne gold draped saree gown featuring a sculpted pleated pallu with structured architectural bodice folds.',
    fabric: 'Metallic Foil Georgette',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'v-dp-02',
    name: 'Sculpted Metallic Evening Draped Gown',
    category: 'Drapes',
    price: 3999,
    originalPrice: 4800,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/drape_metallic_evening.jpeg'
    ],
    description: 'Black mermaid skirt combined with a bronze sculpted asymmetric drape bodice for red carpet events.',
    fabric: 'Metallic Lurex & Satin Lycra',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'v-dp-03',
    name: 'Sculpted Crimson Drape Gown',
    category: 'Drapes',
    price: 4299,
    originalPrice: 5200,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/drape_crimson_trail.jpeg'
    ],
    description: 'Fiery red pre-draped gown featuring a dramatic floor-length waterfall trail.',
    fabric: 'Satin & Micro-Pleated Chiffon',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-dp-04',
    name: 'Olive & Black Draped Couture Dress',
    category: 'Drapes',
    price: 3899,
    originalPrice: 4600,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/drape_olive_black.jpeg',
      'assets/products/drape_olive_black_2.jpeg'
    ],
    description: 'Olive green sequin bustier draped with a sweeping side satin trail over a noir column skirt.',
    fabric: 'Sequin Embroidery & Satin',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'v-dp-05',
    name: 'Drape Saree Set',
    category: 'Drapes',
    price: 2999,
    originalPrice: 3800,
    isBestseller: true,
    isNewArrival: false,
    images: [
      'assets/products/drape_wine_saree.jpeg'
    ],
    description: 'Deep wine pre-stitched draped saree with a geometric cord-embroidered crop blouse.',
    fabric: 'Liquid Satin & Cord Embroidery',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'v-dp-06',
    name: 'Ombre Blue Pleated Draped Top',
    category: 'Drapes',
    price: 2999,
    originalPrice: 3500,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/drape_ombre_blue_top.jpeg'
    ],
    description: 'Azure sky blue and cream gradient pleated drape top designed to style with sarees or trousers.',
    fabric: 'Gradated Micro-Pleated Chiffon',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-gw-01',
    name: 'Elegant Gown',
    category: 'Gowns',
    price: 3799,
    originalPrice: 4500,
    isBestseller: true,
    isNewArrival: false,
    images: [
      'assets/products/gown_charcoal_grey.jpeg'
    ],
    description: 'Refined charcoal grey metallic gown with criss-cross bodice drapes and a fluid floor-length skirt.',
    fabric: 'Metallic Tissue Georgette',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'v-gw-02',
    name: 'Gold & Bronze Shimmer Draped Gown',
    category: 'Gowns',
    price: 4899,
    originalPrice: 5900,
    isBestseller: false,
    isNewArrival: true,
    images: [
      'assets/products/gown_gold_bronze_shimmer.jpeg'
    ],
    description: 'Opulent dual gold and bronze shimmering gown featuring hand-beaded neckline borders and a flared trail.',
    fabric: 'Lurex Tissue & Crystal Embroidery',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'v-gw-03',
    name: 'Black & Gold Lattice Peplum Gown',
    category: 'Gowns',
    price: 4299,
    originalPrice: 5100,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/gown_black_gold_lattice.jpeg'
    ],
    description: 'Sculpted peplum gown with geometric gold grid embroidery and off-shoulder shoulder drapes.',
    fabric: 'Raw Silk & Gold Zari Thread',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'v-gw-04',
    name: 'Ivory Sculpted Asymmetric Gown',
    category: 'Gowns',
    price: 4199,
    originalPrice: 4999,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/gown_ivory_asymmetric.jpeg'
    ],
    description: 'Creamy ivory couture gown with an asymmetric high-slit skirt and draped waist knot.',
    fabric: 'Pleated Satin',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'v-gw-05',
    name: 'Scarlet Red High-Low Satin Gown',
    category: 'Gowns',
    price: 4599,
    originalPrice: 5400,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/gown_scarlet_high_low.jpeg'
    ],
    description: 'Vibrant scarlet satin ballgown with a high-low hemline and pleated bodice detailing.',
    fabric: 'Heavy Satin & Micro-Pleated Chiffon',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'v-an-01',
    name: 'Embroidered Anarkali Set',
    category: 'Anarkalis',
    price: 3499,
    originalPrice: 4200,
    isBestseller: true,
    isNewArrival: false,
    images: [
      'assets/products/anarkali_white_main.jpeg',
      'assets/products/anarkali_ivory_detail.jpeg'
    ],
    description: 'Golden ivory flared Anarkali embellished with delicate badla threadwork, paired with an embroidered organza dupatta.',
    fabric: 'Georgette & Organza',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'v-an-02',
    name: 'Blush Pink Embroidered Anarkali',
    category: 'Anarkalis',
    price: 3999,
    originalPrice: 4800,
    isBestseller: false,
    isNewArrival: true,
    images: [
      'assets/products/anarkali_blush_banner.jpeg'
    ],
    description: 'Fresh blush pink kalidar Anarkali with subtle gota patti border highlights and lightweight net dupatta.',
    fabric: 'Mulmul Silk & Net',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'v-an-03',
    name: 'Sapphire Sculpted Evening Dress',
    category: 'Dresses',
    price: 3299,
    originalPrice: 3999,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_sapphire_beaded.jpeg'
    ],
    description: 'Deep sapphire blue beaded midi dress with a swooping sculpted bodice wrap.',
    fabric: 'Sequined Lace & Chiffon',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'v-an-04',
    name: 'Gunmetal Metallic Sculpted Dress',
    category: 'Dresses',
    price: 3399,
    originalPrice: 4100,
    isBestseller: false,
    isNewArrival: false,
    images: [
      'assets/products/dress_gunmetal_sculpted.jpeg'
    ],
    description: 'Gunmetal metallic textured cocktail dress featuring a dramatic chest swirl drape.',
    fabric: 'Metallic Lurex Tissue',
    sizes: ['XS', 'S', 'M', 'L']
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, PRODUCTS };
}
