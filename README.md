# Angular Assignment

Here is the repo for the Angular assignment. Written in AngularJS version 1.5.

I would normally put the API key in a .env file, and would do so in a professional setting. So that you could survey my app with an already-existant set of data, I left it in.

The following tutorial was written for Mac OS, requires NPM (Node Package Manager). Instructions for CentOS/RHEL included.

### Getting Started (Mac)

Outlined below is my method of serving this app.

```
git clone https://github.com/Wai-Yan/CRUDAngularApp.git
cd CRUDAngularApp/
```

You'll need to run npm install:

```
npm install
```

Then to start the server
You must be in the app's root directory (CRUDAngularApp)

```
./node_modules/http-server/bin/http-server -c-1
```

Then go to localhost:8080
From here you can access the app as intended.

### Getting Started (CentOS/RHEL)

Grab the repository
```
git clone https://github.com/Wai-Yan/CRUDAngularApp.git
```

You can run these to get Node onto your CentOS system

```

sudo yum -y install epel-release
sudo yum -y install npm
npm install
```

Then to start the server
You must be in the app's root directory (CRUDAngularApp)

```
./node_modules/http-server/bin/http-server -c-1
```

Then go to localhost:8080
From here you can access the app as intended.

## Author

* **Wai Yan** - *Developer* - (https://github.com/Wai-Yan)
