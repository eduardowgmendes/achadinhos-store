import { ShopFilled } from "@ant-design/icons";
import { Card, Col, Flex, Image, Row, Space, Typography } from "antd";
const { Paragraph, Title, Text } = Typography

export default function ListItem({ item, key }) {

    return (
        <Card key={key} className="glow" bordered bodyStyle={{ padding: 0 }} style={{ width: '100%', cursor: 'pointer' }}>

            <Row gutter={[8, 8]}>

                <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 2 }}>
                    <Flex vertical justify="center" style={{ height: '100%' }}>
                        <Image preview={false} src={item.picture.src} />
                    </Flex>
                </Col>

                <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 20 }} xl={{ span: 20 }} xxl={{ span: 22 }}>

                    <Flex align="start" style={{ padding: '1rem', height: '100%' }} >
                        <Title
                            level={5}
                            ellipsis={{ rows: 3, expandable: false, symbol: '...' }}
                            style={{ flex: 1, margin: 0, fontFamily: 'Outfit, sans-serif', marginInlineEnd: '1rem' }}>{item.title}</Title>
                        <Flex vertical justify="space-between" align="end" style={{ height: '100%' }}>
                            <Space size='small' direction="vertical" align="end">
                                <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit, sans-serif' }}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                                <Space size='small' align="end">
                                    <small style={{ wordBreak: 'keep-all' }}>{item.price.currency}</small>
                                    <Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ fontSize: '1.5em', fontWeight: 'bold', lineHeight: 1, fontFamily: 'Outfit', color: 'deeppink' }}>{item.price.current}</Text>
                                </Space>
                            </Space>
                            <small style={{ fontFamily: 'Outfit, sans-serif', margin: '1rem 0 0 0' }}><ShopFilled style={{ marginInlineEnd: 8 }} />{item.merchant.seller}</small>
                        </Flex>
                    </Flex>
                </Col>

            </Row>
        </Card>
    )
}