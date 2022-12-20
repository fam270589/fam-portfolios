import { useContext } from "react";
import { motion } from "framer-motion";
import DarkmodeContext from "../../store/darkmode-ctx";

import classes from "./Home.module.css";

import Page from "../../components/layout/Page";
import Button from "../../components/ui/Button";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Home component-----://
const Home = (props: Props) => {
	const darkmodeCtx = useContext(DarkmodeContext);

	return (
		<Page id="home">
			<motion.div
				className={classes.container}
				initial={"offscreen"}
				whileInView={"onscreen"}
				viewport={{ amount: 0.5 }}
				transition={{ duration: 0.5 }}
			>
				<h1
					className={
						darkmodeCtx?.isDarkmode ? classes.darkTitle : classes.lightTitle
					}
				>
					{`Hi. I'm Fernando.`}
				</h1>
				<h1
					className={`${
						darkmodeCtx?.isDarkmode ? classes.darkTitle : classes.lightTitle
					} ${classes.secondTitle}`}
				>
					Front-end Developer.
				</h1>
				<Button>
					<a href="#portfolio">My Portfolio.</a>
				</Button>
			</motion.div>
		</Page>
	);
};

export default Home;
