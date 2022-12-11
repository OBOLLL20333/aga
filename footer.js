import React from "react";

function FooterCopy() {
	return (
		<div className="footer__copy copy">
			<p className="copy__text">
				© 1712-2022 ПАО «Императорский Тульский оружейный завод»
			</p>
		</div>
	)
}

function FooterTel() {
	return (
		<li className="menu-contacts__item contacts-item">
			<a className="contacts-item__link link" href="tel:+74872321499">
				+7 (4872) 32-14-99
			</a>
		</li>
	)
}

function FooterMail() {
	return (
		<li className="menu-contacts__item contacts-item">
			<a
				className="contacts-item__link link"
				href="mailto:mail@tulatoz.ru"
			>
				mail@tulatoz.ru
			</a>
		</li>
	)
}

function FooterAdress() {
	return (
		<li className="menu-contacts__item contacts-item">
			<p className="contacts-item__text link">
				300002, г. Тула, ул. Советская, 1 А
			</p>
		</li>
	)
}
function FooterContactMenu() {
	return (
		<ul className="contacts__menu menu-contacts">
			<FooterTel />
			<FooterMail />
			<FooterAdress />
		</ul>
	)
}

function FooterContacts() {
	return (
		<div className="content__contacts contacts">
			<h3 className="contacts__title">Контакты</h3>
			<FooterContactMenu />
		</div>
	)
}

function FooterIndex(props) {
	return (
		<li className="menu-content__item content-item">
			<a className="content-item__link link" onClick={props.onClick}>
				Главная
			</a>
		</li>
	);
}
function FooterGallery(props) {
	return (
		<li className="menu-content__item content-item">
			<a className="content-item__link link" onClick={props.onClick}>
				Галерея
			</a>
		</li>
	);
}
function FooterContact(props) {
	return (
		<li className="menu-content__item content-item">
			<a className="content-item__link link" onClick={props.onClick}>
				Контакты
			</a>
		</li>
	);
}

export { FooterContacts }
export { FooterCopy }
export { FooterIndex }
export { FooterGallery }
export { FooterContact }