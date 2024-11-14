import { TiTick } from "react-icons/ti";

function SuccessfulLogout() {
    return (
        <div className="suceesful-logout">
            <div>
                <TiTick />
            </div>
            <div>
                You have successfully logged out           
            </div>
            <div>Thank you</div>
        </div>
    );
}

export default SuccessfulLogout;
