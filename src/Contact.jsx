import React from "react";
 import Footer from "./Footer";
const Contact =() => {
    return (
        <>

<div id="contact"  className="contact-area section-padding">
	<div  className="container mt-5 ">										
		<div  className="section-title text-center mt-5 pd-4">
			<h1>Get in Touch</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
		</div>					
		<div  className="row">
			<div  className="col-lg-7">	
				<div  className="contact">
					<form  className="form" name="enq" method="post" action="contact.php" onSubmit="return validation();">
						<div  className="row">
							<div  className="form-group col-md-6">
								<input type="text" name="name"  className="form-control" placeholder="Name" required="required"/>
							</div>
                            <br/>
							<div  className="form-group col-md-6">
								
                                <input type="email" name="email"  className="form-control" placeholder="Email" required="required"/>
                                <br/>
							</div>
                            <br/>
							<div  className="form-group col-md-12">
								<input type="text" name="subject"  className="form-control" placeholder="Subject" required="required"/>
                                <br/>
							</div>
                            <br/>
							<div  className="form-group col-md-12">
								<textarea rows="6" name="message"  className="form-control" placeholder="Your Message" required="required"></textarea>
                                <br/>
							</div>
                            <br/>
							<div  className="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton"  className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div  className="col-lg-5">
				<div  className="single_address">
					<i  className="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Melrose Place, Beverly Hills</p>
				</div>
				<div  className="single_address">
					<i  className="fa fa-envelope"></i>
					<h4>Send your message</h4>
					<p>Info@example.com</p>
				</div>
				<div  className="single_address">
					<i  className="fa fa-phone"></i>
					<h4>Call us on</h4>
					<p>(+1) 517 397 7100</p>
				</div>
				<div  className="single_address">
					<i  className="fa fa-clock-o"></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div>
		</div>
	</div>
</div>
<Footer/>
        </>
    );
};
export default Contact;