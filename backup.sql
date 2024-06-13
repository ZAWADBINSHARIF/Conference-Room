-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.3.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for mind_map_game
CREATE DATABASE IF NOT EXISTS `mind_map_game` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `mind_map_game`;

-- Dumping structure for table mind_map_game.characters
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(255) NOT NULL COMMENT 'NAME OF THE CHARACTER',
  `role` varchar(255) NOT NULL COMMENT 'ROLE OF THE CHARACTER',
  `description` text DEFAULT NULL COMMENT 'DESCRIPTION OF THE CHARACTER',
  `folder_name` varchar(255) NOT NULL COMMENT 'Folder name where the picture was saved',
  `filename` varchar(255) NOT NULL COMMENT 'CHARACTER PICTURE''S FILE NAME',
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mind_map_game.characters: ~26 rows (approximately)
INSERT INTO `characters` (`id`, `name`, `role`, `description`, `folder_name`, `filename`, `title`) VALUES
	(1, 'mr_all_together', 'Archetype', 'Mr. Together is the confident and hardworking part of us that strives for success. At best, they are charming and successful. At worst, they are controlling and arrogant.	Sometimes called The Ego.', 'people', 'mr_all_together.jpg', 'Mr. All-Together'),
	(2, 'the_clown', 'Archetype', 'The Entertainer	archetypes-alltogether.png	The Clown or Entertainer: A playful and creative voice that inspires others with laughter and joy.	Sometimes called The Ego', 'people', 'the_clown.jpg', 'The Clown'),
	(3, 'the_cynic', 'Archetype', 'The Cynic is a voice in us that helps us avoid falsehoods, scams, cults, and betrayal. At best, the Cynic is a "bullshit detector\\". At worst, the Cynic is cynical about everything, especially love and religion.	Critic or Critical Parent.', 'people', 'the_cynic.jpg', 'The Cynic'),
	(4, 'ms_all_together', 'Archetype', 'Ms. All Together: The confident and ambitious part of us, but can be controlling and superficial.	Sometimes called The Ego.	', 'people', 'ms_all_together.jpg', 'Ms. All-Together'),
	(5, 'the_guru', 'Archetype', 'A critical inner voice that motivates us to succeed but can also be unforgiving, leading to self-doubt.	Critic or Critical Parent.', 'people', 'the_guru.jpg', 'The Guru'),
	(6, 'the_hero', 'Archetype', 'The Hero rescues the innocent and fights for good, but can become exhausted or fanatically self-important.	Within the sub-set of the archetype of the Warrior. (All are courageous, adventurous, innovative and strong).', 'people', 'the_hero.jpg', 'The Hero'),
	(7, 'the_judge', 'Archetype', ' A critical inner voice that motivates us to succeed but can also be unforgiving, leading to self-doubt.	Critic or Critical Parent.', 'people', 'the_judge.jpg', 'The Judge'),
	(8, 'the_king', 'Archetype', 'The King A visionary leader and charismatic voice that can inspire social change, but can also become tyrannical and arrogant.', 'people', 'the_king.jpg', 'The King'),
	(9, 'the_queen', 'Archetype', 'The Queen A visionary leader and charismatic voice that can inspire social change, but can also become tyrannical and arrogant.', 'people', 'the_queen.jpg', 'The Queen'),
	(10, 'the_female_judge', 'Archetype', 'Judge: A critical inner voice that motivates us to succeed but can also be unforgiving, leading to self-doubt.	Critic or Critical Parent.', 'people', 'the_female_judge.jpg', 'Female Judge'),
	(11, 'the_stag', 'Archetype', 'The Stag is the sexual part of us who enjoys sex and love without the obligations or expectations of faithfulness and marriage, believing that the joys of sexual love are too great to be limited to a single partner. At best the Stag / Tantrika (Tantra rites connect sex with higher consciousness) is our key to sexual pleasure and the freedom to enjoy many partners and explore many kinds of physical intimacy. At their worst these voices can lead us to a superficial and degenerate life of licentious behavior and seduction. The sex addict simply uses people as objects for selfish pleasure while remaining oblivious to broken dreams and broken hearts that are the legacy of these lies and seductions.	Aspects of the lover archetype, the drive toward love, intimacy and family.', 'people', 'the_stag.jpg', 'The Stag'),
	(12, 'the_rebel', 'Archetype', 'The Rebel seeks to break free from authority, but can be antisocial and rebellious, defining itself by what it opposes rather than what it stands for.	Within the sub-set of the archetype of the Warrior. (All are courageous, adventurous, innovative and strong).', 'people', 'the_rebel.jpg', 'The Rebel'),
	(13, 'the_victim', 'Archetype', 'The Victim: A hopeless voice that blames others and leaves us helpless.	Cycle of Co-dependency.  (Drama Triangle).', 'people', 'the_victim.jpg', 'The Victim'),
	(14, 'the_persecutor', 'Archetype', 'The Persecutor: A vengeful voice that lashes out at others, especially loved ones.	Cycle of Co-dependency. (Drama Triangle).', 'people', 'the_persecutor.jpg', 'The Persecutor'),
	(15, 'the_rescuer', 'Archetype', 'The Rescuer: A caregiver who sacrifices their own needs to help others, often to their own detriment.	Cycle of Co-dependency. (Drama Triangle).', 'people', 'the_rescuer.jpg', 'The Rescuer'),
	(16, 'the_mother', 'Archetype', 'The Mother: A nurturing and protective force that provides love, support, and guidance, that can become controlling and egotistical.', 'people', 'the_mother.jpg', 'The Mother'),
	(17, 'the_heroine', 'Archetype', 'The Hero rescues the innocent and fights for good, but can become exhausted or fanatically self-important.	Within the sub-set of the archetype of the Warrior. (All are courageous, adventurous, innovative and strong).', 'people', 'the_heroine.jpg', 'The Heroine'),
	(18, 'the_tantrika', 'Archetype', 'Tantrika is the sexual part of us who enjoys sex and love without the obligations or expectations of faithfulness and marriage, believing that the joys of sexual love are too great to be limited to a single partner. At best the Stag / Tantrika (Tantra rites connect sex with higher consciousness) is our key to sexual pleasure and the freedom to enjoy many partners and explore many kinds of physical intimacy. At their worst these voices can lead us to a superficial and degenerate life of licentious behavior and seduction. The sex addict simply uses people as objects for selfish pleasure while remaining oblivious to broken dreams and broken hearts that are the legacy of these lies and seductions.	Aspects of the lover archetype, the drive toward love, intimacy and family.	', 'people', 'the_tantrika.jpg', 'The Tantrika'),
	(19, 'the_inner_child', 'Archetype', 'The Inner Child is the playful and authentic part of us, but it can also be demanding and self-centered.', 'people', 'the_inner_child.jpg', 'The Inner Child'),
	(20, 'the_priest', 'Archetype', 'Spiritual Judge reminds us of our spiritual purpose and encourages a life of prayer, meditation, and ethical conduct. At worst, they can be fanatics who condemn human nature and espouse cult beliefs.	Critic or Critical Parent.', 'people', 'the_priest.jpg', 'The Priest'),
	(21, 'the_father', 'Archetype', 'The Father: A wise and authoritative figure, his nurturing voice provides guidance, protection, and support, that can become controlling and egotistical.	Aspects of the lover archetype, the drive toward love, intimacy and family.', 'people', 'the_father.jpg', 'The Father'),
	(22, 'the_romantic', 'Archetype', 'The Romantic seeks love and intimacy, but can be delusional, jealous, and possessive. 	Aspects of the lover archetype, the drive toward love, intimacy and family.', 'people', 'the_romantic.jpg', 'The Romantic'),
	(23, 'the_adventurer', 'Archetype', 'The Adventurer seeks excitement and discovery, but can be reckless and irresponsible, living a life of meaningless adventures and brief relationships. 	Within the sub-set of the archetype of the Warrior. (All are courageous, adventurous, innovative and strong).', 'people', 'the_adventurer.jpg', 'The Adventurer'),
	(24, 'male_artist', 'Archetype', 'The Artist: A creative force that can inspire the world with its beauty and vision, or isolate itself in its own arrogance and self-delusion.	Aspects of the lover archetype, the drive toward love, intimacy and family.', 'people', 'the_artist.jpg', 'The Artist'),
	(25, 'female_artist', 'Archetype', 'The Artist: A creative force that can inspire the world with its beauty and vision, or isolate itself in its own arrogance and self-delusion.	Aspects of the lover archetype, the drive toward love, intimacy and family.', 'people', 'female_artist.jpg', 'The Female Artist'),
	(26, 'elder_mother', 'Archetype', 'A nurturing and protective force that provides love, support, and guidance, that can become controlling and egotistical.', 'people', 'elder_mother.jpg', 'The Elder Mother');

