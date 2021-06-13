import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Item } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Contact from '../components/Account';
import { Account } from '../../api/account/Account';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAccounts extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List Accounts</Header>
        <Card.Group>
          {this.props.contacts.map((contact, index) => <Contact key={index} contact={contact}/>)}
        </Card.Group>
        <Item>No accounts to manage? Add an account <a className="item" href="#add">here</a>.</Item>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListAccounts.propTypes = {
  contacts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Account.userPublicationName);
  return {
    contacts: Account.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListAccounts);
