# Antarctica_task

The project consists of an app.js which is the entry point of the API. There are some directories as follows:- 1.routes:- There are sepearate routes for login,register,logout and search 2.controllers:- There are controllers corresponding to a definite route. 3.middlewares:- Each controller takes help of middlewares to perform the given task. 4.models:- It contains the database models and database queries connected to middlewares and the database connections. 5.utilities:- There are some utility functions defined for redis database.

Register:- All fields are filled into an mongodb collection with the password only being hashed with bcrypt.It is also checked whether a pre existing session remains or not, if so the user has to be logged out to register with another record.Same email cannot be used to register more than once.

Login:- First it is checked whether the user is already loggedin or not.If not logged in, the email queried and password entered is hashed again to match the stored hashed password in db.

Search:First it is checked whether the user is logged in or not.If logged in, he can query the records according to apiUsageReadme.md.

Authentication used:- Whwn an user logins, the credentials are checked and a session is started and the session_id is stored in redis cache.On logout, the session gets destroyed and session_id is also deleted from the redis cache.So authentication on searching requests can be checked from cache rather than querying the main MongoDB server.If the user does not logout, the session is automatically disabled after a predefined time.

API_USAGE

Register Route:- /register_user Make Post Request with the following keys:- fname(required), lname(required), email(required), password(required), employeeID(required), orgName(required)

Login Route:- /login_user Make Post request with the following keys:- email(required) , password(required)

Logout Route:- /logout_user Just Make a plain GET request to logout

Search Route:- /search_user [For all records] /search_user/[querySTring] Make get request ***fname, lname and employeeID are searchable querySTring = fname=[fname]&lname=[fname]&emplyeeID=[emplyeeID]

***fname, lname, employeeID, email, orgName are orderable

querySTring = fname=$1&lname=$-1 [Here, the orders are ordered by fname in ascending order and then by lname in descending] [assign $1 for ascending sort and $-1 for descending sort for any fields]

Eg:- /search_user/orgName=Antarctica&fname=$1 [Finds all records of Antarctica with ascending order of fname]
