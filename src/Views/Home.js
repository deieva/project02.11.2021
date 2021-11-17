import '../Assets/Css/Home.css';
import pic1 from '../Assets/Images/pic1.jpg';
import pic2 from '../Assets/Images/pic2.jpg';
import pic3 from '../Assets/Images/pic3.jpg';

function Home() {

    return (

        <div>
            {/* <!-- Carousel --> */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} alt="Los Angeles" className="d-block" style={{width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} alt="Chicago" className="d-block" style={{width:'100%'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} alt="New York" className="d-block" style={{width:'100%'}}/>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>


        </div>
    )
}

export default Home;