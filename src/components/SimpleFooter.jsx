import Container from "./layout/Container";
import { Avatar, Button, Col, Divider, Flex, Image, Layout, Row, Space, Typography } from "antd";
import { FacebookOutlined, InstagramOutlined, ShopFilled, TikTokFilled, TwitterOutlined } from "@ant-design/icons";

const { Footer } = Layout
const { Paragraph, Text, Title, Link } = Typography

export default function SimpleFooter({ themeMode }) {

    const departments = [{
        name: 'Moda & Beleza',
        href: '/'
    }, {
        name: 'Eletro & Casa',
        href: '/'
    }, {
        name: 'Mercado',
        href: '/'
    }, {
        name: 'Perfumaria',
        href: '/'
    }, {
        name: 'Suplementos',
        href: '/'
    }, {
        name: 'Infantil',
        href: '/'
    },]

    return (
        <Footer style={{ padding: 0 }}>

            <Container>

                <Row gutter={[32, 32]}>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }} >
                        <a href="/">
                            <Flex align="center" style={{ padding: '0 0 2rem 0' }} gap={'middle'}>
                                <Avatar shape="square" size={'large'} icon={<ShopFilled />} style={{ backgroundColor: "deeppink" }} />
                                <Paragraph type="secondary" style={{ margin: 0 }}>{'AchadinhosStore.com'}</Paragraph>
                                {/* {themeMode === 'light' ?
                                    <Image width={'8rem'} src='https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-0-1.png' preview={false} alt='...' /> : <Image width={'8rem'} src='https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-0-1.png' preview={false} alt='...' />} */}
                            </Flex>
                        </a>
                        <Space direction='vertical'>
                            <Paragraph type='secondary'>Oferecemos uma grande variedade de produtos, cuidadosamente selecionados, para garantir que você encontre o que precisa ao melhor preço. Nosso compromisso é trazer itens de alta qualidade, com descontos imperdíveis, em um só lugar.</Paragraph>
                            <Paragraph type='secondary'>Estamos sempre inovando para proporcionar a melhor experiência de compra possível, com uma plataforma fácil de navegar e atualizações constantes no catálogo de produtos.</Paragraph>
                            <Paragraph type='secondary'>Seja qual for a sua necessidade, nossa loja está pronta para entregar valor, conveniência e ótimas ofertas.</Paragraph>
                        </Space>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }} >
                        <Row align='baseline'>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Title level={4} style={{ marginBottom: 32 }}>Departamentos</Title>
                                <Space direction='vertical' size='large'>
                                    {departments.map((department, index) => (
                                        <Link type='secondary' key={index} href={department.href}>{department.name}</Link>
                                    ))}
                                </Space>
                            </Col>

                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Title level={4} style={{ marginBottom: 32 }}>Explore</Title>
                                <Space direction='vertical' size='large'>
                                    <Link type='secondary' href="/daily-offers">Ofertas do Dia</Link>
                                    <Link type='secondary' href="/stores">Lojas</Link>
                                    <Link type='secondary' href="/about">Sobre Nós</Link>
                                </Space>
                            </Col>

                        </Row>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>

                        <Divider />

                        <Row align="center" justify="bottom" style={{ padding: '10px 0 30px 0' }}>
                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                Achadinhos Store © {new Date().getFullYear()}
                            </Col>

                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Flex align="center" justify="end">
                                    <Space size='small'>
                                        <Button type='link' icon={<FacebookOutlined />} href="https://facebook.com" target='_blank' />
                                        <Button type='link' icon={<InstagramOutlined />} href="https://instagram.com" target='_blank' />
                                        <Button type='link' icon={<TwitterOutlined />} href="https://twitter.com" target='_blank' />
                                        <Button type='link' icon={<TikTokFilled />} href="https://www.tiktok.com" target='_blank' />
                                    </Space>
                                </Flex>
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container>

        </Footer>
    )
}