show triggers from testdby;

DELIMITER $$
create trigger Emp_AFTER_DELETE AFTER delete on Emp for each row 
BEGIN
	-- delete from Emp where id = 3;
    update Dept set empcnt = empcnt -1
    where id = OLD.dept;
END$$

DELIMITER ;
;

update Dept d set empcnt = (select count(*) from Emp where dept = d.id);

select * from Dept where id < 3;

select s.*, (@rownum := @rownum + 1) -- data수만큼 실행됨
  from  Dept s, (select @rownum := 0) rn
  order by s.id desc;

select e.*, f_deptname_by_empid(e.id)  from Emp e where id in (10, 11, 12);

select f_depname_by_empid(10);

call sp_emps_by_deptid(1);

call sp_dept_info();
