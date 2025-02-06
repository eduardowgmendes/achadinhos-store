import { Col, Row } from "antd";

export default function Container({ children }) {
    return (
        <Row>
            <Col xs={{span: 22, offset: 1}} sm={{span: 20, offset: 2}} md={{span: 20, offset: 2}} lg={{span: 20, offset: 2}} xl={{span: 20, offset: 2}} xxl={{span: 20, offset: 2}}>
                { children }
            </Col>
        </Row>
    )
}