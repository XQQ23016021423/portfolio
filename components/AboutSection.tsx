'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Book,
  Code,
  Briefcase,
  Rocket,
  MapPin,
  Mail,
  GitFork,
  Globe,
} from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import Card3D from './Card3D'
import { profile, education, timeline } from '@/data/profile'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  book: Book,
  code: Code,
  briefcase: Briefcase,
  rocket: Rocket,
}

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
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
            关于我
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            一名专注网络运维与自动化的学生，持续学习，不断成长
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto mb-16"
        >
          <Card3D className="rounded-2xl bg-white/[0.03] border border-blue-500/10 backdrop-blur-sm p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  教育背景
                </h3>
                <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <p className="flex items-start sm:items-center gap-2">
                    <span className="w-12 sm:w-16 text-gray-500 flex-shrink-0">学校:</span>
                    <span className="text-gray-300">{education.school}</span>
                  </p>
                  <p className="flex items-start sm:items-center gap-2">
                    <span className="w-12 sm:w-16 text-gray-500 flex-shrink-0">专业:</span>
                    <span className="text-gray-300">{education.degree}</span>
                  </p>
                  <p className="flex items-start sm:items-center gap-2">
                    <span className="w-12 sm:w-16 text-gray-500 flex-shrink-0">方向:</span>
                    <span className="text-gray-300">网络运维 · Linux · Docker · Kubernetes · Jenkins</span>
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2 sm:gap-3 mt-5 pt-5 border-t border-blue-500/10 flex-wrap">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all"
                    aria-label="GitHub"
                  >
                    <GitFork size={18} />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <span className="sm:ml-auto flex items-center gap-1 text-xs sm:text-sm text-gray-500 w-full sm:w-auto mt-2 sm:mt-0">
                    <MapPin size={14} />
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          {timeline.map((event, i) => {
            const Icon = iconMap[event.icon] || Book
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-10 pl-12 md:pl-0 ${
                  isLeft ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0e1a] border-2 border-blue-500/40 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                </div>

                {/* Card */}
                <Card3D className="w-full rounded-xl bg-white/[0.03] border border-blue-500/10 p-5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={20} className="text-blue-400" />
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-1.5">{event.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </Card3D>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
