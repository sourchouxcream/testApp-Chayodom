import React from 'react'
import Footer from './footer'

export default function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container mt-3"></div>
                <h1>Praise be Eingsomnia</h1>
            </div>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

                <div className="mt-3">
                    <div className="col-sm-4"></div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div>
                        <div className="row">
                            <div class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-item active">
                                    <img src="./images/r1.jpg" alt="1" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/r2.jpg" alt="2" class="d-block w-100" />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/r3.jpg" alt="3" class="d-block w-100" />
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                        <div className="row">
                            <h3>You're my treasure :) </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}