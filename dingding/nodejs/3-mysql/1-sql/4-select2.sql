-- 分页 LIMIT
-- LIMIT start count
-- LIMIT 开始位置（从0开始），每页数量

-- 查询前5条数据
SELECT * FROM students LIMIT 5;

-- 每页2条，显示第1页
SELECT * FROM students LIMIT 0,2;

-- 每页2条，显示第2页
SELECT * FROM students LIMIT 2,2;

-- 每页2条，显示第3页
SELECT * FROM students LIMIT 4,2;

-- 每页2条，显示第6页，按照年龄从小到大（先排序，再分页）
SELECT * FROM students ORDER BY age LIMIT 10,2;

-- 连接查询（多表查询）
-- INNER JOIN ON

-- 查询有能够对应班级的学生以及班级信息
SELECT * FROM students INNER JOIN classes ON students.class_id=classes.id;

-- 查询有能够对应班级的学生以及班级信息，显示学生所有信息，只显示班级名
SELECT students.*, classes.name FROM students INNER JOIN classes ON students.class_id=classes.id;

-- 查询有能够对应班级的学生以及班级信息，按班级名称排序
SELECT * FROM students INNER JOIN classes ON students.class_id=classes.id ORDER BY classes.name;

-- 查询有能够对应班级的学生以及班级信息，按班级名称排序，同班级的学生按照id排序
SELECT * FROM students INNER JOIN classes ON students.class_id=classes.id ORDER BY classes.name, students.id;

-- 子查询

-- 查询高于平均身高的学生
SELECT AVG(height) FROM students;
SELECT * FROM students WHERE height>(SELECT AVG(height) FROM students);

-- 查询学生的班级号能对应的学生名字
SELECT name FROM students WHERE class_id IN (1,2);
SELECT name FROM students WHERE class_id IN (SELECT id FROM classes);