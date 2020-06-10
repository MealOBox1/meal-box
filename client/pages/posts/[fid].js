import React, { useEffect, useState } from "react";
import { Layout, Row } from "antd";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Card, Input, Button, Radio } from "antd";
import Styles from "../../styles/food.module.css";
import { getFood } from "../../Actions/ItemsAction";

function foodDetail(props) {
  const router = useRouter();
  const fid = router.query.fid;
  console.log(router.query.fid);
  const [value, setvalue] = useState(1);

  const [data, setdata] = useState([]);

  useEffect(() => {
    props.getFood(fid);
    setdata((prevState) => ({
      food: props.food,
    }));
    console.log(data);
  }, []);

  const onchange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div>
      <Layout>
        <Row>
          <p>Post:{fid}</p>
          <p>{props.food.title}</p>
          <p>{data.title}</p>
        </Row>
        <Row>
          {/* {props.food.map((el) => {
            return (
              <div>
                <p>title:{el.title}</p>
                <p>kitchenName:{el.KitchenName}</p>
                <p>meals:{el.meals}</p>
              </div>
            );
          })} */}
        </Row>
        <Row style={{ justifyContent: "center", marginTop: "15px" }}>
          <div className="site-card-border-less-wrapper">
            <Card style={{ borderLeft: "3px solid #74cf4e", width: " 652px" }}>
              <h3>Choose Subscription Plan</h3>
              <div>
                <Radio.Group onChange={onchange} value={value}>
                  <Radio className={Styles.radioStyle} value={1}>
                    3 Days Subscription Plan
                  </Radio>
                  <Radio className={Styles.radioStyle} value={2}>
                    6 Days Subscription Plan
                  </Radio>
                  <Radio className={Styles.radioStyle} value={3}>
                    14 Days Subscription Plan
                  </Radio>
                  <Radio className={Styles.radioStyle} value={4}>
                    28 Days Subscription Plan
                  </Radio>
                  {/* <Radio style={radioStyle} value={4}>
                    More...
                    {value === 4 ? (
                      <Input style={{ width: 100, marginLeft: 10 }} />
                    ) : null}
                  </Radio> */}
                </Radio.Group>
              </div>
              <Button
                //   type="primary"
                shape="round"
                //icon={<DownloadOutlined />}
                size="large"
                style={{
                  marginLeft: "246px",
                  marginTop: "39px",
                  backgroundColor: "#74cf4e",
                  color: "white",
                }}
                value="Silver"
                id="silver"
                //onClick={choosePlan}
              >
                Confirm
              </Button>
            </Card>
          </div>
        </Row>
        <Row></Row>
      </Layout>
    </div>
  );
}
const mapStateToProps = (state) => ({
  food: state.item.items,
});

export default connect(mapStateToProps, { getFood })(foodDetail);
