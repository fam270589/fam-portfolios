import React, { useContext } from "react";

import classes from "./ContactCard.module.css";
import DarkmodeContext from "../../store/darkmode-ctx";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----ContactCard component-----://
const ContactCard = (props: Props) => {
	const darkmodeCtx = useContext(DarkmodeContext);

	return (
		<div
			className={
				darkmodeCtx?.isDarkmode ? classes.darkContainer : classes.lightContainer
			}
		>
			{props.children}
		</div>
	);
};

export default ContactCard;
