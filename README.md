# JS Webdev Fiddle

JS Webdev Fiddle is a sandbox for rapid web development with JavaScript.

It has a web server with auto reloading, so you can quickly code, prototype and preview the changes. 

## Installation

Use git clone to clone this repository and install the dependencies.

```bash
git clone matthib/js-webdev-fiddle
npm install
```

## Usage

The source code is located under `src/` and will be generated to the `dist/` folder by the webpack build process.

To start just run the following command in the console: 
```bash
npm start
```

This will start the webserver at [http://localhost:8080/](http://localhost:8080/) and render the HTML code. Any changes you make in the `src/` folder will be automatically detected and the webserver reloaded.

Also the following commands are available:
```bash
# Triggers a manual webpack build of src/
npm run build  
# Triggers an automatic webpack build whenever a file changes in src/
npm run build  
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)


```
Happy hacking!
      _.-'''''-._
    .'  _     _  '.
   /   (o)   (o)   \
  |                 |
  |  \           /  |
   \  '.       .'  /
    '.  `'---'`  .'
      '-._____.-'
```