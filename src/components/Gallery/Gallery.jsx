import { useEffect } from "react";
import { useState } from "react";


const Gallery = () => {
	const [image,setImage]=useState([]);
	useEffect(()=>{
		fetch('/data.json') // fetching data from json
		.then((response) => response.json())
		.then((data) => {
		setImage(data.images);
		})

	},[setImage])
	console.log(image)
	return (
		<div className="bg-white w-11/12 mx-auto  rounded-md h-auto mt-14">
			<hr />
			<div className="bg-red w-11/12 mx-auto pt-5 " id="gallery">
			{image.map((img,index)=>
			<div key={img.id} className={`item-no-${index+1}`} id="single-image">
				<img  src={img.src}/>
			</div>
			)}
			</div>

		</div>
	);
}

export default Gallery;
