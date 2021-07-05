Small API built only using node js built in modules with no external dependencies

Requirements

1. Create an API that listens on a port and accepts requests for POST, GET, PUT, DELETE & HEAD.
2. Want to allow users to create a user. Edit that user and potentially be able to delete that user too.
3. API allows a user to sign in which returns a token that can be used to authenticate susequent requests
4. API allows users to sign out which invalidates their token
5. API allows a signed in user to create a new status check
6. API allows a signed in user to edit or delete any of their checks
7. In the background workers perform all the checks at appropriate times and alerts users on status when status changes

We will send SMS requests via Twilio without using a 3rd party library

We will store data in the filesystem in JSON files