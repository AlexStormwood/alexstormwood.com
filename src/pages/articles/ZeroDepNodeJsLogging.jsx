/* eslint-disable react/no-unescaped-entities */
import SubheadingAnchor from "../../components/SubheadingAnchor";
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as SyntaxHighlighterThemes from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ZeroDepNodeJsLogging() {

	return (
		<div className="articleContent" id="zerodepnodejslogging">
			<div>
				<SubheadingAnchor headingLevel="h2">
					The Scenario
				</SubheadingAnchor>
				<p>
					As a JavaScript developer, you've probably encountered a situation where you're trying to troubleshoot something. There are a variety of thorough, robust tools out there that you could use to debug things, but... <code>console.log()</code> exists.
				</p>
				<figure className="articleFigure">
					<img src="/zerodepnodelogging/DebuggerVsPrint.png" alt="A meme showing programmers choosing to print instead of using dedicated debugging tools."/>
					<figcaption>Meme from <a target="_blank" href="https://www.reddit.com/r/ProgrammerHumor/comments/kbt7vf/its_so_true_though/">r/ProgrammerHumor, deleted user, December 2020</a></figcaption>
				</figure>
				<p>This article isn't about "debuggers vs print/log", but the above is brought up to highlight that even with whatever amazing debugging tools are out there, developers still just log or print.</p>
				<p>
					Putting in a <code>console.log()</code> statement to identify what exact piece of data is in whichever variable is the source of your problem is a convenient way to work through a problem, for sure. But then after the problem is done and solved, what do you do with that <code>console.log()</code> statement?
				</p>
				<p>
					Do you delete the <code>console.log()</code> lines?
				</p>
				<p>
					Do you comment them out?
				</p>
				<p>
					Do you leave them in your code so that your production app has those logs too?
				</p>
				<p>This leads us to...</p>
			</div>

			
			<div>
				<SubheadingAnchor headingLevel="h2">
					The Problem
				</SubheadingAnchor>
				<p>It's definitely easy to go "it's JavaScript, there's no strict rules about this" and carry on as if this has no impact on the project. But as it turns out, littering a bunch of <code>console.log</code> statements throughout your work <em>does</em> matter.</p>
				<ul>
					<li>
						Using a <code>console.log()</code> statement has a performance impact
						<ul>
							<li>
								Doing something costs more than not doing something, and that's fine. That's fair. It just means that developers need to be smart about when and what they're logging, and reduce the number of log statements that end up in the production build of an application. It's easy for developers to <em>not</em> keep that in mind though.
							</li>
							<li>
								JavaScript in particular has a very slow <code>console.log()</code> function. You can find examples such as this: <a target="_blank" href="https://medium.com/@xiaweiliang94/why-you-should-think-twice-before-using-console-log-and-tips-for-avoiding-performance-pitfalls-1228efc27360">Why You Should Think Twice Before Using console.log, and Tips for Avoiding Performance Pitfalls, by Zack (Medium user @xiaweiliang94), published to Medium on 16th March 2023</a>
							</li>
						</ul>
					</li>
					<li>
						Developers don't always use <code>console.log()</code> consistently.
						<ul>
							<li>
								Developers typically benefit from seeing data, to figure out the solution to their problems. But not all developers know what data they need, or where to get that data. 
							</li>
							<li>
								It's been meme'd a lot in programming groups online, but it's typical to see <code>console.log("code reached here")</code>-type log statements. That doesn't tell others much about what problems may have occured in the code.
							</li>
						</ul>
					</li>

					<figure className="articleFigure">
						<img src="/zerodepnodelogging/PrintGotHere.png" alt="A meme showing a statue of a bird carrying a statue of a boy, where the bird is labelled to represent a print statement while the boy is labelled to represent a developer's code."/>
						<figcaption>Meme from <a target="_blank" href="https://www.reddit.com/r/ProgrammerHumor/comments/9hlqyq/print_got_this_far/">r/ProgrammerHumor, user <code>the_dank_cthulhu</code>, September 2018</a></figcaption>
					</figure>

					<li>
						Developers don't always remove or comment-out their usage of <code>console.log()</code> consistently.
						<ul>
							<li>
								Things like commenting-out or deleting the log statements take time, and it's easy to miss a log statement when you're manually going through and removing them.
							</li>
						</ul>
					</li>
					<li>
						Developers creating packages need to be aware of the down-stream impacts of their logging choices.
						<ul>
							<li>
								If you're creating an NPM package, project template, or other similarly-reusably bundle of code, then you need to make sure your logs don't clutter the logs of other developers.
							</li>
							<li>
								Ideally, you would even create some flags or settings to let other developers opt-in to enabling your project's logging, so they can troubleshoot their own usage of your code.
							</li>
						</ul>
					</li>

				</ul>

				<p>There are better ways to log, especially when using logging for reasonable and useful purposes. This article will show a native, built-in NodeJS approach to useful logging.</p>

			</div>

			<div>
				<SubheadingAnchor headingLevel="h2">
					The "Typical" Solutions
				</SubheadingAnchor>
				<p>There are two typical solutions I've seen to this problem online:</p>
				<ul>
					<li>Use a NPM package to handle logging and never use <code>console.log()</code> in your code ever again, instead using the NPM package's log function.</li>
					<li>Replace <code>console.log()</code> with a null value or stub function if the <code>process.env.NODE_ENV</code> environment variable is set to <code>production</code> so nothing is ever logged in production builds of the app.</li>
				</ul>
				<p>Both of those solutions have their positives and negatives.</p>
				<p>If you use an NPM package, regardless of how amazing that package may be - you are introducing additional dependencies into your project.</p>
				<p>That might sound like a bunch of harmless fluff that'll never happen to you or your work, but you need to remember: one of the most-infamous dependency-based exploits in the software world was <strong>log4j</strong>: a logging framework for <em>Java</em> (not JavaScript!) applications. That exploit gave malicious actors the ability to run their own code on your machine, perform DDOS operations using your machine, or just do whatever they want to your machine via code. It was a big, dangerous thing that impacted numerous software products across the world. You can find the Australian Signals Directorate's page on the Log4j vulnerability here: <a href="https://www.cyber.gov.au/about-us/advisories/2021-007-log4j-vulnerability-advice-and-mitigations" target="_blank">https://www.cyber.gov.au/about-us/advisories/2021-007-log4j-vulnerability-advice-and-mitigations</a></p>
				
				<p>And the second solution; removing <code>console.log()</code> from production builds... well, that's not exactly useful for troubleshooting production builds, is it? If you do want to try that yourself, it's covered in the same Medium article that I referenced earlier about <code>console.log()</code> statements being slow in our code - here: <a target="_blank" href="https://medium.com/@xiaweiliang94/why-you-should-think-twice-before-using-console-log-and-tips-for-avoiding-performance-pitfalls-1228efc27360">Why You Should Think Twice Before Using console.log, and Tips for Avoiding Performance Pitfalls, by Zack (Medium user @xiaweiliang94), published to Medium on 16th March 2023</a></p>
				
				<p>With those in mind, we don't want to never log - but we need to have better control over when and how we log.</p>
			</div>

			<div>
				<SubheadingAnchor headingLevel="h2">
					The Built-In Solution
				</SubheadingAnchor>
				<p>So, if we want to log but want to avoid external dependencies, what can we do?</p>
				<p>As it turns out, NodeJS has had some form of built-in debug and logging system since its earliest of early days. </p>
				<p>In 2024-era versions of NodeJS, we want to use functions like <code>debug</code> or <code>debuglog</code> from the <code>node:util</code> standard library. Early versions of this would've used <code>debug</code> or <code>log</code> functions from that same standard library - functions to do what we need to do stretch back to extremely early versions of NodeJS:</p>
				<figure className="articleFigure">
					<img src="/zerodepnodelogging/NodeJsUtilVersionHistory.png" alt="A list of version numbers stretching from 0.10.x all the way to 22.x. These represent the NodeJS versions that included a debug or logging functionality - basically, every version of NodeJS."/>
					<figcaption>List of NodeJS versions that include the "util" standard library, which contains a debug and/or log function in some form. From <a target="_blank" href="https://nodejs.org/docs/latest/api/util.html">Node.js, retrieved in June 2024</a></figcaption>
				</figure>
				<p>Let's dive into what this standard NodeJS library can let us do.</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="javascript" style={SyntaxHighlighterThemes.nightOwl} showLineNumbers={true}   >
					{
						`// Import the NodeJS standard library for "util"
const util = require("node:util");

// Initialise a debug logger that is activated by a certain value
// being detected in process.env.NODE_DEBUG
const someLogger = util.debuglog("debugTrigger");

// Call the logger and give it string-able content to log that content.
someLogger("Starting someLogger");

// Even string coersion works too:
let someNumber = 3 * 3;
someLogger(someNumber);

// And objects:
let someObject = {
	name: "Alex",
	powerLevel: 9001
}
someLogger(someObject);

// Basically, if it has some sort of "toString" function on it,
// and basically everything does by default, even just internally,
// then it'll get logged just fine. 
// Just like the normal console.log function.
someLogger("Tada! Works just like console.log()!");`
					}
				</SyntaxHighlighter>
				<p>Now, there's a catch. If we want to see that logger do its logging, we need to run our code with a specific value set to an environment variable.</p>
				<p>We have to set <code>NODE_DEBUG</code> to be <code>debugtrigger</code>, since that is that the <code>util.debuglog()</code> function was given as its trigger value.</p>
				<p>If that value isn't set, the logger won't log. That's not a bad thing entirely, but if we want to see the cool thing happen then we need to run our code with:</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`NODE_DEBUG=debugtrigger node src/index.js`}
				</SyntaxHighlighter>
				<p>The command above assumes the code example above is stored in "src/index.js" in a project. </p><p> When we run that, we'll get this output:</p>

				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`DEBUGTRIGGER 115308: Starting someLogger
DEBUGTRIGGER 115308: 9
DEBUGTRIGGER 115308: { name: 'Alex', powerLevel: 9001 }
DEBUGTRIGGER 115308: Tada! Works just like console.log()!`}
				</SyntaxHighlighter>
				<p>You can see that the trigger value for the logger becomes its identifier, alongside the process ID of the code that was running. This might not be that useful on its own, which is why this system really shines when multiple loggers are in play.</p>

				<p>Consider this code:</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="javascript" style={SyntaxHighlighterThemes.nightOwl} showLineNumbers={true}   >
					{`// Import the NodeJS standard library for "util"
const util = require("node:util");

// Initialise a debug logger that is activated by a certain value
// being detected in process.env.NODE_DEBUG
const someLogger = util.debuglog("debugTrigger");
const someOtherLogger = util.debuglog("bananas");
const pokemonLogger = util.debuglog("pokemon");

// Call the logger and give it string-able content to log that content.
someLogger("Starting someLogger");
someOtherLogger("Starting someOtherLogger");
pokemonLogger("Starting pokemonLogger");`}
				</SyntaxHighlighter>
				<p>Running that code with the exact same command as before is going to give us very underwhelming output:</p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`DEBUGTRIGGER 116802: Starting someLogger`}
				</SyntaxHighlighter>

				<p>To let multiple loggers work simultaneously, the <code>NODE_DEBUG</code> variable is actually meant to be used as a <strong>comma-separated string</strong>. That means multiple logger trigger values can be specified, like so:</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`NODE_DEBUG=debugtrigger,pokemon node src/exampleUtilLogger.js `}
				</SyntaxHighlighter>
				<p>That'll give us this output:</p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`DEBUGTRIGGER 117713: Starting someLogger
