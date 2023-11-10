import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Donet = ({ donet }) => {
    const { title, img, category, card_bg, category_bg, text_color, id } = donet;

    return (
        <Link to={`/details/${id}`} className = 'cursor-pointer' >
            <div className={`max-w-sm ${card_bg} rounded`}>
                <img className="rounded-t-lg w-full" src={img} alt="" />
                <div className="p-5">
                    <p className={`py-1 lg:px-3 md:px-3 px-2 ${category_bg} ${text_color} inline rounded`}>{category}</p>
                    <h5 className={`mb-2 lg:text-2xl md:text-2xl text-base font-bold tracking-tight mt-3 ${text_color}`}>{title}</h5>
                </div>
            </div>
        </Link >
    );
};

Donet.propTypes = {
    donet: PropTypes.object.isRequired
}

export default Donet
