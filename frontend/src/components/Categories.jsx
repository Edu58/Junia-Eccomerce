import './Categories.scss'
import Card from './Card'
import { FiSmartphone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from '../context/products';

const Categories = ({ categories }) => {

    const { filterByCategory } = useContext(ProductsContext)

    return (
        <Card>
            <ul className='categories list-group'>
                {
                    categories
                        ?
                        categories.map((category, i) => {
                            return (
                                <li key={i}>
                                    <Link to={`/${category}`} onClick={() => filterByCategory(category)} className='text-decoration-none text-dark'>
                                        <FiSmartphone className='me-2' />{category}
                                    </Link>
                                </li>
                            )
                        })
                        :
                        '0 Categories Found'
                }
            </ul>
        </Card>
    )
}

export default Categories