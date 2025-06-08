-- # Write your MySQL query statement below
-- Select d1.name as Department from Department d1 join (select e1.name as Employee,MAX(e1.salary) as Salary from employee e1 Group By e1.departmentId) on (e1.departmentId=d1.id)  wrong

# Write your MySQL query statement below
Select d.name as Department,e.name as Employee,e.salary as Salary from department d join Employee e on d.id=e.departmentId where(e.departmentId,e.salary) IN (Select departmentId,MAX(salary) from employee Group BY departmentId)

--  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
-- Specifies the output: department name, employee name, and their salary.

-- 2. FROM Department d JOIN Employee e ON d.id = e.departmentId
-- Joins the Department and Employee tables on departmentId to associate employees with department names.

-- 3. WHERE (e.departmentId, e.salary) IN (...)
-- Filters employees so that only those who earn the max salary in their department are included.
