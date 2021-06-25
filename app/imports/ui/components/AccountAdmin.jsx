import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Contact table. */
class AccountAdmin extends React.Component {

  copyToClipboard = () => {
    const copyText = this.myInput;
    navigator.clipboard.writeText(copyText.value);
  }

  render() {
    return (
      <Card fluid centered>
        <Card.Content>
          <Card.Header>{this.props.contact.website} </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <b>Login</b>: <div className="ui transparent input">
              <input type="text"value={this.props.contact.login}/>
              </div>
          </Card.Description>
          <Card.Description>
            <b>Password</b>: <div className="ui transparent input">
              <input ref={(input) => this.myInput = input} type="password" value={this.props.contact.password}/> 
              </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <button class="ui button" onClick={() => this.copyToClipboard()}>
            <i className="copy outline icon"/>Copy password to clipboard</button>
        </Card.Content>
        <Card.Content extra>
          <b>Owner</b>: {this.props.contact.owner}
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
AccountAdmin.propTypes = {
  contact: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(AccountAdmin);
