import Image, { StaticImageData } from "next/image";
import React from "react";

import classes from "./OtherCard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
	icon: StaticImageData;
};

//todo:-----OtherCard component-----://
const OtherCard = (props: Props) => {
	return (
		<div className={classes.container}>
			<Image src={props.icon} alt="" height={24} />
			<p>{props.title}</p>
		</div>
	);
};

export default OtherCard;
