How to reproduce the loop i have on my computer :

Dependencies :

```

    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babelify": "^7.2.0",
    "watchify": "^3.6.1"

```

```npm install```

Check everything is working as intended :

```npm run working```
or :
```watchify ./working.jsx -o ./app.js -t [babelify --presets [es2015 react] ] -v```

Check index.html, it should display 'Hello World this is working'

If you modify working.jsx you will rebuild.

Now the bug :

```npm run looping```
or :
```watchify ./app.jsx -o ./app.js -t [babelify --presets [es2015 react] ] -v```

The bug I have is that watchify is continuously rebuilding :
```
798 bytes written to ./app.js (0.71 seconds)
798 bytes written to ./app.js (0.04 seconds)
798 bytes written to ./app.js (0.05 seconds)
798 bytes written to ./app.js (0.05 seconds)
798 bytes written to ./app.js (0.03 seconds)
798 bytes written to ./app.js (0.02 seconds)
798 bytes written to ./app.js (0.03 seconds)
798 bytes written to ./app.js (0.04 seconds)
```

This bug happens when the target is named 'app.js' and the file watched 'app.jsx'. Although the two files are different files, it seems that writing 'app.js' is triggering the watch event on 'app.jsx' and rebuild. Since 'app.js' is generated again, it triggers again, etc.  

If the two files are named app.jsx and app.js but in different folders, the loop is not happening.