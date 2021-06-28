![ci-badge](https://github.com/ics-software-engineering/meteor-application-template-react/workflows/ci-meteor-application-template-react/badge.svg)

For details, please see http://ics-software-engineering.github.io/meteor-application-template-react/


**6/6/21**

**Completed:**
  - Setting up a repository for the application.
  
**Pending:**
  - Coding a password manager application using the meteor template provided
  - Creating a simple UI for the application for users to interact through
  - Check on the security for the application

**Team Members and their roles:**

**Victor Jodar**
  - What has been done: 
       - Initial setup for the repository using the meteor application template.
       - Creation of the report for the first assignment. Worked on the _Introduction_ and _Design_ portions of the report.
       - Worked on the _Deprecated/Unsafe Functions_ and _Static Analysis_ portion of the second assignment.
  - What will be handled next:
       - Attack Surface Review portion of the third assignment.
       - Create a password generated page where users can generate a password.

**Jay Paul Luben**
  - What has been done: 
       - Worked on the _Requirements_ portion of the report for the first assignment.
       - Initial setup of the Automated Kanban board in Github for the repository.
       - Worked on the _README_ and _Approved Tools_ portion of the second assignment.
  - What will be handled next:
       - Adding onto the _README_ for the third assignment.
       - Create a homepage where users can view their accounts and passwords
       - Set up the database to store user's accounts and passwords.

**Miscellaneous:** Will decide on who will work on the Dynamic Analysis portion of the third assignment on a later date.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**6/13/21**

**Progress:**
  - Addition of the password generator page for the application.
  - Implemented users account & password database for the application.
  - A bit of cleanup from the template we used.
  
**Link:**

https://github.com/orgs/PasswordTeam/projects/1 

This link brings you to our automated kanban board where we keep track of issues.

**Pending:**
  - Have the database encrypted so it doesn't pose a security threat.
  - Clean up the application interface (change the footer, landing page, etc. to fit our application).

**Team Members and their roles:**

**Victor Jodar**
  - New Completions: 
       - Implemented the password generator page.
  - Current:
       - Writing up the report for Assignment 3 (both Dynamic Analysis & Attack Surface Review sections).
  - Next:
       - Improving the password generator.
       - Cleaning up template stuff from the application.

**Jay Paul Luben**
  - New Completions: 
       - Implemented the database that holds users account & password information (NOT SECURED/ENCRYPTED).
       - Homepage for users to look at their accounts & passwords.
       - Edit page for users to edit their accounts & passwords.
       - Add page for users to add their accounts & passwords.
  - Current:
       - None
  - Next:
       - Encrypt the database to make it secure
          - As it stands now, the database of users accounts & passwords are in plain text. Figure out a way to encrypt them.
       - Cleaning up template stuff from the application.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**6/20/21**

**Progression Since Last Week:**
  - Fuzz Testing the application.
  - Static Analysis Review for the Report.
  - Dynamic Review for the report.
  - Cleaned the template to better reflect our application.

**Pending:**
  - Database encryption for listing Account information still needs to be done.

**Team Members and their roles:**

**Victor Jodar**
  - New Completions: 
       - Cleaned template settings to better reflect our application.
          - The Footer, Homepage, and Navbar now better suits our application with the name SecureMyPasswords.
       - Fuzz Testing the application.
       - Static Analysis Review portion of the Report.
       - Dynamic Review portion of the Report.
  - Next:
       - Creation of the Wiki Page for the project.
       - Incident Response Plan portion of the Report.
       - Final Security Review portion of the Report.

**Jay Paul Luben**
  - New Completions: 
       - Updated the README for Assignment 4.
  - Next:
       - Encrypt the database to make it secure (Priority).
       - Creation of the Wiki Page for the project.
       - Release the final version of the application.
       - Certified Release & Archive Report section of the Report.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**6/27/21**

**Team members and their roles for the last part of the project:**

**Victor Jodar**
  - New Completions: 
       - Addressed security concerns found during Fuzz Testing the application.
          - Removed the Admin page (huge privacy concern).
          - Passwords are shown as dots instead of plain text in the "List Accounts" tab.
          - "List Accounts" tab is neater and strings no longer protrude outside of the card box.
       - Creation of the Wiki Page for the project.
       - Wrote up the _Incident Response Plan_, _Final Security Review_, & _Certified Release & Archive Report_ portions of the Report.
       - Released the final version of the program on github.
       
**Jay Paul Luben**
  - New Completions: 
       - Updated the README for Assignment 5.
       - Deployed the meteor application onto a Digital Ocean server, which can be found here: https://securemypasswords.xyz/
          - This was not part of the assignment, but was done to see the application in real time.

**Technical notes on the program e.g. specifications for use, how to install it:**
  - The program was created using a Meteor application template found here: https://github.com/ics-software-engineering/meteor-application-template-react
  - The user guide for the application can be found via the wiki page linked here: https://github.com/PasswordTeam/SecureMyPasswords/wiki/User-Guide

**Brief closing thoughts on the outcome of the program:**
  - Thanks to the meteor application template, creation of a password manager application was made simple. We could work off of a template rather than code the entirity of the website. Account creation is made secure thanks to the built in bcrypt function of the meteor application template.
  - To our surprise, the basic functions of the application were done sooner than expected. We then spent the remaining time refining the application rather than including more features.
  - The main caveat of the application is that account information added via the "Add Account" tab aren't encrypted. This means that the account login credentials are in plain text and are visible when checking the database via MongoDB.
      - This privacy concern was why I (Jay Paul Luben) thought that encrypting the ContactsCollection database holding account information was necessary. However, only users had access to their own portions of the database, and no one elses. So encrypting the ContactsCollection database wasn't necessary.
      - Admins with root access to the database however can still view all account information that is created via the "Add Account" tab. This is definitely a privacy concern that should be rectified in the future when time is available.

**Online Repository Link:** https://github.com/PasswordTeam/SecureMyPasswords

**Link to the final project documentation file within the repository:** https://github.com/PasswordTeam/SecureMyPasswords/blob/master/doc/Final_Project_Documentation.pdf

**Link to the release version of the program:** https://github.com/PasswordTeam/SecureMyPasswords/releases/tag/v1.0
