class OnlineDocList extends React.Component {
    constructor(props){
        super(props);
    }
    make_online_list(){  
        let list = [];

        for (let item in publication_list) {
            list.push(
                <div className="publication-row" id={item} key={item}>
                    {/* Optional image on the left */}
                    {publication_list[item]["image"] && (
                        <div className="publication-image">
                            <img src={publication_list[item]["image"]} alt={publication_list[item]["title"]} />
                        </div>
                    )}
    
                    {/* Structured content on the right */}
                    <div className="publication-content">
                        <p className="publication-title"><b>{publication_list[item]["title"]}</b></p>
                        <p dangerouslySetInnerHTML={{ __html: publication_list[item]["authors"] }}></p>
                        <p className="publication-venue">{publication_list[item]["venue"]}</p>
    
                        <div className="publication-links">
                            {publication_list[item]["paper_pdf"] && (
                                <a href={publication_list[item]["paper_pdf"]} target="_blank">
                                    Paper
                                </a>
                            )}
                            {publication_list[item]["code"] && (
                                <a href={publication_list[item]["code"]} target="_blank">
                                    Code
                                </a>
                            )}
                            {publication_list[item]["poster"] && (
                                <a href={publication_list[item]["poster"]} target="_blank">
                                    Poster
                                </a>
                            )}
                            {publication_list[item]["slide"] && (
                                <a href={publication_list[item]["poster"]} target="_blank">
                                    Poster
                                </a>
                            )}
                            {publication_list[item]["video"] && (
                                <a href={publication_list[item]["poster"]} target="_blank">
                                    Poster
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            );
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