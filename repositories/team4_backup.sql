CREATE DATABASE TEAM4 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE TEAM4;

CREATE TABLE user (
  id VARCHAR(50) PRIMARY KEY NOT NULL,
  pw VARCHAR(50) NOT NULL,
  userName VARCHAR(50) NOT NULL,
  nickName VARCHAR(50) NOT NULL,
  birth CHAR(10) NOT NULL,
  gender CHAR(4) DEFAULT "남자",
  phone VARCHAR(15) NOT NULL,
  tel VARCHAR(15),
  userLevel INT DEFAULT 1,
  registerDate DATETIME DEFAULT (now()),
  isUse TINYINT(1) DEFAULT 1
);

CREATE TABLE board (
  idx INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  writer VARCHAR(50) NOT NULL,
  content TEXT,
  registerDate DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  hit INT DEFAULT "0"
);

CREATE TABLE reply (
  idx INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content VARCHAR(255) NOT NULL,
  writer VARCHAR(50) NOT NULL,
  postingNum INT,
  registerDate DATETIME DEFAULT (now())
);

ALTER TABLE reply ADD FOREIGN KEY (postingNum)  REFERENCES board (idx) ON DELETE CASCADE;

INSERT INTO user (id, pw, userName, nickName, birth, phone, isUse) VALUES ('dumy', '1234', 'dumy', 'trash', '0000-11-22', '010-1234-5678', 0);

INSERT INTO user (id, pw, userName, nickName, birth, phone, userLevel) VALUES ('Team4_admin', 'team4admin!@', 'admin', '관리자', '0000-01-01', '010-1234-5678', 3);

INSERT INTO user (id, pw, userName, nickName, birth, phone, userLevel) VALUES ('sub_admin', 'subadmin!@', 'sub_admin', '부관리자', '0000-01-01', '010-1234-5678', 2);

INSERT INTO user (id, pw, userName, nickName, birth, gender, phone) VALUES ('test', '1234', 'test_user', '테스트계정', '0000-02-01', '여자', '010-1234-5678');

INSERT INTO board (title, writer, content) VALUES ('테스트 제목', '관리자', '가나다라마바사');

INSERT INTO board (title, writer, content) VALUES ('테스트 제목2', '부관리자', '아자차카타파하');

INSERT INTO reply (content, writer, postingNum) VALUES ('테스트 제목의 댓글', '관리자', 1);

INSERT INTO reply (content, writer, postingNum) VALUES ('테스트 제목의 댓글2', '관리자', 1);