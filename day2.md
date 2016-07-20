# Day 2 exercises for react

Yesterday, a lot of you copy-pasted the code for the 'Counter' in exercise 3 directly into exercise 4. There is a better way! 

1. Let's create a project structure -

	Use npm to install and save react and reactDOM
	create a folder 'dist' (short for distribution) this is where our generated code will live.
	create a folder 'src' (short for source). This is where our code will live.
	create a folder 'src/components.' This is where the source code for our components will go
	create a file for counter.js and counterList.jsx in components. Separate the code and import counter into counter.jsx.
	In src create an exercise4.jsx file. Since counterList is defined externally it won't have much to do.
	Update .gitignore so that the dist/bundle.js isn't committed
	In dist create an html file with a div referenced by exercise4.jsx. It should import the script bundle.js

2. Install webpack and use it to generate. dist/bundle.js from src/exercise4.jsx 

3. Try using the webpack-dev-server to change the counters so they don't start at zero you shouldn't need to regenerate bundle.js. Enable hot reloading.

4.  Now use the React Router so that you can navigate through all 5 exercises from yesterday on 5 separate page 'frontend' pages.

5. If you have time. Investigate Enzyme and try using it to write some tests.