import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { workItems } from "@/lib/work-items"
import { OpenSourceSection } from "@/components/open-source-section"

const featuredWorkItems: Item[] = workItems.slice(0, 3)

const projectItems = [
  {
    title: "revue",
    role: "creator",
    description:
      "AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat with cli",
    href: "https://github.com/shashank-poola/pullrabbit",
  },
  {
    title: "datamind",
    role: "creator",
    description: "Enterprise RAG pipeline with hybrid retrieval, semantic reranking, and sub-200ms query response.",
    href: "https://github.com/shashank-poola/enterprises-data-RAG",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <BlogSection />
      <SectionList
        title="work"
        items={featuredWorkItems}
        viewAllHref="/work"
        viewAllText="all work"
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <OpenSourceSection />
      <LinksSection />
    </>
  )
}
