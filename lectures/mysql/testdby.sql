use testdby;

show tables;
desc Dept;

show create table Dept;

select now(), current_time(), current_date(), curdate(), current_timestamp();

alter table Emp add column gen enum('M', 'F') not null default 'F';

select * from Emp;

alter table Dept add column captain int unsigned null comment '부서장';

alter table Dept add constraint fk_Dept_captain_Emp foreign key (captain) references Emp(id) on delete set null on update cascade;

update Dept set captain = (select id from Emp order by rand() limit 1) where id = 1;

-- 8time executed
select Dept.*, (select ename from Emp where id=Dept.captain) from Dept;
update Dept set captain = (select id from Emp order by rand() limit 1) 
	where captain is null;

select d.*, (select ename from Emp where id=Dept.captain) from Dept d;
select d.*, e.ename from Dept d inner join Emp e on d.captain = e.id;

# 부서장인데 emp가 아닌 사람만 : left에 있는건 다 보여줘
select d.*, e.ename from Dept d left inner join Emp e on d.captain = e.id;

# 부서장이 아닌 사람만 : right에 있는건 다 보여줘
select d.*, e.ename from Dept d right outer join Emp e on d.captain = e.id;

select * from Emp order by id desc;
select * from Dept;

select * from Emp where id in(2, 253);

show index from Emp;

update Emp set email=concat('emp', id, '@gmail.com') where id >0;

insert into Emp(id, ename, dept, salary, gen, email) values(1,'xxx',2,500, 'M', 'emp2@gmail.com');
insert into Emp(id, ename, dept, salary, gen, email) values(1,'xxx',2,500, 'M', 'emp2@gmail.com') on duplicate key update email='emp2x2@gmail.com';


select dept, min(ename), count(*) as cnt from Emp 
where dept <=5
group by dept having cnt > 35
order by cnt;

select * from Dept where (id, pid) in (select id, 1 from Dept);

SELECT 
    d.*, e.ename, e.salary
FROM
    Dept d
        INNER JOIN
    Emp e ON d.captain = e.id;

UPDATE Dept d
        INNER JOIN
    Emp e ON d.captain = e.id 
SET 
    e.salary = e.salary + 10;

select * from Emp where mod(salary, 100)=10;


-- 49 slide: 중복되면?
SELECT 
    dept, MIN(ename), COUNT(*) AS cnt
FROM
    Emp
WHERE
    dept <= 5
GROUP BY dept
HAVING cnt > 35
ORDER BY cnt;

update Emp set ename='김바순', dept=2 where id=207;
select dept, ename, count(*) from Emp 
	group by dept, ename having count(*) > 1;

select * from Emp where ename='김바순';

-- Dept 테이블에 부서별 이름이 가장 빠른 직원(가나다 순)을 각 부서의 captain으로 update!
SELECT 
    *
FROM
    Emp
GROUP BY dept
ORDER BY ename;
-- Error Code: 1055. Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'testdby.Emp.id' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

select dept, min(ename) from Emp group by dept;

 
select * from Dept;

select * from Emp
 where ename in (select min(ename) from Emp group by dept)
 order by dept;
 
select * from Emp
 where ename = SOME(select min(ename) from Emp group by dept)
 order by dept;

select id, ename, max(salary) from emp
	where ename in (select min(ename) from Emp group by dept)
    order by dept;
    
-- 각 부서별 이름이 빠른 사람을 captain으로 업데이트 - 조건: id가 가장 작은 사람 선택 (먼저 입사한 사람)
SELECT id, ename, dept, salary 
FROM (
    SELECT id, ename, dept, salary,
           ROW_NUMBER() OVER (PARTITION BY dept ORDER BY ename) as rn
    FROM Emp
) ranked 
WHERE ranked.rn = 1;

SELECT id, ename, dept,
           ROW_NUMBER() OVER (PARTITION BY dept ORDER BY ename) from Emp;

-- update Emp set ename='김바순', dept=2 where id=207;
select * from Dept;
select * from Emp;
/*
update Dept set captain where id = emp_id (
SELECT id as emp_id, ename, dept
FROM (
    SELECT id, ename, dept, salary,
           ROW_NUMBER() OVER (PARTITION BY dept ORDER BY ename) as rn
    FROM Emp
) ranked 
WHERE ranked.rn = 1;
)
*/

-- gpt
UPDATE Dept d
JOIN (
    SELECT id AS emp_id, dept
    FROM (
        SELECT id, ename, dept,
               ROW_NUMBER() OVER (PARTITION BY dept ORDER BY ename) AS rn
        FROM Emp
    ) ranked
    WHERE rn = 1
) AS sub ON d.id = sub.dept
SET d.captain = sub.emp_id;

/*
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. 
 To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

*/