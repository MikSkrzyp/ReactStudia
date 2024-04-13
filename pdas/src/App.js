import "bulma/css/bulma.css"

import ProfileCard from "./ProfileCard";

import AlexaImage from "./img/alexa.png"
import CortanaImage from "./img/cortana.png"
import SiriImage from "./img/siri.png"



function App() {
  return (
      <div className="container">
          <section className="hero is-primary mb-6">
              <div className="hero-body">
                  <p className="title has-text-centered">
                      Personal Digital Assistance
                  </p>

              </div>
          </section>

          <div className="columns">
              <div className="column">
                  <ProfileCard title="Alexa" handler="@alexa99" image={AlexaImage}/>
              </div>
              <div className="column">
                  <ProfileCard title="Cortana" handler="@cortana32" image={CortanaImage}/>
              </div>
              <div className="column">
                  <ProfileCard title="Siri" handler="@siri101" image={SiriImage}/>
              </div>

          </div>


      </div>
  )
}

export default App;
