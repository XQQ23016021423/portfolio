'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitFork, CheckCircle2, Layers, ChevronRight, Eye } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import Card3D from './Card3D'
import ProjectDetailModal from './ProjectDetailModal'
import { projects } from '@/data/projects'

const projectIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'jenkins-cicd': Layers,
  'network-lab': Layers,
}

export default function ProjectsSection() {
  const [detailOpen, setDetailOpen] = useState(false)

  return (
    <>
      <SectionWrapper id="projects">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              项目经验
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              精选项目作品展示
            </p>
          </motion.div>

          {/* Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = projectIcons[project.id] || Layers

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card3D className="h-full rounded-2xl bg-white/[0.03] border border-blue-500/10 p-6 sm:p-8 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="flex-1 space-y-3 mb-5">
                      <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-400" />
                        核心功能
                      </h4>
                      {project.features.map((feature) => (
                        <motion.div
                          key={feature.slice(0, 20)}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          className="flex items-start gap-3 text-sm text-gray-400"
                        >
                          <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-blue-500/10">
                      {project.links?.detail && (
                        <button
                          onClick={() => setDetailOpen(true)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-all text-sm"
                        >
                          <Eye size={16} />
                          查看详情
                        </button>
                      )}
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all text-sm"
                        >
                          <GitFork size={16} />
                          源代码
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-all text-sm"
                        >
                          <ExternalLink size={16} />
                          在线演示
                        </a>
                      )}
                    </div>
                  </Card3D>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      <ProjectDetailModal isOpen={detailOpen} onClose={() => setDetailOpen(false)} />
    </>
  )
}
