import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChoseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

const Works = () => {
	const workInfoData = [
		{
			image: PickMeals,
			title: 'Pick Meals',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis laborum magnam ipsa corrupti doloribus natus dolore aut ullam omnis',
		},
		{
			image: ChoseMeals,
			title: 'Choose How Often',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis laborum magnam ipsa corrupti doloribus natus dolore aut ullam omnis',
		},
		{
			image: DeliveryMeals,
			title: 'Fast Deliveries',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officiis laborum magnam ipsa corrupti doloribus natus dolore aut ullam omnis',
		},
	]

	return (
		<div className="work-section-wrapper">
			<div className="work-section-top">
				<p className="primary-subheading">Work</p>
				<h1 className="primary-heading">How it works</h1>
				<p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis deleniti excepturi at!</p>
			</div>
			<div className="work-section-bottom">
				{workInfoData.map((data) => (
					<div className="work-section-info">
						<div className="info-boxes-image-container">
							<img
								src={data.image}
								alt=""
							/>
						</div>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Works
