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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mt-28">
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