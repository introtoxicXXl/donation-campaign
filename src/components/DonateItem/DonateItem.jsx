import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

DonateItem.propTypes = {
    donateItem: PropTypes.object.isRequired,
};

function DonateItem({ donateItem }) {
    const { id, img, category, title, price, card_bg, category_bg, text_color, text_button_bg } = donateItem;

    return (
        <div className={`flex flex-col lg:items-center border border-gray-200 rounded-lg shadow md:flex-col lg:flex-row ${card_bg}`}>
            <img className="object-cover lg:w-2/4 md:w-full w-full rounded h-full" src={img} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <div>
                    <p className={`inline ${category_bg} ${text_color} px-3 py-1 rounded`}>{category}</p>
                </div>
                <h5 className={`mb-2 text-2xl font-bold tracking-tight ${text_color}`}>{title}</h5>
                <p className={`mb-3 font-semibold  ${text_color}`}>${price}</p>
                <div>
                    <Link to={`/details/${id}`} >
                        <button className={`inline ${text_button_bg} px-4 py-2 rounded cursor-pointer text-white`}>View details</button>
                    </Link>
                </div>
            </div >
        </div>
    );
}

export default DonateItem;