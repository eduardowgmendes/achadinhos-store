import { IdcardTwoTone, ShopFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Flex, Grid, Layout, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Container from "../layout/Container";
import Link from "antd/es/typography/Link";
import Search from "antd/es/input/Search";

const { useBreakpoint } = Grid

export default function NavHeader({ themeMode, brandLogo, brandName, links }) {

    const screens = useBreakpoint();

    const onSearch = (query) => { console.log(query) }

    return (
        <Layout style={{ padding: '1rem 0 1rem 0', background: 'transparent' }}>

            <Container>

                <Flex vertical={screens.xs} align={screens.xs ? 'start' : 'center'} justify={screens.xs ? "stretch" : 'space-between'} gap={'large'}>

                    <Flex align="center" gap={'small'}>

                        {
                            brandLogo ?
                                <Avatar shape="square" size={'large'} src={brandLogo} />
                                :
                                <Avatar shape="square" size={'large'} icon={<ShopFilled />} />
                        }

                    </Flex>

                    <Search placeholder={'Buscar'} size='large' onSearch={onSearch} enterButton style={{flex: 1}}/>

                    <Flex vertical={screens.xs} align={screens.xs ? "start" : "center"} gap={'large'} style={{ width: '100%' }} flex={1}>
                        {links && links.map((link, index) => (
                            <Space direction='horizontal' align='center' size={'small'}>
                                {link.icon}
                                <Link type="secondary" key={index} href={link.href} target="_blank" rel="noopener" style={{ flex: 1 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}> {link.value}</Link>
                            </Space>
                        ))}
                    </Flex>

                </Flex>

            </Container>

        </Layout >
    )
}