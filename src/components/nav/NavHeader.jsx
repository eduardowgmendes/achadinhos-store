import { IdcardTwoTone, ShopFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Flex, Layout, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Container from "../layout/Container";

export default function NavHeader({ brandLogo, brandName, links }) {
    return (
        <Layout style={{ padding: '1rem 0 1rem 0' }}>

            <Container>

                <Row gutter={[16, 16]}>

                    <Col>
                        <Space direction="horizontal" align="center" size={'small'}>
                            {brandLogo ?
                                <Avatar shape="square" size={'large'} src={brandLogo} />
                                :
                                <Avatar shape="square" size={'large'} icon={<ShopFilled />} />
                            }
                            <Paragraph style={{ margin: 0 }}>{brandName}</Paragraph>
                        </Space>
                    </Col>

                    <Col>
                        <Space direction="horizontal" size={'small'} align="center" style={{ height: '100%' }}>
                            {links && links.map((link, index) => (
                                <Button type="default" key={index} value={link.value} icon={link.icon} iconPosition="start" href={link.href}>{link.value}</Button>
                            ))}
                        </Space>
                    </Col>

                </Row>

            </Container>

        </Layout>
    )
}