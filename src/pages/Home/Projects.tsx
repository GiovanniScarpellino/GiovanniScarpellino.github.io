import '../../components/Projects/Projects.less';

import React from 'react';
import { Row, Col, Tooltip, } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

// Projects
import ProjectSyncodeo from '../../components/Projects/ProjectSyncodeo';
import ProjectEchec from '../../components/Projects/ProjectEchec';
import ProjectGameJam from '../../components/Projects/ProjectGameJam';
import ProjectGoGoResto from '../../components/Projects/ProjectGoGoResto';
import ProjectMobileSiteWeb from '../../components/Projects/ProjectSiteWeb';
import ProjectQRun from '../../components/Projects/ProjectQRun';
import ProjectSiteWeb from '../../components/Projects/ProjectSiteWeb';
import ProjectStage from '../../components/Projects/ProjectStage';

type tech = "React" | "Java" | "Ant design" | "Grafana" | "Prometheus" | "Redis" | "MySQL" | "hapi" | "Elasticsearch" | "Google" | "YouTube" | "Firebase" | "NodeJS" | "Unity" | "C#" | "Android Studio" | "OpenGL";

interface Block {
    name: string;
    img: string;
    title: string;
    content?: JSX.Element;
    techs?: tech[];
}

interface IProps {
    isMobile: boolean;
    id: string;
}

interface IState {
    blocks: Block[];
    showProject: boolean;
    actualBlock: Block;
    blockWidth: number;
}

export default class Projects extends React.PureComponent<IProps, IState> {

    haveToShowProject;

    constructor(props: IProps) {
        super(props);

        this.state = {
            blockWidth: 0,
            actualBlock: undefined,
            showProject: false,
            blocks: [{
                name: 'syncodeo',
                img: require('../../medias/img/projets/logo_syncodeo.svg'),
                title: 'Syncodéo',
                content: <ProjectSyncodeo />,
                techs: ["React", "Ant design", "Grafana", "Prometheus", "Redis", "MySQL", "hapi", "Elasticsearch", "NodeJS"]
            }, {
                name: 'mobile-site-web',
                img: 'https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg',
                title: 'Application react-native',
                content: <ProjectMobileSiteWeb />,
                techs: ["React", "Firebase", "NodeJS"],
            }, {
                name: 'Game jam',
                img: require('../../medias/img/projets/gamejam.gif'),
                title: 'Game jam',
                content: <ProjectGameJam />,
                techs: ["Unity", "C#"],
            }, {
                name: 'qrun',
                img: require('../../medias/img/projets/qrcode.png'),
                title: 'QRun',
                content: <ProjectQRun />,
                techs: ["NodeJS", "Android Studio", "OpenGL"],
            }]
        }
    }

    setActualBlock = async (item: Block) => {
        await this.setState({ actualBlock: item });
        let element = document.getElementById('project');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    showActualBlock = (item: Block, index: number) => {
        const { blocks, actualBlock } = this.state;
        if (item === this.state.actualBlock) this.haveToShowProject = true;
        if (this.haveToShowProject && ((!blocks[index + 1] || ((index + 1) % 4 === 0)) || this.props.isMobile)) {
            this.haveToShowProject = false;
            return actualBlock.content && (
                <Col key="project" id="project" xs={24} className="block">
                    <div className="nick"></div>
                    <div className="content-block-content">
                        {actualBlock.content}
                    </div>
                </Col>
            )
        }
    }

    renderLiTech = (title: string, url: string) => {
        return (
            <Tooltip title={title} key={title}>
                <li className="tech-logo"><img src={url} /></li>
            </Tooltip>
        )
    }

    renderTechnsLogo = (techs: tech[]) => {
        return (
            techs && (techs.map((tech, index) => {
                switch (tech) {
                    case "React":
                        return this.renderLiTech(tech, "https://cdn.worldvectorlogo.com/logos/react.svg");
                    case "Java":
                        return this.renderLiTech(tech, "https://cdn.worldvectorlogo.com/logos/java-4.svg");
                    case "Ant design":
                        return this.renderLiTech(tech, "https://pbs.twimg.com/profile_images/938972621432950785/IlLvcIX6_400x400.jpg");
                    case "Elasticsearch":
                        return this.renderLiTech(tech, "https://cdn.worldvectorlogo.com/logos/elastic-elasticsearch.svg");
                    case "Firebase":
                        return this.renderLiTech(tech, "https://cdn.worldvectorlogo.com/logos/firebase-1.svg");
                    case "Grafana":
                        return this.renderLiTech(tech, "https://seeklogo.com/images/G/grafana-logo-15BA0AFA8A-seeklogo.com.png");
                    case "MySQL":
                        return this.renderLiTech(tech, "https://www.mysql.com/common/logos/logo-mysql-170x115.png");
                    case "Prometheus":
                        return this.renderLiTech(tech, "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Prometheus_software_logo.svg/115px-Prometheus_software_logo.svg.png");
                    case "NodeJS":
                        return this.renderLiTech(tech, "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png");
                    case "Unity":
                        return this.renderLiTech(tech, "https://cdn.worldvectorlogo.com/logos/unity-69.svg");
                    case "C#":
                        return this.renderLiTech(tech, "https://backtrace.io/wp-content/uploads/2018/05/C_logo-compressor-150x150.png");
                    case "Android Studio":
                        return this.renderLiTech(tech, "https://cdn.worldvectorlogo.com/logos/android.svg");
                    case "OpenGL":
                        return this.renderLiTech(tech, "https://www.opengl.org/img/OpenGL_100px_June16.png");
                    default:
                        return <></>
                }
            }))
        )
    }

    renderItem = (item: Block, index: number) => {
        const { actualBlock } = this.state;
        return (
            <div key={item.name}>
                <Col className="block" md={6} xs={24} onClick={() => this.setActualBlock(item === actualBlock ? undefined : item)}>
                    <div className="content-block-content page-pro" style={{ cursor: 'pointer' }}>
                        <span>
                            <img src={item.img} height="100%" alt="img" />
                        </span>
                        <ul className="techs-logo">
                            {this.renderTechnsLogo(item.techs)}
                        </ul>
                        <p>{item.title}</p>
                    </div>
                </Col>
                {this.showActualBlock(item, index)}
            </div>
        );
    }

    getChildrenToRender = (blocks: Block[]) => blocks.map((item, index) => this.renderItem(item, index));

    render() {
        const { id } = this.props;
        const { blocks, actualBlock } = this.state;
        const childrenToRender = this.getChildrenToRender(blocks);
        return (
            <div id={id} key={id} className="home-page-wrapper content-wrapper">
                <div key="home" className="home-page content">
                    <div key="title" className="title-wrapper">
                        <h1 className="title-h1">PROJETS</h1>
                    </div>
                    <OverPack className={`content-template`} playScale={0.3}>
                        <TweenOneGroup
                            component={Row}
                            key="ul"
                            enter={{
                                y: '+=30',
                                opacity: 0,
                                type: 'from',
                                ease: 'easeInOutQuad',
                            }}
                            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
                            className="content-img-wrapper projects"
                        >
                            <Row key="row" gutter={16}>
                                {childrenToRender}
                            </Row>
                        </TweenOneGroup>
                    </OverPack>
                </div>
            </div>
        );
    }
}
