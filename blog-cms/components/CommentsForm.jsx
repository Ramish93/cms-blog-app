import React, { useRef, useState, useEffect } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {};

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4"></h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          name="comment"
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring -2 focus:ring-gray-200 bg-gray-200 text-gray-700"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring -2 focus:ring-gray-200 bg-gray-200 text-gray-700"
        />
        <input
          type="text"
          ref={emailEl}
          placeholder="Email Address"
          name="email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring -2 focus:ring-gray-200 bg-gray-200 text-gray-700"
        />
      </div>
      {error && <p className="text-xs text-red-600">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-400 ease hover:bg-green-500 inline-block rounded-full text-white bg-pink-600 py-2 px-2 cursor-pointer"
        >
          Post comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl fload-right font-semibold text-green-500">
            Comment Submitted for review
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
    </div>
  );
};

export default CommentsForm;
