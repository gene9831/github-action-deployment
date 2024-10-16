import { useQuery } from '@tanstack/react-query'
import { actions } from '../apis/actions'
import { ColumnBranch } from './ColumnBranch'
import { ColumnMessage } from './ColumnMessage'
import { ColumnTime } from './ColumnTime'
import { ColumnOptions } from './ColumnOptions'

export function Table() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['runs'],
    queryFn: actions.runs,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h2 className="text-xl">All workflows</h2>
      <div className="mt-4">
        <div className="flex rounded-t-md border-[1px] border-gray-300 bg-gray-100 p-4 text-sm font-semibold">
          <div className="flex-1 text-neutral-800">
            {data.data.total_count} workflow runs
          </div>
        </div>
        <div className="rounded-b-md border-x-[1px] border-b-[1px] border-x-gray-300 border-b-gray-300">
          {data.data.workflow_runs.map((item) => (
            <div
              className="flex border-b-[1px] border-b-gray-300 p-4 last:border-b-0"
              key={item.id}
            >
              <ColumnMessage className="w-6/12" item={item}></ColumnMessage>
              <ColumnBranch className="w-3/12" item={item}></ColumnBranch>
              <ColumnTime className="w-2/12" item={item}></ColumnTime>
              <ColumnOptions className="w-1/12" item={item}></ColumnOptions>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