POKEMON 117713: Starting pokemonLogger`}
				</SyntaxHighlighter>
				<p>Because the <code>NODE_DEBUG</code> variable was <em>not</em> given a value of "bananas" as one of its comma-separated values, the "someOtherLogger" logger did not run.</p>
				<p>Now, to make use of this within the wider codebase of whatever project we're working on, we just need to do three things:</p>
				<ol>
					<li>
						Export the logger functions.
					</li>
					<li>
						Import the logger functions in the files that need to use them.
					</li>
					<li>
						Use the imported logger functions in the same way that you would normally use <code>console.log()</code> functions.
					</li>
				</ol>
				<p>Brace yourself, let's look at an example of this in action!</p>
			</div>

			<div>
				<SubheadingAnchor headingLevel="h2">
					Practical Usage of the Built-In Solution
				</SubheadingAnchor>
				<p>
					I'm working on an object-document mapper package called "SuperCamo". It's an ODM for NeDB - an embedded database alternative to MongoDB. You can take a look at it <a target="_blank" href="https://www.npmjs.com/package/@bigfootds/supercamo">over here on NPM</a>, <a target="_blank" href="https://github.com/BigfootDS/supercamo">or here on GitHub.</a>
				</p>
				<p>
					As I'm learning, it's actually really tricky to make your own database data modeller/mapper/manager/etc. I need to keep track of data as it moves through my system, without specifying or hard-coding very many things. It's a lot of generic code so that developers can go and make their own database models and schemas and so on.
				</p>
				<p>
					This means that I want a lot of logging, but I don't want to force that on to any developer that uses my package. So, I added a logging function to the package:
				</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="javascript" style={SyntaxHighlighterThemes.nightOwl} showLineNumbers={true}  >
					{
						`const log = {
	verbose: util.debuglog("verbose"),
	superCamo: util.debuglog("supercamo"),
	superCamoDocument: util.debuglog("supercamo:document"),
	superCamoEmbeddedDocument: util.debuglog("supercamo:embeddeddocument"),
	superCamoBaseDocument: util.debuglog("supercamo:basedocument"),
	superCamoClient: util.debuglog("supercamo:client"),
	superCamoValidators: util.debuglog("supercamo:validators"),

}

