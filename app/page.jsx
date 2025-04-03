"use client";
import { useEffect } from "react";
import { loadFull } from "tsparticles";

export default function HomePage() {
    useEffect(() => {
        const initParticles = async () => {
            const tsParticles = (await import("tsparticles")).tsParticles;
            await loadFull(tsParticles);
            tsParticles.load("particles-js", {
                particles: {
                    number: { value: 100 },
                    size: { value: 3 },
                    move: { enable: true, speed: 2 },
                    line_linked: { enable: true, distance: 150 },
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                    },
                },
            });
        };

        initParticles();
    }, []);

    return (
        <div className="space-y-8">
            {/* Hero Section with Particle Effects */}
            <div id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <canvas id="particles-js" className="absolute inset-0"></canvas>
                <div className="z-10 text-center text-white">
                    <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
                    <p className="text-xl mt-4">Showcasing my skills and projects</p>
                    <a href="#projects" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">
                        View My Work
                    </a>
                </div>
            </div>

            {/* Professional Summary Section */}
            <div className="space-y-8">
                <section>
                    <h2 className="text-3xl font-bold">Professional Summary</h2>
                    <p>
                        Pending graduate of Singapore Polytechnic with a strong foundation in Applied AI and Analytics. Passionate
                        about leveraging data science and machine learning to drive meaningful insights and industry innovations.
                        Experienced in customer service, administrative support, and teamwork through professional and
                        extracurricular activities. Proficient in AI-driven predictive modeling, time series analysis, and supervised
                        learning using tools like Scikit-learn, Keras, and TensorFlow. Fluent in English, Chinese, and elementary
                        Japanese.
                    </p>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-3xl font-bold">Education</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            <strong>Singapore Polytechnic</strong> - Diploma in Applied AI and Analytics (Apr 2023 – Apr 2026)
                            <ul className="list-disc pl-5">
                                <li>Coursework: Neural Networks, Time Series Analysis, Supervised Learning, Data Visualization</li>
                                <li>Tools & Technologies: Python, Scikit-learn, Keras, TensorFlow, Microsoft Power BI</li>
                                <li>Key Project: Stock Market Trend Prediction using AI models</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Jurongville Secondary School</strong> - O Levels (Jan 2019 – Nov 2022)
                            <ul className="list-disc pl-5">
                                <li>CCA: Badminton (National School Games Representative, CCA Committee Member)</li>
                                <li>Leadership: Assisted coaches and teachers in organizing events and managing students</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Work Experience Section */}
                <section>
                    <h2 className="text-3xl font-bold">Work Experience</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            <strong>Kitchen Food Server</strong> - HeyTea 喜茶 (Sep 2023 – Dec 2023)
                            <ul className="list-disc pl-5">
                                <li>Provided excellent customer service in a high-volume setting</li>
                                <li>Enhanced efficiency in kitchen operations and teamwork</li>
                                <li>Developed strong communication and problem-solving skills</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Healthcare Assistant</strong> - PanCare Medical Clinic (Dec 2022 – Mar 2023)
                            <ul className="list-disc pl-5">
                                <li>Managed administrative tasks and patient inquiries</li>
                                <li>Assisted in daily clinic operations and patient care</li>
                                <li>Improved multitasking and attention to detail in a fast-paced environment</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Certifications & Skills Section */}
                <section>
                    <h2 className="text-3xl font-bold">Certifications & Skills</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            <strong>Certifications:</strong>
                            <ul className="list-disc pl-5">
                                <li>Intermediate Data Visualization with Seaborn – DataCamp (Jan 2025)</li>
                                <li>Generative AI Concepts – DataCamp</li>
                                <li>Introduction to Deep Learning with Keras – DataCamp</li>
                                <li>Supervised Learning with Scikit-learn – DataCamp</li>
                                <li>Unsupervised Learning with Scikit-learn – DataCamp</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Technical Skills:</strong> Python (Pandas, NumPy, Scikit-learn, TensorFlow, Keras), Machine Learning,
                            Deep Learning, Time Series Analysis, Neural Networks, Power BI, Seaborn, Matplotlib
                        </li>
                        <li>
                            <strong>Languages:</strong> English (Fluent), Chinese (Fluent), Japanese (Elementary)
                        </li>
                    </ul>
                </section>

                {/* Projects & Achievements Section */}
                <section>
                    <h2 className="text-3xl font-bold">Projects & Achievements</h2>
                    <ul className="list-disc pl-5">
                        <li>
                            <strong>Stock Market Forecasting Project:</strong> Developed AI models for predicting stock trends using
                            time series analysis and supervised learning techniques.
                        </li>
                        <li>
                            <strong>AI-Powered SDG Hackathon:</strong> Participated in a computing science hackathon focused on
                            AI-driven solutions for Clean Water and Sanitation (SDG Goal 6).
                        </li>
                    </ul>
                </section>

                {/* Interests & Hobbies Section */}
                <section>
                    <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
                    <p>
                        Playing the piano, rock climbing, and video games – activities that enhance focus, problem-solving, and
                        adaptability.
                    </p>
                </section>
            </div>
        </div>
    );
}