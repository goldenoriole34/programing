CREATE TABLE `board` (
  `idx` INT(11) NOT NULL PRIMARY kEY AUTO_INCREMENT,
  `subject` VARCHAR(100) NOT NULL,
  `content` TEXT NULL,
  `name` VARCHAR(100) NOT NULL,
  `date` TIMESTAMP default current_timestamp NOT NULL,
  `like` INT(11) default 0  NOT NULL,
  `hit` INT(11) default 0  NOT NULL
)CHARSET=utdf8mb4 COLLATE=utf8m4_general_ci;