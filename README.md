## Transmission Web Interface

**NOT COMPLETE**

![Image](http://i.imgur.com/tAMpwA5.png)

### Features

- [ ] Integrate with transmission-rpc REST API
 * Use an angular factory to do this (already started)
 - This is somewhat started; some stuff works (pulling all torrents, for instance)
- [x] Fix keyboard service; get working with `Command`, `Ctrl`, & `Shift`
- [ ] Think of a better UI for specific torrent info (modal isn't best!)
 - # of transfers
 - DL/UL status
 - Settings icon (launch a modal?)
- [ ] Integrate a modal service
 - Might create my own; use an existing one
- [x] Integrate DL/UL stats onto list item
 - Add additional stats (time remaining, complete status)
- [ ] Offer an alternate view with more detail (cards?)
- [ ] Get click/dbl-click working on list item
- [ ] Tighten up animations
 - The animations on the navbar are nice, but could be smoother, better
- [ ] Use an `$httpInterceptor` to handle errors
- [ ] Use a `loadingInterceptor` to show loading status
 - I'd like this to be "inline" with the content
- [x] Optimize "search active" icon
- [x] Figure out why mobile has extra padding to right (causing scrollbar)
- [x] Get `smart-filter` working again
- [x] Show status indicators on list item (% downloaded, completed, seeding/downloading, etc.)
- [X] Update toolbar with more filtering functionality
- [x] When search icon is active, swap out the search icon to make it more visible search is active
 - Probably use a blue, "glowing" icon for this
- [x] Add a "footer" with various functionality, such as:
- [X] Add `noselect` class to navbar elements
- [X] Get `has-focus` directive working

### Fixes

- [ ] Fix mobile filtering functionality
 - Is currently a little wacky.. explicit CSS `height` property is too small
