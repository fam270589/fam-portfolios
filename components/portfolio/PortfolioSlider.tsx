import React, { useState } from "react";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";

import PortfolioCard from "../../components/ui/PortfolioCard";
import { SlideObj } from "../../models/Types";
import classes from "./PortfolioSlider.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	slides: SlideObj[];
};

//todo:-----PortfolioSlider component-----://
const PortfolioSlider = (props: Props) => {
	const [currIndex, setCurrIndex] = useState(0);

	const goToPrevious = () => {
		if (currIndex !== 0) {
			setCurrIndex((prevState) => prevState - 1);
		}
	};

	const goToNext = () => {
		if (currIndex !== props.slides.length - 1) {
			setCurrIndex((prevState) => prevState + 1);
		}
	};

	return (
		<>
			<PortfolioCard
				title={props.slides[currIndex].title}
				image={props.slides[currIndex].image}
				description={props.slides[currIndex].description}
				demoLink={props.slides[currIndex].demoLink}
				gitRepo={props.slides[currIndex].gitRepo}
			/>
			<div className={classes.buttons}>
				<button className={classes.button} onClick={goToPrevious}>
					<AiFillFastBackward />
				</button>
				<div className={classes.dots}>
					<button
						className={currIndex === 0 ? classes.dotActive : classes.dot}
						onClick={() => setCurrIndex(0)}
					></button>
					<button
						className={currIndex === 1 ? classes.dotActive : classes.dot}
						onClick={() => setCurrIndex(1)}
					></button>
					<button
						className={currIndex === 2 ? classes.dotActive : classes.dot}
						onClick={() => setCurrIndex(2)}
					></button>
					<button
						className={currIndex === 3 ? classes.dotActive : classes.dot}
						onClick={() => setCurrIndex(3)}
					></button>
					<button
						className={currIndex === 4 ? classes.dotActive : classes.dot}
						onClick={() => setCurrIndex(4)}
					></button>
				</div>
				<button className={classes.button} onClick={goToNext}>
					<AiFillFastForward />
				</button>
			</div>
		</>
	);
};

export default PortfolioSlider;
