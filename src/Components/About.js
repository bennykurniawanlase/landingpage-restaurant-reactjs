import React from 'react'
import AboutBg from '../Assets/about-background.png'
import AboutBgImg from '../Assets/about-background-image.png'
import { BsFillPlayBtnFill } from 'react-icons/bs'

const About = () => {
	return (
		<div className="about-section-container">
			<div className="about-background-image-container">
				<img
					src={AboutBg}
					alt=""
				/>
			</div>
			<div className="about-section-image-container">
				<img
					src={AboutBgImg}
					alt=""
				/>
			</div>
			<div className="about-section-text-container">
				<p className="primary-subheading">About</p>
				<h1 className="primary-heading">Food Is Important Part Of A Balance Diet</h1>
				<p className="primary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis maxime voluptatpiditate molestias veniam facere minima harum, corporis tempora?</p>
				<p className="primary-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae suscipit laboriosam aut necessitatibus dolores?</p>
				<div className="about-buttons-container">
					<button className="secondary-button">Learn More</button>
					<button className="watch-video-button">
						{' '}
						<BsFillPlayBtnFill /> Watch Video{' '}
					</button>
				</div>
			</div>
		</div>
	)
}

export default About
