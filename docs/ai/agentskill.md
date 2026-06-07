---
title: Agent Skills
date: 2026-06-07
tags: [Agent Skills]
---
# Agent Skills

## skill 开发方式

1. 纯手写
2. 专门写 skill 的skill
   anthropic 官方 Skill-Creator；Superpowers 中的元技能Writing-Skills
3. 微软的skillopt对skill进行优化
   用深度学习的方法论来优化skill，一个目标模型负责写skill，另一个优化器模型负责打分并提出修改意见（优化器模型优于目标模型效果更好）。局限性在于需要大量测试数据和可自动评估的标准。

## skill 开发流程

1. 确定触发时机
   什么场景触发？关键词、口令、上下文条件
2. 确定输入与输出
3. 确定大致流程
   拆解关键步骤与执行顺序；标注调用的工具和外部资源
4. 补充细节与规则
   边界条件、错误处理、约束条件；示例、模版、最佳实践

## skill 收藏

| skill                                                                                               | 说明                                                                                               | 标签       |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------- |
| [sivalabs-agent-skills](https://github.com/sivaprasadreddy/sivalabs-agent-skills)                      | Spring Boot 的最佳实践，社区里口碑最稳                                                             | springboot |
| [agent-skill-java-spring-framework](https://github.com/AyrtonAldayr/agent-skill-java-spring-framework) | 专门针对 Spring Framework 7.x / Spring Boot 4.x 的现代写法，给 AI 设定一套严格的代码规范。         | springboot |
| [dr-jskill](https://github.com/jdubois/dr-jskill)                                                      | JHipster 作者亲手打磨的 Spring Boot Skill (个人品味)                                               | springboot |
| [spring-testing-skills](https://github.com/spring-ai-community/spring-testing-skills)                  | 专攻Spring项目测试                                                                                 | spring     |
| [spring-ai-agent-utils](https://github.com/spring-ai-community/spring-ai-agent-utils)                  | 在 Spring Boot 应用里做 Agent 开发可以使用的一个Java 库，把 Claude Code 的核心工具都重新实现了一遍 | spring ai  |

## 引用

[Agent Skills](https://agentskills.io/home)

[SkillOpt](https://microsoft.github.io/SkillOpt/)

[微软最新研究：像神经网络一样训练 Skill](https://mp.weixin.qq.com/s/sqHF3d3l5PX3VOs0Mtwk3A)

[重新定义Skill开发：保姆级教程&amp;一站式开发助手发布](https://mp.weixin.qq.com/s/FgGVPw0BOZEu5sH1FdrVoQ)

[Agent Skill规范、构建与设计模式](https://mp.weixin.qq.com/s/LCpiLyLnRn5WyuHpribyHw)

[5 Agent Skill design patterns every ADK developer should know](https://x.com/GoogleCloudTech/status/2033953579824758855)

[工作流的 Skill 怎么写？从 7 个顶级 Skill 中提炼的模式与最佳实践](https://mp.weixin.qq.com/s/aoNwyY5ZkCRMkZirn1rElQ?scene=334)
