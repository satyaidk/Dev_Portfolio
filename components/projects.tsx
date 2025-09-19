"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

const categories = ["All", "AI/ML", "Web3", "Cloud", "DevOps"]
const projects = [
  {
    id: 1,
    title: "AI Business Solutions",
    description:
      "This project is a web application that provides AI-powered business solutions to help businesses grow and succeed.",
    image: "/images/aibusiness.png",
    tags: ["AI/ML", "Python", "TensorFlow", "React"],
    category: "AI/ML",
    github: "https://github.com/satyaidk/AI-Business-Solutions-Platform-UI.git",
    demo: "#",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Swap Simplify Dapp",
    description: "This project is a decentralized application that allows users to swap tokens and manage their wallets.",
    image: "/images/swapsimplify.png",
    tags: ["Web3", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/Swap-Simplify-Dapp.git",
    demo: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Scan2Share Dapp",
    description: "This project is a decentralized application that allows users to scan QR codes and share the content as social media posts with others and earn rewards.",
    image: "/images/scan2earn.png",
    tags: ["Web3", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/Scan2Share-Dapp.git",
    demo: "#",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 4,
    title: "Monad Gaming Dapp",
    description: "This project is a decentralized application that allows users to play games and earn rewards.",
    image: "/images/monadgaming.png",
    tags: ["Web3", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/mamifi.git",
    demo: "#",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 5,
    title: "Zenko Wallet",
    description: "This project is a web application that allows users to track their cryptocurrency portfolio and earn rewards.",
    image: "/images/zenko_wallet.png",
    tags: ["Web3", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/Zenko-Wallet.git",
    demo: "https://zenko-wallet.vercel.app",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 6,
    title: "Blackhole Dapp",
    description: "This project is a decentralized application that allows users earn rewards by burning their tokens.",
    image: "/images/blackhole.png",
    tags: ["Web3", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/blackhole_dapp.git",
    demo: "https://blackhole-dapp.vercel.app",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 7,
    title: "Social Rewards Dapp",
    description: "This project is a decentralized application that allows users earn rewards by sharing their social media posts.",
    image: "/images/events.png",
    tags: ["Web3", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/Social-Reward-Dapp.git",
    demo: "https://social-reward-dapp.vercel.app",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 8,
    title: "AI Agent Event Manager",
    description: "This project is a web application that allows users to manage events using AI agents.",
    image: "/images/crewai.png",
    tags: ["AI", "Python", "TensorFlow", "CrewAI"],
    category: "AI/ML",
    github: "https://github.com/satyaidk/AI_agent_event_manager.git",
    demo: "#",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 9,
    title: "Web3 JDapp",
    description: "This project is a decentralized application that allows users to manage their job applications using AI agents.",
    image: "/images/web3jobs.png",
    tags: ["Web3", "AI", "Solidity", "Next.js"],
    category: "Web3",
    github: "https://github.com/satyaidk/web3_jdapp.git",
    demo: "https://web3-jdapp.vercel.app",
    gradient: "from-green-500 to-teal-600",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects spanning AI/ML, Web3, Cloud Computing, and DevOps.
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:scale-[1.03] group">
                    <div className="relative h-48 w-full overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10`}
                      ></div>

                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs transition-colors duration-300 group-hover:bg-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 transition-colors duration-300 group-hover:border-primary/50"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="gap-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye size={16} />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button
            variant="outline"
            className="gap-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 transition-all duration-300"
          >
            <ExternalLink size={16} />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
