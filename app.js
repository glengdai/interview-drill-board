const q = (type, question, prompts, answer, keyPoints) => ({
  type,
  question,
  prompts,
  answer,
  keyPoints,
});

const resumes = [
  {
    code: "V1",
    name: "AI平台主战版",
    detail: "AI + 平台 + ToB + 内容生态，适合主攻岗位",
  },
  {
    code: "V2",
    name: "AI内容生态 / Agent版",
    detail: "AIGC + Agent + 创作者生态，适合字节和 Agent 方向",
  },
  {
    code: "V3",
    name: "AI工具落地强化版",
    detail: "AI落地 + 工具化 + 流程 / 系统能力，适合试水和平台系统岗",
  },
];

const companies = [
  {
    id: "leishen",
    name: "雷神",
    role: "产品经理（赛事）",
    batch: "试水",
    priority: 1,
    resume: "V3",
    schedule: "2026-04-11（周六）",
    strategy: "先练自我介绍、项目表达和游戏赛事场景感。",
    summary: "有赛事与游戏内容背景，适合先热身，不会浪费最想冲的机会。",
    fitReason:
      "你有企鹅电竞赛事经历，也在腾讯做过创作者和游戏内容工具，能把“懂内容场景 + 会做AI工具”串起来。",
    greeting:
      "您好，我目前在腾讯 IEG 做 AI 工具和内容平台产品，做过 AI 素材库、主播监控平台，也有企鹅电竞赛事运营经历，对游戏内容生态和赛事场景比较熟，感觉和贵司岗位匹配度较高，想和您进一步沟通。",
    intro:
      "我目前在腾讯 IEG 做产品，主要负责 AI 工具和内容平台相关项目，服务对象包括 MCN、创作者和游戏项目组。比较有代表性的项目是 AI 高光识别素材库和主播监控平台，前者把素材筛选效率提升了大约 50%。另外我之前在企鹅电竞做过 KPL 和 LOL 赛事运营，所以我对游戏内容生态和赛事场景都比较熟，这也是我想投雷神这个岗位的原因。",
    questions: [
      q(
        "自我介绍",
        "请做一个 1 分钟左右的自我介绍，并说明为什么你适合雷神的赛事产品岗位。",
        ["讲清现在在做什么", "提一个最 relevant 的项目", "把赛事经历和 AI 工具能力串起来"],
        "我目前在腾讯 IEG 做产品，主要负责 AI 工具和内容平台相关项目，服务对象包括 MCN、创作者和游戏项目组。比较有代表性的项目是 AI 高光识别素材库和主播监控平台，前者把素材筛选效率提升了大约 50%，也让我比较熟悉内容生产、创作者协作和平台工具设计。除此之外，我之前在企鹅电竞做过 KPL 和 LOL 全球总决赛等头部赛事的运营，对赛事内容、观众消费链路和跨团队推进也有直接经验。我觉得自己适合雷神这个岗位，一方面是我理解游戏和赛事场景，另一方面是我现在已经具备把场景问题做成 AI 工具和产品方案的能力。",
        ["腾讯IEG", "AI素材库", "50%", "企鹅电竞", "KPL", "赛事产品"],
      ),
      q(
        "场景题",
        "如果让你为赛事产品设计一个 AI 能力，你会优先做什么，为什么？",
        ["先定义用户是谁", "再讲场景和痛点", "最后讲 AI 如何介入和怎么评估效果"],
        "如果从赛事产品切入，我会优先考虑做赛事内容切片和高光素材辅助工具。因为赛事内容更新快、素材生产压力大，运营和内容团队往往需要在短时间内完成片段筛选、标题包装和分发。如果 AI 能先帮助识别高光片段、做初步标签和素材归类，就可以明显提升内容生产效率。我的设计思路会先明确用户是内容运营还是创作者，再定义输入输出，比如高光推荐准确率、人工二次编辑率、最终素材使用率这些指标，通过数据和人工反馈一起评估效果。",
        ["用户", "高光", "内容效率", "输入输出", "准确率", "使用率"],
      ),
      q(
        "经历题",
        "你之前有运营经历，为什么现在更想做产品？",
        ["不要否定过去经历", "强调运营给了你场景理解", "说明你现在承担的已经是产品工作"],
        "我前几段经历确实更偏内容和运营，但这段经历给了我很强的场景理解和用户感知能力。进入腾讯之后，我实际承担的工作已经是完整的产品职责，包括需求判断、方案设计、PRD、原型和项目推进，所以我现在会更明确地把自己定位成 AI 工具和平台产品经理。对我来说，这不是完全转向，而是在原有场景理解基础上，把问题解决方式从运营执行升级为产品设计和工具建设。",
        ["运营", "场景理解", "产品职责", "PRD", "原型", "AI工具"],
      ),
      q(
        "指标题",
        "如果你负责一个赛事产品，你最先会看哪些核心指标？",
        ["不要只说 DAU", "讲内容生产、观看、转化三个层面", "最好能带出业务目标"],
        "我会先结合产品的核心目标拆指标。如果偏内容消费，我会看赛事观看人数、观看时长、回访率和互动率；如果偏内容生产，我会看素材产出效率、高光使用率和内容分发效率；如果偏商业或转化，我会看活动参与率、转化漏斗和用户沉淀情况。我的习惯是先明确业务目标，再把过程指标和结果指标分开，这样优化方向会更清楚。",
        ["业务目标", "观看时长", "互动率", "高光使用率", "转化漏斗", "过程指标"],
      ),
      q(
        "协作题",
        "讲一个你推动复杂项目落地的例子，你是怎么协调不同团队的？",
        ["讲清业务背景", "讲你具体怎么推进", "讲结果，不要只说沟通很多"],
        "我会讲创作主播素材库这个项目。这个项目涉及业务方、研发、算法和使用方，大家最初对问题定义并不完全一致。我先通过访谈和场景拆解，把“什么是可用高光”这件事定义清楚，再把需求拆成算法识别、素材管理和使用体验几个模块，分阶段推进。在推进过程中，我会固定对齐目标、优先级和验收标准，避免后期返工。最终这个项目把素材筛选效率提升了约 50%，也服务了 120 多家 MCN 和 400 多位创作者。",
        ["素材库", "算法", "需求拆解", "验收标准", "50%", "120+MCN"],
      ),
      q(
        "公司题",
        "为什么想来雷神？",
        ["别说泛泛的公司很好", "突出赛事 / 游戏内容 / 工具结合", "说明你想来的真正原因"],
        "我对游戏内容生态本身就比较熟，之前有企鹅电竞赛事运营经历，现在又在腾讯做创作者和游戏项目组相关的工具产品，所以我对赛事内容、创作者协同和平台支撑这条链路理解比较完整。我想找一个能把游戏内容理解和 AI 工具能力结合起来的岗位，雷神这个方向和我的积累比较贴，所以我会很想尝试。",
        ["游戏内容生态", "赛事运营", "创作者协同", "AI工具", "积累贴合"],
      ),
    ],
  },
  {
    id: "leiniao",
    name: "雷鸟",
    role: "中台产品经理",
    batch: "试水",
    priority: 2,
    resume: "V3",
    schedule: "2026-04-11（周六）",
    strategy: "练平台抽象、中台化表达和复杂流程梳理。",
    summary: "适合测试你“平台化 + AI落地 + 复杂协同”的表达质量。",
    fitReason:
      "你在腾讯做过素材平台、权限模型、分发规则和多项目复用，本质上就是中台思维。",
    greeting:
      "您好，我目前在腾讯 IEG 负责 ToB 工具平台和 AI 内容工具产品，做过素材平台、中台能力抽象和管理后台类项目，也能独立输出 PRD 和原型，和贵司中台产品岗位比较匹配，想进一步了解。",
    intro:
      "我现在在腾讯 IEG 负责 AI 工具和 ToB 平台产品，平时做得比较多的是需求抽象、PRD、原型、权限和流程设计，以及跨团队推进落地。比较有代表性的项目是游戏素材库平台，我们把原来分散的需求逐步抽象成可复用的平台能力。我的优势是能把复杂业务梳理清楚，再结合 AI 和工具化方式做成真正能落地的系统。",
    questions: [
      q(
        "自我介绍",
        "请介绍一下你自己，并重点讲讲你和中台产品最相关的经验。",
        ["突出平台化和复用", "讲清楚不是只做页面功能", "带上 AI 工具能力"],
        "我目前在腾讯 IEG 做 AI 工具和 ToB 平台产品，日常主要负责需求分析、产品规划、PRD 和原型输出，以及跨团队推进落地。和中台产品最相关的项目是游戏素材库平台，我们面对的是不同项目组重复建设素材工具、维护成本高的问题，所以我采用先定制、后抽象的方式，逐步沉淀统一的素材结构、权限模型和分发规则，让多个项目可以快速接入复用。这个过程让我比较习惯从复杂业务里抽象共性能力，也让我形成了平台化设计的思路。另外，我现在也持续在把 AI 能力接入这些工具场景里，让系统不仅能管流程，也能提效率。",
        ["腾讯IEG", "平台产品", "素材库平台", "权限模型", "复用", "AI提效"],
      ),
      q(
        "方法论",
        "你怎么理解中台产品？做中台最容易踩的坑是什么？",
        ["先说定义", "再说方法", "最后说踩坑和避免方式"],
        "我理解中台不是把功能做大做全，而是从多个业务场景中抽象出稳定、可复用、可扩展的共性能力。做中台最容易踩的坑有两个，一是抽象过早，做成一个谁都不爱用的大而全系统；二是只看通用性，忽略真实业务的差异。我的方法一般是先从一个明确场景切入，先解决真实问题，再逐步总结哪些规则、流程和数据结构可以复用。这样中台不是空中楼阁，而是从业务里长出来的。",
        ["中台", "可复用", "抽象过早", "真实业务", "先定制后抽象"],
      ),
      q(
        "项目题",
        "讲一个你把定制需求逐步抽象成平台能力的例子。",
        ["说明原来为什么分散", "讲你抽象了什么", "讲复用价值"],
        "我会讲游戏素材库平台。最开始是不同游戏项目组都有自己的素材需求，如果每个项目都单独做工具，维护成本会越来越高。所以我先在一个项目里把需求跑通，再逐步抽象出统一的素材结构、权限模型和分发规则。后面这些能力就不是某个项目独有的定制功能，而是可以被多个项目复用的平台模块。这种做法既保留了业务灵活性，也降低了重复建设成本。",
        ["定制需求", "素材结构", "权限模型", "分发规则", "复用", "成本"],
      ),
      q(
        "AI题",
        "如果让你给中台产品增加 AI 能力，你会怎么设计？",
        ["讲一个具体场景", "不要停留在“加个聊天框”", "说清楚输入、输出和指标"],
        "我会优先从流程中重复度高、规则相对清晰的环节切入，比如内容审核辅助、素材归类推荐或者报表摘要生成。原因是这类场景对 AI 的容错和价值都比较清晰，容易快速验证效果。设计上我会先定义用户是谁、当前人工流程是什么、AI 介入后替代或辅助哪一步，再明确输入数据、输出结果和可评估指标，比如人工节省时长、推荐采纳率、二次修改率等，避免只做成一个看起来智能但实际上没有业务价值的功能。",
        ["具体场景", "重复流程", "输入输出", "采纳率", "修改率", "业务价值"],
      ),
      q(
        "冲突题",
        "如果两个业务方对中台能力的诉求相互冲突，你怎么处理？",
        ["先讲判断原则", "再讲沟通方式", "最后讲最终落地"],
        "我一般会先判断这两个需求到底是目标冲突，还是表达方式不同。如果是目标一致、实现路径不同，我会优先提炼共性能力，再通过参数化或配置化解决差异。如果真的是目标冲突，我会回到业务优先级、影响范围和复用价值来排序，而不是单纯按谁更着急来做。这样既能保护中台的长期方向，也能让业务方感受到决策是有依据的。",
        ["共性能力", "参数化", "配置化", "业务优先级", "复用价值"],
      ),
      q(
        "公司题",
        "为什么想来雷鸟做中台产品？",
        ["突出你不是泛泛投中台", "讲你的方法论", "讲你能快速上手的点"],
        "我现在做得比较顺手的是把分散需求抽象成平台能力，再通过权限、流程和规则设计做成可复用系统。雷鸟这个岗位比较强调中台规划和落地，这和我在腾讯做素材平台、中台化建设的经历比较匹配。我比较希望进入一个更系统地建设平台能力的团队，把自己在业务抽象、AI工具落地和跨团队推进上的经验用得更深一些。",
        ["平台能力", "中台规划", "落地", "业务抽象", "AI工具"],
      ),
    ],
  },
  {
    id: "oppo",
    name: "OPPO",
    role: "产品经理（工具、AI）",
    batch: "重点",
    priority: 3,
    resume: "V1",
    schedule: "2026-04-12（周日）",
    strategy: "开始主攻，打 AI 工具产品和用户体验闭环。",
    summary: "这类岗位最能体现你的 AI 是主竞争力，而不只是附加项。",
    fitReason:
      "你的 AI 素材库、授权合作平台、自动化周报系统都能直接映射到 AI 工具产品。",
    greeting:
      "您好，我目前在腾讯 IEG 做 AI 工具和平台产品，做过 AI 素材库、自动化周报系统和多 Agent 方向项目，比较擅长把 AI 能力落到真实业务流程里，感觉和贵司工具/AI产品岗位很贴，想和您沟通。",
    intro:
      "我目前在腾讯 IEG 做 AI 工具和平台产品，过去几年主要围绕内容工具、业务支撑系统和自动化工作流做设计和落地。比较有代表性的项目包括 AI 素材库、授权合作平台和 AI 自动周报系统，我比较擅长从真实业务场景出发，把 AI 能力转成用户真正能用的工具产品。我觉得 OPPO 这个岗位和我的方向很贴，所以很希望进一步沟通。",
    questions: [
      q(
        "自我介绍",
        "请做一个 1 分钟自我介绍，并讲讲你为什么适合工具 / AI 产品岗。",
        ["先讲现在做什么", "再讲两个 AI 项目", "最后落到工具产品能力"],
        "我目前在腾讯 IEG 做 AI 工具和平台产品，主要负责内容工具、业务支撑系统和自动化工作流的产品设计与落地。代表项目包括 AI 高光识别素材库、授权合作平台和 AI 自动周报系统，其中素材库项目把素材筛选效率提升了大约 50%，也服务了 120 多家 MCN 和 400 多位创作者。我比较擅长的事情，是从真实业务流程中找出高频痛点，再把 AI 能力转化成清晰、可用、可评估的工具功能。我觉得这和 OPPO 的工具 / AI 产品方向是比较贴的。",
        ["腾讯IEG", "AI工具", "授权合作平台", "自动化周报", "50%", "工具产品"],
      ),
      q(
        "AI理解",
        "你怎么理解 AI 工具产品和普通功能型产品的区别？",
        ["别只说用上模型", "讲结果不确定性", "讲产品经理如何控质量"],
        "我理解 AI 工具产品和普通功能型产品最大的区别，在于它的输出不是完全确定的，所以产品经理需要额外设计好用户预期、容错方式和评估机制。普通功能更多是把流程做顺，而 AI 工具还要考虑模型能力边界、结果质量、人工介入点和持续优化方式。产品经理不能只停留在调用能力，而是要把模型输出放进真实工作流里，确保它能被使用、被纠正、被衡量。",
        ["输出不确定", "用户预期", "容错", "评估机制", "人工介入", "工作流"],
      ),
      q(
        "项目题",
        "你做 AI 素材库时，是怎么判断这个产品真的有价值的？",
        ["讲用户痛点", "讲衡量指标", "讲结果数据"],
        "这个项目一开始最明确的问题就是素材筛选效率低、人工成本高，所以我会先把价值判断放在效率和成本两个维度。设计方案时，我们围绕 AI 高光识别和素材管理链路去看几个核心指标，比如筛选时长是否下降、人工参与是否减少、素材实际使用率是否提升。最终结果是素材筛选效率提升了约 50%，素材存储成本降低约 90%，人力成本降低约 57%，所以这个项目的业务价值是比较明确的。",
        ["效率", "成本", "筛选时长", "使用率", "50%", "90%"],
      ),
      q(
        "设计题",
        "如果模型效果还不稳定，你会怎么设计 AI 工具的体验？",
        ["讲清楚用户预期管理", "讲人工确认", "讲逐步放权"],
        "如果模型效果还不稳定，我不会一开始就让 AI 全自动执行，而是先把它放在辅助决策或生成初稿的位置。体验上我会明确告诉用户这是建议、草稿还是自动结果，同时保留人工确认、修改和回退能力。产品推进上，我会先从风险低、价值高的场景切入，逐步用采纳率、修改率和满意度验证效果，等模型稳定后再考虑放大自动化比例。",
        ["辅助决策", "初稿", "人工确认", "回退", "采纳率", "逐步放权"],
      ),
      q(
        "0-1题",
        "如果让你 30 天内从 0 到 1 做一个 AI 小工具，你会怎么推进？",
        ["讲节奏", "讲验证方式", "讲 MVP"],
        "如果时间只有 30 天，我会先在第一周快速确认高频痛点和使用场景，尽量通过访谈和现有流程观察锁定一个单点问题。第二周做最小可用方案，先验证 AI 输出是否真的比人工更省时间。第三周拉通产品、设计和研发，把 MVP 做出来并找小范围用户试用。第四周重点看使用率、采纳率和修改率这些指标，再决定是继续扩展能力还是先优化核心体验。",
        ["第一周", "MVP", "试用", "使用率", "采纳率", "核心体验"],
      ),
      q(
        "公司题",
        "为什么想来 OPPO？",
        ["讲方向匹配", "讲你对 AI 工具的判断", "不要泛泛而谈品牌"],
        "我很想继续深耕 AI 工具产品这条线，而不是把 AI 只当一个加分项。OPPO 这个岗位既强调工具产品，也强调 AI 能力落地和用户体验，我觉得和我现在的方向非常一致。我也希望进入一个产品方法更成熟的平台，把自己在 AI 工具设计、业务流程梳理和实际落地上的经验继续做深。",
        ["深耕AI工具", "方向一致", "用户体验", "AI能力落地", "成熟平台"],
      ),
    ],
  },
  {
    id: "kuaishou",
    name: "快手",
    role: "产品经理",
    batch: "重点",
    priority: 4,
    resume: "V1",
    schedule: "2026-04-12（周日）",
    strategy: "平台产品主攻备选，偏内部系统和流程效率。",
    summary: "能很好承接你做过的 AI 素材库、监控平台和自动化周报系统。",
    fitReason:
      "你对内部支撑平台和业务效率工具已经有一整套表达，快手适合在主攻轮使用。",
    greeting:
      "您好，我目前在腾讯 IEG 负责 AI 工具和业务支撑平台产品，做过素材库、监控平台和自动化周报系统，涉及需求分析、PRD、原型和项目推进全流程，和贵司内部运营平台方向比较匹配，想进一步沟通。",
    intro:
      "我目前在腾讯 IEG 负责 AI 工具和业务支撑平台产品，覆盖需求分析、PRD、原型设计、项目推进和效果复盘。做过 AI 素材库、主播监控平台和自动化周报系统，这些项目都比较偏内部效率提升和流程优化。我觉得自己比较适合平台型产品岗位，因为既能理解业务，也能把需求抽象成可落地的系统方案。",
    questions: [
      q(
        "自我介绍",
        "请介绍一下你自己，并重点讲你为什么适合平台型产品岗位。",
        ["讲业务理解 + 系统化表达", "带一个平台项目", "带一个 AI 项目"],
        "我目前在腾讯 IEG 负责 AI 工具和业务支撑平台产品，平时覆盖需求分析、PRD、原型设计、项目推进和效果复盘。我的项目里既有平台型的，比如游戏素材库和主播监控平台，也有 AI 能力落地的，比如 AI 高光识别素材库和自动化周报系统。我比较适合平台型岗位的原因，是我既能理解业务场景，也比较擅长把分散需求抽象成可落地的系统方案，并持续用数据看效果和做优化。",
        ["业务支撑平台", "素材库", "监控平台", "AI项目", "系统方案", "数据优化"],
      ),
      q(
        "平台题",
        "内部运营平台最重要的价值是什么？你会怎么衡量？",
        ["不要只说好用", "讲效率、准确性、协同成本", "指标最好有层次"],
        "我觉得内部运营平台最核心的价值，是帮助业务方更高效、更稳定地完成关键流程，同时降低协同成本和人为错误。衡量上我一般会分三个层次看：第一是效率，比如处理时长、单人可支撑任务量；第二是质量，比如错误率、重复返工率、信息漏传率；第三是业务结果，比如平台使用率、功能采纳率、核心流程达成率。这样既能看平台有没有被用，也能看它是不是真的创造了价值。",
        ["效率", "稳定", "协同成本", "错误率", "使用率", "功能采纳率"],
      ),
      q(
        "AI题",
        "你会怎么把 AI 放进一个内部平台里，而不是做成噱头？",
        ["先找高频场景", "讲人工介入点", "讲评估方式"],
        "我一般不会先想模型，而是先看内部流程里哪些环节重复度高、信息处理量大、人工判断成本高，比如报表摘要、内容归类、风险提醒这类场景。把 AI 放进去时，我会明确它是辅助决策、生成初稿还是直接执行，并设计好人工确认和纠错环节。评估上会看节省时长、采纳率、修改率和使用留存，确保 AI 真的是在帮团队提效，而不是增加新的操作负担。",
        ["高频场景", "辅助决策", "人工确认", "节省时长", "修改率", "留存"],
      ),
      q(
        "反馈题",
        "如果业务方觉得平台不好用，但你判断核心能力方向是对的，你会怎么处理？",
        ["区分方向问题还是体验问题", "讲验证方式", "讲推进策略"],
        "我会先区分这到底是方向错了，还是体验和落地方式有问题。如果核心能力方向是对的，我会优先通过访谈、埋点和流程观察找出具体卡点，比如入口不清晰、字段太复杂，还是流程太长。然后我会先优化影响最大的使用环节，尽快让业务方感受到改进，而不是一上来推翻整个方案。因为平台产品很容易在方向正确时，死在体验细节上。",
        ["方向问题", "体验问题", "访谈", "埋点", "卡点", "优化关键环节"],
      ),
      q(
        "优先级题",
        "如果长期平台建设和短期业务需求冲突，你怎么排优先级？",
        ["讲判断标准", "讲如何向业务方解释", "不要空讲平衡"],
        "我一般会先看三个维度：业务影响大小、问题的时效性，以及这次投入能不能反向沉淀平台能力。如果是高时效、高影响的需求，我会优先支持，但尽量在方案设计时保留可复用空间；如果只是单次定制且复用价值低，我会更谨慎。对业务方我会讲清楚为什么这么排，不是拒绝需求，而是确保团队资源花在更有效的位置上。",
        ["业务影响", "时效性", "平台能力", "可复用", "团队资源"],
      ),
      q(
        "公司题",
        "为什么想来快手？",
        ["强调内部平台和效率工具", "不要说“平台大”就结束", "讲经验自然衔接"],
        "快手这个岗位比较吸引我的点是内部运营平台和效率工具方向。我过去做过素材库、监控平台、自动化周报系统，这些本质上都是在帮业务提升效率、降低协作成本，所以我会觉得这个方向和我已有经验的衔接很自然。与此同时，我也希望在更成熟的平台里，把自己在 AI 工具和支撑系统方向的能力继续做深。",
        ["内部运营平台", "效率工具", "协作成本", "经验衔接", "AI工具"],
      ),
    ],
  },
  {
    id: "rongyao",
    name: "荣耀",
    role: "AI软件产品经理",
    batch: "冲刺",
    priority: 5,
    resume: "V3",
    schedule: "2026-04-13（周一）",
    strategy: "打系统级思维、AI体验闭环和数据驱动优化。",
    summary: "匹配度不错，但要把“AI落地 + 系统思维 + 体验闭环”讲得更完整。",
    fitReason:
      "你已经做过 AI 工具和平台项目，下一步要把这些经验翻译成系统级产品思维和完整闭环能力。",
    greeting:
      "您好，我目前在腾讯 IEG 做 AI 工具和平台产品，做过 AI 素材库、自动化周报系统和流程类产品，也长期在探索 AI 在真实业务场景中的落地方式，感觉和贵司 AI 软件产品经理方向比较匹配，想进一步沟通。",
    intro:
      "我目前在腾讯 IEG 做 AI 工具和平台产品，既做过面向创作者和业务方的工具平台，也在持续推进 AI 能力和自动化流程的落地。我比较擅长把复杂问题拆成产品能力和流程闭环，再结合数据去看效果。荣耀这个岗位对系统级思维和 AI 场景理解要求比较高，这也是我想重点尝试的方向。",
    questions: [
      q(
        "自我介绍",
        "请做一个 1 分钟自我介绍，并说明你和 AI 软件产品最相关的经验是什么。",
        ["突出 AI 落地", "突出系统 / 平台思维", "讲一个数据结果"],
        "我目前在腾讯 IEG 做 AI 工具和平台产品，负责内容工具、业务支撑系统和自动化流程的设计与落地。代表项目包括 AI 素材库、授权合作平台和 AI 自动周报系统，其中素材库项目把素材筛选效率提升了约 50%。这几类项目让我形成了一个比较稳定的方法，就是先从真实场景出发拆问题，再把 AI 能力放进完整产品流程里，最后用数据验证效果。我觉得这和 AI 软件产品经理要求的系统思维和落地能力是比较契合的。",
        ["AI落地", "平台产品", "自动化流程", "50%", "系统思维", "数据验证"],
      ),
      q(
        "系统题",
        "你怎么理解系统级 / 平台级的 AI 产品设计思维？",
        ["不要只讲一个功能点", "讲闭环", "讲多模块协作"],
        "我理解系统级的 AI 产品设计，不是单看某一个功能聪不聪明，而是看这个能力能不能嵌进完整用户旅程，形成稳定闭环。它要求产品经理不仅定义前台功能，还要考虑数据来源、状态管理、规则约束、反馈机制和后续优化路径。换句话说，系统级思维是把 AI 当成一个可持续运转的产品能力，而不是单点 demo。",
        ["系统级", "完整闭环", "数据来源", "状态管理", "反馈机制", "demo"],
      ),
      q(
        "边界题",
        "你会怎么定义 AI 能力边界，避免产品做成“什么都能做，什么都做不好”？",
        ["讲判断标准", "讲边界感", "讲逐步扩展"],
        "我一般会从三个维度定义 AI 能力边界：第一是业务价值，优先做最影响效率或体验的环节；第二是数据和模型可行性，看现有输入是否足够支撑稳定输出；第三是风险和容错，先从可纠正、可回退的场景切入。我的习惯不是一开始把能力摊得很大，而是先把一个场景打透，再逐步扩展相关能力。",
        ["业务价值", "可行性", "风险", "容错", "可回退", "逐步扩展"],
      ),
      q(
        "数据题",
        "你怎么通过数据去驱动一个 AI 产品持续优化？",
        ["讲数据层次", "讲过程指标 + 结果指标", "讲如何回流优化"],
        "我一般会把数据分成三层。第一层是使用数据，比如触达率、使用率、留存；第二层是效果数据，比如采纳率、修改率、任务完成率；第三层是业务结果，比如效率提升、成本下降或者用户满意度提升。对 AI 产品来说，关键不是只看调用量，而是要把这些数据回流到问题分析和能力优化里，找到到底是场景选错了、提示设计有问题，还是模型能力不够。",
        ["使用率", "采纳率", "修改率", "业务结果", "回流优化", "模型能力"],
      ),
      q(
        "协作题",
        "你怎么和算法、研发团队协作推进一个 AI 产品？",
        ["讲目标对齐", "讲边界拆解", "讲验收方式"],
        "和算法、研发协作时，我会特别重视三件事：先对齐问题定义和目标，再拆清楚系统规则、模型能力和人工处理各自负责什么，最后把验收方式提前定好。因为 AI 项目最怕的不是实现难，而是大家对“什么算做好”理解不一致。对我来说，产品经理要做的不只是提需求，更是把目标、边界和评估讲清楚。",
        ["目标对齐", "边界拆解", "系统规则", "人工处理", "验收方式"],
      ),
      q(
        "公司题",
        "为什么想来荣耀做 AI 软件产品经理？",
        ["讲系统级产品吸引你", "讲 AI 方向匹配", "讲你想做深什么"],
        "我现在已经比较确定自己想长期深耕 AI 产品方向，但我不想只做单点工具，我也很想把 AI 放进更完整、更系统的产品闭环里。荣耀这个岗位既强调 AI 理解，也强调系统级思维和体验闭环，这和我现在的能力发展方向非常一致。我希望在这样的岗位里，把自己在 AI 落地、流程设计和数据驱动优化上的经验做得更深。",
        ["深耕AI", "系统级思维", "体验闭环", "能力方向一致"],
      ),
    ],
  },
  {
    id: "xunlei-ai",
    name: "迅雷",
    role: "AI产品经理",
    batch: "冲刺",
    priority: 6,
    resume: "V1",
    schedule: "2026-04-14（周二）",
    strategy: "把 0-1 AI 工具、动手能力和用户同理心讲透。",
    summary: "这是你的高匹配目标岗之一，建议在问题和表达都练顺后再投。",
    fitReason:
      "你已经有 AI 工具、自动化工作流、独立原型和多 Agent 项目，方向上和 JD 很顺。",
    greeting:
      "您好，我目前在腾讯 IEG 做 AI 工具和平台产品，做过 AI 素材库、授权合作平台和自动化周报系统，也在持续做多 Agent 方向实践，比较擅长从真实业务场景出发把 AI 能力转成可用产品，感觉和贵司 AI 产品经理岗位很贴，想进一步沟通。",
    intro:
      "我目前在腾讯 IEG 负责 AI 工具和平台产品，工作里做过 AI 素材库、自动化周报系统、管理后台和流程类产品，也有独立做原型和管理端 demo 的经验。我比较擅长从业务痛点出发定义产品方向，再把 AI 能力落到工作流和用户体验里，所以我对迅雷这个 AI 产品经理岗位非常感兴趣。",
    questions: [
      q(
        "自我介绍",
        "请做一个 1 分钟自我介绍，并说明你和 AI 产品经理岗位最匹配的地方是什么。",
        ["讲 AI 项目", "讲 0-1 和动手能力", "讲真实业务场景"],
        "我目前在腾讯 IEG 做 AI 工具和平台产品，负责内容工具、业务支撑系统和自动化工作流的设计与落地。比较有代表性的项目包括 AI 高光识别素材库、授权合作平台和 AI 自动周报系统，其中素材库项目把素材筛选效率提升了约 50%。除了平台内项目，我也会自己做产品原型和多 Agent 方向的实践，所以我比较匹配 AI 产品经理岗位的地方，是我既能理解业务问题，也能把 AI 能力做成真正可用的产品方案。",
        ["AI工具", "授权合作平台", "自动化周报", "50%", "原型", "真实业务"],
      ),
      q(
        "0-1题",
        "如果让你从 0 到 1 做一个 AI 小工具，你会怎么推进？",
        ["讲需求验证", "讲 MVP", "讲上线后怎么迭代"],
        "我会先快速锁定一个高频、明确、可验证的痛点，而不是一开始就追求很大的想象空间。确定场景后，我会先做最小可用方案，看 AI 输出能不能真正替代或辅助一段流程。上线后我会重点看使用率、采纳率、修改率和留存，再通过用户反馈判断是场景有问题，还是体验和效果需要继续优化。对 AI 小工具来说，最重要的是尽快跑出闭环。",
        ["高频痛点", "MVP", "使用率", "采纳率", "留存", "闭环"],
      ),
      q(
        "方法题",
        "你平时会怎么用 ChatGPT、Claude 这类工具解决实际问题？",
        ["不要空讲会用", "举真实例子", "讲到产出变化"],
        "我会把这类工具放进具体工作流里使用，而不是把它们当作单独的聊天工具。比如在内部项目里，我会用它们辅助需求梳理、原型草稿、周报摘要和信息汇总；在个人项目里，我会用它们验证任务拆解、文案生成和 Agent 协作流程。对我来说，会不会用 AI 工具，不是看会不会问问题，而是看它有没有真的帮我缩短从想法到产出的路径。",
        ["ChatGPT", "Claude", "需求梳理", "周报摘要", "Agent", "产出路径"],
      ),
      q(
        "自驱题",
        "讲一个能体现你自驱力和动手能力的例子。",
        ["讲主动发现问题", "讲自己做了什么", "讲结果和后续"],
        "我会讲授权合作平台这个项目。这个项目最开始并不是别人正式派给我的，而是我在工作里发现授权流程依赖人工、协同效率低，所以主动提出方案并独立完成用户端和管理端原型设计，覆盖权限体系、审批流和状态流转。这个方案后来得到了团队认可，并进入正式开发阶段。这个经历比较能体现我不是只提想法，而是真的愿意把产品往前推。",
        ["主动发现问题", "独立完成", "原型设计", "审批流", "正式开发"],
      ),
      q(
        "验证题",
        "你怎么判断一个 AI 工具有没有真正解决用户问题？",
        ["讲场景", "讲数据", "讲反馈"],
        "我一般会从三个层面判断。第一是场景匹配度，用户是不是真的在这个流程里高频使用它；第二是效果数据，比如采纳率、修改率、完成时长变化；第三是主观反馈，用户是否觉得它真的省事、好用。只有这三层都能形成正反馈，我才会认为这个 AI 工具不是噱头，而是真的解决了问题。",
        ["场景匹配", "采纳率", "修改率", "完成时长", "用户反馈"],
      ),
      q(
        "公司题",
        "为什么想来迅雷做 AI 产品经理？",
        ["讲岗位方向和你重合的部分", "讲你真正想做什么", "别只说薪资和平台"],
        "我对 AI 产品方向已经比较明确了，而且我最感兴趣的就是把 AI 做成真实可用的小工具和效率产品。迅雷这个岗位强调 0 到 1、动手能力、用户体验和真实落地，这和我现在做过的事情非常贴。我希望进入一个更聚焦 AI 工具方向的团队，把自己在产品定义、工作流设计和实际落地上的经验继续做深。",
        ["AI方向明确", "0到1", "动手能力", "用户体验", "真实落地"],
      ),
    ],
  },
  {
    id: "xunlei-ai-tool",
    name: "迅雷",
    role: "AI小工具产品经理",
    batch: "冲刺",
    priority: 7,
    resume: "V1",
    schedule: "2026-04-14（周二）",
    strategy: "强调小而快、用户体验、自驱和独立完成项目能力。",
    summary: "和你目前的 AI 工具、原型和个人项目经验非常贴，是值得重点冲的岗位。",
    fitReason:
      "你的优势是能把 AI 能力快速做成工具化产品，这个岗位会比偏大平台规划岗更直接吃到你的长板。",
    greeting:
      "您好，我目前在腾讯 IEG 做 AI 工具和平台产品，做过 AI 素材库、管理后台和自动化系统，也有独立设计原型和多 Agent 产品实践的经验，比较擅长把 AI 能力快速转成可用小工具，感觉和贵司 AI 小工具产品经理岗位很贴，想进一步沟通。",
    intro:
      "我目前在腾讯 IEG 做 AI 工具和平台产品，过去几年一直围绕真实业务痛点做工具化设计和落地。我比较喜欢做的，是把复杂问题收敛成一个清晰可用的产品入口，再通过快速验证和迭代把它打磨成真正能被使用的工具，这也是我对 AI 小工具方向特别感兴趣的原因。",
    questions: [
      q(
        "自我介绍",
        "请做一个 1 分钟自我介绍，并重点讲讲你为什么适合 AI 小工具产品经理。",
        ["突出工具感", "突出动手和独立推进", "突出用户体验"],
        "我目前在腾讯 IEG 做 AI 工具和平台产品，做过 AI 素材库、授权合作平台和自动化周报系统，也有独立做原型和管理端 demo 的经验。我比较擅长从真实问题里收敛出一个清晰的小切口，再用 AI 能力去优化效率和体验。对我来说，AI 小工具最关键的不是能力堆得多，而是能不能简单、有效、愿意被持续使用。我觉得这点和我的产品习惯比较一致。",
        ["AI工具", "原型", "小切口", "效率", "体验", "持续使用"],
      ),
      q(
        "产品题",
        "如果让你做一个面向普通用户的 AI 小工具，你会优先选什么方向？",
        ["讲选择逻辑", "讲高频", "讲为什么适合小工具"],
        "我会优先选一个高频、单点、结果反馈快的方向，比如信息摘要、内容整理、创作辅助这种场景。因为小工具要先建立使用习惯，最好一上来就能让用户明显感受到节省时间或者降低负担。我的思路通常不是做一个什么都能做的大产品，而是先把一个最痛的动作做得足够顺，再决定要不要扩展。",
        ["高频", "单点", "结果反馈快", "使用习惯", "节省时间", "先打透"],
      ),
      q(
        "体验题",
        "AI 小工具里，智能和简单发生冲突时，你更看重什么？",
        ["不要极端站队", "讲场景判断", "讲体验原则"],
        "如果智能和简单发生冲突，我一般会优先保简单，但不是牺牲价值。因为小工具的核心是低门槛和高完成率，如果入口太复杂，再聪明的能力也很难形成持续使用。我的原则是先让用户在一个简单路径里获得确定价值，再把更强的智能能力放到可选项里，逐步释放，而不是一开始就把复杂度压给用户。",
        ["简单", "低门槛", "高完成率", "确定价值", "逐步释放"],
      ),
      q(
        "验证题",
        "如果只给你一周时间验证一个 AI 小工具方向，你会怎么做？",
        ["讲最小验证闭环", "讲验证方式", "讲什么算验证成功"],
        "如果只有一周，我会先选一个痛点足够明确的场景，然后用最小方式把价值验证出来。前两天确认用户场景和问题，第三到第四天做 demo 或低保真原型，第五到第七天找目标用户试用。验证成功对我来说不只是有人说不错，而是用户愿意真实使用，并且能明确反馈它帮自己节省了什么。",
        ["一周", "demo", "低保真原型", "试用", "真实使用", "节省"],
      ),
      q(
        "动手题",
        "讲一个能体现你独立完成项目能力的例子。",
        ["讲自己做了什么", "最好带设计或 demo", "讲结果"],
        "我会讲授权合作平台这个项目，以及我现在在做的 AI 跨境电商运营平台。前者是我主动发现问题后，独立完成用户端和管理端产品方案及原型设计；后者则是在个人项目里把多 Agent 任务编排、运营链路拆解和工具化形态串起来。对我来说，独立完成项目不是一个人包办所有事，而是能把问题走通，把关键方案做出来，并推动它进入下一步。",
        ["授权合作平台", "原型设计", "多Agent", "个人项目", "推动下一步"],
      ),
      q(
        "公司题",
        "为什么想来迅雷做 AI 小工具产品经理？",
        ["讲岗位和你最像的地方", "讲你对小工具的判断", "讲动手和创造欲"],
        "这个岗位吸引我的点非常明确，就是它强调小工具、0 到 1、自驱和真正把 AI 做成好用产品。相比只做宏观规划，我其实更喜欢在一个具体问题上快速定义产品、做出原型、验证方向，再持续迭代。我觉得迅雷这个岗位和我的产品方式很像，所以我会特别想争取。",
        ["小工具", "0到1", "自驱", "原型", "持续迭代"],
      ),
    ],
  },
  {
    id: "byte",
    name: "字节 / 抖音",
    role: "AIGC产品设计（Agent方向）",
    batch: "冲刺",
    priority: 8,
    resume: "V2",
    schedule: "2026-04-15（周三）",
    strategy: "重点冲刺，先把 Agent、创作者场景和评估体系讲顺再投。",
    summary: "创作者生态 + AIGC + Agent 任务编排，这条线和你的未来主打非常接近。",
    fitReason:
      "你已经有多 Agent 个人项目和创作者生态经验，只是要把它讲得更像产品设计能力。",
    greeting:
      "您好，我目前在腾讯 IEG 做 AI 工具和创作者生态相关产品，既有 AI 内容工具落地经验，也在持续做多 Agent 协作方向的产品探索，和贵司 AIGC Agent 方向岗位非常匹配，想进一步沟通。",
    intro:
      "我目前在腾讯 IEG 做 AI 工具和内容平台产品，服务对象包括 MCN、创作者和游戏项目组。工作里我做过 AI 素材库、自动化周报系统等项目，也在持续探索多 Agent 在真实业务链路中的任务编排和协作方式。因为我既理解创作者场景，也在把 AI 做成产品，所以我对字节这个 AIGC Agent 方向的岗位非常感兴趣。",
    questions: [
      q(
        "Agent题",
        "你怎么理解 Agent 产品设计？",
        ["别停留在“大模型很强”", "讲任务拆解、边界、评估", "讲你的实践理解"],
        "我理解 Agent 产品设计，不只是给模型一个入口，而是围绕任务目标去设计拆解、决策、执行、反馈和结果衔接的完整链路。产品经理需要明确什么任务适合交给 Agent，什么环节仍然需要系统规则或人工介入，同时设计好上下文传递、异常处理和评估机制。对我来说，Agent 设计的关键不是功能看起来多智能，而是它能不能在真实业务流程里稳定地产生价值。",
        ["任务拆解", "边界", "上下文", "异常处理", "评估机制", "真实价值"],
      ),
      q(
        "创作者题",
        "如果围绕创作者场景做 Agent，你会优先做哪类能力？",
        ["讲具体用户和场景", "别做太泛", "说清楚输入输出"],
        "如果围绕创作者场景做 Agent，我会优先考虑创作辅助链路，比如选题洞察、素材整理、高光提炼、标题与描述生成这一类相对高频、价值明确的环节。原因是这条链路既和创作者的核心效率直接相关，也比较适合设计多步协作。设计上我会先明确输入是什么，比如账号历史内容、平台热点、原始素材，再定义输出是内容建议、结构化素材还是可编辑初稿，并通过采纳率、修改率、发布转化等指标去判断效果。",
        ["创作者", "选题洞察", "素材整理", "输入输出", "采纳率", "发布转化"],
      ),
      q(
        "边界题",
        "你会怎么定义 Agent 的能力边界和任务链路？",
        ["讲先拆任务", "讲边界", "讲人机协同"],
        "我一般会先把目标任务拆成若干个明确子任务，再判断每一步更适合由 Agent、系统规则还是人工来完成。能力边界的核心不是尽量做大，而是确保每一步都可解释、可纠错、可衔接。任务链路设计上，我会特别关注上下文传递、状态管理和异常分流，避免 Agent 做出一个结果以后，系统不知道下一步怎么接。",
        ["子任务", "系统规则", "人工", "可纠错", "上下文传递", "状态管理"],
      ),
      q(
        "评估题",
        "如果你做一个 Agent 产品，你会怎么搭评估体系？",
        ["讲过程和结果", "讲质量和效率", "最好有可迭代思路"],
        "我会把评估拆成三层。第一层是过程层，比如任务完成率、异常中断率、平均耗时；第二层是质量层，比如输出采纳率、人工修改率、用户满意度；第三层是结果层，比如内容发布效率、创作成本或最终转化提升。这样做的好处是，当结果不好时，我能更快判断问题出在任务拆解、能力效果还是场景选择上。",
        ["任务完成率", "异常中断率", "采纳率", "修改率", "用户满意度", "结果层"],
      ),
      q(
        "协作题",
        "Agent 产品往往要和算法、研发深度协作，你会怎么推进？",
        ["讲对齐方式", "讲分工边界", "讲节奏管理"],
        "我会先和算法、研发把目标问题和成功标准讲清楚，再把任务链路拆开，明确哪些部分依赖模型能力，哪些部分依赖系统编排和产品规则。推进过程中，我会更关注接口边界、状态流转和验收方式，因为 Agent 产品最怕出现每个环节都做了一点，但整体链路跑不通。对我来说，产品经理要承担把链路讲清楚和把复杂协作收束起来的责任。",
        ["成功标准", "任务链路", "模型能力", "系统编排", "状态流转", "验收"],
      ),
      q(
        "公司题",
        "为什么想来字节做 AIGC / Agent 方向？",
        ["讲创作者场景吸引你", "讲 Agent 方向是你长期想做的", "讲你的积累"],
        "我现在最想深耕的方向，就是创作者生态里的 AIGC 和 Agent 产品设计。因为这条线既有真实高频场景，也很能体现产品经理对任务拆解、体验闭环和 AI 能力边界的判断。字节在创作者生态和内容产品上有很强的场景基础，而我自己既做过创作者相关工具，也在持续做多 Agent 方向实践，所以我会非常希望把这两条线结合起来继续做深。",
        ["创作者生态", "AIGC", "Agent", "任务拆解", "体验闭环", "继续做深"],
      ),
    ],
  },
].sort((left, right) => left.priority - right.priority);

