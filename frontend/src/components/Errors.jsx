import Alert from 'react-bootstrap/Alert';

const Errors = ({ type, message }) => {
    return (
        <Alert variant={type} key={type}>
            {message}
        </Alert>
    )
}

export default Errors