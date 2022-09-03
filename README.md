## 🔥 SVELTEKIT & FIREBASE *quickstarter 🚀*
I'm sick of the 'begining a new project' pain.
So I choosed Svelte (as the easiest and better framework on the place 🕶) and firebase to make this 'project quickstarter'.
The goal is to minimize the step between me having an idea and me working on the interesting part of it.

---

#### It includes 🗒 :
- A script to install and init everything we need for the project
- A /src folder with :
	- A basic web-app template
	- An authentication logic
	- A firebase.ts config file
	- A tailwindcss configuration
	- Some other things that I like to have

---

### QUICKSTART of the QUICKSTARTER 🕹
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
- [Firebase](https://firebase.google.com/docs/web/setup?authuser=0&hl=fr)
- [Tailwind](https://tailwindcss.com/docs/guides/sveltekit)
- [RxJS](https://rxjs.dev/guide/installation)
- [RxFire](https://github.com/FirebaseExtended/rxfire)
- [SvelteKit](https://kit.svelte.dev/docs/introduction)

---

### TODOs ✍️
1. Make this project a rust CLI tool
2. Check if all the dependencies are here before the installation
3. Abstract the two first svelte-create questions (about directory)
4. Adding a Window (the OS) version

*If you want to help, you're welcome 🖐*
