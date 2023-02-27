-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: flexzone.v2
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comidas`
--

DROP TABLE IF EXISTS `comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas` (
  `id_comida` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `tamanio` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_comida`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas`
--

LOCK TABLES `comidas` WRITE;
/*!40000 ALTER TABLE `comidas` DISABLE KEYS */;
INSERT INTO `comidas` VALUES (1,'HAMBURGUESA',85.00,'',NULL,NULL),(2,'BONELESS ',100.00,'400GR',NULL,NULL);
/*!40000 ALTER TABLE `comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id_compra` int NOT NULL AUTO_INCREMENT,
  `id_usuario` char(36) NOT NULL,
  `total_compra` decimal(10,2) NOT NULL,
  `subtotal_compra` decimal(10,2) NOT NULL,
  `total_productos` int NOT NULL,
  `CFDI` varchar(10) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `Id_usuario_idx` (`id_usuario`),
  CONSTRAINT `Id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`idusuario`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=329 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Esta tabla refleja el proceso de regritrar una factura de productos comprados';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (324,'da5bacbd-037e-44b3-a7d5-fe2399f626e7',2000.00,1000.00,10,'G01','2023-02-23 05:08:31','2023-02-23 05:08:31'),(325,'da5bacbd-037e-44b3-a7d5-fe2399f626e7',2000.00,1000.00,10,'G03','2023-02-23 05:16:28','2023-02-23 05:16:28'),(326,'da5bacbd-037e-44b3-a7d5-fe2399f626e7',2000.00,1000.00,10,'G03','2023-02-23 05:20:31','2023-02-23 05:20:31'),(327,'da5bacbd-037e-44b3-a7d5-fe2399f626e7',2000.00,1000.00,17,'G03','2023-02-23 05:38:27','2023-02-23 05:38:27'),(328,'da5bacbd-037e-44b3-a7d5-fe2399f626e7',2000.00,1000.00,17,'G03','2023-02-23 05:49:46','2023-02-23 05:49:46');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamentos` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamentos`
--

