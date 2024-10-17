import { useQuery } from '@tanstack/react-query'
import { actions } from '../apis/actions'
import { IconBox } from '@tabler/icons-react'

export interface ArtifactsProps {
  id: number
}

export function Artifacts({ id }: ArtifactsProps) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['runs', id],
    queryFn: () => actions.run_artifacts(id),
  })

  const handleDwonload = async (artifact_id: number) => {
    const resp = await actions.artifact(artifact_id)
    console.log(resp)
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {data.data.artifacts.map((item) => (
        <div key={item.id} className="flex items-center gap-1">
          <span className="text-gray-500">
            <IconBox size={18} />
          </span>
          <a
            className="cursor-pointer text-sm font-semibold text-blue-500 hover:underline"
            onClick={() => handleDwonload(item.id)}
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  )
}
