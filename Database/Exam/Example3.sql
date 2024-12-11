-- create table person
-- (
-- 	nid int,
--     name varchar(255),
--     address varchar(255)
-- );


-- insert into person (nid,name,address) values 
-- 	(123451,"Arif","Rajshahi"),
--     (123452,"Sumon","Moynamoti"),
--     (123453,"Sagor","Sirajgang"),
--     (123454,"Abdul","Rajshahi"),
--     (123455,"Himes","Dhaka"),
--     (123456,"Amirul","Sylhet"),
--     (123457,"Sajib","Chittagong");
--     

-- create table car (
-- 	license varchar(255),
--     year    int,
--     model   varchar (255));


-- insert into car  (license,year,model) values
-- 	("12-3000",2012,"Axio"),
--     ("11-3000",2008,"Crolla"),
--     ("12-4000",2013,"Axio"),
--     ("12-5000",2013,"Premio"),
--     ("11-5000",2010,"Nano"),
--     ("11-6000",2011,"Alto"),
--     ("12-6000",2015,"Nano Twist");

-- alter table car
-- add constraint
-- primary key (license);

-- alter table person add constraint primary key(nid);

-- create table accident (
-- 	date varchar (50),
--     driver varchar(255),
--     d_amount int,
--     primary key (date,driver)
--     );

-- insert into accident (date,driver,d_amount) values 
-- 	( "12/01/2013","Arif",10000),
--     ( "25/09/2015","Komol",12000),
--     ( "20/06/2014","Bahadur",11000),
--     ( "20/12/2011","Abdul",8000),
--     ( "19/09/2013","Arif",20000),
--     ( "20/08/2014","Arif",15000),
--     ( "19/09/2015","Akter",7000);
--     

-- create table owns (
-- 	nid int,
--     license varchar(50),
--     primary key(nid,license)
--     );

-- insert into owns (nid,license) values 
-- 	(123451,"11-3000"),
--     (123452,"12-4000"),
--     (123453,"12-5000"),
--     (123454,"11-5000"),
--     (123455,"11-6000"),
--     (123456,"12-6000"),
--     (123457,"12-3000");


-- create table log (
-- 	license varchar (50),
--     date     varchar(50),
--     diver    varchar(50),
--     primary key(license,date,diver));

-- alter table log 
-- rename column diver to driver;

-- insert into log(license,date,driver) values
-- 	("11-3000","12/01/2013","Arif"),
--     ("12-4000","25/09/2015","Komol"),
--     ("11-6000","20/06/2014","Bahadur"),
--     ("11-5000","20/12/2011","Abdul"),
--     ("12-3000","15/05/2015","Akter"),
--     ("11-3000","15/05/2013","Arif"),
--     ("11-3000","20/08/2014","Arif");


-- Question b
-- select name from person where address="Rajshahi";

-- Question c

-- select model from car where year=2013;

-- Question d

-- select driver from accident where d_amount between 10000 and 15000;

-- Question e
-- select nid from owns where license in (select license from car where model="Axio");
-- select owns.nid from owns inner join car on owns.license=car.license;
-- select * from owns natural join car;

-- Question f

-- select name,address from person where nid in (select nid from owns where license in (select license from car where model="Alto"));


-- Question g
-- select driver from accident where date="20/12/2011";
-- select name from person where nid 
-- 	in (select nid from owns where license="12-4000")

-- Question h


--  select name from person where nid in 
--  	( select nid from owns where license in 
--  		(select license from log where driver="Arif")
--  	);


-- select model from car where license in 
-- 	(select license from log where date="19/09/2015");

-- select count(*) from accident where driver="arif";


-- update person p1
-- join person p2 on p1.nid=p2.nid
-- set p1.address="Natore" 
-- where p2.name="Arif";

-- select * from person where name="Arif";




