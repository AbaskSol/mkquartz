-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 10, 2019 at 01:24 PM
-- Server version: 5.6.37
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mkquartz`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `mosaic` tinyint(1) NOT NULL DEFAULT '0',
  `deco` tinyint(1) NOT NULL,
  `tile` tinyint(1) NOT NULL,
  `slab` tinyint(1) NOT NULL,
  `category` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `imagePath` varchar(1000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `p_name`, `mosaic`, `deco`, `tile`, `slab`, `category`, `color`, `size`, `imagePath`) VALUES
(1, 'MK-106', 1, 0, 0, 0, 'QUARTZ', 'brown,red,green,orange,black', '1"x2",2"x0.4",1.5"x1",1"x4"', 'MK-106.jpg'),
(2, 'MK-1000-purewhite', 0, 1, 0, 0, 'QUARTZ', 'red,black,white,yellow,brown', '1"x1",1"x0.4",1.5"x1",1"x2"', 'MK-1000-purewhite.jpg'),
(3, 'MK-1004', 0, 0, 1, 0, 'QUARTZ', 'black,green,red,blue,white', '1"x6",1"x5",1"x4",1"x2"', 'MK-1004.jpg'),
(4, 'MK-1100', 0, 1, 0, 1, 'QUARTZ', 'green,red,white,yellow,blue', '1"x1",1"x12",1"x6",0.56"x6"', 'MK-1100.jpg'),
(5, 'MK-1107', 1, 1, 0, 0, 'QUARTZ', 'yellow,black,green,white', '2"x6",2"x5",2"x4",1"x3"', 'MK-1107.jpg'),
(6, 'MK-1314', 1, 1, 0, 0, 'PORCELAIN TILES', 'white,red,green,orange,black', '1"x6",2"x2",0.56"x6",2"x1"', 'MK-1314.jpg'),
(7, 'MK2000YEY', 1, 0, 0, 0, 'WOOD LOOK PORCELAIN TILES', 'blue,red,yellow,white', '0.56"x1",2"x6",2"x2",1"x6"', 'MK2000YEY.jpg'),
(8, 'MK2001YEY', 1, 0, 0, 0, 'WOOD LOOK PORCELAIN TILES', 'orange,black,red,green', '2"x6",2"x6.5",2"x3",1"x6.5"', 'MK2001YEY.jpg'),
(9, 'MK2002YEY', 1, 0, 0, 0, 'WOOD LOOK PORCELAIN TILES', 'black,orange,red,green,blue', '2"x6.5",1"x6.5",1"x6.5"', 'MK2002YEY.jpg'),
(10, 'MK2003YEY', 0, 1, 0, 0, 'WOOD LOOK PORCELAIN TILES', 'green,blue,black,gray', '2"x6.5",2"x5",1"x6.5",2"x6"', 'MK2003YEY.jpg'),
(11, 'MK2004YEY', 0, 1, 0, 0, 'MOSAIC TILES', 'white,gray,green,black', '1"x12",2"x12",1"x2",1"x4"', 'MK2004YEY.jpg'),
(12, 'MK2005YEY', 0, 1, 0, 0, 'MOSAIC TILES', 'red,green,orange,yellow', '1"x2",2"x12",1"x6",2"x3"', 'MK2005YEY.jpg'),
(13, 'MK2006YEY', 0, 1, 0, 0, 'MOSAIC TILES', 'brown,red,green,black', '1"x6",1"x7",1"x3",2"x12"', 'MK2006YEY.jpg'),
(14, 'MK2007YEY', 0, 1, 0, 0, 'NATURAL MOSAIC', 'black,green,white,black,green', '0.56"x12",1"x4",1"x6",2"x6"', 'MK2007YEY.jpg'),
(15, 'MK2008YEY', 0, 0, 1, 0, 'NATURAL MOSAIC', 'yellow,black,green,red', '1"x1",1"x2",1"x3",1"x4"', 'MK2008YEY.jpg'),
(16, 'MK2009YEY', 0, 0, 1, 0, 'NATURAL MOSAIC', 'orange,red,green,blue', '1"x1",2"x1",1"x6",1"x7"', 'MK2009YEY.jpg'),
(17, 'MK2010YEY', 0, 0, 1, 0, 'NATURAL MOSAIC', 'blue,red,green,orange,gray', '0.56"x1",1"x1",1"x2",2"x1"', 'MK2010YEY.jpg'),
(18, 'MK2011YEY', 0, 0, 1, 0, 'PORCELAIN MOSAIC', 'red,green,gray,white', '2"x1",2"x4",1"x6",1"x3"', 'MK2011YEY.jpg'),
(19, 'MK2012YEY', 0, 0, 1, 0, 'PORCELAIN MOSAIC', 'green,blue,green,yellow', '1"x1",2"x1",3"x1",1"x4"', 'MK2012YEY.jpg'),
(20, 'MK2013YEY', 0, 0, 0, 1, 'PORCELAIN MOSAIC', 'black,red,green,orange,black,blue', '1"x1",2"x1",1"x3",2"x2"', 'MK2013YEY.jpg'),
(21, 'MK-2014', 0, 0, 0, 1, 'PORCELAIN MOSAIC', 'red,green,gray,black', '1"x1",2"x1",1"x4",1"x4"', 'MK-2014.jpg'),
(22, 'MK2014YEY', 0, 0, 0, 1, 'PORCELAIN MOSAIC', 'orange,red,brown,green,gray', '1"x1",2"x2",2"x4",2"x1"', 'MK2014YEY.jpg'),
(23, 'MK-2015', 0, 0, 0, 1, 'CERAMIC MOSAIC', 'blue,gray,red,orange', '1"x1",2"x1",0.56"x1",2"x3"', 'MK-2015.jpg'),
(24, 'MK2015YEY', 0, 0, 0, 1, 'CERAMIC MOSAIC', 'blue,red,green,black,blue', '2"x1",1"x12",1"x1"', 'MK2015YEY.jpg'),
(25, 'MK2016YEY', 0, 0, 0, 1, 'CERAMIC MOSAIC', 'red,gray,black,yellow', '2"x1",1"x2",3"x1",1"x3"', 'MK2016YEY.jpg'),
(26, 'MK-2017', 0, 0, 0, 1, 'CRACK MOSAIC', 'black,gray,white,green', '0.56"x1",1"x2",1"x3",2"x1"', 'MK-2017.jpg'),
(27, 'MK2017YEY', 1, 0, 0, 0, 'CRACK MOSAIC', 'brown,red,green', '0.52"x6",1"x6"', 'MK2017YEY.jpg'),
(28, 'MK2018YEY', 0, 1, 0, 0, 'QUARTZ', 'red,green', '0.5"x6",1" x2"', 'MK2018YEY.jpg'),
(29, 'MK-2019L', 0, 1, 0, 0, 'QUARTZ', 'blue,orange', '4"x4",1"x2"', 'MK-2019L.jpg'),
(30, 'MK-2019LG', 1, 0, 0, 0, 'QUARTZ', 'black,white', '2"x4",0.5"x1",4"x4"', 'MK-2019LG.jpg'),
(31, 'MK-2019LM', 0, 0, 1, 0, 'QUARTZ', 'white,red', '4"x8",2"x3",1"x2"', 'MK-2019LM.jpg'),
(32, 'MK-2019LR', 1, 0, 0, 0, 'QUARTZ', 'green,blue', '6"x36",6"x6",6"x3"', 'MK-2019LR.jpg'),
(33, 'MK2019YEY', 0, 0, 1, 0, 'QUARTZ', 'white,black', '1"x3",2"x2"', 'MK2019YEY.jpg'),
(34, 'MK2020YEY', 0, 1, 0, 0, 'QUARTZ', 'white,red,green', '1"x6",1"x2"', 'MK2020YEY.jpg'),
(35, 'MK-7999', 0, 0, 0, 1, 'QUARTZ', 'red,black,green', '3"x6",1"x1",1"x2"', 'MK-7999.jpg'),
(36, 'MK-8002', 0, 0, 0, 1, 'QUARTZ', 'red,white', '2"x6",1"x6"', 'MK-8002.jpg'),
(37, 'MK-8020', 0, 0, 0, 1, 'QUARTZ', 'red,black', '1"x2",2"x2"', 'MK-8020.jpg'),
(38, 'MK-9001', 0, 0, 1, 0, 'QUARTZ', 'white,yellow', '1"x16",2"x1"', 'MK-9001.jpg'),
(39, 'MK-9736', 0, 0, 1, 0, 'QUARTZ', 'red,white', '1"x6",2"x6"', 'MK-9736.jpg'),
(40, 'MK-9775', 0, 0, 1, 0, 'QUARTZ', 'white,black,green', '8"x8",1"x4",2"x2"', 'MK-9775.jpg'),
(41, 'MK-9902', 1, 0, 0, 0, 'QUARTZ', 'red,green', '2"x2",2"x1"', 'MK-9902.jpg'),
(42, 'MK-9904', 1, 0, 0, 0, 'QUARTZ', 'red,green', '1"x2",2"x2"', 'MK-9904.jpg'),
(43, 'MK-9905', 0, 1, 0, 0, 'QUARTZ', 'red,black', '3"x6",1"x2"', 'MK-9905.jpg'),
(44, 'MK-9906', 0, 0, 1, 0, 'QUARTZ', 'green,white', '1"x2",2"x2"', 'MK-9906.jpg'),
(45, 'MK-9907', 0, 0, 1, 0, 'QUARTZ', '3"x6",1"x2"', 'orange,brown', 'MK-9907.jpg'),
(46, 'MK-9910', 0, 0, 0, 1, 'QUARTZ', 'black,green', '2"x2",3"x2"', 'MK-9910.jpg'),
(47, 'MK-9911', 1, 0, 0, 0, 'QUARTZ', 'red,black', '3"x6",1"x2"', 'MK-9911.jpg'),
(48, 'MK-9912', 0, 1, 0, 0, 'QUARTZ', 'orange,brown', '1"x2",2"x2"', 'MK-9912.jpg'),
(49, 'MK-9922', 0, 0, 0, 1, 'QUARTZ', '3"x6",1"x2"', 'black,green', 'MK-9922.jpg'),
(50, 'MK-9987', 0, 1, 0, 0, 'QUARTZ', 'red,black', '2"x2",3"x2"', 'MK-9987.jpg'),
(51, 'MK-20160236', 0, 0, 0, 1, 'QUARTZ', '3"x6",1"x2"', 'white,orange', 'MK-20160236.jpg'),
(52, 'MK-Almond', 0, 0, 0, 1, 'QUARTZ', 'white,orange', '2"x2",3"x2"', 'MK-Almond.jpg'),
(53, 'MK-AQ1040', 0, 0, 0, 1, 'QUARTZ', 'red,black,green', '1"x2",2"x2"', 'MK-AQ1040.jpg'),
(54, 'MK-AQ2017', 0, 0, 0, 1, 'QUARTZ', 'black,green,white', '3"x6",1"x2"', 'MK-AQ2017.jpg'),
(55, 'MK-ASD9903', 0, 0, 1, 0, 'QUARTZ', '3"x6",1"x2",2"x2"', 'black,green,white', 'MK-ASD9903.jpg'),
(56, 'MK-blue-diamand', 0, 0, 0, 1, 'QUARTZ', 'orange,brown', '2"x2",3"x2"', 'MK-blue-diamand.jpg'),
(57, 'MK-C08', 1, 0, 0, 0, 'QUARTZ', 'black,green', '3"x6",1"x2",2"x2",3"x2"', 'MK-C08.jpg'),
(58, 'MK-CARA', 0, 1, 0, 0, 'QUARTZ', '1"x2",2"x2"', 'black,green,white', 'MK-CARA.jpg'),
(59, 'MK-CE2022', 0, 0, 1, 0, 'QUARTZ', 'black,green,white,orange', '3"x6",1"x2"', 'MK-CE2022.jpg'),
(60, 'MK-Cobble', 0, 1, 0, 0, 'QUARTZ', 'red,black,green,white', '1"x2",2"x2",3"x2"', 'MK-Cobble.jpg'),
(61, 'MK-CREMA', 1, 0, 0, 0, 'QUARTZ', 'black,green,white,orange', '1"x2",2"x2",3"x2"', 'MK-CREMA.jpg'),
(62, 'MK-CREMA-CLOUD', 0, 1, 0, 0, 'QUARTZ', 'black,green,white', '1"x2",2"x2",3"x2"', 'MK-CREMA-CLOUD.jpg'),
(63, 'MK-Crystalwhite', 0, 1, 0, 0, 'QUARTZ', 'red,black,green', '1"x2",2"x2",3"x2"', 'MK-Crystalwhite.jpg'),
(64, 'MK-ES1101', 0, 0, 1, 0, 'QUARTZ', 'black,green,white', '1"x2",2"x2",3"x2"', 'MK-ES1101.jpg'),
(65, 'MK-ES1102', 0, 0, 0, 1, 'QUARTZ', 'green,white', '1"x2",2"x2",3"x2"', 'MK-ES1102.jpg'),
(66, 'MK-ES1200', 0, 0, 1, 0, 'QUARTZ', 'black,green,white,orange', '1"x2",2"x2",3"x2"', 'MK-ES1200.jpg'),
(67, 'MK-ES1202', 1, 0, 0, 0, 'QUARTZ', 'black,green', '2"x2",3"x2"', 'MK-ES1202.jpg'),
(68, 'MK-ES1203', 1, 0, 0, 0, 'QUARTZ', 'black,green', '1"x2",2"x2"', 'MK-ES1203.jpg'),
(69, 'MK-ES1209', 0, 1, 0, 0, 'QUARTZ', 'black,green', '3"x6",1"x2"', 'MK-ES1209.jpg'),
(70, 'MK-ES1211', 0, 1, 0, 0, 'QUARTZ', 'orange,brown', '2"x2",3"x2"', 'MK-ES1211.jpg'),
(71, 'MK-Fineshimmer', 1, 0, 0, 0, 'QUARTZ', 'white,orange', '1"x2",2"x2"', 'MK-Fineshimmer.jpg'),
(72, 'MK-Fineshimmer-2', 0, 0, 0, 1, 'QUARTZ', 'green,white', '2"x2",3"x2"', 'MK-Fineshimmer-2.jpg'),
(73, 'MK-Graphite', 1, 0, 0, 0, 'QUARTZ', 'red,black', '1"x2",2"x2"', 'MK-Graphite.jpg'),
(74, 'MK-GREY-CLOUD', 0, 1, 0, 0, 'QUARTZ', 'red,black,green', '1"x2",2"x2",3"x2"', 'MK-GREY-CLOUD.jpg'),
(75, 'MK-Ice-snow', 1, 0, 0, 0, 'QUARTZ', 'black,green', '1"x2",2"x2",3"x2"', 'MK-Ice-snow.jpg'),
(76, 'MK-LUNA', 1, 0, 0, 0, 'QUARTZ', 'black,green,white', '1"x2",2"x2"', 'MK-LUNA.jpg'),
(77, 'MK-MS3-2131', 0, 1, 0, 0, 'QUARTZ', 'black,green,white', '3"x6",1"x2"', 'MK-MS3-2131.jpg'),
(78, 'MK-Platinum', 1, 0, 0, 0, 'QUARTZ', 'black,green,white', '1"x2",2"x2"', 'MK-Platinum.jpg'),
(79, 'MK-Shimmer', 1, 0, 0, 0, 'QUARTZ', '1"x2",2"x2"', 'black,green,white', 'MK-Shimmer.jpg'),
(80, 'MK-silver', 1, 0, 0, 0, 'QUARTZ', 'red,black', '3"x6",1"x2"', 'MK-silver.jpg'),
(81, 'MK-speckle', 1, 0, 0, 0, 'QUARTZ', 'black,green,white', '1"x2",2"x2"', 'MK-speckle.jpg'),
(82, 'MK-Strawberry', 0, 1, 0, 0, 'QUARTZ', 'green,white', '2"x2",3"x2"', 'MK-Strawberry.jpg'),
(83, 'MK-TCE504', 1, 0, 0, 0, 'QUARTZ', 'green,white', '1"x2",2"x2"', 'MK-TCE504.jpg'),
(84, 'MK-TCE1203', 0, 1, 0, 0, 'QUARTZ', 'black,green', '3"x6",1"x2"', 'MK-TCE1203.jpg'),
(85, 'MK-TCE2011', 1, 0, 0, 0, 'QUARTZ', 'red,black', '1"x2",2"x2",3"x2"', 'MK-TCE2011.jpg'),
(86, 'MK-TCE2012', 1, 0, 0, 0, 'QUARTZ', 'green,white', '3"x6",1"x2"', 'MK-TCE2012.jpg'),
(87, 'MK-TCE2013', 1, 0, 0, 0, 'QUARTZ', 'black,green', '1"x2",2"x2"', 'MK-TCE2013.jpg'),
(88, 'MK-TCE2014', 1, 0, 0, 0, 'QUARTZ', 'red,black', '2"x2",3"x2"', 'MK-TCE2014.jpg'),
(89, 'MK-TCE2016', 1, 0, 0, 0, 'QUARTZ', 'black,green', '2"x2",3"x2"', 'MK-TCE2016.jpg'),
(90, 'MK-TCE2017', 1, 0, 0, 0, 'QUARTZ', 'orange,brown', '1"x2",2"x2"', 'MK-TCE2017.jpg'),
(91, 'MK-TCE2019', 1, 0, 0, 0, 'QUARTZ', 'green,white', '2"x2",3"x2"', 'MK-TCE2019.jpg'),
(92, 'MK-TCE2020', 1, 0, 0, 0, 'QUARTZ', 'black,green', '3"x6",1"x2"', 'MK-TCE2020.jpg'),
(93, 'MK-TCE2026', 1, 0, 0, 0, 'QUARTZ', 'green,white', '1"x2",2"x2"', 'MK-TCE2026.jpg'),
(94, 'MK-TCE2031', 1, 0, 0, 0, 'QUARTZ', 'red,black', '2"x2",3"x2"', 'MK-TCE2031.jpg'),
(95, 'MK-TCE2033', 0, 1, 0, 0, 'QUARTZ', 'green,white,orange', '2"x2",3"x2"', 'MK-TCE2033.jpg'),
(96, 'MK-TCE2034', 1, 0, 0, 0, 'QUARTZ', 'green,white,orange', '1"x2",2"x2"', 'MK-TCE2034.jpg'),
(97, 'MK-TCE2035', 1, 0, 0, 0, 'QUARTZ', 'black,green,white', '3"x6",1"x2"', 'MK-TCE2035.jpg'),
(98, 'MK-white 1600', 1, 0, 0, 0, 'QUARTZ', 'orange,brown', '1"x2",2"x2"', 'MK-white-1600.jpg'),
(99, 'MK-XJL-02', 1, 0, 0, 0, 'QUARTZ', 'green,white', '2"x2",3"x2"', 'MK-XJL-02.jpg'),
(100, 'DS6301', 1, 0, 0, 0, 'PORCELAIN TILES', 'black', '1"x1",1"x12",1"x6",0.56"x6"', 'DS6301.png'),
(101, 'DS6306', 0, 0, 0, 1, 'PORCELAIN TILES', 'black', '1"x1",1"x12",1"x6",0.56"x6"', 'DS6306.png'),
(102, 'DSCS6677', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey', '1"x1",1"x12",1"x6",0.56"x6"', 'DSCS6677.JPG'),
(103, 'DSHL6S212', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S212(1).jpg'),
(104, 'DSHL6S212(2)', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S212(2).jpg'),
(105, 'DSHL6S212(3)', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S212(3).jpg'),
(106, 'DSHL6S212', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S212.jpg'),
(107, 'DSHL6S213', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S213.jpg'),
(108, 'DSHL6S213(1)', 0, 0, 1, 0, 'PORCELAIN TILES', 'grey', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S213(1).jpg'),
(109, 'DSHL6S213(2)', 1, 0, 0, 1, 'PORCELAIN TILES', 'grey', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S213(2).jpg'),
(110, 'DSHL6S217(1)', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown,grey', '1"x1",1"x12",1"x6",0.56"x6"', 'DSHL6S217(1).jpg'),
(111, 'DSMZ102', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown', '1"x1",1"x12",1"x6",0.56"x6"', 'DSMZ102.jpg'),
(112, 'DSL3603', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown', '1"x1",1"x12",1"x6",0.56"x6"', 'DSL3603.jpg'),
(113, 'DSMZ107', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown,grey', '1"x1",1"x12",1"x6",0.56"x6"', 'DSMZ107.jpg'),
(114, 'DSY3603(2)', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3603(2).jpg'),
(115, 'DSY3605(1)', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3605(1).jpg'),
(116, 'DSY3605(2)', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3605(2).jpg'),
(117, 'DSY3605', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3605.jpg'),
(118, 'DSY3606(1)', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3606(1).jpg'),
(119, 'DSY3606(2)', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3606(2).jpg'),
(120, 'DSY3606', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown,red', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3606.jpg'),
(121, 'DSY3607(1)', 0, 0, 0, 1, 'PORCELAIN TILES', 'grey,white', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3607(1).jpg'),
(122, 'DSY3607(2)', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey,white', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3607(2).jpg'),
(123, 'DSY3607', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey,white', '1"x1",1"x12",1"x6",0.56"x6"', 'DSY3607.jpg'),
(124, 'HL6S217', 0, 0, 0, 1, 'PORCELAIN TILES', 'grey', '1"x1",1"x12",1"x6",0.56"x6"', 'HL6S217.jpg'),
(125, 'IMG_6658', 0, 0, 0, 1, 'PORCELAIN TILES', 'brown,grey', '1"x1",1"x12",1"x6",0.56"x6"', 'IMG_6658.JPG'),
(126, 'IMG_6659', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey', '1"x1",1"x12",1"x6",0.56"x6"', 'IMG_6659.JPG'),
(127, 'IMG_6660', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey,black', '1"x1",1"x12",1"x6",0.56"x6"', 'IMG_6660.JPG'),
(128, 'IMG_6661', 1, 0, 0, 0, 'PORCELAIN TILES', 'grey,black', '1"x1",1"x12",1"x6",0.56"x6"', 'IMG_6661.JPG'),
(129, 'JA60805PM(1)', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JA60805PM(1).jpg'),
(130, 'JA60805PM(2)', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JA60805PM(2).jpg'),
(131, 'JA60805PM(3)', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JA60805PM(3).jpg'),
(132, 'JSB361-11', 1, 0, 0, 0, 'PORCELAIN TILES', 'white,grey', '1"x1",1"x12",1"x6",0.56"x6"', 'JSB361-11.JPG'),
(133, 'JSB361-12', 1, 0, 0, 0, 'PORCELAIN TILES', 'white,grey', '1"x1",1"x12",1"x6",0.56"x6"', 'JSB361-12.JPG'),
(134, 'JSB362', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JSB362.JPG'),
(135, 'JSB362-13', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JSB362-13.jpg'),
(136, 'JSB362-14', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JSB362-14.jpg'),
(137, 'JSB362-15', 0, 0, 0, 1, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JSB362-15.jpg'),
(139, 'JZH60094Q', 1, 0, 0, 0, 'PORCELAIN TILES', 'brown', '1"x1",1"x12",1"x6",0.56"x6"', 'JZH60094Q.jpg'),
(140, 'JZH60100M', 1, 0, 0, 0, 'PORCELAIN TILES', 'white', '1"x1",1"x12",1"x6",0.56"x6"', 'JZH60100M.jpg'),
(141, 'JZQ6815', 1, 0, 0, 0, 'PORCELAIN TILES', 'black', '1"x1",1"x12",1"x6",0.56"x6"', 'JZQ6815.png'),
(142, 'JZQ6819', 1, 0, 0, 0, 'PORCELAIN TILES', 'black', '1"x1",1"x12",1"x6",0.56"x6"', 'JZQ6815.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userid` varchar(12) NOT NULL,
  `password` varchar(50) NOT NULL,
  `sessionid` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `password`, `sessionid`) VALUES
('admin', 'admin', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=143;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
