import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    const { status, statusText } = error;
    console.log(error);
    return (
        <div>
            <p>Opps Something went wrong 🚀</p>
            <p> {status} : {statusText} </p>
        </div>
    )
}

export default Error; 