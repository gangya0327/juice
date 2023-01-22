-- 开启mysql
-- mysql -u root -p

-- 关闭mysql
-- quit

-- 查看mysql版本
SELECT VERSION();

-- 查询所有数据库
SHOW DATABASES;

-- 查看当前使用的数据库
SELECT DATABASE();

-- 创建数据库
CREATE DATABASE testdb;

-- 使用数据库
USE testdb;

-- 删除数据库
DROP DATABASE test02;