log.verbose("Starting SuperCamo with verbose logging enabled.");
log.superCamo("Starting SuperCamo with SuperCamo-specific verbose logging enabled.");
log.superCamoDocument("Starting SuperCamo with SuperCamo 'Document-specific verbose logging enabled.");
log.superCamoEmbeddedDocument("Starting SuperCamo with SuperCamo 'Embedded Document'-specific verbose logging enabled.");
log.superCamoBaseDocument("Starting SuperCamo with SuperCamo 'Base Document'-specific verbose logging enabled.");
log.superCamoClient("Starting SuperCamo with SuperCamo client-specific verbose logging enabled.");
log.superCamoValidators("Starting SuperCamo with SuperCamo validator-specific verbose logging enabled.");


/**
 * Configured logging system for the SuperCamo package.
 * 
 * Pass a string to this, and it'll automatically figure out which NodeJS util.DebugLogger to use.
 * @author BigfootDS
 *
 * @param {String} message The string to log.
 * @param {("Client"|"BaseDocument"|"Document"|"EmbeddedDocument"|"Validators"|"")} caller Specific string to help with conditional logging, eg. "Client" to allow the SuperCamoClient logger to log. Defaults to "", which will allow the SuperCamo catch-all logger and Verbose generic logger to log.
 */
function SuperCamoLogger(message, caller = "") {
	
	if (log.superCamo.enabled){
		log.superCamo(message);
	} else if (log.verbose.enabled){
		log.verbose(message);
	} else {
		switch (caller) {
			case "Client":
				log.superCamoClient(message);
				break;
			case "BaseDocument":
				log.superCamoBaseDocument(message);
				break;
			case "Document":
				log.superCamoDocument(message);
				break;
			case "EmbeddedDocument":
				log.superCamoEmbeddedDocument(message);
				break;
			case "Validators":
				log.superCamoValidators(message);
				break;
			default:
				break;
		}
	}
}

