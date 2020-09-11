import React,{useState,useEffect} from "react";
import { Row, Col,Modal,Avatar,Button,Select } from "antd";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;
import {connect} from "react-redux"
import {GetOrder,UpdateOrder} from "../Actions/OrderAction";

function OrderTable(props) {
  const [modalProps, setmodalProps] = useState({
    item:null,
    loading: false,
    visible: false,
  });

  const [Status, setStatus] = useState({staus:null})
  

  useEffect(() => {
  console.log(props)
  props.GetOrder()
 },[])

  useEffect(() => {
    console.log(modalProps)
 
  },[modalProps])

  const showModal = (id) => {
    setmodalProps((prevState) => ({
      ...prevState,
      visible: true,
      item:props.orders.filter(item => item._id === id)
    }));
  }

  const handleOk = () => {
    setmodalProps((prevState) => ({ ...prevState, loading: true }));
    setTimeout(() => {
      props.UpdateOrder(modalProps.item[0]._id,Status)
      setmodalProps((prevState) => ({
        ...prevState,
        loading: false,
        visible: false,
      }));
      
     
    }, 4000);
  };

  const handleCancel = () => {
    setmodalProps((prevState) => ({ ...prevState, visible: false }));
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
    setStatus(()=>({
      status:value
    }))
  }
  
  

  return (
    <div>
      {/* <Table columns={columns} dataSource={data} /> */}
      <Row style={{ justifyContent: "space-between" }}>
        <Col>
          <h3>
            <b>Meal info</b>
          </h3>
        </Col>
        <Col>
          <h3>
            {" "}
            <b>Status </b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Meal Type</b>
          </h3>
        </Col>
      </Row>
      {props.orders ? props.orders.map(item => {
             return <Row style={{ marginTop: "18px", justifyContent: "space-between" }}  onClick={()=>showModal(item._id)}>
              <Col>
                <div style={{ display: "flex" }}>
                  <div style={{ height: "100px", width: "55px" }}>
                    {" "}
                    <img src="../images/plate.jpg" style={{ borderRadius: "7px" }} />
                  </div>
      
                  <div style={{ marginLeft: "10px" }}>
                    <h4>{item.name}</h4>
                    <p>Cheese ,Tommato,Salad</p>
                    {/* <p>id:4855121</p> */}
                  </div>
                </div>
              </Col>
              <Col>
                <h3 style={{ color: "#74cf4e" }}>Delivered</h3>
              </Col>
              <Col style={{ fontSize: "11px" }}>
                <h2>{item.food ? item.food.meals :null }</h2>
              </Col>
            </Row>

            }):null}
      {modalProps.item ? <Modal
          visible={modalProps.visible}
          // title="Title"
          style={{ padding: 0 }}
          bodyStyle={{ padding: 0 }}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              //   type="primary"
              shape="round"
              //icon={<DownloadOutlined />}
              size="large"
              style={{
                // marginLeft: "246px",
                marginTop: "39px",
                backgroundColor: "#74cf4e",
                color: "white",
              }}
              value="Silver"
              id="silver"
              //onClick={choosePlan}
              key="submit"
              type="primary"
              loading={modalProps.loading}
              onClick={handleOk}
            >
              Confirm
            </Button>,
          ]}
        >
          <div style={{ width: " 521px", height: "121px" }}>
            <img
              alt="example"
              src="./images/plate.jpg"
              style={{ height: "inherit", width: "520px", objectFit: "cover" }}
            />
          </div>
          <Row style={{ justifyContent:"space-evenly"}}>
          <Col
             // span={5}
              style={{ padding: "11px", display: "flex", flexDirection: "row" }}
            >
              <div style={{ marginLeft: "20px" }}>
                <h3>Meal :</h3>

              </div>
            </Col>
           <Col
             // span={19}
              style={{
               
                padding: "11px",
              }}
            >
              <h3>{modalProps.item[0].name }</h3>
              {/* <p>Special 1 Plate , 4 Roti</p> */}
            </Col>
        
          </Row>
          <Row style={{ justifyContent:"space-evenly"}}>
          <Col
             // span={5}
              style={{ padding: "11px", display: "flex", flexDirection: "row" }}
            >
              <div style={{ marginLeft: "20px" }}>
                <h3>Meal Type :</h3>

              </div>
            </Col>
            
           <Col
             // span={19}
              style={{
               
                padding: "11px",
              }}
            >
              
              <p>{modalProps.item[0].food.meals }</p>
            </Col>
        
          </Row>
          <Row style={{ justifyContent:"space-evenly"}}>
          <Col
             // span={5}
              style={{ padding: "11px", display: "flex", flexDirection: "row" }}
            >
              <div style={{ marginLeft: "20px" }}>
                <h3>Subscription :</h3>

              </div>
            </Col>
           <Col
             // span={19}
              style={{
               
                padding: "11px",
              }}
            >
            
              <p>{modalProps.item[0].days}</p>
            </Col>
        
          </Row>
          <Row style={{ justifyContent:"space-evenly"}}>
          <Col
             // span={5}
              style={{ padding: "11px", display: "flex", flexDirection: "row" }}
            >
              <div style={{ marginLeft: "20px" }}>
                <h3>Meal Status :</h3>

              </div>
            </Col>
           <Col
             // span={19}
              style={{
               
                padding: "11px",
              }}
            >
            
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Stop</Option>
      <Option value="lucy">Skip</Option>
      <Option value="disabled" >
        Pause/resume
      </Option>
    
    </Select>
            </Col>
        
          </Row>
          
          <Row style={{ flexDirection: " column", marginTop: "15px" }}>
            {/*   <div className="site-card-border-less-wrapper">
              <Card
                style={{ borderLeft: "3px solid #74cf4e", width: " 652px" }}
              > */}
           
            <div style={{ marginLeft: "15px" }}>
            </div>
           </Row>
        </Modal>:null}
      
    </div>
  );
}

const mapStateToProps = (state) => ({
orders:state.order.order
})

export default connect( mapStateToProps,{GetOrder,UpdateOrder})(OrderTable);
