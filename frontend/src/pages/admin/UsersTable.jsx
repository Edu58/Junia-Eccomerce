import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"

const UsersTable = () => {
    const [data, setData] = useState([])

    const axiosPrivate = useAxiosPrivate()

    const getUsers = async () => {
        const { data } = await axiosPrivate.get('/admin/users')
        setData(data.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, i) => {
                            return (
                                <tr key={i + 1}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{Object.keys(user.roles).join(', ')}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable