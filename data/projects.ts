export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  features: string[]
  highlights?: string[]
  image?: string
  links?: {
    github?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'jenkins-cicd',
    title: 'Jenkins CI/CD 自动化流水线',
    description:
      '基于 Jenkins 搭建的持续集成与持续部署自动化流水线，实现从代码提交到生产部署的全流程自动化。通过 Docker 容器化构建环境，确保构建一致性；集成自动化测试与质量门禁，保障代码质量。',
    techStack: ['Jenkins', 'Docker', 'Git', 'Linux'],
    features: [
      '自动拉取代码：配置 Webhook 触发，代码推送即自动构建',
      '自动构建与测试：Docker 容器化构建环境，集成单元测试与代码扫描',
      '自动部署：构建产物自动推送至目标服务器，支持回滚机制',
      '可视化流水线：Jenkins Pipeline 可视化展示各阶段状态与耗时',
      '多分支支持：支持 feature/develop/main 多分支差异化流水线',
    ],
    links: {
      github: 'https://github.com/xiongqingquan/jenkins-cicd',
    },
  },
  {
    id: 'network-lab',
    title: '网络实验项目',
    description:
      '基于 Cisco 设备的综合网络实验项目，涵盖企业网络中常见的 VLAN 划分、动态路由协议 OSPF 配置、访问控制列表 ACL、AAA 认证、DHCP 服务以及 NAT 地址转换等核心技术。使用 GNS3/EVE-NG 模拟真实网络环境。',
    techStack: ['Cisco', 'GNS3', 'EVE-NG', 'Wireshark'],
    features: [
      'VLAN 划分：实现跨交换机 VLAN 通信，配置 Trunk 链路与 VTP',
      'OSPF 路由：多区域 OSPF 配置，实现全网路由互通与负载均衡',
      'ACL 访问控制：配置标准与扩展 ACL，实现精细化流量控制',
      'AAA 认证：部署 TACACS+/RADIUS 认证服务器，实现设备安全管理',
      'DHCP 服务：配置 DHCP 服务器与中继代理，自动分配 IP 地址',
      'NAT 地址转换：配置静态 NAT、动态 NAT 与 PAT，实现内外网互访',
    ],
    links: {
      github: 'https://github.com/xiongqingquan/network-lab',
    },
  },
]
