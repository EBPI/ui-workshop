import React from "react";

export default class FormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      planet: "",
      allegiance: ""
    };
  }

  render() {
    return (
      <section>
        <form>
          <label>
            Planet: <span>TODO replace me with an input of type 'text'</span>
          </label>

          <label>
            Allegiance: <span>TODO replace me with a 'select' wrapping 2 'option' elements</span>
          </label>
        </form>

        <div style={{ margin: "1em" }}>
          TODO print your state and join the dark side!
        </div>
      </section>
    );
  }
}
