import { useContext, useState } from "react";
import { motion } from "framer-motion";
import DarkmodeContext from "../../store/darkmode-ctx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import classes from "./Navbar.module.css";

type Props = {
	// props....
};

//todo:-----Navbar component-----://
const Navbar = (props: Props) => {
	const darkmodeCtx = useContext(DarkmodeContext);
	const [isNavActive, setIsNavActive] = useState(false);

	const navHandler = () => {
		setIsNavActive((prevState) => !prevState);
	};

	return (
		<motion.nav
			className={classes.navbar}
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", bounce: 0.5, duration: 1 }}
		>
			<ul className={classes.firstUL}>
				<li
					className={!darkmodeCtx?.isDarkmode ? classes.active : ""}
					onClick={() => {
						darkmodeCtx?.setLightmode();
					}}
				>
					Light
				</li>
				<button className={classes.menu} onClick={navHandler}>
					{isNavActive ? <AiOutlineClose /> : <AiOutlineMenu />}
				</button>
				<li
					className={darkmodeCtx?.isDarkmode ? classes.active : ""}
					onClick={() => {
						darkmodeCtx?.setDarkmode();
					}}
				>
					Dark
				</li>
			</ul>
			<ul className={isNavActive ? classes.secondULAct : classes.secondUL}>
				<li>
					<a
						onClick={() => {
							setIsNavActive(false);
						}}
						href="#home"
					>
						Home.
					</a>
				</li>
				<li>
					<a
						onClick={() => {
							setIsNavActive(false);
						}}
						href="#about"
					>
						About.
					</a>
				</li>
				<li>
					<a
						onClick={() => {
							setIsNavActive(false);
						}}
						href="#skills"
					>
						Skills.
					</a>
				</li>
				<li>
					<a
						onClick={() => {
							setIsNavActive(false);
						}}
						href="#portfolio"
					>
						Portfolio.
					</a>
				</li>
				<li>
					<a
						onClick={() => {
							setIsNavActive(false);
						}}
						href="#contact"
					>
						Contact.
					</a>
				</li>
			</ul>
		</motion.nav>
	);
};

export default Navbar;
