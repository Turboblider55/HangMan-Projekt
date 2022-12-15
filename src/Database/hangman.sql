-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Dec 11. 20:31
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `hangman`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `words`
--

CREATE TABLE `words` (
  `id` int(11) NOT NULL,
  `word` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `category` int(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `words`
--

INSERT INTO `words` (`id`, `word`, `category`) VALUES
(1, 'kőolaj', 0),
(2, 'ruháskosár', 0),
(3, 'odvas', 0),
(4, 'balladáskönyv', 0),
(5, 'habarcs', 0),
(6, 'fapad', 0),
(7, 'benzingőz', 0),
(8, 'bundáskenyér', 0),
(9, 'fapapucs', 0),
(10, 'bakkecske', 0),
(11, 'világítótorony', 0),
(12, 'gyapjuszőnyeg', 0),
(13, 'szobainas', 0),
(14, 'selyemhernyó', 0),
(15, 'gyerekzár', 0),
(16, 'kősó', 0),
(17, 'vesepecsenye', 0),
(18, 'almafa', 0),
(19, 'munkásosztály', 0),
(20, 'borbély', 0),
(21, 'gondolatolvasás', 0),
(22, 'kör', 0),
(23, 'tojás', 0),
(24, 'számmisztika', 0),
(25, 'elemlámpa', 0),
(26, 'kenyérpirító', 0),
(27, 'pásztorkutya', 0),
(28, 'családfakutatás', 0),
(29, 'ködlámpa', 0),
(30, 'szervkereskedelem', 0),
(31, 'rakottkrumpli', 0),
(32, 'éjjeliszekrény', 0),
(33, 'befőttesüveg', 0),
(34, 'széndioxid', 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `words`
--
ALTER TABLE `words`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
