export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number // 0-100
  icon?: string
}

export const skillCategories: SkillCategory[] = [
  {
    name: '网络',
    icon: 'Network',
    skills: [
      { name: 'Cisco', level: 85 },
      { name: 'VLAN', level: 80 },
      { name: 'OSPF', level: 75 },
      { name: 'ACL', level: 80 },
      { name: 'NAT', level: 80 },
      { name: 'DHCP', level: 85 },
    ],
  },
  {
    name: 'Linux',
    icon: 'Terminal',
    skills: [
      { name: 'Shell', level: 80 },
      { name: 'CentOS', level: 75 },
      { name: 'Ubuntu', level: 80 },
    ],
  },
  {
    name: '运维',
    icon: 'Server',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Jenkins', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
    ],
  },
  {
    name: '编程',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 65 },
    ],
  },
  {
    name: '数据库',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 70 },
      { name: 'Redis', level: 60 },
    ],
  },
  {
    name: 'AI',
    icon: 'Sparkles',
    skills: [
      { name: 'Claude Code', level: 85 },
      { name: 'Cursor', level: 80 },
      { name: 'OpenAI Agent', level: 70 },
    ],
  },
]
