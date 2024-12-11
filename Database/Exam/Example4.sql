-- create table employee (
-- 	employee_name varchar(50) primary key,
--     street varchar (200),
--     city varchar (50)
--     );

-- create table company (
-- 	company_name varchar (50),
--     city         varchar(50));

-- alter table company 
-- add constraint 
-- primary key(company_name);

-- insert into company (company_name,city) values
-- 	("Agrani","Rajshahi"),
--     ("Sonali","Sylhet"),
--     ("Janata","Dhaka");

-- insert into employee (employee_name, street,city) values 
-- 	("Arif","51 upashahar","Rajshahi"),
--     ("Sumon","52 east","Moynamati"),
--     ("Sagor","Neemgachhi","Sirajgong"),
--     ("Abdul","Binodpur","Rajshahi"),
--     ("Himesh","Nazrul avenue","Dhaka"),
--     ("Amirul","Chawk bazar","Sylhet"),
--     ("Sajib","99 north","Chittagong");

-- create table works (
-- 	employee_name varchar(50),
--     company_name varchar(50),
--     salary decimal (6,1));

-- alter table works
-- add constraint
-- foreign key (company_name) references company(company_name);




--   insert into works (employee_name,company_name,salary) values
--   	("Sumon","Agrani",12000),
--       ("Abdul","Sonali",13000),
--       ("Himesh","Agrani",6000),
--  	    ("Amirul","Sonali",20000),
--       ("Sagor","Sonali",8000),
--       ("Arif","Janata",13000),
--       ("Sajib","Janata",9000);
--  --     
-- create table manages (
-- 	employee_name varchar(50) primary key,
--     manager_name varchar(50));

-- insert into manages (employee_name,manager_name) values
-- 	("Amirul","Amirul"),
--     ("Abdul","Amirul"),
-- 	("Sagor","Amirul"),
--     ("Sumon","Sumon"),
--     ("Himesh","Sumon"),
--     ("Arif","Arif"),
--      ("Sajib","Arif");

-- Question 2

-- select employee_name from works where company_name="Sonali";

-- Question 3

-- select * from employee where employee_name in (select employee_name from works where company_name="Agrani");

-- Question 4

 -- select * from employee where employee_name in (select employee_name from works where salary>=10000);

-- Question 5


-- select employee.employee_name,employee.city,company.city from employee 
--  inner join works  on employee.employee_name=works.employee_name
--  inner join company on works.company_name=company.company_name where employee.city =company.city;






-- Question 7

-- select employee_name from works where company_name!="Sonali";

-- Question 8
-- select employee_name from works where salary>(SELECT max(salary) from works where company_name='Janata')

-- select employee_name, max(salary) from works where company_name="Janata" group by (employee_name);

-- Question 9

-- select * from works w1
-- where salary > (select avg(salary) from works w2 where w1.company_name=w2.company_name );

-- Question 10

 -- select company_name from works 
--  group by company_name
--  order by count(employee_name) desc
--  limit 1;

-- select company_name from works
-- group by company_name
-- order by sum(salary) ASC
-- limit 1

-- question 11

-- select company_name,avg(salary) from works  w1
-- group by company_name 
-- having avg( w1.salary> (select avg(salary) from works where company_name="Janata"))

-- update employee 
-- set city="Natore"
-- where employee_name="Arif";

-- select * from works where company_name="Agrani";

-- update works w1
-- set w1.salary = w1.salary*.1
-- where employee_name in (select distinct manager_name from manages);

-- select * from works;


--  CREATE VIEW manager_avg_salary AS
-- 	SELECT m.manager_name, AVG(e.salary) AS avg_salary
-- 	FROM manages m
-- 	JOIN works e ON m.employee_name = e.employee_name				
-- 	GROUP BY m.manager_name;




select w.salary from works as w;









