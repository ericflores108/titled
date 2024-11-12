import { csvFormat } from "d3-dsv";
import { runQuery } from "./google-bigquery.js";

// Query to dynamically group by each genre's exact name without hardcoding
const rows = await runQuery(`
  SELECT
    genre,  -- Treat each genre as its own group
    COUNT(*) AS genre_count
  FROM
    \`spotify-440505.spotify.recommendation\`,
    UNNEST(genres) AS genre  -- Flatten the genres array to handle each genre individually
  GROUP BY
    genre;
`);

// Format and output as CSV
process.stdout.write(csvFormat(rows));