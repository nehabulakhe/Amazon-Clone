import React from 'react'
import '../Css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/vendorcentral/supporthub/trainingCourses/learningPaths/5300-Kitchen---Water-bottles--Lunch-box--hero-v2-3000-x-1200-_Under_1._CB601243436_.jpg" alt="banner" />
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home;
