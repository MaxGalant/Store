import "antd/dist/antd.css";
import {
  Layout,
  Menu,
  List,
  Card,
  Typography,
  Row,
  Col,
  Image,
  Form,
  Select,
  Button,
} from "antd";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGoodsData } from "./Redux/ActionThunk/fetchGoodsData";
import { SUCCESS } from "./Redux/constants/status";
import RegistrationForm from "./createGoods";
const { Option } = Select;
const { Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;
const Product = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 4,
    },
  };
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState("");
  const [statusForm, setStatusForm] = useState(false);
  useEffect(() => {
    dispatch(fetchGoodsData());
  }, [dispatch]);
  const history = useHistory();
  const { goodsData, status } = useSelector((state) => state.goods);
  const onCreate = () => {
    setStatusForm(true);
  };
  const onCancel = () => {
    setStatusForm(false);
  };

  const content = (
    <>
      <Row justify="center">
        <Col xs={22} sm={22} md={22} lg={22} xl={22}>
          <List
            grid={{ xs: 2, sm: 2, md: 4, lg: 4, xl: 4 }}
            size="large"
            dataSource={goodsData}
            renderItem={(goods) => (
              <List.Item
                key={goods.id}
                onClick={() => {
                  history.push(`goods/${goods.id}`);
                }}
              >
                <Card title={goods.name} hoverable>
                  {goods.imageUrl ? (
                    <Image width={200} src={goods.imageUrl} />
                  ) : (
                    <Image
                      width={200}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  )}

                  <Paragraph>
                    <Text>count: {goods.count}</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>weight: {goods.weight}</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>width: {goods.size.width}</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>height: {goods.size.height}</Text>
                  </Paragraph>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
  const sortTypeArr = ["name", "count"];

  const selectType = (value) => {
    setSortType(value);
  };
  const onSort = () => {
    dispatch(fetchGoodsData(sortType));
  };
  console.log(sortType);

  return (
    <div>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1"> Goods List</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Col>
              <Form {...layout}>
                <Form.Item>
                  <Select
                    showSearch
                    onChange={selectType}
                    style={{ width: 200 }}
                    placeholder="Select type of sort"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {sortTypeArr &&
                      sortTypeArr.map((item) => (
                        <Option key={item} value={item}>
                          {item}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" onClick={onSort}>
                    Sort
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            {status === SUCCESS && content}
          </div>
          {!statusForm && (
            <Button
              type="primary"
              style={{ width: "200px" }}
              onClick={onCreate}
            >
              Create Goods
            </Button>
          )}
          {statusForm && (
            <Button
              type="primary"
              style={{ width: "200px" }}
              onClick={onCancel}
              danger
            >
              Cancel
            </Button>
          )}
          {statusForm && <RegistrationForm />}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default Product;
