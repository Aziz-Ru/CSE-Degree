
-- SET SQL_SAFE_UPDATES = 0;
-- update employees
-- set hourly_pay=case
-- 	when salary>0 then salary/20
--     else 0
-- end
-- where id is not null;

-- select * from employees;

-- create trigger before_hourly_pay_update
-- before update on employees
-- for each row 
-- set new.salary=(new.hourly_pay*2080);



-- update employees
-- set hourly_pay=50
-- where id=2;
-- select * from employees where id=2;