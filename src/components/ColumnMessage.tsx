import { IconCircleCheckFilled } from '@tabler/icons-react'
import type { WorkflowRun } from '../apis/actions'

export interface ColumnMessageProps {
  className?: string
  item: WorkflowRun
}

export function ColumnMessage({ className = '', item }: ColumnMessageProps) {
  return (
    <div className={className}>
      <div className="mb-1 flex items-center">
        <span className="mr-2 inline-block w-5">
          <IconCircleCheckFilled size={18} color="#1a7f37" />
        </span>
        <a
          className="font-semibold text-neutral-800 hover:text-blue-500 hover:underline"
          href={item.html_url}
        >
          {item.display_title}
        </a>
      </div>
      <div className="text-xs text-gray-500">
        <span className="mr-2 inline-block w-5"></span>
        <span className="font-semibold">{item.name} </span>
        <span>#{item.run_number}: </span>
      </div>
    </div>
  )
}
