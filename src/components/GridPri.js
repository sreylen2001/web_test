import React, {Component} from 'react';
// import { browerHistory } from "react-router";
import hotel1 from "../images/hotel.jpg";
import resort1 from "../images/resort.jpg";
import restaurant1 from "../images/restaurant.jpg";
import "../styles/GridPri.css";
import { Link } from 'react-router-dom'


export default class GridPri extends Component {

    render() {
        return (
            <div>
                <section className="destinations">
                    <div className="grid">
                        <div>
                            <img src={hotel1} alt={"hotel1"}/>
                            <p>
                                You don't have to be rich to travel well.
                            </p>
                            <div className="text-center">
                                <button className="btn btn-dark">
                                    <Link to="/hotel">hotel</Link>
                                </button>
                            </div>
                        </div>

                        <div>
                            <img src={resort1} alt={"resort1"}/>
                            <p>
                                Life is a journey, not a destination.
                            </p>
                            <div className="text-center">
                                <button className="btn btn-dark">
                                    <Link to="/resort">Resort</Link>
                                </button>
                            </div>
                        </div>

                        <div>
                            <img src={restaurant1} alt={"restaurant1"}/>
                            <p>
                                It feels good to be lost in the right direction.
                            </p>
                            <div className="text-center mml-1">
                                <button className="btn btn-dark">
                                    <Link to="/restaurant">Restaurant</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

