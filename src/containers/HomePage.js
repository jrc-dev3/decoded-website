import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AWS_API_KEY = process.env.AWS_API_KEY || ""

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Coding is the now & the",
      buttonText: "submitForm",
      validationStyle: {},
    };
    this.updateHeader = this.updateHeader.bind(this);
    this.startClicked = this.startClicked.bind(this);
    this.resize = this.resize.bind(this);
  }

  startClicked() {
    console.log("triggered");
  }

  resize(element) {
    // element.style.height = "5px";
    // element.style.height = (element.scrollHeight)+"px";
    // console.log(element.style.height)
  }

  validate = (email) => {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  };

  handleInputChange = (event) => {
    const state = this.state;
    const that = this;

    this.setState({
      [event.target.name]: event.currentTarget.value,
    });

    if (event.target.name === "email") {
      let emailValue = event.currentTarget.value;
      setTimeout(function () {
        if (!that.validate(emailValue) && emailValue) {
          that.setState({
            validationStyle: {
              borderStyle: "solid",
              borderColor: "red",
              borderWidth: "thin",
            },
          });
        } else {
          that.setState({ validationStyle: {} });
        }
      }, 1000);
    }
  };

  handleSubmit = () => {
    this.setState({ buttonText: "sending" });

    let postBody = {
      name: this.state["name"],
      email: this.state["email"],
      reason: this.state["reason"],
      budget: this.state["budget"],
      resources: this.state["resources"],
      timeline: this.state["timeline"],
      design: document.getElementById("design-selector").value,
    };

    // const response = await axios.post('https://api.decoded.ninja/v2/methods/contact', postBody)
    // if(response.status == 200){
    //   document.getElementById("myForm").reset()
    // }

    axios
      .post("https://api.decoded.ninja/v2/sendDecodedEmailAWS", postBody, {
        headers: {
          'x-api-key': AWS_API_KEY
        }
      })
      .then((response) => {
        if (response.status == 200) {
          document.getElementById("myForm").reset();
          this.setState({ buttonText: "sentSuccessfully" });
        }
      })
      .catch((error) => {
        this.setState({ buttonText: "failedToSend" });
      });
  };

  updateHeader(e) {
    //console.log('typing...')
    var text = e.target.value;
    //console.log(text.length)
    // e.style.height = "1px"
    // e.style.height = (25+o.scrollHeight)+"px";

    this.setState({ headerText: text });
  }

  render() {
    const state = this.state;
    let redOutlineStyle = {};

    // handles creating the styling if email is invalid
    // if(!this.validate(state.email) && state.email){
    //   redOutlineStyle = { borderStyle: 'solid',  borderColor: 'red', borderWidth: 'thin'}
    // }

    //var paragraph = document.getElementById('start')
    //paragraph.onclick = this.startClicked()
    // console.log(paragraph)

    return (
      <div className="home__page__container">
        <div id="header-container">
          <h1 className="header">decoded.ninja</h1>
          <p>
            ->{" "}
            <span>
              <a
                className="link"
                href="https://www.instagram.com/decoded.ninja/?hl=en"
                target="_blank"
              >
                goToInstagram
              </a>
            </span>
            <span style={{ fontSize: "1.5em" }}>()</span>
          </p>
          <p>
            ->{" "}
            <NavLink className="link" to="/projects">
              goToProjects
            </NavLink>
            <span style={{ fontSize: "1.5em" }}>()</span>
          </p>
          <h1
            style={{ color: "#84DBFD", fontSize: "3.2em", marginBottom: "0" }}
          >
            {"{"}
          </h1>

          <div id="type-tool-container">
            <div id="uneditable-container">
              <p style={{ marginTop: 0, paddingBottom: 0, marginBottom: 0 }}>
                Coding is the now & the{" "}
                <span style={{ color: "#7EA6FE" }}>future</span>()
                <span style={{ color: "#84DBFD" }}>;</span>
              </p>
              <p style={{ paddingTop: 0, marginTop: 0, marginBottom: 0 }}>
                Tech awareness through engaging content
                <span style={{ color: "#84DBFD" }}>;</span>
              </p>
            </div>
          </div>

          <h1 style={{ color: "#84DBFD", fontSize: "3.2em", marginTop: "0" }}>
            {"}"}
          </h1>

          <p className="grey-text">
            Decoded was started by a group of passionate engineers who
            understand what it takes to program at any skill level - we believe
            anyone can reach these levels given the proper knowledge and
            mind-set. Aware of this disconnection between people and tech,
            Decoded is dedicated to helping the future tech community get their
            foot into world of code through relevant Instagram posts and
            carefully curated educational content. <br />
            <br />
            <span>
              We also build websites for local businesses and organizations.
            </span>
          </p>
        </div>

        <div id="form-container">
          <h1 className="header">website.form</h1>

          <p className="grey-text light-description-text">
            Please fill out the form below. This form will be used as a starting
            point for us to get to know you and the ideal website for your
            business/service. Please provide as much info as possible. All of
            your information will be kept private.
          </p>
          <p className="grey-text">
            Let's take your business to the next level!
          </p>

          <form id="myForm">
            <ol id="form-list">
              <li>
                {" "}
                <input
                  required
                  name="name"
                  placeholder="Name*"
                  onKeyUp={(event) => this.handleInputChange(event)}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  required
                  style={state.validationStyle}
                  name="email"
                  placeholder="Email*"
                  onKeyUp={(event) => this.handleInputChange(event)}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  name="reason"
                  placeholder="Describe your business/service."
                  onKeyUp={(event) => this.handleInputChange(event)}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  name="budget"
                  placeholder="What is your budget?"
                  onKeyUp={(event) => this.handleInputChange(event)}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  name="resources"
                  placeholder="Any sites out there you like?"
                  onKeyUp={(event) => this.handleInputChange(event)}
                ></input>
              </li>
              <li>
                {" "}
                <input
                  name="timeline"
                  placeholder="What is your timeline?"
                  onKeyUp={(event) => this.handleInputChange(event)}
                ></input>
              </li>
              <li>
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    paddingLeft: "2%",
                    marginTop: 0,
                  }}
                >
                  Do you have a design ready?
                </p>
                <select id="design-selector" defaultValue="No">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </li>
            </ol>
          </form>
          <p>
            ->{" "}
            <span>
              <button
                disabled={!(state.name && state.email)}
                onClick={this.handleSubmit}
                id="unstyled-button"
              >
                {state.buttonText}
              </button>
            </span>
            <span style={{ fontSize: "1.5em" }}>()</span>
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
