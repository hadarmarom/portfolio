import "@lottiefiles/lottie-player";
import Typed from "react-typed";

const About = () => {
    return (
        <div id="about" className="about-container container">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_i0dv6y4w.json" background="transparent" speed="1" style={{ width: '18.75rem', height: '18.75rem' }} loop autoplay></lottie-player>
            <div className="about-content">
                <p>Full Stack Web Developer, passionate about programming and Web development.</p>
                {/* <p>with experience in writing single-page-applications</p> */}
                <p>Experienced in writing single-page-applications using latest WEB technologies:</p>
                <Typed className="typed-txt"
                    strings={["Node.js", "Vue.js", "Vuex", "React", "Redux", "Angular", "Mongo-Db", "MySQL"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                {/* <p>Have to replace react native with angular, add MySQL</p> */}

                <p className="par">Passionate about problem solving, with a strong work ethic and quick thinking</p>
                <p>Self-learner and a team player with excellent interpersonal skills and a positive “can do” attitude</p>
            </div>
        </div>
    )
}

export default About