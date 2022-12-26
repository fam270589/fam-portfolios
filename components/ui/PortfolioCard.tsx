import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import DarkmodeContext from "../../store/darkmode-ctx";
import classes from "./PortfolioCard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
	image: StaticImageData;
	description: string;
	demoLink: string;
	gitRepo: string;
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
					priority
					src={props.image}
					alt=""
					width={300}
					height={180}
					className={classes.image}
				/>
				<p className={classes.description}>{props.description}</p>
				<div className={classes.buttons}>
					<Link href={props.demoLink} target={"_blank"}>
						<button className={classes.button}>Demo</button>
					</Link>
					<Link href={props.gitRepo} target={"_blank"}>
						<button className={classes.button}>Git Repo</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
