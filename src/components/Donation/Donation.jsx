import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItem } from "../../utilitis/localStorage";
import DonateItem from "../Donateitem/DonateItem";

const Donation = () => {
    const [donateItems, setDonateItems] = useState([])
    const [showAll, setShowAll] = useState(false);

    const donates = useLoaderData();
    const maxCard = 4;

    useEffect(() => {
        const getCartIds = getItem();
        if (donates.length > 0) {
            const donateCard = donates.filter((cart) =>
                getCartIds.includes(cart.id)
            );
            setDonateItems(donateCard);
        }
    }, [donates]);
    const handleClickSeeAll = () => {
        setShowAll(true);
    };


    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {showAll
                    ? donateItems.map((donateItem) => (
                        <DonateItem key={donateItem.id} donateItem={donateItem} />
                    ))
                    : donateItems.slice(0, maxCard).map((donateItem) => (
                        <DonateItem key={donateItem.id} donateItem={donateItem} />
                    ))}
            </div>
            <div className="flex justify-center my-5">
                {donateItems.length > maxCard && !showAll && (
                    <button onClick={handleClickSeeAll} className="mt-4 btn btn-primary">
                        See All
                    </button>
                )}
            </div>
        </div>
    );
};

export default Donation;