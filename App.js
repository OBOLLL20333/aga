import React from "react";
import Index from "./body/index.js";
import Contact from "./body/contact.js";
import Gallery from "./body/gallery.js";
import Img from "./img/mini-symbolics.png";
import { FooterContacts } from "./footer/footer";
import { FooterCopy } from "./footer/footer";
import { FooterIndex } from "./footer/footer";
import { FooterGallery } from "./footer/footer";
import { FooterContact } from "./footer/footer";
import { HeaderIndex } from "./header/header";
import { HeaderGallery } from "./header/header";
import { HeaderContact } from "./header/header";

function App() {
	return (
		<Control />
	);
}

class Control extends React.Component {
	constructor(props) {
		super(props);
		this.oneClick = this.oneClick.bind(this);
		this.twoClick = this.twoClick.bind(this);
		this.threeClick = this.threeClick.bind(this);
		this.state = { linkValue: 0 };
	}

	oneClick() {
		this.setState({ linkValue: 0 });
	}

	twoClick() {
		this.setState({ linkValue: 1 });
	}

	threeClick() {
		this.setState({ linkValue: 2 });
	}

	render() {
		const linkValue = this.state.linkValue;

		return (
			<div className="wrapper">
				<header className="header">
					<div className="container">
						<nav className="header__menu menu">
							<Image onClick={this.oneClick} />
							<ul className="menu__list list">
								<HeaderIndex onClick={this.oneClick} />
								<HeaderGallery onClick={this.twoClick} />
								<HeaderContact onClick={this.threeClick} />
							</ul>
						</nav>
					</div>
				</header>
				<Greeting linkValue={linkValue} />
				<footer className="footer">
					<div className="container">
						<div className="footer__content content">
							<nav className="content__navigation">
								<h3 className="content__title">Навигация</h3>
								<ul className="content__menu menu-content">
									<FooterIndex onClick={this.oneClick} />
									<FooterGallery onClick={this.twoClick} />
									<FooterContact onClick={this.threeClick} />
								</ul>
							</nav>
							<FooterContacts />
							<Image onClick={this.oneClick} />
						</div>
						<FooterCopy />
					</div>
				</footer>
			</div>
		)
	}
}

function Greeting(props) {
	const linkValue = props.linkValue;
	switch (linkValue) {
		case 0:
			return <Index />;
			break;
		case 1:
			return <Gallery />;
			break;
		case 2:
			return <Contact />;
			break;
		default:
			return <Index />;
			break;
	}
}

function Image(props) {
	return (
		<a className="menu__logo link" onClick={props.onClick}>
			<img className="menu__logo logo" src={Img} />
		</a>
	);
}

export default App;