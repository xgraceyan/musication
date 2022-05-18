import React, { Component } from "react";
import $ from "jquery";

import QuizModal from "./QuizModal";

class Quiz extends Component {
  state = {
    q1: "A",
    q2: "A",
    q3: "A",
    q4: "A",
    q5: "A",
    q6: "A",
    correctAmt: -1,
  };

  correctAnswers = ["B", "C", "B", "A", "C", "A"];

  // toggles modal for quiz result
  toggleModal = () => {
    $("#quizModal")
      .addClass("show")
      .css("display", "block");
    $("#quiz-section").addClass("frozen");

    // removes scroll element & replaces it with child section
    $("#root-section").replaceWith(function() {
      return $("#quiz-page", this);
    });
  };

  // update state every time an answer is changed
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  // update quiz score to state
  handleSubmitUpdate = (correctCount) => {
    this.setState({
      correctAmt: correctCount,
    });
    this.toggleModal();
  };

  // quiz submission handler
  handleSubmit = (e) => {
    e.preventDefault();
    var correctCount = 0;

    for (var i = 1; i <= Object.keys(this.state).length - 1; i++) {
      // count how many questions are correct
      const questionNum = "q" + i;
      if (this.state[questionNum] === this.correctAnswers[i - 1]) {
        correctCount++;
      }
    }

    // send score to state & show modal
    this.handleSubmitUpdate(correctCount);
  };

  render() {
    return (
      <div className="bg-light-gray" id="quiz-page">
        <div id="quiz-section">
          <section className="bg-image-alt" id="quiz-title-section">
            <div className="container section-container title-container">
              <h1
                className="section-header text-center"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Quiz!
              </h1>
            </div>
          </section>
          <section
            id="quiz-content-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="container section-container" id="quiz-video">
              <p className="text-white text-center">
                <strong>Quiz Video</strong> <br />
                Sergei Rachmaninoff - Symphonic Dances Op. 45
                <br />
                Radio Filharmonisch Orkest (Edward Gardner)
              </p>
              <iframe
                src="https://www.youtube.com/embed/otJmf3pyb1E"
                title="Quiz Video"
                width="80%"
                height="500px"
              ></iframe>
            </div>
            <div
              className="container title-container"
              id="quiz-form-container"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="section-header text-center">Questions</h1>
              <form id="quiz-form" className="text-white">
                <div className="mb-3" id="q1-select">
                  <label for="q1" className="form-label">
                    1. What instrument is playing the solo at 3:00? (Quiz Video)
                  </label>
                  <select
                    className="form-select"
                    id="q1"
                    onChange={this.handleChange}
                  >
                    <option value="A">A - Piccolo</option>
                    <option value="B">B - Oboe</option>
                    <option value="C">C - Bassoon</option>
                    <option value="D">D - Clarinet</option>
                  </select>
                </div>
                <div className="mb-3" id="q2-select">
                  <label for="q2" className="form-label">
                    2. What instrument is playing at 12:13? (Quiz Video)
                  </label>
                  <select
                    className="form-select"
                    id="q2"
                    onChange={this.handleChange}
                  >
                    <option value="A">A - French Horn</option>
                    <option value="B">B - Trombone</option>
                    <option value="C">C - Trumpet</option>
                    <option value="D">D - Saxophone</option>
                  </select>
                </div>
                <div className="mb-3" id="q3-select">
                  <label for="q3" className="form-label">
                    3. The saxophone is a ______ instrument. (Type)
                  </label>
                  <select
                    className="form-select"
                    id="q3"
                    onChange={this.handleChange}
                  >
                    <option value="A">A - Brass</option>
                    <option value="B">B - Woodwind</option>
                    <option value="C">C - Strings</option>
                    <option value="D">D - Jazz</option>
                  </select>
                </div>
                <div className="mb-3" id="q4-select">
                  <label for="q4" className="form-label">
                    4. What allows the trombone to change the pitch of its
                    sound?
                  </label>
                  <select
                    className="form-select"
                    id="q4"
                    onChange={this.handleChange}
                  >
                    <option value="A">A - Sliding mechanism</option>
                    <option value="B">B - Valves</option>
                    <option value="C">C - Keys</option>
                    <option value="D">D - Tubes</option>
                  </select>
                </div>
                <div className="mb-3" id="q5-select">
                  <label for="q5" className="form-label">
                    5. This string instrument is the national symbol of Ireland.
                  </label>
                  <select
                    className="form-select"
                    id="q5"
                    onChange={this.handleChange}
                  >
                    <option value="A">A - Violin</option>
                    <option value="B">B - Viola</option>
                    <option value="C">C - Harp</option>
                    <option value="D">D - Cello</option>
                  </select>
                </div>
                <div className="mb-3" id="q6-select">
                  <label for="q6" className="form-label">
                    6. What percussion instrument is playing at 22:20? (Quiz
                    Video) *bonus question!
                  </label>
                  <select
                    className="form-select"
                    id="q6"
                    onChange={this.handleChange}
                  >
                    <option value="A">A - Timpani</option>
                    <option value="B">B - Piano</option>
                    <option value="C">C - Triangle</option>
                    <option value="D">D - Snare</option>
                  </select>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto" id="formButton">
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <QuizModal score={this.state.correctAmt} />
      </div>
    );
  }
}

export default Quiz;
