import project1 from "../assets/projects/original_project1.png";
import project2 from "../assets/projects/original_project2.png";
import project3 from "../assets/projects/original_project3.jpg";

export const HERO_CONTENT = `A diligent and driven individual, I bring a strong work ethic and passion to every endeavor. As a problem solver, I thrive on challenges and am adept at thinking creatively and outside the box. Committed to achieving excellence, I approach tasks with enthusiasm and determination, seeking innovative solutions to complex problems.`;

export const ABOUT_TEXT = `I am a motivated and adaptable machine learning intern with a strong foundation in developing data-driven solutions. With hands-on experience in implementing various machine learning algorithms and models, I have worked with tools and libraries such as Python, TensorFlow, scikit-learn, and Pandas. My journey in machine learning started with a fascination for how data can drive insights and decisions, leading me to explore and apply complex algorithms to real-world problems. I thrive in collaborative environments, where I can contribute to innovative projects and learn from experienced professionals. Outside of work, I enjoy expanding my knowledge of AI/ML trends, exploring new datasets, and participating in hackathons to sharpen my skills.`;

export const EXPERIENCES = [
  {
    period: "June 2024 - July 2024",
    role: "Data Science Intern",
    company: "Unified Mentor Pvt Ltd",
    description: `I was responsible for conducting a comprehensive analysis of crop production across India, utilizing tools such as Python and Power BI. The analysis involved evaluating key agricultural metrics, including the total crop yield per state and the hectares of land allocated for crop cultivation. The findings were presented through detailed visualizations and reports, providing insights into regional agricultural trends and resource utilization.`,
    technologies: ["Powerbi", "Python",],
  },
  {
    period: "August 2024 - September 2024",
    role: "Machine Learning Intern",
    company: "Nexus Info",
    description: `I was tasked with developing a simple chatbot capable of retaining conversation history, enhancing its ability to engage in continuous dialogue. Additionally, I designed and implemented a user-friendly frontend interface to improve the overall user experience. In a subsequent project, I developed a specialized chatbot that could provide accurate responses related to college admissions, utilizing information extracted from an uploaded PDF document.`,
    technologies: ["Python", "Streamlit"],
  },
  
];

export const PROJECTS = [
  {
    title: "Chatbot",
    image: project1,
    description:
      "I developed a chatbot that remembers previous interactions, enabling more coherent and personalized conversations by maintaining context throughout the dialogue.",
    technologies: ["Python", "Streamlit"],
  },
  {
    title: "Multiple Disease Prediction",
    image: project2,
    description:
      "Developed a machine learning model capable of predicting multiple diseases namely Breast Cancer, Heart Disease, Parkinson's Disease and Diabetes, based solely on medical values, without the need for image analysis.",
    technologies: ["Python", "Streamlit", "Pandas", "Numpy"],
  },
  {
    title: "Rep Counter",
    image: project3,
    description:
      "Developed an innovative fitness application that utilizes computer vision technology to count repetitions for various exercises in real-time. This project leverages the device's camera to provide users with accurate tracking of their workout progress.",
    technologies: ["Python", "OpenCV"],
  },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 8722215969 ",
  email: "kennethdsouza2004@gmail.com",
};
