import '../../components/Projects/Projects.less';

import React from 'react';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Collapse, Icon, Form, Input, Row, Col, Button, Divider, message } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { addQuestion } from '../../controllers/questions';
import * as app from 'firebase/app';
import 'firebase/database';

interface IProps {
    id: string;
    form: WrappedFormUtils;
}

interface Question {
    question: string,
    response: string
}

interface IState {
    loading: boolean;
    faqs: Question[];
}

const backgroundColor = "#F4F4F4";

class FAQ extends React.PureComponent<IProps, IState> {

    initialQuestion: Question[] = [{
        question: "Quel âge as-tu ?",
        response: "Je suis né le 19 juin 1997, j'ai donc 21 ans."
    }];

    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: false,
            faqs: this.initialQuestion,
        }

        app.database().ref('faq').on('value', async snapshot => {
            let data = snapshot.val();
            if (data) {
                let questions: Question[] = [];
                for (let key of Object.keys(data)) {
                    if (data[key].visibleOnWeb) {
                        questions.push({
                            question: data[key].question,
                            response: data[key].response,
                        });
                    }
                }
                this.setState({ faqs: [...this.initialQuestion, ...questions] });
            }
        });
    }

    render() {
        const { id, form } = this.props;
        const { getFieldDecorator } = form;
        const { faqs } = this.state;
        return (
            <div id={id} key={id} className="home-page-wrapper content-wrapper" style={{ background: backgroundColor }}>
                <div key="home" className="home-page content">
                    <div key="title" className="title-wrapper">
                        <h1 className="title-h1">FAQ</h1>
                    </div>
                    <OverPack className={`content-template`} playScale={0.3}>
                        <TweenOneGroup
                            component="div"
                            key="div"
                            enter={{
                                y: '+=30',
                                opacity: 0,
                                type: 'from',
                                ease: 'easeInOutQuad',
                            }}
                            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
                            className="content-img-wrapper projects"
                        >
                            <div>
                                <h3>Posez moi votre question!</h3>
                                <Form onSubmit={this.handleSubmit}>
                                    <Row gutter={16}>
                                        <Col span={10}>
                                            <Form.Item label="La question">
                                                {getFieldDecorator('question', {
                                                    rules: [{ required: true, message: "Ce champs est requis!" }]
                                                })(
                                                    <Input placeholder="Quel âge as tu ?" />
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                            <Form.Item label="Email pour être tenu au courant de la réponse">
                                                {getFieldDecorator('email')(
                                                    <Input placeholder="scarpellino.giovanni@gmail.com" />
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Form.Item label=" " colon={false}>
                                                <Button htmlType="submit" type="primary" block loading={this.state.loading}>Envoyer</Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>

                                <Divider>OU</Divider>

                                {faqs.length > 0 && (
                                    <Collapse bordered={false}>
                                        {faqs.map((item, index) => (
                                            <Collapse.Panel header={item.question} key={index + ""}>
                                                <p>{item.response}</p>
                                            </Collapse.Panel>
                                        ))}
                                    </Collapse>
                                )}
                            </div>
                        </TweenOneGroup>
                    </OverPack>
                </div>
            </div>
        );
    }

    handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
        this.setState({ loading: true });

        const { form } = this.props;
        form.validateFields(async (err, values) => {
            if (err) {
                this.setState({ loading: false });
                return;
            };

            if (values.question) {
                try {
                    await addQuestion(values.question, values.email);
                    message.success('Votre question a bien été envoyé! Elle apparaitera ici une fois répondu.');
                } catch (error) {
                    console.log(error);
                }
            }

            this.setState({ loading: false });
        });
    }
}

export default Form.create()(FAQ);