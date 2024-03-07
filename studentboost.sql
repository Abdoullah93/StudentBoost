-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : ven. 08 mars 2024 à 00:10
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `studentboost`
--

-- --------------------------------------------------------

--
-- Structure de la table `calendar_event_master`
--

CREATE TABLE `calendar_event_master` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(255) DEFAULT NULL,
  `event_start_date` date DEFAULT NULL,
  `event_end_date` date DEFAULT NULL,
  `event_color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pomodoro`
--

CREATE TABLE `pomodoro` (
  `user_id` varchar(16) NOT NULL,
  `nom_session` varchar(16) NOT NULL,
  `durée_session` smallint(6) NOT NULL,
  `date_session` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pomodoro`
--

INSERT INTO `pomodoro` (`user_id`, `nom_session`, `durée_session`, `date_session`) VALUES
('test_abdoullah', 'Algorithmique', 25, '2024-03-02 21:40:46'),
('test_abdoullah', 'Algorithmique', 25, '2024-03-02 21:43:58'),
('test_abdoullah', 'Algorithmique', 25, '2024-03-02 21:44:09'),
('test_abdoullah', 'Algo Graphes', 25, '2024-03-02 21:51:27'),
('test_abdoullah', 'Algèbre', 25, '2024-03-03 14:00:32'),
('test_abdoullah', 'Dev Web', 90, '2024-03-03 14:25:46'),
('test_abdoullah', 'Dev Web', 120, '2024-03-03 17:01:13'),
('test_abdoullah', 'Dev Web', 120, '2024-03-03 17:01:48'),
('test_abdoullah', 'Algo Graphes', 25, '2024-03-03 18:44:06'),
('test_abdoullah', 'Java', 50, '2024-03-03 18:47:28'),
('test_abdoullah', 'Tiramisu', 30, '2024-03-04 08:27:25'),
('test_abdoullah', 'TIramisu', 15, '2024-03-04 08:28:56'),
('test_abdoullah', 'Tiramisu', 15, '2024-03-04 08:29:15'),
('test_abdoullah', 'Java', 60, '2024-03-04 10:55:07'),
('test_abdoullah', 'Algo Graphes', 60, '2024-03-04 11:47:04'),
('test_abdoullah', 'Dev Web', 120, '2024-03-07 17:46:30'),
('test_abdoullah', 'Sport', 25, '2024-03-07 19:34:41'),
('test_abdoullah', 'Sport', 25, '2024-03-07 19:45:58'),
('test_abdoullah', 'Sport', 25, '2024-03-07 19:46:19'),
('', 'Sport', 25, '2024-03-07 19:46:48'),
('', 'Sport', 25, '2024-03-07 19:47:14'),
('1', 'Sport', 25, '2024-03-07 19:48:36'),
('1', 'Manger', 25, '2024-03-07 19:49:31'),
('1', 'Sport', 25, '2024-03-07 21:18:53'),
('1', 'fgfsd', 25, '2024-03-07 21:21:34'),
('1', 'fgfsd', 25, '2024-03-07 21:22:24'),
('1', 'fgesge', 25, '2024-03-07 21:22:33'),
('1', 'fgesge', 25, '2024-03-07 21:26:10'),
('1', 'hfdfc', 25, '2024-03-07 21:50:13');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `user_id` int(11) NOT NULL,
  `mail` text NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`user_id`, `mail`, `password`, `name`, `surname`) VALUES
(1, 'abdoullah@gmail.com', 'adminadmin', 'Abdoullah', 'Ichou'),
(2, 'adam@gmail.com', 'adminadmin', 'Adam', 'Mamoun');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `calendar_event_master`
--
ALTER TABLE `calendar_event_master`
  ADD PRIMARY KEY (`event_id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `calendar_event_master`
--
ALTER TABLE `calendar_event_master`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
