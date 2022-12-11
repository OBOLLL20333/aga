import React from "react";

const Contact = () => {
	return (
		<main className="main" id="3">
			<section className="contact">
				<div className="container-fluid">
					<h1 className="contact__title">Контакты</h1>
					<div className="contact__body">
						<div className="contact__content">
							<ul className="contact__list">
								<li className="contact__item item-contact">
									<div className="item-contact__title">Адрес:</div>
									<p className="item-contact__text">
										300002 , Россия, г. Тула ул. Советская, 1 А
									</p>
								</li>
								<li className="contact__item item-contact">
									<div className="item-contact__title">Телефон справочной:</div>
									<a
										className="item-contact__link link"
										href="tel:+74872321499"
									>
										+7 (4872) 32-14-99
									</a>
								</li>
								<li className="contact__item item-contact">
									<div className="item-contact__title">ФИО:</div>
									<p className="item-contact__text">Иванов Иван Иванович</p>
								</li>
								<li className="contact__item item-contact">
									<div className="item-contact__title">Электронная почта:</div>
									<a
										className="item-contact__link link"
										href="mailto:mail@tulatoz.ru"
									>
										mail@tulatoz.ru
									</a>
								</li>
							</ul>
						</div>
						<div className="contact__map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.8028535880953!2d37.614346177143105!3d54.201274710412974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41344080e14d3aa9%3A0x628e2e05373a9aa0!2z0JjQvNC_0LXRgNCw0YLQvtGA0YHQutC40Lkg0KLRg9C70YzRgdC60LjQuSDQvtGA0YPQttC10LnQvdGL0Lkg0LfQsNCy0L7QtA!5e0!3m2!1sru!2sru!4v1670703573402!5m2!1sru!2sru"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Contact;
