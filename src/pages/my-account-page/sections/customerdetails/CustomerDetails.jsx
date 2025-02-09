import './CustomerDetails.css';

import {EnvelopeSimple, Phone} from "@phosphor-icons/react";
import {formatAddressToString} from "@/utils/Formatter.js";


function CustomerDetails({ customer }) {
    if (!customer || !customer.address) {
        return <p>Loading...</p>;
    }

    return (
        <section className="customer-details">
            <h2 className="customer-details__title">Personal Details</h2>
            <div className="customer-details__address">
                <p>Name: {`${customer.firstName} ${customer.lastName}`}</p>
                <p>Address: {formatAddressToString(customer.address)}</p>
            </div>
            <div className="customer-details__contact">
                <h3 className="customer-details__contact-title">Contact</h3>
                <div className="customer-details__contact-info">
                    <EnvelopeSimple size={24} weight="light"/>
                    <p>{customer.email}</p>
                </div>
                <div className="customer-details__contact-info">
                    <Phone size={24} weight="light"/>
                    <p>{customer.phone}</p>
                </div>
            </div>
        </section>
    );
}

export default CustomerDetails;