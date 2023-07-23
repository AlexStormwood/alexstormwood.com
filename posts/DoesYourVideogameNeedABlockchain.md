---
title: Does your videogame need a blockchain?
description: An explainer on blockchain's place in gaming.
date: 2023-07-24
tags:
  - web3
  - gamedev
  - blockchain
layout: layouts/post.njk
---

# Short Answer

For the majority of game developers and their games: 

no.

# Long Answer

There are several questions to ask before committing to add blockchain-based functionality to your game.

The questions below are ordered in terms of dependencies; meaning that if you cannot proceed past one question, then all further questions are irrelevant and you have gained your answer already.

## Does the game need to store any state or save any data at all?

If you answered "no" to this question, then you don't need a blockchain. You can stop here.

It's very rare for games to exist without the need to save data these days - this is more applicable to arcade games, especially the type where you could enter a code to resume your progress instead of selecting saved data from a user interface. 

And even then, the more-popular arcade games often stored at least a leaderboard of high scores as their save data.

Most developers should answer "yes" to this question, and move on to the next question.

## Are there multiple writers?

A "writer" is a source of save data, or an editor of save data.

It's a bit of an abstract concept, so here are some examples:

- One game client (eg. a Nintendo Switch game console) that creates save data for a specific game and stores that save data on that same game client, and the data is never shared to other game clients. There is only one writer in this example.

- One game client (eg. a Nintendo Switch game console) that creates save data for a specific game and stores that save data on that same game client, and the data is shared to other game clients via a system "cloud save data" feature. Even if the same player or human is responsible for all game clients in this system, there are now multiple clients in this system. Which game client is the source of truth? What happens when a game client makes save data modifications while offline and unable to sync with the other game clients? There are multiple writers in this example.

- One game server runs a game that game clients can connect to. The game server is authoritative, but allows the game clients to send human inputs to the server to control characters and interact with the world. Even if the game server has incredible logic to maintain authority over the save data, maintaining the legitimacy of game client inputs is a case of "whack-a-mole" -- there could be hackers, there could be glitches, or any other unforeseen thing that allows game clients to temporarily game authority over some save data. There are multiple writers in this system.

A single writer or editor of data is the sole source of truth for that data. 

Multiple writers introduce the issue of trust. A system without multiple writers has no trust issue.

Blockchains _can_ address trust issues.

Compare your game to the examples above. 

If you answered "no" to this question, then you don't need a blockchain. You can stop here.

If you answered "yes" to this question, you can move on to the next question.

## Can you use an always-online trusted third-party to verify any data?

A trusted third-party is an owner or verifier of data that exists outside of the game. This means that they must also be online, and always available.

If the game client is offline, save data cannot be verified.

This question is best-viewed as "Do you use (insert platform here) cloud save functionality?"

For example:

- One game client (eg. a Nintendo Switch game console) that creates save data for a specific game and stores that save data on that same game client, and the data is shared to other game clients via a system "cloud save data" feature. 

Yes, this was an example from the "are there multiple writers?" question - if you have your save data managed by a cloud service, it may be beneficial to lock out players from playing the game if they're offline.

This is common on smartphone games, where a device is almost-always used when online. Systems like Google Play Games manage save data, and are always online.

Additionally, you can be the trusted third party to the game. Meaning:

- If you're running your own identity system, you are the trusted third party for your player data.
- If you're running your own game networking system, are you building your own dedicated servers? If so, you are the trusted third party for player data.

If you have to continuously run and maintain a service for the game to run or for the game data to be verified, then you are the trusted third party. 

Blockchain is meant to let the clients or end-users be in charge, figuring out their own trust based on the rules of the system. Blockchains exist to make sure everyone can verify all other writers in the system. It assumes that no one can be trusted, therefore everyone must be validated by each other. 

If you have a trusted third party (TTP), then whatever that TTP says is "the law" - the TTP is in charge.


```
Hey! Careful here - the usual "yes, move on" does not apply!
```

If you answered "no" to this question, you can move on to the next question.

If you answered "yes" to this question, then you don't need a blockchain. You can stop here.



## Are all writers known?

This one can be hard to think of, depending on your game.

Videogames are front-end applications, fundamentally. 
If you don't know who is running your front-end, then you are opening yourself to responsibilities of any negative actions that malicious users perform. 
You should know who is interacting with your backend or online systems, so you should be able to identify each front-end client that would be performing those interactions. 
Videogames have numerous personally-identifying pieces of data in them, as well as the ability to use the software and hardware on the game-executing device to create personally-identifying pieces of data.

