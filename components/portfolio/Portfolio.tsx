import React from "react";

import { SlideObj } from "../../models/Types";
import classes from "./Portfolio.module.css";
import image from "../../public/static/Pantone.jpg";
import Page from "../../components/layout/Page";
import AnimationPage from "../../components/layout/AnimationPage";
import PortfolioSlider from "./PortfolioSlider";
import PortfolioCard from "../../components/ui/PortfolioCard";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Portfolio component-----://
const Portfolio = (props: Props) => {
	const slides: SlideObj[] = [
		{ title: "fam-kanban", image: image },
		{ title: "fam-tictactoe", image: image },
		{ title: "fam-color", image: image },
		{ title: "fam-hangman", image: image },
		{ title: "fam-store", image: image },
	];

	return (
		<Page id="portfolio">
			<AnimationPage title="My Portfolio.">
				<div className={classes.container}>
					<div className={classes.mobile}>
						<PortfolioSlider slides={slides} />
					</div>
					<div className={classes.desktop}>
						{slides.map((portfolio, index) => (
							<PortfolioCard
								key={index}
								title={portfolio.title}
								image={portfolio.image}
							/>
						))}
					</div>
				</div>
			</AnimationPage>
		</Page>
	);
};

export default Portfolio;
