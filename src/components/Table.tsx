import type { Runs } from '../types'

export interface TableProps {
  name?: string
  runs: Runs
}

export function Table(props: TableProps) {
  const { name, runs } = props

  return (
    <div className="px-6 py-4">
      <div className="m-auto max-w-[1616px]">
        <div className="mr-[336px]">
          <h2 className="text-xl">{name || 'All workflows'}</h2>
          <div className="mt-4">
            <div className="flex rounded-t-md border-[1px] border-[#d1d9e0] bg-[#f6f8fa] p-4 text-sm font-semibold">
              <div className="flex-1">4 workflow run results</div>
            </div>
            <div className="rounded-b-md border-x-[1px] border-b-[1px] border-x-[#d1d9e0] border-b-[#d1d9e0]">
              {runs.workflow_runs.map((item) => (
                <div key={item.id}></div>
              ))}
              <div className="flex p-4">
                <div className="w-6/12">123</div>
                <div className="w-4/12">123</div>
                <div className="w-2/12">123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
