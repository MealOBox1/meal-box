import React, { useEffect } from "react";
import UserLayout from "./userlayout";
import Userinfo from "../components/UserInfo";
import { connect } from "react-redux";
import { GetAddress } from "../Actions/ItemsAction";
import { Card, Button } from "antd";
import AddressDrewer from  "../components/Address"
import {currentValues} from "../Actions/OrderAction"




function usersummary(props) {
  useEffect(() => {
    props.GetAddress();
  }, []);

 const onHandle =(value)=>{
  props.currentValues(value)
  }
  return (
    <div>
      <UserLayout>
        <div style={{display: "flex",
    flexFlow: "wrap",
    justifyContent: "center"}}>
        {props.Address.map(el=>{
          return (<Card
          style={{
            borderLeft: "3px solid #74cf4e",
            // marginLeft: "550px",
            marginTop: "20px",
            width: "28%",
            // marginLeft: "550px",
            marginTop: "20px",
          }}
        >
          <div>
        <h2>{el.address}</h2>
        <h2>{el.landmark}</h2>
        <h3>{el.pincode}</h3>
            <div style={{display:"flex"}}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{ backgroundColor: "#74cf4e", border: 0 }}
            >
              Delivery here
            </Button>
            <Button onClick={()=>onHandle(el)}>Edit</Button>
            
            </div>
          </div>
        </Card>)
        })}
        </div>
        {/* <Card
          style={{
            borderLeft: "3px solid #74cf4e",
            marginLeft: "550px",
            marginTop: "20px",
            width: "28%",
            marginLeft: "550px",
            marginTop: "20px",
          }}
        >
          <div>
            <h2>Home</h2>
            <h2>land mark</h2>
            <h3>pincode</h3>
            <div style={{display:"flex"}}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              style={{ backgroundColor: "#74cf4e", border: 0 }}
            >
              Delivery here
            </Button>
            <AddressDrewer title="edit"/>
            </div>
           
          </div>
        </Card> */}
        
        {/* <Userinfo /> */}
        <AddressDrewer  />
      </UserLayout>
    </div>
  );
}

const mapStateToProps = (state) => ({
  Address:state.item.Address
  })

export default connect(mapStateToProps, { GetAddress,currentValues })(usersummary);
