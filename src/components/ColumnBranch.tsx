import clsx from 'clsx'
import type { WorkflowRun } from '../apis/actions'

export interface ColumnBranchProps {
  className?: string
  item: WorkflowRun
}

export function ColumnBranch({ className = '', item }: ColumnBranchProps) {
  return (
    <div className={clsx('flex items-center', className)}>
      <a
        className="rounded-md bg-blue-100 px-[6px] py-[2px] text-xs text-blue-500 hover:underline"
        href={`https://github.com/gene9831/my-react-admin/tree/refs/heads/${item.head_branch}`}
      >
        {item.head_branch}
      </a>
    </div>
  )
}
