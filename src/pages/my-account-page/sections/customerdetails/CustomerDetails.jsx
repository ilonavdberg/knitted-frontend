import './CustomerDetails.css';
import {EnvelopeSimple, Phone} from "@phosphor-icons/react";

function CustomerDetails() {
    return (
        <section className="customer-details">
            <h2 className="customer-details__title">Personal Details</h2>
            <div className="customer-details__address">
                <p>Name: firstName lastName</p>
                <p>Address: street houseNumber, zipcode city</p>
            </div>
            <div className="customer-details__contact">
                <h3 className="customer-details__contact-title">Contact</h3>
                <div className="customer-details__contact-info">
                    <EnvelopeSimple size={24} weight="light"/>
                    <p>email address</p>
                </div>
                <div className="customer-details__contact-info">
                    <Phone size={24} weight="light"/>
                    <p>phone number</p>
                </div>
            </div>
        </section>
    );
}

export default CustomerDetails;