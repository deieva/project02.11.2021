import '../Assets/Css/Contacts.css';

function Contacts() {

    return (
        <div>
            <div className="contact">
                <div className="content-box">
                    <div className="left"></div>
                    <div className="right">
                        <h1 className="contact-me align-center"><strong>Contact Me</strong></h1>
                        <input type="text" className="inBar" placeholder="Your Name" />
                        <input type="text" className="inBar" placeholder="E-mail" />
                        <input type="tel" className="inBar" placeholder="Phone Number" />
                        <textarea type="text" className="inBar" placeholder="Enter Text"></textarea>
                        <button className="btn-contact">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;