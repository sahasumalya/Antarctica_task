Register Route:-
/register_user
Make Post Request with the following keys:-
fname(required), lname(required), email(required), password(required), employeeID(required), orgName(required)

Login Route:-
/login_user
Make Post request with the following keys:-
email(required) , password(required)

Logout Route:-
/logout_user
Just Make a plain GET request to logout

Search Route:-
/search_user  [For all records]
/search_user/<querySTring>
Make get request
***fname, lname and employeeID are searchable
querySTring = fname=<fname>&lname=<fname>&emplyeeID=<emplyeeID>

***fname, lname, employeeID, email, orgName are orderable
querySTring = fname=$1&lname=$-1
[Here, the orders are ordered by fname in ascending order and then by lname in descending]
[assign $1 for ascending sort and $-1 for descending sort for any fields]

Eg:- /search_user/orgName=Antarctica&fname=$1
[Finds all records of Antarctica with ascending order of fname]






