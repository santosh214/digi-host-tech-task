import React from 'react';

export default function NewsLetter() {
  return (
    <>
      <div className="container -fluid">
        <div className="row d-flex justify-content-center mx-4 ms-5">
          <div className="col  pt-5 newsLetterCol position-relative  ">
            <h2>Subscribe Our NewsLetters</h2>
            <p className="w-75 pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore debitis id eius temporibus officiis asperiores amet qui.
              Sit aperiam repellat, quaerat quod, dolores omnis sed odio tempora
              ipsa fuga nemo?
            </p>
            <div className="position-absolute ladyImgdiv">
              <img src="./assets/lady.png" alt="lady" />
            </div>
            <div className="inputBtn">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
