import React from "react";

import classes from "./Page.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	id?: string;
};

//todo:-----Page component-----://
const Page = (props: Props) => {
	return (
		<div className={classes.container} id={props.id}>
			{props.children}
		</div>
	);
};

export default Page;
