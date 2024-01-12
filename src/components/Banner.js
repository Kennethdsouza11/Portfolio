
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg  from "../assets/img/header-img.svg";
import { TypeAnimation } from 'react-type-animation';
export const Banner = () => {
    

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Novice Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Machine Learner',
        1000,
        'Deep Learner',
        1000,
        'Novice App Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '65px', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {7} md = {6} xl ={7} >
                        {/* <span className = "tagline">Welcome to my Portfolio</span> */}
                        <h1> { "Hi I'm Kenneth Dsouza " }
                        <p></p><span className="wrap">{ExampleComponent()}</span></h1>
                        <p>jkhbvk jfehbv efkjh vbdjkbv dbvbvjh sbvsjb hvkjhb aksjfhbvk jsahbvfk jhs afbv hybrukh bvjkdsh bvkj dhs bfvjh shjbvsjbvdj dhjfbv dvbd vdbvbhbdj bvbehbe hbvdv jhfbeh egb ehbg ebgjfhgb  hbgjbg g jdhbv dfjvbv eu gfdvbfkg bdskjg fheuyfgh hvbeugb euhbeuyg evbg eu ehbeug ehj bveug bue vbeffvb e</p>
                        <button onClick = {() => console.log('connect')}>Let's connect! <ArrowRightCircle size = {25}/></button>
                    </Col>
                    <Col xs = { 5 } xm = {6} xl = {5}>
                        {/* <img src = {headerImg} alt = "Header img" /> */}
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner;