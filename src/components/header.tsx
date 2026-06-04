import { ScrambleText } from "@/components/scramble-text"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-5xl font-semibold tracking-tight text-white text-balance mb-4 animate-fade-in">
        <span className="inline-block">
          <ScrambleText text="Shashank Poola" />
        </span>
      </h1>
      <p className="text-gray-500 animate-fade-in">
        Full Stack AI Developer · Hyderabad, india
      </p>
      <p className="animate-fade-in-up">
        engineer, polymath, shipping from 0→1,<br />
        going deep in AI agents, RAG pipelines & autonomous systems<br />
        full-stack in Next.js, Node.js, TypeScript<br />
        I love watching movies or obsessing reading papers.
      </p>
    </header>
  )
}
