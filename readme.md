# Tv2 Eliteserien

Using Vite as my front end build tool

Build steps: 
> npm run dev

One table to the left with the "Eliteserien" football league current standings fetched from the API.
Some quick styling with :hover and :nth-child(even) makes it look decently presentable.

Clicking any row will give you all matches from that team in this season. Infinite scrolling would be nice to add, and maybe a highlight of the closest future game to be played because as it is now the list is very overwhelming. Ideally you would just show the next 5 and the previous 5 games, and then you could click show more to see the rest, but since it is scrollable that gave me a reason to make a sticky header, and clicking a new team bring you back up to the top.

Never tried GraphQL before, but I like it! Requesting only what you need instead of overfetching data. I didn't get quite how the types were supposed to work, so I just made some types but it would make more sense that you know exactly what types you get back as the types you requested instead of just infering it. 

Didn't get to utilize the power of react too much, a few useStates and prop drilling, and useEffects for the API call. The file structure could use a cleaning, but it is not too bad. Not doing any graceful display of errors if the API is slow. Some loading states, a spinner or some skeleton-states is nice to have.
I did some basic responsiveness for mobile devices at a certain cutoff where the other table would be forced to be put beneath the main table. Try it out.

 
