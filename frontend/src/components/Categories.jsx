import './Categories.scss'
import Card from './Card'
import { FiSmartphone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from '../context/products';

const Categories = ({ categories }) => {

    const { filterByCategory } = useContext(ProductsContext)

    return (
        <div className="card categories-card">
            <div className="card-body">
                <ul className='categories list-group'>
                    {
                        categories
                            ?
                            categories.map((category, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/${category}`} onClick={() => filterByCategory(category)} className='small text-decoration-none text-dark'>
                                            <FiSmartphone className='me-2' />{category}
                                        </Link>
                                    </li>
                                )
                            })
                            :
                            '0 Categories Found'
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories