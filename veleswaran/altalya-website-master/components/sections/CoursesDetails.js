import Link from 'next/link';
import React from 'react';

import Accordion from '../elements/Accordion';
import syllabus from '../../util/Intropage';

const Courseone = ({ course }) => {
	return (
		<>

			<section className="course-details">
				<div className="container">
					<div className="row flex-xl-row-reverse">
						<div className="col-xl-8 col-lg-8">
							<div className="courses-details__content">
							{course && course.map((val,i)=><div key={val.id}>
								<img src={`/images/resource/${val.img1}`} alt='course image' />
								<h2 className="mt-4">Course Overview</h2>
								<p>{val.coursedetail.overview} </p>
								</div>)}
								
								<div className="content mt-40">
									<div className="text">
										<h3>What You Will Learn?</h3>
										<p>Explore diverse learning paths with online degree programs offering accredited courses, granting recognized degrees. Non-degree programs provide specialized skill development without formal certification. Off-campus programs cater to flexible learning away from traditional settings, offering various courses tailored to individual schedules and needs</p>
									</div>
									<div className="row mt-30">

										<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
											<div className="inner-box">
												<div className="icon-box">
													<i className="icon flaticon-elearning"></i>
												</div>
												<h4 className="title">Online degree programs</h4>
												<span className="sub-title">26 Courses</span>
											</div>
										</div>

										<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
											<div className="inner-box">
												<div className="icon-box">
													<i className="icon flaticon-study-1"></i>
												</div>
												<h4 className="title">Non-degree programs</h4>
												<span className="sub-title">38 Courses</span>
											</div>
										</div>

										<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
											<div className="inner-box">
												<div className="icon-box">
													<i className="icon flaticon-study"></i>
												</div>
												<h4 className="title">Off campus programs</h4>
												<span className="sub-title">13 Courses</span>
											</div>
										</div>
									</div>
								</div>


								<div className="mt-25">
									<h3>Course syllabus</h3>
									<p >The outlined subjects are pivotal areas that necessitate comprehensive learning and substantial practice to instill a profound sense of proficiency. Mastery in these topics is integral to cultivating a robust skill set essential for backend development, fostering confidence and expertise in handling intricate backend systems and functionalities.</p>

								</div>
								{course ? course.map((val)=><Accordion syllabus={val.coursedetail.syllabus} />):<Accordion syllabus={syllabus}/>
					}


							</div>
						</div>

						<div className="col-xl-4 col-lg-4 mt-md-50">
							<div className="course-sidebar">
								<ul className="course-details-info">
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-clock"></i></span>
										Durations: <span>{course?course.map((val)=>val.durations):"10 hours"}</span>
									</li>
									{/* <li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-folder-open"></i></span>
										Lectures: <span>15</span>
									</li> */}
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-user-circle"></i></span>
										Students: <span>Max 50</span>
									</li>
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-flag"></i></span>
										Skill Level: <span>{course?course.map((val)=>val.skil_level):"Basic"}</span>
									</li>
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-bell"></i></span>
										Language: <span>Tamil</span>
									</li>
								</ul>
{/* 
								<div className="course-details-price">
									<p className="course-details-price-text">Course price</p>
									<p className="course-details-price-amount">₹{course?course.map((val)=>val.price):"49"}</p>
									<a href="#" className="theme-btn btn-style-two course-details-price-btn">Buy This Course</a>
								</div> */}

								<div className="latest-course mb-30">
									<h4 className="latest-course-title mb-30">New Courses</h4>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src="/images/resource/course-1.jpg" alt="course-1" />
										</div>
										<div className="latest-course-content">
											<a className="latest-course-author" href="#">by <span>Advanced</span></a>
											<h5><a href="page-course-details.html">Modern Languages</a></h5>
											<div className="latest-course-stars">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<span>4.8</span>
											</div>
										</div>
									</div>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src="/images/resource/course-2.jpg" alt="course-2" />
										</div>
										<div className="latest-course-content">
											<a className="latest-course-author" href="#">by <span>Advanced</span></a>
											<h5><a href="page-course-details.html">Modern Technologies</a></h5>
											<div className="latest-course-stars">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<span>5.0</span>
											</div>
										</div>
									</div>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src="/images/resource/course-3.jpg" alt="course-3" />
										</div>
										<div className="latest-course-content">
											<a className="latest-course-author" href="#">by <span>Advanced</span></a>
											<h5><a href="page-course-details.html">Development Studies</a></h5>
											<div className="latest-course-stars">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<span>4.9</span>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
				
			</section>

		</>
	);
};

export default Courseone;