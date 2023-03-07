class LocalDocList extends React.Component {
    constructor(props){
        super(props);
        this.state = {list: []};
        this.fetch_local_list();
    }

    fetch_local_list(){
        let url = 'https://api.github.com/repos/yunfeiluo/yunfeiluo.github.io/git/trees/master';
        
        let fetch_list = [];
        // fetch 1st level
        fetch(url)
        .then(res => res.json())
        .then((out) => {
            let arr = out["tree"];
            for (var i = 0; i < arr.length; i++){
                if (arr[i]["path"] == "articles") {
                    url = arr[i]["url"];

                    // fetch 2nd level
                    fetch(url)
                    .then(res => res.json())
                    .then((out) => {
                        let arr = out["tree"];
                        for (var i = 0; i < arr.length; i++){
                            if (arr[i]["path"] == local_list_name) {
                                url = arr[i]["url"];
                                
                                // fetch 3rd level
                                fetch(url)
                                .then(res => res.json())
                                .then((out) => {
                                    let arr = out["tree"];
                                    for (var i = 0; i < arr.length; i++){
                                        fetch_list.push(arr[i]["path"]);
                                    }
                                    this.setState({list: fetch_list});
                                }).catch(err => console.error(err));

                                break;
                            }
                        }
                    }).catch(err => console.error(err));
                    break;
                }
            }
        }).catch(err => console.error(err));
    }

    display_docs(){
        const list = [];
        for (let item of this.state.list) {
            let curr_link = "https://github.com/yunfeiluo/yunfeiluo.github.io/blob/master/update/articles/" + local_list_name + "/" + item;
            list.push(
                <div id = {item} key = {item}>
                    <a href={curr_link} target="_blank">
                        {item}
                    </a>
                    <br/>
                </div>
            );
        }
        return (<div>{list}</div>);
    }

    // rendor funcion
    render () {
        // console.log(this.state.list);
        return this.display_docs();
    }
}
ReactDOM.render(
    <LocalDocList></LocalDocList>,
    document.getElementById("local_list")
);