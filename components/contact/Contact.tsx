import React from "react";

import classes from "./Contact.module.css";
import Page from "../../components/layout/Page";
import AnimationPage from "../../components/layout/AnimationPage";
import ContactCard from "../../components/ui/ContactCard";
import { RiWhatsappFill, RiMailFill } from "react-icons/ri";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Contact component-----://
const Contact = (props: Props) => {
	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
	}

	return (
		<Page id="contact">
			<AnimationPage title="Contact Me.">
				<div className={classes.container}>
					<div className={classes.contacts}>
						<ContactCard>
							<RiWhatsappFill className={classes.icon} />
							<p>+6282260993232</p>
						</ContactCard>
						<ContactCard>
							<RiMailFill className={classes.icon} />
							<p>fam270589@gmail.com</p>
						</ContactCard>
					</div>
					<form onSubmit={handleSubmitForm} className={classes.form}>
						<div className={classes.labelInput}>
							<label htmlFor="">Your Name.</label>
							<input type="text" className={classes.input} />
						</div>
						<div className={classes.labelInput}>
							<label htmlFor="">Your Email.</label>
							<input type="text" className={classes.input} />
						</div>
						<div className={classes.labelInput}>
							<label htmlFor="">Your message.</label>
							<textarea rows={7} className={classes.textarea} />
						</div>
						<button className={classes.button}>Send</button>
					</form>
				</div>
			</AnimationPage>
		</Page>
	);
};

export default Contact;
