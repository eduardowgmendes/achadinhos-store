import { Layout } from "antd";
import Products from "../local/products.json"
import ShowcaseDisplayer from "../components/showcase/ShowcaseDisplayer";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { BellOutlined, FireOutlined, MoneyCollectOutlined, UpCircleOutlined } from "@ant-design/icons";


export default function Home() {

    return (
        <Layout>

            <Container>

                <Section
                    icon={<MoneyCollectOutlined />}
                    title={'Ofertas Especiais'}
                    description={'Aproveite promoções exclusivas e descontos incríveis por tempo limitado. Não perca a chance de garantir os melhores produtos com preços reduzidos!'}
                    action={{ label: 'Ver Mais', href: '/' }}
                    contents={<ShowcaseDisplayer items={Products} pageSize={24} itemLayout={'horizontal'} />}
                />

                <Section
                    icon={<UpCircleOutlined />}
                    title={'Mais Vendidos'}
                    description={'Confira os produtos mais populares entre nossos clientes! Estes são os itens mais vendidos e bem avaliados, escolhidos por quem entende de boas compras.'}
                    action={{ label: 'Ver Mais', href: '/' }}
                    contents={<ShowcaseDisplayer items={Products} pageSize={24} itemLayout={'horizontal'} />}
                />

                <Section
                    icon={<BellOutlined />}
                    title={'Novidades'}
                    description={'Fique por dentro dos lançamentos e das últimas tendências do mercado. Aqui você encontra as novidades que acabaram de chegar e que prometem surpreender!'}
                    action={{ label: 'Ver Mais', href: '/' }}
                    contents={<ShowcaseDisplayer items={Products} pageSize={24} itemLayout={'horizontal'} />}
                />

                <Section
                    icon={<FireOutlined />}
                    title={'Recomendados'}
                    description={'Selecionamos produtos especiais com base no que você mais gosta! Encontre sugestões personalizadas e descubra itens que combinam com seu estilo e necessidades.'}
                    action={{ label: 'Ver Mais', href: '/' }}
                    contents={<ShowcaseDisplayer items={Products} pageSize={24} itemLayout={'horizontal'} />}
                />

            </Container>

        </Layout>
    )
}