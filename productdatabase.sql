-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 26, 2018 at 02:11 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `p_name`, `mosaic`, `deco`, `tile`, `slab`, `category`, `color`, `size`, `imagePath`) VALUES
(1, 'product1', 1, 0, 0, 0, 'QUARTZ', 'brown,red,green,orange,black', '1"x2",2"x0.4",1.5"x1",1"x4"', 'MK-106.jpg'),
(2, 'product2', 0, 1, 0, 0, 'QUARTZ', 'red,black,white,yellow,brown', '1"x1",1"x0.4",1.5"x1",1"x2"', 'MK-1000-purewhite.jpg'),
(3, 'product3', 0, 0, 1, 0, 'QUARTZ', 'black,green,red,blue,white', '1"x6",1"x5",1"x4",1"x2"', 'MK-1004.jpg'),
(4, 'product4', 0, 0, 0, 1, 'PORCELAIN-TILES', 'green,red,white,yellow,blue', '1"x1",1"x12",1"x6",0.56"x6"', 'MK-1100.jpg'),
(5, 'product5', 1, 0, 0, 0, 'PORCELAIN-TILES', 'yellow,black,green,white', '2"x6",2"x5",2"x4",1"x3"', 'MK-1107.jpg'),
(6, 'product6', 1, 0, 0, 0, 'PORCELAIN-TILES', 'white,red,green,orange,black', '1"x6",2"x2",0.56"x6",2"x1"', 'MK-1314.jpg'),
(7, 'product7', 1, 0, 0, 0, 'WOOD-LOOK-PORCELAIN-TILES', 'blue,red,yellow,white', '0.56"x1",2"x6",2"x2",1"x6"', 'MK2000YEY.jpg'),
(8, 'product8', 1, 0, 0, 0, 'WOOD-LOOK-PORCELAIN-TILES', 'orange,black,red,green', '2"x6",2"x6.5",2"x3",1"x6.5"', 'MK2001YEY.jpg'),
(9, 'product9', 1, 0, 0, 0, 'WOOD-LOOK-PORCELAIN-TILES', 'black,orange,red,green,blue', '2"x6.5",1"x6.5",1"x6.5"', 'MK2002YEY.jpg'),
(10, 'product10', 0, 1, 0, 0, 'WOOD-LOOK-PORCELAIN-TILES', 'green,blue,black,gray', '2"x6.5",2"x5",1"x6.5",2"x6"', 'MK2003YEY.jpg'),
(11, 'product11', 0, 1, 0, 0, 'MOSAIC-TILES', 'white,gray,green,black', '1"x12",2"x12",1"x2",1"x4"', 'MK2004YEY.jpg'),
(12, 'product12', 0, 1, 0, 0, 'MOSAIC-TILES', 'red,green,orange,yellow', '1"x2",2"x12",1"x6",2"x3"', 'MK2005YEY.jpg'),
(13, 'product13', 0, 1, 0, 0, 'MOSAIC-TILES', 'brown,red,green,black', '1"x6",1"x7",1"x3",2"x12"', 'MK2006YEY.jpg'),
(14, 'product14', 0, 1, 0, 0, 'NATURAL-MOSAIC', 'black,green,white,black,green', '0.56"x12",1"x4",1"x6",2"x6"', 'MK2007YEY.jpg'),
(15, 'product15', 0, 0, 1, 0, 'NATURAL-MOSAIC', 'yellow,black,green,red', '1"x1",1"x2",1"x3",1"x4"', 'MK2008YEY.jpg'),
(16, 'product16', 0, 0, 1, 0, 'NATURAL-MOSAIC', 'orange,red,green,blue', '1"x1",2"x1",1"x6",1"x7"', 'MK2009YEY.jpg'),
(17, 'product17', 0, 0, 1, 0, 'NATURAL-MOSAIC', 'blue,red,green,orange,gray', '0.56"x1",1"x1",1"x2",2"x1"', 'MK2010YEY.jpg'),
(18, 'product18', 0, 0, 1, 0, 'PORCELAIN-MOSAIC ', 'red,green,gray,white', '2"x1",2"x4",1"x6",1"x3"', 'MK2011YEY.jpg'),
(19, 'product19', 0, 0, 1, 0, 'PORCELAIN-MOSAIC ', 'green,blue,green,yellow', '1"x1",2"x1",3"x1",1"x4"', 'MK2012YEY.jpg'),
(20, 'product20', 0, 0, 0, 1, 'PORCELAIN-MOSAIC ', 'black,red,green,orange,black,blue', '1"x1",2"x1",1"x3",2"x2"', 'MK2013YEY.jpg'),
(21, 'product21', 0, 0, 0, 1, 'PORCELAIN-MOSAIC ', 'red,green,gray,black', '1"x1",2"x1",1"x4",1"x4"', 'MK-2014.jpg'),
(22, 'product22', 0, 0, 0, 1, 'PORCELAIN-MOSAIC ', 'orange,red,brown,green,gray', '1"x1",2"x2",2"x4",2"x1"', 'MK2014YEY.jpg'),
(23, 'product23', 0, 0, 0, 1, 'CERAMIC-MOSAIC', 'blue,gray,red,orange', '1"x1",2"x1",0.56"x1",2"x3"', 'MK-2015.jpg'),
(24, 'product24', 0, 0, 0, 1, 'CERAMIC-MOSAIC', 'blue,red,green,black,blue', '2"x1",1"x12",1"x1"', 'MK2015YEY.jpg'),
(25, 'product25', 0, 0, 0, 1, 'CERAMIC-MOSAIC', 'red,gray,black,yellow', '2"x1",1"x2",3"x1",1"x3"', 'MK2016YEY.jpg'),
(26, 'product26', 0, 0, 0, 1, 'CRACK-MOSAIC', 'black,gray,white,green', '0.56"x1",1"x2",1"x3",2"x1"', 'MK-2017.jpg'),
(27, 'product27', 1, 0, 0, 0, 'CRACK-MOSAIC', 'brown,red,green', '0.52"x6",1"x6"', 'MK2017YEY.jpg'),
(28, 'product28', 0, 1, 0, 0, 'QUARTZ', 'red,green', '0.5"x6",1" x2"', 'MK2018YEY.jpg'),
(29, 'product29', 0, 1, 0, 0, 'QUARTZ', 'blue,orange', '4"x4",1"x2"', 'MK-2019L.jpg'),
(30, 'product30', 1, 0, 0, 0, 'QUARTZ', 'black,white', '2"x4",0.5"x1",4"x4"', 'MK-2019LG.jpg'),
(31, 'product31', 0, 0, 1, 0, 'QUARTZ', 'white,red', '4"x8",2"x3",1"x2"', 'MK-2019LM.jpg'),
(32, 'product32', 1, 0, 0, 0, 'QUARTZ', 'green,blue', '6"x36",6"x6",6"x3"', 'MK-2019LR.jpg'),
(33, 'product33', 0, 0, 1, 0, 'QUARTZ', 'white,black', '1"x3",2"x2"', 'MK2019YEY.jpg'),
(34, 'product34', 0, 1, 0, 0, 'QUARTZ', 'white,red,green', '1"x6",1"x2"', 'MK2020YEY.jpg'),
(35, 'product35', 0, 0, 0, 1, 'QUARTZ', 'red,black,green', '3"x6",1"x1",1"x2"', 'MK-7999.jpg'),
(36, 'product37', 0, 0, 0, 1, 'QUARTZ', 'red,white', '2"x6",1"x6"', 'MK-8002.jpg'),
(37, 'MK-8020', 0, 0, 0, 1, 'QUARTZ', 'red,black', '1"x2",2"x2"', 'MK-8020.jpg'),
(38, 'MK-9001', 0, 0, 1, 0, 'QUARTZ', 'white,yellow', '1"x16",2"x1"', 'MK-9001.jpg'),
(39, 'MK-9736', 0, 0, 1, 0, 'QUARTZ', 'red,white', '1"x6",2"x6"', 'MK-9736.jpg'),
(40, 'MK-9775', 0, 0, 1, 0, 'QUARTZ', 'white,black,green', '8"x8",1"x4",2"x2"', 'MK-9775.jpg'),
(41, 'MK-9902', 1, 0, 0, 0, 'QUARTZ', 'red,green', '2"x2",2"x1"', 'MK-9902.jpg'),
(42, 'MK-9904', 1, 0, 0, 0, 'QUARTZ', 'red,green', '1"x2",2"x2"', 'MK-9904.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
