import React from 'react'
import Navbar from './Navbar'
import bannerBackground from '../Assets/home-banner-background.png'
import bannerImg from '../Assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
	return (
		<div className="home-container">
			<Navbar />
			<div className="home-banner-container">
				<div className="home-bannerImage-container">
					<img
						src={bannerBackground}
						alt=""
					/>
				</div>
				<div className="home-text-section">
					<h1 className="primary-heading">Your Favorite Food Hot And Fresh</h1>
					<p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius, optio fugit maxime recusandae voluptatum ipsam fugiat laudantium sequi! Alias.</p>
					<button className="secondary-button">
						Order Now <FiArrowRight />
					</button>
				</div>
				<div className="home-image-section">
					<img
						src={bannerImg}
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