module.exports = SuperCamoLogger;`
					}
				</SyntaxHighlighter>
				<p>You'll notice a few things going on here:</p>
				<ul>
					<li>
						Each logger is declared in a <code>log</code> object.
						<ul>
							<li>
							This is useful if you just want to export and use the loggers directly in your code - I don't, but that may change, so I didn't want to limit myself here. Keeping options like that open make a package easier to maintain and update over time.
							</li>
						</ul>
					</li>
					<li>
						There are SuperCamo-specific logger trigger values, as well as a generic "verbose" trigger value.
						<ul>
							<li>
							This lets a developer just go <code>NODE_DEBUG=verbose</code> and see all logs if they want to, which would be useful when they first begin troubleshooting and don't know where there issues are coming from.
							</li>
							<li>
								This also lets developers re-run the code with more and more fine-grained logging control if they need that. Maybe they know the issue is coming from SuperCamo, but are not sure if it's a database client problem or a database model problem - they can toggle the loggers to narrow things down.
							</li>
						</ul>
					</li>
					<li>
						There is an order of operations or control flow to make sure that if multiple loggers are enabled, the most-suitable one is the only one to log the message.
						<ul>
							<li>
								The logic basically prefers the "supercamo" logger if both the "supercamo" and "verbose" loggers are enabled, so that SuperCamo logging stays distinct from any other code that might be using a "verbose" logger.
							</li>
							<li>
								The wrapping function receives an argument that is just a way for other code to say what class is calling the logger. So the "caller" being set to "Client" means that the database client class is calling the logger. This allows specific chunks of code to be logged distinctly from other chunks of code.
							</li>
							<li>
								The logic prefers the "supercamo" logger if both the "supercamo" and any of the "supercamo:feature" loggers are enabled, as a passive reminder to developers that they should be using either the one generic logger or any mix of the specific loggers - but not a mix of generic and specific loggers.
							</li>
						</ul>
					</li>
				</ul>
				<p>That <code>SuperCamoLogger</code> function is then exported, for other files to import and use in place of any <code>console.log()</code> statement.</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="javascript" style={SyntaxHighlighterThemes.nightOwl} showLineNumbers={true}   >
					{`const SuperCamoLogger = require("../../utils/logging.js");

