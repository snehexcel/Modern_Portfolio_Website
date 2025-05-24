"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Star,
  Award,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Sneha_Kumari_Resume.txt"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Passionate Developer & Problem Solver
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Hi, I'm Sneha Kumari
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Building the Future{" "}
                  </span>
                  of Web
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a passionate software developer and innovative problem solver, currently in my pre-final year at
                  Sharda University. I specialize in full-stack development with React.js, Next.js, and modern
                  technologies. I'm deeply interested in AI/ML, LLMs, and RAG systems, always eager to learn and create
                  impactful solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  asChild
                >
                  <Link href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" onClick={handleDownloadResume}>
                  Download CV
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-slate-600 dark:text-slate-300">15+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-slate-600 dark:text-slate-300">Hackathon Winner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-600 dark:text-slate-300">8.2 CGPA</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <Image src="/images/developer-workspace.png" alt="Developer workspace" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Sneha Kumari</span>, a
                  passionate software developer and innovative problem solver currently pursuing my BTech in Computer
                  Science at Sharda University with an 8.2 CGPA. I believe in the power of technology to transform ideas
                  into reality.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently worked as a Frontend Developer Intern at Suthraya Startup, I've achieved a 40% engagement
                  boost by migrating from CRA to Next.js 14 and optimized performance significantly. My journey in tech
                  has led me to develop a deep interest in{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    AI/ML, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG)
                  </span>{" "}
                  systems.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I'm a 3rd prize winner in the Technovation Hackathon (competing among 2400+ students) and have
                  participated in Smart India Hackathon as a team leader. Whether it's building responsive web
                  applications, developing intelligent systems, or solving complex problems, I approach every project
                  with enthusiasm and dedication to deliver exceptional results.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Current Role</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Frontend Developer Intern</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Learning</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">LLMs, RAG Systems & Advanced React</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <Image
                  src="/images/sneha-profile.png"
                  alt="Sneha Kumari - Software Developer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Ready to innovate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Technologies I Work With</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              I specialize in modern web technologies to build scalable and performant applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>Creating beautiful, responsive user interfaces with modern frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Next.js 14</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">shadcn/ui</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Backend & Database</CardTitle>
                <CardDescription>Building robust APIs and managing data with modern technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Full-Stack Solutions</CardTitle>
                <CardDescription>
                  Connect with me for any project - I can deliver on time with beautiful UI exactly as expected. From
                  concept to deployment, I ensure quality and innovation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">DSA</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <Image
                  src="/images/ecommerce-project.png"
                  alt="E-Commerce Grocery Webapp"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
  <CardTitle>E-Commerce Grocery Webapp</CardTitle>
  <CardDescription>
    A modern online grocery shopping platform with responsive design and performance optimization
  </CardDescription>
</CardHeader>
<CardContent>
  <div className="flex flex-wrap gap-2 mb-4">
    <Badge variant="outline" className="text-xs">
      Next.js 14
    </Badge>
    <Badge variant="outline" className="text-xs">
      Tailwind CSS
    </Badge>
    <Badge variant="outline" className="text-xs">
      TypeScript
    </Badge>
  </div>
  <div className="flex space-x-2">
    <Button
      size="sm"
      variant="outline"
      className="flex-1"
      asChild
    >
      <Link
        href="https://github.com/snehexcel/Fastcart_Ecommerce_grocerywebapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-4 h-4 mr-2" />
        Code
      </Link>
    </Button>
    <Button size="sm" className="flex-1" asChild>
      <Link
        href="https://groceryecommercefastcart.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Globe className="w-4 h-4 mr-2" />
        Live Demo
      </Link>
    </Button>
  </div>
</CardContent>
</Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900">
                <Image
                  src="/images/lms-project.png"
                  alt="LMS Virtual University"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
  <CardTitle>LMS Virtual University</CardTitle>
  <CardDescription>
 Comprehensive Learning Management System with role-based dashboards and course management  </CardDescription>
</CardHeader>
<CardContent>
  <div className="flex flex-wrap gap-2 mb-4">
    <Badge variant="outline" className="text-xs">
      Next.js 14
    </Badge>
    <Badge variant="outline" className="text-xs">
      Tailwind CSS
    </Badge>
    <Badge variant="outline" className="text-xs">
      TypeScript
    </Badge>
  </div>
  <div className="flex space-x-2">
    <Button
      size="sm"
      variant="outline"
      className="flex-1"
      asChild
    >
      <Link
        href="https://github.com/snehexcel/LMS_VirtualUniversity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-4 h-4 mr-2" />
        Code
      </Link>
    </Button>
    <Button size="sm" className="flex-1" asChild>
      <Link
        href="https://lmsvirtualuniversity.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Globe className="w-4 h-4 mr-2" />
        Live Demo
      </Link>
    </Button>
  </div>
</CardContent>
</Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900">
                <Image
                  src="/images/safety-app-project.png"
                  alt="Women Safety App"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Women Safety App</CardTitle>
                <CardDescription>
                  Real-time safety solution developed for Smart India Hackathon with emergency features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Let's Work Together</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and challenges.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={handleDownloadResume}>
              Download Resume
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/snehexcel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sneha-k-9a0071252/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/BaranSneha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:snehabaranwal5613@gmail.com"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-slate-400">Made with ❤️ by Sneha Kumari</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
