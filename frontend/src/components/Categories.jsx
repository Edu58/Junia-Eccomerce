import './Categories.scss'
import Card from './Card'
import { FiSmartphone } from "react-icons/fi";

const Categories = ({ categories }) => {
    return (
        <Card>
            <ul className='categories list-group'>
                {
                    categories
                        ?
                        categories.map((category, i) => {
                            return (
                                <li key={i}>
                                    <a href="" className='text-decoration-none text-dark'><FiSmartphone className='me-2' />{category}</a>
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