import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneGoods } from "./Redux/Api/goodsRequest";
import "antd/dist/antd.css";
import {
  Layout,
  Menu,
  List,
  Card,
  Row,
  Col,
  Image,
  Typography,
  Button,
  Input,
} from "antd";
import { createComments } from "./Redux/Api/commentsRequest";
const { Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;
const Goods = () => {
  const [oneGoods, setOneGoods] = useState({});
  const [comments, setComments] = useState();
  const [size, setSize] = useState({});
  const [text, setText] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const [statusForm, setStatusForm] = useState(false);
  const getOneGoodsById = useCallback(async () => {
    const res = await getOneGoods(params.id);
    setOneGoods(res.data);
    setComments(res.data.comments);
    setSize(res.data.size);
  }, [dispatch, params.id]);

  useEffect(() => {
    getOneGoodsById();
  }, [getOneGoodsById]);

  const DeleteComments = (value) => {
    console.log(value.target);
  };
  const onCreate = () => {
    setStatusForm(true);
  };
  const onCancel = () => {
    setStatusForm(false);
  };
  const getText = (value) => {
    setText(value.target.value);
  };

  const onSend = () => {
    createComments({ id: params.id, description: text });
  };
  const commentList = (
    <>
      <Row justify="center">
        <Col xs={22} sm={22} md={22} lg={22} xl={22}>
          <List
            grid={{ xs: 2, sm: 2, md: 4, lg: 4, xl: 1 }}
            size="large"
            dataSource={comments}
            renderItem={(comment) => (
              <List.Item key={comment.id}>
                <Card>
                  <Paragraph>
                    <Text> {comment.description}</Text>
                  </Paragraph>
                  <Button type="primary" danger onClick={DeleteComments}>
                    Delete
                  </Button>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );

  return (
    <div>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              {" "}
              <Link to="/">Goods List</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Col>
              <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={5} flex>
                  <Card title={oneGoods.name} hoverable>
                  {oneGoods.imageUrl ? (
                    <Image width={200} src={oneGoods.imageUrl} />
                  ) : (
                    <Image
                      width={200}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  )}
                    <Paragraph>
                      <Text>count: {oneGoods.count}</Text>
                    </Paragraph>
                    <Paragraph>
                      <Text>weight: {oneGoods.weight}</Text>
                    </Paragraph>
                    <Paragraph>
                      <Text>width: {size.width}</Text>
                    </Paragraph>
                    <Paragraph>
                      <Text>height: {size.height}</Text>
                    </Paragraph>
                  </Card>
                </Col>{" "}
              </Row>
              {commentList}
              {statusForm && (
                <Row>
                  {" "}
                  <Input
                    style={{ width: "200px", height: "30px" }}
                    onChange={getText}
                  />
                  <Button onClick={onSend}>Send</Button>
                </Row>
              )}
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
                  style={{ width: "200px", marginLeft: "20px" }}
                  onClick={onCancel}
                  danger
                >
                  Cancel
                </Button>
              )}
            </Col>{" "}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default Goods;
