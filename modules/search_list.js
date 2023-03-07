class DocListSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {retrieved_list: {docs_list: []}};
        this.items = this.state.retrieved_list.docs_list;
        this.search_attempted = 0;
    }
    
    // get json file from backend
    fetch_docs(url, query_term){
        fetch(url.concat(query_term), {
            method: "GET"
        }).then(response => {
            return response.json()
        }).then(data => {
            // Work with JSON data here
            this.setState({retrieved_list: data});
            ReactDOM.render(
                <DocListSearch></DocListSearch>,
                document.getElementById('list')
            );
            // console.log(this.state.retrieved_list);
        }).catch(err => {
            console.log('err');
        });
    }

    handle_search(){
        this.search_attempted += 1;
        let query_term = document.getElementById("search_text").value;
        let url = "https://7dh9o5ezi8.execute-api.us-east-2.amazonaws.com/default/query_time?query=";
        // let url = "http://127.0.0.1:5000/";

        // send request to backend, get json file back
        this.fetch_docs(url, query_term);
    }
    
    // load the list
    generate_list(){
        this.items = this.state.retrieved_list.docs_list;

        // push to the list tag
        const list = [];

        // search bar
        list.push(
            <div id="search_bar" key="search_box">
            <form onSubmit={() => this.handle_search()} target="curr_iframe">
                <div>
                <input id="search_text" type="text" placeholder="search over blogs and project reports"/>      
                <input id="search_button" type="button" value="Search" onClick={() => this.handle_search()}/>
                </div>
            </form>
            <iframe id="curr" name="curr_iframe" style={{display: "none"}}></iframe>
            </div>
        );
        if (this.search_attempted > 0){
            let num_docs = 0;
            if (this.items != null){
                num_docs = this.items.length
            }
            list.push(
                <div id="result_bar" key="result_info">
                    <p>Search Results: About {num_docs} results (attempted: {this.search_attempted})</p>
                </div>
            );
        }

        // document list
        if (this.items != null){
            for (let item of this.items) {
                let curr_link = "";
                let display_name = "";
                if (item.slice(0, 13) != "[publication]"){
                    curr_link = "https://github.com/yunfeiluo/yunfeiluo.github.io/blob/master/articles/" + item;
                    display_name = item.split('/').pop().split('.')[0];
                }
                else{
                    display_name = item.split('.')[0];
                    curr_link = online_list[display_name];
                    display_name = display_name.slice(13)
                }
                list.push(
                    <div id = {item} key = {item}>
                        <a href={curr_link} target="_blank">
                            {display_name}
                        </a>
                        <br/>
                    </div>
                );
            }
        }
        return (<div>{list}</div>);
    }
    
    // rendor funcion
    render () {
        return this.generate_list();
    }
}

// Apply
ReactDOM.render(
    <DocListSearch></DocListSearch>,
    document.getElementById('list')
);