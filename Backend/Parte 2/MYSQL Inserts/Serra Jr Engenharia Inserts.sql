/* Insere dois campos na parte funcoes */
INSERT INTO `serra_junior_engenharia`.`funcoes` (`id`, `nome`) VALUES (1, 'Diretoria');
INSERT INTO `serra_junior_engenharia`.`funcoes` (`id`, `nome`) VALUES (2, 'Acessoria');

/* Insere dois campos na parte cursos */
INSERT INTO `serra_junior_engenharia`.`cursos` (`id`, `nome`) VALUES (1, 'Computação');
INSERT INTO `serra_junior_engenharia`.`cursos` (`id`, `nome`) VALUES (2, 'Mecânica');

/* Insere um campo de informação na parte integrantes */
INSERT INTO `serra_junior_engenharia`.`integrantes` (`id`, `nome`, `cpf`, `cursos_id`, `funcoes_id`) VALUES (1, 'Guilherme', '13521894703', 2, 2);