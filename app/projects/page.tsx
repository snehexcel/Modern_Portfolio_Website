"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Github, Globe, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=200&width=400&text=E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application built with Next.js and Fastify. Real-time updates with WebSocket integration.",
    image: "/placeholder.svg?height=200&width=400&text=Task Manager",
    technologies: ["Next.js", "Fastify", "PostgreSQL", "WebSocket", "Prisma"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts.",
    image: "/placeholder.svg?height=200&width=400&text=Weather App",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "API Gateway Service",
    description:
      "A high-performance API gateway built with Fastify, featuring rate limiting, authentication, and request routing.",
    image: "/placeholder.svg?height=200&width=400&text=API Gateway",
    technologies: ["Fastify", "Redis", "Docker", "JWT", "Rate Limiting"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with real-time data visualization and automated reporting.",
    image: "/placeholder.svg?height=200&width=400&text=Social Dashboard",
    technologies: ["Next.js", "D3.js", "Node.js", "MongoDB", "Cron Jobs"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time chat application with rooms, file sharing, and emoji reactions. Built with modern web technologies.",
    image: "/placeholder.svg?height=200&width=400&text=Chat App",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Cloudinary"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">My Projects</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in React.js, Fastify, and modern web development
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                    <Link href={project.demo} target="_blank">
                      <Globe className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