const storageKey = "interview-drill-progress";
const aiStorageKey = "interview-drill-ai-settings";

const state = {
  selectedCompanyId: null,
  questionIndex: 0,
  flipped: false,
  recognition: null,
  aiProxyReady: null,
  aiServerConfigured: false,
};

function loadStoredValue(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveStoredValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getDefaultAiSettings() {
  return {
    mode: "hybrid",
    proxyUrl:
      window.location.protocol === "http:" || window.location.protocol === "https:"
        ? `${window.location.origin}/api/review`
        : "http://127.0.0.1:8787/api/review",
    baseUrl: "https://api.openai.com/v1",
    apiKey: "",
    model: "gpt-4.1-mini",
  };
}

const progress = loadStoredValue(storageKey, {});
const aiSettings = {
  ...getDefaultAiSettings(),
  ...loadStoredValue(aiStorageKey, {}),
};

const els = {
  resumeLegend: document.getElementById("resume-legend"),
  batchList: document.getElementById("batch-list"),
  companyGrid: document.getElementById("company-grid"),
  dashboardView: document.getElementById("dashboard-view"),
  companyView: document.getElementById("company-view"),
  companyName: document.getElementById("company-name"),
  companyRole: document.getElementById("company-role"),
  companyBatchTag: document.getElementById("company-batch-tag"),
  companyMeta: document.getElementById("company-meta"),
  questionCounter: document.getElementById("question-counter"),
  questionType: document.getElementById("question-type"),
  flashcard: document.getElementById("flashcard"),
  cardQuestion: document.getElementById("card-question"),
  cardPrompts: document.getElementById("card-prompts"),
  cardAnswer: document.getElementById("card-answer"),
  cardKeyPoints: document.getElementById("card-key-points"),
  answerInput: document.getElementById("answer-input"),
  scoreValue: document.getElementById("score-value"),
  scoreBadges: document.getElementById("score-badges"),
  reviewSummary: document.getElementById("review-summary"),
  reviewSource: document.getElementById("review-source"),
  reviewRewriteWrap: document.getElementById("review-rewrite-wrap"),
  reviewRewrite: document.getElementById("review-rewrite"),
  greetingText: document.getElementById("greeting-text"),
  introText: document.getElementById("intro-text"),
  progressList: document.getElementById("progress-list"),
  voiceStatus: document.getElementById("voice-status"),
  heroResume: document.getElementById("hero-resume"),
  analyzeButton: document.getElementById("analyze-answer"),
  reviewMode: document.getElementById("review-mode"),
  proxyUrl: document.getElementById("proxy-url"),
  aiBaseUrl: document.getElementById("ai-base-url"),
  aiApiKey: document.getElementById("ai-api-key"),
  aiModel: document.getElementById("ai-model"),
  aiStatus: document.getElementById("ai-status"),
  saveAiSettings: document.getElementById("save-ai-settings"),
  checkAiService: document.getElementById("check-ai-service"),
};

function saveProgress() {
  saveStoredValue(storageKey, progress);
}

function saveAiSettings() {
  saveStoredValue(aiStorageKey, aiSettings);
}

function ensureCompanyProgress(companyId) {
  if (!progress[companyId]) {
    progress[companyId] = { answers: {}, scores: {}, reviewCounts: {}, lastQuestion: 0 };
    return;
  }

  if (!progress[companyId].answers) progress[companyId].answers = {};
  if (!progress[companyId].scores) progress[companyId].scores = {};
  if (!progress[companyId].reviewCounts) progress[companyId].reviewCounts = {};
  if (typeof progress[companyId].lastQuestion !== "number") progress[companyId].lastQuestion = 0;
}

function batchClassName(batch) {
  return `badge badge--batch-${batch}`;
}

function getCompanyById(companyId) {
  return companies.find((company) => company.id === companyId);
}

function getAnsweredCount(company) {
  ensureCompanyProgress(company.id);
  return company.questions.filter((question) => {
    const answer = progress[company.id].answers[question.question];
    return Boolean(answer && answer.trim());
  }).length;
}

function getCompanyStats(company) {
  ensureCompanyProgress(company.id);

  const answeredCount = getAnsweredCount(company);
  const reviewedQuestions = company.questions.filter((question) => {
    const reviewCount = progress[company.id].reviewCounts[question.question] || 0;
    return reviewCount > 0;
  }).length;

  const totalReviews = company.questions.reduce((sum, question) => {
    return sum + (progress[company.id].reviewCounts[question.question] || 0);
  }, 0);

  const completedRounds = company.questions.length
    ? Math.min(
        ...company.questions.map(
          (question) => progress[company.id].reviewCounts[question.question] || 0,
        ),
      )
    : 0;

  const scoredValues = company.questions
    .map((question) => progress[company.id].scores[question.question]?.total)
    .filter((value) => Number.isFinite(value));

  const avgScore = scoredValues.length
    ? Math.round(scoredValues.reduce((sum, value) => sum + value, 0) / scoredValues.length)
    : null;

  return {
    answeredCount,
    reviewedQuestions,
    totalReviews,
    completedRounds,
    avgScore,
  };
}

function renderResumeLegend() {
  els.resumeLegend.innerHTML = resumes
    .map(
      (resume) => `
        <div class="resume-item">
          <span class="resume-item__code">${resume.code}</span>
          <strong>${resume.name}</strong>
          <span>${resume.detail}</span>
        </div>
      `,
    )
    .join("");
}

function renderBatchList() {
  const batches = ["试水", "重点", "冲刺"];
  els.batchList.innerHTML = batches
    .map((batch) => {
      const items = companies.filter((company) => company.batch === batch);
      return `
        <section class="batch-group">
          <h3>${batch}</h3>
          <p class="batch-group__meta">共 ${items.length} 家，先按顺序刷</p>
          <div class="batch-group__list">
            ${items
              .map((company) => {
                const stats = getCompanyStats(company);
                return `
                  <button class="company-mini ${
                    state.selectedCompanyId === company.id ? "is-active" : ""
                  }" data-company-select="${company.id}" type="button">
                    <div class="company-mini__top">
                      <span class="company-mini__name">${company.name}</span>
                      <span class="badge">${company.resume}</span>
                    </div>
                    <div class="company-mini__role">${company.role}</div>
                    <div class="company-mini__meta">顺序 ${company.priority} · ${company.schedule} · 已答 ${stats.answeredCount}/${company.questions.length} · 完整 ${stats.completedRounds} 轮</div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderCompanyGrid() {
  els.companyGrid.innerHTML = companies
    .map((company) => {
      const stats = getCompanyStats(company);
      return `
        <article class="company-card ${
          state.selectedCompanyId === company.id ? "is-active" : ""
        }" data-company-select="${company.id}">
          <div class="company-card__top">
            <span class="${batchClassName(company.batch)}">${company.batch}</span>
            <span class="badge">${company.resume}</span>
          </div>
          <div class="company-card__name">${company.name}</div>
          <div class="company-card__role">${company.role}</div>
          <p class="company-card__summary">${company.summary}</p>
          <div class="company-card__meta">顺序 ${company.priority} · ${company.schedule} · 题量 ${company.questions.length} · 完整 ${stats.completedRounds} 轮 · 总点评 ${stats.totalReviews} 次</div>
        </article>
      `;
    })
    .join("");
}

function renderCompanyMeta(company) {
  const stats = getCompanyStats(company);
  els.companyMeta.innerHTML = `
    <div class="meta-card">
      <span class="meta-card__label">投递批次</span>
      <strong>${company.batch}</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">建议顺序</span>
      <strong>第 ${company.priority} 个</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">简历版本</span>
      <strong>${company.resume}</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">题量</span>
      <strong>${company.questions.length} 题</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">已作答</span>
      <strong>${stats.answeredCount}/${company.questions.length}</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">已点评题数</span>
      <strong>${stats.reviewedQuestions}/${company.questions.length}</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">完整刷题轮次</span>
      <strong>${stats.completedRounds} 轮</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">总点评次数</span>
      <strong>${stats.totalReviews} 次</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">当前平均分</span>
      <strong>${stats.avgScore ?? "--"}</strong>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">策略</span>
      <span>${company.strategy}</span>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">为什么投</span>
      <span>${company.fitReason}</span>
    </div>
    <div class="meta-card">
      <span class="meta-card__label">建议时间</span>
      <strong>${company.schedule}</strong>
    </div>
  `;
}

function renderQuestion(company) {
  ensureCompanyProgress(company.id);
  const question = company.questions[state.questionIndex];
  const savedAnswer = progress[company.id].answers[question.question] || "";
  const savedScore = progress[company.id].scores[question.question];

  els.questionCounter.textContent = `${state.questionIndex + 1} / ${company.questions.length}`;
  els.questionType.textContent = question.type;
  els.cardQuestion.textContent = question.question;
  els.cardPrompts.innerHTML = question.prompts.map((item) => `<li>${item}</li>`).join("");
  els.cardAnswer.textContent = question.answer;
  els.cardKeyPoints.innerHTML = question.keyPoints
    .map((point) => `<span class="pill">${point}</span>`)
    .join("");
  els.answerInput.value = savedAnswer;
  els.greetingText.textContent = company.greeting;
  els.introText.textContent = company.intro;

  state.flipped = false;
  els.flashcard.classList.remove("is-flipped");

  if (savedScore) {
    renderReview(savedScore);
  } else {
    resetReview();
  }
}

function renderProgress(company) {
  ensureCompanyProgress(company.id);
  els.progressList.innerHTML = company.questions
    .map((question, index) => {
      const answer = progress[company.id].answers[question.question] || "";
      const score = progress[company.id].scores[question.question];
      const reviewCount = progress[company.id].reviewCounts[question.question] || 0;
      return `
        <div class="progress-item">
          <div>
            <strong>${index + 1}. ${question.type}</strong>
            <small>${answer ? "已作答" : "未作答"} · 已点评 ${reviewCount} 次</small>
          </div>
          <div>${score ? `${score.total} 分` : "--"}</div>
        </div>
      `;
    })
    .join("");
}

function renderCompany(companyId) {
  const company = getCompanyById(companyId);
  if (!company) return;

  state.selectedCompanyId = company.id;
  ensureCompanyProgress(company.id);
  if (typeof progress[company.id].lastQuestion === "number") {
    state.questionIndex = Math.min(
      progress[company.id].lastQuestion,
      company.questions.length - 1,
    );
  } else {
    state.questionIndex = 0;
  }

  els.dashboardView.classList.add("hidden");
  els.companyView.classList.remove("hidden");
  els.companyName.textContent = company.name;
  els.companyRole.textContent = company.role;
  els.companyBatchTag.textContent = `${company.batch} · 简历 ${company.resume}`;

  renderCompanyMeta(company);
  renderQuestion(company);
  renderProgress(company);
  renderBatchList();
  renderCompanyGrid();
}

function showDashboard() {
  state.selectedCompanyId = null;
  els.dashboardView.classList.remove("hidden");
  els.companyView.classList.add("hidden");
  renderBatchList();
  renderCompanyGrid();
}

function renderReview(review) {
  els.scoreValue.textContent = review.total;
  els.scoreBadges.innerHTML = (review.badges || []).map((badge) => `<span>${badge}</span>`).join("");
  els.reviewSummary.textContent = review.summary;
  els.reviewSource.textContent = review.source || "本地规则";

  if (review.rewrite) {
    els.reviewRewriteWrap.classList.remove("hidden");
    els.reviewRewrite.textContent = review.rewrite;
  } else {
    els.reviewRewriteWrap.classList.add("hidden");
    els.reviewRewrite.textContent = "";
  }
}

function resetReview() {
  els.scoreValue.textContent = "--";
  els.scoreBadges.innerHTML = "";
  els.reviewSummary.textContent =
    "写完回答后点“智能点评”，这里会看你的结构、关键词覆盖、结果感和表达习惯。";
  els.reviewSource.textContent = "本地规则";
  els.reviewRewriteWrap.classList.add("hidden");
  els.reviewRewrite.textContent = "";
}

function countMatches(answer, list) {
  return list.filter((item) => answer.includes(item)).length;
}

function analyzeAnswer(answer, question) {
  const clean = answer.trim();
  const length = clean.length;
  const keyMatches = countMatches(clean, question.keyPoints);
  const structureTokens = ["我目前", "负责", "项目", "比如", "所以", "我觉得", "原因", "结果", "最终"];
  const fillerTokens = ["就是", "然后", "那个", "嗯", "啊"];
  const resultTokens = ["提升", "降低", "效率", "数据", "%", "结果", "服务", "指标"];

  const structureHits = countMatches(clean, structureTokens);
  const fillerHits = countMatches(clean, fillerTokens);
  const resultHits = countMatches(clean, resultTokens);
  const hasNumbers = /\d/.test(clean);

  const lengthScore = Math.max(0, Math.min(25, 25 - Math.abs(150 - length) / 6));
  const keywordScore = Math.min(35, keyMatches * 6 + (keyMatches >= 4 ? 5 : 0));
  const structureScore = Math.min(22, structureHits * 4 + (clean.includes("因为") ? 4 : 0));
  const resultScore = Math.min(18, resultHits * 3 + (hasNumbers ? 4 : 0));
  const penalty = Math.min(12, Math.max(0, fillerHits - 2) * 2);

  const total = Math.max(
    32,
    Math.min(99, Math.round(lengthScore + keywordScore + structureScore + resultScore - penalty)),
  );

  const strengths = [];
  const improvements = [];

  if (keyMatches >= Math.ceil(question.keyPoints.length / 2)) {
    strengths.push("关键词覆盖不错，回答和岗位问题基本对焦。");
  } else {
    improvements.push(
      `关键点还不够全，建议补上：${question.keyPoints
        .filter((point) => !clean.includes(point))
        .slice(0, 4)
        .join("、")}。`,
    );
  }

  if (structureHits >= 3) {
    strengths.push("表达有基本结构，不是平铺直叙。");
  } else {
    improvements.push("可以按“背景 -> 做法 -> 结果 -> 为什么适合”来回答，会更顺。");
  }

  if (hasNumbers || resultHits >= 2) {
    strengths.push("有结果感，能让面试官更快判断你的真实产出。");
  } else {
    improvements.push("这一题可以再补一个结果、指标或效果判断，别只讲过程。");
  }

  if (length < 60) {
    improvements.push("回答偏短，容易显得准备不足，建议再展开 2 到 3 句。");
  } else if (length > 320) {
    improvements.push("回答偏长，建议收紧到 3 个重点，避免绕。");
  }

  if (fillerHits >= 4) {
    improvements.push("口头填充词有点多，正式表达时尽量减少“就是 / 然后 / 那个”。");
  }

  if (!strengths.length) {
    strengths.push("主线是对的，已经能围绕岗位来回答了。");
  }

  const badges = [
    `关键词 ${Math.min(question.keyPoints.length, keyMatches)}/${question.keyPoints.length}`,
    `结构 ${Math.round(structureScore)}/22`,
    `结果感 ${Math.round(resultScore)}/18`,
  ];

  const summary = [
    `总体评价：${total >= 85 ? "已经比较能打" : total >= 72 ? "方向对了，再收紧一点会更好" : "还需要再组织一下表达"}`,
    "",
    `优点：${strengths.join("")}`,
    "",
    `建议：${improvements.join("") || "可以开始练口语版本，把句子说得更自然。"}`
  ].join("\n");

  return {
    total,
    badges,
    summary,
    rewrite: "",
    source: "本地规则",
  };
}

function normalizeAiReview(review, fallbackReview) {
  return {
    total: Number.isFinite(Number(review.total))
      ? Math.max(0, Math.min(100, Math.round(Number(review.total))))
      : fallbackReview.total,
    badges: Array.isArray(review.badges) && review.badges.length
      ? review.badges.slice(0, 4)
      : fallbackReview.badges,
    summary: review.summary || fallbackReview.summary,
    rewrite: review.rewrite || "",
    source: review.source || "真实 AI",
  };
}

function combineReviews(localReview, aiReview) {
  const mergedBadges = [...new Set([...(aiReview.badges || []), ...(localReview.badges || [])])].slice(0, 4);
  return {
    total: Math.round(localReview.total * 0.35 + aiReview.total * 0.65),
    badges: mergedBadges,
    summary: `AI评价：${aiReview.summary}\n\n本地补充：${localReview.summary}`,
    rewrite: aiReview.rewrite || "",
    source: "AI + 本地",
  };
}

function saveCurrentAnswer() {
  const company = getCompanyById(state.selectedCompanyId);
  if (!company) return;

  ensureCompanyProgress(company.id);
  const question = company.questions[state.questionIndex];
  progress[company.id].answers[question.question] = els.answerInput.value.trim();
  progress[company.id].lastQuestion = state.questionIndex;
  saveProgress();
  renderCompanyMeta(company);
  renderProgress(company);
  renderBatchList();
  renderCompanyGrid();
}

function clearCurrentReviewCache() {
  const company = getCompanyById(state.selectedCompanyId);
  if (!company) return;

  ensureCompanyProgress(company.id);
  const question = company.questions[state.questionIndex];
  delete progress[company.id].scores[question.question];
  saveProgress();
  renderCompanyMeta(company);
  renderProgress(company);
  renderBatchList();
  renderCompanyGrid();
}

function collectAiSettingsFromForm() {
  return {
    mode: els.reviewMode.value,
    proxyUrl: els.proxyUrl.value.trim(),
    baseUrl: els.aiBaseUrl.value.trim(),
    apiKey: els.aiApiKey.value.trim(),
    model: els.aiModel.value.trim(),
  };
}

function hydrateAiSettingsForm() {
  els.reviewMode.value = aiSettings.mode;
  els.proxyUrl.value = aiSettings.proxyUrl;
  els.aiBaseUrl.value = aiSettings.baseUrl;
  els.aiApiKey.value = aiSettings.apiKey;
  els.aiModel.value = aiSettings.model;
}

function renderAiStatus(message) {
  els.aiStatus.textContent = message;
}

function saveAiSettingsFromForm() {
  Object.assign(aiSettings, collectAiSettingsFromForm());
  saveAiSettings();
  if (aiSettings.mode === "local") {
    renderAiStatus("已保存。当前只用本地规则点评。");
  } else {
    renderAiStatus("AI 设置已保存。页面会优先尝试使用服务端 AI；如果服务端没配，也可以使用你手动填写的配置。");
  }
}

function buildHealthUrl(proxyUrl) {
  try {
    const url = new URL(proxyUrl, window.location.href);
    if (url.pathname.endsWith("/api/review")) {
      url.pathname = url.pathname.replace(/\/api\/review$/, "/api/health");
    } else {
      url.pathname = "/api/health";
    }
    return url.toString();
  } catch {
    return "http://127.0.0.1:8787/api/health";
  }
}

async function checkAiService(showMessage = true) {
  const currentSettings = collectAiSettingsFromForm();
  const healthUrl = buildHealthUrl(currentSettings.proxyUrl || aiSettings.proxyUrl);

  if (showMessage) {
    renderAiStatus("正在检查 AI 服务...");
  }

  try {
    const response = await fetch(healthUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    state.aiProxyReady = true;
    state.aiServerConfigured = Boolean(data.aiConfigured);
    if (showMessage) {
      if (data.aiConfigured) {
        renderAiStatus(
          `AI 服务可用：${data.name || "Interview AI Proxy"} 已连接，服务端已配置 ${data.model || "模型"}，现在不需要再手动填 API Key。`,
        );
      } else {
        renderAiStatus(
          `服务已连通：${data.name || "Interview AI Proxy"} 可用，但服务端还没配置 AI 密钥。你也可以在页面里临时填自己的配置。`,
        );
      }
    }
    return true;
  } catch (error) {
    state.aiProxyReady = false;
    state.aiServerConfigured = false;
    if (showMessage) {
      renderAiStatus(
        "没有检测到可用的 AI 服务。若是本地使用，请先运行 `node server.js`；若已部署线上，请检查 `/api/health` 是否可访问。",
      );
    }
    return false;
  }
}

function hasUsableAiConfig(settings) {
  return Boolean(
    settings.proxyUrl &&
      settings.baseUrl &&
      settings.apiKey &&
      settings.model,
  );
}

async function requestAiReview(company, question, answer, localReview) {
  const provider = hasUsableAiConfig(aiSettings)
    ? {
        baseUrl: aiSettings.baseUrl,
        apiKey: aiSettings.apiKey,
        model: aiSettings.model,
      }
    : null;

  const payload = {
    company: {
      name: company.name,
      role: company.role,
      batch: company.batch,
      resume: company.resume,
      strategy: company.strategy,
    },
    question: {
      type: question.type,
      title: question.question,
      prompts: question.prompts,
      keyPoints: question.keyPoints,
      referenceAnswer: question.answer,
    },
    candidateAnswer: answer,
    localReview,
    provider,
  };

  const response = await fetch(aiSettings.proxyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "AI 点评请求失败");
  }

  return data.review;
}

async function analyzeCurrentAnswer() {
  const company = getCompanyById(state.selectedCompanyId);
  if (!company) return;

  const question = company.questions[state.questionIndex];
  const answer = els.answerInput.value.trim();
  saveCurrentAnswer();

  if (!answer) {
    els.reviewSummary.textContent = "先写一点回答再点评，我才能给你更像样的反馈。";
    els.scoreValue.textContent = "--";
    els.scoreBadges.innerHTML = "";
    return;
  }

  const localReview = analyzeAnswer(answer, question);
  let finalReview = localReview;

  els.analyzeButton.disabled = true;
  els.analyzeButton.textContent = "点评中...";

  try {
    if (aiSettings.mode !== "local") {
      const hasClientConfig = hasUsableAiConfig(aiSettings);
      const canUseServerConfig = state.aiServerConfigured === true;

      if (!hasClientConfig && !canUseServerConfig) {
        finalReview = {
          ...localReview,
          summary: `还没检测到可用的 AI 配置，所以这次先用本地规则点评。你可以部署服务端环境变量，或者手动填写自己的模型配置。\n\n${localReview.summary}`,
          source: "本地规则",
        };
      } else {
        const serviceReady = state.aiProxyReady === true ? true : await checkAiService(false);
        if (!serviceReady) {
          finalReview = {
            ...localReview,
            summary: `没有检测到本地 AI 代理，所以这次先用本地规则点评。你可以先运行 \`node server.js\`。\n\n${localReview.summary}`,
            source: "本地规则",
          };
        } else {
          const aiReviewRaw = await requestAiReview(company, question, answer, localReview);
          const aiReview = normalizeAiReview(aiReviewRaw, localReview);
          finalReview =
            aiSettings.mode === "hybrid" ? combineReviews(localReview, aiReview) : aiReview;
        }
      }
    }
  } catch (error) {
    finalReview = {
      ...localReview,
      summary: `真实 AI 点评暂时失败，这次先回退到本地规则点评。错误信息：${error.message}\n\n${localReview.summary}`,
      source: "本地规则",
    };
  } finally {
    els.analyzeButton.disabled = false;
    els.analyzeButton.textContent = "智能点评";
  }

  progress[company.id].reviewCounts[question.question] =
    (progress[company.id].reviewCounts[question.question] || 0) + 1;
  progress[company.id].scores[question.question] = finalReview;
  saveProgress();
  renderReview(finalReview);
  renderCompanyMeta(company);
  renderProgress(company);
  renderBatchList();
  renderCompanyGrid();
}

function switchQuestion(delta) {
  const company = getCompanyById(state.selectedCompanyId);
  if (!company) return;
  saveCurrentAnswer();
  state.questionIndex =
    (state.questionIndex + delta + company.questions.length) % company.questions.length;
  progress[company.id].lastQuestion = state.questionIndex;
  saveProgress();
  renderQuestion(company);
  renderProgress(company);
}

function initVoiceInput() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    els.voiceStatus.textContent = "当前浏览器不支持语音输入，建议用 Chrome。";
    document.getElementById("start-voice").disabled = true;
    return;
  }

  const recognition = new Recognition();
  recognition.lang = "zh-CN";
  recognition.interimResults = true;
  recognition.continuous = true;

  let finalTranscript = "";
  let seedText = "";

  recognition.onstart = () => {
    seedText = els.answerInput.value.trim();
    finalTranscript = "";
    els.voiceStatus.textContent = "正在听你说话...";
    document.getElementById("start-voice").disabled = true;
    document.getElementById("stop-voice").disabled = false;
  };

  recognition.onresult = (event) => {
    let interimTranscript = "";

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript;
      if (event.results[index].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    const pieces = [seedText, finalTranscript, interimTranscript].filter(Boolean);
    els.answerInput.value = pieces.join(seedText ? "\n" : "");
  };

  recognition.onerror = () => {
    els.voiceStatus.textContent = "语音输入失败，可以切回手动输入。";
    document.getElementById("start-voice").disabled = false;
    document.getElementById("stop-voice").disabled = true;
  };

  recognition.onend = () => {
    els.voiceStatus.textContent = "语音已结束，可以继续修改答案。";
    document.getElementById("start-voice").disabled = false;
    document.getElementById("stop-voice").disabled = true;
    saveCurrentAnswer();
  };

  state.recognition = {
    recognition,
  };
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const selector = event.target.closest("[data-company-select]");
    if (selector) {
      renderCompany(selector.dataset.companySelect);
    }
  });

  document.getElementById("random-company").addEventListener("click", () => {
    const index = Math.floor(Math.random() * companies.length);
    renderCompany(companies[index].id);
  });

  document.getElementById("back-to-dashboard").addEventListener("click", () => {
    saveCurrentAnswer();
    showDashboard();
  });

  document.getElementById("flip-card").addEventListener("click", () => {
    state.flipped = !state.flipped;
    els.flashcard.classList.toggle("is-flipped", state.flipped);
  });

  els.flashcard.addEventListener("click", () => {
    state.flipped = !state.flipped;
    els.flashcard.classList.toggle("is-flipped", state.flipped);
  });

  document.getElementById("prev-card").addEventListener("click", () => switchQuestion(-1));
  document.getElementById("next-card").addEventListener("click", () => switchQuestion(1));

  document.getElementById("clear-answer").addEventListener("click", () => {
    els.answerInput.value = "";
    clearCurrentReviewCache();
    saveCurrentAnswer();
    resetReview();
  });

  els.analyzeButton.addEventListener("click", analyzeCurrentAnswer);

  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!window.confirm("要清空所有作答记录和点评结果吗？")) return;
    localStorage.removeItem(storageKey);
    Object.keys(progress).forEach((key) => delete progress[key]);
    resetReview();
    renderBatchList();
    renderCompanyGrid();
    if (state.selectedCompanyId) renderCompany(state.selectedCompanyId);
  });

  els.answerInput.addEventListener("input", () => {
    clearCurrentReviewCache();
    saveCurrentAnswer();
    resetReview();
  });

  document.getElementById("start-voice").addEventListener("click", () => {
    if (!state.recognition) return;
    state.recognition.recognition.start();
  });

  document.getElementById("stop-voice").addEventListener("click", () => {
    if (!state.recognition) return;
    state.recognition.recognition.stop();
  });

  els.saveAiSettings.addEventListener("click", saveAiSettingsFromForm);
  els.checkAiService.addEventListener("click", () => {
    Object.assign(aiSettings, collectAiSettingsFromForm());
    saveAiSettings();
    checkAiService(true);
  });
}

function init() {
  renderResumeLegend();
  renderBatchList();
  renderCompanyGrid();
  hydrateAiSettingsForm();
  bindEvents();
  initVoiceInput();
  els.heroResume.textContent = "V3 试水 / V1 主攻 / V2 冲刺";

  if (aiSettings.mode === "local") {
    renderAiStatus("当前设置为只用本地规则点评。你也可以切到混合模式，让线上或本地服务接入真实 AI。");
  } else {
    renderAiStatus("默认已开启 AI 混合点评。页面会优先检测当前站点是否已经配置了服务端 AI。");
  }

  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Ignore service worker registration failures and keep the app usable.
    });
  }

  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    checkAiService(false).then((ready) => {
      if (!ready) {
        renderAiStatus("当前页面可在线访问，但还没检测到 AI 服务。你可以先正常刷题，之后再接 AI 点评。");
        return;
      }

      if (state.aiServerConfigured) {
        renderAiStatus("已检测到服务端 AI 配置。现在你在手机上也可以直接使用真实 AI 点评，不需要再手动填 API Key。");
      }
    });
  }
}

init();
