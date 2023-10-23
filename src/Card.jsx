import React from "react";

const Card=()=>{
return(
 <>
<div className="container bootstrap snippets bootdey">
<section id="services" className="current">
    <div className="services-top">
        <div className="container bootstrap snippets bootdey">
            <div className="row text-center">
                <div className="col-sm-12 col-md-12 col-md-12">
                    <h2>What We Offer</h2>
                    <h2 style={{fontsize: "60px" ,lineheight: "60px" ,marginbottom: "20px",fontweight: "900"}}>Our Services</h2>
                    <p>Our <span className="highlight">experienced</span> and <span className="highlight">dedicated</span> staff provide these services with a smile.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                    <div className="services-list">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" style={{visibility: "visible"}}>
                                    <div className="ico fa fa-magic highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Web Design</div>
                                        <div className="info">Beauty and function</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" style={{visibility: "visible"}}>
                                    <div className="ico fa fa-code highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Development/Coding</div>
                                        <div className="info">Quality code that lasts</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" style={{visibility: "visible"}}>
                                    <div className="ico fa fa-pencil highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Copy Writing</div>
                                        <div className="info">Words that tell your story</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" style={{visibility: "visible"}}>
                                    <div className="ico fa fa-bullhorn highlight"></div>
                                    <div className="text-block">
                                        <div className="name">SEO/PPCM</div>
                                        <div className="info">Converting users to customers</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" style={{visibility: "visible"}}>
                                    <div className="ico fa fa-eye highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Branding/Identity</div>
                                        <div className="info">Leave a lasting impression</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-md-4">
                                <div className="service-block" style={{visibility: "visible"}}>
                                    <div className="ico fa fa-umbrella highlight"></div>
                                    <div className="text-block">
                                        <div className="name">Strategy/Planning</div>
                                        <div className="info">Thinking beyond tomorrow</div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>                    
    </>
); 
}
export default Card;