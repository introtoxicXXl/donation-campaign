import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";


const Details = () => {
    const id = useParams();
    const [detail, setDetail] = useState([]);
    const { title, img, price, text_button_bg, description } = detail;

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const selectedDetail = data.find(item => item.id === parseInt(id.id));
                setDetail(selectedDetail);
            }
            )
    }, [id])
    const handleDonate = () => {
        swal("Good job!", `$${price} Donate Successfully Complete`, "success", {
            button: 'Ok',
          });
    }
    return (
        <div>
            <div className="w-2/4 mx-auto relative rounded">
                <figure><img className="w-full" src={img} alt="Shoes" /></figure>
                <div className="absolute bottom-0 bg-black bg-opacity-40 w-full px-6 py-4">
                    <button onClick={handleDonate} className={`px-5 py-2 rounded text-white ${text_button_bg}`}>Donate ${price}</button>
                </div>
            </div>
            <div className="w-2/4 mx-auto mt-6">
                <h2 className="text-4xl font-bold text-black">{title}</h2>
                <p className="text-lg text-black text-justify mt-3">{description}</p>
            </div>
        </div>
    );
};

export default Details;