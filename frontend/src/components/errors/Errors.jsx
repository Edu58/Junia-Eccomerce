import Alert from 'react-bootstrap/Alert';

const Errors = ({ type, message }) => {
    return (
        <Alert variant={type} key={type} className="text-center">
            {message}
        </Alert>
    )
}

export default Errors