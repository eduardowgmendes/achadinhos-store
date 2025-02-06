import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function Section({ icon, title, description, action, contents }) {

    return (
        <section style={{ padding: '4rem 0 4rem 0' }}>

            <Flex vertical>

                <Flex gap={'middle'} align="start" >

                    <Avatar shape="square" icon={icon} size={'middle'} style={{backgroundColor: 'deeppink'}} />

                    <Flex vertical flex={1} style={{ height: '100%' }}>
                        <Title style={{ margin: 0 }} level={4}>{title}</Title>
                    </Flex>

                    <Button type="link" icon={<ArrowRightOutlined />} iconPosition="end" href={action.href}>{action.label}</Button>

                </Flex>

                <Flex gap={'large'} style={{ padding: '1rem 0 2rem 0' }}>

                    <Paragraph style={{ margin: 0 }} type="secondary" ellipsis={{ rows: 6, expandable: false, symbol: '...' }}>{description}</Paragraph>

                </Flex>

            </Flex>

            {contents}

        </section>
    )
}