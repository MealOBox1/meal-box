import React, { Component } from "react";
import { Carousel, Row, Col } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        {/* <Icon type="left-circle" /> */}
        <Carousel ref={(node) => (this.carousel = node)} {...props} autoplay>
          <div>
            {/* <h3>1</h3> */}
            <Row>
              <Col className="chefContainer">
                <img className="chef" src="./images/chef1.jpg" />
              </Col>
              <Col style={{ width: "550px" }}>
                <Row style={{ height: "233px" }}>
                  <p style={{ height: "176px" }} className="cheflines">
                    {" "}
                    " I coocked traditional recipes that are <br /> scacred in
                    my family ,to share my love
                    <br /> for food".
                    <br />
                    <h1>Rahul</h1>
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col className="chefContainer">
                <img className="chef" src="./images/chef2.jpeg" />
              </Col>
              <Col style={{ width: "550px" }}>
                <Row style={{ height: "233px" }}>
                  <p style={{ height: "176px" }} className="cheflines">
                    {" "}
                    " I coocked traditional recipes that are <br /> scacred in
                    my family ,to share my love
                    <br /> for food.
                    <br />
                    <h1>Rahul</h1>
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col className="chefContainer">
                <img className="chef" src="./images/chef3.jpg" />
              </Col>
              <Col style={{ width: "550px" }}>
                <Row style={{ height: "233px" }}>
                  <p style={{ height: "176px" }} className="cheflines">
                    {" "}
                    " I coocked traditional recipes that are <br /> scacred in
                    my family ,to share my love
                    <br /> for food.
                    <br />
                    <h1>Rahul</h1>
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
        </Carousel>
        <Row style={{ marginLeft: "309px" }}>
          <Col id="courselBtn">
            {" "}
            <ArrowLeftOutlined onClick={this.previous} id="courselShift" />
          </Col>
          <Col id="courselBtn">
            {" "}
            <ArrowRightOutlined onClick={this.next} id="courselShift" />
          </Col>
        </Row>

        {/* <Icon type="right-circle"  /> */}
      </div>
    );
  }
}
