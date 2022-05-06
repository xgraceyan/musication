import React from "react";

const QuizModal = ({ score }) => {
  return (
    <div
      className="modal fade"
      id="quizModal"
      data-bs-keyboard="false"
      data-bs-backdrop="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              <strong>Good Job!</strong>
            </h5>
          </div>
          <div className="modal-body">
            You scored a <strong>{score}/6</strong> on this quiz!
          </div>
          <div className="modal-footer">
            <a className="btn btn-secondary" href="../musication">
              Back to home
            </a>
            <a className="btn btn-primary" href="../musicationquiz">
              Try again
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
