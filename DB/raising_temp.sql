# Write your MySQL query statement below
Select t1.id as Id from weather t1 join weather t2 on t1.recordDate=Date_Add(t2.recordDate,Interval 1 Day) where
 t1.temperature>t2.temperature

--  Self Join:
-- The table is joined with itself to compare each day's data with the previous day's data.

-- Date arithmetic:
-- Use DATE_ADD() or DATEDIFF() to find the "previous day".

-- Comparison logic:
-- You check whether today’s temperature is higher than the previous day’s.
