# GitHub Explore
Often we want to explore repositories of our favorite github users or someone by their github user name. This simple react app enables you to search any user by their github user name and allows you to navigate through all the repositories, and filter them by name.

The app also gives different stats of the user and also total repository count.

### The site is live at ### 
https://githubexplore-repos.netlify.app/  (open for any suggestions for improvement !)

### How to run the project ###

Download the folder,

Go to run "npm install" then "npm start"

### How to run the test-suites ###

Run the folloing command

"npm install @testing-library/react react-test-renderer jest-dom --save-dev" 

To run the test suite run the following command

"npm test"

### Let's begin !! ###
                        

![image](https://user-images.githubusercontent.com/97677773/149703437-eb984145-8efb-4859-bc97-038ae59d8b68.png)


#### Initial screen - hover on the search icon to search ####


![image](https://user-images.githubusercontent.com/97677773/149703722-84a9e44a-292c-41e5-9a34-41675d216210.png)

####  Now hit Enter!! ####

![image](https://user-images.githubusercontent.com/97677773/149703811-fed0d059-bcad-4cb5-b32d-b4b1002d2864.png)

#### You can see  user stats, number of repositories. If you want to search for another user type in the top left search button ####


![image](https://user-images.githubusercontent.com/97677773/149703930-f0c3f295-1e46-4d43-8231-99fd0e3fa5e0.png)

#### Search for any repository by name and it will fetch the matched results if not an error is thrown ####


![image](https://user-images.githubusercontent.com/97677773/149703985-3863ef5c-b5f4-4652-8ee7-5f740ef60868.png)


#### Also there is a pagination bar which can be used to navigate across different repositories. Note that the pagination is displayed only if the number of repositories are greater than 6. ####


![image](https://user-images.githubusercontent.com/97677773/149704104-521e2967-a5d9-4676-8d70-ad4fbb09a671.png)


### JSDocs (Documentation) ###

The files are available at following path: (https://github.com/ashwini-nagaraj/GitHub-Explore/tree/main/src/jsdocs)

### Future Improvements ###

There are many aspects which can be improved in future:

* Dynamic search, display results while the user is typing. Currently it's displayed only on ENTER
* Do not display pagination scroll if any error when searching for a repository
* Use github API V3 or greater for better handling of data
* Ofcourse more UI related changes. There is always room for improving interactiveness and responsiveness of any application!!

### Feedback about exercise ###

This task was challenging, fun since the git hub API is not pretty straight forward. It was challenging to mock one of the feature in gitHub website. It will be great to work on other features like filtering by language etc. That feature would be quiet challenging since we have to fetch the coding languages of all the public repositories of a user and then filter. Over all it was a great experience and learning opportunity!!




