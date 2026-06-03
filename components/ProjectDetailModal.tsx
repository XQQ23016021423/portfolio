'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, ArrowDown, ChevronRight, Lightbulb } from 'lucide-react'
import { jenkinsDetail, type ProjectDetail } from '@/data/project-detail'

const BASE_PATH = '/portfolio'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const detailMap: Record<string, ProjectDetail> = {
  'jenkins-cicd': jenkinsDetail,
}

export default function ProjectDetailModal({ isOpen, onClose }: Props) {
  const detail = jenkinsDetail

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-start justify-center py-8 px-4">
              <div className="relative w-full max-w-3xl bg-[#0d1225] border border-blue-500/20 rounded-2xl shadow-2xl shadow-blue-500/10 my-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  aria-label="关闭"
                >
                  <X size={20} />
                </button>

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Header */}
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
                      {detail.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{detail.title}</h2>
                    <p className="text-gray-400 leading-relaxed">{detail.overview}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                      <ChevronRight size={14} className="text-blue-400" />
                      技术栈
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {detail.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-10 mb-10">
                    {detail.steps.map((step, i) => (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Step number */}
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-bold text-white">{i + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.content}</p>

                            {/* Flow Chart */}
                            {step.flowChart && (
                              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                                {step.flowChart.map((item, j, arr) => (
                                  <span key={item} className="flex items-center gap-2">
                                    <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono">
                                      {item}
                                    </span>
                                    {j < arr.length - 1 && (
                                      <ArrowDown size={12} className="text-blue-500 rotate-0 md:-rotate-90 flex-shrink-0" />
                                    )}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Single Screenshot */}
                            {step.image && (
                              <div className="mt-4 rounded-xl overflow-hidden border border-blue-500/10 bg-black/40">
                                <img
                                  src={BASE_PATH + step.image}
                                  alt={step.title}
                                  className="w-full h-auto"
                                  loading="lazy"
                                />
                              </div>
                            )}

                            {/* Multiple Screenshots */}
                            {step.images && step.images.length > 0 && (
                              <div className="mt-4 space-y-4">
                                {step.images.map((img, k) => (
                                  <div key={k} className="rounded-xl overflow-hidden border border-blue-500/10 bg-black/40">
                                    <img
                                      src={BASE_PATH + img.src}
                                      alt={img.caption}
                                      className="w-full h-auto"
                                      loading="lazy"
                                    />
                                    <p className="text-center text-xs text-gray-500 py-2 bg-black/60">
                                      {img.caption}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-6">
                    <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-green-400" />
                      项目成果
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {detail.achievements.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Takeaways */}
                  <div className="p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                    <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                      <Lightbulb size={18} className="text-yellow-400" />
                      项目收获
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{detail.takeaways}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
