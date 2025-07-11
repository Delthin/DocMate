# DocMate - openEuler Writing Assistant

DocMate 是一个基于 AI 的 VS Code 扩展，专为 openEuler 文档编写而设计。它提供术语检查、文本润色和翻译功能，帮助提高文档质量和一致性。

## 功能特性

- 🔍 **智能检查**：检查术语使用、语法错误和写作风格
- ✨ **文本润色**：AI 驱动的文本改进建议
- 🌐 **多语言翻译**：支持多种语言间的文档翻译
- 📚 **术语库管理**：内置 openEuler 专业术语库
- 🎯 **实时反馈**：即时显示检查结果和改进建议

## 技术架构

本项目采用现代化的技术栈：

- **VS Code Extension API**：扩展核心框架
- **React 19**：用户界面组件
- **Vite 6**：前端构建工具
- **TypeScript**：类型安全的开发体验
- **Monorepo**：模块化的项目结构

### 项目结构

```
docmate/
├── packages/
│   ├── extension/          # VS Code 扩展主体
│   ├── core/              # 核心业务逻辑
│   ├── ui/                # React UI 组件
│   └── shared/            # 共享类型和工具
├── docs/                  # 项目文档
└── .vscode/              # VS Code 配置
```

## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+
- VS Code 1.85+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动开发模式
pnpm run dev

# 或者分别启动
pnpm run dev:extension  # 扩展开发
pnpm run dev:ui        # UI 开发
```

### 构建项目

```bash
pnpm run build
```

### 运行测试

```bash
pnpm run test
```

## 使用方法

1. **安装扩展**：在 VS Code 中安装 DocMate 扩展
2. **配置 AI 服务**：在设置中配置 AI API 密钥和端点
3. **选择文本**：在编辑器中选择要处理的文本
4. **执行操作**：
   - 右键菜单选择相应功能
   - 或使用侧边栏的 DocMate 面板
   - 或使用命令面板 (Ctrl+Shift+P)

### 配置示例

在 VS Code 设置中配置：

```json
{
  "docmate.aiService.apiKey": "your-api-key",
  "docmate.aiService.endpoint": "https://api.example.com/v1/chat/completions",
  "docmate.terminology.autoCheck": true
}
```

## 开发指南

### 添加新功能

1. 在 `packages/shared/src/types.ts` 中定义类型
2. 在 `packages/core/src/actions/` 中实现业务逻辑
3. 在 `packages/extension/src/controllers/` 中添加控制器逻辑
4. 在 `packages/ui/src/components/` 中创建 UI 组件

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 规则
- 编写单元测试
- 使用 Prettier 格式化代码

### 调试

1. 按 F5 启动扩展开发主机
2. 在新窗口中测试扩展功能
3. 使用 VS Code 调试器设置断点

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 支持

如有问题或建议，请：

1. 查看 [文档](docs/)
2. 提交 [Issue](https://github.com/openeuler/docmate/issues)
3. 参与 [讨论](https://github.com/openeuler/docmate/discussions)

## 致谢

感谢 openEuler 社区的支持和贡献。
