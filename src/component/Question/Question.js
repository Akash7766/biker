import React from "react";

const Question = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-5">frequently asked questions</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fs-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How React Works?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-4">
                React is a very popular JavaScript library. Its a component
                based library. We can write like HTMl in js file which called
                JSX. React create a Virtual Dom when code is run. If any code /
                state changed then React compare Virtual Dom with Real Dom And
                find out where acctually changed. Then react simply re-render
                where needed. React use Usesate built in function for find out
                if any changed do. React helps developer life easier.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fs-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How useState Works?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-4">
                Use state Hooks is a react function. use state Hooks allows us
                pass a deafult value. We can keep a number or a string if that’s
                all we need. andIt returns a pair of values: the current state
                and a function that updates it. In a function component,we call
                the useState Hook directly inside our component.By using this
                Hook, you tell React that your component needs to do something
                after render.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
