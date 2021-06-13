import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
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
          <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
        </Card.Content>

      </Card>
    );
  }
}

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Contact);
