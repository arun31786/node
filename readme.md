# Code Coverage #

## Day1 

* Download and install Node (https://nodejs.org/en/)
	* npm (Installed with node)
	* npm -v
* Create a new project with npm
	* npm init
		* <b>package.json</b> file is created by npm
* Download a dependency and append in package.json
	* npm install name --save
	* npm i name -S
* Read <i>package.json</i> and install all the dependencies saved in package.json
	* npm install
	* npm i
* Set Npm to work with proxy
	* npm config set proxy http://proxy.company.com:8080
	* npm config set https-proxy https://proxy.company.com:8080
	
	* npm config set proxy http://username:password@proxy.company.com:8080
	* npm config set https-proxy https://username:password@proxy.company.com:8080
* Unset npm proxy settings
	* npm config delete http-proxy
	* npm config delete https-proxy
	* npm config rm proxy
	* npm config rm https-proxy
	* set HTTP_PROXY = null
	* set HTTPS_PROXY = null
* IDE
	compiler, debugger, text editor	
	- WebStorm
	- Brackets
	- Visual Studio Code (Recommended for this session)
* Browser
	* Chrome
	* Opera
	* Firefox
* MongoDB
	* database	
		* server (js)
		* Client (js)
		* DB (js)

