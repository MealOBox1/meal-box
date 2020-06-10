import React from "react";
import { Row, Col } from "antd";

// import { Table, Tag, Space } from "antd";

// const columns = [
//   {
//     title: "Product Name & Details",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "summary",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Status of Delivery",
//     key: "tags",
//     dataIndex: "tags",
//     render: (tags) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (text, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

function OrderTable() {
  return (
    <div>
      {/* <Table columns={columns} dataSource={data} /> */}
      <Row style={{ justifyContent: "space-between" }}>
        <Col>
          <h3>
            <b>Product Name & Details</b>
          </h3>
        </Col>
        <Col>
          <h3>
            {" "}
            <b>Status of Delivery</b>
          </h3>
        </Col>
        <Col>
          <h3>
            <b>Summary</b>
          </h3>
        </Col>
      </Row>
      <Row style={{ marginTop: "18px", justifyContent: "space-between" }}>
        <Col>
          <div style={{ display: "flex" }}>
            <div style={{ height: "100px", width: "105px" }}>
              {" "}
              <img src="../images/plate.jpg" style={{ borderRadius: "7px" }} />
            </div>

            <div style={{ marginLeft: "10px" }}>
              <h4>MealBox Veg Naan</h4>
              <p>Cheese ,Tommato,Salad</p>
              <p>id:4855121</p>
            </div>
          </div>
        </Col>
        <Col>
          <h3 style={{ color: "#74cf4e" }}>Delivered</h3>
        </Col>
        <Col style={{ fontSize: "11px" }}>
          <p>#100</p>
          <p>Delivery time: 45min-1hr</p>
          <div>
            <p>Subtotal:#400</p>
            <p>Shipping:#80</p>
          </div>
          <p>Total:#480</p>
        </Col>
      </Row>
    </div>
  );
}
export default OrderTable;
