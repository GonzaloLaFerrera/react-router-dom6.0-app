import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1 className="fw-normal">404 Not Found</h1>
            <Link className="btn btn-dark" to='/'>Volver al Inicio</Link>
        </div>
    );
};

export default NotFound;