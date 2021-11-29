import '../Assets/Css/Contacts.css';

function Contacts() {

    return (
        <div>
            <div className="contact">
                <div className="content-box">
                    <h1 className="contact-us"> CONTACT US </h1>
                        <input type="text" className="inBar" placeholder="Your Name" />
                        <input type="text" className="inBar" placeholder="E-mail" />
                        <input type="tel" className="inBar" placeholder="Phone Number" />
                        <textarea type="text" className="inBar" placeholder="Enter Text"></textarea>
                        <button className="btn-contact">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts;