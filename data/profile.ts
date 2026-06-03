export interface ProfileData {
  name: string
  title: string
  subtitle: string
  bio: string
  avatar?: string
  location: string
  email: string
  socials: {
    github?: string
    linkedin?: string
    email: string
  }
}

export interface Education {
  school: string
  degree: string
  period: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: 'book' | 'code' | 'briefcase' | 'rocket'
}

export const profile: ProfileData = {
  name: '熊清泉',
  title: 'Network Engineer | DevOps Engineer',
  subtitle: '网络工程专业学生',
  bio: '网络工程专业学生，专注网络运维、自动化和云计算。熟练掌握 Linux 系统管理、Docker 容器化技术、Kubernetes 编排以及 Jenkins CI/CD 自动化流水线。热衷于通过技术手段提升运维效率，追求工程化与自动化最佳实践。',
  location: '成都',
  email: 'xiongqingquan@example.com',
  socials: {
    github: 'https://github.com/xiongqingquan',
    linkedin: 'https://linkedin.com/in/xiongqingquan',
    email: 'xiongqingquan@example.com',
  },
}

export const education: Education = {
  school: '成都东软学院',
  degree: '网络工程',
  period: '2022 - 2026',
}

export const timeline: TimelineEvent[] = [
  {
    year: '大一 · 2022',
    title: '网络基础入门',
    description:
      '学习计算机网络基础，掌握 TCP/IP 协议栈、网络拓扑设计，开始接触 Linux 操作系统。',
    icon: 'book',
  },
  {
    year: '大二 · 2023',
    title: '深入网络技术',
    description:
      '系统学习 VLAN、OSPF、ACL、NAT 等网络技术，考取相关认证。同时开始学习 Python 编程和 Shell 脚本。',
    icon: 'code',
  },
  {
    year: '大三 · 2024',
    title: '运维与自动化',
    description:
      '深入学习 Docker、Kubernetes 容器编排技术，掌握 Jenkins CI/CD 自动化流水线搭建，积累运维实践经验。',
    icon: 'briefcase',
  },
  {
    year: '求职阶段 · 2025-2026',
    title: '求职与成长',
    description:
      '积极寻找网络工程 / DevOps 相关实习机会，持续学习云计算与 AI 技术，打造个人技术品牌。',
    icon: 'rocket',
  },
]
