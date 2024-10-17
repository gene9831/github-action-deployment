import { Octokit } from '@octokit/core'

const OWNER = 'gene9831'
const REPO = 'my-react-admin'
const WORKFLOW_ID = '122058366'

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
        request: {
          redirect: 'manual',
        },
      },
    )
  },
  workflow_runs: () => {
    return octokit.request(
      'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
      {
        owner: OWNER,
        repo: REPO,
        workflow_id: WORKFLOW_ID,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )
  },
  artifact: (artifact_id: number) => {
    return octokit.request(
      'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}',
      {
        owner: OWNER,
        repo: REPO,
        artifact_id: artifact_id,
        archive_format: 'zip',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
        request: {
          redirect: 'manual',
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
