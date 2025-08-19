# HTML

## Setting up the Environment

1.  Create a new working folder on your computer for this group assignment.
2.  Copy the files from folder `templates` to the folder.

## Task

### Form Group and Create Team Page

Form a group with a maximum of four members (3-4 people per learning team).

Create a team introduction website with member profile pages. The template for the main page of the website is `index.html`.

The introduction must include at least:

- Team name
- The team's common goals
- Links to member profiles

Feel free to add any additional information!

Each team member installs the team site on their personal computer to be able to view the site.

### Create member profiles and link them to the Team page

Create a member profile page for each member. The template for the profile pages is `member.html`.

The profiles must include at least:
 
 - Last name and first name
 - Skills the member brings to the team

Feel free to add any additional information!

Each team member adds the profile pages to the team site on their personal computer to be able to view the profiles.

### Add a JavaScript program

As an example, add a small JavaScript program to the main page. The program displays the current date and time in the page footer and updates it every second.

Here is code:

```javascript
    function displayDateTime() {
        let dateTimeElement = document.getElementById("datetime");
        dateTimeElement.innerHTML = new Date().toLocaleString('fi');
    }

    setInterval(displayDateTime, 1000);
```

Add the code into the `script` tag in `index.html`.

__Note!__  Don't worry if you don't fully understand everything yet, just try it out! The goal is to get familiar with the principle of how JavaScript programs are added to a web page. 

## Bonus tasks

Challenge yourself with bonus tasks to reach the next level!

### Logo

Add Haaga-Helia logo to the header of the pages. There is a placeholder for the logo in the template.

You'll need to either find a logo image and either copy it to your site or link it. 
