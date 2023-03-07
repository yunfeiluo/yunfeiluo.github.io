class OnlineDocList extends React.Component {
    constructor(props){
        super(props);
    }
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