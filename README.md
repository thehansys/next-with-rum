## Getting Started
### Steps to reproduce the issue

1. `git clone git@github.com:thehansys/next-with-rum.git`
2. `npm install`
3. `layer0 build`
4. `layer0 run -p`

Open the http://localhost:3000 in web browser and open developer tools. 
You can find a link with wrong prefetch URL in HTML DOM `<head>` tag.