LOCK TABLES `departamentos` WRITE;
/*!40000 ALTER TABLE `departamentos` DISABLE KEYS */;
INSERT INTO `departamentos` VALUES (100,'Bebidas',NULL,NULL),(200,'Snacks',NULL,NULL),(300,'Verduras y frutas',NULL,NULL),(301,'Dulcería',NULL,NULL);
/*!40000 ALTER TABLE `departamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entradas`
--

DROP TABLE IF EXISTS `entradas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entradas` (
  `id_entrada` int NOT NULL AUTO_INCREMENT,
  `codigo_barras` varchar(255) NOT NULL,
  `id_usuario` char(36) NOT NULL,
  `cantidad_ingresada` int NOT NULL,
  `fecha_caducidad` date DEFAULT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`id_entrada`),
  KEY `fk_idUsuario_idx` (`id_usuario`),
  CONSTRAINT `fk_idusuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`idusuario`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='En esta tabala van las entradas, es decir si en una compra se ingresan 2 productos diferentes aqui se ageegan 2 filas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entradas`
--

LOCK TABLES `entradas` WRITE;
/*!40000 ALTER TABLE `entradas` DISABLE KEYS */;
INSERT INTO `entradas` VALUES (39,'7622210259008','da5bacbd-037e-44b3-a7d5-fe2399f626e7',10,'2023-12-08','2023-02-23 05:08:31','2023-02-23 05:08:31'),(40,'7622210259009','da5bacbd-037e-44b3-a7d5-fe2399f626e7',10,'2023-12-08','2023-02-23 05:16:28','2023-02-23 05:16:28'),(41,'7622210259009','da5bacbd-037e-44b3-a7d5-fe2399f626e7',10,'2023-12-08','2023-02-23 05:20:31','2023-02-23 05:20:31'),(42,'7622210259009','da5bacbd-037e-44b3-a7d5-fe2399f626e7',10,'2023-12-08','2023-02-23 05:38:27','2023-02-23 05:38:27'),(43,'7622210259001','da5bacbd-037e-44b3-a7d5-fe2399f626e7',3,'2023-12-08','2023-02-23 05:38:27','2023-02-23 05:38:27'),(44,'7622210259010','da5bacbd-037e-44b3-a7d5-fe2399f626e7',4,'2023-12-08','2023-02-23 05:38:27','2023-02-23 05:38:27'),(45,'7622210259009','da5bacbd-037e-44b3-a7d5-fe2399f626e7',10,'2023-12-08','2023-02-23 05:49:46','2023-02-23 05:49:46'),(46,'7622210259001','da5bacbd-037e-44b3-a7d5-fe2399f626e7',3,'2023-12-08','2023-02-23 05:49:46','2023-02-23 05:49:46'),(47,'7622210259010','da5bacbd-037e-44b3-a7d5-fe2399f626e7',4,'2023-12-08','2023-02-23 05:49:46','2023-02-23 05:49:46');
/*!40000 ALTER TABLE `entradas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insumos`
--

DROP TABLE IF EXISTS `insumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insumos` (
  `id_insumo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `codigo_barras` varchar(255) NOT NULL,
  `precio_compra` decimal(8,2) NOT NULL,
  `unidad_medida` varchar(45) NOT NULL,
  `stock` int NOT NULL,
  `estado` tinyint NOT NULL,
  `id_proveedor` int NOT NULL,
  `id_departamento` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_insumo`),
  KEY `id_departamento_idx` (`id_departamento`),
  KEY `id_proveedor_idx` (`id_proveedor`),
  CONSTRAINT `fk_insumos_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON UPDATE CASCADE,
  CONSTRAINT `fk_insumos_proveedor` FOREIGN KEY (`id_proveedor`) REFERENCES `providers` (`id_proveedor`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumos`
--

LOCK TABLES `insumos` WRITE;
/*!40000 ALTER TABLE `insumos` DISABLE KEYS */;
INSERT INTO `insumos` VALUES (1,'CHAROLA MULTI USOS CAFETERIA','7622210259009',134.00,'pieza',352,0,57,200,NULL,'2023-02-23 05:49:46'),(2,'JAMON PAVO','7622210259010',203.00,'pieza',145,0,57,200,NULL,'2023-02-23 05:49:46'),(3,'LECHE LALA DESLACTOSADA','7622210259001',29.00,'LT',91,0,57,200,NULL,'2023-02-23 05:49:46');
/*!40000 ALTER TABLE `insumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mermas`
--

DROP TABLE IF EXISTS `mermas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mermas` (
  `id_merma` int NOT NULL AUTO_INCREMENT,
  `id_usuario` char(36) NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_merma`),
  KEY `fk_idUsuario_idx` (`id_usuario`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `fk_id_Usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`idusuario`) ON UPDATE CASCADE,
  CONSTRAINT `mermas_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `products` (`idproducto`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mermas`
--

LOCK TABLES `mermas` WRITE;
/*!40000 ALTER TABLE `mermas` DISABLE KEYS */;
INSERT INTO `mermas` VALUES (1,'da5bacbd-037e-44b3-a7d5-fe2399f626e7',12,3,'Enpaque abierto','2023-02-18 07:02:43','2023-02-18 07:02:43');
/*!40000 ALTER TABLE `mermas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `codigo_barras` varchar(255) NOT NULL,
  `precio_venta` decimal(8,2) NOT NULL,
  `precio_compra` decimal(8,2) NOT NULL,
  `stock` int NOT NULL,
  `tamanio` varchar(255) NOT NULL,
  `estado` tinyint NOT NULL,
  `id_departamento` int NOT NULL,
  `id_proveedor` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idproducto`),
  KEY `fk_departamento_idx` (`id_departamento`) /*!80000 INVISIBLE */,
  KEY `fk_proveedor_idx` (`id_proveedor`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`) ON UPDATE CASCADE,
  CONSTRAINT `fk_proveedor` FOREIGN KEY (`id_proveedor`) REFERENCES `providers` (`id_proveedor`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (12,'CARLOS V DUO','7622210259008',13.00,5.00,282,'35 GR',1,301,55,NULL,'2023-02-23 05:08:31'),(13,'BUBULUBU','7622210259006',12.00,5.00,1227,'50 GR',1,301,56,'2023-02-07 01:49:31','2023-02-19 00:12:29'),(14,'CHIPS AHOY','7622210259004',25.00,10.00,230,'35 GR',1,301,56,'2023-02-16 02:14:36','2023-02-19 00:12:29');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `providers`
--

DROP TABLE IF EXISTS `providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `providers` (
  `id_proveedor` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `RFC` varchar(100) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `estado` tinyint NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `providers`
--

LOCK TABLES `providers` WRITE;
/*!40000 ALTER TABLE `providers` DISABLE KEYS */;
INSERT INTO `providers` VALUES (55,'SABRITAS','SAB730510K44','SNACKS',1,NULL,'2023-02-16 01:50:26'),(56,'RICOLINO','PRI190815SU0','SNACKS',1,NULL,NULL),(57,'COSTCO','CME910715UB9','ABARROTES',1,'2023-02-16 01:02:13','2023-02-16 01:02:13');
/*!40000 ALTER TABLE `providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `idrol` int NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `level` int NOT NULL,
  `area` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (100,'USER',1,'FRONTDEX/CAFETERIA',NULL,NULL),(200,'SUPER',2,'ALMACEN',NULL,NULL),(300,'ADMIN',3,'GERENCIA',NULL,NULL);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` char(36) NOT NULL,
  `idrol` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidoPaterno` varchar(255) NOT NULL,
  `apellidoMaterno` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `estado` tinyint NOT NULL,
  `celular` char(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `idusuario_UNIQUE` (`idusuario`),
  UNIQUE KEY `usernamel_UNIQUE` (`username`),
  KEY `idrol_idx` (`idrol`),
  CONSTRAINT `idrol` FOREIGN KEY (`idrol`) REFERENCES `rols` (`idrol`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('da5bacbd-037e-44b3-a7d5-fe2399f626e7',300,'Ale','de la llave','Flores','CarlosAlexisdelallave-64468596','$2a$10$AAqgT2VMmI0Bn0NsVFEjoeU1z2/NskKbR9vbpyKWu87Nh3Lc.R53W',1,'0','test2@gmail.com.mx','0000-00-00','2023-01-31 07:33:08','2023-02-18 05:10:40');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-24 12:19:02
