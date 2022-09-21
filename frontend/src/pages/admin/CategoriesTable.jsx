import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"

const CategoriesTable = () => {
    const [data, setData] = useState([])

    const axiosPrivate = useAxiosPrivate()

    const getCategories = async () => {
        const { data } = await axiosPrivate.get('/admin/categories')
        setData(data.data)
    }

    useEffect(() => {
        getCategories()
    }, [])
  return (
      <div>
          <table className="table mt-4">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Category Name</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      data.map((category, i) => {
                          return (
                              <tr key={i + 1}>
                                  <th scope="row">{i + 1}</th>
                                  <td>{category.name}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>
      </div>
  )
}

export default CategoriesTable