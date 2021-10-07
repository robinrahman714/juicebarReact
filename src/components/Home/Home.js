import React from 'react';
import Header from '../Header/Header';
import "./Home.css";

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers} from '@fortawesome/free-solid-svg-icons';
import FeaturedPRoducts from '../FeaturedPRoducts/FeaturedPRoducts';

const Home = () => {
    const glass = <FontAwesomeIcon icon={faGlassCheers}></FontAwesomeIcon>
    return (
        <div>
            <div className="banner">
                <div className="flex h-screen items-center justify-center">
                    <div className="text-white">
                        <h1 className="text-7xl font-bold heading leading-tight"> Blended With <br /> Love and Care</h1>
                        <p className="text-white-200 text-2xl mt-6 mb-12"> Straight out of nature, enjoy the Nature, Feel fresh within</p>
                        <NavLink className="bg-black px-12 py-4 text-lg rounded-lg font-semibold hover:bg-red-500" to="/drinks">{glass} See More </NavLink>
                    </div>
                </div>
            </div>

            <main>
                <section className="py-16">
                    <FeaturedPRoducts />
                </section>

            </main>
        </div>
    )
}

export default Home
