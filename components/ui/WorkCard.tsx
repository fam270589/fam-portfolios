import {useContext} from "react";

import classes from "./WorkCard.module.css";
import DarkmodeContext from "../../store/darkmode-ctx";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
  place?: string;
	subtitle: string;
};

//todo:-----WorkCard component-----://
const WorkCard = (props: Props) => {
	const darkmodeCtx  = useContext(DarkmodeContext);

	return (
		<div className={darkmodeCtx?.isDarkmode ? classes.containerDark : classes.containerLight}>
			<p className={classes.title}>{props.title}</p>
      <span className={classes.place}>{props.place}</span>
      <p className={classes.subtitle}>{props.subtitle}</p>
      <p>{props.children}</p>
		</div>
	);
};

export default WorkCard;