For example, even if you don't run an account system that lets humans set up usernames - consoles like the Nintendo Switch provide a device identifier that you can access and use in your game.

Slightly related to this issue of known writers is the rise of dedicated servers. 

Peer-to-peer network communication is the most common way that writers would not be known. You only know about peers when they're already actively doing things to the save data or interacting with your game client, and you may not be able to identify those peers if they disconnect and reconnect later (but as above, your game client can do things about that!). There's no pre-check or verification system in place there - peers/writers just write data and communicate those changes to the other peers.

But if your online game uses a dedicated server? Well, a dedicated server is a trusted third party to all connected players. 
If your game uses dedicated servers, it doesn't matter if you don't know all writers - your players have a trusted third party in charge.

If you answered "no" to this question, then you don't need a blockchain. You can stop here.

If you answered "yes" to this question, you can move on to the next question.

## Are all writers trusted?

So, let's think in the context of the previous questions here:

- you're building a multiplayer game with online connectivity
- players must **always** be connected to the internet while running the game, even in menus
- players can drop in and out, and resume their gameplay with the same game data that they had in previous sessions
- you aren't using a platform-provided identity system 
- you aren't using a platform-provided networking system
- you aren't using any cloud-hosted identity system such as Google IAM or Unity Authentication
- you aren't using any dedicated servers in the online gameplay

The type of game that you're making must be very specific! We'll explore that more shortly.

Almost all developers won't reach this point in the questionnaire.

With so many ways to identify players and associate them to accounts in a system, and with so many platforms fulfilling the role of a trusted third party - blockchains become redundant in most games.


```
Hey! Careful here - the usual "yes, move on" does not apply!
```

If you answered "no" to this question, you can move on to the next question.

If you answered "yes" to this question, then you don't need a blockchain. You can stop here.


## Is your game going to be distributed or published through any of these platforms?

- Steam
- Microsoft Store / Xbox Store / Xbox consoles
- Google Play
- Apple App Store
- Samsung Store
- Nintendo eShop / Nintendo consoles
- Playstation / Playstation Store
- Epic Games Launcher
- itch.io
- Gamejolt

(Did I miss a platform? Email me!)

These platforms all provide ways for your game to use them as a trusted third party.

Each of those platforms or distributors have user identification built into their system. Purchases of your game in those systems are tied to a specific person - therefore, those platforms or distributors are trusted third parties. Especially if they're taking a cut of any transactions or purchases.

Some platforms also ban anything related to blockchains.

Some platforms require microtransactions to be handled through platform-specific tools, and are strict about what types of purchases or which financial institutions are allowed to be involved in a transaction. This may be less of an issue over time, but it's safest to just... not... use blockchains or involve any blockchain-specific data in any microtransactions or in-app purchases. 

If your game is going on any of these platforms, then you don't need a blockchain. You can stop here.

If your game is distributed through your own systems or platforms, and paid for through your own financial institutions or through blockchain-friendly institituions, or if your game is entirely free-to-play (and distributed yourself, since platforms sometimes have strict rules about F2P game distribution!), you can continue to the next question.

## Are you using any of these platforms or providers for account functionality?

