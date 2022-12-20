import React from "react";
import { motion } from "framer-motion";
import { titleAnimate, contentAnimate } from "../../animation/animation";

import classes from "./Animation.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
};

//todo:-----AnimationPage component-----://
const AnimationPage = (props: Props) => {
	return (
		<motion.div
			className={classes.container}
			initial={"offscreen"}
			whileInView={"onscreen"}
			viewport={{ amount: 0.5 }}
			transition={{ duration: 0.5, staggerChildren: 0.5 }}
		>
			<motion.h1 className={classes.title} variants={titleAnimate}>
				{props.title}
			</motion.h1>
			<motion.div variants={contentAnimate} className={classes.contents}>
				{props.children}
			</motion.div>
		</motion.div>
	);
};

export default AnimationPage;
