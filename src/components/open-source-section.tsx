import Link from "next/link"
import { GitPullRequest } from "lucide-react"

const contributions = [
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

export function OpenSourceSection() {
  return (
    <section className="mb-12 animate-fade-in-up pt-10 border-t border-neutral-800">
      <h2 className="text-2xl font-semibold flex items-center text-white mb-6">
        <span className="text-accent accent-glow mr-2">*</span> open source
      </h2>
      <div className="space-y-6">
        {contributions.map((entry) => (
          <div key={entry.repo}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-semibold">{entry.repo}</span>
              <span className="text-xs text-gray-600">{entry.prs.length} PR</span>
            </div>
            <div className="space-y-2 ml-1">
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
    </section>
  )
}
