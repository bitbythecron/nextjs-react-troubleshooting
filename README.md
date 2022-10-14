# nextjs-react-troubleshooting

To install FontAwesome I ran:
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```

Then I added some FA imports in `index.js`:
```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatChef } from '@fortawesome/free-solid-svg-icons'
```

But when I run `npm run dev` I get:
```
Could not find icon null
```
