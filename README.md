## SVELTEKIT-FIREBASE *quickstarter*
I'm sick of the 'begining a new project' pain.
So I choosed Svelte as the easiest framework on the place with firebase to make this 'project quickstarter'.
The goal is to minimize the step between me having the an idea and me coding the interesting part of it.

It includes :
- A script to install and init everything we need for the project
- A /src folder with :
	1. A basic web app template
	2. An authentication login
	3. A firebase.ts config file
	4. A tailwindcss config
	5. Some other things that I like to have

### QUICKSTART of the QUICKSTARTER
```
export PROJECT_NAME="your project name"
```
```
git clone https://github.com/QuentinPoto/svelte_firebase_quickstarter.git $PROJECT_NAME
cd $PROJECT_NAME 
./install.sh
```
It will install everything for you.
Then you just have to get your firebase config and put it in the `src/lib/firebase.ts` and run `npm run dev`

All the help:
1. [Firebase](https://firebase.google.com/docs/web/setup?authuser=0&hl=fr)
2. [Tailwind](https://tailwindcss.com/docs/guides/sveltekit)
3. [RxJS](https://rxjs.dev/guide/installation)
4. [RxFire](https://github.com/FirebaseExtended/rxfire)
5. [SvelteKit](https://kit.svelte.dev/docs/introduction)

*If you want to help, you're welcome*
### TODOs
1. Make this project a rust CLI tool
2. Check if all the dependencies are here before the installation
3. Abstract the two first svelte-create questions (about directory)
4. Adding a Window (the OS) version
5. Adding fancy emojis to this README file
6. Get all of your ideas
