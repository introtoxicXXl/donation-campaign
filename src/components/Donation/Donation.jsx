import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItem } from "../../utilitis/localStorage";
import DonateItem from "../Donateitem/DonateItem";

const Donation = () => {
    const [donateItems, setDonateItems] = useState([])
    const donates = useLoaderData();
    useEffect(() => {
        const getCartIds = getItem();
        if (donates.length > 0){
            const donateCard = donates.filter(cart=>getCartIds.includes(cart.id))
            setDonateItems(donateCard);
        }
    }, [donates])


    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    donateItems.map(donateItem=> <DonateItem key={donateItem.id} donateItem={donateItem}></DonateItem>)
                }
        </div>
    );
};

export default Donation;