- Steam
- Microsoft / Azure / Entra / Xbox / Xbox Live
- Google / Google Play / Google Firebase / Google Identity
- Apple
- Playstation / Playstation Network
- Nintendo / Nintendo Switch Online
- Epic Games / Epic Online Services
- Unity / Unity Authentication
- Twitch
- Discord
- GitHub
- Account integration to a social media platform
- Custom accounts through your own backend and auth systems
- Other (there's always more account providers than we can list!)

If your game uses any of those platforms or providers for account functionality, then you have trusted third parties in your game. If you can't trust data coming from them, then you can't trust any account data or money from anyone. This means that you don't need a blockchain. You can stop here.

If you aren't using any options above - even your own account/auth system - then your authentication systems rely on hashes to protect a user's data. That's fine... in some cases, and only for now.

Hashes are an awesome piece of computer cryptography, and there's plenty of reading about it - I'll include some of the highlights of my favourite article:

- https://supertokens.com/blog/password-hashing-salting 

So, let's say that a user has a password of "12345".
The hash for that password is "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5".

If you don't use a cloud-based authentication system, then that hash is stored in an entry on a blockchain. In public. For everyone to see.

What happens if two users both have "12345" as their password?

There'll be two entries in the blockchain with a password value of "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5".

If one person gets their password hacked and figured out, then both users have been hacked. 

This means that as more users use your game, the data becomes less secure. 

This becomes especially problematic, as people are likely to reuse passwords across their various apps, accounts, systems, devices, and so on. If they used "12345" as the password for your game, what else did they use that password for?

"Rainbow tables" are a public set of precomputed password hashes. Common passwords and their equivalent hashes. If you see a rise in "Did you try to log in? Here's a 2FA code" alerts on your social media accounts, it usually means your password recently got added to a rainbow table for hackers to use.

Now, "salt" can be added to a hash to solve this problem. But salts are brief, and the functions that create hashes and salts are designed to be quick to run. A hacker could run their own hash & salt functions to see what results they get, and eventually see the same results as your own system. 

This means that even a salted, hashed password could get figured out and hacked. It takes a while, which means any data related to this password should be minimized (eg. don't store hashed emails and hashed usernames in a blockchain entry, just the game product-specific user ID and hashed password).

There's a whole big thing about how quantum computing threatens this, but that's not really a focus here. 

Cloud systems / trusted third-parties run the same way, but the *architecture* of those systems is what keeps their data secure. Meaning, any data on a blockchain must be public forever - that's an open invitation for hackers to try and try again until they break what they want to break.

Cloud systems can impose limits and rules on the usage of those cloud systems. Maybe databases can only be accessed X times per second, or can only be accessed by approved cloud systems, or can only be accessed by game clients with valid token for some other cloud system, or so on and so on. 

If a blockchain adds functionality like that, well... that's just a cloud system wrapped around a blockchain. What's the point of the blockchain there?


If you're confident that your authentication system does not need cloud architecture and is handled safely & completely through a public blockchain, alright... Move on to the next question.

## Does your game rely on networked, real-time gameplay?

Basically: is your online multiplayer game turn-based? If so, continue to the next question.

If not, stop here. You don't need a blockchain.

Blockchains are slow to run. Yes, they may get faster over time as improvements are made or new blockchains are developed - but the act of verifying data across a blockchain is slow.

It's not suitable for all types of game data, and not suitable for all genres of games.

## Is public verifiability required?

Public verifiability is a way of saying that all transactions, changes or commands within a system of data can be proven by any and all users regardless of their roles or authorization.

Any user can see and confirm the data of any other user.

It's not always relevant to games, but it's useful for things like tracking ownership history of a commodity within a game's economy. Maybe someone uncovered an epic legendary item, and your system tracks every player that ever held it in their inventory? That's relevant to this question.

Private permissioned blockchains exist, meaning that data can exist in a blockchain without being completely public. But as mentioned in a previous question: the more features or mechanics added to a blockchain to help manage the data, the better you'd be with a typical cloud architecture system instead.

If you reached this point in the questionnaire, then your game is extremely specific and not at all like the majority of games out in the world.

You could need a blockchain. 

# End?!

This is a very opinionated questionnaire. I know.

I teach IT - I help people learn about cloud services, databases, and so on.

Blockchains - to me - seem like a poor wannabe database with extra steps, and a heap of extra vulnerabilities.

Even if your browser-based, turn-based, indie game uses a blockchain - you need to understand that it really only has decent appropriateness for some mechanics and some situations.

Maybe you're aiming to make chain-based commerce between your game's chain and some other chain? Sounds cool, but that's specifically a huge attack vector to the tune of $2B in losses from 2022 (source below).

It's hard to find "we're so glad this game was built on a blockchain"-type stories where the game mechanic couldn't just be done via a database (eg. every blockchain-based pet game = use a database!), but there's plenty of "this game was hacked and disastrous consequences occured based on the hacking avenue provided by this blockchain-based technology":

- [24 November 2021 - Animoca Brands update on hacking of Discord server of Phantom Galaxies, will cover users' losses](https://www.animocabrands.com/animoca-brands-update-on-hacking-of-discord-server-of-phantom-galaxies-will-cover-users-losses)
- [30 March 2022 - How did a hacker steal over $600 million from a crypto gaming blockchain?](https://arstechnica.com/gaming/2022/03/how-did-a-hacker-steal-over-600-million-from-a-crypto-gaming-blockchain/)
- [04 August 2022 - $2B in crypto stolen from cross-chain bridges this year](https://cointelegraph.com/news/2b-in-crypto-stolen-from-cross-chain-bridges-this-year-chainalysis)
- [17 November 2022 - The Largest Cryptocurrency Hacks So Far](https://www.investopedia.com/news/largest-cryptocurrency-hacks-so-far-year/)

Please, just use existing technologies instead of this Web3 junk.

There are plenty of legislations, SDKs, tutorials, support resources, and so on for standard cloud backend + database-based services. Just do those.

Keep your customers safe, and make products that let your business grow safely.