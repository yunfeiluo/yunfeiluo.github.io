async function fetch_projects(){
    const result = await octokit.request('GET https://api.github.com/repos/{owner}/{repo}/git/trees/master', {
        owner: 'yunfeiluo',
        repo: 'yunfeiluo.github.io'
      })
    alert(result);
}