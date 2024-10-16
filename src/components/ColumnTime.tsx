import { IconCalendarClock, IconClock } from '@tabler/icons-react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import type { WorkflowRun } from '../apis/actions'

function formatSeconds(seconds: number) {
  if (seconds < 60) {
    return `${seconds}s`
  }
  const minutes = Math.floor(seconds / 60)
  const res = [`${minutes}m`]
  const leftSeconds = seconds % 60
  if (leftSeconds) {
    res.push(`${leftSeconds}s`)
  }
  return res.join(' ')
}

export interface ColumnTimeProps {
  className?: string
  item: WorkflowRun
}

export function ColumnTime({ className = '', item }: ColumnTimeProps) {
  return (
    <div
      className={clsx('flex flex-col justify-around text-gray-500', className)}
    >
      <div className="flex items-center gap-1">
        <IconCalendarClock size={18} />
        <span className="text-xs">{dayjs(item.created_at).fromNow()}</span>
      </div>
      <div className="flex items-center gap-1">
        <IconClock size={18} />
        <span className="text-xs">
          {formatSeconds(
            dayjs(item.updated_at).diff(dayjs(item.created_at), 's'),
          )}
        </span>
      </div>
    </div>
  )
}
