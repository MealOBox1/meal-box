import React,{useState, useEffect} from "react";
import { Avatar, Row, Menu } from "antd";


// import Userinfo from "../Actions/User";
import Link from "next/link";
import styled from "styled-components"
import { useRouter } from 'next/router'

export default function UserPanel(props) {
  const router = useRouter()
  const[key,setKey]=useState()
  useEffect(()=>{
    setKey(router.pathname)
  },[])

  console.log(router.pathname)


const Manu=styled(Menu)`
width:500px;
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected {
  border-bottom-color: #74cf4e!important;
  color: #74cf4e!important;
}
ant-menu-item{
  width:60px;
  margin-left:25px;
}
li{
  margin-left:15px;

}

a:active{
  border-bottom-color: #74cf4e!important;
  color: #74cf4e!important;
  text-decoration:none;
}

ant-menu-horizontal > .ant-menu-item-selected a {
  border-bottom-color: #74cf4e!important;
  color: #74cf4e!important;
}
a:hover{
  border-bottom-color: #74cf4e!important;
  color: #74cf4e!important;
  text-decoration:none;
 } 

`
const Raw =styled(Row)`
justify-content: center!important;
`
console.log(props)

  return (
    <>
      <Raw>
        <Avatar
          style={{ border: "1px solid #44cd48" }}
          size={80}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Raw>
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h1 style={{ margin: "0" }}>Ram</h1>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h4>Ram</h4>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Manu
          mode="horizontal"
          style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
          defaultSelectedKeys={[`${key}`]}
        >
          <Menu.Item key="/food">
            <Link href="./food">Restaurants</Link>
          </Menu.Item >
          <Menu.Item key="/Overview">
            <Link href="./Overview"> Overview</Link>
          </Menu.Item>
          <Menu.Item key="/usersummary">
            <Link href="./usersummary">Account info</Link>
          </Menu.Item>
          <Menu.Item key="/Subscription">
            <Link href="./Subscription">Subscription</Link>
          </Menu.Item>
          {/* <Menu.Item>
            <a>Phkggayment</a>
          </Menu.Item> */}
        </Manu>
      </Row>
    </>
  );
}
