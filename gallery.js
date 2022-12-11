import React from "react";
import Img from "../img/img.jpg";

const Gallery = () => {
	return (
		<main className="main">
			<MainGallery />
		</main>
	);
};

const MainGallery = () => {
	return (
		<section className="gallery">
			<div className="container-fluid">
				<h1 className="title">Галерея</h1>
				<GalleryList />
			</div>
		</section>
	)
}

const GalleryList = () => {
	return (
		<div className="gallery__list">
			{listImage}
		</div>
	)
}

const GalleryImage = () => {
	return (
		<img src={Img} alt="" className="gallery__img" />
	)
}

let arr = [];

for (let i = 1; i <= 9; i++) {
	arr.push(<GalleryImage />);
}

const listImage = arr.map((arr) =>
	<div className="gallery__item">
		{arr}
	</div>
);

export default Gallery;
