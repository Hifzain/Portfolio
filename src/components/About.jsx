import React from "react";

export default function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12" name="About">
        <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">
          About Me
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hi, I'm <span className="font-semibold text-blue-600">Hifzain</span>,
          a full-stack web developer from Pakistan with a Bachelor's in Computer
          Science. I build responsive, scalable websites using{" "}
          <span className="font-medium">
            Django, Python, React, HTML, CSS, and JavaScript
          </span>
          .
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          From crafting clean UI's to developing powerful back-end systems, I
          focus on delivering efficient and user-friendly solutions.
          <br />
          <span className="font-semibold text-blue-600">
            Let’s bring your ideas to life!
          </span>
        </p>

        <h2 className="text-blue-600 font-semibold text-xl mb-3">Education</h2>
        <p className="text-lg text-gray-700 mb-8">
          <span className="font-medium">BSCS (2021-2025)</span> – FUUAST,
          Islamabad, Pakistan
        </p>
      </div>
      <hr className="border-gray-200" />
    </>
  );
}
