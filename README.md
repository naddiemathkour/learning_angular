# learning_angular
**Getting Started**

- Angular is a web development framework
- Angular CLI allows you to create complicated boiler plate with commands instead of doing them manually
- Running the command 'npm install -g @angular/cli' in the terminal will install the CLI globally
- Running the command 'ng new <prog_name>' will create a new project and add all angular features
- **ADD NOTES ABOUT INITIAL QUSTIONS ASKED AFTER RUNNING ABOVE COMMAND HERE**
- Running the command 'ng serve' builds the project and creates a Live Development Server (localhost:4200) to view and test the project in real time

**Components**
- Components are application building blocks (all projects have at least one 'root' component)
- Components help split up large files into smaller files that are grouped together with directory references
- Component are grouped as a typescript class with a special decorator '@Component'
- This decorator is used to tell Angular that this object is a Component
- Components have 3 references:
	- selector: The name of the Component
	- templateUrl: The .html file associated with the Component
	- styleUrls: All .css files associated with the Component
		- Note: The .css files can be stored as an array to reference multiple files for the same Component object
- Components can be created using the CLI command 'ng generate component <component_name>'
	- Alternatively, the command can be abbreviated to 'ng g c <component_name>'
- Creating a Component will also create a new folder in the 'src->app' directory and update the parent Component's module.ts file to include the newly created Component
- These new Components can be used to segment parts of the webpage into smaller interactable sections
	- Note: Components function like boxes that can be layered over one another to create new sections within a webpage

**Data Binding**
- Communication between TypeScript and HTML
	- 3 forms:
		- String Interpolation: Sending data from TypeScript to HTML
			- Saving a value in TypeScript and displaying it in HTML by using {{varName}}
			- Binding a value in TypeScript to a Property in HTML
				- i.e.: "img src = 'image_path'" can be binded by binding a TypeScript variable to src. The resulting code will be: <img [src] = 'varName'>
					- Note: 'src' is surrounded with square brackets
		- Event Binding: Sending data from HTML to TypeScript based on an event
			- Text input data can be passed with the following: <input type = 'text' (input) = 'passValueToComponent($event)' /> 
				- Note: 'input' is surrounded with parenthesis and the corresponding TypeScript function here would be 'passValueToComponent()'
		- Two Way Binding: Sending and recieving data between both HTML and TypeScript
			- Angular has the capability of combining the two aformentioned data bindings into one
			- The special directive 'ngModel' is used to fascilitate this functionality
			- 'ngModel' needs to be imported in the root component's app.module.ts file
			- Example: <input type = 'text' [(ngModel)] = 'varName' />

