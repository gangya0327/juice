-- 增删改查

SELECT * FROM classes;
SELECT * FROM students;

-- 全列插入
INSERT INTO classes(id, name) VALUES(5, '吕布');
INSERT INTO classes(name) VALUES('貂蝉');

-- 全部插入
INSERT INTO `students` VALUES (1, '应小明', 1.71, '男', 2, b'0', 26);
INSERT INTO `students` VALUES (2, '周杰伦', 1.76, '男', 3, b'0', 34);
INSERT INTO `students` VALUES (3, '刘德华', 1.82, '男', 3, b'0', 33);
INSERT INTO `students` VALUES (4, '孙燕姿', 1.64, '女', 1, b'0', 29);
INSERT INTO `students` VALUES (5, '蔡依林', NULL, '女', 3, b'0', 21);
INSERT INTO `students` VALUES (6, '张宇', 1.74, '男', 2, b'0', 40);
INSERT INTO `students` VALUES (7, '鞠婧祎', 1.58, '女', 4, b'0', 19);
INSERT INTO `students` VALUES (8, '古力娜扎', 1.82, '女', 2, b'0', 22);
INSERT INTO `students` VALUES (9, '李连杰', 1.76, '男', 2, b'0', 33);
INSERT INTO `students` VALUES (10, '赵文卓', 1.80, '男', 1, b'0', 35);
INSERT INTO `students` VALUES (11, '周深', 1.66, '男', 1, b'0', 21);
INSERT INTO `students` VALUES (12, '张杰', 1.71, '男', 2, b'0', 35);
INSERT INTO `students` VALUES (13, '汤唯', 1.71, '女', 3, b'0', 26);
INSERT INTO `students` VALUES (14, '于和伟', NULL, '男', 4, b'0', 35);
INSERT INTO `students` VALUES (15, '林俊杰', 1.82, '男', 1, b'0', 28);
INSERT INTO `students` VALUES (16, '梁静茹', 1.72, '女', 1, b'0', 34);
-- 多行插入
INSERT INTO students(name) VALUES('周杰伦'),('刘德华'),('张学友');

-- 全部修改
UPDATE students SET class_id=4;
-- 按条件修改
UPDATE students set height=1.85 WHERE name='张学友';
-- 按条件修改多列
UPDATE students set gender='男', height=1.76 WHERE name='周杰伦';

-- 按条件查询
SELECT * FROM students WHERE id=4;
-- 查询指定列
SELECT id,name,gender FROM students;
-- 使用as作为列或表的别名
SELECT name AS '姓名', gender AS '性别' FROM students;

-- 物理删除
DELETE FROM students WHERE name='张学友';
-- 逻辑删除，添加删除字段
ALTER TABLE students ADD is_delete BIT DEFAULT 0;
UPDATE students SET is_delete=1 WHERE id=2;
UPDATE students SET is_delete=0;
SELECT * FROM students WHERE is_delete=0;

-- 删除重复项
SELECT DISTINCT gender FROM students;

-- 清空表记录
TRUNCATE students;

SELECT * FROM students;

-- 条件符号
-- 且 AND BETWEEN AND
-- 或 OR
-- 非 NOT

-- 模糊查询 LIKE %替换任意个 _替换一个
-- 查询以周开头的学生
SELECT * FROM students WHERE name LIKE '周%';
-- 查询带有杰字的学生
SELECT * FROM students WHERE name LIKE '%杰%';
-- 查询周开头，两个字的学生
SELECT * FROM students WHERE name LIKE '周_';
-- 查询名字是三个字的学生
SELECT * FROM students WHERE name LIKE '___';
-- 查询名字至少是两个字的学生
SELECT * FROM students WHERE name LIKE '_%';

-- 范围查询
-- 查询身高是1.80或者1.82的学生
SELECT * FROM students WHERE height=1.80 OR height=1.82;
SELECT * FROM students WHERE height IN (1.80, 1.82);

-- 查询身高不是1.80和1.82的学生
SELECT * FROM students WHERE height NOT IN ('1.80', '1.82');

-- 查询身高在1.65到1.75之间的学生
SELECT * FROM students WHERE height BETWEEN '1.65' AND '1.75';

-- 查询身高不在1.65到1.75之间的学生
SELECT * FROM students WHERE height NOT BETWEEN '1.65' AND '1.75';

-- 查询身高为空的学生
SELECT * FROM students WHERE height IS NULL;

-- 排序 ORDER BY
-- ASC 升序，从小到大
-- DESC 降序，从大到小

-- 查询身高在1.75到1.85间，身高从小到大的男学生
SELECT * FROM students WHERE height BETWEEN 1.75 AND 1.85 AND gender='男' ORDER BY height ASC;

-- 查询身高在1.65到1.85间，身高从大到小，班级序号从小到大的学生
SELECT * FROM students WHERE height BETWEEN 1.65 AND 1.85 ORDER BY height DESC, class_id ASC;

SELECT * FROM students;

-- 聚合函数

-- 查询男同学人数
SELECT * FROM students WHERE gender=1;
SELECT COUNT(*) FROM students WHERE gender=1;

-- 查询最高的身高
SELECT MAX(height) FROM students;

-- 查询身高最小的女同学
SELECT MIN(height) FROM students WHERE gender=2;

-- 查询男同学身高之和
SELECT SUM(height) FROM students WHERE gender=1;

-- 查询学生的平均身高
SELECT AVG(height) FROM students;
SELECT SUM(height)/COUNT(height) FROM students;
-- 聚合函数计算不会把 NULL 计算进去
SELECT SUM(height)/COUNT(*) FROM students;

-- 查询学生的平均身高，四舍五入保留两位小数
SELECT ROUND(AVG(height),2) FROM students;

-- 分组 GROUP BY

-- 按姓名分组，查询所有性别
SELECT gender FROM students GROUP BY gender;

-- 计算每种性别的人数
SELECT gender, COUNT(*) AS '人数' FROM students GROUP BY gender;

-- 查询每种性别中的姓名
SELECT gender, GROUP_CONCAT(name) FROM students GROUP BY gender;

-- 查询每种性别的平均身高
SELECT gender, ROUND(AVG(height),2) FROM students GROUP BY gender;

-- 聚合函数作为条件，只能用having，不能用where
-- 查询平均身高超过1.70的性别，姓名
SELECT gender, AVG(height) FROM students GROUP BY gender HAVING AVG(height)>1.70;

-- 查询每种性别中，人数大于2的信息
SELECT gender, COUNT(*) FROM students GROUP BY gender HAVING COUNT(*)>5;

SELECT * FROM students;
