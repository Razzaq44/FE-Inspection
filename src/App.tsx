import {useState} from "react";

function App() {
    const [images, setImages] = useState([]);

    const uploadImage = (event) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        const newImages = files.map((file) => ({file,label: ""}))
        setImages((prevImages) => [...prevImages, ...newImages]);
    }

    const removeImage = (index: number) => {
        setImages((prevImage) => prevImage.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className={`w-full h-screen p-16`}>
                <h1 className={`text-3xl font-bold italic text-[#41aab4]`}>Car Inspection</h1>
                <h3>All field must be filled</h3>
                <form action="" method="post" className={`w-full flex flex-col gap-4`}>
                    <div className={`flex flex-col pt-8`}>
                        <label htmlFor={`inspector_name`}>Inspector Name :</label>
                        <input type="text" id="inspector_name" name="inspector_name"
                               className={`border-b border-[#41aab4] mt-2 focus:outline-none text-sm`} required/>
                    </div>
                    <div className={`flex flex-col`}>
                        <label htmlFor={`car_license_plate`}>Car License Plate :</label>
                        <input type="text" id="car_license_plate" name="car_license_plate"
                               className={`border-b border-[#41aab4] mt-2 focus:outline-none text-sm`} required/>
                    </div>
                    <div className={`flex flex-col`}>
                        <label htmlFor={`inspection_notes`}>Inspection Notes :</label>
                        <input type="text" id="inspection_notes" name="inspection_notes"
                               className={`border-b border-[#41aab4] mt-2 focus:outline-none text-sm`} required/>
                    </div>
                    <div className={`flex flex-col`}>
                        <label htmlFor={`date_of_inspection`}>Date Of Inspection :</label>
                        <input type="date" id="date_of_inspection" name="date_of_inspection"
                               className={`border-b border-[#41aab4] mt-2 focus:outline-none text-sm`} required/>
                    </div>
                    <div className={`grid grid-cols-4 gap-4`}>
                        {(images.map((image, index) => (
                            <div key={index} className={`flex flex-col gap-4 justify-center items-center`}>
                                <img src={URL.createObjectURL(image.file)} alt="Preview" className={`w-fit h-64 p-2 rounded`}/>
                                <input type="text" className={`border-b w-full text-sm`} placeholder={`Label Of Image`}/>
                                <button className={`flex justify-center items-center gap-2 text-sm text-red-400`} onClick={() => removeImage(index)}>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg></span>Remove Image
                                </button>
                            </div>
                        )))}
                        <input type="file" accept={`image/*`} multiple onChange={uploadImage}/>
                    </div>
                    <div className={`flex gap-4`}>
                        <button type="submit" className={`mt-8 border rounded-lg px-4 py-1 text-[#41aab4]`}>Submit
                        </button>
                        <button type="reset" className={`mt-8 border rounded-lg px-4 py-1 text-[#41aab4]`}>Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default App
