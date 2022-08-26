import './Product.scss'
import banner from '../assets/alex-unsplash.jpg'
import { TbTruckReturn } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import ProductRows from '../components/homepage/ProductRows';

const Product = () => {
	let deliveryIconStyles = { fontSize: "2.5rem" };
	let socialIconsStyles = { fontSize: "1.5rem" };
	return (
		<div className="bg py-4">
			<div className='container product'>
				<div className="top-div">
					<div className="card product-img">
						<div className="card-body">
							<div className="img-col text-center">
								<img src={banner} alt="" className='img-fluid rounded' />

								<div className="share mt-5">
									<p>Share this product</p>
									<div className='mb-3'>
										<FaFacebookF style={socialIconsStyles} /> &nbsp;
										<TiSocialInstagram style={socialIconsStyles} />
									</div>
								</div>
							</div>

							<div className="product-title ms-4">
								<p className="fs-4 fw-bold">
									Netlix and chill with free subscriptions for all members
								</p>

								<p className="small brand">Brand: Netflix</p>

								<p className="ratings">@@@@@</p>

								<p className="fw-bold fs-5">Ksh 10, 000</p>

								<p className="small">+ shipping from KSH 92 to CBD</p>

								<div className="add-to-cart-btn">
									<button className="btn w-100 text-light">ADD TO CART</button>
								</div>

								<div className="promotions mt-4">
									<p className="fw-bold">PROMOTIONS</p>
									<span>Free delivery in Nairobi and Mombasa for orders above 999</span>
									<br />
									<span>Easy and safer payments via M-Pesa</span>
								</div>
							</div>
						</div>
					</div>

					<div className="delivery-location">
						<div className="card">
							<div className="card-body">
								<div className="col location">
									<p className="fw-bold">DELIVERY & RETURNS</p>
									<p className="fw-bold">Choose your location</p>

									<div className="choices">
										<select class="city form-select">
											<option value="Nairobi" selected>Nairobi</option>
											<option value="Mombasa">Mombasa</option>
											<option value="Kisumu">Kisumu</option>
											<option value="Nakuru">Nakuru</option>
										</select>

										<select class="town form-select mt-2">
											<option value="CDB" selected>CBD-UON/Globe/Koja</option>
											<option value="Embakasi">Embakasi</option>
											<option value="Garden Estate">Garden Estate</option>
											<option value="Gigiri">Gigiri</option>
										</select>
									</div>

									<div className="more-info">
										<div className="d-flex door-delivery">
											<TbTruckReturn style={deliveryIconStyles} />

											<div className="text ms-2">
												<span className="small fw-bold">
													Door Delivery
												</span>
												<p className="small">
													Delivery Ksh 208 <br />
													Delivery by 31st August when you order within the next 1hr <br />
												</p>
											</div>
										</div>
										<div className="d-flex door-delivery">
											<TbTruckReturn style={deliveryIconStyles} />

											<div className="text ms-2">
												<span className="small fw-bold">
													Pickup Station
												</span>
												<p className="small">
													Delivery Ksh 92 <br />
													Pickup by 31st August when you order within the next 1hr <br />
												</p>
											</div>
										</div>
										<div className="d-flex door-delivery">
											<TbTruckReturn style={deliveryIconStyles} />

											<div className="text ms-2">
												<span className="small fw-bold">
													Return Policy
												</span>
												<p className="small">
													Easy Return, Quick Refund
												</p>
											</div>
										</div>
										<div className="d-flex door-delivery">
											<TbTruckReturn style={deliveryIconStyles} />

											<div className="text ms-2">
												<span className="small fw-bold">
													Warranty
												</span>
												<p className="small">
													2 Years
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card seller-info mt-4">
							<div className="card-body">
								<p className="fw-bold">SELLER INFORMATION</p>

								<p className="seller">Vision</p>

								<p className="fw-bold perfomance">Seller Perfomance</p>
								<span>Order fulfillment rate: Good</span> <br />
								<span>Quality score: Good</span> <br />
								<span>Customer rating: Good</span>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<div className="product-specification">
						<div className="info">
							<div className="card">
								<div className="card-body">
									<p className="fs-4 fw-bold">Product details</p>

									<article>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur facilis at commodi vero veniam quas magni. Optio, omnis eaque sit ipsum atque ab nostrum consequatur, quia iure maiores quidem amet quam ea rem expedita corrupti temporibus. Sequi incidunt saepe necessitatibus voluptas asperiores ratione, quis eos similique quibusdam quod nihil.
									</article>
								</div>
							</div>

							<div className="card mt-4">
								<div className="card-body">
									<p className="fs-4 fw-bold">Specifications</p>

									<article>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non nemo, dignissimos sequi molestias totam esse obcaecati, harum maxime doloribus odit est necessitatibus? Neque quod consequuntur, facilis possimus sapiente corporis dignissimos repudiandae magni illo ut officia quibusdam quam dolorum excepturi pariatur totam? Ad ex quam ab aliquam rerum possimus sit voluptatibus earum, neque expedita exercitationem blanditiis nisi eos aut perspiciatis fuga atque optio labore, consequuntur assumenda odio. Pariatur at, illo inventore tempora possimus corrupti, in dolore dolorum aliquid repellat quia!
									</article>
								</div>
							</div>
						</div>

						<div className="small-details-card">
							<div className="card">
								<div className="card-body">
									<span>Product details</span> <br />
									<span>Specifications</span> <br />
									<span>Customer Feedback</span>
								</div>
							</div>

							<div className="card mt-4">
								<div className="card-body">
									<img src={banner} alt="" className='img-fluid rounded' />
									<p className="fw-bold mt-2">Netlix shows max</p>
									<p className="fw-bold">KSH 10, 000</p>

									<div className="add-to-cart-btn">
										<button className="btn w-100 text-light">ADD TO CART</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<ProductRows categoryName="More items from the seller" />
				</div>
			</div>
		</div>
	)
}

export default Product