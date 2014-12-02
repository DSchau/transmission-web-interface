## Transmission Web Interface

**NOT COMPLETE**

### To-do

1. [ ] Integrate with transmission-rpc REST API
 * Use an angular factory to do this (already started)
2. [ ] Show status indicators on list item (% downloaded, completed, seeding/downloading, etc.)
 * Want to make this work with `:active` selector.. not sure how
3. [ ] Fix keyboard service; get working with `Command`, `Ctrl`, & `Shift`
4. [ ] Think of a better UI for specific torrent info (modal isn't best!)
5. [ ] When search icon is active, swap out the search icon to make it more visible search is active
 - Probably use a blue, "glowing" icon for this
6. [ ] Add a "footer" with various functionality, such as:
 * # of transfers
 * DL/UL status
 * Settings icon (launch a modal?)
7. [ ] Integrate a modal service
 - Might create my own; use an existing one
8. [ ] Integrate DL/UL stats onto list item
9. [ ] Offer an alternate view with more detail (cards?)
10. [ ] Get click/dbl-click working on list item
11. [ ] Update toolbar with more filtering functionality
12. [ ] Tighten up animations
 - The animations on the navbar are nice, but could be smoother, better
13. [ ] Use an `$httpInterceptor` to handle errors
14. [ ] Use a `loadingInterceptor` to show loading status
 - I'd like this to be "inline" with the content
15. [ ] Add `noselect` class to navbar elements