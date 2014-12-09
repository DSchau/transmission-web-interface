## Transmission Web Interface

**NOT COMPLETE**

![Image](http://i.imgur.com/tAMpwA5.png)

### Features

#### New
- [ ] Add settings view
 - Use `angular-cookies` as basis
- [ ] Think of a better UI for specific torrent info (modal isn't best!)
 - # of transfers
 - DL/UL status
 - Settings icon (launch a modal?)
 - On click of *any* torrent, select it, and pop down additional detail
 - I think this will suffice...
- [ ] Get filtering by type (all, seeding, downloading, etc.) working
- [ ] Use an `$httpInterceptor` to handle errors
- [ ] Use a `loadingInterceptor` to show loading status
 - I'd like this to be "inline" with the content
- [ ] Get `lrInfiniteScroll` to work

#### Polishing
- [ ] Get filtering styling nailed down
- [ ] Get click/dbl-click working on list item
 - I like how single click works now, but double click might be even better (except for mobile!)
- [x] Get "select all"/"select none" working when filtered
 - This works, but not when list is filtered
- [ ] Tighten up animations
 - The animations on the navbar are nice, but could be smoother, better
- [ ] Fix mobile filtering functionality
 - Is currently a little wacky.. explicit CSS `height` property is too small
- [ ] Get dark and light themes looking pretty

#### Needs Info
- [ ] Integrate a modal service
 - Might create my own; use an existing one
 - Do I even need this anymore? *Maybe* for settings
- [ ] Offer an alternate view with more detail (cards?)
- [ ] Click on footer to dismiss it

#### Finished
- [x] Integrate with transmission-rpc REST API
 - Use an angular factory to do this (already started)
 - This is *technically* done, but I'd like to use `$resource` more cleanly (e.g. integrate transmissionAPI directly as "defaults" into the $resource object
 - This is somewhat started; some stuff works (pulling all torrents, for instance)
- [x] Fix keyboard service; get working with `Command`, `Ctrl`, & `Shift`
- [x] Integrate DL/UL stats onto list item
 - Add additional stats (time remaining, complete status)
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
