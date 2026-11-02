import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Alex Morgan",
        bio: "A curious designer who enjoys turning complex ideas into useful, thoughtful experiences.",
        imgSrc:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&q=85",
        profession: "Product Designer",
      },
      shows: false,
      elapsedSeconds: 0,
    };

    this.timerId = null;
  }

  componentDidMount() {
    // Keep the interval ID so it can be cleared when this component unmounts.
    this.timerId = window.setInterval(() => {
      this.setState((previousState) => ({
        elapsedSeconds: previousState.elapsedSeconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  toggleProfile = () => {
    this.setState((previousState) => ({ shows: !previousState.shows }));
  };

  render() {
    const { person, shows, elapsedSeconds } = this.state;

    return (
      <main className="profile-app">
        <div className="profile-content">
          <p className="eyebrow">A little introduction</p>
          <h1>Profile card</h1>
          <p className="intro-copy">Get to know the person behind the work.</p>

          <button
            className="toggle-button"
            type="button"
            onClick={this.toggleProfile}
            aria-expanded={shows}
            aria-controls="person-profile"
          >
            {shows ? "Hide Profile" : "Show Profile"}
          </button>

          {shows && (
            <section className="profile-card" id="person-profile">
              <img
                className="profile-image"
                src={person.imgSrc}
                alt={`Portrait of ${person.fullName}`}
              />
              <div className="profile-details">
                <p className="profile-label">Profile</p>
                <h2>{person.fullName}</h2>
                <p className="profession">{person.profession}</p>
                <p className="bio">{person.bio}</p>
              </div>
            </section>
          )}

          <p className="elapsed-time" aria-live="polite">
            This page has been open for <span>{elapsedSeconds}</span>{" "}
            {elapsedSeconds === 1 ? "second" : "seconds"}.
          </p>
        </div>
      </main>
    );
  }
}

export default App;
