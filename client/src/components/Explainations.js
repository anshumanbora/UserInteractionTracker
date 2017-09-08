import React,{Component} from 'react';

class Explainations extends Component{

    render() {


        return (
        <div>
            <div className="metrics-header text-center">Metrics Tracked</div>
            <div className="row ">
                <div className="col-xs-2 "></div>
                <div className="col-xs-8 center-block" align="center">
                    <div className="card  paddingtop">
                        <div className="card-block">
                            <h4 className="card-title"><strong>Clicks on links</strong></h4>

                            <p className="card-text">Clicking is an interaction which gives us a direct
                                measure of what the user is interested in. By clicking on a link, the user
                                expresses his active interest in the content associated with the link.

                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-2"></div>
            </div>


            <div className="row ">
                <div className="col-xs-2 "></div>
                <div className="col-xs-8 center-block" align="center">
                    <div className="card ">
                        <div className="card-block">
                            <h4 className="card-title"><strong>Marking favorite questions</strong></h4>

                            <p className="card-text">By telling us which are their favorite question,
                                users can give a direct gauge of their preferences. Based on their favorite
                                questions a lot of information about their personality could be unearthed.

                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-2"></div>
            </div>


            <div className="row ">
                <div className="col-xs-2 "></div>
                <div className="col-xs-8 center-block" align="center">
                    <div className="card  ">
                        <div className="card-block">
                            <h4 className="card-title"><strong>Scrolling</strong></h4>

                            <p className="card-text">This tool records the percentage of the page the users scrolled
                                till they were satisfied with the answers. This gives us a fair estimate of how much
                                effort it took to find a satisfactory answer.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-2"></div>
            </div>


            <div className="row ">
                <div className="col-xs-2 "></div>
                <div className="col-xs-8 center-block" align="center">
                    <div className="card  ">
                        <div className="card-block">
                            <h4 className="card-title"><strong>Searching Questions</strong></h4>

                            <p className="card-text">'Stack Overflow' is a Q/A forum, so it makes absolute sense to
                                record the questions which users searched for. Analyzing the questions searched by
                                the user should be the base on which the user model be structured.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-2"></div>
            </div>


            <div className="row ">
                <div className="col-xs-2 "></div>
                <div className="col-xs-8 center-block" align="center">
                    <div className="card  ">
                        <div className="card-block">
                            <h4 className="card-title"><strong>Copying Text</strong></h4>

                            <p className="card-text">By analyzing how frequently users copy a section
                                of the answers provided a lot could be inferred. It might straight up
                                be plagiarism or maybe the user wants to be sure the provided answer
                                works correctly, as functional links related to the answers posted are
                                pretty rare. Irrespective of the true motive, this is an interesting feature
                                which needs to be analyzed.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-xs-2"></div>
            </div>



        </div>


    )
        ;

    }

}


export default Explainations;
