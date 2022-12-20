import Head from "next/head";

import DarkmodeCtxProvider from "../store/DarkmodeCtxProvider";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";

export default function PageHome() {
	return (
		<DarkmodeCtxProvider>
			<Head>
				<title>FAM Portfolios</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Home />
				<About />
				<Skills />
				<Portfolio />
				<Contact />
			</Layout>
		</DarkmodeCtxProvider>
	);
}
