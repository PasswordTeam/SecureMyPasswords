import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ContactAdmin extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{this.props.contact.website} </Card.Header>
          <Card.Description>
            <b>Login</b>: {this.props.contact.login}
          </Card.Description>
          <Card.Description>
            <b>Password</b>: {this.props.contact.password}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <b>Owner</b>: {this.props.contact.owner}
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
ContactAdmin.propTypes = {
  contact: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(ContactAdmin);
