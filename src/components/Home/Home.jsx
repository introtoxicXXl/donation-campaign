import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import './Home.css';
import Donet from "../Donet/Donet";

const Home = () => {
    const [donets, setDonets] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonets(data))

    }, [])
    return (
        <div>
            <div className="flex justify-center items-center home">
                <Banner></Banner>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {
                    donets.map(donet => <Donet
                        key={donet.id}
                        donet={donet}
                    ></Donet>)
                }
            </div>
        </div>
    );
};

export default Home;