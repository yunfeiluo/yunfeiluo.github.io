var online_list = {
    // "name of article": "link to article",
    "Test article. More content will be updated soon!": "error.html"
};

class OnlineDocList extends React.Component {
    constructor(props){
        super(props);
    }
// <li>[date] content.</li>
    make_online_list(){  
        let list = [];

        for (let item in online_list){
            let curr_link = online_list[item];
            let display_name = item;
            list.push(
                <div id = {item} key = {item}>
                    <a href={curr_link} target="_blank">
                        {display_name}
                    </a>
                    <br/>
                </div>
            )
        }
        return (<div>{list}</div>);
    }

    // rendor funcion
    render () {
        return this.make_online_list();
    }
}
ReactDOM.render(
    <OnlineDocList></OnlineDocList>,
    document.getElementById("online_list")
);