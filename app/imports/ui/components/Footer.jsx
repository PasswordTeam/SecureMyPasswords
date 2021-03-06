import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
          <hr />
              <h5>PasswordTeam</h5>
              University of Hawaii<br />
              Honolulu, HI 96822 <br />
          <a href="https://github.com/PasswordTeam/SecureMyPasswords">Github Homepage</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
