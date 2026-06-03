'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight, Download } from 'lucide-react'
import { profile } from '@/data/profile'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' as const },
  }),
}

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-[3px] mx-auto">
              <div className="w-full h-full rounded-full bg-[#0a0e1a] flex items-center justify-center text-4xl font-bold text-transparent bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text">
                {/* Avatar placeholder - 可替换为图片 */}
                <span className="text-white">熊</span>
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/20 animate-pulse" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm sm:text-base">
            {profile.title}
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
        >
          {profile.bio}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* 查看项目 */}
          <button
            onClick={() => scrollTo('#projects')}
            className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              查看项目
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* 下载简历 */}
          <button className="group px-8 py-3 rounded-xl bg-white/5 border border-blue-500/20 text-gray-300 hover:text-white font-medium transition-all hover:bg-white/10 hover:border-blue-500/40 hover:-translate-y-0.5 flex items-center gap-2">
            <Download size={18} />
            下载简历
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="mt-16"
        >
          <motion.button
            onClick={() => scrollTo('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
