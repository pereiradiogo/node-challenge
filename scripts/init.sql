CREATE DATABASE IF NOT EXISTS sword;
USE sword;
CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `summary` text,
  `date` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `tasks` ADD PRIMARY KEY (`id`);
ALTER TABLE `tasks` MODIFY `id` int NOT NULL AUTO_INCREMENT;