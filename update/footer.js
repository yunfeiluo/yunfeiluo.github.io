class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    make_footer(){  
        var LastUpdated = document.lastModified;
        return (
    <footer className="footer">
        <div className="container">
            <div className="top">
                <figure>
                    <h4>Contact Info.</h4>
                    <ul>
                        <li><a href = "mailto: yunfeiluo@umass.edu"><i className="fa-solid fa-envelope"></i> yul268@ucsd.edu</a></li>
                        <li><p><i className="fa-solid fa-phone"></i> 413. 404. 2124</p></li>
                        <li><p>.</p></li>
                        <li><p><i className="fa-solid fa-location-dot"></i> San Diego, CA, United States</p></li>
                    </ul>
                </figure>
                <figure>
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="https://twitter.com/yunfei_luo" target="_blank">
                        <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
                        </a></li>
                        <li><a href="https://www.facebook.com/yunfei.luo.77" target="_blank">
                        <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook Badge"/>
                        </a></li>
                        <li><a href="https://www.instagram.com/yun_fei_luo/" target="_blank">
                        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Badge"/>
                        </a></li>
                        <li><a href="https://steamcommunity.com/id/yunfeiluo/" target="_blank">
                        <img src="https://img.shields.io/badge/Steam-000000?style=for-the-badge&logo=steam&logoColor=white" alt="Steam Badge"/>
                        </a></li>
                    </ul>
                </figure>
                <div className="clearfix"></div>
            </div>
        </div>
    
        <div className="container">
            <div className="bottom">
                &copy; 2021 Yunfei Luo. 
                Hosted by GitHub Pages. 
                Last Modified: {LastUpdated}.
            </div>
        </div>
    </footer>
        );
    }

    // rendor funcion
    render () {
        return this.make_footer();
    }
}
ReactDOM.render(
    <Footer></Footer>,
    document.getElementById("footer")
);