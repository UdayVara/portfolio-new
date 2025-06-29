"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DiscordCloneProjectImages, NotionProjectImages, TrendiqProjectImages } from "@/components/Images"


export default function ProjectsPage() {
 const allProjects = [
  {
    title: "Trendiq",
    description:
      "Next-gen e-commerce platform with advanced features like intelligent caching, seamless payment integration, real-time analytics, and robust inventory management.",
    tech: [
      "Next.js",
      "Nest.js",
      "Auth.js",
      "Stripe",
      "Cloudinary",
      "PostgreSQL",
      "Prisma",
    ],
    image: TrendiqProjectImages[0],
    github: "https://github.com/UdayVara/trendiq-fe",
    live: "https://trendiq-fe.vercel.app/",
    featured: true,
    year: "2025",
    team: "Solo Project",
    status: "Live",
  },
  {
    title: "Trendiq Admin",
    description:
      "Robust admin panel with real-time inventory, order, and payment management via Stripe. Includes role-based access, product editing (Cloudinary), analytics, and CMS features secured by Auth.js.",
    tech: [
      "Next.js",
      "Nest.js",
      "Auth.js",
      "React Query",
      "Stripe",
      "Cloudinary",
      "PostgreSQL",
      "Prisma",
    ],
    image: "/SingleProjectImages/TrendiqAdmin.png",
    github: "https://github.com/UdayVara/Trendiq-Admin",
    featured: true,
    year: "2025",
    team: "Solo Project",
    status: "Development",
  },
  {
    title: "Discord Clone",
    description:
      "Modern chat app with real-time messaging, voice/video calls, user roles, and server management—built for community and collaboration.",
    tech: [
      "Next.js",
      "Socket.io",
      "WebRTC",
      "Nest.js",
      "PostgreSQL",
      "Cloudinary",
      "Prisma",
    ],
    image: DiscordCloneProjectImages[0],
    github: "https://github.com/UdayVara/discord-clone",
    featured: true,
    year: "2024",
    team: "Solo Project",
    status: "Live",
  },
  {
    title: "Kcreation",
    description:
      "A visually captivating and SEO-optimized portfolio website designed for a client to beautifully showcase their product collection. Fully responsive across all devices with smooth animations, clean layouts, and lightning-fast performance.",
    tech: [
      "Next.js",
      "ShadCN UI",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose"
    ],
    image: "/SingleProjectImages/Kcreation.png",
    github: "https://github.com/UdayVara/Kcreation-web",
    featured: true,
    year: "2024",
    team: "Solo Project",
    status: "Live",
  },
  {
    title: "Notion Clone",
    description:
      "A minimal Notion-inspired workspace app with rich-text editing, nested pages, and drag-and-drop blocks—built for organized personal and team note-taking.",
    tech: [
      "Next.js",
      "Nest.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "TipTap Editor",
    ],
    image: NotionProjectImages[0],
    github: "https://github.com/UdayVara/notion-clone-fe",
    featured: false,
    year: "2024",
    team: "Solo Project",
    status: "Live",
  },
  {
    title: "Spotify Clone",
    description:
      "A full-featured music streaming platform replicating Spotify's UX with real-time playback, custom playlists, liked songs, and artist albums. Includes responsive design and dynamic user sessions.",
    tech: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Prisma",
      "Redux Toolkit",
      "Tailwind CSS"
    ],
    image: "/SingleProjectImages/spotify.png",
    github: "https://github.com/UdayVara/spotify-clone",
    featured: false,
    year: "2023",
    team: "Solo Project",
    status: "Live",
  },
  {
    title: "Newsapp",
    description:
      "A dynamic and responsive news web application that delivers the latest headlines, breaking news, and category-wise articles in real-time. Optimized for SEO, fast loading, and an immersive reading experience across all devices.",
    tech: [
      "React.js",
      "News API",
      "Bootstrap",
      "Javascript",
      "Axios",
      "Fetch API"
    ],
    image: "/SingleProjectImages/newsapp.png",
    github: "https://github.com/UdayVara/airbnb-clone",
    featured: false,
    year: "2023",
    team: "Solo Project",
    status: "Live",
  },
  {
    title: "MobShop",
    description:
      "A sleek, SEO-friendly mobile showcase site built with Django, featuring dynamic content, category filters, and optimized responsive design for an engaging user experience.",
    tech: [
      "Python",
      "Django",
      "Bootstrap",
      "MySQL",
      "Javascript","CSS"
    ],
    image: "/SingleProjectImages/mobshop.png",
    github: "https://github.com/UdayVara/Ecommerce-Site-Using-Django",
    featured: false,
    year: "2022",
    team: "Solo Project",
    status: "Live",
  },
  
  
]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "from-green-400 to-emerald-500"
      case "Beta":
        return "from-orange-400 to-yellow-500"
      case "Development":
        return "from-blue-400 to-cyan-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-xl border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              >
                {"<UdayVara />"}
              </motion.div>
            </Link>

            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-400"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Home
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-8">
              All{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A comprehensive showcase of my development journey, featuring innovative solutions across various
              technologies and industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="md:py-20 py-2 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden h-full backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${getStatusColor(project.status)}/20 text-white border-0`}>
                        {project.status}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-600/20 to-green-600/20 text-blue-400 border-blue-600/30">
                          <Star size={12} className="mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <motion.div
                      className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/80 backdrop-blur-sm rounded-full hover:bg-gray-800/90 transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                     
                    </motion.div>
                  </div>

                  <CardContent className="p-6 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {project.year}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {project.team}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl text-white font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-600/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 5 && (
                        <Badge variant="secondary" className="bg-gray-800 hover:bg-gray-700 text-gray-400 border-gray-600/50 text-xs">
                          +{project.tech.length - 5} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-3 align-baseline">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="bg-neutral-950 border hover:bg-neutral-700/40 text-neutral-300  w-full"
                        >
                           <Github size={16} /> View Code
                        </Button>
                      </motion.a>
                      
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="md:pt-12 pt-16 py-12 bg-black border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div className="text-gray-400">Made with ❤️, fueled by ☕, and driven by a passion for building elegant digital experiences.</motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
