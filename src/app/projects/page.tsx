import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"
import Link from "next/link"
import { GitPullRequest } from "lucide-react"

const projects = [
  {
    title: "revue",
    description:
      "AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat with cli",
    role: "creator and maintainer",
    period: "apr 2026 - may 2026",
    achievements: [
      "built and shipped a fully functional GitHub App from scratch",
      "automated end-to-end PR review pipeline with inline comment posting",
      "merged open source contributions to Nao Labs and OpenClaw",
    ],
    technologies: ["typescript", "next.js", "github", "prisma", "claude api"],
    href: "https://github.com/shashank-poola/pullrabbit",
  },
  {
    title: "datamind",
    description:
      "Enterprise RAG pipeline with hybrid retrieval, semantic reranking, and sub-200ms query response.",
    role: "creator",
    period: "apr 2026",
    achievements: [
      "built hybrid BM25 + vector retrieval pipeline from scratch",
      "integrated semantic reranking to improve answer relevance",
      "achieved sub-200ms query response under concurrent load",
    ],
    technologies: ["typescript", "fastapi", "qdrant", "cohere", "redis"],
    href: "https://github.com/shashank-poola/enterprises-data-RAG",
  },
  {
    title: "rivet",
    description:
      "Visual workflow automation builder with a node-based canvas for composing multi-step AI and API pipelines.",
    role: "creator",
    period: "oct 2025 - nov 2025",
    achievements: [
      "built drag-and-drop node canvas for composing workflows visually",
      "supported multi-step AI and API pipeline execution",
      "designed extensible node system for custom integrations",
    ],
    technologies: ["typescript", "react", "next.js", "langchain"],
    href: "https://github.com/shashank-poola/rivet",
  },
  {
    title: "tradex",
    description:
      "Real-time crypto trading platform with leveraged trades, slippage control, and live PnL tracking.",
    role: "creator",
    period: "aug 2025 - sep 2025",
    achievements: [
      "built real-time order execution with sub-100ms latency",
      "implemented leveraged trading with slippage control",
      "processed 5k+ events per second via Redis Streams",
    ],
    technologies: ["typescript", "redis", "postgresql", "websockets"],
    href: "https://tradex.foo",
  },
  {
    title: "agentos",
    description:
      "Multi-agent AI platform for orchestrating LLM workflows with tool calling, RAG pipelines, and real-time agent execution.",
    role: "creator",
    period: "feb 2026",
    achievements: [
      "orchestrated multi-agent workflows using LangGraph",
      "integrated RAG pipelines with Qdrant for long-term agent memory",
      "built tool-calling layer supporting custom agent integrations",
    ],
    technologies: ["typescript", "langgraph", "qdrant", "next.js"],
    href: "https://tryagentos.vercel.app",
  },
]

const openSource = [
  {
    repo: "openclaw",
    prs: [
      {
        title: "fix(cli): auto-reconnect logs --follow on transient gateway disconnect",
        href: "https://github.com/openclaw/openclaw/pull/75059",
      },
    ],
  },
  {
    repo: "nao-labs",
    prs: [
      {
        title: "fix(sync): strip .git/ from cloned repos to fix gitlink bug",
        href: "https://github.com/getnao/nao/pull/720",
      },
      {
        title: "fix: format large numbers with K/M/B suffix in KPI cards and tooltips",
        href: "https://github.com/getnao/nao/pull/766",
      },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-6 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-white">
          <span className="text-accent accent-glow mr-2">*</span>
          Open Source
        </h2>

        <div className="space-y-6">
          {openSource.map((entry) => (
            <div key={entry.repo}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-semibold">{entry.repo}</span>
                <span className="text-xs text-gray-600">{entry.prs.length} PR</span>
              </div>
              <div className="space-y-1.5 ml-1">
                {entry.prs.map((pr) => (
                  <Link
                    key={pr.title}
                    href={pr.href}
                    target="_blank"
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-accent transition-colors group"
                  >
                    <GitPullRequest className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-600 group-hover:text-accent transition-colors" />
                    <span>{pr.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.shashank.ink/og/home?title=projects",
      },
    ],
  },
}
