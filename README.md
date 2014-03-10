##Intro to Angular - lab

You are going to build a shopping cart for **bookly**, the latest and greates online book store.

###Getting off the ground

Fork and clone repository:

	https://github.com/aikalima/wdi6-angular-intro-lab

Change to project directory and fire up the web server:

	node web-server.js
	
Go to home page:

	http://localhost:8000/app/index.html

###Looking around

Lot's of things are already done for you. Inspect **index.html** view and find ng-controller directive. The view is already wired up with BooksController, see **books_controller.js**. Since we don't know yet how to talk to a server, BooksController 'loads' a static list of books from **data.js**. 'books' is a scoped variable (think instance variable) in the controller, the view iterates over books using ng-repeat to display the book list. Yes, there's also a css file, ignore it, no need to css select and manipulate DOM objects with jQuery - yeah!

###Assignment
	
Check out the list of books and the shopping cart wire frame. Look for elements in double square brackets, for example [[item count]]. These are placeholders for the features you are going to implement. They are:

-	A search box that filters books by title and author 'as you type'.
-	A drop down that let's the user order books by title, author and price.
-	An 'Add' button on each book that puts it in the shopping cart.
-	An 'item count' that displays the number of books in the cart. The count should 'pluralize' correctly.
-	A cart row for each item containing titel, author and price.
-	A field for the total cart value.
-	A button that empties the cart.	

**Hints:**

- Keep it simple. Think how to model the cart in the controller. Perhaps it's just a list of books? The view displays the cart, make sure to 'glue' it to the view.

- For 'order by' drop down, find out how to bind a 'select input' to a model. Also check out 'orderBy' Angular filter.

- ng-click is your friend

- Find out how to ng-pluralize (oops) the item count

- Don't get fooled by the number of features. A lot is taken care of by the view and use of build-in Angular directives. The javascript part is only about 15 lines of code. 
  
####Bonus

- Add item quantity to the shopping cart. Adding the same book multiple times should increase the item quantity accordingly.

**Hints:**

Cart management becomes a bit more complex. You won't get away with simply adding books to (cart) list. You will need a cart item data structure, perhaps something like:

	cart_item = {
		book: <a book>,
		quantity: <how many>
	} 

Before adding a book, you need to find out if it's already in the cart, and if so, increase its quantity.

http://underscorejs.org/ comes in handy for 'ruby like' manipulation of collections / arrays.






	

	
	
