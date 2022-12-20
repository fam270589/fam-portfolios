import { useContext } from "react";
import DarkmodeContext from "../../store/darkmode-ctx";
import BottomSphere from "./BottomSphere";

import classes from "./Layout.module.css";

import Navbar from "./Navbar";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Layout component-----://
const Layout = (props: Props) => {
	const darkmodeCtx = useContext(DarkmodeContext);

	return (
		<div
			className={`${darkmodeCtx?.isDarkmode ? "darkTheme" : "lightTheme"} ${
				classes.topContainer
			}`}
		>
			<Navbar />
			{props.children}
			<BottomSphere />
		</div>
	);
};

export default Layout;
