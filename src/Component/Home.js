import React from 'react'
import '../Css/Home.css';


function Home() {
    return (
        <div className='home'>
            <div className="home_container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img id="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCnf._CB578346476_.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img id="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Sports/September/GFD/Hero/under-4999-hero-Sep-GFD_3000x1200-UN-REC._CB578761047_.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img id="home_image"  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img id="home_image"  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img id="home_image"  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Sept/Onecard/Jewellery/Jewl_3000._CB595761836_.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img id="home_image"  src=" https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/September/Unrec/Helmet_PC_3000-1200._CB578643475_.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div> 
            </div>
        </div>
    )
}

export default Home;
{/* <div className="home__row">
                    <Product
                        id={1}
                        title={"Boat Headphones"}
                        price={1200}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg"}
                        rating={3}
                    />
                    <Product
                        id={2}
                        title={"Bluetooth Calling Smartwatch starts at ₹1,199"}
                        price={16000}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={3}
                        title={"TV"}
                        price={1234}
                        image={" https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_TV_1X._SY116_CB578640810_.jpg"}
                        rating={4}
                   />
                    <Product 
                        id={4}
                        title={"Affortable Tshirts"}
                        price={599}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"}
                        rating={5}
                    />
                    <Product 
                        id={5}
                        title={"Bedsheets, curtains & more"}
                        price={875}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                         id={5}
                         title={"Stands, Cables & more"}
                         price={999}
                         image={"https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/Sep/03_SET1_pc_186x116._SY116_CB577849250_.jpg"}
                         rating={4}
                    />
                </div> */}