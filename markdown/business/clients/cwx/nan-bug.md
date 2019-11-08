

Yep, 

I've branched [nan-years-ago](https://github.cwx.io/poker/webclient/tree/nan-years-ago)vfrom `desktop-integration` and opened draft PR [191](https://github.cwx.io/poker/webclient/pull/191) which is going fix it.

The code which is causing the issue is the `updateNextLevel` function in `src/views/game/gameDetailsView.coffee` only gets used when in tournament mode, so I need to be playing a tournament on my local dev env so I can debug the data that's coming in to that function, defensively code against it being bad & maybe bring it up with the back end crew if it looks like that's where the real error is.