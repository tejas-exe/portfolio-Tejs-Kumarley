import TypingEffect from "../Components/UiUx/typingEffect";
import image from "../Assets/icons8-react-500.png";
import "./VisitorHome.css";
import VisitorSkill from "../Components/Lists/VisitorSkill";
import { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import contactMe from "../Assets/subscribe.svg";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Home = () => {
  const [skill, setSkill] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [initialFetch, setInitialFetch] = useState(false);
  const [optimumAerr, setOptimumArr] = useState([]);
  const [textCopied, setTextCopied] = useState(true);
  const [status, setStatus] = useState("Lets Connect");
  const [mailDetail, setMailDetail] = useState({
    email: "kumarley.tejas7@gmail.com",
    subject: "",
    contactDetails: "",
    htmlBody: "",
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      if (searchParams.get("letsConnect") === "true") {
        const targetSection = document.getElementById("targetSection");
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, []);

  const resumeHandler = () => {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vTjIq7FQv_oo7moQrN1c8Z9648WB6TcCm4Qm6POPXqmvk_z-UO_c60OPS2xZLGN2DY6Xs9OPBX0SfdV/pub",
      "_blank"
    );
  };
  useEffect(() => {
    const fechSkills = async () => {
      const response = await fetch(
        "https://portfolio-b117d-default-rtdb.firebaseio.com/learnedSkill.json"
      );
      let res = await response.json();
      if (!res) {
        setOptimumArr([]);
      } else {
        res = Object.entries(res).map((item) => ({
          id: item[0],
          skill: item[1].skill,
        }));
        setInitialFetch(true);
        setOptimumArr(res);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedSkills = res.slice(startIndex, endIndex);
        setSkill(paginatedSkills);
      }
    };
    if (initialFetch == false) {
      fechSkills();
    } else {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      if (endIndex > optimumAerr.length) {
        const startIndex = 0;
        const endIndex = itemsPerPage;
        setCurrentPage(1);
        const paginatedSkills = optimumAerr.slice(startIndex, endIndex);
        setSkill(paginatedSkills);
      } else {
        const paginatedSkills = optimumAerr.slice(startIndex, endIndex);
        setSkill(paginatedSkills);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      handlePageChange("next");
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage]);

  const handlePageChange = (action) => {
    // console.log("<<>><<>>");
    if (action === "next") {
      setCurrentPage(currentPage + 1);
    }
    if (action === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const sendMail = async () => {
  
    const mailingBody = {
      email: "kumarley.tejas7@gmail.com",
      subject: mailDetail.subject,
      htmlBody: mailDetail.contactDetails + "==>" + mailDetail.htmlBody,
    };
    try {
      setStatus("Sending...");
      const response = await fetch(
        "https://nodemailer-h22h.onrender.com/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailingBody),
        }
      );
      if (!response.ok) {
        throw new Error("API request failed.");
      }
      const result = await response.json();
      setStatus("Sent...");
      setMailDetail({
        email: "kumarley.tejas7@gmail.com",
        subject: "",
        contactDetails: "",
        htmlBody: "",
      });
      setTimeout(() => {
        setStatus("Lets Connect");
      }, 3000);
    } catch (error) {
      setMailDetail("Error :(");
      setStatus(() => {
        setStatus("Lets Connect");
      }, 3000);
      console.error(error);
    }
  };

  const nameChangeHadler = (event) => {
    setMailDetail({
      ...mailDetail,
      subject: `${event.target.value} is intrested in your profile :)`,
    });
  };
  const contactChangeHandler = (event) => {
    setMailDetail({
      ...mailDetail,
      contactDetails: `${event.target.value}`,
    });
  };
  const descriptionChangeHandler = (event) => {
    setMailDetail({ ...mailDetail, htmlBody: `${event.target.value}` });
  };

  const handleCopy = () => {
    const textToCopy = "+916354352713"; // Replace with the text you want to copy
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setTextCopied(false);

        setTimeout(() => {
          setTextCopied(true);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  return (
    <div className="introDiv">
      <div className="typing-div">
        <div>
          <h1>I am Web Developer </h1>
          <TypingEffect />
          <button className="neon-button" onClick={resumeHandler}>
            View my resume
          </button>
          <div className="linkInfo">
            <div className="social-links">
              <a href="#" className="social-link">
                <FaWhatsapp onClick={handleCopy} />
              </a>
              <a href="https://github.com/tejas-exe" className="social-link">
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/forty_winks369?igshid=MmIzYWVlNDQ5Yg=="
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-kumarley-324475220"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
            {!textCopied && <p>Phone no. copied</p>}
          </div>
        </div>
        <img src={image} alt="react image" className="banner-Image" />
      </div>
      <div className="bannerList">
        <div className="project-root">
          <NavLink to={"/projects"} className="link">
            <p>Project`s & Experiance</p>
          </NavLink>
          <NavLink to={"/aboutMe"} className="link">
            <p>About me :)</p>
          </NavLink>
        </div>
      </div>
      <div className="vSkill">
        {skill.map((item) => (
          <VisitorSkill skill={item.skill} key={item.id} />
        ))}
      </div>

      <div className="contact-div">
        <div>
          <img
            src={contactMe}
            alt="react image"
            className="banner-Image next-img"
          />
        </div>
        <div className="contactMeContent">
          <div className="glass-input contentOrganization">
            <input
              type="text"
              placeholder="your Full Name"
              className="dist-ipt"
              onChange={nameChangeHadler}
              required
            />
            <input
              type="text"
              placeholder="your Contavt Info."
              className="dist-ipt"
              onClick={contactChangeHandler}
            />
            <textarea
              placeholder="Enter text area"
              className="txtArea dist-ipt"
              rows={8}
              onChange={descriptionChangeHandler}
              value={mailDetail.htmlBody}
            ></textarea>
            <button
              className="button-connect dist-ipt"
              onClick={sendMail}
              id="targetSection"
            >
              {status}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
