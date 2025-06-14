# Write your MySQL query statement below
WITH res AS (
  SELECT 
    t.client_id,
    t.driver_id,
    t.status,
    t.request_at
  FROM Trips t
  LEFT JOIN Users u1 ON t.client_id = u1.users_id
  LEFT JOIN Users u2 ON t.driver_id = u2.users_id
  WHERE 
    (u1.banned = 'No' OR u1.banned IS NULL) AND 
    (u2.banned = 'No' OR u2.banned IS NULL) AND
    t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
)
SELECT 
  request_at AS Day,
  ROUND(SUM(CASE WHEN status != 'completed' THEN 1 ELSE 0 END) * 1.0 / COUNT(*), 2) AS 'Cancellation Rate'
FROM res
GROUP BY request_at;

/*Note: SQL Query to Calculate Daily Cancellation Rate
This query computes the daily cancellation rate of trips from the Trips table.

A Common Table Expression (CTE) named res is used to:

Filter trips made between '2013-10-01' and '2013-10-03'.

Exclude trips where either the client or driver is banned, based on the Users table.

The main query:

Groups results by day (request_at).

Calculates the cancellation rate using:

sql
Copy code
SUM(CASE WHEN status != 'completed' THEN 1 ELSE 0 END) / COUNT(*)
This counts all non-completed trips and divides by the total number of trips.

Uses ROUND() to format the cancellation rate to desired precision (e.g., 2 decimal places).



*/

