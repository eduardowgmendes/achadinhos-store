import { ShopFilled } from "@ant-design/icons";
import { Card, Divider, Empty, Flex, Space, Typography } from "antd";
const { Title, Text, Paragraph } = Typography

export default function DisplayItem({ item, key }) {

    return (
        <Card
            key={key}
            className="glow"
            size='small'
            cover={item.picture.src ? <img alt={item.picture.alt} src={item.picture.src} /> : <Empty />}>

            <Space direction='vertical' size='medium'>
                <Title className="body-2" level={5} ellipsis={{ rows: 2, expandable: false, symbol: 'more' }}
                    style={{ fontWeight: 'bold', marginBottom: 16, marginTop: 0, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>{item.title}</Title>
                <Space direction='vertical' size='small'>
                    <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit, sans-serif' }}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                    <Flex align='start'>
                        <Text type='secondary' style={{ paddingInlineEnd: 4, wordBreak: 'keep-all' }}>{item.price.currency}</Text>
                        <Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ fontSize: '1.16rem', fontWeight: 'bold', lineHeight: 1, fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all', color: 'deeppink' }}>{item.price.current}</Text>
                    </Flex>
                </Space>
                <Divider style={{ marginBottom: 6, marginTop: 12 }} />
                <small style={{ fontFamily: 'Outfit, sants-serif', wordBreak: 'keep-all' }}><ShopFilled style={{ marginInlineEnd: 8 }} />{item.merchant.seller}</small>
            </Space>
        </Card>
    )
}