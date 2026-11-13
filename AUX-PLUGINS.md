# 辅助插件清单（dsh-purge-max 配套）

> 本仓库是 **dsh-purge-community（破甲）1.6.84 满血版**的发布/备份仓。
> 破甲只负责「拆掉拦住 agent 的闸（审批 / 沙箱 / 拒绝倾向）」，本身不提供记忆、人格、桌面操作等能力。
> 下面这些是本机与破甲**配套使用**的**辅助插件**（按用途分组），破甲与它们互不依赖、可单独装卸。
> 版本号为本机实测快照，安装以各插件官方发布为准。

## 主插件

| 插件 | 版本 | 作用 |
| --- | --- | --- |
| `dsh-purge-community` | 1.6.84 | **破甲本体**：宿主补丁 + 提示词注入 + 拒绝重试 + 强化段 + 无限制预设 |

## 辅助插件（配套增强，非破甲依赖）

### 记忆 · 人格 · 存在感
| 插件 | 版本 | 作用 |
| --- | --- | --- |
| `dsh-memory-evolve` | 0.1.0 | 分层记忆（全局/用户/项目/分支/每日）+ 自我进化 + 技能与待办管理 |
| `dsh-plugin-soul` | 0.5.0 | 可写、git 版本化的「自我」：人格文件每轮注入 |
| `dsh-persona-plugin` | 1.0.0 | 稳定可配置的人格，设置页可视化编辑，工作优先护栏 |
| `dsh-pet` | 0.4.8 | 桌面宠物「吃白饭的蓝色大肥鱼」，陪伴型彩蛋 |

### 上下文 · 成本
| 插件 | 版本 | 作用 |
| --- | --- | --- |
| `dsh-context-doctor` | 0.7.2 | 上下文注入审计：指令链/技能目录/工具 schema 的 token 成本与重复检测 |
| `dsh-cost-meter` | 1.9.64 | 会话费用统计：本会话/当日/历史费用，内置 170+ 模型价格目录 |

### 稳定 · 诊断 · 会话
| 插件 | 版本 | 作用 |
| --- | --- | --- |
| `@local/crash-guard` | 1.1.0 | 防崩溃 + 崩溃日志聚合 + 异常修复（host crash / minidump / WER / 熔断戳） |
| `dsh-llm-breaker` | 0.1.0 | Provider 熔断：模型不可用时快速失败并转移 |
| `dsh-fail-logger` | 0.5.4 | 工具失败自动实录：按错因去重计数写入技能维护区 |
| `dsh-session-surgeon` | 0.2.0 | 修复无法加载的会话（seq gap / 撕裂 zstd 帧等） |
| `dsh-session-del` | 1.0.1 | 真删会话（移到回收区可恢复）+ 清理索引幽灵 id |
| `dsh-rewind-plugin` | 0.22.1 | 会话内回退（rewind）并恢复工作区文件 |

### 桌面 · 操作 · 通知
| 插件 | 版本 | 作用 |
| --- | --- | --- |
| `dsh-win-computer-use` | 0.1.2 | Windows 原生 computer 工具：多步屏幕/窗口/键鼠操作 |
| `dsh-desktop-control` | 0.1.0 | 通用 Windows 桌面控制：截屏、窗口枚举等 |
| `dsh-desktop-notify` | 1.4.1 | 回合结束时原生 OS toast |
| `dsh-notification` | 0.2.0 | 桌面 + Webhook 通知（完成/异常/等待） |

### 本地模型 · 逆向 · 渠道 · 插件治理
| 插件 | 版本 | 作用 |
| --- | --- | --- |
| `@local/local-llm` | 1.0.0 | 本机全部 ollama 模型（general/reason/vision）辅助层：命令预检、报错解释、看图、无状态杂活，全离线免费 |
| `dsh-infinite-gen-5` | 1.0.0 | 无限五代（IG5）：统一 Reverse / Ghidra 静态分析 + x64dbg 无头调试工作台 |
| `@local/qqbot-panel` | 1.2.0 | QQ 机器人可视化控制台（账号/桥接/自我状态/能力面板） |
| `@omdsh-dev/dsh-plugin-check` | 0.1.0 | 插件仓库健康检查：manifest / patch 格式 / 构建陷阱扫描 |
| `@zseven-w/dsh-harbor` | 0.1.0-rc.4 | 已安装插件的只读镜像：能力清单与证据 |
| `@linxin666/dsh-client-ui-plugin-manager` | 0.4.8 | Web GUI 官方插件页的更新检查 |

---

## 与破甲的协作方式（一句话版）

- **破甲拆闸** → 模型不再反复「我不能 / 要不要确认」；
- **persona / soul / memory-evolve** → 把这个"能干活"的 agent 变成有连续性、有人格的那个；
- **local-llm / ig5 / computer-use** → 给它本机能力（0 云端 token 的杂活、二进制分析、真实操作电脑）；
- **crash-guard / llm-breaker / session-*** → 让它别崩、别断会话；
- **context-doctor / cost-meter** → 随时知道它每轮花多少、贵在哪。

> 标注口径：以上除 `dsh-purge-community` 外均为**辅助插件**；破甲自身可在不装任何辅助插件时独立工作。
