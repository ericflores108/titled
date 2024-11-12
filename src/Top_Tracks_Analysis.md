# Popularity of top songs

```js
const topTracks = FileAttachment("data/top_tracks.csv").csv({typed: true});
```

The `topTracks` table has two columns: `name` and `popularity`. 

```js
Inputs.table(topTracks)
```

Popularity of top songs.

```js
Plot.plot({
  marginLeft: 100,
  marginRight: 100,
  marginBottom: 300,
  x: {
    label: "Track Name",
    axis: true,
    tickRotate: -45 // Rotate the x-axis labels by -45 degrees
  },
  y: {
    nice: true,
    label: "Popularity",
    grid: true
  },
  marks: [
    Plot.barY(topTracks, {
      x: "name",
      y: "popularity",
      fill: "steelblue"
    })
  ]
})
```