// Code omitted for brevity.

// This is a snippet of a static "create" method in a Document class.
// It creates a Document instance, validates the data, and returns the valid instance.

		let newInstance = new this(dataObj, incomingParentDatabaseName, incomingCollectionName);
		if (validateOnCreate){
			try {
				let isValid = await newInstance.#validate();
				let newInstanceData = await newInstance.getData();
				SuperCamoLogger("This document is valid:", "BaseDocument");
				SuperCamoLogger(newInstanceData, "BaseDocument");
			} catch (error) {
				throw error;
			}
		}
		return newInstance;

// Code omitted for brevity.

`}
				</SyntaxHighlighter>
				<p>In the code above, an entire NoSQL document is logged froms line 13-14 if logging is enabled. This could pollute the output of an app very quickly, so it's important to make sure that those logs are opt-in only. When developers need to see if their documents are being created correctly, they can just set an appropriate <code>NODE_DEBUG</code> value.</p>
				
				<p>Because the logic for determining which logger needs to log the message is handled within the <code>SuperCamoLogger</code> function internally, it keeps the logging system "dry" - no repeated logic for figuring out which content gets logged where. Other files would use something other than "BaseDocument" as the second argument of the logger function to make use of that functionality.</p>

				<p>As an example of what this means for dependent projects, here's a comparison of what SuperCamo's output looked like before and after I implemented that logger system.</p>

				<p>The usage of the package can be as simple as this:</p>
				<SyntaxHighlighter className="syntaxHighlighterComponent" language="javascript" style={SyntaxHighlighterThemes.nightOwl} showLineNumbers={true}   >
					{`const SuperCamo = require("@bigfootds/supercamo");
const path = require("node:path");

class User extends SuperCamo.NedbDocument {
	constructor(data, databaseName, collectionName){
		super(data, databaseName, collectionName);

		this.email = {
			type: String,
			required: true
		}
	}
}

async function doThings(){
	let exampleDb = await SuperCamo.connect(
		"SomeDatabaseName", 
		path.join(process.cwd(), "databases"),
		[
			{name: "Users", model: User}
		]
	);

	let newUser = await exampleDb.insertOne("Users", {name:"Alex", email:"test@email.com"})
	console.log(newUser.toString());
}

doThings();`}
				</SyntaxHighlighter>
				<p>Note that there's just one <code>console.log()</code> statement in that code on line 25 - that's to represent the end "user" or developer who is using my work as a dependency, doing their own usual logging.</p>
				<p>Here's the terminal output of the above code from <strong>before</strong> the logger system was implemented, where SuperCamo was using <code>console.log()</code> everywhere internally:</p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`node src/index.js`}
				</SyntaxHighlighter>
				<p></p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`Validating _id with value of undefined.
Validating email with value of test@email.com.
This document is valid:
{ email: 'test@email.com' }
insertOne insert result:
{ email: 'test@email.com', _id: 'MmqtzQySw9mvAWJZ' }
insertOne tempInstance result:
User {
  _id: { type: [Function: String], required: false },
  email: { type: [Function: String], required: true }
}
Validating _id with value of MmqtzQySw9mvAWJZ.
Validating email with value of test@email.com.
This document is valid:
{ _id: 'MmqtzQySw9mvAWJZ', email: 'test@email.com' }
{"_id":"MmqtzQySw9mvAWJZ","email":"test@email.com"}`}
				</SyntaxHighlighter>
				<p>Here's the terminal output of the above code from <strong>after</strong> the logger system was implemented:</p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`node src/index.js`}
				</SyntaxHighlighter>
				<p></p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`{"_id":"YStk0wOxwVn9NNAD","email":"test@email.com"}`}
				</SyntaxHighlighter>
				<p></p>
				<p></p>
				<p>...that's a huge difference, and a massively positive impact on developer's quality of life as they use this code.</p>
				<p>The output <em>can</em> be customised as per the logger's compatible <code>NODE_DEBUG</code> values, so here's the same code run again but with <code>NODE_DEBUG</code> set to "supercamo":</p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`NODE_DEBUG=supercamo node src/index.js`}
				</SyntaxHighlighter>
				<p></p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent"  style={SyntaxHighlighterThemes.a11yDark} >
					{`SUPERCAMO 5732: Starting SuperCamo with SuperCamo-specific verbose logging enabled.
