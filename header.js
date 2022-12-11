import React from "react";

function HeaderIndex(props) {
	return (
		<li className="list__item item">
			<a className="item__link link" onClick={props.onClick}>
				Главная
			</a>
		</li>
	);
}

function HeaderGallery(props) {
	return (
		<li className="list__item item">
			<a className="item__link link" onClick={props.onClick}>
				Галерея
			</a>
		</li>
	);
}

function HeaderContact(props) {
	return (
		<li className="list__item item">
			<a className="item__link link" onClick={props.onClick}>
				Контакты
			</a>
		</li>
	);
}

export { HeaderIndex };
export { HeaderGallery };
export { HeaderContact };