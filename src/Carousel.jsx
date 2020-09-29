// @ts-check

import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlideId: 0,
		};
	}
	slideList() {
		const {images} = this.props;
		if (images && images.length) {
			return images.map((item, i) => <React.Fragment key={i}><div className={cn({'carousel-item': true, 'active': i === this.state.activeSlideId,})}><img alt="" className="d-block w-100" src={item}></img></div></React.Fragment>);
		} else {
			return false;
		}
	};

	togglePrevSlide = (e) => {
		e.preventDefault();
		const {images} = this.props;
		const { activeSlideId } = this.state;
		const prevSlideId = ((activeSlideId + (images.length - 1)) % images.length);
		this.setState({ activeSlideId: prevSlideId });
	};

	toggleNextSlide = (e) => {
		e.preventDefault();
		const {images} = this.props;
		const { activeSlideId } = this.state;
		const nextSlideId = ((activeSlideId + 1) % images.length);
		this.setState({ activeSlideId: nextSlideId });
	};

	render() {
		return (
			<div id="carousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					{this.slideList()}
				</div>
				<a className="carousel-control-prev" onClick={this.togglePrevSlide} href="#carousel" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" onClick={this.toggleNextSlide} href="#carousel" role="button" data-slide="next">
					<span className="carousel-control-next-icon"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		)
	}
};
// END
