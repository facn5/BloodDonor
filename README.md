# BloodDonor

# What’s the problem?

--

# What’s the solution?

--

# Link to the prototype:

[Figma prototype](https://www.figma.com/file/KnLqYIvShOkk3cnVPFAAdOdy/Untitled?node-id=0%3A1)

# User Stories: what can I do on this app?

1.  As a user, I want to share the donating cards to social media.
1.  As unregistered user, I want to know and see information about your application.
1.  As an unregistered user I should be able to get info of the card I click on.
1.  As an unregistered user I should be able to open the application and see all the donation cards.

## Getting Started

How to get the project up and running on your local machine.

_Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp._

> **Node** (via nvm) see: https://github.com/creationix/nvm

> **MongoDB** see: https://docs.mongodb.com/manual/installation/

### Setups

**1. Clone the repo:**

`$ git clone https://github.com/facn5/BloodDonor.git`

**2. Install dependencies**

```
$ cd BloodDonor
$ npm i
```

**3. Install dependencies in the client folder**

```
$ cd client
$ npm i
```

**4. Add initial environment Variables**

Create a config.env file in the root directory.

_Add the following line to make your local database work, inserting your own username and password._

`DB_URL = mongodb://[username:password@][host]:[port]/[databasename]`

_Add a 'secret' for password encryption._

`SECRET = "[SOMETHING SECRET]"`

**5. Run the app**

`$ npm run start`
