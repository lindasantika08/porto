export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  category: string
  type: string
  description: string
  image: string
  color: string
}

export interface Category {
  id: string
  name: string
  count: number
}

const getImagePath = (filename: string) => {
    return new URL(`../asset/documentation/${filename}`, import.meta.url).href
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Software Quality Assurance",
    issuer: "Arutala Lab.",
    date: "Juni 2025",
    category: "testing",
    type: "Unit Testing",
    description: "Comprehensive training in software quality assurance methodologies and best practices.",
    image: getImagePath('sqa.png'), 
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Database Design & Programming with SQL",
    issuer: "Digitalent Kominfo",
    date: "Februari 2024",
    category: "database",
    type: "Database",
    description: "Advanced SQL programming and database design principles.",
    image: getImagePath('db.png'),
    color: "from-orange-500 to-yellow-500"
  },
  {
    id: 3,
    title: "Junior Network Administrator",
    issuer: "Digitalent Kominfo",
    date: "Juni 2023",
    category: "networking",
    type: "Networking",
    description: "Professional certification in network administration and management.",
    image: getImagePath('jna.png'),
    color: "from-blue-400 to-purple-500"
  },
  {
    id: 4,
    title: "Junior Network Administrator (BNSP)",
    issuer: "Digitalent Kominfo",
    date: "Juni 2023",
    category: "networking",
    type: "Networking",
    description: "Professional certification in network administration and management.",
    image: getImagePath('bnsp.jpg'),
    color: "from-blue-400 to-purple-500"
  },
  {
    id: 5,
    title: "ASEAN Data Science Bootcamp",
    issuer: "SAP",
    date: "Juni 2023",
    category: "data-science",
    type: "Data Science",
    description: "Intensive bootcamp covering data science fundamentals and machine learning.",
    image: getImagePath('sap.png'),
    color: "from-red-500 to-pink-500"
  },
  {
    id: 6,
    title: "Technical Competency Test for Computer Engineering",
    issuer: "PT Cemindo Gemilang Tbk",
    date: "Maret 2022",
    category: "networking",
    type: "Network Configuration",
    description: "Technical assessment and certification in computer engineering competencies.",
    image: getImagePath('ukk.jpg'),
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 7,
    title: "Copyright Certificate SAPA Web App",
    issuer: "Direktorat Jenderal Kekayaan Intelektual",
    date: "July 2025",
    category: "another",
    type: "Copyright",
    description: "Copyright Certificate: Website-based Self and Peer Assessment Application for POLBAN.",
    image: getImagePath('haki.jpg'),
    color: "from-green-500 to-teal-500"
  },
  {
    id: 8,
    title: "Command Line",
    issuer: "Progate",
    date: "April 2023",
    category: "another",
    type: "Basic",
    description: "Basic Command Prompt Line for Beginner",
    image: getImagePath('cmd.png'),
    color: "from-yellow-500 to-green-500"
  },
  {
    id: 9,
    title: "Certificate Intern High School",
    issuer: "CV. Riyadloh",
    date: "November 2021",
    category: "another",
    type: "Intern",
    description: "Certificate for proofing the time high school has doing intern for a couple time.",
    image: getImagePath('pkl.jpg'),
    color: "from-gray-500 to-yellow-500"
  },
  {
    id: 10,
    title: "Certificate PKKMB",
    issuer: "Politeknik Negeri Bandung",
    date: "Agustus 2022",
    category: "another",
    type: "PKKMB",
    description: "Certificate for proofing the time high school has doing intern for a couple time.",
    image: getImagePath('pkkmb.png'),
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 11,
    title: "Certificate Biro Kominfo",
    issuer: "Himpunan Mahasiswa Komputer",
    date: "2023",
    category: "another",
    type: "Organitation",
    description: "Certificate staff biro kominfo himakom.",
    image: getImagePath('staffmuda.png'),
    color: "from-red-500 to-blue-500"
  },
  {
    id: 12,
    title: "Toeic",
    issuer: "ets Toeic",
    date: "Juli 2025",
    category: "another",
    type: "English",
    description: "Certificate score english test",
    image: getImagePath('toeic.jpg'),
    color: "from-blue-500 to-blue-800"
  }, 
  {
    id: 13,
    title: "Certificate of Appreciation",
    issuer: "Politeknik Negeri Bandung",
    date: "Agustus 2025",
    category: "another",
    type: "Apreciation",
    description: "Certificate of Appreciation for the Category of Outstanding Final Project in the Department of Computer Science",
    image: getImagePath('unggul.jpg'),
    color: "from-yellow-500 to-blue-500"
  },
  {
    id: 14,
    title: "Certificate of Softskill",
    issuer: "Wadhani Foundation",
    date: "Juli 2025",
    category: "another",
    type: "Softskill",
    description: "Certificate of softskill",
    image: getImagePath('wadhani.png'),
    color: "from-pink-500 to-red-500"
  },
  {
    id: 15,
    title: "Funding Approval Certificate",
    issuer: "Kementrian Pendidikan Kebudayaan, Riset dan Teknologi",
    date: "Desember 2023",
    category: "another",
    type: "PKM-VGK",
    description: "Certificate of approval certificate from PKM-VGK",
    image: getImagePath('pendanaan.png'),
    color: "from-pink-500 to-red-500"
  },
]

export const getCategories = (): Category[] => {
  const categoryMap = new Map<string, number>()
  
  certificates.forEach(cert => {
    const count = categoryMap.get(cert.category) || 0
    categoryMap.set(cert.category, count + 1)
  })
  
  const categories: Category[] = [
    { id: 'all', name: 'All', count: certificates.length }
  ]
  
  const categoryLabels: Record<string, string> = {
    'cloud': 'Cloud Computing',
    'networking': 'Networking', 
    'database': 'Database',
    'data-science': 'Data Science',
    'testing': 'Testing',
    'another': 'Another'
  }
  
  categoryMap.forEach((count, key) => {
    categories.push({
      id: key,
      name: categoryLabels[key] || key,
      count
    })
  })
  
  return categories
}

export const getCertificatesByCategory = (category: string): Certificate[] => {
  return category === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === category)
}

export const getCertificateById = (id: number): Certificate | undefined => {
  return certificates.find(cert => cert.id === id)
}

export const getRecentCertificates = (year: string = '2025'): Certificate[] => {
  return certificates.filter(cert => cert.date.includes(year))
}