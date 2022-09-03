### Install firebase CLI
curl -sL https://firebase.tools | bash;

### Install the basic app
npm create svelte@latest;

### Install the firebase node package
npm i rxfire firebase rxjs;

### Install tailwindcss and add config files
npm install -D tailwindcss postcss autoprefixer svelte-preprocess;
npx tailwindcss init tailwind.config.cjs -p;
mv ./src/tailwind.config.cjs ./;
mv ./src/svelte.config.js ./;

### File management
mv ./+page.svelte ./src/routes/+page.svelte;
rm ./install.sh;

### Final lauching
npm install;
npm run dev;
