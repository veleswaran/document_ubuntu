import Link from 'next/link';
import React from 'react';

const CourseTwo = () => {
    const data = [
        {
            img: "course-1.jpg",
            title: "Full-stack web development",
            price: 49.00,
            lesson: 8,
            students: 16,
            duration: "20 weeks",
        },
        {
            img: "course-2.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
            duration: "20 weeks",
        },
        {
            img: "course-3.jpg",
            title: "Starting seo as your home based business",
            price: 49.00,
            lesson: 8,
            students: 16,
            duration: "20 weeks",
        }
    ];
    return (
        <>
            <section className="courses-section-two">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-e wow zoomIn" />
                        <span className="icon icon-group-1 bounce-y" />
                        <span className="icon icon-group-2 bounce-y" />
                    </div>
                    <div className="sec-title text-center">
                        <span className="sub-title">popular courses</span>
                        <h2>Pick a course to<br /> get started your study</h2>
                    </div>
                    <div className="row">
                        {/* Course Block Two*/}
                        {data && data.map((item, i) => (
                            <div className="course-block-two col-lg-4 col-md-6 col-sm-12" key={i}>
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href="/page">
                                                <img src={`/images/resource/${item.img}`} title="Altalya" alt="Altalya" />
                                            </Link>
                                        </figure>
                                        <span className="price">${item.price}</span>
                                        <div className="value">Advanced</div>
                                    </div>
                                    <div className="content-box">
                                        <ul className="course-info">
                                            <li><i className="fa fa-book" /> {item.lesson} Lessons</li>
                                            <li><i className="fa fa-users" /> {item.students} Students</li>
                                            <li><i className="fa fa-clock" /></li>
                                        </ul>
                                        <h5 className="title"><Link href="/page">{item.title}</Link></h5>
                                        <div className="other-info">
                                            <div className="rating-box">
                                                <span className="text">(4.9 /8 Rating)</span>
                                                <div className="rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                            </div>
                                            <div className="duration"><i className="fa fa-clock" />{item.duration} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseTwo;