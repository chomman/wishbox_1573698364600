--
-- Database: `wishbox_db`
--

CREATE DATABASE IF NOT EXISTS `wishbox_db`;
USE `wishbox_db`;


-- ENTITIES

--
-- Struttura della tabella `category`
--

CREATE TABLE IF NOT EXISTS `category` (
	`desc` varchar(130) ,
	`isPublic` bool ,
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `item`
--

CREATE TABLE IF NOT EXISTS `item` (
	`createdAt` date ,
	`desc` varchar(130) ,
	`isPublic` bool ,
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `post`
--

CREATE TABLE IF NOT EXISTS `post` (
	`content` varchar(130)  NOT NULL,
	`createdAt` date ,
	`title` varchar(130)  NOT NULL,
	`updatedAt` date ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `tag`
--

CREATE TABLE IF NOT EXISTS `tag` (
	`name` varchar(130)  NOT NULL,
	`type` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `wishbox_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `wishbox_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





-- relation 1:m owner Category - User
ALTER TABLE `category` ADD COLUMN `owner` int(11)  REFERENCES user(_id);

-- relation 1:m category Item - Category
ALTER TABLE `item` ADD COLUMN `category` int(11)  REFERENCES category(_id);

-- relation 1:m createdBy Item - User
ALTER TABLE `item` ADD COLUMN `createdBy` int(11)  REFERENCES user(_id);

-- relation m:m tags Item - Tag
CREATE TABLE IF NOT EXISTS `Item_tags` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Item` int(11)  NOT NULL REFERENCES item(_id),
    `id_Tag` int(11)  NOT NULL REFERENCES tag(_id)
);

-- relation 1:m createdBy Post - User
ALTER TABLE `post` ADD COLUMN `createdBy` int(11)  REFERENCES user(_id);


