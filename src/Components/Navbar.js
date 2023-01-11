import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import List from '@mui/material/List'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShopingCartIcon from '@mui/icons-material/ShoppingCartRounded'

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const menuOption = [
		{
			text: 'Home',
			icon: <HomeIcon />,
		},
		{
			text: 'About',
			icon: <InfoIcon />,
		},
		{
			text: 'Testimonial',
			icon: <CommentRoundedIcon />,
		},
		{
			text: 'Contact',
			icon: <PhoneRoundedIcon />,
		},
		{
			text: 'Shop',
			icon: <ShopingCartIcon />,
		},
	]

	return (
		<nav>
			<div className="nav-logo-container">
				<img
					src={Logo}
					alt=""
				/>
			</div>
			<div className="navbar-links-container">
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Testimonials</a>
				<a href="/">Contact</a>
				<a href="/">
					<BsCart2 className="navbar-cart-icon" />
				</a>
				<button className="primary-button">Booking Now</button>
			</div>
			<div className="navbar-menu-container">
				<AiOutlineMenu onClick={() => setOpenMenu(true)} />
			</div>
			<Drawer
				open={openMenu}
				onClose={() => setOpenMenu(false)}
				anchor="right">
				<Box
					sx={{ width: 50 }}
					role="presentation"
					onClick={() => setOpenMenu(false)}
					onKeyDown={() => setOpenMenu(false)}>
					<List>
						{menuOption.map((item) => (
							<ListItem
								key={item.text}
								disablePadding>
								<ListItemButton>
									<ListItemIcon>{item.icon} </ListItemIcon>
									<ListItemText primary={item.text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</nav>
	)
}

export default Navbar
