import React from "react";

import classes from "./Button.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Button component-----://
const Button = (props: Props) => {
	return <div className={classes.container}>{props.children}</div>;
};

export default Button;
