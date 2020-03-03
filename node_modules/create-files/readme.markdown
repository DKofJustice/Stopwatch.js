# create-files

[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/create-files.svg)](https://greenkeeper.io/)

create-files

I find myself adding the same files to most projects

eg

* LICENSE
* .gitignore
* package.json

for package.json I use [pkginit](http://npm.im/pkginit) but wanted a
solution for the others.

So I created this simple utility for me.

It reads the gist or url given and downloads the files.

The first time it runs it will prompt for the url and remember it.

# manifest

contains the filenames and urls.

```json
{
 "files": [
   {".travis.yml" : "https://gist.githubusercontent.com/JamesKyburz/647f93b862eb71745fed/raw"},
   {".zuul.yml" : "https://gist.githubusercontent.com/JamesKyburz/a1adfeafb15f7a25c40c/raw/"},
   {"LICENSE" : "https://gist.githubusercontent.com/JamesKyburz/f67ebb7e160ccc93d2ac/raw/"},
   {".gitignore" : "https://gist.githubusercontent.com/JamesKyburz/b6bde24344ef7fd189ef/raw/"}
 ]
}
```

# install

With [npm](https://npmjs.org) do:

```
npm install create-files
```

# license

MIT
