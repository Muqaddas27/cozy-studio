export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  area: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  gallery: string[];
  awards?: string;
}

export const projectsData: Project[] = [
  // Luxury Residence Projects
  {
    id: 1,
    slug: "chelsea-penthouse",
    title: "Chelsea Penthouse",
    location: "London, UK",
    category: "Luxury Residence",
    year: "2024",
    area: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
    description: "A sophisticated penthouse transformation overlooking the Thames, blending contemporary minimalism with classic British elegance.",
    challenge: "The client desired a space that felt both grand and intimate, with seamless integration of smart home technology while maintaining architectural purity.",
    solution: "We created distinct zones using subtle material transitions and custom millwork, concealing all technology within handcrafted cabinetry.",
    features: ["Custom marble fireplace", "Integrated smart systems", "Floor-to-ceiling windows", "Bespoke oak paneling", "Italian terrazzo flooring"],
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200"
    ],
    awards: "Best Residential Interior 2024 - International Design Awards"
  },
  {
    id: 2,
    slug: "kensington-manor",
    title: "Kensington Manor",
    location: "London, UK",
    category: "Luxury Residence",
    year: "2023",
    area: "4,800 sq ft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200",
    description: "An opulent family residence in prestigious Kensington, featuring museum-quality finishes and bespoke interior architecture.",
    challenge: "Balancing the need for formal entertaining spaces with comfortable family living areas, all while adhering to strict conservation guidelines.",
    solution: "We designed flexible spaces with custom partition systems and layered lighting schemes that transform rooms from formal to intimate settings.",
    features: ["Bespoke library with secret door", "Wine cellar and tasting room", "Home cinema", "Marble-clad master suite", "Private elevator"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 3,
    slug: "upper-east-side-residence",
    title: "Upper East Side Residence",
    location: "New York, NY",
    category: "Luxury Residence",
    year: "2023",
    area: "3,600 sq ft",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
    description: "A pre-war apartment reimagined with contemporary sophistication while honoring its architectural heritage and Central Park views.",
    challenge: "Modernizing outdated systems and layouts while preserving original details like crown moldings and herringbone floors.",
    solution: "Strategic interventions that enhance flow while restoring and highlighting period features through modern material contrasts.",
    features: ["Restored herringbone floors", "Central Park views", "Chef's kitchen", "Spa-inspired bathrooms", "Custom walk-in closets"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Modern Villa Projects
  {
    id: 4,
    slug: "minimalist-villa-ibiza",
    title: "Minimalist Villa",
    location: "Ibiza, Spain",
    category: "Modern Villa",
    year: "2023",
    area: "4,500 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=1200",
    description: "A sun-drenched Mediterranean retreat where architecture and landscape merge, creating a seamless indoor-outdoor living experience.",
    challenge: "Balancing the harsh Mediterranean sun with the desire for open, light-filled spaces while maintaining comfortable interior temperatures.",
    solution: "Strategic placement of deep overhangs, automated louvered systems, and thermally efficient materials created naturally regulated spaces.",
    features: ["Infinity pool integration", "Natural ventilation system", "Local limestone walls", "Reclaimed wood ceilings", "Outdoor kitchen pavilion"],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 5,
    slug: "desert-modernist-villa",
    title: "Desert Modernist Villa",
    location: "Palm Springs, CA",
    category: "Modern Villa",
    year: "2024",
    area: "5,200 sq ft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
    description: "A contemporary desert oasis that celebrates mid-century modernism with clean lines, natural materials, and mountain views.",
    challenge: "Working with extreme temperature variations while creating an energy-efficient home that celebrates transparency and openness.",
    solution: "High-performance glazing, thermal mass walls, and cross-ventilation create comfortable spaces that blur indoor-outdoor boundaries.",
    features: ["Floor-to-ceiling glass walls", "Roof deck with pool", "Geothermal cooling", "Native landscaping", "Outdoor fire lounge"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 6,
    slug: "scandinavian-villa",
    title: "Scandinavian Villa",
    location: "Copenhagen, Denmark",
    category: "Modern Villa",
    year: "2022",
    area: "3,900 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200",
    description: "A Nordic family villa embracing hygge principles through natural materials, soft lighting, and connections to the surrounding forest.",
    challenge: "Maximizing natural light during short winter days while creating cozy, warm interiors that combat harsh Scandinavian winters.",
    solution: "Large south-facing windows, reflective surfaces, underfloor heating, and layered textiles create warmth and light year-round.",
    features: ["Triple-glazed windows", "Radiant floor heating", "Sauna and spa", "Wood-burning fireplace", "Natural birch finishes"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Urban Residence Projects
  {
    id: 7,
    slug: "amsterdam-townhouse",
    title: "Modern Townhouse",
    location: "Amsterdam, Netherlands",
    category: "Urban Residence",
    year: "2023",
    area: "2,800 sq ft",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
    description: "A historic canal house reimagined for contemporary life, respecting heritage while embracing modernity.",
    challenge: "Preserving the building's 18th-century character while introducing modern amenities and maximizing limited natural light.",
    solution: "We installed a central glass atrium, restored original features, and used reflective surfaces to amplify available light.",
    features: ["Glass atrium skylight", "Restored herringbone floors", "Hidden storage systems", "Modern kitchen integration", "Preserved ceiling moldings"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200"
    ],
    awards: "Innovative Space Design 2023 - Dezeen Awards"
  },
  {
    id: 8,
    slug: "brooklyn-brownstone",
    title: "Brooklyn Brownstone",
    location: "Brooklyn, NY",
    category: "Urban Residence",
    year: "2024",
    area: "3,100 sq ft",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200",
    description: "A historic brownstone renovation balancing family functionality with refined elegance across four beautifully restored floors.",
    challenge: "Creating open flow in a traditionally compartmentalized structure while maintaining its historic facade and architectural details.",
    solution: "Selective wall removals, custom steel transitions, and a rear glass extension that floods the interior with natural light.",
    features: ["Garden level extension", "Original staircase restoration", "Chef's kitchen", "Primary suite with terrace", "Finished basement"],
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 9,
    slug: "tokyo-compact-home",
    title: "Tokyo Compact Home",
    location: "Tokyo, Japan",
    category: "Urban Residence",
    year: "2023",
    area: "1,400 sq ft",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
    description: "A masterclass in efficient design where every square meter is optimized without sacrificing beauty or functionality.",
    challenge: "Creating a spacious feeling home in an extremely limited footprint while incorporating Japanese design principles.",
    solution: "Multi-functional furniture, vertical storage, sliding partitions, and carefully curated material palette maximize the compact space.",
    features: ["Modular wall systems", "Hidden storage", "Tatami room", "Compact kitchen", "Rooftop terrace"],
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Vacation Home Projects
  {
    id: 10,
    slug: "lakeside-retreat-geneva",
    title: "Lakeside Retreat",
    location: "Geneva, Switzerland",
    category: "Vacation Home",
    year: "2022",
    area: "3,800 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200",
    description: "An Alpine sanctuary where panoramic lake views and mountain peaks are framed by floor-to-ceiling glazing and natural materials.",
    challenge: "Creating warmth in a glass-dominated structure while maintaining unobstructed views of the dramatic landscape.",
    solution: "We layered textures through rugs, throws, and wood finishes, while installing radiant floor heating and a central stone fireplace.",
    features: ["Panoramic glazing", "Radiant floor heating", "Stone fireplace", "Mountain oak millwork", "Heated outdoor terrace"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200"
    ],
    awards: "Luxury Interior - Gold 2022 - European Property Awards"
  },
  {
    id: 11,
    slug: "aspen-ski-chalet",
    title: "Aspen Ski Chalet",
    location: "Aspen, CO",
    category: "Vacation Home",
    year: "2024",
    area: "4,600 sq ft",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
    description: "A luxurious mountain retreat combining rustic charm with modern amenities, perfect for après-ski relaxation and entertaining.",
    challenge: "Creating a warm, inviting atmosphere that can accommodate large gatherings while maintaining intimate spaces for family time.",
    solution: "Multiple living zones with distinct characters, a great room with soaring ceilings, and cozy nooks throughout the home.",
    features: ["Ski room with boot warmers", "Great room with 20ft ceilings", "Hot tub with mountain views", "Wine cellar", "Game room"],
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 12,
    slug: "tuscan-countryside-villa",
    title: "Tuscan Countryside Villa",
    location: "Tuscany, Italy",
    category: "Vacation Home",
    year: "2023",
    area: "4,100 sq ft",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200",
    description: "A restored farmhouse surrounded by vineyards and olive groves, celebrating Italian craftsmanship and dolce vita lifestyle.",
    challenge: "Restoring a centuries-old structure while adding modern comforts without compromising its authentic rustic character.",
    solution: "Preserved original stone walls and terracotta floors, concealed modern systems, and created outdoor living spaces that extend the home.",
    features: ["Original terracotta floors", "Outdoor pizza oven", "Wine cellar", "Infinity pool", "Loggia dining area"],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Contemporary Projects
  {
    id: 13,
    slug: "art-collectors-loft",
    title: "Art Collector's Loft",
    location: "New York, NY",
    category: "Contemporary",
    year: "2023",
    area: "2,900 sq ft",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200",
    description: "A gallery-like loft designed to showcase an extensive contemporary art collection while maintaining livability and warmth.",
    challenge: "Creating a home that functions as both a living space and an art gallery, with proper lighting and wall space for large-scale works.",
    solution: "We designed movable track lighting, reinforced walls for heavy installations, and created intimate furniture groupings within the open plan.",
    features: ["Custom gallery lighting", "Reinforced art walls", "Polished concrete floors", "Modular furniture layout", "Climate control system"],
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 14,
    slug: "soho-industrial-loft",
    title: "SoHo Industrial Loft",
    location: "New York, NY",
    category: "Contemporary",
    year: "2024",
    area: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200",
    description: "A former textile factory transformed into a sophisticated living space that honors its industrial past while embracing contemporary luxury.",
    challenge: "Balancing raw industrial elements with refined comfort and integrating modern living needs into an open warehouse space.",
    solution: "Exposed brick and ductwork contrast with plush furnishings, custom steel partitions define zones, and dramatic lighting creates atmosphere.",
    features: ["Exposed brick walls", "Original cast iron columns", "Custom steel partitions", "14ft ceilings", "Chef's kitchen"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Restoration Projects
  {
    id: 15,
    slug: "heritage-estate-cotswolds",
    title: "Heritage Estate",
    location: "Cotswolds, UK",
    category: "Restoration",
    year: "2021",
    area: "5,600 sq ft",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200",
    description: "A sensitive restoration of a Grade II listed manor house, preserving historical elements while introducing modern comfort.",
    challenge: "Meeting strict heritage regulations while upgrading all systems and making the home suitable for contemporary family living.",
    solution: "We concealed modern systems within original structures, restored period features, and created a sympathetic kitchen extension.",
    features: ["Restored Georgian windows", "Period feature preservation", "Hidden HVAC systems", "Sympathetic extension", "Antique stone flooring"],
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200"
    ],
    awards: "Excellence in Restoration 2023 - Heritage Design Council"
  },
  {
    id: 16,
    slug: "victorian-townhouse-london",
    title: "Victorian Townhouse",
    location: "London, UK",
    category: "Restoration",
    year: "2023",
    area: "4,200 sq ft",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
    description: "A meticulous restoration of a Victorian townhouse bringing original grandeur back to life while adding contemporary convenience.",
    challenge: "Restoring severely damaged period features and updating infrastructure without visible modern interventions.",
    solution: "Master craftsmen recreated missing moldings, we sourced period-appropriate fixtures, and concealed all modern systems beautifully.",
    features: ["Restored plasterwork", "Period fireplaces", "Original floorboards", "Servants' quarters conversion", "Garden redesign"],
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 17,
    slug: "colonial-estate-restoration",
    title: "Colonial Estate",
    location: "Charleston, SC",
    category: "Restoration",
    year: "2022",
    area: "6,200 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200",
    description: "A landmark colonial mansion restored to its former glory with painstaking attention to historical accuracy and modern livability.",
    challenge: "Hurricane damage required extensive structural work while maintaining historical society approval for all interventions.",
    solution: "Worked with conservation specialists and local craftsmen to restore using traditional techniques and period-appropriate materials.",
    features: ["Restored crown moldings", "Period-accurate paint analysis", "Structural reinforcement", "Hurricane protection", "Formal gardens"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Urban Luxury Projects
  {
    id: 18,
    slug: "parisian-apartment",
    title: "Parisian Apartment",
    location: "Paris, France",
    category: "Urban Luxury",
    year: "2024",
    area: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
    description: "A Haussmannian apartment renovation celebrating French elegance with contemporary comfort and refined material palette.",
    challenge: "Modernizing the interior while respecting original architectural details and maintaining the apartment's historical character.",
    solution: "We restored ornate moldings and parquet floors while updating the color palette and introducing subtle modern interventions.",
    features: ["Restored parquet de Versailles", "Original ceiling moldings", "Carrara marble bathrooms", "Custom French doors", "Herringbone oak floors"],
    gallery: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 19,
    slug: "milan-palazzo-apartment",
    title: "Milan Palazzo Apartment",
    location: "Milan, Italy",
    category: "Urban Luxury",
    year: "2023",
    area: "3,100 sq ft",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
    description: "A prestigious apartment in a historic Milanese palazzo, blending Italian craftsmanship with contemporary sophistication.",
    challenge: "Respecting the palazzo's 16th-century architecture while creating a home that meets modern luxury standards.",
    solution: "Commissioned local artisans to restore frescoes and installed hidden modern amenities that don't compete with historic features.",
    features: ["Restored ceiling frescoes", "Venetian plaster walls", "Marble bathrooms", "Bespoke cabinetry", "Period lighting"],
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // Beach House Projects
  {
    id: 20,
    slug: "malibu-coastal-villa",
    title: "Coastal Villa",
    location: "Malibu, CA",
    category: "Beach House",
    year: "2023",
    area: "4,200 sq ft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
    description: "A serene oceanfront residence designed to capture Pacific sunsets and create a dialogue between interior and sea.",
    challenge: "Designing for extreme weather exposure while maintaining open, airy spaces and protecting furnishings from salt air.",
    solution: "We selected marine-grade materials, installed retractable glass walls, and created layered outdoor living zones.",
    features: ["Retractable glass walls", "Marine-grade finishes", "Outdoor living zones", "Custom teak decking", "Salt-resistant fixtures"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 21,
    slug: "hamptons-beach-house",
    title: "Hamptons Beach House",
    location: "East Hampton, NY",
    category: "Beach House",
    year: "2024",
    area: "5,100 sq ft",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
    description: "A classic Hamptons estate reimagined with coastal elegance, featuring white oak, natural linens, and ocean views.",
    challenge: "Creating a sophisticated yet casual beach retreat that works for both intimate family gatherings and large-scale entertaining.",
    solution: "Open floor plan with multiple seating areas, seamless indoor-outdoor flow, and a neutral palette that showcases ocean views.",
    features: ["White oak flooring", "Chef's kitchen", "Pool house", "Outdoor shower", "Fire pit lounge"],
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 22,
    slug: "greek-island-retreat",
    title: "Greek Island Retreat",
    location: "Santorini, Greece",
    category: "Beach House",
    year: "2022",
    area: "3,400 sq ft",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
    description: "A clifftop sanctuary embracing Cycladic architecture with whitewashed walls, curved forms, and infinity pool overlooking the caldera.",
    challenge: "Building on a steep clifftop site while respecting local architectural traditions and maximizing dramatic views.",
    solution: "Terraced levels follow the natural topography, traditional building methods create authentic character, and strategic openings frame views.",
    features: ["Infinity pool", "Outdoor dining terraces", "Traditional cave suite", "Sunset viewing deck", "Local stone construction"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=90&w=1200"
    ]
  },

  // High-Rise Luxury Projects
  {
    id: 23,
    slug: "singapore-city-penthouse",
    title: "City Penthouse",
    location: "Singapore",
    category: "High-Rise Luxury",
    year: "2024",
    area: "3,500 sq ft",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
    description: "A contemporary sky residence blending Asian aesthetics with European minimalism, featuring 360-degree city views.",
    challenge: "Balancing dramatic views with privacy, and creating distinct zones in an open-plan layout 50 floors above ground.",
    solution: "We designed motorized privacy screens, used furniture placement to define zones, and created a neutral palette to focus on views.",
    features: ["360-degree views", "Motorized privacy screens", "Floating kitchen island", "Italian marble accents", "Integrated wine storage"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 24,
    slug: "dubai-tower-residence",
    title: "Dubai Tower Residence",
    location: "Dubai, UAE",
    category: "High-Rise Luxury",
    year: "2023",
    area: "4,800 sq ft",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
    description: "An ultra-luxury penthouse in the heart of Dubai, showcasing opulent materials and cutting-edge smart home technology.",
    challenge: "Creating a sophisticated residence that balances Middle Eastern luxury traditions with contemporary international design.",
    solution: "Rich materials like onyx and gold leaf are balanced with clean lines, and technology is seamlessly integrated throughout.",
    features: ["Smart home automation", "Onyx feature walls", "Private elevator", "Spa bathroom", "Climate-controlled wine room"],
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200"
    ]
  },
  {
    id: 25,
    slug: "hong-kong-skyscraper-apartment",
    title: "Hong Kong Skyscraper",
    location: "Hong Kong",
    category: "High-Rise Luxury",
    year: "2024",
    area: "2,600 sq ft",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
    description: "A sophisticated high-rise apartment maximizing limited space with clever design and spectacular harbor views.",
    challenge: "Creating luxury in a compact footprint while incorporating abundant storage and maintaining an open, airy feel.",
    solution: "Custom built-ins maximize every inch, floor-to-ceiling glass amplifies space, and neutral tones keep the focus on views.",
    features: ["Custom storage solutions", "Floor-to-ceiling windows", "Compact luxury kitchen", "Spa-inspired bathroom", "Harbor views"],
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14711?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=90&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=90&w=1200"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const categories = [
  'All',
  'Luxury Residence',
  'Modern Villa',
  'Urban Residence',
  'Vacation Home',
  'Contemporary',
  'Restoration',
  'Urban Luxury',
  'Beach House',
  'High-Rise Luxury'
];
