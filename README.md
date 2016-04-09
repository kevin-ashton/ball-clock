# Ball Clock

The following are various approaches to simulating a ball clock.

## Javascript Solution

Two simple approaches have been taken

1. Stateless functions found in `js/src/tools/simpleClock.js`
2. Object oriented approach found in `js/src/Model/Clock.js`

The object oriented approach is far more flexible whereas it systematises the set of rules that govern the rails and balls. It should be noted these rules are very similar and arguably a superset of the rules that govern most modern numbering systems. Hence, once systematized it becomes trivial to simulate number systems such as binary, decimal, and hexadecimal. Additional details and visualizations can be found below within the mithril experiment.

Steps to run:

1. Enter the js directory `cd ./js`
2. Install dependencies `npm install`
3. Run unit tests `npm test`

### Mithril Experiment

I've been aware of [mithrilJs](http://mithril.js.org/) for a while decided to implement a simple visualization. This can be accessed [here](https://kevin-ashton.github.io/ball-clock/js/src/) or the site can be run locally by running `npm run mithril`.

### Notes

* All javascript is written in ES6 and should be transpiled with [babeljs](https://babeljs.io/). Hence, `babel-node` is used within package.json scripts.

* Generally speaking errors, data validation, and many unit tests (such as those generally expected to test the behavior of models) have been intentionally excluded.
