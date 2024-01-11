import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg  from "../assets/img/header-img.svg";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Novice Web Developer","Machine Learning","Deep Learning","Novice App Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setisDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs = {7} md = {6} xl ={7} >
                        <span className = "tagline">Welcome to my Portfolio</span>
                        <h1> { "Hi I'm Kenneth Dsouza " }
                        <p></p><span className="wrap">{text}</span></h1>
                        <p>jkhbvk jfehbv efkjh vbdjkbv dbvbvjh sbvsjb hvkjhb aksjfhbvk jsahbvfk jhs afbv hybrukh bvjkdsh bvkj dhs bfvjh shjbvsjbvdj dhjfbv dvbd vdbvbhbdj bvbehbe hbvdv jhfbeh egb ehbg ebgjfhgb  hbgjbg g jdhbv dfjvbv eu gfdvbfkg bdskjg fheuyfgh hvbeugb euhbeuyg evbg eu ehbeug ehj bveug bue vbeffvb e</p>
                        <button onClick = {() => console.log('connect')}>Let's connect! <ArrowRightCircle size = {25}/></button>
                    </Col>
                    <Col xs = { 5 } xm = {6} xl = {5}>
                        <img src = {headerImg} alt = "Header img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner;