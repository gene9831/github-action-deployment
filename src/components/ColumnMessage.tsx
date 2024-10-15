import type { WorkflowRun } from '../types'

export interface ColumnMessageProps {
  item: WorkflowRun
}

export function ColumnMessage({ item }: ColumnMessageProps) {
  return (
    <div className="w-6/12">
      <div className="mb-1">
        <span className="inline-block w-4"></span>
        <a
          className="font-semibold text-[#1f2328] hover:text-[#0969da] hover:underline"
          href={item.html_url}
        >
          {item.display_title}
        </a>
      </div>
      <div className="text-xs text-[#59636e]">
        <span className="inline-block w-4"></span>
        <span className="font-semibold">Build </span>
        <span>#{item.run_number}: </span>
        <span>Commit </span>
        <a
          className="underline"
          href={`${item.head_repository.html_url}/commit/${item.head_commit.id}`}
        >
          {item.head_commit.id.slice(0, 7)}
        </a>
        <span> pushed by </span>
        <a
          className="hover:text-[#0969da]"
          href={`https://github.com/${item.head_commit.committer.name}`}
        >
          {item.head_commit.committer.name}
        </a>
      </div>
    </div>
  )
}
