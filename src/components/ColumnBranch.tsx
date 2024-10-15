import type { WorkflowRun } from '../types'

export interface ColumnBranchProps {
  item: WorkflowRun
}

export function ColumnBranch({ item }: ColumnBranchProps) {
  return (
    <div className="flex w-4/12 items-center">
      <a
        className="rounded-md bg-[#ddf4ff] px-[6px] py-[2px] text-xs text-[#0969da] hover:underline"
        href={`https://github.com/gene9831/my-react-admin/tree/refs/heads/${item.head_branch}`}
      >
        {item.head_branch}
      </a>
    </div>
  )
}
