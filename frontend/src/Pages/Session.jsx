// external import
import { Swiper, SwiperSlide } from "swiper/react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { BsFillMicFill } from "react-icons/bs";
import { PiStopFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../SessionName.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { setSessionData } from "../Store/Slices/SessionSlice";

const Session = () => {
  const [time, setTime] = useState({
    current: format(new Date(), "HH:mm"),
    isChange: false,
  });
  const [date, setDate] = useState(format(new Date(), "YYY-MM-dd"));
  const [name, setName] = useState("");
  const [isListening, setIsListensng] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  function handleSpeechRecognition(inputName) {
    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      if (inputName === "Name") setName(transcript);
    });
    recognition.start();
    setIsListensng(true);
  }

  function handleStopRecognition() {
    setIsListensng(false);
    recognition.stop();
  }

  recognition.addEventListener("end", () => setIsListensng(false));

  function handleStartGame(e) {
    e.preventDefault();
    if (name === "") return toast.warning("Fill The Session Name");

    const activeSlide = document.querySelector(".swiper-slide-active");
    const activeImg = activeSlide.querySelector("img");
    const activeImgName = activeImg.name;

    const sessionInfo = {
      sessionName: name,
      clientImgSrc: activeImgName,
      time: time.isChange ? time.current : format(new Date(), "HH:mm"),
      date: date,
      startGameTime: format(new Date(), "HH:mm:SS"),
    };
    dispatch(setSessionData(sessionInfo));

    navigate("/game");
  }

  const apiPath = import.meta.env.VITE_API;

  return (
    <div className="Session">
      <Swiper
        spaceBetween={-5}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src={`/aman_dream.png`}
            alt="aman_dream.png"
            name="aman_dream.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/bman_dream.png`}
            alt="bman_dream.png"
            name="bman_dream.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/bwimagine.png`}
            alt="bwimagine.png"
            name="bwimagine.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`/dream.png`} alt="dream.png" name="dream.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/wboy_imagine.png`}
            alt="wboy_imagine.png"
            name="wboy_imagine.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/wgirl_dream.png`}
            alt="wgirl_dream.png"
            name="wgirl_dream.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/wman_imagine.png`}
            alt="wman_imagine.png"
            name="wman_imagine.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`/wwoman_imagine.png`}
            alt="wwoman_imagine.png"
            name="wwoman_imagine.png"
          />
        </SwiperSlide>
      </Swiper>

      <div className="container d-flex align-items-center flex-column">
        <Form className="FormArea mt-5 p-5" onSubmit={handleStartGame}>
          <h1>Session Info</h1>
          <hr />
          <Form.Group className="mb-3" controlId="session_name">
            <Form.Label>Session name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                required
                placeholder="Session name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <InputGroup.Text style={{ background: "#182129" }}>
                {isListening ? (
                  <PiStopFill
                    color="red"
                    className="icon"
                    onClick={() => handleStopRecognition()}
                  />
                ) : (
                  <BsFillMicFill
                    color="white"
                    className="icon"
                    onClick={() => handleSpeechRecognition("Name")}
                  />
                )}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="session_name">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              value={time.current}
              onChange={(e) =>
                setTime({ current: e.target.value, isChange: true })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="session_name">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" onClick={handleStartGame}>
              Start Game
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Session;
