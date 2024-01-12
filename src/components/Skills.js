import { Container, Row, Col} from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const Skills = () => {
    const percentage_WD = 40;
    const percentage_ML = 80;
    const percentage_DL = 80;
    const percentage_AD = 40;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className = "skill" id = "skills">
            <Container>
                <Row>
                    <Col>
                    <div className = "skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <Carousel slidesToSlide={4} responsive={responsive} infinite = {true} className = "skills-slider">
                            <div className = "item">
                            <CircularProgressbar value={percentage_WD} text={`${percentage_WD}%`} styles = {buildStyles({
                              pathColor:`rgba(29, 99, 29)`,
                              textColor: '#fff',
                              trailColor: '#909090',
                  
                            })} /> <h5>Web Developer</h5>
                            </div>
                            <div className = "item">
                            <CircularProgressbar value={percentage_ML} text={`${percentage_ML}%`} styles = {buildStyles({
                              pathColor:`rgba(29, 99, 29)`,
                              textColor: '#fff',
                              trailColor: '#909090',
                            })}/> <h5>Machine Learning</h5>
                            </div>
                            <div className = "item">
                            <CircularProgressbar value={percentage_DL} text={`${percentage_DL}%`} styles = {buildStyles({
                              pathColor:`rgba(29, 99, 29)`,
                              textColor: '#fff',
                              trailColor: '#909090',
                            })}/> <h5>Deep Learning</h5>
                            </div>
                            <div className = "item">
                            <CircularProgressbar value={percentage_AD} text={`${percentage_AD}%`} styles = {buildStyles({
                              pathColor:`rgba(29, 99, 29)`,
                              textColor: '#fff',
                              trailColor: '#909090',
                            })}/> <h5>App Developer</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className = "background-image-left" src = {colorSharp}/> */}
        </section>
      )
}