import React from 'react';

const FunFactOne = () => {
    const data = [
        {
            title: "STUDENT ENROLLED",
            count:45
        },
        {
            title: "CLASSES COMPLETED",
            count:32
        },
        {
            title: "TOP INSTRUCTORS",
            count:354
        },
        {
            title: "SATISFACTION RATE",
            count:99
        },
    ];
    return (
        <>
            <section className="fun-fact-section pt-0">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            {data && data.map((item, i) => (
                                <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" key={i}>
                                    <div className="inner">                                        
                                        <h6 className="counter-title">{item.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FunFactOne;