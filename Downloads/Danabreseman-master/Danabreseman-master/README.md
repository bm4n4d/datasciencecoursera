## using git
git is version control for saving all of my progress and I should really go through all of these steps in the command prompt

`git add [file name]` adds new files to git
	Which is how I made `articles.jade` and `README.md`

`git commit -a -m` or `git commit -am "[message]"` saves this versions, adds the file, and leaves a message explaining what has just been committed
	`-a` is short for `--add`
	`-m` is short for `--message`

'git status' Looks at git and tells me what is in there and what the state of it all is

`git push github master` Uploads code by pushing to github

`git push origin master` Pushes code live to wesbite

`ctrl + C` cancels process in cmd line


## Local development
to check out what I have done

`supervisor ./bin/www` automatically commits changes and is a good idea to leave in a separate command prompt so that I don't have to exit it each time

go to `localhost:3000` to see the website using a local file


## Extra notes

Learn `markdown` aka `.md` as the language for readmes

Check out code on desirable websites to add interesting features

Jade is a pretty version of html and css but most code is written in javascript

If I make new tabs in `views` make sure to updates `routes` as well as `layout`

Check out website and readme on either heroku or github

Save sublime very often

If cmd doesn't find something I've added, close it and open it again

There are notes about how to change directories at `start.tessel.io`

Push up to scroll through recent things typed


##Next things to add

Sections
	Articles should include pictures, hyperlink, and quote
	Projects and Adventures should include current and future
	CV

Styling
	Scrolljacking