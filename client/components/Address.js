import React,{useEffect,useState} from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {connect } from "react-redux"
import {PostAddress,currentValues ,Clear} from "../Actions/OrderAction"
import {UpdateAddress} from "../Actions/ItemsAction"
const { Option } = Select;

function Address(props) {
//const {name,landmark,address,pincode,type}=props.address?props.address:null
const [visible, setvisible] = useState(false)
const [form] = Form.useForm();
 useEffect(() => {
    if(props.values.Current!== null){
      console.log(props.values.Current)
      form.setFieldsValue({
        name:props.values.Current.name,
        landmark:props.values.Current.landmark,
        address:props.values.Current.address,
        pincode:props.values.Current.pincode,
        type:props.values.Current.type,
      });
      setvisible(true)
    }else{
      form.setFieldsValue({
        name: "",
        landmark: "",
        address: "",
        pincode:"",
        type:"",
      });
    }
    console.log(props)
}, [props.values.model])

    const showDrawer = () => {
        setvisible(true)
      };
    

      const onClose = () => {
        setvisible(false)
        props.Clear()
      };

      const onFinish = values => {
        console.log(props.values.Current == null)
        console.log('Success:', values);
        if(props.values.Current !== null){
          id=props.values.current._id;
          props.UpdateAddress(id,values)
          props.Clear();
        }else{
          console.log("new add")
          props.PostAddress(values);
          props.Clear();
        }
        
      };


    return (
        <div>
               <>
        <Button type="primary" shape="round" onClick={showDrawer} style={{
                backgroundColor: "#74cf4e",
                border: 0,
                marginLeft: "193px",
              }}>
          <PlusOutlined />{props.title}
        </Button>
        <Drawer
          title="Address"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
             
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark   onFinish={onFinish} form={form}>
          
        
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
        
                <Form.Item
                  name="landmark"
                  label="Landmark"
                  rules={[{ required: true, message: 'Please enter Landmark' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                  
                    placeholder="Please enter Landmark"
                  />
                </Form.Item>
    
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: 'Please select an Address' }]}
                ><Input placeholder="Please enter address"/>
                </Form.Item>
                <Form.Item
                  name="pincode"
                  label="Pincode"
                  rules={[{ required: true, message: 'Please enter pincode' }]}
                >
                  <Input placeholder="Please enter upincode" type="number" />
                </Form.Item>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Home</Option>
                    <Option value="public">Office</Option>
                  </Select>
                </Form.Item>
    
            <Form.Item>
            <Button onClick={onClose} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </>
        </div>
    )
}

const mapStateToProps = (state) => ({
  values:state.order
  })

export default connect(mapStateToProps,{PostAddress,UpdateAddress,Clear})(Address)