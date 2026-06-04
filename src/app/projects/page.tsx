import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

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
