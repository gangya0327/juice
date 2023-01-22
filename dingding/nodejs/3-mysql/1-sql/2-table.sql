-- 查看当前数据库中的所有表
SHOW TABLES;

-- 创建表
-- INT UNSIGNED 无符号整型
-- NOT NULL 非空
-- AUTO_INCREMENT 自增长
-- PRIMARY KEY 主键
-- DEFAULT 默认值
-- create table 表名(字段 类型 约束[, 字段 类型 约束])
CREATE TABLE stu(name VARCHAR(50) NOT, age INT UNSIGNED);

CREATE TABLE students (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR ( 30 ) NOT NULL,
	height DECIMAL ( 3, 2 ),
	gender ENUM ( '男', '女' ),
	class_id INT UNSIGNED
);

-- 查看表结构
DESC classes;
DESC students;

-- 修改表字段（新增，修改，删除）
ALTER TABLE classes ADD mascot VARCHAR(10);
ALTER TABLE classes MODIFY mascot VARCHAR(100);
ALTER TABLE classes CHANGE mascot jxw INT UNSIGNED;
ALTER TABLE classes DROP jxw;

-- 删除表
DROP TABLE stu;
