DELETE p1
FROM Person p1
JOIN Person p2
  ON p1.email = p2.email AND p1.id > p2.id;


-- p1 and p2 are aliases for the same Person table.

-- The JOIN matches records that have the same email.

-- p1.id > p2.id ensures you're targeting the higher-id duplicates.

-- DELETE p1 removes the higher-id records — meaning only the lowest-id (earliest) row for each email remains.
