import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: '熊清泉 | Network Engineer & DevOps Portfolio',
    template: '%s | 熊清泉',
  },
  description:
    '网络工程专业学生熊清泉的个人作品集。专注网络运维、自动化与云计算，展示 Jenkins CI/CD 流水线、网络实验项目等技术实践。',
  keywords: [
    '熊清泉',
    '网络工程',
    'Network Engineer',
    'DevOps',
    'Jenkins',
    'CI/CD',
    'Docker',
    'Kubernetes',
    'Portfolio',
    '个人网站',
  ],
  authors: [{ name: '熊清泉' }],
  creator: '熊清泉',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '熊清泉 | Network Engineer & DevOps Portfolio',
    description:
      '网络工程专业学生，专注网络运维、自动化与云计算。',
    siteName: '熊清泉 Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: '熊清泉 | Network Engineer & DevOps Portfolio',
    description:
      '网络工程专业学生，专注网络运维、自动化与云计算。',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://xiongqingquan.github.io'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className="antialiased dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0e1a]">
        {children}
      </body>
    </html>
  )
}
