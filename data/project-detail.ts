export interface ProjectStep {
  title: string
  content: string
  image?: string
  flowChart?: string[]
}

export interface ProjectDetail {
  id: string
  title: string
  subtitle: string
  overview: string
  techStack: string[]
  steps: ProjectStep[]
  achievements: string[]
  takeaways: string
}

export const jenkinsDetail: ProjectDetail = {
  id: 'jenkins-cicd',
  title: '基于 GitHub、Docker 与 Jenkins 的 CI/CD 自动化部署平台',
  subtitle: '持续集成与持续交付实践',
  overview:
    '为了深入理解持续集成（Continuous Integration）与持续交付（Continuous Delivery）的工作流程，我搭建了一套基于 GitHub、Docker 和 Jenkins 的自动化部署平台，实现了代码版本管理、自动构建、自动测试以及流水线集成等功能，构建出完整的 CI/CD 工作流程。该项目通过 Jenkins 自动从 GitHub 获取最新代码，利用 Docker 完成应用容器化部署，并通过测试任务验证服务状态，实现了软件开发过程中的自动化构建与持续交付。',
  techStack: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Linux', 'Shell Script', 'Python', 'Flask', 'CI/CD Pipeline'],
  steps: [
    {
      title: '步骤一：使用 Git 建立代码仓库',
      content:
        '首先对示例应用进行 Git 初始化，并创建 GitHub 远程仓库，实现代码版本管理。通过 git init、git add、git commit、git push 等命令将本地代码同步至 GitHub，为后续持续集成提供代码来源。',
    },
    {
      title: '步骤二：修改应用并完成容器化部署',
      content:
        '为了避免与 Jenkins 默认端口冲突，将 Flask 应用端口由 8080 修改为 5050。随后编写 Shell 脚本，通过 Docker 自动完成：创建 Dockerfile → 构建镜像 → 运行容器 → 暴露服务端口。最终成功部署 Flask Web 服务，实现应用容器化运行。',
      image: '/images/端口8080改为5050.png',
    },
    {
      title: '步骤三：部署 Jenkins 服务',
      content:
        '通过 Docker 拉取 Jenkins LTS 镜像，并启动 Jenkins 容器。在 Jenkins 初始化过程中完成：安装推荐插件、配置管理员账户、建立 Jenkins 工作环境，完成持续集成平台的部署。',
    },
    {
      title: '步骤四：创建 BuildAppJob 自动构建任务',
      content:
        '在 Jenkins 中创建 BuildAppJob，其主要功能包括：从 GitHub 仓库拉取最新代码、执行 sample-app.sh 构建脚本、自动生成 Docker 镜像、启动 Flask 容器、完成应用部署。整个过程无需人工参与，实现自动化构建。',
      image: '/images/Shell自动化部署脚本.png',
      flowChart: ['GitHub', 'Jenkins', 'BuildAppJob', 'Docker Build', 'Flask Application'],
    },
    {
      title: 'BuildAppJob 运行截图',
      content: 'Jenkins 中 BuildAppJob 任务执行成功，展示代码拉取、Docker 构建与容器启动的完整输出日志。',
      image: '/images/Jenkins运行脚本.png',
    },
    {
      title: '步骤五：创建 TestAppJob 自动测试任务',
      content:
        '为了验证应用是否正常运行，创建 TestAppJob。利用 Shell 脚本结合 curl 和 grep 命令：自动访问 Web 服务 → 获取页面返回内容 → 判断服务是否正常启动。若检测成功，则返回状态码 0（构建成功）；若检测失败，则返回状态码 1（构建失败），实现了持续集成中的自动测试功能。',
    },
    {
      title: 'TestAppJob 测试脚本',
      content: '编写 Shell 测试脚本，使用 curl 访问 Flask 应用并验证返回内容，确保每次构建后自动进行功能验证。',
      image: '/images/编写测试脚本.png',
    },
    {
      title: '步骤六：构建 Jenkins Pipeline 流水线',
      content:
        '为了进一步实现完整 CI/CD 流程，创建 SamplePipeline。流水线划分为三个阶段：Preparation（停止并删除旧容器，清理运行环境）→ Build（调用 BuildAppJob，自动完成代码构建与部署）→ Results（调用 TestAppJob，对部署后的应用进行自动测试）。从而形成完整的持续集成与持续交付流程。',
      image: '/images/运行 SamplePipeline.png',
      flowChart: ['Preparation', 'Build', 'Test', 'SUCCESS'],
    },
  ],
  achievements: [
    'GitHub 代码版本管理',
    'Docker 容器化部署',
    'Jenkins 自动构建',
    'Shell 脚本自动化',
    '自动化测试',
    'Jenkins Pipeline 流水线设计',
    'CI/CD 持续集成与持续交付实践',
  ],
  takeaways:
    '通过搭建完整的 CI/CD 平台，我深入理解了现代 DevOps 的核心思想，掌握了 Git、Docker、Jenkins 等工具的协同工作方式，并提高了 Linux 环境下自动化部署和持续集成能力。该项目不仅增强了我对软件交付流程的理解，也为后续学习 Kubernetes、Ansible、Prometheus 等云原生技术奠定了基础。',
}
