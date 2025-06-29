"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCaraousel";
import { DiscordCloneProjectImages, NotionProjectImages, TrendiqProjectImages } from "@/components/Images";
import ContactForm from "@/components/ContactUsForm";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
      "SWR",
      "Redux Toolkit",
      "React Query",
    ],
    backend: [
      "Node.js",
      "Nest JS",
      "Express",
      "Redis",
      "Swagger",
      "REST APIs",
      "Kafka",
      "Bull MQ",
      "JWT Auth",
    ],
    database: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "MySQL",
      "Sequelize",
      "Firebase",
      "TypeORM",
      "Mongoose",
    ],
    tools: [
      "AWS EC2",
      "Vercel",
      "Git",
      "Github",
      "Cursor",
      "Docker",
      "AWS S3",
      "Stripe",
      "Postman",
    ],
  };

  const featuredProjects = [
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
      images: TrendiqProjectImages,
      github: "https://github.com/UdayVara/trendiq-fe",
      live: "https://trendiq-fe.vercel.app/",
      featured: true,
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
      images: DiscordCloneProjectImages,
      github: "https://github.com/UdayVara/discord-clone",
      live: "https://discord-clone-three-alpha.vercel.app",
      featured: true,
    },
    {
      title: "Notion Clone",
      description:
        "A minimal Notion-inspired workspace app with rich-text editing, nested pages, and drag-and-drop blocks—built for organized personal and team note-taking.",
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "TipTap Editor",
      ],
      images: NotionProjectImages,
      github: "https://github.com/UdayVara/notion-clone-fe",
      live: "https://notion-clone-fe.vercel.app/",
      featured: false,
    },
  ];

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        if (
          scrollPos >= element.offsetTop &&
          scrollPos < element.offsetTop + element.offsetHeight
        ) {
          const id = element.getAttribute("id");
          document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.remove("text-blue-400", "scale-110");
            link.classList.add("text-gray-300");
          });
          const activeLink = document.querySelector(`[href="#${id}"]`);
          activeLink?.classList.add("text-blue-400", "scale-110");
          activeLink?.classList.remove("text-gray-300");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
          >
            Loading Experience...
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(300)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-xl border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            >
              {"<UdayVara />"}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="nav-link text-gray-300 hover:text-blue-400 transition-all duration-300 capitalize relative"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(item)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item}`}
                      className="block py-3 text-gray-300 hover:text-blue-400 transition-colors capitalize text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        document
                          .getElementById(item)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-green-900/10 to-orange-900/10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-6">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient"
                  style={{ backgroundSize: "300% 300%" }}
                >
                  Full Stack
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Developer
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Building next-generation applications with cutting-edge
              technologies and innovative solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl shadow-blue-500/25"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore My Work
                  <ArrowUpRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl shadow-blue-500/25"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let's Connect
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/UdayVara", color: "hover:text-green-400" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/uday-vara-16b2a21b6/", color: "hover:text-blue-400" },
                { icon: Mail, href: "mailto:varaudayd@gmail.com", color: "hover:text-orange-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.3, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="text-gray-400" size={40} />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 bg-gradient-to-b from-black to-gray-900 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 className="text-5xl md:text-7xl font-bold mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="relative md:w-96 md:h-96 w-80 h-80 mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 rounded-full p-1"
                >
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Code size={150} className="text-blue-400" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="text-2xl font-bold">3+</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h3 className="text-3xl font-bold text-blue-400 mb-6">
                Passionate Full Stack Developer
              </motion.h3>

              <motion.div className="space-y-6 text-lg leading-relaxed">
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I'm a Full Stack Web Developer with over 3 years of
                  experience, specializing in the MERN stack, Next.js, and
                  NestJS. I build clean, scalable, and high-performance web
                  applications with a strong focus on quality and user
                  experience. My frontend skills are matched by my passion for
                  intuitive design and responsive interfaces.
                </motion.p>

                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  On the backend, I’m experienced in REST APIs, microservices
                  architecture, and database design using tools like PostgreSQL
                  and MongoDB. I enjoy building modular, maintainable systems
                  and solving complex problems with clean, efficient code. I'm a
                  passionate developer committed to continuous learning and
                  innovation.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    number: "50+",
                    label: "Projects Completed",
                    color: "from-blue-400 to-green-500",
                  },
                  {
                    number: "3+",
                    label: "Years Experience",
                    color: "from-green-400 to-orange-500",
                  },
                  {
                    number: "100%",
                    label: "Client Satisfaction",
                    color: "from-orange-400 to-red-500",
                  },
                  {
                    number: "24/7",
                    label: "Availability",
                    color: "from-red-400 to-blue-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="md:py-32 py-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 className="text-5xl md:text-7xl font-bold mb-8">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frontend",
                icon: Smartphone,
                skills: skills.frontend,
                color: "blue",
              },
              {
                title: "Backend",
                icon: Server,
                skills: skills.backend,
                color: "green",
              },
              {
                title: "Database",
                icon: Database,
                skills: skills.database,
                color: "orange",
              },
              {
                title: "Tools",
                icon: Code,
                skills: skills.tools,
                color: "red",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full backdrop-blur-sm group">
                  <CardContent className="p-8">
                    <motion.div
                      className="flex items-center mb-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className={`p-4 rounded-xl mr-4 transition-all duration-300 ${
                          category.color === "blue"
                            ? "bg-gradient-to-r from-blue-600/20 to-blue-400/20 group-hover:from-blue-500/30 group-hover:to-blue-300/30"
                            : category.color === "green"
                            ? "bg-gradient-to-r from-green-600/20 to-green-400/20 group-hover:from-green-500/30 group-hover:to-green-300/30"
                            : category.color === "orange"
                            ? "bg-gradient-to-r from-orange-600/20 to-orange-400/20 group-hover:from-orange-500/30 group-hover:to-orange-300/30"
                            : "bg-gradient-to-r from-red-600/20 to-red-400/20 group-hover:from-red-500/30 group-hover:to-red-300/30"
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon
                          className={`${
                            category.color === "blue"
                              ? "text-blue-400 group-hover:text-blue-300"
                              : category.color === "green"
                              ? "text-green-400 group-hover:text-green-300"
                              : category.color === "orange"
                              ? "text-orange-400 group-hover:text-orange-300"
                              : "text-red-400 group-hover:text-red-300"
                          }`}
                          size={32}
                        />
                      </motion.div>
                      <h3
                        className={`text-2xl ${
                          category.color === "blue"
                            ? "text-blue-400 group-hover:text-blue-300"
                            : category.color === "green"
                            ? "text-green-400 group-hover:text-green-300"
                            : category.color === "orange"
                            ? "text-orange-400 group-hover:text-orange-300"
                            : "text-red-400 group-hover:text-red-300"
                        } font-bold`}
                      >
                        {category.title}
                      </h3>
                    </motion.div>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center group/skill"
                          whileHover={{ x: 10 }}
                        >
                          <motion.div
                            className={`w-3 h-3 rounded-full mr-4 ${
                              category.color === "blue"
                                ? "bg-gradient-to-r from-blue-400 to-blue-300"
                                : category.color === "green"
                                ? "bg-gradient-to-r from-green-400 to-green-300"
                                : category.color === "orange"
                                ? "bg-gradient-to-r from-orange-400 to-orange-300"
                                : "bg-gradient-to-r from-red-400 to-red-300"
                            }`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="md:py-32 py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 className="text-5xl md:text-7xl font-bold mb-8">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <motion.div
                  className={`relative group ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                  // whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <ImageCarousel images={project.images} />

                    <motion.div
                      className="absolute top-10 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ y: -20 }}
                      whileInView={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-gray-800/90 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-gray-800/90 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="bg-gradient-to-r from-blue-600/20 to-green-600/20 text-blue-400 border-blue-600/30 text-sm px-4 py-2">
                        ⭐ Featured Project
                      </Badge>
                    </motion.div>
                  )}

                  <motion.h3
                    className="text-3xl md:text-4xl font-bold group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-blue-400/50 hover:bg-gray-800 cursor-pointer transition-all duration-300 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex space-x-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                    >
                      <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 rounded-full">
                        View Live
                        <ExternalLink className="ml-2" size={16} />
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                    >
                      <Button
                        variant="outline"
                        className="border-gray-600 text-white bg-neutral-900 hover:text-white hover:bg-neutral-800 hover:border-blue-400 px-6 py-3 rounded-full"
                      >
                        View Code
                        <Github className="ml-2" size={16} />
                      </Button>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl shadow-green-500/25"
                >
                  View All Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, blue 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's collaborate and create
              something extraordinary together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-xl">
                <CardContent className="p-8">
                  <motion.h3 className="text-2xl font-bold mb-6 text-blue-400">
                    Send me a message
                  </motion.h3>

                <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.h3 className="text-2xl font-bold mb-8 text-green-400">
                  Get In Touch
                </motion.h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "varaudayd@gmail.com",
                      link: "mailto:varaudayd@gmail.com",
                      color: "blue",
                      description: "Drop me a line anytime",

                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      value: "https://github.com/UdayVara",
                      link: "https://github.com/UdayVara",
                      color: "green",
                      description: "Check out my repositories",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "Uday Vara",
                      link:"https://www.linkedin.com/in/uday-vara-16b2a21b6/",
                      color: "orange",
                      description: "Let's connect professionally",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      onClick={() => window.open(contact.link, "_blank")}
                    >
                      <Card className="bg-gray-800/30 border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              className={`p-4 bg-gradient-to-r from-${contact.color}-600/20 to-${contact.color}-400/20 rounded-xl group-hover:from-${contact.color}-500/30 group-hover:to-${contact.color}-300/30 transition-all duration-300`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <contact.icon
                                className={`text-${contact.color}-400`}
                                size={24}
                              />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg text-white">
                                {contact.label}
                              </h4>
                              <p className="text-gray-300 group-hover:text-white transition-colors font-medium">
                                {contact.value}
                              </p>
                              <p className="text-sm text-gray-400 mt-1">
                                {contact.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-r bg-gray-800/30 border-gray-700/30 hover:border-gray-600/50 transition-all duration-300  backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="w-3 h-3 bg-green-400 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-lg text-white">
                          Available for Work
                        </h4>
                        <p className="text-gray-300">
                          Open for freelance projects and full-time
                          opportunities
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/30 border-gray-700/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-400">
                          &lt; 24h
                        </div>
                        <div className="text-sm text-gray-400">
                          Response Time
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">
                          100%
                        </div>
                        <div className="text-sm text-gray-400">
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-green-900/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div className="text-gray-400 mb-6 md:mb-0">
              Made with ❤️, fueled by ☕, and driven by a passion for building elegant digital experiences.
            </motion.div>
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "#", color: "hover:text-green-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { icon: Mail, href: "#", color: "hover:text-orange-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.3, y: -3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
