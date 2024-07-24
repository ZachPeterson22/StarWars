### README

### To Run

Basic React app, setup should be simple.

- clone repo
- npm install
- npm run start

App will auto display all characters

Can search by name or homeworld of a character (was not able to get species to work in time)

Search bar updates every character type (ex. Typing 't' or 'T' will show any character name and homeworld that has a 't' in it)

### BUGS

Small issue with deleting your input in search causes the app to not display anything but still is searchable, just has bad UX with data loading

If you type in the search too fast it will break the homeworld name due to loading issues

Homeworld display will break after too many requests (necessary refactor mentioned in Other Notes)

Does not search by species name

### Other Notes

Went with basic styling, black boxes and centered display, didn't get time to make it look pretty due to other issues I decided were more important

Would defenitely refactor to adhere for the copious endpoint calls to minimize re rendering and load times, seems to be the main crux of my current implementation

The searching for homeworld and species were a bigger to tackle due to how their data is stored in a character

If homeworld is not included int he search bar logic, the search works fine but breaks when you delete your input, seems to have an issue once you put the first character in (mentioned in bugs)