class Bio extends React.Component {
    constructor(props){
        super(props);
    }

    make_bio(){  
        return (
        <p>
            <br/><br/>
            Yunfei Luo is a Ph.D. student in the <a href="https://datascience.ucsd.edu/" target="_blank">Halıcıoğlu Data Science Institute</a> at the <a href="https://ucsd.edu/" target="_blank">University of California San Diego</a>, supervised/advised by <a href="https://www.tauhidurrahman.com/" target="_blank">Prof. Tauhidur Rahman</a>. He is one of the core researchers of the <a href="https://mosaic-laboratory.github.io/" target="_blank">Mobile Sensing and Ubiquitous Computing Laboratory</a>. Yunfei's research focuses on applied machine learning, multimodal learning, and multitask learning, along with applications in digital health and signal processing. 
            <br/><br/>
            Yunfei received his dual B.S. and M.S. in computer science from the <a href="https://www.cics.umass.edu/" target="_blank">Manning College of Information & Computer Science</a> and his B.S. in mathematics from the <a href="https://www.umass.edu/mathematics-statistics/" target="_blank">Department of Mathematics and Statistics</a> at <a href="https://www.umass.edu/" target="_blank">University of Massachusetts Amherst</a>. At UMass Amherst, he was working on digital healthcare machine learning research in <a href="https://groups.cs.umass.edu/infofusion/" target="_blank">InfoFusion Lab</a>, supervised/advised by <a href="https://www.cics.umass.edu/people/fiterau-brostean-ina" target="_blank">Prof. Madalina Fiterau</a>. He was also working on satellite imagery based computer vision research in <a href="https://ds.cs.umass.edu/" target="_blank">Center for Data Science</a>, supervised by <a href="https://people.cs.umass.edu/~smaji/" target="_blank">Prof. Subhransu Maji</a>. 
            <br/><br/>
        </p>
        );
    }

    // rendor funcion
    render () {
        return this.make_bio();
    }
}
ReactDOM.render(
    <Bio></Bio>,
    document.getElementById("bio")
);