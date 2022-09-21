import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"

const ProductsTable = () => {
    const [data, setData] = useState([])

    const axiosPrivate = useAxiosPrivate()

    const getProducts = async () => {
        const { data } = await axiosPrivate.get('/admin/products')
        setData(data.data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price(KSH)</th>
                        <th scope="col">In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product, i) => {
                            return (
                                <tr key={i + 1}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{product.title}</td>
                                    <td>{product.category.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.inStock}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable