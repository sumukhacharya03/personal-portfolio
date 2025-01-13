"use client"; // Mark the file as a client component

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState("home");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-[-120px]">
        {/* Navigation Section */}
        <nav className="w-full flex justify-center sm:justify-start gap-8 mb-12 ">
          <button
            onClick={() => setSection("home")}
            className={`text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              section === "home" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Home
          </button>
          <button
            onClick={()=> setSection("aboutme")}
            className={`text-lg font-semibold ${
              section === "aboutme" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setSection("projects")}
            className={`text-lg font-semibold ${
              section === "projects" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setSection("work-experience")}
            className={`text-lg font-semibold ${
              section === "work-experience" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setSection("achievements")}
            className={`text-lg font-semibold ${
              section === "achievements" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setSection("photography")}
            className={`text-lg font-semibold ${
              section === "photography" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Photography
          </button>
          <button
            onClick={() => setSection("contact")}
            className={`text-lg font-semibold ${
              section === "contact" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Contact Me
          </button>
        </nav>

        {/* Profile Section */}
        {section === "home" && (
          <section className="flex flex-col items-center sm:items-start text-center sm:text-left mt-[-40px]">
            <Image
              src="/me.jpg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full transition-all duration-300 hover:scale-110"
            />
            <h1 className="text-white-600 text-2xl sm:text-4xl font-bold mt-4">
              Hello, I'm Sumukh Acharya
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
            <b className="text-[#4DAFFF]">Bangalore, KA</b><br></br>
            I am a 6th-semester Computer Science Engineering student at PES University. I am passionate about
            topics such as Data Analytics, Machine Learning, and Databases. I love playing around with Data.
            Outside of academics, I enjoy playing chess and badminton, and I have passion for photography. I
            possess strong qualities in teamwork, communication, problem-solving, and a genuine eagerness to
            learn new things.
            </p>
          </section>
        )}

        {/* About Me Section */}
        {section === "aboutme" && (
          <section className="w-full mt-[-20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Education */}
              <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mt-2">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                <div className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <b>Sri Kumaran Children's Home (2009-2020)</b><br />
                Class 1-10<br />
                Bengaluru, Karnataka<br />
                CBSE Class 10 - 90%
                </div>
                <div className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <b>BASE PU College (2020-2022)</b><br />
                1st PUC to 2nd PUC<br />
                Bengaluru, Karnataka<br />
                PUC Class 12 - 95%
                </div>
                <div className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <b>PES University (2022-2026)</b><br />
                B-Tech, Computer Science Engineering<br />
                Bengaluru, Karnataka<br />
                CGPA: 7.4
                </div>
              </div>
              </div>
              {/* Skills */}
              <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mt-2">
                Skills
              </h3>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Programming Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Python</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">C</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Web Development:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">HTML</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">CSS</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">JavaScript</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Next.js</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">React</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Git</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">GitHub</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">VS Code</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">OS:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Windows</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Ubuntu Linux</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Databases:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">MySQL</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Other Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Blender</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Hadoop</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Kafka</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Spark</span>
                </div>
              </div>
              </div>
              {/* Languages */}
              <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mt-2">
                Languages
              </h3>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">English</span>
                  <span className="px-2 py-1 border rounded-md bg-white text-gray-800 shadow-sm transition-transform duration-300 hover:-translate-y-1">Konkani</span>
                </div>
              </div>
              </div>
            </div>
          </section>
        )
        }

        {/* Projects Section */}
        {section === "projects" && (
          <section className="w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                <Image
                  src="/DFOS.png"
                  alt="DFOS"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-medium mt-2">
                  DFOS (Distributed File Orchestration and Synchronization for
                  Linux)
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  <li>
                    Designed and implemented a multi-client file transfer system
                    using a client-server model in Python.
                  </li>
                  <li>
                    The server authenticates clients, allows them to upload,
                    download, view and delete files from the server-side
                    directory.
                  </li>
                  <li>
                    Integrated server handling for safe shutdown and data
                    integrity using SIGINT.
                  </li>
                  <li>
                    Ensured data integrity and security through directory
                    isolation and path validation.
                  </li>
                </ul>
                <a
                  href="https://github.com/sumukhacharya03/DFOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Project →
                </a>
              </div>

              {/* Project 2 */}
              <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                <Image
                  src="/lung_cancer_ml.png"
                  alt="Project 2"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-medium mt-2">Lung Cancer ML</h3>
                <div className="text-sm text-gray-600">
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>
                    Utilized a synthetic medical dataset with 22,811 patient records and 788 health parameters, filtered and reduced to 89 key features using advanced techniques like PCA, BSO, RFE, and SelectKBest.
                    </li>
                    <li>
                    Trained XGBoost, SVM, CatBoost, and KNN models on transformed datasets with 5-fold cross-validation, focusing on accuracy and recall.
                    </li>
                    <li>
                    An ensemble model combining individual outputs achieved top metrics, with RFE-based feature selection delivering the highest accuracy (98.746%) and recall (96.245%).
                    </li>
                    <li>
                    Demonstrated the potential of machine learning for early lung cancer detection, improving survival rates, and reducing healthcare costs.
                    </li>
                  </ul>
                </div>
                <a
                  href="https://github.com/sumukhacharya03/Lung-Cancer-ML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Project →
                </a>
              </div>

              {/* Project 3 */}
              <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                <Image
                  src="/sports.png"
                  alt="Project 3"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-medium mt-2">
                  Sports Equipment Rental Management System
                </h3>
                <div className="text-sm text-gray-600">
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>
                    Developed a system which allows students to browse, select and rent/reserve sports equipments
                    in universities, and the admin tracks everything.
                    </li>
                    <li>
                    I developed this system using MySQL, python and Streamlit.
                    </li>
                  </ul>
                </div>
                <a
                  href="https://github.com/sumukhacharya03/Sports-Rental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Project →
                </a>
              </div>
                {/* Project 4 */}
                <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                <Image
                  src="/streamly.png"
                  alt="Project 4"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-medium mt-2">
                Streamly Content Performance Analysis
                </h3>
                <div className="text-sm text-gray-600">
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    <li>
                    Streamly is a leading online streaming platform with millions of subscribers. The company has a
                    rich dataset containing detailed information about its content library, including movies and
                    series.
                    </li>
                    <li>
                    I analyzed this data using various techniques to identify which types of content perform the best
                    and how to optimize the release strategy to maximize user retention. I employed methods such as
                    data preprocessing and visualizations (e.g., heatmaps, boxplots, and histograms) to process the
                    data. Additionally, I applied predictive models like Multiple Linear Regression (MLR) and
                    Random Forest Regression (RFR) to evaluate the datasets, along with inferences.
                    </li>
                  </ul>
                </div>
                <a
                  href="https://github.com/sumukhacharya03/Streamly-Content-Strategy-Optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Project →
                </a>
              </div>
              <div>
                {/* Project 5 */}
                <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                  <Image
                    src="/ride_fare.png"
                    alt="Project 4"
                    width={400}
                    height={200}
                    className="rounded-md"
                  />
                  <h3 className="text-lg font-medium mt-2">
                  RideWave Fare Forecasting
                  </h3>
                  <div className="text-sm text-gray-600">
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>
                      RideWave is an urban mobility service based in Quahog City, offering three types of vehicles:
                      bikes, autos, and cars. The company has a rich dataset containing hourly data from 2021 to 2023.
                      </li>
                      <li>
                      I analyzed this data using various techniques to help RideWave implement dynamic pricing
                      through data visualization and forecasting methods. I employed data preprocessing and
                      visualizations (e.g., heatmaps, boxplots, and histograms) to process the data. Additionally, I
                      applied predictive models such as XGBoost, SARIMAX, and VAR to evaluate the datasets and
                      draw meaningful insights.
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://github.com/sumukhacharya03/Fare-Forecasting-in-Quahog-City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                      View Project →
                    </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Work Experience Section */}
        {section === "work-experience" && (
          <section className="w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              My Internships
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Internship 1 */}
              <div className="p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500">
                <Image
                  src="/codmav.png"
                  alt="CODMAV"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <h3 className="text-lg font-medium mt-2">
                CODMAV(Center of Data Modelling and Visualization)PESU
                </h3>
                <ul className="list-disc pl-5 text-sm text-grey-600">
                  <li>
                    Role:<b>Intern</b>
                  </li>
                  <li>
                    Duration: 2/06/2024 to 2/08/2024
                  </li>
                  <li>
                    Along with three teammates, I worked on a machine learning project titled "Predictive
                    Analytics for Early Lung Cancer Risk Using Machine Learning".
                  </li>
                  <li>
                    My role involved preprocessing the
                    dataset using various techniques, applying feature selection algorithms, implementing machine learning
                    models on the transformed datasets, and visualizing the results through tables, graphs, and other methods.
                  </li>
                  <li>
                    During this period, I conducted thorough research on these topics to gain a deep understanding of the
                    concepts for the smooth implementation of our project.
                  </li>
                  <li>
                    We used Python for the project and learned to work with various Python libraries, including Scikit-learn,
                    Pandas, Numpy, and more. The models we applied included XGBoost, CatBoost, SVM, KNN, and an
                    Ensemble Model.
                  </li>
                </ul>
                <a
                  href="/Internship_Research_Paper.pdf"
                  download="Internship_Research_Paper.pdf"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Research Paper →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {section === "achievements" && (
          <section className="w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Hackathons
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-lg">Placed 7th in Data Analytics Kaggle Hackathon</li>
              <li className="text-lg">Placed 19th in Data Analytics Kaggle Hackathon</li>
              <li className="text-lg">Placed 5th in ML Kaggle Hackathon</li>
              <li className="text-lg">Participated in other Hackathons like Ingenious, Hacknight etc.</li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Certificates
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-lg">Learn Photorealism with Blender 4-week Course</li>
              <a
              href="/Blender_Certificate.pdf"
              download="Blender_Certificate.pdf"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <u>Certificate</u>→
              </a>
              <li className="text-lg">HackerRank Certificate for Problem Solving (Intermediate)</li>
              <a
              href="/Hackerank_Problem_Solving_Certificate.pdf"
              download="Hackerank_Problem_Solving_Certificate.pdf"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <u>Certificate</u>→
              </a>
              <li className="text-lg">HackerRank Certificate for Java (Basic)</li>
              <a
              href="/Hackerank_Java_Certificate.pdf"
              download="Hackerank_Java_Certificate.pdf"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <u>Certificate</u>→
              </a>
            </ul>
          </section>
        )}

        {/* Photography Section */}
        {section === "photography" && (
          <section className="w-full mt-[-20px]">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Few of my Best Clicks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Click 1 */}
              <div className="overflow-hidden rounded-md"> 
              <Image
                  src="/click-1.jpg"
                  alt="Click-1"
                  width={400}
                  height={200}
                  className="rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Click 2 */}
              <div className="overflow-hidden rounded-md"> 
              <Image
                  src="/click-2.jpg"
                  alt="Click-2"
                  width={400}
                  height={200}
                  className="rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Click 3 */}
              <div className="overflow-hidden rounded-md"> 
              <Image
                  src="/click-3.jpg"
                  alt="Click-3"
                  width={400}
                  height={200}
                  className="rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Click 4 */}
              <div className="relative -top-40"> 
                <div className="overflow-hidden rounded-md">
                    <Image
                      src="/click-4.jpg"
                      alt="Click-4"
                      width={400}
                      height={200}
                      className="rounded-md transition-all duration-300 hover:scale-110"
                />
                </div>
              </div>
              {/* Click 5 */}
              <div className="relative -top-40"> 
                <div className="overflow-hidden rounded-md">
                    <Image
                      src="/click-5.jpg"
                      alt="Click-5"
                      width={400}
                      height={200}
                      className="rounded-md transition-all duration-300 hover:scale-110"
                />
                </div>
              </div>
              {/* Click 6 */}
              <div className="overflow-hidden rounded-md"> 
              <Image
                  src="/click-6.jpg"
                  alt="Click-6"
                  width={400}
                  height={200}
                  className="rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {section === "contact" && (
          <section className="w-full mt-[-40px]">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Contact Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Feel free to reach out to me for collaborations or any queries !!
            </p>
            <div className="mt-4">
              <p className="text-gray-600 transition-colors duration-300 hover:text-blue-600">Phone: +91 99724 54072</p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:sumukh.acharya@gmail.com"
                  className="text-blue-600"
                >
                  <u>sumukh.acharya@gmail.com</u>
                </a>
              </p>
            </div>
            <a
              href="mailto:sumukh.acharya@gmail.com"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
            >
              Email Me
            </a>
          </section>
        )}
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:-translate-y-1"
          href="https://github.com/sumukhacharya03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="GitHub Icon"
            width={16}
            height={16}
          />
          <u>GitHub</u>
        </a>
        <a
          className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:-translate-y-1"
          href="https://www.linkedin.com/in/sumukh-acharya-6859ab312/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn Icon"
            width={16}
            height={16}
          />
          <u>LinkedIn</u>
        </a>
        <a
          className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:-translate-y-1"
          href="https://vsco.co/sumukhacharya/gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vsco.png"
            alt="VSCO Icon"
            width={16}
            height={16}
          />
          <u>VSCO</u>
        </a>
        <a
          href="/Sumukh_Acharya_Resume.pdf"
          download="Sumukh_Acharya_Resume.pdf"
          className="flex items-center gap-2 transition-all duration-300 hover:text-blue-500 hover:-translate-y-1"
        >
          <Image
            src="/resume.jpg"
            alt="Resume Icon"
            width={16}
            height={16}
          />
          <u>Resume</u>
        </a>
      </footer>
    </div>
  );
}
