import './Footer.scss'
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { BsYoutube } from "react-icons/bs";
import { SiVisa, SiMastercard } from "react-icons/si";



const Footer = () => {

	let storeIconsStyles = { fontSize: "2rem" };
	let socialIconsStyles = { fontSize: "1.4rem" };

	return (
		<div className='pt-3 bg-dark text-light pb-5'>
			<div className="container email-div py-3">
				<p className="fs-3 fw-bold">JUMIA</p>

				<div className="subscribe pe-5">
					<small className="fw-bold">NEW TO JUMIA?</small>
					<br />
					<small>Subscribe to our newletter to get updates on our latest offer!</small>
					<div className="input d-flex pt-2">
						<input type="text" name="email" className="form-control" placeholder='Enter email address' />
						<button className="btn btn-outline-light mx-2">Male</button>
						<button className="btn btn-outline-light">Female</button>
					</div>
				</div>

				<div className="download">
					<small className="fw-bold">DOWNLOAD JUMIA FREE APP</small>
					<br />
					<small>Get access to exclusive offers</small>

					<div className="download-links d-flex">
						<div className="app-store d-flex align-items-center border rounded p-1 me-2">
							<AiFillApple style={storeIconsStyles} />
							<div>
								<small>Download the app</small>
								<br />
								<small className="fw-bold">App Store</small>
							</div>
						</div>
						<div className="app-store d-flex align-items-center border rounded p-1">
							<IoLogoGooglePlaystore style={storeIconsStyles} />

							<div>
								<small>GET IT ON</small>
								<br />
								<small className="fw-bold">Google Play</small>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container services mt-5">
				<div className="help">
					<small className="fw-bold">LET US HELP YOU</small>

					<ul>
						<li>Help Center</li>
						<li>Contact Us</li>
						<li>How to shop on Jumia?</li>
						<li>Shipping and delivery</li>
						<li>Return Policy</li>
						<li>Dispute Resolution Policy</li>
						<li>Corporate and Bulk Purchase</li>
						<li>Jumia International Shipping</li>
						<li>Advertise with Jumia</li>
						<li>Jumia Logistics Services</li>
						<li>Report a Product</li>
					</ul>

				</div>
				<div className="about">
					<small className="fw-bold">ABOUT JUMIA</small>

					<ul >
						<li>About us</li>
						<li>Jumia Careers</li>
						<li>Jumia Express</li>
						<li>Terms and Conditions</li>
						<li>Privacy & Cookie Notice</li>
						<li>UPS - Jumia International Shipping</li>
						<li>Flash Sales</li>
					</ul>

				</div>
				<div className="make-money">
					<small className='fw-bold'>MAKE MONEY WITH JUMIA</small>

					<ul>
						<li>Sell on Jumia</li>
						<li>Become a Sales Consultant</li>
						<li>Become a Logistics Service Partner</li>
						<li>Jumia City Partner Program</li>
					</ul>

				</div>
				<div className="jumia">
					<small className="fw-bold">JUMIA INTERNATIONAL</small>

					<ul>
						<li>Algeria</li>
						<li>Ivory Coast</li>
						<li>Egypt</li>
						<li>Ghana</li>
						<li>Morocco</li>
						<li>Nigeria</li>
					</ul>
				</div>
			</div>

			<div className="container joinus mt-4">
				<div className="socials me-5">
					<small className="fw-bold">JOIN US ON</small>

					<div className="d-flex mt-2">
						<FaFacebookF style={socialIconsStyles} className="me-4"/>
						<TiSocialInstagram style={socialIconsStyles} className="me-4"/>
						<BsYoutube style={socialIconsStyles}/>
					</div>

				</div>
				<div className="payments">
					<small className="fw-bold">PAYMENT METHODS</small>
					
					<div className="d-flex mt-2">
						<SiVisa style={socialIconsStyles} className="me-4"/>
						<SiMastercard style={socialIconsStyles}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer