import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
    return (
        <section className="why-choose-section py-5" id="why-choose">
            <div className="container text-center">
                <h2 className="section-title mb-4">Why Choose Pateluxe?</h2>
                <p className="section-subtitle mb-5">
                    Take a look at our beautiful collection and see for yourself why Pateluxe is the best
                    place for gemstone lovers who value style and authenticity!
                </p>

                <div className="row g-4 justify-content-center">
                    {/* Card 1 */}
                    <div className="col-md-4 col-sm-6">
                        <div className="choose-card shadow-sm p-4 rounded-4 h-100">
                            <div className="icon-wrapper mb-3">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <h5 className="card-title">Solid Trust</h5>
                            <p className="card-text">
                                Every gemstone is certified and comes from a good source, so you know you're
                                getting something truly unique.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 col-sm-6">
                        <div className="choose-card shadow-sm p-4 rounded-4 h-100">
                            <div className="icon-wrapper mb-3">
                                <i className="bi bi-gem"></i>
                            </div>
                            <h5 className="card-title">Expert Craft & Modern Style</h5>
                            <p className="card-text">
                                We combine decades of experience with modern styles to deliver pieces that appeal
                                to today's smart shoppers.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 col-sm-6">
                        <div className="choose-card shadow-sm p-4 rounded-4 h-100">
                            <div className="icon-wrapper mb-3">
                                <i className="bi bi-stars"></i>
                            </div>
                            <h5 className="card-title">Reimagined Luxury</h5>
                            <p className="card-text">
                                Our elegant designs capture timeless beauty and are perfect for any occasion,
                                whether it's a big event or just a little bit of elegance every day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
