import './Categories.scss'
import { BsBagCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from '../../context/products';

const Categories = ({ categories }) => {

    const { filterByCategory } = useContext(ProductsContext)

    return (
        <div className="card categories-card">
            <div className="card-body">
                <ul className='categories list-group'>
                    {
                        categories
                            ?
                            categories.map((category) => {
                                return (
                                    <li key={category._id}>
                                        <Link to={`/${category.name}`} onClick={() => filterByCategory(category.name)} className='small text-decoration-none text-dark'>
                                            <BsBagCheck className='me-2' />{category.name}
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