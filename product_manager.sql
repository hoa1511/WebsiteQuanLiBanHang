-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2021 at 09:25 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product_manager`
CREATE DATABASE product_manager;
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `Id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`Id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `myproduct_tb`
--

CREATE TABLE `myproduct_tb` (
  `STT` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `Price` int(11) NOT NULL,
  `Status` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `Picture` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `myproduct_tb`
--

INSERT INTO `myproduct_tb` (`STT`, `Name`, `Price`, `Status`, `SoLuong`, `Picture`) VALUES
(2, 'Product2', 40000, 'Còn Hàng', 2, 'Product2.jpeg'),
(3, 'Black Rose', 9999999, 'Còn Hàng', 1, 'Black Rose.jpeg'),
(4, 'Lavender tea', 50000, 'Còn Hàng', 2, 'Lavender tea.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `myproduct_tb`
--
ALTER TABLE `myproduct_tb`
  ADD PRIMARY KEY (`STT`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `myproduct_tb`
--
ALTER TABLE `myproduct_tb`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
