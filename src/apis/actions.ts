import { Octokit } from '@octokit/core'

const OWNER = 'gene9831'
const REPO = 'my-react-admin'

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
})

export const actions = {
  runs: () => {
    return octokit.request('GET /repos/{owner}/{repo}/actions/runs', {
      owner: OWNER,
      repo: REPO,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
  },
  run: (run_id: number) => {
    return octokit.request('GET /repos/{owner}/{repo}/actions/runs/{run_id}', {
      owner: OWNER,
      repo: REPO,
      run_id: run_id,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
  },
  run_artifacts: (run_id: number) => {
    return octokit.request(
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
      {
        owner: OWNER,
        repo: REPO,
        run_id: run_id,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )
  },
}

export type ActionRuns = Awaited<ReturnType<typeof actions.runs>>['data']
export type WorkflowRun = ActionRuns['workflow_runs'][number]

export type ActionRun = Awaited<ReturnType<typeof actions.run>>['data']

export type ActionArtifacts = Awaited<
  ReturnType<typeof actions.run_artifacts>
>['data']
