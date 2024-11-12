import { csvFormat } from "d3-dsv";
import { runQuery } from "./google-bigquery.js";

// Query to dynamically group by each genre's exact name without hardcoding
const rows = await runQuery(`
  SELECT DISTINCT
    CONCAT(track_name, ", ", artist_name) AS name,
    popularity
  FROM
    \`spotify-440505.spotify.top_track\`
  ORDER BY
    popularity
`);

// Format and output as CSV
process.stdout.write(csvFormat(rows));