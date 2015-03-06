MCPortfolio
===========

#Structure

The `src` dir
This is where application code goes. It is 'compiled' by gulp into the `dist` dir.

The `dist` dir
This is the webroot. Git does not track any files in this folder except contentExample.json.
All files in this folder are compiled by gulp from the src folder. 
Any changes here may be overwritten by gulp so don't edit anything here other than the content.json file.