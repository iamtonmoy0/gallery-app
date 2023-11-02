import { useEffect,useState } from "react";
import {PiImageBold} from 'react-icons/pi'



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
			<div className=" w-11/12 mx-auto pt-5 " id="gallery">
			{image.map((img,index)=>
			<div key={img.id} className={`item-no-${index+1}`} id="single-image">
				<img  src={img.src} className="hover:bg-slate-500 bg-opacity-25"/>
			</div>
			)}
			{/* add image */}
			<div id="gallery-item-12" className="rounded-xl  outline-1 outline-dashed  outline-gray-300 flex flex-col bg-gray-300">
  <label htmlFor="file-input" className="cursor-pointer text-center">
   <PiImageBold className='text-3xl ml-20 mt-20 font-light'/> 
	<p className="font-semibold pt-2">
    Add Images

	</p>
  </label>
  <input type="file" id="file-input" className="hidden" />
</div>
			</div>

		</div>
	);
}

export default Gallery;
