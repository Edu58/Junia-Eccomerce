const Card = ({ contents }) => {
    return (
        <div className="card">
            <div className="card-body">
                {contents}
            </div>
        </div>
    )
}

export default Card