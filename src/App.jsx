import { useState, useEffect } from "react";
import oari from "oari";

function App() {
    const fetchImage = async () => {
        const image = await oari();

        setImages(image);
    };

    const [images, setImages] = useState({
        filename: "",
        file: null,
    });

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <div className="App">
            <a href="https://www.npmjs.com/package/oari" target="_blank">
                <h1>npm oari package</h1>
            </a>
            {images.file === null ? (
                <></>
            ) : (
                <>
                    <img
                        key={images.filename}
                        src={URL.createObjectURL(images.file)}
                        alt={images.filename}
                        onClick={fetchImage}
                    />
                    <p>{images.filename}</p>
                </>
            )}
            <p>Click Image</p>
        </div>
    );
}

export default App;
