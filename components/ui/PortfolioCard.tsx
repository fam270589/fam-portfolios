import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";

import DarkmodeContext from "../../store/darkmode-ctx";
import classes from "./PortfolioCard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
	image: StaticImageData;
};

//todo:-----PortfolioCard component-----://
const PortfolioCard = (props: Props) => {
	const darkmodeCtx = useContext(DarkmodeContext);

	return (
		<div
			className={
				darkmodeCtx?.isDarkmode ? classes.darkContainer : classes.lightContainer
			}
		>
			<p className={classes.title}>{props.title}</p>
			<div className={classes.content}>
				<Image
					src={props.image}
					alt=""
					width={300}
					height={180}
					className={classes.image}
				/>
				<div className={classes.buttons}>
					<button className={classes.button}>Demo</button>
					<button className={classes.button}>Git Repo</button>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
