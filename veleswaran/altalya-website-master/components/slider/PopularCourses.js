import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from './../../util/courseData';

SwiperCore.use([Autoplay, Navigation]);
const PopularCourses = () => {

    

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".owl-prev-course-1",
                    nextEl: ".owl-next-course-1",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        // spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        // spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        // spaceBetween: 30,
                    },
                }}
                className=""
            >
                {data && data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href={`/page-courses/${item.name}`}>
                                            <img src={`/images/resource/${item.img}`} title="Altalya" />
                                        </Link>
                                    </figure>
                                    <span className="price">₹{item.price}</span>
                                    <div className="value">{item.complexity}</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book" /> {item.language}</li>
                                    </ul>
                                    <h5 className="title"><Link href={`/page-courses/${item.name}`}>{item.title}</Link></h5>
                                    <div className="other-info">
                                        <div className="duration"><i className="fa fa-clock" />{item.weeks}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="owl-nav">
                <div className="owl-prev owl-prev-course-1">
                    <span className="fa fa-long-arrow-alt-left"></span>
                </div>
                <div className="owl-next owl-next-course-1">
                    <span className="fa fa-long-arrow-alt-right"></span>
                </div>
            </div>

        </>
    );
};

export default PopularCourses;