SUPERCAMO 5732: Validating _id with value of undefined.
SUPERCAMO 5732: Validating email with value of test@email.com.
SUPERCAMO 5732: Document's data after validation:
SUPERCAMO 5732: { name: 'Alex', email: 'test@email.com' }
SUPERCAMO 5732: This document is valid:
SUPERCAMO 5732: { email: 'test@email.com' }
SUPERCAMO 5732: insertOne insert result:
SUPERCAMO 5732: { email: 'test@email.com', _id: '9X8caQHrVBCYgiKA' }
SUPERCAMO 5732: insertOne tempInstance result:
SUPERCAMO 5732: User {
  _id: { type: [Function: String], required: false },
  email: { type: [Function: String], required: true }
}
SUPERCAMO 5732: Validating _id with value of 9X8caQHrVBCYgiKA.
SUPERCAMO 5732: Validating email with value of test@email.com.
SUPERCAMO 5732: Document's data after validation:
SUPERCAMO 5732: { email: 'test@email.com', _id: '9X8caQHrVBCYgiKA' }
SUPERCAMO 5732: This document is valid:
SUPERCAMO 5732: { _id: '9X8caQHrVBCYgiKA', email: 'test@email.com' }
{"_id":"9X8caQHrVBCYgiKA","email":"test@email.com"}`}
				</SyntaxHighlighter>

				<p>And an example of the generic "verbose" flag being used:</p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent" language="bash" style={SyntaxHighlighterThemes.a11yDark} >
					{`NODE_DEBUG=verbose node src/index.js`}
				</SyntaxHighlighter>
				<p></p>
				<SyntaxHighlighter className="syntaxHighlighterOutputComponent"style={SyntaxHighlighterThemes.a11yDark} >
					{`VERBOSE 6640: Starting SuperCamo with verbose logging enabled.
VERBOSE 6640: Validating _id with value of undefined.
VERBOSE 6640: Validating email with value of test@email.com.
VERBOSE 6640: Document's data after validation:
VERBOSE 6640: { name: 'Alex', email: 'test@email.com' }
VERBOSE 6640: This document is valid:
VERBOSE 6640: { email: 'test@email.com' }
VERBOSE 6640: insertOne insert result:
VERBOSE 6640: { email: 'test@email.com', _id: 'DjjYkqRJ5fewhZr2' }
VERBOSE 6640: insertOne tempInstance result:
VERBOSE 6640: User {
  _id: { type: [Function: String], required: false },
  email: { type: [Function: String], required: true }
}
VERBOSE 6640: Validating _id with value of DjjYkqRJ5fewhZr2.
VERBOSE 6640: Validating email with value of test@email.com.
VERBOSE 6640: Document's data after validation:
VERBOSE 6640: { email: 'test@email.com', _id: 'DjjYkqRJ5fewhZr2' }
VERBOSE 6640: This document is valid:
VERBOSE 6640: { _id: 'DjjYkqRJ5fewhZr2', email: 'test@email.com' }
{"_id":"DjjYkqRJ5fewhZr2","email":"test@email.com"}`}
				</SyntaxHighlighter>
				<p>As the above shows - thorough logging can be enabled, but by default will not be enabled and will not intrude on a developer's usage of my code.</p>
			</div>

			<div>
				<SubheadingAnchor headingLevel="h2">
					Summary
				</SubheadingAnchor>
				<p>This was a fun little rabbit hole for me to explore, and I hope this write-up has been useful for you as well!</p>
				<p>Logging systems are a very useful thing to implement - even if you do use a pre-made NPM package to do so. Logging is better than rough <code>console.log()</code> usage, and <code>console.log()</code> usage is better than no logs or outputs at all.</p>
				<p>If this has helped you think of new ways to log in your own work, then definitely give it a shot. Putting this stuff into practice is the best way to master it!</p>
			</div>
		</div>
	)
}

export default ZeroDepNodeJsLogging;