import {useEffect, useState} from "react";


function ImageList() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/images")
            .then((res) => res.json())
            .then((data) => setImages(data.images))
            .catch((err) => console.error(err));
    }, [])

    return (
        <>
            <h1 className={`text-2xl italic mb-4`}>List Uploaded Image</h1>
            <div className={`grid grid-cols-4 gap-4`}>
                {images.map((image, i) => (
                    <div key={i} className={``}>
                        <img src={image.url} alt="img" className={`w-fit h-64 p-2`}/>
                        <p>{image.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ImageList