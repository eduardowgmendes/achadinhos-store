import { IdcardTwoTone, ShopFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Flex, Layout, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Container from "../layout/Container";
import Link from "antd/es/typography/Link";

export default function NavHeader({ brandLogo, brandName, links }) {
    return (
        <Layout style={{ padding: '1rem 0 1rem 0' }}>

            <Container>

                <Row gutter={[32, 16]}>

                    <Col>
                        <Space direction="horizontal" align="center" size={'small'}>
                            {brandLogo ?
                                <Avatar shape="square" size={'large'} src={brandLogo} />
                                :
                                <Avatar shape="square" size={'large'} icon={<ShopFilled />} style={{ backgroundColor: "deeppink" }} />
                            }
                            <Paragraph style={{ margin: 0 }}>{brandName}</Paragraph>
                        </Space>
                    </Col>

                    <Col>
                        <Space direction="horizontal" size={'large'} align="center" style={{ height: '100%' }}>
                            {links && links.map((link, index) => (
                                <Flex align="center" gap={'small'}>
                                    {link.icon}
                                    <Link type="secondary" key={index} href={link.href} target="_blank" rel="noopener" style={{ flex: 1 }}> {link.value}</Link>
                                </Flex>
                            ))}
                        </Space>
                    </Col>

                </Row>

            </Container>

        </Layout >
    )
}