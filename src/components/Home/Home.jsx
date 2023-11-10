import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import './Home.css';
import Donet from "../Donet/Donet";

const Home = () => {
    const [donets, setDonets] = useState([]);
    const [displayItem, setDisplayItem] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setDonets(data)
                setDisplayItem(data);
            })

    }, [])
    const handleSearch = e => {
        const inputText = e.target.input.value;
        if (inputText.toLowerCase() === 'education') {
            const educationItem = donets.filter(donat => donat.category === 'Education')
            setDisplayItem(educationItem);
        } else if (inputText.toLowerCase() === 'food') {
            const educationItem = donets.filter(donat => donat.category === 'Food')
            setDisplayItem(educationItem);
        } else if (inputText.toLowerCase() === 'health') {
            const educationItem = donets.filter(donat => donat.category === 'Health')
            setDisplayItem(educationItem);
        } else if (inputText.toLowerCase() === 'clothing') {
            const educationItem = donets.filter(donat => donat.category === 'Clothing')
            setDisplayItem(educationItem);
        } else if (inputText.toLowerCase() === 'all') {
            setDisplayItem(donets);
        }
        e.target.input.value = '';
        e.preventDefault()
    }
    return (
        <div>
            <div className="flex justify-center items-center home">
                <Banner handleSearch={handleSearch}></Banner>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mt-28">
                {
                    displayItem.map(donet => <Donet
                        key={donet.id}
                        donet={donet}
                    ></Donet>)
                }
            </div>
        </div>
    );
};

export default Home;