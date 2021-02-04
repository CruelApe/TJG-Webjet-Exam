# Coding challenge by Webjet 

Hello,

The next step is a small coding exercise we give to all prospective candidates.

This helps us to get a better understanding of your thought process when  you’re developing apps, and thus the requirements have been left open ended.

http://webjetapitest.azurewebsites.net/

The exercise instructions are listed on the site.

The need to supply the following token in the header to access the API

x-access-token: sjd1HfkjU83ksdsm3802k

Key points for candidates

	• The solution can be completed in a language of your choice
	• Email the link for the source code once complete, or push it into Git hub..
	• If you are able to host the solution somewhere that would be great, but not required.
	• The test specifically makes mention of the flaky nature of the APIs. You should design a solution 
    to have a functioning app when not all of the services behind the scene are functioning at 100 %.
	• The goal of the test is to allow you to present your best code that you feel proud of.


# Webjet API Test

This is a sample API provides access to a mocked movies database.

There are 2 API operations available for 2 popular movie databases, cinemaworld and filmworld

/api/{cinemaworld or filmworld}/movies : This returns the movies that are available
/api/{cinemaworld or filmworld}/movie/{ID}: This returns the details of a single movie

To access this API you'll require an API token.

Also just like any realworld API these may be flakey at times :)
Exercise
Build a web app to allow customers to get the cheapest price for movies from these two providers in a timely manner.

Design a solution to have a functioning app when not all of the providers are functioning at 100 %.

The goal of the test is to allow you to present your best code that you feel proud off.

Feel free to make and document any assumptions you have made.

The API token provided to you should not be exposed to the public.