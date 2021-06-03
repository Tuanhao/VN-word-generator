# VN-word-generator
Web app where user can generate random Vietnam words. 

## Implement details:
https://www.notion.so/VN-word-generator-d4730e7b5528470ebcb60105f76a5a03 

## Features:
- Word types are split into 3 categories: nouns, adjective, verb.
- The default option for word type is "noun".
- User can choose word type "all", which consists all the words.
- Each category will have 100 words.
- User can generate up to 5 words per time.
- User can save words, and retrieve the saved words on the next time visit.

## Behaviours:

- Backend aways returns the whole list of words for each category inquiry. Front end controls which words to choose and show.
- Creating a saved list: After the user click on saving a word, a new Firestore document is created with document-ID being shown on the front end.
- Adding word into the saved list will increase the counter (shown on the frontend).
- SavedLists collection can only store 10 users (in order to avoid getting charge for database overflown surcharge).
