class News extends React.Component {
    constructor(props){
        super(props);
    }
// <li>[date] content.</li>
    make_news(){  
        return (
            <ul style="list-style-type:square">
                <li>[March 2023] My first workshop paper "Agent Performing Autonomous Stock Trading under Good and Bad Situations" by me and <a href="https://www.linkedin.com/in/zhangqi-duan-4140311b6/" target="_blank">Zhangqi Duan</a> has been accepted in <a href="https://ai4abm.org/" target="_blank">AI4ABM</a> at <a href="https://iclr.cc/Conferences/2023" target="_blank">ICLR 2023</a>. More details will be updated soon!</li>
                <li>[Feburary 2023] Received Ph.D. offer from <a href="https://datascience.ucsd.edu/" target="_blank">Halıcıoğlu Data Science Institute</a> at <a href="https://ucsd.edu/" target="_blank">University of California San Diego</a>! Advised by <a href="https://www.tauhidurrahman.com/" target="_blank">Prof. Tauhidur Rahman</a>.</li> 
                <li>[June 2022] Joined the summer internship of Data Science for Common Good at <a href="https://ds.cs.umass.edu/" target="_blank">Center for Data Science - UMass Amherst</a>, working with RedCross on the project of satellite imagery based computer vision research project.</li>
                <li>[September 2021] Started my M.S. in Computer Science at UMass Amherst with <a href="https://www.cics.umass.edu/content/bay-state-scholarship-program" target="_blank">Baystate Fellowship</a> (Full Tuition Coverage). </li>
                <li>[May 2021] Declared B.S. in Mathematics as Dual Degree. </li>
                <li>[June 2020] Joined the summer internship at <a href="https://www.umass.edu/ials/" target="_blank">Institute for Applied Life Sciences - UMass Amherst</a>, working with fMRI data. </li>
                <li>[January 2020] Joined <a href="https://groups.cs.umass.edu/infofusion/" target="_blank">InfoFusion Lab</a> led by <a href="https://www.cics.umass.edu/people/fiterau-brostean-ina" target="_blank">Prof. Madalina Fiterau</a>, working on digital healthcare machine learning project.</li>
                <li>[September 2017] Started my B.S. in Computer Science at <a href="https://www.umass.edu/" target="_blank">UMass Amherst</a>.</li>
            </ul>
        );
    }

    // rendor funcion
    render () {
        return this.make_news();
    }
}
ReactDOM.render(
    <News></News>,
    document.getElementById("news")
);