"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Briefcase, GraduationCap, } from "lucide-react"

const timelineItems = [
  {
    year: "2022",
    title: "Community Member",
    description: "As a Community Member at Hyderabad DAO, I collaborated with Web3 companies to organize events, connect enthusiasts and developers, and drive community growth in Hyderabad",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    year: "2023",
    title: "ABC - Algorand Blockchain Club",
    description: "As a core member of the ABC - Algorand Blockchain Club, I organized and led blockchain training sessions, using interactive workshops to boost students’ practical skills and knowledge.",
    icon: <Briefcase className="h-5 w-5" />,
  },
{
    year: "2025",
    title: "Hackthon Winner",
    description: "I won the Monad Blitz Hackathon in Hyderabad, where I showcased innovative Web3 solutions and collaborated effectively in a high-paced development environment",
    icon: <Award className="h-5 w-5" />,
  },
  {
    year: "2025",
    title: "Graduated in Computer Science - AI&ML",
    description: "Specialized in Artificial Intelligence and Machine Learning",
    icon: <GraduationCap className="h-5 w-5" />,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey So Far</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate technologist with expertise spanning AI/ML, Blockchain, and Cloud computing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg">
              I'm a versatile developer with a deep passion for emerging Technologies. My journey began with traditional
              Software Development, but I quickly expanded into specialized domains.
            </p>
            <p className="text-lg">
              In AI/ML, I've developed models for natural language processing, computer vision, and predictive
              analytics. My Web3 experience includes DApp creation, and Blockchain
              integration.
            </p>
            <p className="text-lg">
              I'm also proficient in DevOps and cloud computing, having architected scalable solutions on AWS and GCP. My goal is to leverage these Technologies to build innovative solutions that address real-world
              challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-primary/30" />
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="flex-none">
                    <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center z-10 relative">
                      {item.icon}
                    </div>
                  </div>
                  <Card className="flex-grow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">{item.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.year}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
