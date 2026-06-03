'use client'

import { motion } from 'framer-motion'
import {
  Network,
  Terminal,
  Server,
  Code,
  Database,
  Sparkles,
  Zap,
} from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import Card3D from './Card3D'
import { skillCategories } from '@/data/skills'

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network,
  Terminal,
  Server,
  Code,
  Database,
  Sparkles,
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
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
            技能栈
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            持续学习与积累的技术能力
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category.icon] || Zap

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <Card3D className="h-full rounded-2xl bg-white/[0.03] border border-blue-500/10 p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-blue-500/10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: catIndex * 0.1 + skillIndex * 0.08,
                        }}
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: catIndex * 0.1 + skillIndex * 0.08,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card3D>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
