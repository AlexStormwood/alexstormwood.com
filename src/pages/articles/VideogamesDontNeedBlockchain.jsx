/* eslint-disable react/no-unescaped-entities */
import SubheadingAnchor from "../../components/SubheadingAnchor";

function VideogamesDontNeedBlockchain() {

	return (
		<div className="articleContent" id="videogamesblockchainneedsquiz">
			<div>
				<SubheadingAnchor headingLevel="h2">
					Short Answer
				</SubheadingAnchor>
				<p>For the majority of game developers and their games:</p>
				<p>no.</p>
			</div>

			<div>
				<SubheadingAnchor headingLevel="h2">
					Long Answer
				</SubheadingAnchor>
				<p>There are several questions to ask before committing to add blockchain-based functionality to your game.</p>
				<p>The questions below are ordered in terms of dependencies; meaning that if you cannot proceed past one question, then all further questions are irrelevant and you have gained your answer already.</p>

				<SubheadingAnchor headingLevel={"h3"}>
					Does the game need to store any state or save any data at all?
				</SubheadingAnchor>
				<p>
					If you answered &quot;no&quot; to this question, then you don&apos;t need a blockchain. You can stop here.
				</p>
				<p>
					It&apos;s very rare for games to exist without the need to save data these days - this is more applicable to arcade games, especially the type where you could enter a code to resume your progress instead of selecting saved data from a user interface.
				</p>
				<p>
					And even then, the more-popular arcade games often stored at least a leaderboard of high scores as their save data.
				</p>
				<p>
					Most developers should answer &quot;yes&quot; to this question, and move on to the next question.
				</p>

				<SubheadingAnchor headingLevel={"h3"}>
					Are there multiple writers?
				</SubheadingAnchor>
				<p>A &quot;writer&quot; is a source of save data, or an editor of save data.</p>
				<p>It&apos;s a bit of an abstract concept, so here are some examples:</p>
				<ul>
					<li>
						One game client (eg. a Nintendo Switch game console) that creates save data for a specific game and stores that save data on that same game client, and the data is never shared to other game clients. There is only one writer in this example.
					</li>
					<li>
						One game client (eg. a Nintendo Switch game console) that creates save data for a specific game and stores that save data on that same game client, and the data is shared to other game clients via a system &quot;cloud save data&quot; feature. Even if the same player or human is responsible for all game clients in this system, there are now multiple clients in this system. Which game client is the source of truth? What happens when a game client makes save data modifications while offline and unable to sync with the other game clients? There are multiple writers in this example.
					</li>
					<li>
						One game server runs a game that game clients can connect to. The game server is authoritative, but allows the game clients to send human inputs to the server to control characters and interact with the world. Even if the game server has incredible logic to maintain authority over the save data, maintaining the legitimacy of game client inputs is a case of &quot;whack-a-mole&quot; -- there could be hackers, there could be glitches, or any other unforeseen thing that allows game clients to temporarily gain authority over some save data. There are multiple writers in this system.
					</li>
				</ul>
				<p>A single writer or editor of data is the sole source of truth for that data.</p>
				<p>Multiple writers introduce the issue of trust. A system without multiple writers has no trust issue.</p>
				<p>Blockchains can address trust issues.</p>
				<p>Compare your game to the examples above.</p>
				<p>If you answered &quot;no&quot; to this question, then you don&apos;t need a blockchain. You can stop here.</p>
				<p>If you answered &quot;yes&quot; to this question, you can move on to the next question.</p>

				<SubheadingAnchor headingLevel={"h3"}>
					Can you use an always-online trusted third-party to verify any data?
				</SubheadingAnchor>

				<p>A trusted third-party is an owner or verifier of data that exists outside of the game. This means that they must also be online, and always available.</p>
				<p>If the game client is offline, save data cannot be verified.</p>

				<p>This question is best-viewed as "Do you use (insert platform here) cloud save functionality?"</p>

				<p>For example:</p>

				<ul><li>One game client (eg. a Nintendo Switch game console) that creates save data for a specific game and stores that save data on that same game client, and the data is shared to other game clients via a system "cloud save data" feature.</li></ul>
				<p>Yes, this was an example from the "are there multiple writers?" question - if you have your save data managed by a cloud service, it may be beneficial to lock out players from playing the game if they're offline.</p>
				<p>This is common on smartphone games, where a device is almost-always used when online. Systems like Google Play Games manage save data, and are always online.</p>
				<p>Additionally, you can be the trusted third party to the game. Meaning:</p>

				<ul><li>If you're running your own identity system, you are the trusted third party for your player data.</li><li>If you're running your own game networking system, are you building your own dedicated servers? If so, you are the trusted third party for player data.</li></ul>


				<p>If you have to continuously run and maintain a service for the game to run or for the game data to be verified, then you are the trusted third party.</p>

				<p>Blockchain is meant to let the clients or end-users be in charge, figuring out their own trust based on the rules of the system. Blockchains exist to make sure everyone can verify all other writers in the system. It assumes that no one can be trusted, therefore everyone must be validated by each other.</p>

				<p>If you have a trusted third party (TTP), then whatever that TTP says is "the law" - the TTP is in charge.</p>

				<pre><code>Hey! Careful here - the usual "yes, move on" does not apply!
				</code></pre>
				<p>If you answered "no" to this question, you can move on to the next question.</p>
				<p>If you answered "yes" to this question, then you don't need a blockchain. You can stop here.</p>


				<SubheadingAnchor headingLevel={"h3"}>
					Are all writers known?
				</SubheadingAnchor>
				<p>This one can be hard to think of, depending on your game.</p>

				<p>Videogames are front-end applications, fundamentally.<br />If you don't know who is running your front-end, then you are opening yourself to responsibilities of any negative actions that malicious users perform.<br />You should know who is interacting with your backend or online systems, so you should be able to identify each front-end client that would be performing those interactions.<br />Videogames have numerous personally-identifying pieces of data in them, as well as the ability to use the software and hardware on the game-executing device to create personally-identifying pieces of data.</p>

				<p>For example, even if you don't run an account system that lets humans set up usernames - consoles like the Nintendo Switch provide a device identifier that you can access and use in your game.</p>


				<p>Slightly related to this issue of known writers is the rise of dedicated servers.</p>

				<p>Peer-to-peer network communication is the most common way that writers would not be known. You only know about peers when they're already actively doing things to the save data or interacting with your game client, and you may not be able to identify those peers if they disconnect and reconnect later (but as above, your game client can do things about that!). There's no pre-check or verification system in place there - peers/writers just write data and communicate those changes to the other peers.</p>

				<p>But if your online game uses a dedicated server? Well, a dedicated server is a trusted third party to all connected players.<br />If your game uses dedicated servers, it doesn't matter if you don't know all writers - your players have a trusted third party in charge.</p>

				<p>If you answered "no" to this question, then you don't need a blockchain. You can stop here.</p>

				<p>If you answered "yes" to this question, you can move on to the next question.</p>




				<SubheadingAnchor headingLevel={"h3"}>
					Are all writers trusted?
				</SubheadingAnchor>
				<p>So, let's think in the context of the previous questions here:</p>
				<ul><li>you're building a multiplayer game with online connectivity</li><li>players must <strong>always</strong> be connected to the internet while running the game, even in menus</li><li>players can drop in and out, and resume their gameplay with the same game data that they had in previous sessions</li><li>you aren't using a platform-provided identity system</li><li>you aren't using a platform-provided networking system</li><li>you aren't using any cloud-hosted identity system such as Google IAM or Unity Authentication</li><li>you aren't using any dedicated servers in the online gameplay</li></ul>
				<p>The type of game that you're making must be very specific! We'll explore that more shortly.</p>
				<p>Almost all developers won't reach this point in the questionnaire.</p>
				<p>With so many ways to identify players and associate them to accounts in a system, and with so many platforms fulfilling the role of a trusted third party - blockchains become redundant in most games.</p>
				<pre><code>Hey! Careful here - the usual "yes, move on" does not apply!
				</code></pre>
				<p>If you answered "no" to this question, you can move on to the next question.</p>
				<p>If you answered "yes" to this question, then you don't need a blockchain. You can stop here.</p>







				<SubheadingAnchor headingLevel={"h3"}>
					Is your game going to be distributed or published through any of these platforms?
				</SubheadingAnchor>
				<ul><li>Steam</li><li>Microsoft Store / Xbox Store / Xbox consoles</li><li>Google Play</li><li>Apple App Store</li><li>Samsung Store</li><li>Nintendo eShop / Nintendo consoles</li><li>Playstation / Playstation Store</li><li>Epic Games Launcher</li><li><a href="http://itch.io">itch.io</a></li><li>Gamejolt</li></ul>
				<p>(Did I miss a platform? Email me!)</p>

				<p>These platforms all provide ways for your game to use them as a trusted third party.</p>
				<p>Each of those platforms or distributors have user identification built into their system. Purchases of your game in those systems are tied to a specific person - therefore, those platforms or distributors are trusted third parties. Especially if they're taking a cut of any transactions or purchases.</p>
				<p>Some platforms also ban anything related to blockchains.</p>
				<p>Some platforms require microtransactions to be handled through platform-specific tools, and are strict about what types of purchases or which financial institutions are allowed to be involved in a transaction. This may be less of an issue over time, but it's safest to just... not... use blockchains or involve any blockchain-specific data in any microtransactions or in-app purchases.</p>
				<p>If your game is going on any of these platforms, then you don't need a blockchain. You can stop here.</p>
				<p>If your game is distributed through your own systems or platforms, and paid for through your own financial institutions or through blockchain-friendly institituions, or if your game is entirely free-to-play (and distributed yourself, since platforms sometimes have strict rules about F2P game distribution!), you can continue to the next question.</p>

				<SubheadingAnchor headingLevel={"h3"}>
					Are you using any of these platforms or providers for account functionality?
				</SubheadingAnchor>

				<ul><li>Steam</li><li>Microsoft / Azure / Entra / Xbox / Xbox Live</li><li>Google / Google Play / Google Firebase / Google Identity</li><li>Apple</li><li>Playstation / Playstation Network</li><li>Nintendo / Nintendo Switch Online</li><li>Epic Games / Epic Online Services</li><li>Unity / Unity Authentication</li><li>Twitch</li><li>Discord</li><li>GitHub</li><li>Account integration to a social media platform</li><li>Custom accounts through your own backend and auth systems</li><li>Other (there's always more account providers than we can list!)</li></ul>

				<p>If your game uses any of those platforms or providers for account functionality, then you have trusted third parties in your game. If you can't trust data coming from them, then you can't trust any account data or money from anyone. This means that you don't need a blockchain. You can stop here.</p>

				<p>If you aren't using any options above - even your own account/auth system - then your authentication systems rely on hashes to protect a user's data. That's fine... in some cases, and only for now.</p>

				<p>Hashes are an awesome piece of computer cryptography, and there's plenty of reading about it - I'll include some of the highlights of my favourite article:</p>
				<ul>
					<li>
						<a href="https://supertokens.com/blog/password-hashing-salting">
							https://supertokens.com/blog/password-hashing-salting
						</a>
					</li>
				</ul>

				<p>So, let's say that a user has a password of "12345".<br />The hash for that password is "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5".</p>
				<p>If you don't use a cloud-based authentication system, then that hash is stored in an entry on a blockchain. In public. For everyone to see.</p>
				<p>What happens if two users both have "12345" as their password?</p>

				<p>There'll be two entries in the blockchain with a password value of "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5".</p>

				<p>If one person gets their password hacked and figured out, then both users have been hacked.</p>

				<p>This means that as more users use your game, the data becomes less secure.</p>


				<p>This becomes especially problematic, as people are likely to reuse passwords across their various apps, accounts, systems, devices, and so on. If they used "12345" as the password for your game, what else did they use that password for?</p>

				<p>"Rainbow tables" are a public set of precomputed password hashes. Common passwords and their equivalent hashes. If you see a rise in "Did you try to log in? Here's a 2FA code" alerts on your social media accounts, it usually means your password recently got added to a rainbow table for hackers to use.</p>


				<p>Now, "salt" can be added to a hash to solve this problem. But salts are brief, and the functions that create hashes and salts are designed to be quick to run. A hacker could run their own hash &amp; salt functions to see what results they get, and eventually see the same results as your own system.</p>


				<p>This means that even a salted, hashed password could get figured out and hacked. It takes a while, which means any data related to this password should be minimized (eg. don't store hashed emails and hashed usernames in a blockchain entry, just the game product-specific user ID and hashed password).</p>


				<p>There's a whole big thing about how quantum computing threatens this, but that's not really a focus here.</p>

				<p>Cloud systems / trusted third-parties run the same way, but the <em>architecture</em> of those systems is what keeps their data secure. Meaning, any data on a blockchain must be public forever - that's an open invitation for hackers to try and try again until they break what they want to break.</p>
				<p>Cloud systems can impose limits and rules on the usage of those cloud systems. Maybe databases can only be accessed X times per second, or can only be accessed by approved cloud systems, or can only be accessed by game clients with valid token for some other cloud system, or so on and so on.</p>

				<p>If a blockchain adds functionality like that, well... that's just a cloud system wrapped around a blockchain. What's the point of the blockchain there?</p>

				<p>If you're confident that your authentication system does not need cloud architecture and is handled safely &amp; completely through a public blockchain, alright... Move on to the next question.</p>

				<SubheadingAnchor headingLevel={"h3"}>
					Does your game rely on networked, real-time gameplay?
				</SubheadingAnchor>

				<p>
					Basically: is your online multiplayer game turn-based? If so, continue to the next question.

					If not, stop here. You don't need a blockchain.

					Blockchains are slow to run. Yes, they may get faster over time as improvements are made or new blockchains are developed - but the act of verifying data across a blockchain is slow.

					It's not suitable for all types of game data, and not suitable for all genres of games.
				</p>

				<SubheadingAnchor headingLevel={"h3"}>
					Is public verifiability required?
				</SubheadingAnchor>

				<p>
					Public verifiability is a way of saying that all transactions, changes or commands within a system of data can be proven by any and all users regardless of their roles or authorization.

					Any user can see and confirm the data of any other user.

					It's not always relevant to games, but it's useful for things like tracking ownership history of a commodity within a game's economy. Maybe someone uncovered an epic legendary item, and your system tracks every player that ever held it in their inventory? That's relevant to this question.

					Private permissioned blockchains exist, meaning that data can exist in a blockchain without being completely public. But as mentioned in a previous question: the more features or mechanics added to a blockchain to help manage the data, the better you'd be with a typical cloud architecture system instead.

					If you reached this point in the questionnaire, then your game is extremely specific and not at all like the majority of games out in the world.

					You could need a blockchain.
				</p>
			</div>

			<div>
				<SubheadingAnchor headingLevel="h2">
					Summary
				</SubheadingAnchor>
				<p>This is a very opinionated questionnaire. I know.</p>
				<p>I teach IT - I help people learn about cloud services, databases, and so on.</p>
				<p>
					Blockchains - to me - seem like a poor wannabe database with extra steps, and a heap of extra vulnerabilities.
				</p>
				<p>Even if your browser-based, turn-based, indie game uses a blockchain - you need to understand that it really only has decent appropriateness for some mechanics and some situations.</p>
				<p>
					Maybe you&apos;re aiming to make chain-based commerce between your game&apos;s chain and some other chain? Sounds cool, but that&apos;s specifically a huge attack vector to the tune of $2B in losses from 2022 (source below).
				</p>
				<p>
					It&apos;s hard to find &quot;we&apos;re so glad this game was built on a blockchain&quot;-type stories where the game mechanic couldn&apos;t just be done via a database (eg. every blockchain-based pet game = use a database!), but there&apos;s plenty of &quot;this game was hacked and disastrous consequences occured based on the hacking avenue provided by this blockchain-based technology&quot;:
				</p>
				<ul>
					<li>
						<a href="https://www.animocabrands.com/animoca-brands-update-on-hacking-of-discord-server-of-phantom-galaxies-will-cover-users-losses">
							24 November 2021 - Animoca Brands update on hacking of Discord server of Phantom Galaxies, will cover users&apos; losses
						</a>
					</li>
					<li>
						<a href="https://arstechnica.com/gaming/2022/03/how-did-a-hacker-steal-over-600-million-from-a-crypto-gaming-blockchain/">
							30 March 2022 - How did a hacker steal over $600 million from a crypto gaming blockchain?
						</a>
					</li>
					<li>
						<a href="https://cointelegraph.com/news/2b-in-crypto-stolen-from-cross-chain-bridges-this-year-chainalysis">
							04 August 2022 - $2B in crypto stolen from cross-chain bridges this year
						</a>
					</li>
					<li>
						<a href="https://www.investopedia.com/news/largest-cryptocurrency-hacks-so-far-year/">
							17 November 2022 - The Largest Cryptocurrency Hacks So Far
						</a>
					</li>
				</ul>
				<p>Please, just use existing technologies instead of this Web3 junk.</p>
				<p>There are plenty of legislations, SDKs, tutorials, support resources, and so on for standard cloud backend + database-based services. Just use those.</p>
				<p>Keep your customers safe, and make products that let your business grow safely.</p>
			</div>
		</div>
	)
}

export default VideogamesDontNeedBlockchain;