import React from "react";

import { SlideObj } from "../../models/Types";
import classes from "./Portfolio.module.css";
import image from "../../public/static/Pantone.jpg";
import coffees from "../../public/static/coffees.webp";
import games from "../../public/static/games.webp";
import movies from "../../public/static/movies.webp";
import pokemon from "../../public/static/pokemon.webp";
import portfolio from "../../public/static/portfolio.webp";
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
		{
			title: "fam-movies",
			image: movies,
			description: "Complete movie information database",
			demoLink: "https://fam-movies.vercel.app/",
			gitRepo: "https://github.com/fam270589/fam-movies",
		},
		{
			title: "fam-games",
			image: games,
			description: "Play Memory game, Wordle, and Sudoku",
			demoLink: "https://fam-games.vercel.app/",
			gitRepo: "https://github.com/fam270589/fam-games",
		},
		{
			title: "local-coffees",
			image: coffees,
			description: "Search local coffee shops near you",
			demoLink: "https://local-coffees.vercel.app/",
			gitRepo: "https://github.com/fam270589/local-coffees-js",
		},
		{
			title: "pokemon-list",
			image: pokemon,
			description: "Browse your favourite Pokemon",
			demoLink: "https://pokemon-list-beta.vercel.app/",
			gitRepo: "https://github.com/fam270589/pokemon-list",
		},
		{
			title: "fam-portfolios",
			image: portfolio,
			description: "This portfolio website",
			demoLink: "https://fam-portfolios.vercel.app/",
			gitRepo: "https://github.com/fam270589/fam-portfolios",
		},
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
								description={portfolio.description}
								demoLink={portfolio.demoLink}
								gitRepo={portfolio.gitRepo}
							/>
						))}
					</div>
				</div>
			</AnimationPage>
		</Page>
	);
};

export default Portfolio;
