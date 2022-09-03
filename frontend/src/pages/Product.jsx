import './Product.scss'
import banner from '../assets/alex-unsplash.jpg'
import { TbTruckReturn } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { TiSocialInstagram } from "react-icons/ti";
import ProductRows from '../components/homepage/ProductRows';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import ProductsContext from '../context/products';
import axiosClient from '../components/Axios';
import { useState } from 'react';

const Product = () => {
	let { id } = useParams()

	const { allProducts, cartDispatch, cartState } = useContext(ProductsContext)

	const [product, setProduct] = useState({})

	let deliveryIconStyles = { fontSize: "3.5rem" };
	let socialIconsStyles = { fontSize: "1.5rem" };

	useEffect(() => {
		const singleProduct = allProducts.find(x => x.id == id)
		singleProduct ? setProduct(singleProduct) : setProduct({})
	}, [allProducts])

	const addToCartHandler = () => {
		const itemExists = cartState.cart.cartItems.find((x) => x.id === product.id)
		const quantity = itemExists ? itemExists.quantity + 1 : 1
		cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } })
	}

	return (
		<div className="bg py-4">
			<div className='container product'>
				<div className="top-div">
					<div className="card product-img">
						<div className="card-body">
							<div className="img-col text-center">
								<img src={product.image} alt="" className='img-fluid rounded' />

								<div className="share mt-5">
									<p>Share this product</p>
									<div className='mb-3'>
										<FaFacebookF style={socialIconsStyles} /> &nbsp;
										<FaTwitter style={socialIconsStyles} />
									</div>
								</div>
							</div>

							<div className="product-title ms-4">
								<p className="fs-4 fw-bold">
									{product.title}
								</p>

								<p className="small brand">Brand: {product.brand ? product.brand : 'Unknown'}</p>

								<p className="ratings">Rating: {product.rating ? product.rating.rate : 0} of {product.rating ? product.rating.count : 0} votes</p>

								<p className="fw-bold fs-4">Ksh {product.price}</p>

								<p className="small">+ shipping from KSH 92 to CBD</p>

								<div className="add-to-cart-btn">
									<button className="btn w-100 text-light" onClick={addToCartHandler}>ADD TO CART</button>
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
										<select className="city form-select">
											<option value="Nairobi" defaultValue="Nairobi">Nairobi</option>
											<option value="Mombasa">Mombasa</option>
											<option value="Kisumu">Kisumu</option>
											<option value="Nakuru">Nakuru</option>
										</select>

										<select className="town form-select mt-2">
											<option value="CDB" defaultValue="CBD">CBD-UON/Globe/Koja</option>
											<option value="Embakasi">Embakasi</option>
											<option value="Garden Estate">Garden Estate</option>
											<option value="Gigiri">Gigiri</option>
										</select>
									</div>

									<div className="more-info mt-4">
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
									</div>
								</div>
							</div>
						</div>

						<div className="card seller-info mt-4">
							<div className="card-body">
								<p className="fw-bold">SELLER INFORMATION</p>

								<p className="seller">
									{product.brand ? product.brand : 'Unknown'}
								</p>

								<p className="fw-bold perfomance">Seller Perfomance</p>
								<span>Order fulfillment rate: Good</span> <br />
								<span>Quality score: Good</span> <br />
								<span>Customer rating: {product.rating ? product.rating.rate : 0}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<div className="product-specification">
						<div className="info">
							<div className="card">
								<div className="card-body details-card">
									<p className="fs-4 fw-bold">Product details</p>

									<article>
										{product.description}
									</article>
								</div>
							</div>

							{product.specifications
								?
								<div className="card mt-4">
									<div className="card-body">
										<p className="fs-4 fw-bold">Specifications</p>

										<article>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non nemo, dignissimos sequi molestias totam esse obcaecati, harum maxime doloribus odit est necessitatibus? Neque quod consequuntur, facilis possimus sapiente corporis dignissimos repudiandae magni illo ut officia quibusdam quam dolorum excepturi pariatur totam? Ad ex quam ab aliquam rerum possimus sit voluptatibus earum, neque expedita exercitationem blanditiis nisi eos aut perspiciatis fuga atque optio labore, consequuntur assumenda odio. Pariatur at, illo inventore tempora possimus corrupti, in dolore dolorum aliquid repellat quia!
										</article>
									</div>
								</div>
								:
								null
							}
						</div>
					</div>
				</div>

				{/* <div className="row">
					<ProductRows categoryName="More items from this seller" />
				</div> */}
			</div>
		</div>
	)
}

export default Product