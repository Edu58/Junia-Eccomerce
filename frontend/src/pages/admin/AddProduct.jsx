import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useState, useContext } from 'react'
import ProductsContext from '../../context/products'
import { BiPlusCircle } from 'react-icons/bi'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const AddProduct = () => {
    const { cartDispatch } = useContext(ProductsContext)
    const [productImage, setProductImage] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [instock, setInStock] = useState(0)

    const axiosPrivate = useAxiosPrivate()


    const handleLogout = () => {
        cartDispatch({
            type: "USER_LOGOUT"
        })
    }

    const handleAddProduct = async (e) => {
        e.preventDefault()

        const form_data = new FormData()
        form_data.append('image', productImage)
        form_data.append('title', title)
        form_data.append('category', category)
        form_data.append('description', description)
        form_data.append('price', price)
        form_data.append('inStock', instock)

        try {
            await axiosPrivate.post('/products', form_data)
            setProductImage('')
            setTitle('')
            setCategory('')
            setDescription('')
            setPrice(0)
            setInStock(0)
            toast.success('Product added to stock')
        } catch (error) {
            toast.error(error?.response?.data?.error)
            console.log(error.response.data)
        }
    }

    return (
        <div className='container-fluid p-0'>
            <Toaster />
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div>
                            <Link to='/admin' className='text-decoration-none'>
                                <span className='fw-bold fs-4 text-light'>Admin</span>
                            </Link>
                        </div>
                    </div>

                    <div className="nav-links d-flex align-items-center">
                        <ul className="d-flex align-items-center">
                            <Link to="/add-product" className='text-decoration-none'>
                                <li className=' btn btn-sm btn-success d-flex align-items-center'>
                                    <BiPlusCircle size={18} />
                                    Product
                                </li>
                            </Link>
                        </ul>

                        <ul className="d-flex">
                            <li className=' btn btn-sm btn-outline-danger' onClick={handleLogout}>Log out</li>
                        </ul>

                    </div>
                </div >
            </nav >

            <div className="uploadForm bg-dark py-4 min-vh-100">
                <div className="card mx-auto" style={{ maxWidth: "40rem" }}>
                    <div className="card-header fs-4 text-center text-light" style={{ backgroundColor: "#f09116" }}>
                        Add Product
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleAddProduct} encType='multipart/form-data'>
                            <div className="mb-3">
                                <label htmlFor="product-image" className="form-label">Product Image</label>
                                <input type="file" className="form-control" name='image' id="product-image" required={true} defaultValue={productImage} onChange={(e) => setProductImage(e.target.files[0])} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Product Title</label>
                                <input type="text" className="form-control" id="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} required={true} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Product Category</label>
                                <input type="text" className="form-control" id="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)} required={true} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Product Description</label>
                                <textarea className="form-control" defaultValue={description} onChange={(e) => setDescription(e.target.value)} required={true} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Product Price</label>
                                <input type="number" className="form-control" id="price" defaultValue={price} onChange={(e) => setPrice(e.target.value)} step={.01} min={0} required={true} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instock" className="form-label">In Stock</label>
                                <input type="number" className="form-control" id="instock" defaultValue={instock} onChange={(e) => setInStock(e.target.value)} required={true} />
                            </div>

                            <button type='submit' className="btn btn-success" disabled={!productImage || !title || !category || !description || !price || !instock}>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddProduct