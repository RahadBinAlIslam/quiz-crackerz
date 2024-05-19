import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>Q&A</h2>
      <h3>Q: What is the purpose of react router?</h3>
      <p>
        Ans: The purpose of react router is to define routes for a multiple page
        web application. It makes browsing seamless as the website becomes a
        single page application rather than waiting for each page to load.
      </p>
      <h3>Q: How does context API work?</h3>
      <p>
        Ans: Context API works by enabling the user to pass multiple values very
        easily through writing one single line of code rather than using
        useEffect and writing many lines of codes.
      </p>
      <h3>Write few sentences about useRef.</h3>
      <p>
        Ans: useRef is a React Hook that lets you reference a value that’s not
        needed for rendering. useRef returns a ref object with a single current
        property initially set to the initial value provided. By using a ref, we
        ensure that: We can store information between re-renders (unlike regular
        variables, which reset on every render). Changing it does not trigger a
        re-render (unlike state variables, which trigger a re-render). The
        information is local to each copy of your component (unlike the
        variables outside, which are shared).
      </p>
    </div>
  );
};

export default Blog;
