-- 임의의 1글자 반환
DELIMITER $$

CREATE FUNCTION `f_rand1`(_str varchar(255)) 
RETURNS varchar(31)
DETERMINISTIC
BEGIN
  DECLARE v_ret varchar(31);
  DECLARE v_len tinyint;
  
  set v_len = char_length(_str);
  set v_ret = substring(_str, CEIL(rand() * v_len), 1);

RETURN v_ret;
END

DELIMITER ;