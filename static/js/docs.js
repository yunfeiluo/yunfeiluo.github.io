function fetch_projects(){
    fetch('https://api.github.com/repos/yunfeiluo/yunfeiluo.github.io/git/trees/master')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
    }).catch(err => console.error(err));
    alert("complete");  
}