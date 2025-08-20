-- 임의의 이름 반환

DELIMITER $$

CREATE FUNCTION `f_randname`() 
RETURNS varchar(31) 
DETERMINISTIC
BEGIN
  declare v_ret varchar(31);
  declare v_lasts varchar(255) default '김이박조최전천방지마유배원';
  declare v_firsts varchar(255) default '순신세종성호지혜가은세호윤국가나다라마바사아자차파태하결찬희';
  
  set v_ret = concat( f_rand1(v_lasts), f_rand1(v_firsts), f_rand1(v_firsts) );

RETURN v_ret;
END $$

DELIMITER ;