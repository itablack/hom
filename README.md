**DIFFERENCE BETWEEN LET, CONST, AND VAR**


In JavaScript, a variable can be declared using var, let, const keywords.

 1: **VAR KEYWORD**; is used to declare variables since JavaScript was created. It is confusing and error-prone when using variables declared using var.
In a script, a variable declared using var is added as a non-configurable property of the global object. This means its property descriptor cannot be changed and it cannot be deleted using delete. JavaScript has automatic memory management, and it would make no sense to be able to use the delete operator on a global variable.
var declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called hoisting, as it appears that the variable declaration is moved to the top of the function, static initialization block, or script source in which it occurs.
Using variables
After you declare a variable, you can reference it by name elsewhere in your code.

**EXAMPLE**
var x = 100;
x + 102;
OUTPUT
202






2: **LET KEYWORD;**  removes the confusion and error of var. It is the new and recommended way of declaring variables in JavaScript.
in JavaScript. You cannot declare a duplicate variable using the let keyword with the same name and case. JavaScript will throw a syntax error. Although, variables can have the same name if declared with the var keyword (this is why it is recommended to use let).

**Example:**
Syntax Error
let num = 100; 
let num = 200; //syntax error  

var num = 100; 
var num = 200; //Ok


3: **CONST KEYWORD:** is used to declare a constant variable that cannot be changed once assigned a value.
The const declaration is very similar to let:
const declarations are scoped to blocks as well as functions.
const declarations can only be accessed after the place of declaration is reached (see temporal dead zone). For this reason, const declarations are commonly regarded as non-hoisted.
const declarations do not create properties on globalThis when declared at the top level of a script.
const declarations cannot be redeclared by any other declaration in the same scope.
const begins declarations, not statements. That means you cannot use a lone const declaration as the body of a block (which makes sense, since there's no way to access the variable).



Here, we will use the let keyword to declare variables. To declare a variable, write the keyword let followed by the name of the variable you want to give, as shown below.

**Example:** 
Variable Declaration
let msg; // declaring a variable without assigning a value
example, var msg; is a variable declaration. It does not have any value yet. The default value of variables that do not have any value is undefined.

You can assign a value to a variable using the = operator when you declare it or after the declaration and before accessing it.
the msg variable is declared first and then assigned a string value in the next line.


You can declare a variable and assign a value to it in the same line. Values can be of any datatype such as string, numeric, boolean, etc.


