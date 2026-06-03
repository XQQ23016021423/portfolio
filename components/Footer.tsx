'use client'

import { GitFork, Globe, Mail, Heart } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-blue-500/10 bg-[#0a0e1a]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            &copy; {new Date().getFullYear()} {profile.name}. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-blue-500/10 text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <GitFork size={18} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-blue-500/10 text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Globe size={18} />
              </a>
            )}
            <a
              href={`mailto:${profile.socials.email}`}
              className="p-2 rounded-lg hover:bg-blue-500/10 text-gray-500 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
