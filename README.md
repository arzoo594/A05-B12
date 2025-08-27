1.Difference between getElementById finds a single element by its id,getElementsByClassName
finds all elements with a specific class,querySelector
uses a CSS selector to find the first matching element,querySelectorAll
uses a CSS selector to find all matching elements.

2.To create and insert a new element into the DOM:
Create a new element using document.createElement().
Add content or attributes to it, such as text, class, or id.
Insert it into the DOM using methods like appendChild(), prepend(), or insertBefore().

3.When an event occurs on an element, it first runs on that element, 
then bubbles up to its parent elements, all the way to the document root.

4.It is a technique where you attach a single event listener to a parent element instead of multiple child elements. You use event.target to determine which child triggered the event.
Why it’s useful:
Works for dynamically added elements.
Saves memory by reducing multiple listeners.
Makes code simpler and easier to manage.

5.Difference between preventDefault() and stopPropagation()
preventDefault(): Stops the browser’s default action for an element.
Example: Prevent a form from submitting or a link from navigating.
stopPropagation(): Stops the event from bubbling or capturing through the DOM.
Example: Prevent a child element’s click from triggering its parent’s click event.
