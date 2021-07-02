/* Cria o database Serra Junior Engenharia */
CREATE SCHEMA IF NOT EXISTS `serra_junior_engenharia`

/* Cria uma tabela "Funcoes" dentro do database Serra Junior Engenharia */
CREATE TABLE IF NOT EXISTS `serra_junior_engenharia`.`funcoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB

/* Cria uma tabela "Cursos" dentro do database Serra Junior Engenharia */
CREATE TABLE IF NOT EXISTS `serra_junior_engenharia`.`cursos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB

/* Cria uma tabela "Integrantes" dentro do database Serra Junior Engenharia */
CREATE TABLE IF NOT EXISTS `serra_junior_engenharia`.`integrantes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `cpf` VARCHAR(45) NULL,
  `cursos_id` INT NOT NULL,
  `funcoes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `cursos_id_idx` (`cursos_id` ASC) VISIBLE,
  INDEX `funcoes_id_idx` (`funcoes_id` ASC) VISIBLE,
  CONSTRAINT `cursos_id`
    FOREIGN KEY (`cursos_id`)
    REFERENCES `serra_junior_engenharia`.`cursos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `funcoes_id`
    FOREIGN KEY (`funcoes_id`)
    REFERENCES `serra_junior_engenharia`.`funcoes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB