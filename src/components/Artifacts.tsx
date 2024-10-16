import { useQuery } from '@tanstack/react-query'
import { actions } from '../apis/actions'

export interface ArtifactsProps {
  id: number
}

export function Artifacts({ id }: ArtifactsProps) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['runs', id],
    queryFn: () => actions.run_artifacts(id),
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {data.data.artifacts.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
