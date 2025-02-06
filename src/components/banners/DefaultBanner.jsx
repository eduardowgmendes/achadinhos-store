import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Image, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function DefaultBanner({ title, description, action }) {
    return (
        <Card hoverable bordered={false} bodyStyle={{ padding: 0 }}>

            <Row gutter={[16, 16]}>

                <Col span={16} style={{ padding: '1rem' }}>
                    <Flex vertical align="start" style={{ padding: '1rem' }} gap={'small'}>
                        <Title level={2}>{title}</Title>
                        <Paragraph type={'secondary'} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{description}</Paragraph>
                        <Button size="large" shape="round" type="default" icon={<ArrowRightOutlined />} iconPosition="end" href={action.href}>{action.label}</Button>
                    </Flex>
                </Col>

                <Col span={8}>
                    <Flex align="center" justify="center" style={{ height: '100%' }}>
                        <Image style={{ margin: 0 }} preview={false} src="https://images.unsplash.com/photo-1738330094149-03cc30132bbb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Flex>
                </Col>

            </Row>
        </Card>
    )
}