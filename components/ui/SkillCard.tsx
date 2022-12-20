import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";

import classes from "./SkillCard.module.css";
import DarkmodeContext from "../../store/darkmode-ctx";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
	icon: StaticImageData;
	color: string;
	percent: number;
};

//todo:-----SkillCard component-----://
const SkillCard = (props: Props) => {
	const darkmodeCtx = useContext(DarkmodeContext);

	return (
		<div className={darkmodeCtx?.isDarkmode ? classes.cardDark : classes.cardLight}>
			<div
				className={classes.percent}
				style={
					{
						"--clr": props.color,
						"--num": props.percent,
					} as React.CSSProperties
				}
			>
				<div className={classes.dot}></div>
				<svg>
					<circle cx="70" cy="70" r="70"></circle>
					<circle cx="70" cy="70" r="70"></circle>
				</svg>
				<div className={classes.number}>
					<h1>
						{props.percent}
						<span>%</span>
					</h1>
				</div>
			</div>
			<div className={classes.title}>
				<Image src={props.icon} alt="" height={48} />
				<p>{props.title}</p>
			</div>
		</div>
	);
};

export default SkillCard;