-- Dumping structure for table mind_map_game.pdfs
CREATE TABLE IF NOT EXISTS `pdfs` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `session_name` varchar(255) NOT NULL COMMENT 'THIS THE SESSION NAME OF THE GAME',
  `filename` varchar(255) DEFAULT NULL COMMENT 'TABLE PICTURE''S FILE NAME',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mind_map_game.pdfs: ~0 rows (approximately)

-- Dumping structure for table mind_map_game.save_history
CREATE TABLE IF NOT EXISTS `save_history` (
  `id` int(11) NOT NULL,
  `draggable_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `folder_name` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `position_x` int(11) NOT NULL,
  `position_y` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mind_map_game.save_history: ~0 rows (approximately)

-- Dumping structure for table mind_map_game.save_table
CREATE TABLE IF NOT EXISTS `save_table` (
  `filename` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mind_map_game.save_table: ~0 rows (approximately)

-- Dumping structure for table mind_map_game.tables
CREATE TABLE IF NOT EXISTS `tables` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `filename` varchar(255) DEFAULT NULL COMMENT 'TABLE PICTURE''S FILE NAME',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mind_map_game.tables: ~5 rows (approximately)
INSERT INTO `tables` (`id`, `create_time`, `filename`) VALUES
	(12, NULL, 'table-1703214045175.png'),
	(13, NULL, 'transparent_perspective_table-1703533487077.png'),
	(14, NULL, 'transparent_perspective_table-1703533715131.png'),
	(15, NULL, 'oval_table-1703549243359.png'),
	(16, NULL, 'oval_table-1703549726468.png');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
